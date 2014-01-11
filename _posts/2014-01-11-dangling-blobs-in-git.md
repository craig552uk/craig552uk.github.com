---
layout: post
title: Missing Blobs in Git
description: how to fix a missing blob in git
---

I've just had to fix a missing blob in a repo. Here's how I did it.

you can see exactly what's missing with `git fsck`.

    > git fsck --full
    Checking object directories: 100% (256/256), done.
    Checking objects: 100% (137/137), done.
    missing blob 2d31815dd6357b5c7573a4eebc6792b168b4d6a4

We need to find which file theblob refers to.

    > git ls-tree -r HEAD | g 2d31815dd6357b5c7573a4eebc6792b168b4d6a4
    100644 blob 2d31815dd6357b5c7573a4eebc6792b168b4d6a4  lib/oauth2client/crypt.py

Now we can reinstate it.

    > git hash-object -w lib/oauth2client/crypt.py
    2d31815dd6357b5c7573a4eebc6792b168b4d6a4

So everything should be ok again.

    > git fsck --full
    Checking object directories: 100% (256/256), done.
    Checking objects: 100% (137/137), done.