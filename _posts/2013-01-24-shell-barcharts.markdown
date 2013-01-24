---
layout: post
title: Barcharts in the Command Shell
description: A little function I wrote to plot the distribution of records on STDIN
---
Here's a little function I wrote to plot the distribution of values passed in through a pipe.

    function dist(){
      awk '{ t[$0]++ }END{ for(i in t){ b=""; for(j=0;j<t[i];j++){ b=b"#" } print i,"\t",b,t[i] } }'
    }

Pipe in a list of values, it will tally up the results and present a nice little bar chart.

e.g. Popularity of default shells among users:

    $ cat /etc/passwd | cut -d':' -f7 | dist
    /bin/bash    ######### 9
    /bin/false   ############# 13
    /bin/sh      ################# 17
    /bin/sync    # 1

e.g. Requests per second to Apache

    $ cat /var/log/apache2/access.log | awk '{print $1,$2,$3}' | dist
    Jan 20 07:05:00    ################### 19
    Jan 20 07:05:01    ############################## 30
    Jan 20 07:05:02    #################### 20
    Jan 20 07:05:03    ####################### 23
    Jan 20 07:05:04    ########## 10
    Jan 20 07:05:05    ########################## 26

Stick it in your `~/.bashrc`
