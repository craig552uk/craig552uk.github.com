--- 
layout: post
title: Learning Ruby and Ruby on Rails
tags: 
- Programming
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "464054823"
---
I've been wanting to learn ruby and rails for a while now. But my previous efforts haven't worked out well. These past few weeks I've committed to finally getting a reasonable grasp on this technology. I've used a few different resources and picked up a couple of tips en-route, which I share for you here.

<h2>Installing Everything</h2>
I've tried and failed to install Ruby and Rails before, on one occasion I completely frigged my <del>L</del>AMP stack. I run Ubuntu on my laptop and this is the guide that worked for me.

<a href="http://blog.sudobits.com/2011/10/27/how-to-install-ruby-on-rails-in-ubuntu-11-10/" target="_blank">How to install Ruby on Rails in Ubuntu 11.10</a>

Having installed everything, you might notice that the Ruby version swaps back to 1.8.7 with every new session. You can set the default version of Ruby by running this command.

<pre lang="shell">$ rvm --default use 1.9.2</pre>

<h2>Starting With Ruby</h2>
Before starting with Rails, it's well worth having a good grasp of Ruby. I found these two tutorials very helpful. The first is ideal if (like me) you've never written a line of ruby. The second is a tour-de-force around the language.

<a href="http://www.ruby-lang.org/en/documentation/quickstart/" target="_blank">Ruby in 20 Minutes</a>

<a href="http://rubykoans.com/" target="_blank">Ruby Koans</a>

When working through the Koans, have an interactive ruby console open to try out things as you learn them. You can open a Ruby console like this:

<pre lang="shell">$ irb</pre>

<h2>Starting With Ruby on Rails</h2>
Once you're up-to-speed with Ruby, you can start dipping your toe in to Rails. I've not spent much time with Rails yet, but so-far, I've found these resources very useful.

<a href="http://guides.rubyonrails.org/getting_started.html" target="_blank">Getting Started With Rails</a>

This is a short exercise that takes you through the basics of Rails while building a simple blog platform.

<a href="http://ruby.railstutorial.org/chapters/beginning#top" title="Rails Tutorial">Rails Tutorial</a>

You should definitely take the time to work your way through the Rails Tutorial. The course covers all areas of the framework (including versioning with <a href="http://git-scm.com/" title="Git">Git</a>, unit testing with <a href="http://rspec.info/" title="RSpec">RSpec</a> and deploying to <a href="http://www.heroku.com/" title="Heroku">Heroku</a>) on the way to building a Twitteresq micro-blogging app. The author suggests that no prior knowledge of ruby is needed, but personally I found it better to work through the Ruby Koans first to better separate the Ruby from the Rails in my mind.

<h2>Resources</h2>

<a href="http://railsapi.com/doc/rails-v3.0.8rc1_ruby-v1.9.2/" target="_blank">Rails API</a>

A complete reference for the Rails API and the Ruby language.

<a href="http://www.phptoruby.com/" target="_blank">PHP to Ruby</a>

If you're coming to Ruby from PHP (as I am) this site is your bi-lingual dictionary.

