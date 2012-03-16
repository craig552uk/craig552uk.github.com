--- 
layout: post
title: "GEdit: The Missing Keyboard Shortcuts"
tags: 
- Linux
- Programming
- Software
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "286860392"
  _edit_last: "2"
---
I've love GEdit, it's a great text editor, and having added a few plugins, a great IDE too.

GEdit has a few <a href="http://live.gnome.org/Gedit/KeyboardShortcuts">keyboard short cuts</a> for working with the application. But there's also a lot of great short cuts for working within the document. These, however, arn't documented anywhere.

GEdit uses the <a href="http://developer.gnome.org/gtk/2.24/GtkTextView.html">GTKTextView</a> widget to display and edit text, it's for this that the short cuts are undocumented.

I've collected all the GTKTextView keyboard short cuts I know of here. I suspect that there are more (moving the cursor to the start and end of sentences for example) but I haven't found them yet.

Also, as the GTKTextView widget is used throughout Gnome, you'll find that these short cuts can be used all over the place (like in textareas on websites).
<br/>

<h2>Navigation &amp; Selection</h2>

These short cuts can be used to move the cursor around the document. Navigation shortcuts can be used with the Shift key to select text.

<table class="aligncenter">
<tr><td>Ctrl+Right</td>  <td>Move cursor forward by word</td></tr>
<tr><td>Ctrl+Left</td>   <td>Move cursor backwards by word</td></tr>
<tr><td>Ctrl+Home</td>   <td>Move cursor to start of document</td></tr>
<tr><td>Ctrl+End</td>    <td>Move cursor to end of document</td></tr>
<tr><td>Ctrl+PageUp</td> <td>Move cursor to start of wrapped line</td></tr>
<tr><td>Ctrl+PageDn</td> <td>Move cursor to end of wrapped line</td></tr>
</table>
<br/>

<h2>Deleting</h2>

These short cuts can be used to delete sections of text.

<table class="aligncenter">
<tr><td>Ctrl+Del</td>          <td>Delete word ahead cursor</td></tr>
<tr><td>Ctrl+BkSpce</td>       <td>Delete word behind cursor</td></tr>
<tr><td>Ctrl+Shift+Del</td>    <td>Delete from cursor to end of line</td></tr>
<tr><td>Ctrl+Shift+BkSpce</td> <td>Delete from cursor to start of line</td></tr>
<tr><td>Ctrl+d</td>            <td>Delete line</td></tr>
</table>
