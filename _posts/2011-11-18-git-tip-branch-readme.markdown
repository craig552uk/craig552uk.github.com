--- 
layout: post
title: "Git Tip: BRANCH-README"
tags: 
- Programming
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "476283117"
---
Here's a quick tip for keeping track which branch is for what in a git repo.

Create a file called <code>BRANCH-README</code> in the repo root, and for each new branch include a summary describing what the the branch is for.

<pre lang="text">
Branch: bugfix-123-autherror
Author: Craig Russell
Date: Fri 18th Nov 2011
Description: Fix for bug #123 - User receives authentication error when uploading content.
</pre>

What do you think? Do you have a branch management strategy you'd like to share? Drop a comment below.
