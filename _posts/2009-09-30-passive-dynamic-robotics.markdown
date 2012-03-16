--- 
layout: post
title: Passive Dynamic Robotics
tags: 
- MSc
- Robots
- Science
status: publish
type: post
published: true
meta: 
  _edit_last: "2"
  dsq_thread_id: "218010581"
---
I started my MSc in Intelligent Systems last week, for our first assignment we were asked to write a little bit about a relevent field. We were asked to provide a history of the subject and to talk about the current applications of the technology. I chose to write about passive dynamic robotics.  I've included it here - because I can.

Here 'tis...

Passive dynamics is a form of locomotion where the mechanics of the device allow it to be driven forward from it's own inertia, with minimal energy input. Formally, passive dynamics was described by McGeer (1990), but it is inspired by gravity powered toys dating back to the 1800's (Fallis 1888). These early bipedal toys were able to walk down gentle inclines, with no energy input other than the gravitational force. The mechanics of these designs caused the toy to rock laterally from side to side, allowing one foot to swing in front of the other, producing a forward walking motion.

<!--more-->McGeer(1990) studied these early toys, building upon these ideas to develop a laterally stable robot with four legs and knee joints, which better approximated a human-like gait. He formalised this mathematically as the 'rimless wheel model' and then the 'synthetic wheel model'. Whereby a two legged device with curved feet would approximate the motion of a wheel rolling down an incline as each foot is laid down in front of one another. He notes that with a little modification to provide power to the device in the place of gravity, this mechanism would also function on a flat surface.

It's this approach that defines passive dynamic robotics from actively powered robotics. Actively powered robots require powered control at every point in the walk cycle, and are developed to be powered from the outset. Passively dynamic robots utilise the mechanical properties of the robot to perform the walk cycle, electronic control systems can be added later to extend the range or refine the model. McGeer(1990) draws an analogy to the development of powered flight, early flying machines were simple gliders, only later having developed a solid understanding of aerodynamics, was power source added for sustained flight.

Since this time many more researchers have developed passive dynamic robots, building upon gravity powered devices to more sophisticated motor/piston driven walkers. Collins et. al (2005a) describes the development of two such robots.

The first, built at Cornell University, was designed for minimal energy use. The first phase of development for this robot was to built a gravity powered device that was able to walk stably down a slope. The design has joints at both the hips and the knees, and is one of the first of this type to include arms. The arms are mechanically connected to the opposite leg, the swing of the arms helps to laterally stabilise this robot while walking. From this original design, a second powered robot was built. This robot is powered by electrical motors, and added spring powered joints at the ankles to provide a push off from the trailing foot. To compare the efficiency of walking between robots and with humans Collins et. al. (2005a) used a value called the specific cost of transport, this is a unit less value which gives the energy consumed per unit weight per unit distance. For a human this value is 0.2, for the Cornell biped, discussed above, this is also 0.2. Whereas for Honda's ASIMO, a robot designed with precise joint control, this figure is much higher at 3.2.

A second robot, built at MIT, was designed to use an adaptive control mechanism which allowed the robot to maintain a stable walking gait over changing level terrain (bricks, wooden tiles and carpet). The robot makes random adjustments to it's control parameters at each step, and measures the change in it's performance. And a learning algorithm aims to optimise the performance gradient. This robot was able to rapidly adapt to changes in terrain. Collins et. al. (2005a) argue that the learning mechanism used in this robot is 'biologically plausible' as there is evidence that it may describe biological motor learning.

Another robot worthy of mentioning is RunBot, built at the University of Sterling (Geng, T 2006). RunBot has four actuated joints, two hips and two knees, there are, however, points during the walk cycle where the robot continues to move forwards without actuation. The robot is supported by a boom connected with a universal joint to a central column, causing the robot to walk a circular path. RunBot is novel in it's use of a neural network control system. The network receives input from sensors on the hips, feet and two on each knee, and provides output to the actuators on each joint. The network allows RunBot to adapt to changing conditions in real time. RunBot is able to change walking speed and walk on irregular terrain while maintaining a stable walking gait. RunBot was designed to walk at a relative speed equivalent to that of a human. Relative speed is measured in leg lengths per second. RunBot achieves a maximum of 3.5 leg lengths per second, comparable to the fastest human walking and making RunBot one of the fastest biped robots.

The close relationship between passive dynamic robots and human locomotion has been demonstrated by Bauby and Kuo (2000). They studied the variability of human foot placement during walking and compared this to a passive dynamic biped model. Their findings suggest that human walking 'may harness passive dynamic properties of the limbs'.

Hansen and Gard (2007) have begun to study the effect of natural (passive) dynamics on prosthetics. They have developed prosthetic feet which mimic the flexible roll of human feet and have planned to investigate any improvement in efficiency.

I find it fascinating that some of the robots described here, have already approached human levels in their respective abilities. The Cornell robot is a as efficient as a human in it's energy use, and Runbot is able to walk (relatively) as fast. Also, the relationship of this paradigm to human mechanics is already influencing the development of prosthetic limbs. In my view, this is an exciting field that will continue to surprise as it develops in the future.
<h3>References</h3>
Bauby, C. Kuo, A. (2000) Active Contol of Lateral Balance in Human Walking. Journal of Biomechanics, 33 (11), pp. 1433-1440

Collins, S et. al. (2005a) <em>Efficient Bipedal Robots Based on Passive-Dynamic Walkers</em>. Science, 307 (Feb), pp. 1082-1085

Collins, S et. al (2005b) <em>Supporting Online Material for Efficient Bipedal Robots Based on Passive-Dynamic Walkers</em>. [WWW] Science. Available from <a href="http://www.sciencemag.org/cgi/content/full/307/5712/1082/DC1"><span style="text-decoration: underline;">http://www.sciencemag.org/cgi/content/full/307/5712/1082/DC1</span></a> [Accessed 22/09/09]

Collins, S et. al (2001) <em>A Three-Dimensional Passive-Dynamic Walking Robot with Two Legs and Knees</em>. The International Journal of Robotics Research, 20 (7), pp. 607-615
<p align="left">Collins, S. Ruina, A. (2005) A Bipedal Robot with Efficient and Human-Like Gait. [PDF] Cornell University. Available from <a href="http://ruina.tam.cornell.edu/research/topics/locomotion_and_robotics/papers/efficient_bipedal_robots/bipedal_walking_robot_cornell.pdf"><span style="text-decoration: underline;">http://ruina.tam.cornell.edu/research/topics/locomotion_and_robotics/papers/efficient_bipedal_robots/bipedal_walking_robot_cornell.pdf</span></a> [Accessed 22/09/09]</p>

Fallis, G. (1888) <em>Walking Toy</em>. United States Patent Office, Patent No. 376588

Geng, T et. al. (2006) Fast Biped Walking with a Sensor-driven Neuronal Controller and Real-time Online Learning. The International Journal of Robotics Research, 25 (3), pp. 243-259

Hansen, A. Gard, S. (2007) Effects of Prosthetic Foot Rocker Radius on Gait of Prosthesis Users. [WWW] Northwestern University. Available from <a href="http://www.medschool.northwestern.edu/depts/repoc/sections/research/projects/ambulate/foot_rocker_radius.html"><span style="text-decoration: underline;">http://www.medschool.northwestern.edu/depts/repoc/sections/research/projects/ambulate/foot_rocker_radius.html</span></a> [Accessed 22/09/09]

McGeer, T. (1990) <em>Passive Dynamic Walking</em>. The International Journal of Robotics Research, 9 (2), pp. 62-82
