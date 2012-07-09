---
layout: post
title: Top 5 Shell Commands for Working with Data Files
description: 
---
There is a glut of tools out there for cleaning up and exploring data sets. But 
time and time again I find myself coming back to the good old command line. 
Here's my top 5 shell commands for working with data files. If you have your own 
favourites, please do drop a comment below.

##Cut##

`cut` lets you extract fields from a data file. You give it a delimiter (a 
character that separates fields) and the field number you want.

**e.g.** Filter the third column of a csv file.

    cut -d',' -f3 datafile.csv


##Sort & Uniq##

`sort` (unsurprisingly) sorts the contents of a file. By default it sorts 
alphabetically, but can also sort lines numerically with the `-n` 
switch.

`uniq` removes repeated lines from a file. It requires the input to be sorted, 
which is why these two commands are often used together. It also allows you to 
count the number of occurrences of each entry with the `-c` switch.

**e.g.** Count the number of occurrences of each text entry in a list.

    sort first_names.list | uniq -c

**e.g.** Count the number of occurrences of each numeric entry in a list.

    sort -n ages.list | uniq -c

**e.g.** Randomly order the lines of a file

    sort -R things.list


##Grep##

`grep` filters out lines of a file that match a text pattern.

**e.g.** Show only lines containing the text `LONDON`

    grep LONDON flights.csv

**e.g.** Show only lines containing the text `LONDON` ignoring letter-case.

    grep -i LONDON flights.csv

**e.g.** Show lines not containing the text `LONDON` ignoring letter-case.

    grep -i -v LONDON flights.csv


##Sed##

`sed` is the find-and-replace of the command line. At it's simplest you can use it 
to clean up field encodings, but with [regular expressions][1] you can do so much more...

**e.g.** Replace every instance of `female` with `F`.

    sed 's/female/F/g' people.csv

**e.g.** Remove blank lines

    sed '/^$/d' people.csv

**e.g.** Remove comments (lines starting with `#`)

    sed '/^#/d' people.csv


##Split##

`split` will break up a single file in to many. Handy if your data file is too big 
to process in one go.

**e.g.** Split `datafile.csv` in to files with 1000 lines each, called 
`datafile.part.00`, `datafile.part.01` etc...

    split -d -l 1000 datafile.csv datafile.part.


##An Admission##

Ok. So that was technically 6 commands, but I rarely use `sort` and `uniq` on 
their own so to me they're like one command. And besides, who does "Top 6" lists?

Also, this is *by no means* a complete list of useful shell commands. These are 
the few that I find myself coming back to often. If you have your own favourites, 
please do drop a comment.

Finally, a work on Awk. I decided to omit it from this list, because, while I do 
use it often, Awk blurs the boundary between command a programming language. It 
is enormously powerful and well worth learning. But I felt it was a bit too 
advanced for this list.

[1]: http://en.wikipedia.org/wiki/Regular_expression