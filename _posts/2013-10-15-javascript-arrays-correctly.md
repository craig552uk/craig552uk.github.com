---
layout: post
title: JavaScript - How to Iterate Arrays Correctly
description: There are several different ways to iterate over Arrays in JavaScript. Each of these can behave differently when there are undefined values. Here, I demonstrate each and explain their behaviour.
---
There are several different ways to iterate over Arrays in JavaScript.
Each of these can behave differently when there are undefined values.
Here, I demonstrate each and explain their behaviour.

For these examples, I'm using the JS console in Chrome Dev Tools.
Other browsers may format responses differently.

First off, create an Array with an explicitly set "undefined" element.

    > a = ['zero','one',undefined,'three']

Then add another element at a higher index.
You must create it this way, you'll see why in a bit.

    > a[5] = 'five'

When we inspect the Array, we can see the two undefined elements.

    > a
      ["zero", "one", undefined, "three", undefined × 1, "five"]

Notice that the element at `a[4]` is shown as `undefined × 1` not simply `undefined`.
This subtle difference tells us that this is an implicit undefined value in the Array, meaning it doesn't actually exist in memory.
Whereas the `undefined` value at `a[2]` was explicitly defined, so does exist in memory.

Now we can see how different iterators handle these different "undefined" values. 

---

The first examines every index from 0 up to the largest index in the array.
Because indices in Arrays are non-sequential, `Array.length` returns the highest index + 1.
So this iterator examines the full range of potential indices, returning the `undefined` value it finds in the element at `a[2]` and (crucially, but subtly different) returning undefined when it finds no element at `a[4]`.
    
    > for(var i=0, len=a.length; i<len; i++){ console.log(a[i]) }
      zero
      one
      undefined
      three
      undefined
      five

---

The second examines each index incrementally from 0 upwards.
Because the assignment of each array value to a variable is also the test to continue the for loop, the iterator stops when it encounters the first `undefined` value (Try `!!(e=a[1])` and `!!(e=a[2])` in your console).

    > for(var i=0,e; e=a[i++];){ console.log(e) }
      zero
      one

---

The third iterates over indices only. 
So this only returns explicitly defined elements (including `a[2]`) and ignores the implicit undefined element.

    > for(var i in a){ console.log(a[i]) }
      zero
      one
      undefined
      three
      five

---

At first glance it may seem weird that these iterators can behave so differently (especially to developers coming to JS from other languages).
But when we understand the nature of non-sequential indices in Arrays, how variables can be created with `undefined` values and type-casting of `undefined` values to `Boolean`, the necessity of these different techniques becomes clear. And we realise that there is no "correct" way to iterate JavaScript Arrays.