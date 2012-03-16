--- 
layout: post
title: Kindle 4 Custom Screen Savers
tags: 
- Tutorials
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "522207602"
---
Early Kindles allowed you to use your own images as screen savers, this feature was removed in later models. Thankfully people much smarter than me had written custom firmware giving you this feature back. Unfortunately this firmware hack doesn't work with the latest 4th generation non-touch (NT) Kindle.

There is however, still a way of getting this functionality on the Kindle 4 NT, but it is quite fiddly and requires you to have some knowledge of Linux file systems, basic networking and SSH. I achieved this using a Linux (Ubuntu) PC, there instructions are probably largely similar for MACs too. Windows users will have to install some extra software tools and the networking bit will be different too (Don't ask - I won't know).

Basically all we're going to do is move the screensaver images folder to the part of the kindle that is accessible over USB and creating a symbolic link to this location. However, the route from here to there is a bit contrived. If you're not sure what you're doing it's best to ask a techo-literate friend to help out. Oh, it should also go without saying that this probably invalidates your warranty too.

<h2>Diagnostic Mode</h2>

The first thing we need to do is put the Kindle in to Diagnostic Mode.

<ol>
<li>Connect the Kindle to your PC with the USB cable.</li>
<li>Create a file on the Kindle called <code>ENABLE_DIAGS</code></li>
<li>Unmount the Kindle and disconnect the USB cable.</li>
<li>Restart the Kindle<br/>
  <em>[MENU] Settings [MENU] Restart</em> <br/>
  This will take a few minutes.</li>
<li>You should now be in Diagnostic Mode.</li>
</ol>

<h2>Gaining Root Access</h2>

Next we need to connect to the Kindle as root which will allow us to fiddle around with it.

<ol>
  <li>Connect the Kindle to your PC with the USB cable. It should <em>NOT</em> mount.</li>
  <li>Enable USB Networking from the menu.<br/>
    <em>Misc individual diagnostics > Utilities > Enable USBNet</em></li>
  <li>The Kindle should now be a network device on your PC. <br/>
    <code>ifconfig</code></li>
  <li>Configure a IP address for the device. <br/>
    <code>ip addr add 192.168.15.241/24 dev usb0</code></li>
  <li>You should now be able to SSH in to the Kindle as root. <br/>
    <code>ssh root@192.168.15.244</code> <br/>
    The password is "mario".<br/>
    <strong>Edit:</strong> If "mario" doesn't work <a href="http://members.ping.de/~sven/kindle.html" target="_blank">try this tool</a>.</li>
  <li>You now have root access to your Kindle</li>
</ol>

<h2>Moving the Screen Savers</h2>

Now we're going to move the screensavers from their existing location to a new folder in <code>/mnt/us/</code>, which is the folder accessible via USB.

<ol>
  <li>First mount the required partition.<br/>
    <code>mount /dev/mmcblk0p1 /mnt/base-mmc</code></li>
  <li>Backup the existing screensavers.<br/>
    <code>mv /mnt/base-mmc/opt/amazon/screen_saver/600x800 /mnt/base-mmc/opt/amazon/screen_saver/600x800.bak</code></li>
  <li>Create a folder for custom screen savers.<br/>
    <code>mkdir /mnt/us/screensaver</code></li>
  <li>Create a link from the screen saver location to the new folder.<br/>
    <code>ln -sfn /mnt/us/screensaver /mnt/base-mmc/opt/amazon/screen_saver/600x800</code></li>
  <li>You can optionally copy the existing screen savers to the new folder if you want to keep them.<br/>
    <code>cp /mnt/base-mmc/opt/amazon/screen_saver/600x800.bak/* /mnt/us/screensaver/</code></li>
  <li>End the SSH session.<br/>
    <code>exit</code></li>
  <li>Exit Diagnostic Mode<br/>
    <em>Exit, Reboot or Disable Diags > Disable Diagnostics > To continue - FW LEFT</em></li>
  <li>Wait a few minutes for the Kindle to reboot.</li>
  <li>That's the screen savers moved!</li>
</ol>

<h2>Setting Custom Screen Savers</h2>

Now you can copy your own screen saver images to your Kindle. All you need to do is connect your Kindle to your PC with the USB cable and copy the images you want in to the <code>screensaver</code> folder.

The images files must be 600x800 pixels. I think they also have to be PNG files and 72dpi in 32bit indexed greyscale. Some people on the forums have said that this isn't necessary, others say it is. But this format works fine for me where others didn't.


There are various sites out there with Kindle screen savers to download, you may or may not need to do some image conversion. I leave it to you to experiment.

You also have to researt the Kindle fully (<em>[MENU] Settings [MENU] Restart</em>) before the new screen savers will work.

Have fun!

<strong>Edit:</strong> <a href="http://www.craig-russell.co.uk/downloads/Kindle4OriginalScreensavers.zip">Here's the original Kindle 4 Screen Savers</a>.
