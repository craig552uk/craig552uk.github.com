--- 
layout: post
title: Configuring Inkscape for CMYK on Ubuntu Linux
tags: 
- Software
- Tutorials
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  aktt_notify_twitter: "yes"
  dsq_thread_id: "217854448"
  dsq_needs_sync: "1"
---
I've been climbing a steep learning curve recently with Inkscape, and now I'm scalling the peak of CMYK Colour Profiles (I'll be alternating the British/American spelling where appropriate).

If, like me, you've never known which colour space you were working in, chances are it was RGB. CMYK is an alternative, commonly used in the printing industry. I'll spare you further details, but if you want to know more, <a href="http://lmgtfy.com/?q=RGB+CMYK">you know where to go</a>.

Support for CMYK in Inkscape is ongoing, as is the discussion surrounding it. <a href="http://wiki.inkscape.org/wiki/index.php/InkscapeColor">Click</a> <a href="http://codewideopen.blogspot.com/2008/11/svg-chicken-and-cmyk-egg.html">Click</a> <a href="http://en.flossmanuals.net/Inkscape/ColorManagement">Click</a> But we cans till configure Inkscape for CMYK to make things easier further down the road.

Before I go on, a disclaimer: I am in no way an expert in Inkscape nor CMYK colour profiles. These settings seemed to work for me, they may also work for you. I am more than happy to accept comments &amp; criticisms in the comments below.

Download the Adobe Color Profiles and copy them all in to /usr/share/color/icc
<a href="http://www.adobe.com/digitalimag/adobergb.html">http://www.adobe.com/digitalimag/adobergb.html</a>

Follow the instructions on this page to generate an ICC profile for your monitor
<a href="http://www.ubuntufieldmanual.com/?q=node/38">http://www.ubuntufieldmanual.com/?q=node/38</a>

Copy the icc file in to one of the locations that Inkscape searches

    /home/username/.local/share/color/icc
    /usr/share/gnome/color/icc
    /usr/local/share/color/icc
    /usr/share/color/icc (best for all users)

<ol>
	<li>Open/restart Inkscape</li>
	<li>Go to Inkscape preferences (Shift+Ctrl+P)</li>
	<li>In 'Color management'</li>
	<li>Set 'Display Profile' to your monitor profile (lcms RGB Virtual Profile)</li>
	<li>Tick 'Simulate output on screen'</li>
	<li>Tick 'Mark out of gamut colors'</li>
	<li>Select a highly visible color for the warning color (I prefer a bright green)</li>
	<li>Set 'Device profile' to an apropriate output profile for your region (US Euroscale etc) and print medium (Coated, Uncoated etc)</li>
	<li>Open the Document Properties (Shift+Ctrl+D)</li>
	<li>Click the Color Management tab</li>
	<li>Link the 'lcms RGB Virtual Profile'</li>
</ol>
Now, if you enable Color Managed View (in the view menu), colours that are out of the printers range will show up on the page. You'll also be looking at colours more-or-less as they come out the printer.
