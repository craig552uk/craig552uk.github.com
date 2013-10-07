---
layout: post
title: Join Data Files on the Command Line
description:
---
In my previous post, I drew up a list of my [top 5 shell commands for working with data files][1]. One of the (many) commands that did not make it on to the list was `join`. This command is only ever useful when working across multiple data files, which is why I didn't include it before. However, when you do need it, it can be very powerful.

Like most shell commands `join` does one thing very well, it takes two data files and merges them line-by-line. Matching lines on a common identifier present in both files. This is easier to demonstrate than it is to explain, so that what we're going to do here.

Start by creating two data files, with these names and contents:

`household.dat`

    01 Woody   DOG
    02 Vicky   HUMAN
    03 Puddle  CAT
    03 Masie   DOG
    05 Pixie   RABBIT
    06 Ollie   CAT
    07 Craig   HUMAN
    08 Elf     RABBIT

`species.dat`

    BIRD  2-legs feathers small
    CAT   4-legs fur      small
    DOG   4-legs fur      big
    HUMAN 2-legs hair     big

Save them in a folder and open a command line there.

You can see that `household.dat` contains a list of all the people and animals in my house (yes, we really do have that many pets). Each has an id number, a name and a species. In `species.dat` there is supplementary information about each of the species types. We are going to join these data files together in to a single file.

To work properly, `join` requires both files to be sorted alphabetically by the joining field. You can see that `species.dat` is ok, but `household.dat` needs some work. So before we can join, we need to sort. This command sorts `household.dat` by the 3rd field and saves the result in `household.dat.sorted`. 

    > sort -k 3 household.dat > household.dat.sorted

By default sort assumes that fields are space separated, if they're not you can use the `-t` switch like so:

    > sort -k 3 -t ',' household.csv > household.csv.sorted

Now we have our data files both sorted by the joining field we can join them together.

By default `join` assumes that the joining identifier is in the first column of both files, as this is not the case for `household.dat.sorted` we need to specify the **3rd** field of the **1st** file as the joining field.

    > join -1 3 household.dat.sorted species.dat
    CAT 03 Puddle 4-legs fur small
    CAT 06 Ollie 4-legs fur small
    DOG 01 Woody 4-legs fur big
    DOG 03 Masie 4-legs fur big
    HUMAN 02 Vicky 2-legs hair big
    HUMAN 07 Craig 2-legs hair big

**Note:** As with `sort`, `join` assumes that fields are space separated, if they are not you can specify the delimiter with the `-t` switch in the same way.

We can see that the appropriate species information has been appended to the end of each matching row in the data file. This is the basics of what `join` can do.

But there's more.

Notice that the rabbits are missing from the output? This is because there is no species information for `RABBIT` in `species.dat`. By default `join` excludes any non-matching rows. To include non-matching rows from the first file use the `-a` switch.

    >join -1 3 -a 1 household.dat.sorted species.dat 
    CAT 03 Puddle 4-legs fur small
    CAT 06 Ollie 4-legs fur small
    DOG 01 Woody 4-legs fur big
    DOG 03 Masie 4-legs fur big
    HUMAN 02 Vicky 2-legs hair big
    HUMAN 07 Craig 2-legs hair big
    RABBIT 05 Pixie
    RABBIT 08 Elf

If you used `-a 2` instead, `join` would include non-matching rows from the second file. But beware, this could mess up the columns in your data file.

Also notice that `join` has formatted each row with the joining field at the start. We don't want this, we want each row to start with the unique ids from `household.dat`.

For this we can use the `-o` switch to format the output.

    >join -1 3 -a 1 -o '1.1 1.2 1.3 2.2 2.3 2.4' household.dat.sorted species.dat 
    03 Puddle CAT 4-legs fur small
    06 Ollie CAT 4-legs fur small
    01 Woody DOG 4-legs fur big
    03 Masie DOG 4-legs fur big
    02 Vicky HUMAN 2-legs hair big
    07 Craig HUMAN 2-legs hair big
    05 Pixie RABBIT
    08 Elf RABBIT 

The parameter for the `-o` switch is a little strange. It specifies the order that fields will be displayed. e.g `1.3` is the **3rd** field of the **1st** file.

Finally we want to sort the output by the unique id, so we pipe the output through `sort`.

    >join -1 3 -a 1 -o '1.1 1.2 1.3 2.2 2.3 2.4' household.dat.sorted species.dat | sort
    01 Woody DOG 4-legs fur big
    02 Vicky HUMAN 2-legs hair big
    03 Masie DOG 4-legs fur big
    03 Puddle CAT 4-legs fur small
    05 Pixie RABBIT
    06 Ollie CAT 4-legs fur small
    07 Craig HUMAN 2-legs hair big
    08 Elf RABBIT

It may seem like is a lot going on here, because there is. But in truth we've used just two commands to join together and format two data files. Levering the power of the shell to manipulate data sets is a valuable skill. Indeed, when working with very large data sets, it may be your only option.

[1]: /2012/07/09/10-shell-commands-for-data.html
