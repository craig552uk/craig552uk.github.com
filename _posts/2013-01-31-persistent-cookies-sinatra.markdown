---
layout: post
title: Using Persistent Cookies in Sinatra
description: How to use persistent cookies in sinatra
---
I'm making a not of this here, because using persistent cookies in [Sinatra][1] doesn't seem to be very well documented anywhere else.

Session cookies can be used in Sinara by setting them against the response object, and getting them from the request.

      get '/set_cookie/?' do
        response.set_cookie 'foo', 'bar'
        erb "cookie set"
      end

      get '/get_cookie/?' do
        erb request.cookies['foo']
      end

If you want to set a persistent cookie, specify the lifetime of the cookie in seconds.
Note that the value becomes part of the hash too.

      get '/set_cookie/?' do
        response.set_cookie 'foo',
          {:value=> 'bar', :max_age => "2592000"}
        erb "cookie set"
      end

      get '/get_cookie/?' do
        erb request.cookies['foo']
      end

I wasted about an hour trawling through code to [find the answer to this][2], hopefully now you won't have to.

[1]: http://sinatrarb.com
[2]: http://rack.rubyforge.org/doc/Rack/Utils.html#method-c-set_cookie_header-21
