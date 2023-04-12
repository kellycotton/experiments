## Online Memory Grant Experiment 2 (OMG2)
### Experiment created in PsychoPy to be run online and locally
#### Created by Kelly Cotton 02/03/2023


#### Basic experimental design:
* Working memory Brown-Peterson task with colors/images continuous response recall, secondary parity judgment task 
	* Continuous response recall test completed with mouse
	* For the parity judgment task: E = even number, O = odd number
* Delayed continuous response recall test

#### Experimental Flow
1. Instructions and practice
	* Participants practice the continuous response recall and parity judgment tasks separately and then together. During the practice, participants are given feedback. To increase the number of:
		* continuous response recall-only practice trials, change the number of loops in "practice_1" 
		* parity judgment-only practice trials, change the number of loops in "practice_2"
		* full trial practice, change the number of loops in "practice_3" 
		* full real trial practice, change the number of loops in "practice_4"
2. Working memory trials
	* Currently set at XX total trials: XX blocks (can be changed with "block_total") * XX trials (can be changed with "wm_trial_total")
	* Participants are reminded of the key mappings before each block
3. Long-term memory trials
	* Currently set at XX trials (will change when number of words presented during working memory task changes)

NOTE:
To run online, you must manually change and reupload the index.html file. 
In the index file, under external libraries, add:
```
<script src="https://unpkg.com/mathjs@11.5.0/lib/browser/math.js"></script> 
```

This will need to be added every time you recompile the js file.

#### Resources needed
delay_conds.xlsx and jpg files in object_stim
