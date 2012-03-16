--- 
layout: post
title: How To Create and Test a Ruby on Rails Plugin
tags: 
- Programming
- Tutorials
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "466380156"
---
I've been learning how to create a plugin in Ruby on Rails 3.1 and test it using RSpec. I haven't been able to find a tutorial for this anywhere, so I'll share what I've done here.

First up, use rails to generate a new plugin.
<pre lang="shell">
$ rails generate plugin HelloWorld
</pre>
This will create a folder in <code>/vendor/plugins/hello_world</code> containing template files for the plugin. What it won't do is create a test file for RSpec, so we'll create it manually later. This is a <a href="https://github.com/rspec/rspec-rails/issues/258" target="_blank">known issue</a>.

In the plugin folder there's a few files, most of which are self-explanatory. We're only going to be interested in <code>hello_world/init.rb</code> and <code>hello_world/lib/hello_world.rb</code>.

<code>hello_world/init.rb</code> tells Rails what to do with the plugin. We're not going to do too much, so we just need to require the main class file.

<pre lang="ruby">
# Include hook code here
require 'hello_world'
</pre>

Next we create the main class in <code>hello_world/lib/hello_world.rb</code>.

<pre lang="ruby">
# HelloWorld
class HelloWorld
end
</pre>

Before we go any further we should set up a test, because we do things properly. RSpec tests live in <code>/spec</code> so we'll create a folder for plugin tests and create a spec file for our plugin there.

    $ mkdir /spec/plugins
    $ touch /spec/plugins/hello_world_spec.rb

Lets define a simple test for our plugin in <code>/spec/plugins/hello_world_spec.rb</code>

    require 'spec_helper'
    describe HelloWorld do
      describe "should have method" do
        it "'hi'" do
          response = HelloWorld.instance_methods.include? :hi
          response.should == true
        end
      end
    end

We've done a few things here, firstly we've required the RSpec helper file, all RSpec tests need this. The first describe block is defined with the name of the class we are testing. Then we've added a test to check that a method exists. If you run the test, it should fail.

    $ rspec /spec/plugins/hello_world_spec.rb

Now we can add a method to the <code>HelloWorld</code> class, which should get the test to pass.

`HelloWorld`

    class HelloWorld
      def hi
        "Hello World!"
      end
    end

That's it!

Now you have a working plugin, you can use it in your Rails application. You can create objects in controllers and call functions from views, there's no need to explicitly require the plugin anywhere.

`app/controllers/pages_controller.rb`

    class PagesController < ApplicationController
      def hello
        @hw = HelloWorld.new
      end
    end

`app/views/pages/hello.html.erb`

    <p><%= @hw.hi %></p>
