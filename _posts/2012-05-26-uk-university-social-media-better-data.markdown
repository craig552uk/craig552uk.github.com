---
title: UK University Social Media - The Data Improved
layout: post
---
Earlier in the week, [I published a dataset showing the use of social media by UK universities][1]. The dataset was somewhat limited in that I used an incomplete institution list and only included a few of the most popular networks. I've now updated the [dataset][2] to correct these limitations.

The institution list I'm now using is taken from the ["2010/11 Students by Institution"][3] data set published by HESA. It's worth reading the [associated notes][4] for this data set to understand the listing criteria they used. This list uses the full names for institutions and includes the HESA [Institution ID][5] and [UK Provider Reference Number][6], which should make it easier to join this dataset with others. I included the geographic region and retained the University Group information as these may be useful data segments to explore.

The dataset now also lists every social network that an institution claims a presence in. The rules for collecting this data were the [same as before][1], if I couldn't find it on the web site, I didn't include it. This was supplemented by the information I received from members of the [WEB-INFO-MGT mailing list][7]. I also included the university home page URL as it will simplify repeating the search in the future.

After lifting the URLs from the institution web sites I set about rationalising them. I did this to neaten up the visual aesthetic of the dataset making it easier for the eye to scan, but also the make it simpler to process the data with a script. In the case of web addresses I set all sub-domains to `www` and stripped any trailing paths. For Twitter accounts I edited the URL to the minimal valid format, stripping out the [shebang][8] and `www`. For most of the other networks I have recorded the [vanity URL][9] where one has been set. And for iTunesU I have recorded the direct link to content on iTunes. While doing this I (of course) ensured that all URLs still resolve to the target account.

In a minority of cases it has not been possible to identify a single 'primary' account for an institution. In these instances I have recorded the link to the appropriate directory page on the institution web site. Be wary of these if you are doing any automatic processing of the data. Also, some institutions don't have a dedicated web site of their own, their site being a subsection of a parent institutions web site. In these cases the web site address was omitted. 

I hope that this expanded and refined data set will be more useful. If there are any corrections, omissions or suggestions, please do [get in touch](/) or drop a comment below.

[1]: /2012/05/23/uk-university-social-media-data.html
[2]: https://docs.google.com/spreadsheet/ccc?key=0AvmGs2D9eZgxdFVfWmFQZ2dNcjhBa2h5aXF2aUtyYWc
[3]: http://www.hesa.ac.uk/content/view/1897/239/
[4]: http://www.hesa.ac.uk/index.php?option=com_content&task=view&id=2412&Itemid=278
[5]: http://www.hesa.ac.uk/index.php?option=com_collns&task=show_manuals&Itemid=233&r=06011&f=002
[6]: http://www.thedataservice.org.uk/datadictionary/glossary/ukprn0809.htm
[7]: https://www.jiscmail.ac.uk/cgi-bin/webadmin?A0=WEBSITE-INFO-MGT
[8]: http://en.wikipedia.org/wiki/Shebang_(Unix)
[9]: http://en.wikipedia.org/wiki/Vanity_URL