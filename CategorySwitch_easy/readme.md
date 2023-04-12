# Category Switching Experiment version 2
#### Experiment created in PsychoPy to be run online 
##### Created by Kelly Cotton 03/30/2022


### Basic experimental design:
* Category switching task with two categories (living/nonliving and big/small)
	* For the living/nonliving category: Right arrow = "living" and Left arrow = "nonliving"
	* For the big/small category: Right arrow = "big" and Left arrow = "small"
* Participants are presented with a cue (heart for living/nonliving, cross for big small) for 500 ms before seeing a word. They are instructed to judge the word depending on the category prompted by the cue.
* There are four trial types: congruent/switch, congruent/nonswitch, incongruent/switch, incogruent/nonswitch.
	* Category congruency: living/big = congruent, nonliving/small = incongruent
	* Switch trial type: switch = different category from last trial, nonswitch = same category as last trial
	* This information is given to the experiment via the trialtypes.xlsx file. 

### Experimental Flow
1. Instructions and practice
	* Participants practice each category judgment task separately and then together. During the practice, participants are given feedback. To increase the number of:
		* living/nonliving practice trials, change the number of loops in "prac_trials_1" (1 loop = 16 practice trials) 
		* big/small practice trials, change the number of loops in "prac_trials_2" (1 loop = 16 practice trials)
		* both category practice, change the number of loops in "prac_trials_3" (1 loop = 16 practice trials)
		* You can also adjust the number of trials by editing the stimuli_prac files.
	* The instruction text can be changed in "code_prac_1"
2. Experimental trials
	* Currently set at 132 total trials: 3 blocks (can be changed by change "block_total" under setup) * 33 trial loops (can be changed by editing trialtypes.xlsx).
	* Note: the first trial is separate from the other trials because it must be a nonswitch trial.
	* Participants are reminded of the key mappings before each block.

### Resources needed
* trialtypes.xlsx 
* stimuli_prac1.xlsx
* stimuli_prac2.xlsx
* stimuli_prac3.xlsx
* heart.png
* cross.png

### Changes from v 1
1. Experiment is easier as category labels remain onscreen throughout the trials


