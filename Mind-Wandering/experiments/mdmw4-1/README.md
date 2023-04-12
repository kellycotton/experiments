# Memory Decay & Mind-Wandering Experiment v4.1
## Experiment created in PsychoPy to be run online and locally
### Created by Kelly Cotton 11/16/2022


### Basic experimental design:
* Change detection complex span task with colored squares and single probe, secondary parity judgment task in between memory item offset and probe onset, categorical mind-wandering prompt after each trial.
	* For the change detection task: S key = same (no change), D key = different (change)
	* For the parity judgment task: I = even number, O = odd number
	* For the categorical mind-wandering prompt (adapted from Kane et al., 2021), 1 = "The task", 2 = "Task experience/performance", 3 = "Everyday things", 4 = "Current state of being", 5 = "Personal worries", 6 = "Daydreams", 7 = "External environment", 8 = "Other"
* Mindfulness Attention Awareness Scale (Carlson and Brown, 2005)
		For the MAAS scale: 1 = "Almost always", 2 = "Very frequently", 3 = "Somewhat frequently", 4 = "Somewhat infrequently", 5 = "Very infrequently", 6 = "Almost never"

### Experimental Flow
1. Instructions and practice
	* Participants practice the change detection and parity judgment tasks separately and then together. During the practice, participants are given feedback. To increase the number of:
		* change detection-only practice trials, change the number of loops in "trials_practice_presentation" (1 loop = 6 practice trials) 
		* parity judgment-only practice trials, change the number of loops in "trials_cogload_practice1" (1 loop = 6 practice trials)
		* full trial practice, change the number of loops in "trials_practice" (1 loop = 6 practice trials)
2. Experimental trials
	* Currently set at 144 total trials: 4 blocks (can be changed with "block total") * 6 trial loops (can be changed) * 6 trials within each loop
	* Participants are reminded of the key mappings after each trial and before each block
3. MAAS questions

### Resources needed
exp_cond.xlsx and maas.xlsx
