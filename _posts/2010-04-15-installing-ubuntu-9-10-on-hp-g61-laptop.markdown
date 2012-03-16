--- 
layout: post
title: Installing Ubuntu 9.10 on HP-G61 Laptop
tags: 
- HP G61
- Linux
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  aktt_tweeted: "1"
  aktt_notify_twitter: "yes"
  dsq_thread_id: "217841493"
---
I've recently bought an <a href="http://h10025.www1.hp.com/ewfrf/wc/product?product=4099549&amp;lc=en&amp;cc=uk&amp;dlc=en&amp;lang=en&amp;tmp_track_link=ot_we/prodlink/en_uk/4099549/loc:0&amp;cc=uk">HP G61-401SA Laptop</a>, and installed a dual boot system with Windows 7 and <a href="http://www.ubuntu.com/">Ubuntu 9.10</a>.

I won't go through the build process, because building a dual-boot system is <a href="http://lmgtfy.com/?q=dual+boot+ubuntu+windows">well documented elsewhere</a>.

After installing Ubuntu, most of the laptop features worked fine, the exceptions are listed below.

<h3>Built-in Speakers</h3>

Sound through the headphones works fine, but a little tweak is required to get sound to come out through the built-in speakers.

Edit the `alsa-base.conf` file

    gksudo gedit /etc/modprobe.d/alsa-base.conf

And paste the following in at the end

    # Keep snd-pcsp from being loaded as first soundcard
    options snd-pcsp index=-2
    alias snd-card-0 snd-hda-intel
    alias sound-slot-0 snd-hda-intel
    options snd-hda-intel model=hp-dv5
    options snd-hda-intel enable_msi=1

Then restart the PC.

<h3>Wireless Network</h3>

Wired network works fine, but there's some funny behaviour with the wireless card and the on/off switch on the keyboard.

<a href="https://help.ubuntu.com/community/WifiDocs/Device/Atheros/AR9285">Installing the latest drivers</a> for the wireless card fixed this for me.

<strong>Update</strong> It seems like occasional restarts are needed to fix wifi drop-outs.

<h3>3GB Memory Limit</h3>

32-bit Ubuntu has a 3GB memory limit, that is easily overcome by installing the <a href="http://en.wikipedia.org/wiki/Physical_Address_Extension">physical address extension</a>.

    sudo apt-get install linux-generic-pae

<h3>Untested Features</h3>

While I've managed to get most of the laptop features working, some I haven't tested and can't guarantee.

<ul>
	<li>HDMI Monitor Output</li>
</ul>
