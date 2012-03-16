--- 
layout: post
title: OoLDAP PHP Library
tags: 
- Programming
- Software
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "270019873"
  _edit_last: "2"
  _syntaxhighlighter_encoded: "1"
  _wp_old_slug: ""
---
Yesterday I was looking around for a php library for working with LDAP servers. I couldn't find much.

I did find <a href="http://adldap.sourceforge.net/">adLDAP</a>, which is a nice enough implementation but it's entirely focussed on working with Active Directory (we use eDirectory). It doesn't allow you to work with custom schemas (which we have). I also wanted something that would be quick to configure (and reconfigure) and easy to work with, similar to how <a href="http://www.doctrine-project.org/">Doctrine</a> lets you work with databases.

Seeing how this library did not already exist, I've decided to start making one.

I've called it OoLDAP, it can be found over on <a href="https://github.com/craig552uk/OoLDAP">GitHub</a> (all the action is on the develop branch for now).

What I'm aiming for is a library that allows you to define your schema in a class, which in turn extends an LDAPObject base class. Then work with the object like this.

<pre lang="php" line="1">
// Create LDAP Service Object
$ldapds = new LDAPService();

// Create User Object
$b = new LDAPUser($ldapds);

// Set Attribute Values
$b->DN        = 'cn=user100,ou=people,o=org';
$b->userName  = 'user100';
$b->firstName = 'Indiana';
$b->lastName  = 'Jones';

// Save to LDAP Service
$b->save();

// Get Attribute Values
echo "<p>User Name: ".$b->userName."</p>";
echo "<p>Name: ".$b->firstName." ".$b->lastName."</p>";
</pre>


We'll see how it comes along.

It's also my first real chance to use git and GitHub, which I'm quite liking...
