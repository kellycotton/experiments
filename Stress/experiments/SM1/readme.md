# Stress and Memory Experiment v1
## Experiment created in PsychoPy to be run locally
### Created by Kelly Cotton 06/27/22


### Basic experimental design:
* Brown-Peterson continuous color recall task with colored objects and parity judgment secondary task.
	* Working memory task: continuous mouse response
	* Parity judgment task: 'A' = even, 'S' = odd

### Experimental Flow
1. Demographic questions + STAI-6 questions
2. Instructions and practice
	* Participants practice the continuous color recall and parity judgment tasks separately and then together. During the practice, participants are given feedback.
3. STAI-6 questions
4. Experimental trials
	* Currently set at 96 total trials: 4 blocks * 6 trial loops * 4 trials within each loop
	* Participants are reminded of the parity judgment key mappings before each block.
5. BAI, PSS, DASS questions

### Adjustable Variables
* In the setup code block
	* positions (item positions), circle_size (size of ring), dot_size, angles, fix_time (fixation cross time), stim_array_time (memory item array time), parity_time (time for each parity judgment item), image_size (size of stimuli), block_total (total number of block loops), trial_total (total number of trial loops)
* Practice Trials
	* practice_1 nReps = number of practice trials of just color report task
		* practice_response_memory1 nReps = number of times response routine is repeated. Only change if you change the number of memory items.
	* practice_2 nReps = number of practice trials of just parity judgment task
	* practice_3 nReps = number of practice trials with both color report and parity judgment task **Note there are 4 conditions in the conditions file, so the actual number of trials will be nReps * 4**
		* practice_parity_2 nReps = number of practice parity trials within single full practice trial
		* practice_response_memory2 nReps = number of times response routine is repeated. Only change if you change the number of memory items.
* Experimental Trials
	* block nReps = changed with block_total
	* trials nReps = changed with trial_total **Note there are 4 conditions in the conditions file, so the actual number of trials will be nReps * 4**
	* parity_trials nReps = number of parity judgment items within a full trial
	* memory_trials nReps = number of times response routine is repeated. Only change if you change the number of memory items.

### Resources needed
delay_conds.xlsx and object_stim folder with 540 images of objects from Brady et al. (2013) doi:10.1177/0956797612465439

Notes:
* Reduced number of practice trials 9/8/22