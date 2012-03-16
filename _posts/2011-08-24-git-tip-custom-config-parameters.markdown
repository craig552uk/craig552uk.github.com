--- 
layout: post
title: "Git Tip: Custom Config Parameters"
tags: 
- Programming
- Software
- Tutorials
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "394639098"
---
Git is lovely. You know this. 

Here's another bit of Gitty loveliness for you: Custom Config Parameters.

The primary configuration file in Git is found in <code>.git/config</code>. In here are the configuration parameters for your repository. Git provides a tool to manage this file - <a href="http://kernel.org/pub/software/scm/git/docs/git-config.html">git config</a>. Handily this tool lets you store your own configuration parameters too.

<h2>How to do it</h2>

If you have a look inside <code>.git/config</code> you'll see that data is structured in key-value pairs grouped in to sections.

    [branch "master"]
    	remote = origin
    	merge = refs/heads/master

Which is accessed by running a command like this...

    -> git config branch.master.remote
    origin

And modified like this...

    -> git config branch.master.remote newValue

You can define a new section to store your own data like this...

    -> git config mydata.mykey valueA

You can store multiple values too...

    -> git config --add mydata.mykey valueB

And fetch them all like this...

    -> git config --get-all mydata.mykey
    valueA
    valueB

Delete a single value like this...

    -> git config --unset mydata.mykey valueB

Delete all key values like this...

    -> git config --unset-all mydata.mykey

And to remove a whole section...

    -> git config --remove-section mydata

<h2>What to do with it</h2>

That's great, but what can you do with it?

Why not use it to store parameters for your workflow scripts? Here's some ideas.

<ul>
	<li>The locations of CSS and JS files to be minified</li>
	<li>Compilation output directory</li>
	<li>The latest version release number (if your not a tag fan)</li>
	<li>Feature branch meta data (owner, decription, etc.)</li>
	<li>A list of deployment servers</li>
</ul>

If you use this feature in your scripts, drop a comment below.



