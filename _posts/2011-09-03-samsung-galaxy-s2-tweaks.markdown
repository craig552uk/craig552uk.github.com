--- 
layout: post
title: Samsung Galaxy S2 Tweaks
tags: 
- Android
- Tutorials
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "403518469"
---
I love the Galaxy S2, It is a really well built piece of kit. There are, however, a few little annoyances with it, some of which can be fixed if you don't mind getting your hands dirty.

Here's what you need to do to get going.

<ol>
	<li>Root the phone (this is very easy). Follow the <a href="http://lifehacker.com/5789397/the-always-up+to+date-guide-to-rooting-any-android-phone">instructions on Lifehacker</a>.
	<li>Download ES File Explorer from the market</li>
	<li>Enable these settings<br/>
        <ul>
	        <li>Settings > Root Explorer</li>
	        <li>Settings > Mount File System</li>
        </ul>
</ol>

This will give you writeable access to the file system, now you can fix those annoyances.

<h2>Disable the Start Up Sound</h2>
<ol>
	<li>Rename <code>/etc/PowerOn.wav</code> to <code>/etc/PowerOn.wav.old</code></li>
</ol>

<h2>Disable Camera Shutter Sound</h2>
<ol>
	<li>Create a text file <code>/data/local.prop</code></li>
	<li>Add this line <code>ro.camera.sound.forced=0</code></li>
	<li>Restart your phone</li>
</ol>

<h2>Disable Battery Full Sound</h2>
<ol>
        <li>Rename <code>/system/media/audio/ui/LowBattery.ogg</code> to <code>/system/media/audio/ui/LowBattery.ogg.bak</code></li>
</ol>

<h2>More Tips</h2>
If you know of any other tweaks, let me know. I'll be keeping this list updated.

There's also lots of power user features built in, so <a href="http://thehandheldblog.com/2011/06/14/galaxy-s2-tips-tricks/">check them out too</a>.
