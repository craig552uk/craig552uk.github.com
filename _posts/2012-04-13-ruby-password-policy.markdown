---
title: Ruby Password Policy Gem
layout: post
---
A while back I wrote a [PHP library][1] to simplify enforcing a password formatting policy.
Looking for an excuse to get my teeth in to writing Ruby Gems, I've ported this library to ruby.

The package is hosted on [RubyGems][2] and the source is on [GitHub][3].

Installation is easy...

    $ gem install password_policy

As is using it...

    -> require 'password_policy'
    -> @policy = PasswordPolicy.new
    -> @policy.min_length = 8;
    -> @policy.max_length = 64;
    -> puts "Password OK!" if @policy.validate 'passw0rd'
    => "Password OK!"

There isn't the full functionality of the PHP version. So send me pull requests with enhancements if you want to.

I've had in mind a project to write a general purpose Genetic Algorithm library for some time.
Now I've cut my teeth deploying gems, I might crack on with that soon.

[1]: https://github.com/craig552uk/password-policy
[2]: https://rubygems.org/gems/password_policy
[3]: https://github.com/craig552uk/password_policy