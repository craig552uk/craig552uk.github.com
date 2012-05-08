---
layout: post
title: Installing R on Ubuntu
---

The statistical analysis and data mining package [R][1] is a frustratingly difficult piece of software to find help for in Google (it reminds me of trying to find [this band][2] on Napster back in the day). 

Once I finally found it, the [installation instructions for Ubuntu][3] are less than direct. So, here's how I installed R on Ubuntu 12.04.

Firstly get the repository SSL key and import it in to apt.

    gpg --keyserver keyserver.ubuntu.com --recv-key E084DAB9
    gpg -a --export E084DAB9 | sudo apt-key add -

Next edit your sources list...

    gksudo gedit /etc/apt/sources.list

...and add the repository to the bottom. [Other sources are available][4]. 

    deb http://cran.ma.imperial.ac.uk/bin/linux/ubuntu precise/

Then install R.

    sudo apt-get update
    sudo apt-get install r-base

Now you can get an R prompt with.

    R

Or create a shell script with a [shebang][5].

    #!/usr/bin/Rscript
    print("shebang works")


[1]: http://www.r-project.org/
[2]: http://en.wikipedia.org/wiki/A_(band)
[3]: http://cran.r-project.org/bin/linux/ubuntu/README
[4]: http://cran.r-project.org/mirrors.html
[5]: http://en.wikipedia.org/wiki/Shebang_(Unix)