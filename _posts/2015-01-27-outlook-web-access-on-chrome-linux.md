---
layout: post
title: How to Use Outlook Web Access in Google Chrome on Linux
description: OWA doesn't support Chrome on Linux, so users are usually forced to use "the light version", here's how to make the full version work properly.
---
If, like me, you work at an organisation that uses MS Exchange for their internal email you're probably familiar with the Outlook Web App (OWA), the web interface to your email account. Users of Chrome on Linux will probably be aware that [OWA doesn't support that browser/device combination][1] and are forced to use the crappy "light version" of Outlook.

However, it is possible to get the fully featured OWA on Chrome, with a few extensions.

First off install the [User-Agent Switcher for Chrome][2]. This tool will let you make Chrome lie to OWA, making it think your using Chrome on Windows, which is supported.

After installing, go to the Options for the extension.

- Click **Custom User Agents** from the left-hand menu
- Create a new User Agent config like this:
  - New User-agent name: **on Windows**
  - New User-Agent String: [any Chrome UA string for "Windows"][3]
  - Group: **Chrome**
  - Append? **Append**
  - Indicator Flag: **Win**
- Click **Add**

You should see your new option listed under **Chrome**. Next we'll make Chrome always use this User Agent string when we use OWA.

* Click **Permanent Spoof list** from the left-hand menu
* Create a new rule like this:
  * Domain: Your OWA domain e.g. `email.example.com`
  * User-Agent String: **on Windows** (the one we just created)
* Click **Add**

Now if you go to your OWA, the login page shouldn't force you to use the light version any more.

But wait, we're not quite done yet...

Everything about your email experience in OWA should work fine, unless you try to add an attachment to an email. This is becaue OWA uses a deprecated JavaScript function, `showModalDialog`, which [Chrome dropped support for last year][4].

This is kinda annoying, but easy to sort out.

Just install the [showModalDialog shim][5] extension and problem solved!

[1]: http://help.outlook.com/en-us/140/bb899685.aspx
[2]: https://chrome.google.com/webstore/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg
[3]: http://www.useragentstring.com/pages/Chrome/
[4]: http://blog.chromium.org/2014/07/disabling-showmodaldialog.html
[5]: https://chrome.google.com/webstore/detail/showmodaldialog-shim/nmpaogfdjncgofndedhcimbdmnlbpnlg
