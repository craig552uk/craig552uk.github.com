--- 
layout: post
title: Responsive Images and Context Aware Image Sizing
tags: 
- Programming
- Software
status: publish
type: post
published: true
meta: 
  _syntaxhighlighter_encoded: "1"
  _edit_last: "2"
  dsq_thread_id: "217840118"
  _wp_old_slug: ""
  dsq_needs_sync: "1"
---
I've been thinking about building <a href="http://www.alistapart.com/articles/responsive-web-design">responsive web sites</a> lately. This has lead me down the path towards <a href="http://unstoppablerobotninja.com/entry/fluid-images">fluid image scaling</a> and on to the problem of serving appropriately sized images for the client platform. In other words, how can we serve up small scale images for mobiles and tablets and larger images for desktops?<!--more-->

Fluid image scaling alone is not sufficient, mobile clients can't be expected to download a 1000px wide image then scale it down to 200px wide. This is both slower and more tariff hungry than necessary.

The immediate solution is to use <a href="http://stuffandnonsense.co.uk/blog/about/hardboiled_css3_media_queries">media queries</a> to swap out different scaled images for different display sizes. But this is cumbersome to manage on a large scale and offers no robust solution when using the <code>SRC</code> attribute of the <code>IMG</code> element.

I'm not the only one to recognise this as an issue for responsive we design. In the course of my research I came a cross <a href="http://filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing/">this article by the Filament Group</a>, proposing another solution to the problem. The Filament Group method uses .htaccess files and some JS to serve up different sized images based on the screen width.

I've developed a technique that uses a server side script (in PHP) to serve up images of several different resolutions. It requires only a small amount of JavaScript and can scale quite easily.

Within the PHP script is a nested array that lists images files and their relative percentage scales. The array is structured such that each image is assigned a URL safe id ('puppy' in the example). For each image file the nested array describes the file's scale. The largest image has a scale of 100 down to the smallest at 0. The 0 scale image is initially loaded by the browser, so in the example this is a 1x1 pixel transparent PNG.

<pre lang="php" line="1">
$images['puppy'][100]      = 'puppy_1280x960.jpg';
$images['puppy'][75]       = 'puppy_960x720.jpg';
$images['puppy'][50]       = 'puppy_640x480.jpg';
$images['puppy'][25]       = 'puppy_320x240.jpg';
$images['puppy'][10]       = 'puppy_128x96.jpg';
$images['puppy'][0]        = 'clear_pixel.png';
</pre>

The PHP script serves up an images file based upon two GET parameters, id and scale. The script returns the first file that is greater than the requested scale. So a URL like <a href="http://www.craig-russell.co.uk/examples/getimage/getimage.php?id=puppy&amp;scale=47">.../getimage.php?id=puppy&amp;scale=47</a> will return the image at scale 50. If no scale is specified the 0 scale image is returned. This is important, I'll explain why in a bit.

In the HTML file the image <code>SRC</code> attribute is set to get the requested image id, but with no scale specified. The CSS ensures that the <a href="http://unstoppablerobotninja.com/entry/fluid-images">image scales fluidly</a> within it's container. A bit of JavaScript calculates the percentage width of the image relative to the maximum width of the container. This figure is appended to the end of the <code>SRC</code> attribute as the scale parameter.

Taking this information, the server returns the appropriately scaled image for the width of the image element. So mobile browsers will download smaller image files than desktops. The only overhead is the initial request for the 0 scale image, which is why I've set it to a clear pixel.

It goes without saying that the image data need not be stored in an array, a data base would probably be better and certainly easier to integrate with a CMS.

Also, while I've use a relative scaling measure (0-100) the same affect would be achieved when using absolute width measurements. There's pros and cons to each approach, I'll leave you to judge.

An <a href="http://craig-russell.co.uk/examples/getimage/demo.html">demo page is set up here</a> and the source is up on <a href="https://github.com/craig552uk/getImage">GitHub</a>. This is far from polished, so any comments, criticisms or suggestions are more than welcome.
