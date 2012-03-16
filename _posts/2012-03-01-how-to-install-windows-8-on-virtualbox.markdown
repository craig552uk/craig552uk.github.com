--- 
layout: post
title: How To Install Windows 8 on VirtualBox
tags: 
- Software
- Tutorials
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "594675875"
  _edit_last: "2"
---
If you've tried to install Windows 8 on VirtualBox, it'll probably have failed, with horrid errors. It can be done, but you need to set a few specific settings to make it work.

Here's how you do it.

The first thing you need to do is enable Virtualisation Technology in your BIOS (Intel VT or AMD-V), you won't get anywhere without doing that.

Next, download one of the ISOs (not the Setup exe) from <a href="http://windows.microsoft.com/en-US/windows-8/iso">here</a>. Also make a note of the product key for your version.

Now create a VM, use the wizard defaults for Windows 8.
Once that's done, go to `Settings > System`

    Motherboard     Enable IO APIC = yes
    Processor       Enable PAE/NX = yes
    Acceleration    Enable VT-x/AMD-V = yes
    Acceleration    Enable Nested Paging = yes

Now mount the ISO to the CD/DVD drive and start the VM.

Follow the installation instructions. When asked, provided the product code from the iso download page.

That's it!
