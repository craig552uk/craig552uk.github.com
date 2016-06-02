---
title: Quick and Dirty Server Monitoring
description: Here is a quick, easy approach to monitoring that uses only naitive Linux commands and good old reliable cron.
layout: post
---
There are a lot of optins out there for monitoring the health of your servers, some require more effort than others to setup and maintain.
Here is an quick, easy approach to monitoring that uses only naitive Linux commands and good old reliable cron.

Edit your root user cron table with this command:

```bash
sudo crontab -e
```

By default root cron uses `/bin/sh`, we want to swap this to `/bin/bash` which is more powerful, so add this line to the top of the file.

```bash
SHELL=/bin/bash
```

Our monitoring functions in two halves, tests which run every minute, logging information to file if they fail.
And the email alert, which gets sent if any informaiton has been logged.

Here's a few tests for memory use, disk use and load average.


```bash
# Memory usage
* * * * * free | awk '/Mem/{if($3/$2>0.9){exit 1}}' || free -m > /tmp/memory.alert

# Disk usage
* * * * * df | awk '/\/$/{if($3/$4>0.9){exit 1}}' || df -h > /tmp/disk.alert

# Load Average
* * * * * uptime | sed 's/,//g' | awk '{if($10>0.95){exit 1}}' || uptime > /tmp/load.alert
```

The basic format of each test is to parse the output of a system command testing some value against a threshold (0.9 for memory and disk use, 0.95 for load average).
If the threshold is reached the command ends with exit code 1, an error code, this causes the second half of the command to fire (after the logical OR `||`).
This half simply logs the output of the system command to a temporary file.

Now we can check for these alert logs every 10 minutes.
If any exist, the contents of the logs are sent by email and the files deleted.

```bash
# Send notification email max every 10 minutes
*/10 * * * * ls /tmp/*.alert > /dev/null 2>&1 && cat /tmp/*.alert | mail -s "Error" me@example.com && rm -f /tmp/*.alert
```

This is far from a comprehensive solution, but for quick and dirty monitoring a little shell scripting can go a long way.
