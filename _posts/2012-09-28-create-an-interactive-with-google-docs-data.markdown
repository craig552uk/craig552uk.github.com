---
layout: post
title: How To Create an Interactive With Google Docs Data
description: This tutorial shows how to build a data interactive, using D3.js and Miso.Dataset, with live data from a Google spreadsheet.
---
We all know Google Spreadsheets. They're easy to use, easy to share, easy to work with.
They're also great to manage the data to power an interactive visualisation.

The data for the chart will be stored in a [Google Spreadsheet][4]. We will use the [Miso Dataset][2] JavaScript library to fetch the data, and use [D3 JS][3] to draw a simple bar chart.

<p class="my-chart" style="text-align:center"></p>

First, create a spreadsheet in [Google Docs][4] and put some data in it. Give the column headings, use one row per record.

[Here's the spreadsheet I'm using in this example][1].

To use the spreadsheet as a data source you must first to publish it on the web.
Note that this is *not* the same as sharing it publicly.

1. Click `File > Publish to the web`
2. Click `Start Publishing`

In our project, we can now [load the data using the Miso Dataset JavaScript library][7].

    var ds = new Miso.Dataset({
      key: "0AvmGs2D9eZgxdFhOTGowSFEwNHNBQno5S1Bab2FnY3c",
      worksheet: "1",
      importer: Miso.Importers.GoogleSpreadsheet,
      parser: Miso.Parsers.GoogleSpreadsheet
    });
    ds.fetch({
      success : function() {
        // Data successfully loaded
      },
      error : function() {
        // Data loading failed
      }
    });

If the data has been successfully loaded the `success` function is called, if not the `error` function is called.

In the `success` callback we can use the spreadsheet data to build a chart.
Firstly, we convert the dataset in to an array, so that D3 can use it.

**Note:** D3 includes the [underscore.js][8] helpers like `Array.each()`

    var data = [];
    this.each(function(row){ data.push(row); });

Next we use D3 to create an SVG element.
We derive the height of the chart from the number of records in the data.
So if we add or remove rows of data from the spreadsheet, the chart will automatically be drawn at the correct size when the page is refreshed.

    var chart = d3.selectAll('.my-chart').append('svg')
      .attr('width', 300)
      .attr('height', function(){ return data.length*25; });

We also want our bar chart to handle data values of any size.
D3 makes this easy to do using a [scale][5], which maps an input domain to an output range.
Our input domain is from 0 up to the largest quantity in our data set.
And our output range is from 0 to 150, the largest width a bar can have in our chart.

**Note:** The quantity column is referenced by name. If the heading is changed in the spreadsheet you will need to change it in the JavaScript too.

    var scale = d3.scale.linear().domain([0, ds.max("Quantity")]).range([0,150]);

Our bar chart is going to have three components for each record.
There will be a label showing the category, a bar scaled horizontally and another label showing the quantity of the category.

To make these easier to handle we will use an SVG group element for each record.
In binding the data set to the groups returned by `selectAll()`, D3 creates one group for each record in the data set.
We also use the [translate function on the transform attribute][6] to stack the groups vertically.

    chart.selectAll('g')
      .data(data)
    .enter()
      .append('g')
      .attr('transform', function(d,i){ return "translate(0," + i*25 + ")"; });

Now we can create the three components inside the groups.

The category label is a [text element][9].

    chart.selectAll('g').append('text')
      .text(function(d){ return d["Category"]; })
      .attr('text-anchor', 'end')
      .attr('height', 25)
      .attr('x', 70)
      .attr('y', 20)

The bar is a [rectangle][10].
See how we use the scale to set the width.

    chart.selectAll('g').append('rect')
      .attr('fill', 'blue')
      .attr('height', 23)
      .attr('width', function(d){ return scale(d["Quantity"]); })
      .attr('x', 80)
      .attr('y', 2)

The quantity value is a [text element][9] too.
We reuse the scale to set the horizontal offset of the label.

    chart.selectAll('g').append('text')
      .text(function(d){ return d["Quantity"]; })
      .attr('height', 25)
      .attr('x', function(d){ return scale(d["Quantity"]) + 85; })
      .attr('y', 20)

And that's all there is to it.

<p class="my-chart" style="text-align:center"></p>

If you change the data in your spreadsheet (add/remove rows & change values) then refresh the page, you'll see the chart automatically scales to reflect the new data.

The full code is available on [GitHub][11], or in the source of this page.

**Disclaimer:** I suppose *technically* this isn't an interactive, because the chart doesn't response to any interaction events.
Though I hope you can see how this chart might be extended.
The focus of this tutorial was to demonstrate how data in a Google Spreadsheet can be used to power a JavaScript data graphic.


<script src="/js/d3.v2.min.js"></script>
<script src="/js/miso.ds.deps.min.0.2.2.js"></script>

<script>

  // Define Google spreadsheet as data source
  var ds = new Miso.Dataset({
    key: "0AvmGs2D9eZgxdFhOTGowSFEwNHNBQno5S1Bab2FnY3c",
    worksheet: "1",
    importer: Miso.Importers.GoogleSpreadsheet,
    parser: Miso.Parsers.GoogleSpreadsheet
  });

  // Fetch the data
  ds.fetch({
    success: function() {
      // Extract data to array
      var data = [];
      this.each(function(row){ data.push(row); });

      // Create SVG element for chart
      var chart = d3.selectAll('.my-chart').append('svg')
        .attr('width', 300)
        .attr('height', function(){ return data.length*25; });

      var scale = d3.scale.linear().domain([0, ds.max("Quantity")]).range([0,150]);

      // Create one group per data row
      chart.selectAll('g').data(data).enter().append('g')
        .attr('transform', function(d,i){ return "translate(0," + i*25 + ")"; });

      // Create rect element for bar
      chart.selectAll('g').append('rect')
        .attr('fill', 'blue')
        .attr('height', 23)
        .attr('width', function(d){ return scale(d["Quantity"]); })
        .attr('x', 80)
        .attr('y', 2)

      // Create text element for category
      chart.selectAll('g').append('text')
        .text(function(d){ return d["Category"]; })
        .attr('text-anchor', 'end')
        .attr('height', 25)
        .attr('x', 70)
        .attr('y', 20)

      // Create text element for quantity
      chart.selectAll('g').append('text')
        .text(function(d){ return d["Quantity"]; })
        .attr('height', 25)
        .attr('x', function(d){ return scale(d["Quantity"]) + 85; })
        .attr('y', 20)
    },
    error: function() {
      document.getElementById('chart').innerHTML = "Could not load data.";
    }
  });

</script>

[1]: https://docs.google.com/spreadsheet/ccc?key=0AvmGs2D9eZgxdFhOTGowSFEwNHNBQno5S1Bab2FnY3c#gid=0
[2]: http://misoproject.com/dataset/
[3]: http://d3js.org/
[4]: https://docs.google.com
[5]: https://github.com/mbostock/d3/wiki/Scales
[6]: http://apike.ca/prog_svg_transform.html#translates
[7]: http://misoproject.com/dataset/tutorials/googlespreadsheets
[8]: http://underscorejs.org/
[9]: http://www.w3schools.com/svg/svg_text.asp
[10]: http://www.w3schools.com/svg/svg_rect.asp
[11]: https://gist.github.com/3799922