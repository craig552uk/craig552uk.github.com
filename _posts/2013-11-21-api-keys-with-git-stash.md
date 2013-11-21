---
layout: post
title: API Keys with Git Stash
description:
---

The first step is to keep your API keys in a seperate file from the rest of your code. How you do this will be different depending what language, framework, envirenment &c. you use. For this demonstration I'll use python.

Here we have a simple program consisting of two files.

<pre><code># config.py
API_KEY = "__YOUR_API_KEY__"</code></pre>
<pre><code># app.py
import config
print config.API_KEY</code></pre>

We can commit these changes to our repo together.
(NB: there may also be an app.pyc file, but we can [easily ignore this][1])

    $ git add config.py app.py
    $ git commit -m "Basic application with config"

We can edit the config file to contain our private API key

    # config.py
    API_KEY = "abc123_development_key"

And we'll also make some changes to our app.

    # app.py
    import config
    print "This is your API key:"
    print config.API_KEY
    
Now we can commit chanes to the app file, leaving the config file change uncommitted.

    $ git add app.py
    $ git commit -m "Improved app"

So far, so simple. But what if we want to have multiple versions of our api keys?
This is where [git stash][2] comes in handy.
The stash command allows you to save uncommited changes to one side so that you can work without them, then reapply these changes later.

Lets stash our changed config file.

    $ git stash save "Development API Key"
   
Now we save a different configuration.

    # config.py
    API_KEY = "abc123_production_key"

And stash this change too.

    $ git stash save "Production API key"
    
We can list all our stashes.

    $ git stash list
    stash@{0}: On master: Production API Key
    stash@{1}: On master: Development API Key

Now can can easily swap between different versions of the config file.

Applying production key from stash:
<pre><code>$ git stash apply stash@{0}</code></pre>
<pre><code># config.py
API_KEY = "abc123_production_key"</code></pre>
    
Applying development key from stash:   
(Note you must revert the previous change first)
<pre><code>$ git checkout config.py
$ git stash apply stash@{1}</code></pre>

<pre><code># config.py
API_KEY = "abc123_development_key"</code></pre>

[1]: http://git-scm.com/docs/gitignore
[2]: http://git-scm.com/docs/git-stash
