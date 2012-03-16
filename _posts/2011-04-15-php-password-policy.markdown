--- 
layout: post
title: PHP Password Policy
tags: 
- Internet
- Programming
- Software
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "280352605"
---
A password policy lets you put restrictions on the format of password allowed in your application. A good password policy forces user to use secure passwords.

> PHP Password Policy makes it easy to implement a password format policy on your application. It includes functions to return password validation errors and a decription of the defined policies to be displayed to your users.

PHP Password Policy is straight forward to implement, and can fit right in to your existing password setting procedure.

    // Include the library
    require_once('password-policy.php');

    // Create the Password Policy object
    $policy = new PasswordPolicy();

    // Define your policy rules
    $policy->min_length = 8;
    $policy->max_length = 64;

    // Validate a password
    if( $policy->validate($password) ) echo "Password OK!";

You can get hold of <a href="http://craig552uk.github.com/password-policy/">PHP Password Policy Here</a>
