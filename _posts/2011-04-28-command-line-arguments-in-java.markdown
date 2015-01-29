--- 
layout: post
title: Command Line Arguments in Java
tags: 
- Linux
- Programming
- Tutorials
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "290371507"
  _edit_last: "2"
---
Commonly, programs can be configured by passing arguments on the command line.

<pre lang="shell">$ myprogram -i /input/file.txt -o /output/file.txt</pre>

This is easy enough to achieve in Java, the snippet of code below shows you how.

<pre lang="java" line="1">
class getArgs {

    public static void main(String[] args) {

        // Set defaults
        Integer i = 0;
        Double  d = 0.0;
        String  s = &quot;&quot;;

        // Get input arguments from command line
        for(int j=0; j&lt;args.length; j++){
            try{
                if ( args[j].equals(&quot;-i&quot;) ) i  = Integer.parseInt(args[j+1]);
                if ( args[j].equals(&quot;-d&quot;) ) d  = Double.parseDouble(args[j+1]);
                if ( args[j].equals(&quot;-s&quot;) ) s  = args[j+1];
            }catch(Exception e){
                System.out.println(&quot;Usage: getArgs &lt;options&gt;&quot;);
                System.out.println(&quot;Options:&quot;);
                System.out.println(&quot; -i  An Integer Value&quot;);
                System.out.println(&quot; -d  A Double Value&quot;);
                System.out.println(&quot; -s  A String Value&quot;);
                System.exit(1); // Exit with error code 1
            }
        }

        // Print arguments
        System.out.println(&quot;Integer &quot; + i.toString());
        System.out.println(&quot;Double  &quot; + d.toString());
        System.out.println(&quot;String  &quot; + s);

    }

}
</pre>

This program has three parameters for an integer, a double and a string. If the value provided is incompatible, the help message is displayed.

Spaces in strings can be handled with backslash escape characters or by enclosing the whole string in quotes.

<pre lang="shell">$ java getArgs -i 4 -d 3.14 -s 'Hello World'
Integer 4
Double  3.14
String  Hello World
</pre>
