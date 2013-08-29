---
title: A New Direction for Easy Open Data
layout: post
description: About 6 months a go I published Easy Open Data, a tool to make it easy to publish custom-formatted open data from Google Spreadsheets. The response I received was wonderful, and it has been gone on to be used by people to open up all sorts of interesting data. Here's what's happening next.
---
About 6 months a go I published [Easy Open Data][1], a tool to make it easy to publish custom-formatted open data from Google Spreadsheets. The [response I received was wonderful][2], and it has been gone on to be used by people to open up all sorts of interesting data.

<blockquote class="twitter-tweet"><p>Member pages now widely-updated. Twitter/Facebook links added thanks to <a href="http://t.co/FHkFTbyI8g">http://t.co/FHkFTbyI8g</a> and <a href="https://twitter.com/gavinsblog">@gavinsblog</a> (eg: <a href="http://t.co/Fp2cSlfRSx">http://t.co/Fp2cSlfRSx</a> )</p>&mdash; kildarestreet.com (@KildareStreet) <a href="https://twitter.com/KildareStreet/statuses/328910661696487425">April 29, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This project attracted the attention [Michael Roberts][8] who works with International Development agencies. He saw that a tool like this was ideal for cash poor, time poor, NGOs who are required to publish aid spend information in the [IATI][3] standard he helped to develop. Together we put forward a funding bid for a project to develop the tool, to promote and support it's use among the ID community. Unfortunately we didn't receive the funding we needed. 

So, that's the past. Now I want to talk about the future.

Despite this disappointing set-back, we are both still very committed to developing the tool and promoting it's use.

I have decided to rewrite the code base from scratch, there are a few reasons for this. Some of the feedback I've had from users has identified some incredibly useful features that I hadn't considered in the initial version. To deliver these would require some fairly fundamental changes to the tool. Rather than chopping around the already messy code base, it's seemed a good idea to start over. 

I also wanted to move the product to use [Google App Engine][6]. Given that the tool leans so heavily on Google Drive, I thought it reasonable to move closer to that eco-system. Easy Open Data is written in Ruby. As GAE only supports Java, Python and Go, this would have to change. To me Python was the most sensible choice, its a common language among open data enthusiasts, with a strong data mining heritage and used in high-profile products like [CKAN][6].

We will be publishing the tool under an open source licence (TBD, but probably [MIT][4]). At present two releases are planned.

Version 0.1 will be the first open release of the code base and is planned for November. This version of the tool will be minimally functional, in a fit state for developers to begin experimenting with, but not end users.

Version 0.2 will be a more polished, featureful, release. The first that is fit for end users. This can be expected early next year.

You can see track the development of these releases and planned features on the [issue tracker on GitHub][7]. If you have any suggestions or thoughts, feel free to add them there.

The last big development is the name. I chose "Easy Open Data" without much forethought (I'm no marketeer). But I always felt that this name fails to explain that this is a tool for publishing open data. I also felt that a new name would help to differentiate this new incarnation of the tool from the previous one.

The new tool is called **Open Data Press**. 

"Easy Open Data" will, from now on, only refer to the legacy version.

But what of this legacy? Over the past few months Easy Open Data has attracted a reasonably sized user-base. Some of whom have made impressive use of the tool. If you are among them, I'll be contacting you in the coming weeks. Asking for your input about the future of EOD and inviting you to join the new **Open Data Press** project.

Lastly, I'd like to thank everyone who's offered their support of this project so far. I'm thrilled by how the concept has resonated so well with so many people. Your feedback has been invaluable. I'm really excited for the future of this project, and I can't wait for you to [see what we've got planned][7].


[1]: http://app.easyopendata.com
[2]: /2013/03/11/thank-you-wonderful-product-launch.html
[3]: http://www.aidtransparency.net/
[4]: http://opensource.org/licenses/MIT
[5]: https://developers.google.com/appengine/
[6]: http://ckan.org
[7]: https://github.com/opendatapress/open_data_press/issues
[8]: http://www.groupsia.org/about/
