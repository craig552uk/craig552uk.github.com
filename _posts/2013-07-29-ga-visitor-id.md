---
layout: post
title: How to store Visitor ID in Google Analytics
description: Google analytics doesn't store records for each individual visitor, but with a bit of JavaScript magic, it can be done.
---
Google analytics doesn't store records for each individual visitor, but with a bit of JavaScript magic, it can be done.

Google Analytics uses several cookies to help monitor visitors on your site, among the data stored in these is a [visitor identifier][1].
This is a unique number that GA uses but doesn't store. It is possible to read this value out of the cookie and push it back up to GA in a custom variable, where it can be used in reports.

<script src="https://gist.github.com/craig552uk/6103720.js"></script>

Note that the `_setCustomVar` parameter is wrapped in a function, so that it isn't called until after the GA code has run. 
This ensures that the cookie has already been set before trying to read it.

On it's own this is interesting information, but it's made all-the-more useful when [tied together with your CRM or data warehouse][2].

[1]: http://www.analytics-ninja.com/blog/2011/12/how-unique-are-unique-visitors-in-google-analytics.html
[2]: http://cutroni.com/blog/2011/05/05/merging-google-analytics-with-your-data-warehouse/