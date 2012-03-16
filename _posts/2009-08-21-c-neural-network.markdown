--- 
layout: post
title: Neural Network Class for C++
tags: 
- Programming
- Software
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  aktt_notify_twitter: "yes"
  dsq_thread_id: "217841369"
---
Here's a simple little file I knocked up for handling the basic data types required for coding neural networks in C++.  The tar contains two files neuralNetwork.h and nnXOR.cpp.

<strong>Click Here To Download <a href="http://www.craig-russell.co.uk/wp-content/uploads/2009/08/XOR.zip">XOR.zip</a></strong>


<h3>File neuralNetwork.h</h3>
This is the file that handles the datatypes. The model I've used here represents the neuron output values as a float array, the connections between neurons as a 2D boolean array and the connection weights as a 2D float array. To work with the data, the class contains the following functions.
<ul>
	<li><strong>neuralNetwork()</strong> - Default constructor, creates network with 10 neurons.</li>
	<li><strong>neuralNetwork(int n)</strong> - Constructor creates network with <em>n </em>neurons.</li>
	<li><strong>~neuralNetwork()</strong> - Destructor, cleans up data objects.</li>
	<li><strong>getSize()</strong> - Returns an integer representing the number of neurons in the network.</li>
	<li><strong>setSize(int n)</strong> - Creates the data structures for a network of size <em>n</em>. Calls to this function are not required if using the neuralNetwork() constructor.</li>
	<li><strong>zeroData() </strong>- Sets all the values of data in the network to zero, effectively clearing the network. Calls to this function are not required unless resetting the network at run-time.</li>
	<li><strong>setVal(int n, float val)</strong> - Set's that value of neuron <em>n</em> to <em>val</em>.</li>
	<li><strong>getVal(int n) </strong>- Gets that vlue of neuron <em>n</em>.</li>
	<li><strong>addConn(int i, int j)</strong> - Creates a connection in the network from neuron <em>i</em> to neuron <em>j</em>.</li>
	<li><strong>addConn(int i, int j, float weight)</strong> - Creates a connection in the network from neuron <em>i</em> to neuron <em>j</em> with weight <em>weight</em>.</li>
	<li><strong>delConn(int i, int j)</strong> - Removes the connection between neuron <em>i</em> and neuron <em>j.</em></li>
	<li><strong>is Conn(int i, int j)</strong> - Returns a boolean, true if there is a connection from neuron <em>i</em> to neuron <em>j</em>.</li>
	<li><strong>setWeight(int i,  int j,  float weight)</strong> - If there is a connection from neuron <em>i</em> to neuron <em>j</em>, the weight is set to <em>weight</em>.</li>
	<li><strong>getWeight(int i, int j)</strong> - Returns a float representing the weight of the conneciton from neuron <em>i</em> to neuron <em>j</em>.</li>
	<li><strong>printVals()</strong> - Prints to screen the data in the output value array</li>
	<li><strong>printConns() </strong>- Prints to screen the data in the connections array</li>
	<li><strong>printWeights()</strong> - Prints to screen the data in the weights array</li>
	<li><strong>printAll()</strong> - Prints to screen all of the data, with headings.</li>
</ul>

<h3>File nnXOR.cpp</h3>
This file uses the neuralNetwork class as an example to create a neural network to compute the <a href="http://library.thinkquest.org/29483/neural_index.shtml">XOR relationship</a>.

At the top of the file, the class nnXOR is created extending the neuralNetwork class, it contains the following functions:

<ul>
	<li><strong>nnXOR(int n)</strong> - Constructor, creates the network of size <em>n</em>, note the use of setSize().</li>
	<li><strong>updateNeuron(int n)</strong> - The update process for neuron <em>n</em>. This process multiplies each input neuron value by the conneciton weight, sums these values then performs a simple threashold function to determine the output value of neuron <em>n</em>.</li>
	<li><strong>update(int epoch)</strong> - Sequentially updates each neuron in the network <em>epoch</em> times.</li>
</ul>

The bottom half of the file contains the main method, calculating the XOR relationship between variables <em>a</em> and <em>b</em>.

<ol>
	<li>Set the variables <em>a</em> and <em>b</em> from the command line, if no data was supplied from the command line, prompt the user.</li>
	<li>Create the neural network object with 5 neurons.</li>
	<li>Create connections and set weights between neurons in the network.</li>
	<li>Set the input neuron values to <em>a</em> and <em>b</em>. Values can be either 1 or 0.</li>
	<li>Print the initial state of the network.</li>
	<li>Update every neuron in the network once.</li>
	<li>Print the final state of the network.</li>
	<li>Print the XOR result.</li>
</ol>

Feel free to use and abuse as you wish.
