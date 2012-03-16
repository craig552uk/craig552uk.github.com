--- 
layout: post
title: Single CMS - The One Page CMS
tags: 
- Programming
- Software
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "420168302"
---
Recently, in my day job, a request came in for a single page site. The requesters wanted to edit the content of the site without worrying about the style of the page. The solution we went with utilised our existing CMS system, but nevertheless I felt my developer itch needing scratching. So I whipped up a simple little single page CMS, and called it (wait for it) Single CMS.

It makes use of <a href="http://www.tinymce.com/">TinyMCE</a> for the editor, so not HTML needed. The user-generated content is filtered through the damn handy <a href="http://php.net/manual/en/function.strip-tags.php"><code>strip_tags</code></a> function and saved in a text file that is writeable by the server.

The single page itself can be styled independently and just calls a few php includes to insert the content HTML. There's options in the <code>config.php</code> file to set the admin username and password along with site meta, error messages and a few other bits and bobs. Single CMS is bundled with <a href="http://jquery.com/">JQuery</a> and <a href="http://www.modernizr.com/">modernizr</a> and makes use of most of the sweet stuff from the <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a> project.

If you want to have a play around, the source is up on <a href="https://github.com/craig552uk/SingleCMS">GitHub</a>. It's <a href="http://www.opensource.org/licenses/mit-license.php">MIT Licenced</a>, so feel free to use, abuse and reuse.

<a href="https://github.com/craig552uk/SingleCMS/zipball/master">Download Simple CMS Here</a>
