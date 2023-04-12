## Online Memory Grant Experiment 1 (OMG1)
### Experiment created in PsychoPy to be run online and locally
#### Created by Kelly Cotton 02/01/2023


#### Basic experimental design:
* Working memory complex span task with word stimuli, secondary parity judgment task, 2AFC recognition test, categorical mind-wandering prompt after each trial.
	* For the word recognition task: Right Arrow key = right word, Left Arrow key = left word
	* For the parity judgment task: E = even number, O = odd number
	* For the categorical mind-wandering prompt (adapted from Kane et al., 2021), 1 = "The task", 2 = "Task experience/performance", 3 = "Everyday things", 4 = "Current state of being", 5 = "Personal worries", 6 = "Daydreams", 7 = "External environment", 8 = "Other"
* Distractor task: Go-No Go task
	* Colored circles presented, green = "go"/press SPACE, blue = "no go"/do not press SPACE
	* 10% of trials are no-go
* Long-term memory 2 AFC recognition test
	* For the recognition task: Right Arrow key = right word, Left Arrow key = left word

#### Experimental Flow
1. Instructions and practice
	* Participants practice the word recognition and parity judgment tasks separately and then together. During the practice, participants are given feedback. To increase the number of:
		* word recognition-only practice trials, change the number of loops in "practice_1" 
		* parity judgment-only practice trials, change the number of loops in "practice_2"
		* full trial practice, change the number of loops in "practice_3" 
2. Working memory trials
	* Currently set at 30 total trials: 5 blocks (can be changed with "block_total") * 6 trials (can be changed with "trial_total")
	* Participants are reminded of the key mappings before each block
3. Distractor trials
	* Currently set at 450 total trials: 3 blocks (can be changed with "block_total" in the "distract_instruct" code block) * 150 trials (can be changed in the "trials_nogo" loop nReps or distract_conds.csv)
4. Long-term memory trials
	* Currently set at 210 trials (will change when number of words presented during working memory task changes)

#### Resources needed
distract_conds.csv and words_text.csv
