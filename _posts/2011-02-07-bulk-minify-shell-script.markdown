--- 
layout: post
title: Bulk Minify Shell Script
tags: 
- Internet
- Linux
- Software
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  _syntaxhighlighter_encoded: "1"
  dsq_thread_id: "224274767"
  _wp_old_slug: ""
---
The <a href="http://developer.yahoo.com/yui/compressor/">YUI Compressor</a> is a bad ass little tool for making CSS and JS files as tiny as possible for faster page loading. I've written a little shell script to bulk minify CSS and JS files.

The script will minify any file in your css and js folders that do not already have a .min.css or .min.js extension. Style sheets are minified in to a single file where as Java Scripts are minified in to individual files. The minified files are created in the same folders as the original files.


    CSS='css'
    JS='js'
    FILELIST="minify.$$.tmp"
    COMPORESSOR="yuicompressor-2.4.2.jar"
    MINCSS="css/styles.min.css"

    # Minify CSS to single file
    echo -n '' > $MINCSS
    ls $CSS | grep -v min > $FILELIST
    while read LINE
    do
      OLD="$CSS/$LINE"    
      echo "$OLD -> $MINCSS"
      java -jar yuicompressor-2.4.2.jar $OLD >> $MINCSS    
    done < $FILELIST

    # Minify JS to multiple files
    ls $JS | grep -v min > $FILELIST
    while read LINE
    do
      OLD="$JS/$LINE"
      NEW=` echo "$JS/$LINE" | sed 's/.js/.min.js/g'`    
      echo "$OLD -> $NEW"
      java -jar yuicompressor-2.4.2.jar $OLD > $NEW    
    done < $FILELIST

    rm -f $FILELIST


The parameters at the top of the script configure the file and folder paths. CSS ans JS are to folders containing your style sheets and Java Script files. FILELIST is the location of a temporary file. COMPRESSOR is the YUI Compressor program. MINCSS is the single output CSS file.

The minification processes for CSS and JS are separated to illustrate the different approaches. I chose to minify CSS to a single file to there can be just one request for styles from the browser. I decided not to do the same for the Java Scripts because they can be loaded asynchronously by a utility like <a href="http://headjs.com/">Head.js</a>.

As always, comments, criticisms etc. greatly appreciated.

<strong>EDIT</strong> Feb 8th

There is a <a href="http://yuilibrary.com/projects/yuicompressor/ticket/2527991">bug</a> in the YUI Compressor which causes it to invalidate media queries. this will be fixed in version 2.4.3, but for now a bit of sed magic on line 14 fixes it.

    java -jar yuicompressor-2.4.2.jar $OLD | sed 's/and/and /g' >> $MINCSS

Also, if you want style sheets to be minified and added to the styles.min.css file in a particular order (which you probably do), name them numerically like so.

    00-meyer-reset.css
    01-global-styles.css
    desktop-styles.css
    mobile-styles.css
