--- 
layout: post
title: Get CSV Data in to a PHP Array with Field Headings
tags: 
- Programming
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  _syntaxhighlighter_encoded: "1"
  _wp_old_slug: ""
  dsq_thread_id: "217841603"
---
Here's how to get data from a CSV file and store put the data in to an array.
The function assumes that the first line of the CSV is the field headings, it uses these headings to set the key values in an associative array.

So it takes an input file like this...

    "username", "firstname", "surname",  "email"
    "ss100",    "Sylvia",    "Scarlett", "sscarlett@email.com"
    "mm100",    "Martin",    "Mustard",  "mmustard@email.com"
    "ww100",    "Wendy",     "White",    "wwhite@email.com"


And saves it in a structure like this...

    Array
    (
      [0] => Array
        (
          [username] => ss100
          [firstname] => Sylvia
          [surname] => Scarlett
          [email] => sscarlett@email.com
        )

      [1] => Array
        (
          [username] => mm100
          [firstname] => Martin
          [surname] => Mustard
          [email] => mmustard@email.com
        )

      [2] => Array
        (
          [username] => ww100
          [firstname] => Wendy
          [surname] => White
          [email] => wwhite@email.com
        )
    )

I would have posted the code here for you to copy and paste, but my hosting provider thinks I'm trying to hack my own site, so you can <a href="http://www.craig-russell.co.uk/downloads/csvToArr.zip">download the file from here</a> instead.
