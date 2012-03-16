--- 
layout: post
title: New Website Design
tags: 
- Comment
- Programming
- WebApps
status: publish
type: post
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "2"
  aktt_tweeted: "1"
  _wp_old_slug: ""
  dsq_thread_id: "251342749"
---
The recent release of Wordpress 3.0 has prompted my to go for an overhaul of this site, making use of some of the jazzy new features in this latest version.
<h3>Custom Post Types</h3>
The introduction of custom post types is a feature that many WP users have been waiting for for a while, now it is here it is awesome. I've created a custom post type ('papertoy'), and <a href="http://kovshenin.com/archives/extending-custom-post-types-in-wordpress-3-0/">extended it with custom meta fields</a>, to make managing my paper toys far easier than before. I may write a post with more detail on this some time.
<h3>Editable Menu</h3>
WP 3 allows menus to be managed in a wonderful interface in the admin console. Posts, pages, categories, etc, can all be dragged and dropped around to create a menu hierarchy. And it is <a href="http://justintadlock.com/archives/2010/06/01/goodbye-headaches-hello-menus">incredibly easy to code</a> in to a theme.
<h3>Widgets</h3>
Ok, these aren't new. But as of WP2.8 there has been a <a href="http://codex.wordpress.org/Widgets_API#Developing_Widgets_on_2.8.2B">new widgets API</a>, which makes the creation of widgets a billion times easier than it was before. I've created two widgets for this new theme; one with links to my social network accounts, and another to display my latest paper toys.

The paper toys widget basically pulls an image (stored in a meta field) from each of my 'papertoy' posts and displays it with a link to the page itself.If you're planning on doing something similar yourself, you may to check out <a href="http://www.craig-russell.co.uk/wordpress-loop-in-a-widget/">this problem (and fix) </a>when using the WP loop with the new widgets API.

The social networks widget is pretty simple, I may publish it in the future, but right now I've got<a href="http://www.craig-russell.co.uk/msc-project-a-go-go/"> other things going on</a>. Oh, the icons I used are from <a href="http://www.komodomedia.com/blog/2009/06/social-network-icon-pack/">here</a>.
