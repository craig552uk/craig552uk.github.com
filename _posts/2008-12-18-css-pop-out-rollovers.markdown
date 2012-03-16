--- 
layout: post
title: CSS Pop-Out Rollovers
tags: 
- Programming
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  _syntaxhighlighter_encoded: "1"
  aktt_notify_twitter: "yes"
  dsq_thread_id: "217963383"
---
Here's how to acheive the appearence of text popping out as you hover over it with your mouse. It's a simple effect that can be acheived with nothing more than a little CSS. I've used this on the title's of each blog post, but I also think it looks quite effective in lists, like in the Categories section in the sidebar.

All you need is the following code in your style sheet.

    a:hover {text-spacing: 1px; padding-left: -3px;}

Obviously, adjust the figures to taste.

This will work in all browsers, as long as its applied to the anchor (a) element, IE6 doesn't recognise the :hover pseudo class when applied to other objects.
