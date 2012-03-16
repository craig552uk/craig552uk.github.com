--- 
layout: post
title: MSc Project-A-Go-Go!
tags: 
- MSc
- Science
status: publish
type: post
published: true
meta: 
  aktt_notify_twitter: "yes"
  _edit_last: "2"
  aktt_tweeted: "1"
  _wp_old_slug: ""
  dsq_thread_id: "217841528"
---
I have decided, and agreed with my supervisor, what my MSc project is to be. I am most chuffed.

The title of the project is...

<strong>An Investigation in to the Relationship Between Lower and Higher Order Cellular Automata Problems when Solved with Evolutionary Search Heuristics
</strong>

Basically I'm going to be looking at how search methods inspired by Evolution can be used to solve problems in Cellular Automata and how different solutions to similar problems are related (if at all).
<h3><!--more-->What the frig are Cellular Automata?</h3>
Cellular Automata are systems built up of many simple individual cells. Each of the cells is in one of a small number of states at any given time. A cell decides which state it is in by following some simple rules based upon the current state of its neighbours. Cellular automata are interesting to computer scientists (among others) because the simple rules at the micro-level (individual cells) can lead to very complex behaviour at the macro-level (the whole system).

One of the most famous cellular automata is Conway's Game of Life, this simple model of a population of cells has demonstrated many interesting global behaviours. Earlier this month, the<a href="http://www.newscientist.com/article/mg20627653.800-first-replicating-creature-spawned-in-life-simulator.html?full=true"> first replicating creature was demonstrated in the game</a>. Previously the game has been shown to be <a href="http://www.igblan.free-online.co.uk/igblan/ca/">able to model a Universal Turing Machine</a>, meaning it is potentially capable of computing anything that can <em>ever</em> be computed. Not bad for some blinking blobs.
<h3>What the double frig is an Evolutionary Search Heuristic???</h3>
Evolutionary Computing is a field of computer science that looks at ways of solving problems inspired by biological evolution. Consider all the organisms in the world as being different solutions to the problem of survival. Every plant, animal, <a href="http://en.wikipedia.org/wiki/Snottite">snottite</a> and what-not, manages to survive using different strategies all developed by evolution. In computing, there are problems that cannot be solved using traditional, algorithmic, approaches. Perhaps the number of possible answers are too many to search one-by-one, or the solution is not very well defined. In cases like these, we can <em>search</em> for a good answer, not necessarily the best answer, but good enough. This is a Heuristic.

A simplified model of biological evolution can be applied to computer search problems. We can model potential solutions with a series of parameters, analogous to DNA. The potential solutions are tested against one another, the best are combined to produce another set of solutions. As the process is repeated, only the best solutions 'survive'. this is known as a Genetic Algorithm. A similar process can be used to develop computer code to perform some function, this is called Genetic Programming.
<h3>Oh, I see. So what are you doing?</h3>
I'm going to be applying Evolutionary Heuristics to Cellular Automata, to find a set of simple micro-scale rules that can produce solutions to macro-level problems. Then I'll look at whether or not these rules can be applied to other, related problems.

Evolutionary heuristics are known to produce good solutions to problems, but it can take a lot of effort to get there. For every new problem, you have to search from scratch. I'm interested in finding any 'shortcuts' between solutions, which would save time.

I'm going to be working on this over the next year or so. I've every intention to keep this blog updated with my progress and other related bits and bobs. But we'll see how that pans out.

Laters...
