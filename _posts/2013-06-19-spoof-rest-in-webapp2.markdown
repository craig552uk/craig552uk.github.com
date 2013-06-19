---
layout: post
title: How to Spoof RESTful Verbs in WebApp2
description: WebApp2 (the python micro-framework in Google App Engine) supports RESTful verbs, but most browsers don't. Here's how to build support for these verbs in to your application.
---
[WebApp2][1] is the default Python micro-framework that ships with [Google App Engine][2]. It it light-weight and easy to use, but comes without many bells and whistles. 

The [framework supports RESTful HTTP verbs][3] (GET, POST, PUT, HEAD, OPTIONS, DELETE, TRACE) but most browsers only support GET and POST.

Typically many modern frameworks allow you to spoof these requests by [POSTing a hidden field][4]. WebApp2 does not have this ability built in, but it is quite simple to add.

The code sample below shows a Python decorator that can be applied to the `get()` or `post()` methods in a request handler. It looks for the values `PUT` or `DELETE` in a parameter called `http_verb`, if found it calls the appropriate method in the handler.


        def spoof_rest(func):
            """ Decorator to handle spoofing RESTful verbs """
            def inner(handler):
                params = handler.request.params
                if 'http_verb' in params:
                    if params['http_verb'] == 'PUT':
                        handler.put()
                    elif params['http_verb'] == 'DELETE':
                        handler.delete()
            return inner


        class MyRoute(RequestHandler):

            @spoof_rest
            def get(self):
                self.response.write("GET request")

            @spoof_rest
            def post(self):
                self.response.write("POST request")

            def put(self):
                self.response.write("PUT request")

            def delete(self):
                self.response.write("DELETE request")


Example requests:

        curl -X GET localhost:8080
        GET request

        curl -X POST localhost:8080
        POST request

        curl -X GET localhost:8080?http_verb=PUT
        PUT request

        curl -X POST --data http_verb=DELETE localhost:8080
        DELETE request

[1]: https://webapp-improved.appspot.com/
[2]: https://developers.google.com/appengine/
[3]: https://developers.google.com/appengine/docs/python/tools/webapp/requesthandlerclass#RequestHandler_post
[4]: http://stackoverflow.com/questions/1856996/doing-a-http-put-from-a-browser