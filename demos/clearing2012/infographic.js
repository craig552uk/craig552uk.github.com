/******************************************************************************/
/*  Animation                                                                 */
/******************************************************************************/

/* Change text in element with fade animation */
function fadeText(e, text){
  e.fadeTo('slow', 0, function(){
    e.html(text);
    e.fadeTo('slow', 1);
  })
}

/* Animation loop */
function animate(){

  // Fade text next to big numbers
  fadeText($('#id_1 .sub-text'), ucas_data.getNextText("id_1"));
  fadeText($('#id_2 .sub-text'), ucas_data.getNextText("id_2"));
}


/******************************************************************************/
/*  UK Map SVG                                                                */
/******************************************************************************/

// SVG Map
var map = d3.select('#map')
    .append('svg')
      .attr('width',  470)
      .attr('height', 540)

// Group per country
var g = map.selectAll('g').data(map_paths)
    .enter().append('g')
      .attr('id', function(d){ return d.id; })
      .attr('class', function(d){ return (d.id == 'british_isles') ? '' : 'country'; })
      .attr('transform', 'scale(0.5,0.5) translate(70,-50)')

// Paths in groups
var p = g.selectAll('path').data(function(d){ return d.paths; })
    .enter().append('path')
      .attr('d', function(d){ return d; })


/******************************************************************************/
/*  Event Handlers                                                            */
/******************************************************************************/
var percChart, acceptanceChart, countryChart;

/* Round to dp */
function rDP(num, dec) {
  var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
  return result;
}

/* Insert thousandth seperators */
function thf(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showAcceptedInfo(id){
  $('#acceptance-chart-title').html(ucas_data.accepted[id].text);
  acceptanceChart.redraw(id);
  $('#square-list li').removeClass('highlight');
  $('#square-list #'+id).addClass('highlight');
  percChart.highlight(id);
}

function showCountryInfo(id){
  countryChart.redraw(id);
  var name     = ucas_data.country[id]['name'],
      len_2012 = ucas_data.country[id].pts_2012.length,
      len_2011 = ucas_data.country[id].pts_2011.length,
      acc_2012 = ucas_data.country[id].pts_2012[len_2012-1][1],
      acc_2011 = ucas_data.country[id].pts_2011[len_2011-1][1],
      diff     = acc_2012 - acc_2011,
      perc     = rDP((diff/acc_2011) * 100, 1),
      dirStr   = (diff > 0) ? '<span class="more">&#11014; ' : '<span class="less">&#11015; ';

  $('.country-info .name'    ).html(name + ' accepted');
  $('.country-info .acc_2012').html('&#10004; <strong>' + thf(acc_2012) + '</strong> applicants in 2012');
  $('.country-info .acc_2011').html('&#10004; <strong>' + thf(acc_2011) + '</strong> applicants in 2011');
  $('.country-info .swing'   ).html(dirStr + ' ' + thf(Math.abs(diff)) + '</span> students (' + perc + '%)');

}

$(document).ready(function(){

  ucas_data.preprocess();

  percChart       = new percChart('#perc-chart', ucas_data.accepted.stack);
  acceptanceChart = new lineChart('#acceptance-chart', ucas_data.accepted);
  countryChart    = new lineChart('#country-chart', ucas_data.country);

  // Draw charts
  percChart.draw();
  acceptanceChart.draw('acc_all');
  countryChart.draw('uk');

  showCountryInfo('uk');

  $('.country').hover(
    function(){ showCountryInfo( $(this).attr('id') ); },
    function(){ showCountryInfo( 'uk' ); }
  );

  $('.block').hover(
    function(){ showAcceptedInfo( $(this).attr('id') ); },
    function(){ showAcceptedInfo('acc_all') }
  );

  $('#square-list li').hover(
    function(){ showAcceptedInfo( $(this).attr('id') ); },
    function(){ showAcceptedInfo('acc_all') }
  );

  // Loop animations
  animate();
  setInterval(function(){ animate(); }, 3000);
})