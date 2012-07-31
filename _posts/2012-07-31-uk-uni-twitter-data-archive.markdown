---
layout: post
title: UK Uni Twitter Data API
---
At the start of the month I began collecting data about UK university twitter accounts. I wanted to see how the friends and followers of these accounts changes over time. Not just the absolute quantities, but the make up of the demographics themselves.

I took the list of accounts from the [spreadsheet I complied a couple of months ago][2].

To do this I needed to store the ids of every friend and follower for each account at regular intervals. Initially I collected this data on a daily basis, but I quickly realised that this would push me out of the free data plan of my hosting provider. So I changed the system to capture data weekly.

The twitter API terms of service only allow you to store object ids, so that's all there is. 

I've made this data available through a simple API. Requests are made to a URL with the twitter id number for the account. You can find out the id number for an account using [this tool][1].

    curl -X GET http://uk-uni-twitter.herokuapp.com/institution/81089247

The request returns a JSON object that looks something like this.

    {
       "_id": "97018704",
       "_rev": "6-dc76828e60ad2081eae662a6ac5456a2",
       "id": 97018704,
       "id_str": "97018704",
       "screen_name": "LeedsMusic",
       "friends": {
           "2012-07-01": {"count": 1603, "ids": [42854735, ... 65944606] },
           "2012-07-02": {"count": 1603, "ids": [42854735, ... 65944606] }
       },
       "followers": {
           "2012-07-01": {"count": 3606, "ids": [171436661, ... 17871952] },
           "2012-07-02": {"count": 3607, "ids": [624718034, ... 17871952 ] }
       },
       "favourites": {
           "2012-07-01": {"count": 34 },
           "2012-07-02": {"count": 34 }
       },
       "listed": {
           "2012-07-01": {"count": 82 },
           "2012-07-02": {"count": 83 }
       },
       "statuses": {
           "2012-07-01": {"count": 5672 },
           "2012-07-02": {"count": 5678 }
       },
       "last_updated": 1343167880,
       "last_updated_str": "2012-07-24 22:11:20 +0000"
    }

This gives data for the friends, followers, favourites, listed and statuses of the account. For each set of captured data, the key gives the date of data capture. For friends and followers a complete list of ids are provided for that time. The object also includes the timestamp of the last update of the record.

There's no rate limiting on this API so please don't hammer it with requests.

If you find yourself making active use of this resource, please do let me know. I expect that the growth in the data means I'll have to start paying for hosting in a few months, so I'll only keep the project running if it's being used.



[1]: http://www.twitterlookup.com/
[2]: /2012/05/24/uk-university-social-media-better-data.html