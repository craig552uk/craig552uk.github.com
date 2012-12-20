---
layout: post
title: Three Essentials for a Modern Web Publishing Architecture
description: There are three essential components of a modern large scale web publishing platform
---

This past year I've been thinking an awful lot about web publishing platforms. The landscape of the web is changing rapidly. We are going through an enormous shift in the way people access online information, the devices they use and how they consume content.

In this brave new world we need brave new publishing platforms.

There's a hell-of-a-lot of things to consider here, but through various conversations and reading the work of others I've boiled this down to three essential points.


## Separation of Storage and Presentation ##

There are now more publishing channels for our content than ever before. Gone are the days when people consumed our content in the formats we chose, now people expect to access information in the way that suits them. They're using different devices; desktops, laptops, mobiles, tablets, e-readers, TVs, games consoles. They discover your content in different places; Google search, Google+, Facebook, Twitter. Or maybe they don't come to your site at all to consume your content, instead preferring feed readers or news aggregation sites.

> "Get your content ready to go anywhere because it’s going to go everywhere."
>
> [Bradley Frost](http://bradfrostweb.com/blog/web/for-a-future-friendly-web/)

Writing dedicated content for every channel is not practical. Content should be written once and published many times. It needs to be stored in one place ready to be pushed out to <del>anywhere</del> everywhere it's needed. You need a single, central repository of reusable content. A repository that is accessible through a web API (probably [REST](http://en.wikipedia.org/wiki/Representational_state_transfer)) to any platform, to any device, to any location and to any person.

## Search at the Heart of the System ##

Storing all your content in a single large repository leaves you with a problem; how do you find the content you need? Search is (obviously) the answer.

But this is not search done-the-old-way. This is not *just* site search for visitors. This is a central search engine giving you the power you isolate a fine grained subset of your content.

As with the content store, the search engine *must* be accessible through a web API, allowing you to present the the results of a search query anywhere.

With a central search API you can pull together content about a particular subject in an app or landing page. You can offer faceted navigation, personalised home pages and related links.

In a modern web publishing architecture, search is not a peripheral feature, it is at the very heart of the system.


## Content is Structured Data ##

The quality of results coming out of a search engine are only as good as the quality of the content going in to the search index. If your content is messy and poorly structured, you're not going to get Google-quality search results.

Search engines need help to make sense of content, they need structured data.

Providing metadata will help the search engine to build relationships between content. At the most basic level store information about who authored a content item and when it was created and updated. Tagging and categorising content helps to identify associations, though doing this consistently in a large organisation is very hard.

As the information in the content store becomes more structured, the content becomes more flexible and provides more value. As the metadata becomes more fine-grained, the content can be presented through more targeted channels.

Structured data is also much easier to link with external data sources. Joining your content with public knowledge multiplies the value even further, making it more accessible and more relevant.

## - ##

Separating content storage from presentation, putting search at the heart of the system and structuring your content data, vastly expands the scope of the possible. Giving you the power and flexibility to connect with your audience on their terms.

Systems built in this way are already in use at the BBC, The Guardian and other large publishers - which is mainly where I learned about them. The actual implementation of these systems requires a great deal of careful thought, consideration and attention to detail, which may not be obvious from this simplified list.

These ideas are starting to filter down to smaller organisations (like universities ;-) ) who are stuck wrestling with the problems of the old ways of doing things.

In my view, these three high-level concepts are absolutely essential for a modern web publishing platform.

What do you think?