--- 
layout: post
title: Java Classpath Pains
tags: 
- Programming
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "290363995"
---
Using non-standard libraries and classes in Java can be a pain. you can spend hours tearing you hair out over compilation errors like this, while screaming <em>"WHY CAN'T YOU SEE THE FILES!!!"</em> at your PC.

    JsonTest1.java:9: package net.sf.json does not exist

Java uses a global variable (accessible to everything on your computer) to tell it where to look for classes, you can see the current state of this variable with this command. If you've never set it to anything, it'll probably be blank.

    echo $CLASSPATH

You can set the class path on the command line, but it'll be forgotten each time you close the terminal window. To set it permanently, configure the environment file.

    gksudo gedit /etc/environment

The environment file wil probably already contain a definition for <code>PATH</code>, this shows the format for defining global variables. The variable name is in captials, and the value is in double quotes. The value has multiple paths defined, each separated by colons.

    PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games"

To set your class path, add a line like the following.

    CLASSPATH="/usr/lib/jvm/java-6-openjdk/lib:/usr/share/java/*:./lib/:./lib/*:."

This tells Java to look for libraries and classes in the following places.

    /usr/lib/jvm/java-6-openjdk/lib
    /usr/share/java/*
    ./lib/
    ./lib/*
    .

The reason that some of the paths have wildcards (*) on the end is because these folders contain libraries packaged in to .jar files. If the library is a .class file the wild card is not needed.

Also, the full-stop (.) refers to the current folder, this would be the folder that contains your Java project files. So I've set my class path to look for libraries in the project folder and a sub-folder called <code>lib</code>.

These paths are appropriate for Ubuntu, different distributions install libraries in to different locations, so you may have to configure different paths.

For more information about the Java class path checkout <a href="http://download.oracle.com/javase/6/docs/technotes/tools/windows/classpath.html">this article</a>.
