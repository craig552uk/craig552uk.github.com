--- 
layout: post
title: Wordpress Loop in a Widget
tags: 
- Software
- WebApps
status: publish
type: post
published: true
meta: 
  _syntaxhighlighter_encoded: "1"
  _edit_last: "2"
  aktt_notify_twitter: "yes"
  aktt_tweeted: "1"
  _wp_old_slug: ""
  dsq_thread_id: "222051735"
---
When I was writing a Wordpress widget plugin to display information from a sub set of my posts (that's it on the side, with the paper toys...) I noticed that the <a href="http://codex.wordpress.org/The_Loop">Wordpress Loop</a> doesn't quite behave itself when widgetized in the <a href="http://codex.wordpress.org/Widgets_API#Developing_Widgets_on_2.8.2B">2.8+ style</a>.

When using the following code, inside a widget, to return posts from a custom query, you'll find that the post title and perma-link are returned, but the post ID is not.

    <?php $loop = new WP_Query($query);
    while ( $loop->have_posts() ) : $loop->the_post(); ?>
    	<a href="<?php the_permalink() ?>">
            <?php echo $post->ID.' : @; the_title(); ?></a>
    <?php endwhile; ?>

Adding a global call to the $post variable at the top of the loop fixes this issue.


    <?php $loop = new WP_Query($query);
    while ( $loop->have_posts() ) : $loop->the_post();
    	global $post;?>
    	<a href="<?php the_permalink() ?>">
            <?php echo $post->ID.' : @; the_title(); ?></a>
    <?php endwhile; ?>

