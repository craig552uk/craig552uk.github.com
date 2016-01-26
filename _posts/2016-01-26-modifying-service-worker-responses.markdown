---
type: post
title: Modifying responses in Service Worker requests
description: How to modify a response payload using JavaScript Service Workers
---

Service Workers are an emerging JavaScript technology that allows you to run a background worker process for your app. One of the many use-cases they are designed for is to proxy web requests made by your app, so you can implement more intelligent handling of requests and resposnes (locally caching resources for example).

The [Mozilla developer docs][1] provide a great walk-through demonstrating how to provide custom responses to requests, including fetching resources from a cache and even creating completely new responses. 

```javascript
self.addEventListener('fetch', function(event){
    console.log('Caught request for ' + event.request.url);
    event.respondWith(new Response("Hello world!"));
});
```

However if you want to modify the response coming back from the server, this can be quite tricky. The first thing you'l have to do is catch the fetch event and re-issue the request. This is so we can catch the returned response object. (Note we're using the new [fetch API][4] here).

```javascript
self.addEventListener('fetch', function(event){
    console.log('Caught request for ' + event.request.url);
    event.respondWith(
        fetch(event.request).then(function(response){
            console.log('Response', response);
            return response;  
        })
    );
});
```

You might think that you could modify this response object before returning it, but you'd be wrong. The properties of the response object are read-only, so we can't touch them. The [Response][2] API does include a `clone()` method for creating a copy of the response, but this too is read-only. We have to use the Response constructor to build a new response using the properties of the old.

The Response constructor takes two arguments, the first being the body of the response (this can be a string, blob and few other things) the second is an object specifying the status code, status text and headers of the response.

```javascript

var init = {
    status: 200,
    statusText: "OK",
    headers: {'Content-Type': 'text/plain'}
};

var response = new Response("Hello World!", init);

```

For status code and status text we can choose to set these directly or read the values from the request.

```javascript
var init = {
    status:     response.status,
    statusText: response.statusText
}

```

The response headers are a [Headers][3] object, which has various methods for reading the stored values. So we can clone the headers like so, adding our own into the mix.

```javascript

init.headers = {'X-Foo': 'My Custom Header'};

response.headers.forEach(function(v,k){
    init.headers[k] = v;
})

```

Finally we need to clone the response body, using it to create our new response object. Responses have several methods for reading the body as text, blobs and a few others. All of these return promises (more new stuff) so we use it like so.

```javascript

response.text().then(function(body){
    return new Response(body + "Foo Bar", init);
})

```

Putting this all together we can return a modified response to our application like so.

```javascript
self.addEventListener('fetch', function(event){
    console.log('Caught request for ' + event.request.url);
    event.respondWith(
        fetch(event.request).then(function(response){
            var init = {
                status:     response.status,
                statusText: response.statusText,
                headers:    {'X-Foo': 'My Custom Header'}
            };

            response.headers.forEach(function(v,k){
                init.headers[k] = v;
            });

            return response.text().then(function(body){
                return new Response(body + "Foo Bar", init);
            });
        })
    );
});
```



[1]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Headers
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
