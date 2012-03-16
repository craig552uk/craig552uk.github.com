--- 
layout: post
title: Refresh Manifest Cache Without .htaccess
tags: 
- Internet
- Programming
- Tutorials
- WebApps
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  _syntaxhighlighter_encoded: "1"
  dsq_thread_id: "222603520"
  _wp_old_slug: ""
---
Manifest caching is one of the <a href="http://www.w3.org/TR/offline-webapps/">lovely new features of HTML5</a>. It allows you to define a list of files to be cached for off-line access (among other nice features).

One of the points to consider when making changes to cached files, is that the browser won't know to download the modified file without being prompted to re-fetch the manifest file.

<a href="http://html5doctor.com/go-offline-with-application-cache/#trigger-refresh">A common workaround</a> is to make some change to the manifest file to force an update, typically using a version number. This works fine in most instances, but Firefox stubbornly ignores this. The usual workaround for Firefox is to set the manifest file to expire by using the following rule in the .htaccess file.

    <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/cache-manifest "access plus 0 seconds"
    </IfModule>

While this works, it's not much good if your're not using Apache, or if your host has blocked .htaccess usage.

However, you can achieve the same effect by setting the HTTP headers in PHP. Put the following lines in to top of your manifest file, and change the extension to `.php`.

    <?php
    header("Content-type: text/cache-manifest");
    header("Cache-Control: no-cache, must-revalidate");
    header("Expires: ".date(DATE_RFC1123));
    ?>

The first line sets the content type to text/cache-manifest, this is a requirement for manifest caching to function. The second tells the browser not to cache the file. And in case the browser ignores that, the third line expires the file immediately.

Now the browser will keep the manifest cache up-to-date, but still cache the files you want.
