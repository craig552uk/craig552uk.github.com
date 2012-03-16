--- 
layout: post
title: Crontab Debugging
tags: 
- Linux
- Programming
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "217841345"
---
Sometimes, a script which works perfectly fine when run from the shell, fails when run as a cron job. It's often quite difficult to debug these problems, but to make the task a little easier, try this.

Edit the crontab file with

    crontab -e

Add this line for your script (obviously change the script path and username)

    */5 * * * * /usr/bin/myscript > ~username/crontab.out 2>~username/crontab.err

This will run your script every 5 minutes, and send outputs to two files. Standard output will go to contab.out and errors will go to crontab.err.

If you want to use a different editor run the following, then start over.

    EDITOR=/path/to/editor
    export EDITOR
