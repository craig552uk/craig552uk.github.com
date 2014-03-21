---
layout: post
title: Google Analytics Reports in Google Sheets
description: How to get Google Analytics report data in Gogole Sheets - Easily!
---
The [new Add-ons in Google Sheets][1] allow you to do all sorts of exciting things with spreadsheet data. My favourite (for now) is the Gogole Analytics Add-on, which makes it incredibly easy to pull analytics report data in to a spreadsheet using the Google Analytics API.

Add-ons are only available in the [New Google Sheets][2], so if you're not yet using them hit "Try the new Google Sheets" at the bottom of a spreadsheet.

To install the Gogole Analytics Add-on hit, **Add-ons** > **Get Add-ons...** in the menu. Search for "Google Analytics" in the store, then install it. You'll probably have to authorise the app to access your drive account.

Once installed there'll be options for it on the **Add-ons** menu.

Click **Add-ons** > **Google Analytics** > **Create New Report**

This will open up a wizard (are they still called that?) to let you configure your first report. Give it a name e.g. "My Report". Choose the account, property and profile you want to use. And select the metrics and dimentions. If you're not sure try setting metrics to **"Visits"** and Dimensions to **"Source/Medium"**. Then hit **Create Report**.

This will create a new worksheet containing the report configuration.

To run the report click **Add-ons** > **Google Analytics** > **Run Reports**

It'll take a moment or two, then give you a notification. If there are any problems with your report configuration, you'll see a message here.

The results of the report will be created in a new worksheet, titled after your report. Now you've got the data and can do all the usual spreadsheet magic.

You can configure multiple reports on the Report Configuration worksheet, they will all be run at the same time and each save their data in a seperate worksheet. Each time you run a report, it'll overwrite the previous data. Unless you rename a report, in which case it'll create a new worksheet under that name.

###Building Reports

Getting the data you want in a report can take a bit of trial and error. I'd reccommend using the [Google Analytics Query Explorer][3] to develop your reports. This tool gives you a configurable interface to the Reporting API. Use it to try out different configurations, then once you're happy, copy the settings in to the spreadsheet.

###Working with Dates

Use the built-in date functions in Google Sheets to create reports which run over relative time periods. This'll save you having to manually update the date field every time you run the report. Here's a few examples:

- Today `=TODAY()`
- One week ago: `=DATE(YEAR(TODAY()),MONTH(TODAY()),DAY(TODAY())-7)`
- The first day of last month: `=DATE(YEAR(TODAY()),MONTH(TODAY())-1,1)`
- The last day of last month: `=DATE(YEAR(TODAY()),MONTH(TODAY()),0)`
- The first of January last year: `=DATE(YEAR(TODAY())-1,1,1)`

###Formatting Values

Google Sheets has extensive formatting options, but sometimes you'll need to tweak the values returned by the Analytics API to get them to work:

- Percentage values (e.g. % New Visits, Bounce Rate) need to be divided by 100 to format correctly
- Duration values (e.g. Av. Time On Site) need to be divided by 86400 (seconds in a day) to format correctly.

###Problems

There is a bug in the new Google Sheets, which prevents charts from appearing in PDF exports or when printing worksheets. This is a bit annoying if you want to distribute reports. Charts are included in exported XLSX documents, but the formatting can get a bit messed up sometimes.



[1]: http://googledrive.blogspot.co.uk/2014/03/add-ons.html
[2]: https://support.google.com/drive/answer/3541068?p=help_new_sheets&rd=1
[3]: http://ga-dev-tools.appspot.com/explorer/