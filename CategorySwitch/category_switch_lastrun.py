#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Tue Feb 22 10:46:39 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'category_switch'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/kellycotton/Dropbox/Research/CategorySwitch/category_switch_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "setup"
setupClock = core.Clock()
#import random
#from random import randint

heart = "heart.png"
cross = "cross.png"

stim_living = []
stim_nonliving = []
stim_big = []
stim_small = []

trialtype = [["nonswitch", "congruent"], 
["nonswitch", "incongruent"],
["switch", "congruent"],
["switch", "incongruent"]]
trialtypes = trialtype * 8

practice_i = 0
i = 0


# Initialize components for Routine "practice_instructions_1"
practice_instructions_1Clock = core.Clock()
text_9 = visual.TextStim(win=win, name='text_9',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "practice_cue_1"
practice_cue_1Clock = core.Clock()
cue_2 = visual.ImageStim(
    win=win,
    name='cue_2', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Initialize components for Routine "practice_trial_1"
practice_trial_1Clock = core.Clock()
text_10 = visual.TextStim(win=win, name='text_10',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
prac_key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "feedback_1"
feedback_1Clock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "end_practice_block"
end_practice_blockClock = core.Clock()
text_11 = visual.TextStim(win=win, name='text_11',
    text='Great job! Press SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "practice_instructions_2"
practice_instructions_2Clock = core.Clock()
text_17 = visual.TextStim(win=win, name='text_17',
    text='If you see a heart: press LEFT if living, RIGHT if nonliving.\n\nIf you see a cross: press LEFT if big, RIGHT if small. \n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_6 = keyboard.Keyboard()
text_18 = visual.TextStim(win=win, name='text_18',
    text='LIVING',
    font='Open Sans',
    pos=(-.45, -.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_19 = visual.TextStim(win=win, name='text_19',
    text='BIG',
    font='Open Sans',
    pos=(-.45, -.35), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_20 = visual.TextStim(win=win, name='text_20',
    text='NONLIVING',
    font='Open Sans',
    pos=(.45, -.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_21 = visual.TextStim(win=win, name='text_21',
    text='SMALL',
    font='Open Sans',
    pos=(.45, -.35), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
heart_instruct_2 = visual.ImageStim(
    win=win,
    name='heart_instruct_2', 
    image='heart.png', mask=None,
    ori=0.0, pos=(0, -.25), size=(0.05, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
cross_instruct_2 = visual.ImageStim(
    win=win,
    name='cross_instruct_2', 
    image='cross.png', mask=None,
    ori=0.0, pos=(0, -.35), size=(0.05, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)

# Initialize components for Routine "practice_cue_2"
practice_cue_2Clock = core.Clock()
cue_3 = visual.ImageStim(
    win=win,
    name='cue_3', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Initialize components for Routine "practice_trial_2"
practice_trial_2Clock = core.Clock()
text_15 = visual.TextStim(win=win, name='text_15',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
prac_key_resp = keyboard.Keyboard()

# Initialize components for Routine "feedback_2"
feedback_2Clock = core.Clock()
text_16 = visual.TextStim(win=win, name='text_16',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "end_practice_block"
end_practice_blockClock = core.Clock()
text_11 = visual.TextStim(win=win, name='text_11',
    text='Great job! Press SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='If you see a heart: press LEFT if living, RIGHT if nonliving.\n\nIf you see a cross: press LEFT if big, RIGHT if small. \n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()
text_4 = visual.TextStim(win=win, name='text_4',
    text='LIVING',
    font='Open Sans',
    pos=(-.45, -.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_5 = visual.TextStim(win=win, name='text_5',
    text='BIG',
    font='Open Sans',
    pos=(-.45, -.35), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_6 = visual.TextStim(win=win, name='text_6',
    text='NONLIVING',
    font='Open Sans',
    pos=(.45, -.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_7 = visual.TextStim(win=win, name='text_7',
    text='SMALL',
    font='Open Sans',
    pos=(.45, -.35), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
heart_instruct = visual.ImageStim(
    win=win,
    name='heart_instruct', 
    image='heart.png', mask=None,
    ori=0.0, pos=(0, -.25), size=(0.05, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
cross_instruct = visual.ImageStim(
    win=win,
    name='cross_instruct', 
    image='cross.png', mask=None,
    ori=0.0, pos=(0, -.35), size=(0.05, 0.05),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)

# Initialize components for Routine "cue_presentation"
cue_presentationClock = core.Clock()
cue = visual.ImageStim(
    win=win,
    name='cue', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Initialize components for Routine "trial"
trialClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
stim_load = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli.xlsx'),
    seed=None, name='stim_load')
thisExp.addLoop(stim_load)  # add the loop to the experiment
thisStim_load = stim_load.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisStim_load.rgb)
if thisStim_load != None:
    for paramName in thisStim_load:
        exec('{} = thisStim_load[paramName]'.format(paramName))

for thisStim_load in stim_load:
    currentLoop = stim_load
    # abbreviate parameter names if possible (e.g. rgb = thisStim_load.rgb)
    if thisStim_load != None:
        for paramName in thisStim_load:
            exec('{} = thisStim_load[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "setup"-------
    continueRoutine = True
    # update component parameters for each repeat
    if (characteristic == "living") & (congruency == "congruent"):
        stim_living.append([word, characteristic, congruency])
    elif (characteristic == "living") & (congruency == "incongruent"):
        stim_nonliving.append([word, characteristic, congruency])
    elif (characteristic == "size") & (congruency == "congruent"):
        stim_big.append([word, characteristic, congruency])
    elif (characteristic == "size") & (congruency == "incongruent"):
        stim_small.append([word, characteristic, congruency])
        
    print(characteristic)
    # keep track of which components have finished
    setupComponents = []
    for thisComponent in setupComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "setup"-------
    while continueRoutine:
        # get current time
        t = setupClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=setupClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in setupComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "setup"-------
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    print(stim_living)
    print(stim_nonliving)
    print(stim_big)
    print(stim_small)
    
    # the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'stim_load'


# set up handler to look after randomisation of conditions etc
practice_block_1 = data.TrialHandler(nReps=2.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='practice_block_1')
thisExp.addLoop(practice_block_1)  # add the loop to the experiment
thisPractice_block_1 = practice_block_1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_block_1.rgb)
if thisPractice_block_1 != None:
    for paramName in thisPractice_block_1:
        exec('{} = thisPractice_block_1[paramName]'.format(paramName))

for thisPractice_block_1 in practice_block_1:
    currentLoop = practice_block_1
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_block_1.rgb)
    if thisPractice_block_1 != None:
        for paramName in thisPractice_block_1:
            exec('{} = thisPractice_block_1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "practice_instructions_1"-------
    continueRoutine = True
    # update component parameters for each repeat
    k = 0
    
    target_stims = []
    
    stim_living_prac = stim_living
    stim_nonliving_prac = stim_nonliving
    stim_big_prac = stim_big
    stim_small_prac = stim_small
    
    if practice_i == 0:
        practice_text = "You will first see a HEART in the center of the screen. Next, you will see a word in the center of the screen.\nYour job is to judge if the word describes a living or nonliving thing. \nPress LEFT if living, RIGHT if nonliving.\nPress SPACE to continue."
        target_stims.append(stim_living_prac)
        target_stims.append(stim_living_prac)
        target_stims.append(stim_nonliving_prac)
        target_stims.append(stim_nonliving_prac)
    else:
        practice_text = "You will first see a CROSS in the center of the screen. Next, you will see a word in the center of the screen.\nYour job is to judge if the word describes something bigger or smaller than a soccer ball. \nPress LEFT if bigger, RIGHT if smaller.\nPress SPACE to continue."  
        target_stims.append(stim_big_prac)
        target_stims.append(stim_big_prac)
        target_stims.append(stim_small_prac)
        target_stims.append(stim_small_prac) 
        
    shuffle(target_stims)
    
    print("START PRACTICE")
    print(target_stims)
    text_9.setText(practice_text)
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    practice_instructions_1Components = [text_9, key_resp_3]
    for thisComponent in practice_instructions_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_instructions_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_instructions_1"-------
    while continueRoutine:
        # get current time
        t = practice_instructions_1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_instructions_1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_9* updates
        if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_9.frameNStart = frameN  # exact frame index
            text_9.tStart = t  # local t and not account for scr refresh
            text_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
            text_9.setAutoDraw(True)
        
        # *key_resp_3* updates
        waitOnFlip = False
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_instructions_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_instructions_1"-------
    for thisComponent in practice_instructions_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "practice_instructions_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_2 = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_2')
    thisExp.addLoop(trials_2)  # add the loop to the experiment
    thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    for thisTrial_2 in trials_2:
        currentLoop = trials_2
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                exec('{} = thisTrial_2[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "practice_cue_1"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        
        if practice_i == 0:
            practice_cue = heart
            cue_text = "Does the word describe a living thing?"
        else:
            practice_cue = cross
            cue_text = "Does the word describe a something bigger than a soccer ball?"
        cue_2.setImage(practice_cue)
        # keep track of which components have finished
        practice_cue_1Components = [cue_2]
        for thisComponent in practice_cue_1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_cue_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_cue_1"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = practice_cue_1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_cue_1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue_2* updates
            if cue_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cue_2.frameNStart = frameN  # exact frame index
                cue_2.tStart = t  # local t and not account for scr refresh
                cue_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue_2, 'tStartRefresh')  # time at next scr refresh
                cue_2.setAutoDraw(True)
            if cue_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cue_2.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    cue_2.tStop = t  # not accounting for scr refresh
                    cue_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(cue_2, 'tStopRefresh')  # time at next scr refresh
                    cue_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_cue_1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_cue_1"-------
        for thisComponent in practice_cue_1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "practice_trial_1"-------
        continueRoutine = True
        # update component parameters for each repeat
        if target_stims[k][1] == "congruent":
            corr_ans = "left"
        else:
            corr_ans = "right"
        text_10.setText(target_stims[k][0])
        prac_key_resp_4.keys = []
        prac_key_resp_4.rt = []
        _prac_key_resp_4_allKeys = []
        # keep track of which components have finished
        practice_trial_1Components = [text_10, prac_key_resp_4]
        for thisComponent in practice_trial_1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_trial_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_trial_1"-------
        while continueRoutine:
            # get current time
            t = practice_trial_1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_trial_1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_10* updates
            if text_10.status == NOT_STARTED and tThisFlip >= .6-frameTolerance:
                # keep track of start time/frame for later
                text_10.frameNStart = frameN  # exact frame index
                text_10.tStart = t  # local t and not account for scr refresh
                text_10.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
                text_10.setAutoDraw(True)
            
            # *prac_key_resp_4* updates
            waitOnFlip = False
            if prac_key_resp_4.status == NOT_STARTED and tThisFlip >= 0.6-frameTolerance:
                # keep track of start time/frame for later
                prac_key_resp_4.frameNStart = frameN  # exact frame index
                prac_key_resp_4.tStart = t  # local t and not account for scr refresh
                prac_key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_key_resp_4, 'tStartRefresh')  # time at next scr refresh
                prac_key_resp_4.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(prac_key_resp_4.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(prac_key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if prac_key_resp_4.status == STARTED and not waitOnFlip:
                theseKeys = prac_key_resp_4.getKeys(keyList=['left', 'right'], waitRelease=False)
                _prac_key_resp_4_allKeys.extend(theseKeys)
                if len(_prac_key_resp_4_allKeys):
                    prac_key_resp_4.keys = _prac_key_resp_4_allKeys[-1].name  # just the last key pressed
                    prac_key_resp_4.rt = _prac_key_resp_4_allKeys[-1].rt
                    # was this correct?
                    if (prac_key_resp_4.keys == str(corr_ans)) or (prac_key_resp_4.keys == corr_ans):
                        prac_key_resp_4.corr = 1
                    else:
                        prac_key_resp_4.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_trial_1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_trial_1"-------
        for thisComponent in practice_trial_1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if prac_key_resp_4.keys in ['', [], None]:  # No response was made
            prac_key_resp_4.keys = None
            # was no response the correct answer?!
            if str(corr_ans).lower() == 'none':
               prac_key_resp_4.corr = 1;  # correct non-response
            else:
               prac_key_resp_4.corr = 0;  # failed to respond (incorrectly)
        # store data for trials_2 (TrialHandler)
        trials_2.addData('prac_key_resp_4.keys',prac_key_resp_4.keys)
        trials_2.addData('prac_key_resp_4.corr', prac_key_resp_4.corr)
        if prac_key_resp_4.keys != None:  # we had a response
            trials_2.addData('prac_key_resp_4.rt', prac_key_resp_4.rt)
        # the Routine "practice_trial_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "feedback_1"-------
        continueRoutine = True
        # update component parameters for each repeat
        if practice_i == 0:
            feedback_message = "That was incorrect.\n Remember, press LEFT if living, RIGHT if nonliving."
        else:
            feedback_message = "That was correct."
        
        if prac_key_resp_4.corr == 0:
            feedback_time = .5
        else:
            feedback_time = 0
        text_12.setText(feedback_message)
        # keep track of which components have finished
        feedback_1Components = [text_12]
        for thisComponent in feedback_1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedback_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback_1"-------
        while continueRoutine:
            # get current time
            t = feedback_1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedback_1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_12* updates
            if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_12.frameNStart = frameN  # exact frame index
                text_12.tStart = t  # local t and not account for scr refresh
                text_12.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
                text_12.setAutoDraw(True)
            if text_12.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_12.tStartRefresh + feedback_time-frameTolerance:
                    # keep track of stop time/frame for later
                    text_12.tStop = t  # not accounting for scr refresh
                    text_12.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_12, 'tStopRefresh')  # time at next scr refresh
                    text_12.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedback_1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback_1"-------
        for thisComponent in feedback_1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        k = k+1
        # the Routine "feedback_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials_2'
    
    
    # ------Prepare to start Routine "end_practice_block"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_5.keys = []
    key_resp_5.rt = []
    _key_resp_5_allKeys = []
    # keep track of which components have finished
    end_practice_blockComponents = [text_11, key_resp_5]
    for thisComponent in end_practice_blockComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    end_practice_blockClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "end_practice_block"-------
    while continueRoutine:
        # get current time
        t = end_practice_blockClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=end_practice_blockClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_11* updates
        if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_11.frameNStart = frameN  # exact frame index
            text_11.tStart = t  # local t and not account for scr refresh
            text_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
            text_11.setAutoDraw(True)
        
        # *key_resp_5* updates
        waitOnFlip = False
        if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_5.frameNStart = frameN  # exact frame index
            key_resp_5.tStart = t  # local t and not account for scr refresh
            key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
            key_resp_5.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_5.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_5.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_5_allKeys.extend(theseKeys)
            if len(_key_resp_5_allKeys):
                key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end_practice_blockComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "end_practice_block"-------
    for thisComponent in end_practice_blockComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practice_i = i + 1
    # the Routine "end_practice_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 2.0 repeats of 'practice_block_1'


# ------Prepare to start Routine "practice_instructions_2"-------
continueRoutine = True
# update component parameters for each repeat
shuffle(stim_living_prac)
shuffle(stim_nonliving_prac)
shuffle(stim_big_prac)
shuffle(stim_small_prac)

target_stims.append(stim_living_prac[0:4])
target_stims.append(stim_nonliving_prac[0:4])
target_stims.append(stim_big_prac[0:4])
target_stims.append(stim_small_prac[0:4])

shuffle(target_stims)
k = 0

key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
practice_instructions_2Components = [text_17, key_resp_6, text_18, text_19, text_20, text_21, heart_instruct_2, cross_instruct_2]
for thisComponent in practice_instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_instructions_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_instructions_2"-------
while continueRoutine:
    # get current time
    t = practice_instructions_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_instructions_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_17* updates
    if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_17.frameNStart = frameN  # exact frame index
        text_17.tStart = t  # local t and not account for scr refresh
        text_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
        text_17.setAutoDraw(True)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_18* updates
    if text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_18.frameNStart = frameN  # exact frame index
        text_18.tStart = t  # local t and not account for scr refresh
        text_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
        text_18.setAutoDraw(True)
    
    # *text_19* updates
    if text_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_19.frameNStart = frameN  # exact frame index
        text_19.tStart = t  # local t and not account for scr refresh
        text_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_19, 'tStartRefresh')  # time at next scr refresh
        text_19.setAutoDraw(True)
    
    # *text_20* updates
    if text_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_20.frameNStart = frameN  # exact frame index
        text_20.tStart = t  # local t and not account for scr refresh
        text_20.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_20, 'tStartRefresh')  # time at next scr refresh
        text_20.setAutoDraw(True)
    
    # *text_21* updates
    if text_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_21.frameNStart = frameN  # exact frame index
        text_21.tStart = t  # local t and not account for scr refresh
        text_21.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
        text_21.setAutoDraw(True)
    
    # *heart_instruct_2* updates
    if heart_instruct_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        heart_instruct_2.frameNStart = frameN  # exact frame index
        heart_instruct_2.tStart = t  # local t and not account for scr refresh
        heart_instruct_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(heart_instruct_2, 'tStartRefresh')  # time at next scr refresh
        heart_instruct_2.setAutoDraw(True)
    
    # *cross_instruct_2* updates
    if cross_instruct_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        cross_instruct_2.frameNStart = frameN  # exact frame index
        cross_instruct_2.tStart = t  # local t and not account for scr refresh
        cross_instruct_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(cross_instruct_2, 'tStartRefresh')  # time at next scr refresh
        cross_instruct_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_instructions_2"-------
for thisComponent in practice_instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practice_instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_trials_2 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='practice_trials_2')
thisExp.addLoop(practice_trials_2)  # add the loop to the experiment
thisPractice_trial_2 = practice_trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_trial_2.rgb)
if thisPractice_trial_2 != None:
    for paramName in thisPractice_trial_2:
        exec('{} = thisPractice_trial_2[paramName]'.format(paramName))

for thisPractice_trial_2 in practice_trials_2:
    currentLoop = practice_trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_trial_2.rgb)
    if thisPractice_trial_2 != None:
        for paramName in thisPractice_trial_2:
            exec('{} = thisPractice_trial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "practice_cue_2"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    
    if target_stims[k][2] == "living":
        practice_cue = heart
        cue_text = "Does the word describe a living thing?"
    else:
        practice_cue = cross
        cue_text = "Does the word describe a something bigger than a soccer ball?"
    cue_3.setImage(practice_cue)
    # keep track of which components have finished
    practice_cue_2Components = [cue_3]
    for thisComponent in practice_cue_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_cue_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_cue_2"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = practice_cue_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_cue_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cue_3* updates
        if cue_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cue_3.frameNStart = frameN  # exact frame index
            cue_3.tStart = t  # local t and not account for scr refresh
            cue_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cue_3, 'tStartRefresh')  # time at next scr refresh
            cue_3.setAutoDraw(True)
        if cue_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cue_3.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                cue_3.tStop = t  # not accounting for scr refresh
                cue_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cue_3, 'tStopRefresh')  # time at next scr refresh
                cue_3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_cue_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_cue_2"-------
    for thisComponent in practice_cue_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "practice_trial_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    if target_stims[k][1] == "congruent":
        corr_ans = "left"
    else:
        corr_ans = "right"
    
    
    text_15.setText(target_stims[k][0])
    prac_key_resp.keys = []
    prac_key_resp.rt = []
    _prac_key_resp_allKeys = []
    # keep track of which components have finished
    practice_trial_2Components = [text_15, prac_key_resp]
    for thisComponent in practice_trial_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_trial_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_trial_2"-------
    while continueRoutine:
        # get current time
        t = practice_trial_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_trial_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_15* updates
        if text_15.status == NOT_STARTED and tThisFlip >= .6-frameTolerance:
            # keep track of start time/frame for later
            text_15.frameNStart = frameN  # exact frame index
            text_15.tStart = t  # local t and not account for scr refresh
            text_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
            text_15.setAutoDraw(True)
        
        # *prac_key_resp* updates
        waitOnFlip = False
        if prac_key_resp.status == NOT_STARTED and tThisFlip >= 0.6-frameTolerance:
            # keep track of start time/frame for later
            prac_key_resp.frameNStart = frameN  # exact frame index
            prac_key_resp.tStart = t  # local t and not account for scr refresh
            prac_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prac_key_resp, 'tStartRefresh')  # time at next scr refresh
            prac_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(prac_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(prac_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if prac_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = prac_key_resp.getKeys(keyList=['left', 'right'], waitRelease=False)
            _prac_key_resp_allKeys.extend(theseKeys)
            if len(_prac_key_resp_allKeys):
                prac_key_resp.keys = _prac_key_resp_allKeys[-1].name  # just the last key pressed
                prac_key_resp.rt = _prac_key_resp_allKeys[-1].rt
                # was this correct?
                if (prac_key_resp.keys == str(corr_ans)) or (prac_key_resp.keys == corr_ans):
                    prac_key_resp.corr = 1
                else:
                    prac_key_resp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_trial_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_trial_2"-------
    for thisComponent in practice_trial_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if prac_key_resp.keys in ['', [], None]:  # No response was made
        prac_key_resp.keys = None
        # was no response the correct answer?!
        if str(corr_ans).lower() == 'none':
           prac_key_resp.corr = 1;  # correct non-response
        else:
           prac_key_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for practice_trials_2 (TrialHandler)
    practice_trials_2.addData('prac_key_resp.keys',prac_key_resp.keys)
    practice_trials_2.addData('prac_key_resp.corr', prac_key_resp.corr)
    if prac_key_resp.keys != None:  # we had a response
        practice_trials_2.addData('prac_key_resp.rt', prac_key_resp.rt)
    # the Routine "practice_trial_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    if practice_i == 0:
        feedback_message = "That was incorrect.\n Remember, press LEFT if living, RIGHT if nonliving."
    else:
        feedback_message = "That was correct."
    
    if prac_key_resp.corr == 0:
        feedback_time = .5
    else:
        feedback_time = 0
    text_16.setText(feedback_message)
    # keep track of which components have finished
    feedback_2Components = [text_16]
    for thisComponent in feedback_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback_2"-------
    while continueRoutine:
        # get current time
        t = feedback_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_16* updates
        if text_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_16.frameNStart = frameN  # exact frame index
            text_16.tStart = t  # local t and not account for scr refresh
            text_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
            text_16.setAutoDraw(True)
        if text_16.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_16.tStartRefresh + feedback_time-frameTolerance:
                # keep track of stop time/frame for later
                text_16.tStop = t  # not accounting for scr refresh
                text_16.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_16, 'tStopRefresh')  # time at next scr refresh
                text_16.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedback_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback_2"-------
    for thisComponent in feedback_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    k = k+1
    # the Routine "feedback_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'practice_trials_2'


# ------Prepare to start Routine "end_practice_block"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
end_practice_blockComponents = [text_11, key_resp_5]
for thisComponent in end_practice_blockComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_practice_blockClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_practice_block"-------
while continueRoutine:
    # get current time
    t = end_practice_blockClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_practice_blockClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_11* updates
    if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_11.frameNStart = frameN  # exact frame index
        text_11.tStart = t  # local t and not account for scr refresh
        text_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
        text_11.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_practice_blockComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_practice_block"-------
for thisComponent in end_practice_blockComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
practice_i = i + 1
# the Routine "end_practice_block" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=3.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instructions"-------
    continueRoutine = True
    # update component parameters for each repeat
    i = 0
    k = 0
    
    target_stims = []
    
    stim_living.append(stim_living)
    stim_nonliving.append(stim_nonliving)
    stim_big.append(stim_big)
    stim_small.append(stim_small)
    
    shuffle(stim_living)
    shuffle(stim_nonliving)
    shuffle(stim_big)
    shuffle(stim_small)
    shuffle(trialtypes)
    
    first_item = randint(1,2) #1 = living, 2 = size
    quality = ""
    
    # set up the trial order for this block
    # first trial has to be a nonswitch, so figure 
    # out what is there and pop it to the end if 
    # necessary
    
    j=0
    for j in range(32):
        if trialtypes[0][0] == "nonswitch":
            break
        else:
            trialtypes.append(trialtypes.pop(0))
    
    for i in range(32):
        congruency = trialtypes[i][1]
        switch_type = trialtypes[i][0]
        if i == 0:
            if (first_item == 1) & (congruency == "congruent"):
                quality = "living"
                target_stims.append([stim_living[0], quality, switch_type, congruency])
                stim_living.pop(0)
            elif (first_item == 1) & (congruency == "incongruent"):
                quality = "nonliving"
                target_stims.append([stim_nonliving[0], quality, switch_type, congruency])
                stim_nonliving.pop(0)
            elif (first_item == 2) & (congruency == "congruent"):
                target_stim = stim_big[i]
                quality = "big"
                target_stims.append([stim_big[0], quality, switch_type, congruency])
                stim_big.pop(0)
            elif (first_item == 2) & (congruency == "incongruent"):
                target_stim = stim_small[i]
                quality = "small"
                target_stims.append([stim_small[0], quality, switch_type, congruency])
                stim_small.pop(0)
        elif (i != 0):
            last_trial = quality
            if (switch_type == "nonswitch"):
                if (last_trial == "living") | (last_trial == "nonliving") :
                    if congruency == "congruent":
                        quality = "living"
                        target_stims.append([stim_living[0], quality, switch_type, congruency])
                        stim_living.pop(0)
                    elif congruency == "incongruent":
                        quality = "nonliving"   
                        target_stims.append([stim_nonliving[0], quality, switch_type, congruency])
                        stim_nonliving.pop(0)
                else:
                    if congruency == "congruent":
                        quality = "big"
                        target_stims.append([stim_big[0], quality, switch_type, congruency])
                        stim_big.pop(0)
                    elif congruency == "incongruent":
                        quality = "small"
                        target_stims.append([stim_small[0], quality, switch_type, congruency])
                        stim_small.pop(0)
            elif (switch_type == "switch"): #switch_type = switch
                if (last_trial == "living") | (last_trial == "nonliving") :
                    if congruency == "congruent":
                        quality = "big"
                        target_stims.append([stim_big[0], quality, switch_type, congruency])
                        stim_big.pop(0)
                    elif congruency == "incongruent":
                        quality = "small"    
                        target_stims.append([stim_small[0], quality, switch_type, congruency])
                        stim_small.pop(0)
                elif (last_trial == "big") | (last_trial == "small") :
                    if congruency == "congruent":
                        quality = "living"
                        target_stims.append([stim_living[0], quality, switch_type, congruency])
                        stim_living.pop(0)
                    elif congruency == "incongruent":
                        quality = "nonliving"
                        target_stims.append([stim_nonliving[0], quality, switch_type, congruency])
                        stim_nonliving.pop(0)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    instructionsComponents = [text_3, key_resp_2, text_4, text_5, text_6, text_7, heart_instruct, cross_instruct]
    for thisComponent in instructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instructions"-------
    while continueRoutine:
        # get current time
        t = instructionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            text_3.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_4* updates
        if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            text_4.setAutoDraw(True)
        
        # *text_5* updates
        if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_5.frameNStart = frameN  # exact frame index
            text_5.tStart = t  # local t and not account for scr refresh
            text_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
            text_5.setAutoDraw(True)
        
        # *text_6* updates
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            text_6.setAutoDraw(True)
        
        # *text_7* updates
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            text_7.setAutoDraw(True)
        
        # *heart_instruct* updates
        if heart_instruct.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            heart_instruct.frameNStart = frameN  # exact frame index
            heart_instruct.tStart = t  # local t and not account for scr refresh
            heart_instruct.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(heart_instruct, 'tStartRefresh')  # time at next scr refresh
            heart_instruct.setAutoDraw(True)
        
        # *cross_instruct* updates
        if cross_instruct.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cross_instruct.frameNStart = frameN  # exact frame index
            cross_instruct.tStart = t  # local t and not account for scr refresh
            cross_instruct.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross_instruct, 'tStartRefresh')  # time at next scr refresh
            cross_instruct.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instructions"-------
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=32.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "cue_presentation"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        
        if target_stims[k][1] in ["living", "nonliving"]:
            cue_stim = heart
            cue_text = "Does the word describe a living thing?"
        else:
            cue_stim = cross
            cue_text = "Does the word describe a something bigger than a soccer ball?"
        cue.setImage(cue_stim)
        # keep track of which components have finished
        cue_presentationComponents = [cue]
        for thisComponent in cue_presentationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        cue_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "cue_presentation"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = cue_presentationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=cue_presentationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue* updates
            if cue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cue.frameNStart = frameN  # exact frame index
                cue.tStart = t  # local t and not account for scr refresh
                cue.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue, 'tStartRefresh')  # time at next scr refresh
                cue.setAutoDraw(True)
            if cue.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cue.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    cue.tStop = t  # not accounting for scr refresh
                    cue.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(cue, 'tStopRefresh')  # time at next scr refresh
                    cue.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in cue_presentationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "cue_presentation"-------
        for thisComponent in cue_presentationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        i = i + 1
        trials.addData('cue.started', cue.tStartRefresh)
        trials.addData('cue.stopped', cue.tStopRefresh)
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        if target_stims[k][3] == "congruent":
            corr_ans = "left"
        else:
            corr_ans = "right"
        text.setText(target_stims[k][0])
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # keep track of which components have finished
        trialComponents = [text, key_resp]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            if text.status == NOT_STARTED and tThisFlip >= .6-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                text.setAutoDraw(True)
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.6-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['left', 'right'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    # was this correct?
                    if (key_resp.keys == str('corr_ans')) or (key_resp.keys == 'corr_ans'):
                        key_resp.corr = 1
                    else:
                        key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        k = k+1
        trials.addData('text.started', text.tStartRefresh)
        trials.addData('text.stopped', text.tStopRefresh)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
            # was no response the correct answer?!
            if str('corr_ans').lower() == 'none':
               key_resp.corr = 1;  # correct non-response
            else:
               key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('key_resp.keys',key_resp.keys)
        trials.addData('key_resp.corr', key_resp.corr)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
        trials.addData('key_resp.started', key_resp.tStartRefresh)
        trials.addData('key_resp.stopped', key_resp.tStopRefresh)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 32.0 repeats of 'trials'
    
# completed 3.0 repeats of 'blocks'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
