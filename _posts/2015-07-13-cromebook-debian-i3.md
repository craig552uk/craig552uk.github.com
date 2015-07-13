---
layout: post
title: How to use Debian with i3 on a Chromebook
description: Using crouton it is very easy to get a Debian/i3 environment up and running on your Chromebook.
---

Chromebooks are great. Cheap, Light, efficient, safe, easy. But a little limiting if you're used to a full Linux environment. Thankfully, [crouton][1] makes it very easy to run full [Debian][2] on a chromebook with a lightweight window manager like [i3][3].

First-off, you have to [put your chromebook into Developer Mode][4] and [install Crouton][5]. I won't repeat that here, because you know how links work. Then pop open a crosh (Ctrl+Alt+T) and type `shell` to get a full linux shell.

Using crouton, create your chroot

    sudo sh -e ~/Downloads/crouton -e -n debian-i3 -r jessie -t x11,extension,keyboard,cli-extra,gtk-extra

 - `-e` encrypts the chroot
 - `-n debian-i3` is the name of our chroot
 - `-r jessie` is our debian release (run `crouton -r list` to see all the options)
 - `-t x11,extension,keyboard,cli-extra,gtk-extra` includes the dependencies we'll need

This may take a while. You'll be prompted for username and passwords.

Once it's built, enter your new chroot.

    sudo enter-chroot -n debian-i3

Now we can install i3 from the debian repositories and set it to start with the X server.

    sudo apt-get install i3
    echo "exec i3" > ~/.xinitrc

You'll also want to configure the keyboard:
 - In `/etc/default/keyboard` set `XKBMAP="chromebook"`
 - In `~/.xinitrc` add `setxkbmap -layout gb` (use your country code)



Then you can start i3 from within your chroot using:

    xinit
    
Or enter your chroot and start i3 all in one go with this (**tip:** [create an alias][6]):

    sudo enter-chroot -n debian-i3 xinit

You can swap back and forth between Debian and ChromeOs with `Ctrl+Alt+Shift+Back Arrow` and `Ctrl+Alt+Shift+Forward Arrow`.



 

[1]: https://github.com/dnschneid/crouton
[2]: https://www.debian.org/
[3]: https://i3wm.org/
[4]: https://www.google.com/search?q=chromebook+developer+mode
[5]: https://github.com/dnschneid/crouton/blob/master/README.md#usage
[6]: https://www.google.com/search?q=how+to+create+a+bash+alias
