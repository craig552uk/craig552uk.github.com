--- 
layout: post
title: Don't Trust IE9's Document Modes
tags: 
- Comment
- Internet
- Programming
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "258323361"
---
Internet Explorer 9 allows you to emulate the behaviour of IE8 and IE7 by switching the <a href="http://blogs.msdn.com/b/ie/archive/2010/10/19/testing-sites-with-browser-mode-vs-doc-mode.aspx">Browser Mode and Document Modes</a>. In brief, Browser Mode tells IE9 how to act like older browsers, Document Mode tells it how to render the page. Confusing? Yes. But don't bother trying to figure out the difference because you won't be using it to test your sites. Here's why.

> IE9’s emulations of older versions of IE are not the same as running the old version. The code is different. The emulations are very close but not exactly the same.

That's from <a href="http://blogs.msdn.com/b/ie/archive/2011/02/04/testing-multiple-versions-of-ie-on-one-pc.aspx#10125034">Ted Johnson</a>, a MS Engineer.

So adding IE9 to your browser testing suite won't save you the trouble of having to run IE7 and IE8 too. And you'll never waste your time changing "The Modes".
