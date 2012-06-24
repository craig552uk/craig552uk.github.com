---
layout: post
title: Using Google Refine to Clean a Data Set
description: Google Refine is a cracking tool for tidying up data sets. It's got oodles of features that make light work of massively messy data. Here I want to show, from start to finish, how to tidy a public data set and prepare it to be consumed by some other process.
---

[Google Refine][2] is a cracking tool for tidying up data sets. It's got oodles of features that make light work of massively messy data. Here I want to show, from start to finish, how to tidy a public data set and prepare it to be consumed by some other process. We want to structure it with one record per row, with clear headings and consistent and useful data.

First off get hold of the data set. For this tutorial I'm going to work through cleaning up the [2010/11 Student by Institution data set from HESA][1]. Download and save the spreadsheet. Next open up [Google Refine][2] and create a new project. Select to get data from **This Computer** and choose the spreadsheet file you downloaded. Hit **Next** to upload the data.

On the next screen you configure how the data file will be imported. The preview shows what the data will look like after beign imported. That the first row has no data on it, so we can ignore it by checking the **Ignore first** check box and setting **1** lines. Notice how the preview updates to reflect these changes. We can also see that several rows are used to label to columns. We want a nice neat data file with headers all on one row, so we check set it to **Parse next 5 lines as column headers**. This vertically combines cell data to form column headers. This isn't quite in the format we want but we can tidy that up after the import. Next we choose to **Discard initial 1 rows of data** as these cells are empty. Finally we give our project a name and hit **Create Project**.

<p style="text-align:center">
  <a href="/img/posts/google-refine-1.png">
    <img src="/img/posts/google-refine-1-small.png" width="500" height="264" alt="Google Refine - Importing data"/>
  </a>
</p>

The first thing we are going to do is rename some of the headers to make them more concise and readable. To rename a column, click the down arrow on the header and select **Edit column > Rename this column**. Give the columns more sensible names, for example change "HE students Postgraduate Mode of study Full-time" to "PG Full-time". You may find it useful to refer back to the original data source when doing this.

You may have noticed that there are a few columns that appear to have no data in them. We want to remove these, but need to be sure that it is safe to do so. On the header of one of these columns, click the down arrow and select **Facet > Text facet**. A view will appear on the left-hand side. This shows a summary of the contents on the column. In this case, there is only one category **blank**, which tells us that all the cells are empty. Facets are useful for much more than this, and we'll be using them some more in a bit. For now, choose **Edit column > Remove column** from the column header menu. Repeat this to delete the other empty columns. Click the **Remove All** button in the left hand panel when you have finished.

Next, we're going to clean up the names of the institutions. Notice that some of them have bracketed expressions in their values (you may want to increase the number of records to 50 using the link at the top). In the original data set these referenced footnotes in the spread sheet, but we want clean data so are going to remove them. From the header menu of the institution column, select **Text filter**. In the filter on the left hand side type `#`. The data view updates to show only the records containing references. At this point we could manually edit each cell, but Google Refine gives us a better way. We are going to split the value of each cell at the point where an opening bracket appears, then keep just the first portion of text in the cell. But first; notice that one institution uses brackets in it's name, we have to edit this cell to ensure that we don't throw away part of the name.

Change `University of London (Institutes and activities)(#9)` to `University of London Institutes and activities(#9)`.

Now, on the institution header menu, select **Edit cells > Transform...**. In the expression type `value.split('(')[0]`, notice how the data preview updates as you type. Click **Ok** to apply the transform.

Don't be shocked to see all the data disappear. We still have the text filter applied, and as no institutions have a `#` in their name, there are no results to display. Click **Remove all** to reset the filters.

Now we're going to look for any rows that we need to tidy up. Start by applying a text facet to the INSTID column. Notice how not all of the cells contain numbers, some of them are blank and some others contain text. We want to strip out these rows from the data set. Leaving the INSTID facet in place, apply a text facet to UKPRN. Here we can see that most of the cells have sensible values, but a sizeable chunk are blank. Click **(blank)** in the UKPRN facet to show only those rows. Notice that this shows mostly blank rows and the rows with text in the INSTID column, but also some of the rows we want to keep. This is because Google Refine is (incorrectly) interpreting multiple rows as a single record, to fix this click **Show as rows** at the top.

We are almost ready to delete these rows, but first notice that some of the rows show totals for student numbers in different countries. This is useful data, but we don't need to explicitly retain it in the data set as it can easily be calculated. In the next step we'll make this even easier to do by adding a countries column for each row. Now we can delete all these rows by clicking the header menu of the **All** column and selecting **Edit rows > Remove all matching rows**. Notice that the **(blank)** category in the UKPRN facet is now at 0. Click **reset** at the top of this facet to reset the data view. Notice that the INSTID facet only contains sensible data. **Remove all** the facets before continuing.

Now we are going to add a new column to the data set, which will simplify segmenting the data by country. Firstly apply a text facet to the Region column. This shows the quantity of institutions in each region, click the **SCOT** region to show all Scottish universities. On the header menu of the Region column, click **Edit column > Add column based on this column...**. In the pop-up window, name the new column `Country` and type `"SCOTLAND"` (including quotes) in the Expression field and click **OK**. This creates a new column with the value 'SCOTLAND' in every visible cell. Click **reset** at the top of the facet to see that it is not applied to all rows.

Now we are going to add values for the Welsh institutions. Click **WALE** in the Region facet to display only Welsh universities. The Country column already exists, so we just need to edit the cell values. Select **Edit cells > Transform...** from the country header menu. In the expression field type `"WALES"` (including the quotes) and click **OK**. Repeat this process for the institutions in the **NIRE** region setting `NORTHERN_IRELAND` as the Country. Then **reset** (not remove) the facet.

The only country left to define is England. We could do this by applying a text facet to country, selecting **(blank)** cells and editign them that way, but we've already seen that so we'll use a different method. With the text facet still applied to the Region column, click the **EAST** region then hover over the **EMID** region and click **include**. This way, the text facet lets us view rows in multiple categories. Include all other regions except **SCOT**, **WALE** and **NIRE**. Now, with all the English records selected, se the Country value to `England` as before. If you want, you can check that you have set the Country value for every row by applying a text facet to the Country column and looking for and **(blank)** cells.

Now we have a data set that has been cleaned up. We have one institution per row, with no surplus information. And we've reformatted the dataset to make it easy to reprocess without loosing any of the information. I'd encourage you to watch the [Google Refine screen casts][2] and to explore the other features this tool has to offer, And always remember, when sharing/publishing reformatted data, include a link back to the original data source so that others can see the changes you have made, and if possible include a summary of those changes with the data.

Happy mining!

[1]: http://www.hesa.ac.uk/content/view/1897/239/
[2]: http://code.google.com/p/google-refine/
[3]: http://twitter.com/psychemedia
[4]: http://twitter.com/mhawksey