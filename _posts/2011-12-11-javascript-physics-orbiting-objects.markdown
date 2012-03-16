--- 
layout: post
title: JavaScript Physics Orbiting Objects
tags: 
- Software
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "500795851"
---
Finally I've found a decent example of a JS physics simulation. This <a href="http://bassistance.de/2011/12/09/vector-math-basics-to-animate-a-bouncing-ball-in-javascript/" target="_blank">example by Jorn Zaefferer</a> shows how to model a bouncing ball with vector arithmetic.

I've tweaked this code to build a simulation of objects orbiting about a point. The only key difference is that the gravity for each ball is recalculated relative to the "sun" with each animation step. I've also removed collision detection with the window borders.

There's a live <a href="http://craig-russell.co.uk/examples/orbiting_ball/" target="_blank">example here</a>. View the source for the.. er.. source.
