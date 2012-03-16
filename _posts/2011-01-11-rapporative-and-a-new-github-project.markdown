--- 
layout: post
title: Rapportive and a New GitHub Project
tags: 
- Internet
- Programming
- Software
- WebApps
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  _wp_old_slug: ""
  dsq_thread_id: "217850862"
---
Thanks to <a href="http://thinkvitamin.com/web-apps/4-ways-to-improve-your-customer-service/">this post on Think Vitamin</a>, I've today discovered <a href="http://rapportive.com/">Rapportive</a>. Rapportive is a browser plugin for Firefox, Safari, Chrome and Mailplane, which displays social network information for your mail contacts. That in itself is alright, but the juicy part is the API. You can write your own "raplets" to pull contact data from any data source and display it in GMail. Rapplets are intended to be self hosted, so you'll need access to a web server to roll you own.

I've written a raplet which displays data from an LDAP directory next to a message thread in GMail. The records are matched against the email address (mail attribute). The data that is returned is easily configurable at the top of the script. 

You can get <a href="https://github.com/craig552uk/LDAP-Raplet">hold of the file on gitHub</a>.
