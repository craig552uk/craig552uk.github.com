--- 
layout: post
title: Samsung Galaxy S2 USB Storage and Tethering with Ubuntu
tags: 
- Android
- Tutorials
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "333795449"
  _edit_last: "2"
  dsq_needs_sync: "1"
---
I've just got myself a shiny new Samsung Galaxy S2. I'm not going to write a big old review of the whole thing here, there's plenty of others elsewhere. Ubuntu users may have difficulty mounting the phone via USB. Getting ugly errors like this...

    Unable to mount SAMSUNG_Android Error initialising camera: -60: Could not lock the device

Samsung uses it's own software to sync and update the phone called Kies. Kies is only available for Windows (naturally), not Mac or Linux. But you can still use the USB storage and USB tethering, you just have to enable USB debug mode.

    Settings > Applications > Development > USB Debugging

Now when you connect the phone with the USB cable, you can choose to mount the USB storage from the status bar.
Alternatively, you can use the USB tethering.

    Settings > Wireless and Network > Tethering and Portable Hotspot Settings > USB Tethering.

<strong>Edit</strong> also check out my post on <a href="http://www.craig-russell.co.uk/samsung-galaxy-s2-tweaks/">Galaxy S2 tweaks</a>.
