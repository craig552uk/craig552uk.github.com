---
title: How to Send Messages Between Service Workers and Clients
description: How to Send Messages Between Service Workers and Clients
layout: post
---
[Service Workers][1] are background processes for web pages. Most of the current excitement around Service Workers is about providing offline web apps, as the Service Worker can manage a local cache of resources syncing back to the server when a connection is available. This is cool, but I want to talk about another use-case for Service Workers, using them to manage communications between multiple web pages.

For example, you may have an application open in multiple browser tabs. A Service Worker can be used to update content in one tab in response to an event triggerred in another, or to update content in all tabs in response to a message pushed from the server.

One Service Worker can control multiple client pages. In fact a Service Worker will automatically take control of any client webpages within its [scope][2]. Scope is a url path within your site, by default this is the base path of the service worker script.

In this demo, we'll use three files `client1.html`, `client2.html` and `service-worker.js`.

First we register the service worker in `client1.html`:

```html
<!doctype html>
<html>
<head>
    <title>Service Worker - Client 1</title>
</head>
<body>
    <script>
        if('serviceWorker' in navigator){
            // Register service worker
            navigator.serviceWorker.register('/service-worker.js').then(function(reg){
                console.log("SW registration succeeded. Scope is "+reg.scope);
            }).catch(function(err){
                console.error("SW registration failed with error "+err);
            });
        }
    </script>
</body>
</html>
```

Next we create a basic Service Worker Script in `service-worker.js`:

```javascript
console.log("SW Startup!");

// Install Service Worker
self.addEventListener('install', function(event){
    console.log('installed!');
});

// Service Worker Active
self.addEventListener('activate', function(event){
    console.log('activated!');
});
```

I won't bother explaining how this works as it's [well documented elsewhere][3].

We also create a basic `client2.html`. We'll only use `client1.html` to register our Servcie Worker, so there's no need to duplicate code here. When it's running the Service Worker will automatically take control of this page as it is within it's scope.

```html
<!doctype html>
<html>
<head>
    <title>Service Worker - Client 2</title>
</head>
<body>
    <script>
    </script>
</body>
</html>
```

If you visit `client1.html` in your browser you should see the registration messages in the console log. In Chrome (48+) you can open an inspector for the Service Worker by clicking "inspect" in "Service Workers" under the "Resources" tab in Dev Tools. When you open `client2.html` in a new tab, you should see it listed under "Controlled Clients" in Dev Tools.

Now we can get on with the interesting stuff...

---

First we're going to make the clients send messages to the Service Worker. So we need to add a message handler in `service-worker.js`:

```javascript
self.addEventListener('message', function(event){
    console.log("SW Received Message: " + event.data);
});
```

Now we can add a send message function to both of the clients.

```javascript
function send_message_to_sw(msg){
    navigator.serviceWorker.controller.postMessage("Client 1 says '"+msg+"'");
}
```

If you call `send_message_to_sw("Hello")` from the console on the client pages, you should see the message displayed on Service Worker console.

We can take this a little further allowing the Service Worker to reply to the message sent by a client. To do this we need to enhance our `send_message_to_sw` function. We use a Message Channel, which provides us with a pair of ports to communicate over. We send a reference to one of these ports along with the message, so the Service Worker can use it to send back a reply. We also add a handler to catch the response message. For convenience we also use a [Promise][4] to handle waiting for the response.

```javascript
function send_message_to_sw(msg){#
    return new Promise(function(resolve, reject){
        // Create a Message Channel
        var msg_chan = new MessageChannel();

        // Handler for recieving message reply from service worker
        msg_chan.port1.onmessage = function(event){
            if(event.data.error){
                reject(event.data.error);
            }else{
                resolve(event.data);
            }
        };

        // Send message to service worker along with port for reply
        navigator.serviceWorker.controller.postMessage("Client 1 says '"+msg+"'", [msg_chan.port2]);
    });
}
```

In `service-worker.js` we modify our listener to send back a reply on the port sent with the message.

```javascript
self.addEventListener('message', function(event){
    console.log("SW Received Message: " + event.data);
    event.ports[0].postMessage("SW Says 'Hello back!'");
});
```

Now if you run `send_message_to_sw("Hello").then(m => console.log(m))` in your client console, you should see the message displayed in the Service Worker console and the reply in the client console. *Note* We're using the Promise `then` function to wait for the response and an [Arrow Function][5] because it's easier to type.

Now we have a mechanism for a client to send a message to the Service Worker and for the Service Worker to send back a reply. You could use this for having a client check on the status of a long-running process, have the Service worker forward a message on to all clients or something else cool.

Magic!

---

Now we're going to allow the Service Worker broadcast a message to all clients and have the clients respond. This uses a similar mechanism as before except the roles are reversed.

First we add a message listener to our clients. This is almost identical to before except we first test for Service Worker support.

```javascript
if('serviceWorker' in navigator){
    // Handler for messages coming from the service worker
    navigator.serviceWorker.addEventListener('message', function(event){
        console.log("Client 1 Received Message: " + event.data);
        event.ports[0].postMessage("Client 1 Says 'Hello back!'");
    });
}
```

Next we add a function on our service worker to send a message to a client. This too is similar, except we need to provide a client object (reference to an open page) so we know where to send the message.

```javascript
function send_message_to_client(client, msg){
    return new Promise(function(resolve, reject){
        var msg_chan = new MessageChannel();

        msg_chan.port1.onmessage = function(event){
            if(event.data.error){
                reject(event.data.error);
            }else{
                resolve(event.data);
            }
        };

        client.postMessage("SW Says: '"+msg+"'", [msg_chan.port2]);
    });
}
```

The Service Worker API provides an interface for getting references to all connected clients. We can wrap this up in a convenience function to broadcast a message to all clients (Note we're using Arrow Functions again). 

```javascript
function send_message_to_all_clients(msg){
    clients.matchAll().then(clients => {
        clients.forEach(client => {
            console.log(client);
            send_message_to_client(client, msg).then(m => console.log("SW Received Message: "+m));
        })
    })
}
```

Now if you run `send_message_to_all_clients('Hello')` in the Service Worker console, you should see the message recieved in all the client consoles and the client replies in the Service Worker console.

More Magic!


[1]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
[2]: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameters
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
