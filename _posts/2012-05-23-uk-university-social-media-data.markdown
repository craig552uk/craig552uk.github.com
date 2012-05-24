---
title: UK University Social Media - The Data
layout: post
---
A few weeks ago, on a bored Wednesday afternoon, I spent a few hours compiling a [list of the social media accounts used by UK Universities][2]. The motivation behind this exercise was that I wanted to play around with [D3.js][3] and needed some interesting data to mess with. The use of Twitter by UK Universities tickled my fancy, so I set out on Google to find a list of accounts.

With no-such list forthcoming in the search results, I decided to compile my own. While I was at it, I thought, I might as well note down a few other accounts too. At the [University of Leicester][4] we have [Twitter][5], [Facebook][6], [YouTube][7] and [Flickr][8] accounts, so that seemed a good place to start. Also [iTunesU][12] is a growing platform, I wondered how popular it was, so that went on the list too.

The first problem I faced was getting a list of all institutions. League tables seemed a good place to look, the three biggest being [The Times][9], [The Guardian][10] and [The Complete University Guide][11]. The Times hides their rankings behind a pay-wall (boo). The Complete University Guide publishes their data freely on the web, but it's not available to download. I didn't really feel like writing a scraper and given that the [Guardian data][13] is on GoogleDocs, I didn't need to.

I did notice that the Guardian and Complete University lists weren't the same length. I can only assume that each had different criteria for inclusion. At the time I didn't want to try to merge them together, so I stuck with the Guardian list and set about collecting the data.

Finding the data took surprisingly little time. All-in-all I spent about 2 hours copying and pasting URLs in to the spread sheet. I didn't hunt too hard for account information, if it wasn't easy to find from the university home page I didn't include it. I could have searched Twitter, Facebook etc. but I'd have had no way of verifying the accounts belonged to the institutions that they claimed to. I also expected that some universities would have multiple accounts, and I wanted to know which one they viewed as their 'primary'.

Yesterday I shared the spreadsheet with the [WEB-INFO-MGT][14] mailing list and received a flood of responses from staff at other Universities. As I expected, there were a few additions to the list and quite a few blanks have been filled in too. To all those who replied, thank you, I really appreciate it.

I hope that [the data][2] will be useful to someone other than myself. It's interesting to see how Universities are using SM in different ways and different contexts, but I'll save that analysis for another post. 

And finally, after all that I did get to play around with D3. I ended up building [an interactive comparing key metrics of UK University Twitter Accounts][1]. Perhaps you'll find that useful too. :)


[1]: /demos/uk_uni_twitter/
[2]: https://docs.google.com/spreadsheet/ccc?key=0AvmGs2D9eZgxdFVfWmFQZ2dNcjhBa2h5aXF2aUtyYWc
[3]: http://d3js.org/
[4]: http://le.ac.uk/
[5]: http://twitter.com/uniofleicester
[6]: http://www.facebook.com/UniofLeicester
[7]: http://www.youtube.com/UniversityLeicester
[8]: http://www.flickr.com/groups/universityleicester
[9]: http://thetimes.co.uk/Good_Uni_Guide
[10]: http://www.guardian.co.uk/education/universityguide
[11]: http://www.thecompleteuniversityguide.co.uk/league-tables
[12]: http://www.apple.com/education/itunes-u/
[13]: http://www.guardian.co.uk/news/datablog/2012/may/22/university-guide-2013-guardian-data
[14]: https://www.jiscmail.ac.uk/cgi-bin/webadmin?A0=WEBSITE-INFO-MGT