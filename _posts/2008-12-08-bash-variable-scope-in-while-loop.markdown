--- 
layout: post
title: BASH Variable Scope in While Loop
tags: 
- Linux
- Software
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  _syntaxhighlighter_encoded: "1"
  aktt_notify_twitter: "yes"
  dsq_thread_id: "217841318"
---
Here's an annoying little foible of BASH shell scripting.

I've been trying to writea script to test authorization against a list of servers, and fire off an email if any of the servers doesn't respond. The lis tof servers is in a text file, and I've got a while loop to itterate through, testing line by line. If any of the tests fails then, I'd change a flag variable from its default value of "FALSE" to "TRUE". After the loop I can test the value of the flag variable, and send an email accordingly.

The problem I was having is that the variable scope didn't seem to extend beyond the while loop, so the final check always showed that the flag was set to FALSE, even if it was changed within the loop.

My original script looked something like this...

    SENDMAIL= grep ^server servers.file | while read line; do
        if [ testauth() ]; then
            SENDMAIL=TRUE
        fi
    done

    if [ SENDMAIL ]; then
        sendMail()
    fi

The problem is that, I've piped my file through grep and in to the while loop. Because of the way the shell handles piped commands, the variable scope is limited to within the while loop. To get around this problem, you have to remove the pipe in to the while loop. In this case I chose to output to a temp file then read it in, but you can also pipe to a variable, then loop over the variable.


    SENDMAIL= grep ^server servers.file > servers.tmp

    while read line; do
        if [ testauth() ]; then
            SENDMAIL=TRUE
        fi
    done &lt; servers.tmp

    if [ SENDMAIL ]; then
        sendMail()
    fi

