---
layout: post
title: Scraping Planning Applications
description: Here I explain how I wrote a scraper for the Hammersmith & Fulham planning applications site
---

In response to a [question posted on the ScraperWiki mailing list][1], I have written a scraper to extract planning applications for the Hammersmith & Fulham planning application site. This is very much a non-scraper friendly site, I had to make use of quite a few little tricks to extract the data.

Another poster pointed out that the site has [a search form][2], which allows visitors to list all validated or decided applications for the past week. Search forms can be very helpful when writing web scrapers. They take an input from the user and use that to return results. Scrapers can usually be written to emulate the search submission and get information back from the site.

I began exploring the planning site search by submitting a few requests and exploring the results in my browser. Often search forms pass parameters on the [query string][3]. This is the last part of a URL, a series of key-value pairs after a question mark. In this case the search form was not using the query string, results were displayed on a different page from the search form, but the URL remained otherwise useless for scraping purposes.

Given that the search form is not passing data to the server in the query string, the only other option is that the search parameters were being sent in the HTTP headers. These are not usually visible in the browser, to see them I had to use the Chrome developer tools. Firefox, Safari and (to a much lesser extent) Internet Explorer, have their own developer tools that also allow you to view the HTTP headers.

Using the network monitor in developer tools, I could see that there were three parameters that were submitted from the search form.

The first `searchtype` has the value `WEEKLY`. This is built in to the form, presumably it identifies the type of search.

The second `selWeeklyListRange` has a value like `30/12/2012|5/1/2013`. This shows the start and end dates for the search query. The web form has these ranges built in to a drop-down selection list.

The final `weektype` has either `VAL` or `DEC` as a value. These return either validated or decided applications respectively.

Using [curl][4] I can submit a request to the server, simulating a submission of the search form.

    curl --data 'searchtype=WEEKLY&selWeeklyListRange=30/12/2012|5/1/2013&weektype=VAL' http://www.apps.lbhf.gov.uk/PublicAccess/tdc/DcApplication/application_searchresults.aspx

Having played around with the parameters I learned that the `selWeeklyListRange` parameter accepts any date range. Although if there are too many matching results none are returned.

The next thing to notice is that the results are paginated. Sometimes searches allow you to specify the number of results per page, this can sometimes be used to avoid pagination altogether. In this case you can specify the number of results per page from the search results, but not form the initial search form. So we have to work around it.

This site does tell you how many matching results there are and how many pages they are spread across. As before, I began to explore the submitted parameters using curl. However the planning site seems to make use of session cookies to store some information related to pagination, in addition to the submitted parameters.

To get subsequent pages of results the following parameters are used. `currentpage` gives the number of the page requested, e.g. `2`. `pagesize` gives the number of results per page, e.g. `10`. I don't know what `module` is for, but it always seems to have the value `P3`.

Having identified several nuances of the planning search system, these can be incorporated in the scraper code.

In this script I'm using the [httpclient][5] library to make requests and handle responses. It's easily [configured to use cookies][6].

The [initial search query][7] POSTs the `selWeeklyListRange`, `searchType` and `weekType` parameters to the search results URL.

The [number of pages and results][8] are extracted from the results page.

The results are also extracted, [formatted as CSV and saved to file][10].

If the results are paginated, [more requests are made][9] for the subsequent pages.

Any [exceptions in the response processing are caught][11], usually this are because no results are returned.

The full source for the scraper is [available on GitHub][12].

[1]: https://groups.google.com/forum/#!topic/scraperwiki/N1Cz64aKtMA/discussion
[2]: http://www.apps.lbhf.gov.uk/PublicAccess/tdc/DcApplication/weeklylist_searchform.aspx
[3]: http://en.wikipedia.org/wiki/Query_string
[4]: http://curl.haxx.se/
[5]: https://github.com/nahi/httpclient
[6]: https://github.com/craig552uk/data_scrapers/blob/master/planning_applications/scraper.rb#L73
[7]: https://github.com/craig552uk/data_scrapers/blob/master/planning_applications/scraper.rb#L79
[8]: https://github.com/craig552uk/data_scrapers/blob/master/planning_applications/scraper.rb#L86
[9]: https://github.com/craig552uk/data_scrapers/blob/master/planning_applications/scraper.rb#L96
[10]: https://github.com/craig552uk/data_scrapers/blob/master/planning_applications/scraper.rb#L52
[11]: https://github.com/craig552uk/data_scrapers/blob/master/planning_applications/scraper.rb#L104
[12]: https://github.com/craig552uk/data_scrapers/blob/master/planning_applications/