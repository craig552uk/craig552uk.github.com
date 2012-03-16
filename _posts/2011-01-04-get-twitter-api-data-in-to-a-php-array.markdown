--- 
layout: post
title: Get Twitter API Data in to a PHP Array
tags: 
- Programming
- Tutorials
status: publish
type: post
published: true
meta: 
  _syntaxhighlighter_encoded: "1"
  _edit_last: "2"
  _wp_old_slug: ""
  dsq_thread_id: "217841593"
---
I've been playing around with the <a href="http://dev.twitter.com/doc">Twitter API</a> a bit today. 

Here's a handy little code snippet to get data from the api in to a php array.

    $url = "http://api.twitter.com/1/statuses/public_timeline.json";
    $json = file_get_contents($url);
    $data = json_decode($json);
    print_r($data);
