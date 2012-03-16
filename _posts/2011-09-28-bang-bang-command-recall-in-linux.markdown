--- 
layout: post
title: Bang Bang - Command Recall in Linux
tags: 
- Linux
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "428458997"
---
The loveliness that is the Linux shell has buried in it a billion little nuggets of hyper efficiency. I've been learning about the bang history commands, which are a great way to save time when running the similar commands over and over (<a href="http://www.softpanorama.org/Scripting/Shellorama/bash_command_history_reuse.shtml">more thorough documentation here</a>).

<h2>Repeating Commands</h2>
Repeat last command
<pre lang="shell">!!</pre>

Repeat last command that started with <em>x</em>
<pre lang="shell">!x</pre>

Repeat last command that has the substring <em>x</em>
<pre lang="shell">!?x</pre>

Repeat 10th command in the history file
<pre lang="shell">!10</pre>

Repeat 10th from last command in the history file
<pre lang="shell">!-10</pre>

<h2>Fetching Parameters</h2>
Fetch parameters from last command
<pre lang="shell">!!*</pre>

Fetch first parameter from last command
<pre lang="shell">!!^</pre>

Fetch last parameter from last command
<pre lang="shell">!!$</pre>

Fetch third parameter from last command
<pre lang="shell">!!3</pre>

<h2>Modifiers</h2>
Repeat last command substituting <em>foo</em> for <em>bar</em>
<pre lang="shell">!!:s/foo/bar/</pre>

Print last command without running it
<pre lang="shell">!!:p</pre>


