/******************************************************************************/
/*  Line Chart                                                             */
/******************************************************************************/

lineChart = function(id, data_source){

  this.data_source = data_source;

  // SVG Country chart
  this.chart = d3.select(id)
              .append('svg')
                .attr('class', 'chart')
                .attr('width',  470)
                .attr('height', 300);

  /*
   * Return D3 scales for data
   */
  this.getScale = function(id){
    // Get min & max from data
    var xMin = 0,
        xMax = d3.max(this.data_source[id].pts_2011, function(d){ return d[0]; }),
        aMin = d3.min(this.data_source[id].pts_2011, function(d){ return d[1]; }),
        bMin = d3.min(this.data_source[id].pts_2012, function(d){ return d[1]; }),
        aMax = d3.max(this.data_source[id].pts_2011, function(d){ return d[1]; }),
        bMax = d3.max(this.data_source[id].pts_2012, function(d){ return d[1]; }),
        yMin = (aMin < bMin) ? aMin : bMin,
        yMax = (aMax > bMax) ? aMax : bMax,
        nDays = 18; // Number of days for horizontal scale

    // Return scales for data
    return {
      x:    d3.scale.linear().domain([xMin, xMax]).range([80,420]),
      y:    d3.scale.linear().domain([yMin, yMax]).range([250,20]),
      days: d3.scale.linear().domain([0, nDays]).range([80,420])
    }
  }

  this.draw = function(id){

    // Get id scales
    var scale = this.getScale(id);

    // Data
    var pts_2011 = this.data_source[id].pts_2011,
        pts_2012 = this.data_source[id].pts_2012;

    var line = d3.svg.line()
               .x(function(d){ return scale.x(d[0]); })
               .y(function(d){ return scale.y(d[1]); });

    // Group for each line, points and text label
    var y11 = this.chart.append('g').attr('class', 'plot').attr('id', 'y11'),
        y12 = this.chart.append('g').attr('class', 'plot').attr('id', 'y12');

    // Draw lines
    y11.append('path').attr('d', line(pts_2011));
    y12.append('path').attr('d', line(pts_2012));

    // Draw data points
    y11.selectAll('circle')
      .data(pts_2011)
      .enter()
        .append('circle')
        .attr('r', 5)
        .attr('cx', function(d){ return scale.x(d[0]); })
        .attr('cy', function(d){ return scale.y(d[1]); });

    y12.selectAll('circle')
      .data(pts_2012)
      .enter()
        .append('circle')
        .attr('r', 5)
        .attr('cx', function(d){ return scale.x(d[0]); })
        .attr('cy', function(d){ return scale.y(d[1]); });

    y11.append('text')
        .text('2011')
        .attr('x', 430)
        .attr('y', function(){ return scale.y(pts_2011[pts_2011.length-1][1])+5; })

    y12.append('text')
        .text('2012')
        .attr('x', 430)
        .attr('y', function(){ return scale.y(pts_2012[pts_2012.length-1][1])+5; })

    var axis_h = this.chart.append("g")
        .attr('class', 'axis')
        .attr('id', 'horizontal')
        .attr("transform", "translate(0,250)")
        .call(d3.svg.axis().scale(scale.days).orient('bottom'));

    var axis_v = this.chart.append("g")
        .attr('class', 'axis')
        .attr('id', 'vertical')
        .attr("transform", "translate(80,0)")
        .call(d3.svg.axis().scale(scale.y).orient('left').ticks(6));

    axis_h.append('text')
        .text('Days since Clearing began')
        .attr('x', 180)
        .attr('y', 40)

    axis_v.append('text')
        .text('Students Accepted')
        .attr('x', -200)
        .attr('y', -68)
        .attr('transform', 'rotate(270)')
  }

  this.redraw = function(country){
    // Get country scales
    var scale = this.getScale(country),
        t     = 200;

    var pts_2011 = this.data_source[country].pts_2011,
        pts_2012 = this.data_source[country].pts_2012;

    var line = d3.svg.line()
               .x(function(d){ return scale.x(d[0]); })
               .y(function(d){ return scale.y(d[1]); });

    this.chart.select('#y11 path')
      .transition().duration(t)
      .attr('d', line(pts_2011));

    this.chart.select('#y12 path')
      .transition().duration(t)
      .attr('d', line(pts_2012));

    this.chart.selectAll('#y11 circle')
      .data(pts_2011)
      .transition().duration(t)
      .attr('cy', function(d){ return scale.y(d[1]); });

    this.chart.selectAll('#y12 circle')
      .data(pts_2012)
      .transition().duration(t)
      .attr('cy', function(d){ return scale.y(d[1]); });

    this.chart.select('#y11 text')
      .transition().duration(t)
      .attr('y', function(){ return scale.y(pts_2011[pts_2011.length-1][1])+5; })

    this.chart.select('#y12 text')
      .transition().duration(t)
      .attr('y', function(){ return scale.y(pts_2012[pts_2012.length-1][1])+5; })

    this.chart.select("#vertical")
      .transition().duration(t)
        .call(d3.svg.axis().scale(scale.y).orient('left').ticks(6));
  }

  return this;
}

percChart = function(id, data_source){
  // Chart block positioning
  w = 800;
  o = 70;

  colours = [['#0D58A6', '#689CD3'], ['#53DF00', '#9CEF6C'], ['#FF5600', '#FFA273']];
  ids     = ['acc_unc', 'acc_clr', 'acc_adj'];

  this.chart = d3.select(id)
                  .append('svg')
                    .attr('class', 'perc-chart')
                    .attr('width',  940)
                    .attr('height', 250);

  getX = function(e, y){
    var sum = 0;
    for(var i= e-1; i>=0; i--){
      sum += data_source[y][i]*w;
    }
    return sum;
  }

  this.draw = function(){

    // Create groups
    var y11  = this.chart.append('g').attr('class', 'stack').attr('id', 'y11'),
        y12  = this.chart.append('g').attr('class', 'stack').attr('id', 'y12');



    // Create axis
    var scale = d3.scale.linear().domain([0, 100]).range([o,o+w]),
        axis = this.chart.append('g').attr('class', 'axis')
                          .attr('transform', 'translate(0,160)');
    axis.call(d3.svg.axis().scale(scale));
    this.chart.append('text')
      .text('Percentage share of accepted students')
      .attr('transform', 'translate(350,200)');

    y11.selectAll('rect')
        .data(data_source["2011"])
        .enter()
        .append('rect')
          .attr('class', 'block')
          .attr('height', '70')
          .attr('fill', function(d,i){ return colours[i][1]; })
          .attr('id', function(d,i){ return ids[i]; })
          .attr('width', function(d){ return d*w; })
          .attr('x', function(d,i){ return (i>0) ? getX(i,"2011")+o : o; })

    y12.selectAll('rect')
        .data(data_source["2012"])
        .enter()
        .append('rect')
          .attr('class', 'block')
          .attr('height', '70')
          .attr('y', '80')
          .attr('fill', function(d,i){ return colours[i][1]; })
          .attr('id', function(d,i){ return ids[i]; })
          .attr('width', function(d){ return d*w; })
          .attr('x', function(d,i){ return (i>0) ? getX(i,"2012")+o : o; })

    y11.append('text').text('2011')
        .attr('transform', 'translate(10,40)')

    y12.append('text').text('2012')
        .attr('transform', 'translate(10,120)')

    y11.append('text').text('')
        .attr('id', 'y11txt').attr('class', 'perctxt')
        .attr('transform', 'translate(880,40)')

    y12.append('text').text('')
        .attr('id', 'y12txt').attr('class', 'perctxt')
        .attr('transform', 'translate(880,120)')

  }

  this.highlight = function(id){

    /* format percentages */
    function pf(v){
      return Math.round(v*100*Math.pow(10,1))/Math.pow(10,1) + '%';
    };

    // Reset all
    this.chart.selectAll('#acc_unc').attr('fill', colours[0][1]);
    this.chart.selectAll('#acc_clr').attr('fill', colours[1][1]);
    this.chart.selectAll('#acc_adj').attr('fill', colours[2][1]);
    this.chart.selectAll('.perctxt').text('');
    if(id == "acc_unc") {
      this.chart.selectAll('#acc_unc').attr('fill', colours[0][0]);
      this.chart.select('#y11txt').text(pf(data_source["2011"][0]));
      this.chart.select('#y12txt').text(pf(data_source["2012"][0]));
    };
    if(id == "acc_clr") {
      this.chart.selectAll('#acc_clr').attr('fill', colours[1][0]);
      this.chart.select('#y11txt').text(pf(data_source["2011"][1]));
      this.chart.select('#y12txt').text(pf(data_source["2012"][1]));
    };
    if(id == "acc_adj") {
      this.chart.selectAll('#acc_adj').attr('fill', colours[2][0]);
      this.chart.select('#y11txt').text(pf(data_source["2011"][2]));
      this.chart.select('#y12txt').text(pf(data_source["2012"][2]));
    };
  }

  return this;
}