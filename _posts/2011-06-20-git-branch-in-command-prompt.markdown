--- 
layout: post
title: Git Branch in Command Prompt
tags: 
- Linux
- Programming
- Software
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "337646866"
  _edit_last: "2"
---
<a href="http://net.tutsplus.com/tutorials/other/how-to-customize-the-command-prompt/">This article from NetTuts</a> explains the basics of configuring the command prompt on Linux and Mac. It includes the great idea of displaying the current Git branch in the prompt.

However, their method makes use of the <a href="http://vc.gerg.ca/hg/vcprompt/">vcprompt</a> package, which has to be compiled and installed. A worthwhile exercise, but a bit unnecessary for a simple prompt. The following snippet of scripting will do the same job, just pop it in your <code>.bashrc</code> file.

    function pre_prompt_print(){
        # Git branch
        GIT_BRANCH=`git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[git:\1]/'`
    }

    PROMPT_COMMAND=pre_prompt_print
    PS1="\u@\h:\w \${GIT_BRANCH\n\!> "


This will give you a command prompt looking something like this...

    craig@craig-laptop:/home/craig/myGitProject [git:master]  
    -> 

How imaginative is my hostname eh?

I didn't spend too long on this, and I know it could be better refined. So if you have any suggestions, drop a comment below.
