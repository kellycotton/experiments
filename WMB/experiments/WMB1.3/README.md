# Working Memory Binding 
## Online experiment
### Created in PsychoPy by Kelly Cotton 01/11/2021

Experiment design and timings based on Wheeler & Treisman (2002) Experiments 4A & 4B.
Task stimuli based on Parra et al. (2010).

* 2 Experiments (as in Wheeler & Treisman, 2002 Experiments 4A & 4B):
	* Whole display with 4 conditions below (WMB1)
		* Set sizes 3 vs. 6 for stimuli presentation & test phase
	* Single probe with 4 conditions below (WMB2)
		* Set sizes 3 vs. 6 for stimuli presentation; single probe for test phase

**4 Conditions:**
1. Color only: Participants were told that the color of items could change. (Use Parra version- all same shape with different colors)
2. Shape only: Participants were told that the shape of items could change. (Use Parra version- different shapes that are all black)
3. Either shape or color: Participants were told that either the color or the shape of items could change. Half the trials were shape trials in which, on different trials, two squares changed to two new shapes at test. Half the trials were color trials in which, on different trials, two new colors were presented. These color and shape trials were randomly intermixed with no indication of which type of information would be probed until test. (Use Wheeler & Treisman version)
4. Binding shape and color: All the same colors and shapes were presented at test. However, on different trials the binding, that is, the relationship between color and shape, changed for two items. In effect, two shapes switched colors with each other or, equivalently, two colors switched shapes. (Use Wheeler & Treisman version)


Between study and test, all shapes randomly switched places with each other. That is, for the test display each shape was put in a previously occupied location randomly assigned without replacement. The locations were always changed in this way to prevent participants from using location as an additional cue or anchor for change recognition. There were four main conditions, blocked, each with 108 experimental trials, for a total of 432 trials. Participants were also given 18 practice trials for each condition. Each block of trials had a different set of instructions and was presented in a counterbalanced order. At test, all the shapes were presented on the screen again in whole-display test format. For all conditions, participants were told that the items would move around on the screen between study and test. They were told to ignore this change and to focus on the shape and color of the items to determine their answers.




Note about the experiment: 
The number of trials can be changed by changing the loops in the PsychoPy file: WMB1.3.psyexp
If the number of trials is changed, the value for "reps" in the setup code (Begin Routine) must be changed as well.

