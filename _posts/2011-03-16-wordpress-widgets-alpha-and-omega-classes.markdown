--- 
layout: post
title: Wordpress Widgets Alpha and Omega Classes
tags: 
- Programming
- Tutorials
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  _syntaxhighlighter_encoded: "1"
  dsq_thread_id: "255576788"
---
If your using a CSS grid system like the <a href=”http://960.gs/”>960 Grid</a>, you’ll recognise the need for styling the first and last column on a row a bit differently from the rest (probably removing some margins or clearing floats). CSS3 lets us do this easily with <a href=”http://css-tricks.com/how-nth-child-works/”><code>nth-child</code></a>. This is great for modern browsers but not so hot for sad old ones. To keep the old browsers sweet you’ve probably manually added extra classes to the first and last element on each row. In the 960 Grid (and many others) these classes are usually <code>alpha</code> and <code>omega</code>.

When using a grid based layout for a <a href=”http://wordpress.org/”>Wordpress</a> theme that has a horizontal row of widgets (perhaps in the footer) you’ll want to be able to apply <code>alpha</code> and <code>omega</code> classes to the first and last widgets. The problem is that <a href=”http://codex.wordpress.org/Function_Reference/register_sidebar”><code>register_sidebar</code></a> function only allows you to specify classes that are applied to all widgets in the sidebar. Fortunately a <a href=”http://codex.wordpress.org/Plugin_API/Filter_Reference”>filter</a> exists at just the right place to make this happen.

<!--more-->The Wordpress filter <a href=”http://www.theenglishguy.co.uk/2010/02/02/using-dynamic_sidebar_params-in-wordpress-themes/”><code>dynamic_sidebar_params</code></a> (which is oddly undocumented in the Codex) is called before each widget is drawn. It allows you to modify the parameters used to draw the widget, for example adding targeted classes, which is what the function below does.


    add_filter('dynamic_sidebar_params','widget_alpha_omega');
    function widget_alpha_omega($params){
      /* Get the ids of this sidebar and widget*/
      $sidebar = $params[0]['id'];
      $widget   = $params[0]['widget_id'];
      
      /* Get number of widgets in this sidebar */
      $num_widgets = $params[1]['number'];
      
      /* Get data for all registered widgets */
      $all_widgets = wp_get_sidebars_widgets();
      
      /* Finish if no widgets set in this sidebar */
      if ( !isset($all_widgets[$sidebar]) || !is_array($all_widgets[$sidebar]) ) { return $params; }
      
      /* Set alpha class for first widget */
      if ( $all_widgets[$sidebar][0] == $widget ) {
        $params[0]['before_widget'] = preg_replace( '/class="/', 'class="alpha ', $params[0]['before_widget'] );
      }
      
      /* Set omega class for last widget */
      if ( $all_widgets[$sidebar][$num_widgets-1] == $widget ) {
        $params[0]['before_widget'] = preg_replace( '/class="/', 'class="omega ', $params[0]['before_widget'] );
      }
      
      /* Return modified params */   
      return $params;
    }


The function takes an array of parameters as input. This is mostly the parameters defined in <a href=”http://codex.wordpress.org/Function_Reference/register_sidebar”><code>register_sidebar</code></a> (or the defaults) plus a few bits and bobs.

The first thing the filter function does is get the ids of the widget that is being created and the sidebar it is being created in. You could use this information to apply different filters to different sidebars and widgets. I haven’t done that here.

Next it gets the total number of widgets in the sidebar, it’ll need this later. Then it gets an array of all the sidebars and the registered widgets in each. A quick sanity check makes sure that the sidebar actually contains some widgets, before continuing.

Then the <code>before_widget</code> strings are modified to add the <code>alpha</code> and <code>omega</code> classes to the first and last widgets in the sidebar. Note the use of <code>$all_widgets[$sidebar][0]</code> for the first and <code>$all_widgets[$sidebar][$num_widgets-1]</code> for the last.

Finally the modified parameters array is returned back to Wordpress.
