---
title: How to Fix Wifi Stuck "Obtaining IP Address"
description: Android Marshmallow (6.0.1) has a common issue with unreliable WiFi connections, here's how to fix it
layout: post
---
Android Marshmallow (6.0.1) has a common issue with unreliable WiFi connections. If you find that your phone gets stuck "Obtaining IP Address" here's how to fix it.

You may have tried "forgetting" the network, rebooting your router, resetting your phone - all to no avail.
The issue is with the DHCP client (software that negotiates IP addresses) new to Marshmallow.
Thankfully this is easy enough to revert, *without* downgrading your phone.

1. Go to **Settings** > **About Phone**
2. Repeatedly tap **Build Number** until you see a message "You are now a developer!".
3. Now go to **Settings** > **Developer Options**
4. In the **Networking** section enable **Use Legacy DHCP Client**

Done!
