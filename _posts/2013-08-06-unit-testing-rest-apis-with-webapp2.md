---
layout: post
title: Unit Testing Third-Party REST APIs in Python
description: Writing unit test for methods that use 3rd party APIs can be a real pain. Here's how to do it in Python for a WebApp2 project.
---
I've wrestled with this problem for some time, and finally cracked it. Here's how to write unit tests for methods that use third-party REST APIs.

The principle is actually fairly basic, in your tests you have to "mock" the role of the third party in any requests. So for an oAuth2 authentication handshake, you have to play the role of the identity provider. This sounds simple enough, but figuring out how to implement it can be a real pain.

I've got a project that makes use of various Google APIs. Some of these are supported by the [Google API Client python libraries][1] but some aren't. In those cases I use [httplib2][2] directly and parse the responses myself. To simplify the handling of authentication across both I use the [oAuth2Client libraries][3] also.

To write unit tests for my project, I've had to mock responses for all these different API requests.

Mocking requests basically means overriding the bit of code that sends a request out to a server. Instead of making a request to the third party, you return a dummy response, formatted to pass any verification in the client library.

The libraries I'm using use [httplib2][2] behind the scenes, as do many (most?) python REST API libraries. Overriding the `request` method, I can return a dummy response to ensure that in a test environment, I control the responses.

This is my mock http client class. The `request` method returns an appropriate response for recognised URIs. For unrecognised URIs a message is logged, highlighting the URI that I need to mock a response for. It also returns an empty `Response` object, so I don't get distracted by `NoneType` errors.

    from httplib2 import Response
    import logging

    class MockHttp(object):
        def request(self, uri, method="GET", body=None, headers=None, redirections=1, connection_type=None):

            if 'https://accounts.google.com/o/oauth2/token' in uri:
                headers = {'status': '200'}
                body = '{"access_token":"dummy_token"}'
                return Response(headers), body

            logging.error("No response for '%s'" % uri)
            return Response({}), ''

In actual projects I keep the response body content in seperate files as some of them can be quite large. I've left that part out for brevity.

Using it in a unit test is very straight forward. Simply replace the http client instance in your application with the mock client. In this example `main` is my [WebApp2][4] application and `google_api` is my wrapper library for Google API calls.

    import unittest
    from tests.utils import MockHttp
    import main
    import google_api

    class TestAuthentication(unittest.TestCase):

        def test_oauth2callback(self):
            # Replace http client in wrapper library with mock client
            google_api.httplib2.Http = MockHttp
            uri = '/auth/oauth2callback?code=dummy_code'
            response = main.app.get_response(uri)
            self.assertEqual(response.status_int, 200)

That's pretty much it.

Can't believe it too me so long to figure this out.

[1]: https://developers.google.com/api-client-library/python/
[2]: https://code.google.com/p/httplib2/
[3]: https://code.google.com/p/google-api-python-client/
[4]: https://webapp-improved.appspot.com/
