--- 
layout: post
title: Shell Script to find Square-Triagular Numbers
tags: 
- Linux
- Programming
status: publish
type: post
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "2"
  _syntaxhighlighter_encoded: "1"
  aktt_tweeted: "1"
  _wp_old_slug: ""
  dsq_thread_id: "217841539"
---
Given <a href="http://twitpic.com/29pb9y">this puzzle</a> from <a href="http://twitter.com/standupmaths">Matt Parker</a>, I wrote a swift little shell script to find the solution.

    for i in {1..100}; do
      I=$[i*i]
      for j in {1..100}; do
        J=$[(j*(j-1))/2]
        if [[ $I == $J ]]; then
          echo $I
        fi
      done
    done

Not the most efficient solution, but still a fun exercise.
