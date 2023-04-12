#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.4),
    on Tue Mar 28 10:26:53 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.1.4'
expName = 'omg3'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
    'condition': 'inperson',
    'site': 'usd',
}
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
    originPath='/Users/kellycotton/Dropbox/Research/OnlineMemory/exp/omg3/omg3_lastrun.py',
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
    monitor='testMonitor', color=[0.3254, 0.3254, 0.3254], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# Setup ioHub
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# Initialize components for Routine "setup"
setupClock = core.Clock()

# Initialize components for Routine "practice_instruct_1"
practice_instruct_1Clock = core.Clock()
text_9 = visual.TextStim(win=win, name='text_9',
    text='Welcome to the experiment!\n\nDuring this experiment, you are going to see a series of letters. Your job is to remember these letters.\n\nFirst, you will see a cross in the center of the screen. This is your warning that the letters are about to appear and you should pay attention. Next, you will see three letters appear in the center of the screen, followed by a #.\n\nYou will then see two letters on the screen at the same time. One of these letters was in the series of letters you just saw and one is a new letter. Your job is to decide which letter you saw before. If you think you saw the letter on the LEFT, press the LEFT arrow key. If you think you saw the letter on the RIGHT, press the RIGHT arrow key.\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "trial_setup"
trial_setupClock = core.Clock()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fixation_stim = visual.ShapeStim(
    win=win, name='fixation_stim', vertices='cross',
    size=(0.07, 0.07),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "stim_1"
stim_1Clock = core.Clock()
stim_1_text = visual.TextStim(win=win, name='stim_1_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "stim_2"
stim_2Clock = core.Clock()
stim_2_text = visual.TextStim(win=win, name='stim_2_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "stim_3"
stim_3Clock = core.Clock()
stim_3_text = visual.TextStim(win=win, name='stim_3_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "mask"
maskClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='# # # #',
    font='Open Sans',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "test"
testClock = core.Clock()
stim_target_text = visual.TextStim(win=win, name='stim_target_text',
    text='',
    font='Open Sans',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
stim_lure_text = visual.TextStim(win=win, name='stim_lure_text',
    text='',
    font='Open Sans',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_test = keyboard.Keyboard()

# Initialize components for Routine "feedback_practice"
feedback_practiceClock = core.Clock()
current_text_2 = visual.TextStim(win=win, name='current_text_2',
    text='',
    font='Open Sans',
    pos=(0, -0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "practice_end"
practice_endClock = core.Clock()
text_11 = visual.TextStim(win=win, name='text_11',
    text="You have finished the practice! Let's begin the real trials.\n\nDuring the real trials, you can earn points! On every trial, you can earn 3 points if you are correct. You can also lose 3 points if you are incorrect. \n\nSomtimes you will see a RED letter. If you remember this letter correctly, you will earn 25 points. If you answer incorrectly, you will lose 25 points. \n\nAgain, if you remember seeing the letter on the LEFT, press the LEFT arrow key. If you remember seeing the letter on the RIGHT, press the RIGHT arrow key.\n\nPlease try to respond as fast and accurately as possible.\n\nPress SPACE to begin.",
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "get_ready"
get_readyClock = core.Clock()
text_10 = visual.TextStim(win=win, name='text_10',
    text='Get ready!',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "trial_setup"
trial_setupClock = core.Clock()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fixation_stim = visual.ShapeStim(
    win=win, name='fixation_stim', vertices='cross',
    size=(0.07, 0.07),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "stim_1"
stim_1Clock = core.Clock()
stim_1_text = visual.TextStim(win=win, name='stim_1_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "stim_2"
stim_2Clock = core.Clock()
stim_2_text = visual.TextStim(win=win, name='stim_2_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "stim_3"
stim_3Clock = core.Clock()
stim_3_text = visual.TextStim(win=win, name='stim_3_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "mask"
maskClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='# # # #',
    font='Open Sans',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "test"
testClock = core.Clock()
stim_target_text = visual.TextStim(win=win, name='stim_target_text',
    text='',
    font='Open Sans',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
stim_lure_text = visual.TextStim(win=win, name='stim_lure_text',
    text='',
    font='Open Sans',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_test = keyboard.Keyboard()

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
current_score = 0
current_score_text = ''
trial_points_text = ''
accuracy = 0
trial_counter = 0
accuracy_block_total = 0
accuracy_block = 0
accuracy_total = 0
trial_counter_block = 0
current_text = visual.TextStim(win=win, name='current_text',
    text='',
    font='Open Sans',
    pos=(0, -.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
point_text = visual.TextStim(win=win, name='point_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_12 = visual.TextStim(win=win, name='text_12',
    text='',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "end_block"
end_blockClock = core.Clock()
block_msg = ''
block_accuracy_msg = ''
total_accuracy_msg = ''
text_5 = visual.TextStim(win=win, name='text_5',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
skip_break = keyboard.Keyboard()
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Open Sans',
    pos=(-.25, -.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_7 = visual.TextStim(win=win, name='text_7',
    text='',
    font='Open Sans',
    pos=(.25, -.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "end"
endClock = core.Clock()
text_8 = visual.TextStim(win=win, name='text_8',
    text='You have reached the end of the experiment!\n\nThank you for your participation!\n\nPlease press ESCAPE to end.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_end = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat

stim_time = .5
fix_time = .5
mask_time = .5

stim_size = 0.1

block_n = 0
block_total = 6
trial_n = 1
trial_total = 1

win.mouseVisible = False
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
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practice_instruct_1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
practice_instruct_1Components = [text_9, key_resp]
for thisComponent in practice_instruct_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_instruct_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_instruct_1"-------
while continueRoutine:
    # get current time
    t = practice_instruct_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_instruct_1Clock)
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
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
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
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_instruct_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_instruct_1"-------
for thisComponent in practice_instruct_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practice_instruct_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_practice = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions_practice.xlsx'),
    seed=None, name='trials_practice')
thisExp.addLoop(trials_practice)  # add the loop to the experiment
thisTrials_practice = trials_practice.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_practice.rgb)
if thisTrials_practice != None:
    for paramName in thisTrials_practice:
        exec('{} = thisTrials_practice[paramName]'.format(paramName))

for thisTrials_practice in trials_practice:
    currentLoop = trials_practice
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_practice.rgb)
    if thisTrials_practice != None:
        for paramName in thisTrials_practice:
            exec('{} = thisTrials_practice[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial_setup"-------
    continueRoutine = True
    # update component parameters for each repeat
    stim_letters = []
    letters = ["B","F","G","H","J","L","M","Q","R","T","Y"]
    stim_letter = ''
    
    for i in range(4):
        shuffle(letters)
        stim_letter = letters[0]
        while stim_letter in stim_letters[-3:]:
            shuffle(letters)
            stim_letter = letters[0]
        stim_letters.append(stim_letter)
    
    i = 0
    stim_1_color = "black"
    stim_2_color = "black"
    stim_3_color = "black"
    stim_1_point = 3
    stim_2_point = 3
    stim_3_point = 3
    
    
    if trial_type == "sp_1_red":
        stim_1_color = "red"
        stim_1_point = 25
    elif trial_type == "sp_2_red":
        stim_2_color = "red"
        stim_2_point = 25
    elif trial_type == "sp_3_red":
        stim_3_color = "red"
        stim_3_point = 25
    
    # keep track of which components have finished
    trial_setupComponents = []
    for thisComponent in trial_setupComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trial_setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial_setup"-------
    while continueRoutine:
        # get current time
        t = trial_setupClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trial_setupClock)
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
        for thisComponent in trial_setupComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial_setup"-------
    for thisComponent in trial_setupComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "trial_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(0.750000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fixation_stim]
    for thisComponent in fixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_stim* updates
        if fixation_stim.status == NOT_STARTED and tThisFlip >= .25-frameTolerance:
            # keep track of start time/frame for later
            fixation_stim.frameNStart = frameN  # exact frame index
            fixation_stim.tStart = t  # local t and not account for scr refresh
            fixation_stim.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_stim, 'tStartRefresh')  # time at next scr refresh
            fixation_stim.setAutoDraw(True)
        if fixation_stim.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_stim.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_stim.tStop = t  # not accounting for scr refresh
                fixation_stim.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_stim, 'tStopRefresh')  # time at next scr refresh
                fixation_stim.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation"-------
    for thisComponent in fixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "stim_1"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    stim_1 = stim_letters[0].lower()
    stim_1_text.setColor(stim_1_color, colorSpace='rgb')
    stim_1_text.setText(stim_1)
    stim_1_text.setHeight(0.07)
    # keep track of which components have finished
    stim_1Components = [stim_1_text]
    for thisComponent in stim_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    stim_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stim_1"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = stim_1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=stim_1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stim_1_text* updates
        if stim_1_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stim_1_text.frameNStart = frameN  # exact frame index
            stim_1_text.tStart = t  # local t and not account for scr refresh
            stim_1_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim_1_text, 'tStartRefresh')  # time at next scr refresh
            stim_1_text.setAutoDraw(True)
        if stim_1_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim_1_text.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                stim_1_text.tStop = t  # not accounting for scr refresh
                stim_1_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim_1_text, 'tStopRefresh')  # time at next scr refresh
                stim_1_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in stim_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stim_1"-------
    for thisComponent in stim_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "stim_2"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    stim_2 = stim_letters[1].lower()
    i += 1
    stim_2_text.setColor(stim_2_color, colorSpace='rgb')
    stim_2_text.setText(stim_2)
    stim_2_text.setHeight(0.07)
    # keep track of which components have finished
    stim_2Components = [stim_2_text]
    for thisComponent in stim_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    stim_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stim_2"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = stim_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=stim_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stim_2_text* updates
        if stim_2_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stim_2_text.frameNStart = frameN  # exact frame index
            stim_2_text.tStart = t  # local t and not account for scr refresh
            stim_2_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim_2_text, 'tStartRefresh')  # time at next scr refresh
            stim_2_text.setAutoDraw(True)
        if stim_2_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim_2_text.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                stim_2_text.tStop = t  # not accounting for scr refresh
                stim_2_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim_2_text, 'tStopRefresh')  # time at next scr refresh
                stim_2_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in stim_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stim_2"-------
    for thisComponent in stim_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "stim_3"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    stim_3 = stim_letters[2].lower()
    i += 1
    stim_3_text.setColor(stim_3_color, colorSpace='rgb')
    stim_3_text.setText(stim_3)
    stim_3_text.setHeight(0.07)
    # keep track of which components have finished
    stim_3Components = [stim_3_text]
    for thisComponent in stim_3Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    stim_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stim_3"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = stim_3Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=stim_3Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stim_3_text* updates
        if stim_3_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stim_3_text.frameNStart = frameN  # exact frame index
            stim_3_text.tStart = t  # local t and not account for scr refresh
            stim_3_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim_3_text, 'tStartRefresh')  # time at next scr refresh
            stim_3_text.setAutoDraw(True)
        if stim_3_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim_3_text.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                stim_3_text.tStop = t  # not accounting for scr refresh
                stim_3_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim_3_text, 'tStopRefresh')  # time at next scr refresh
                stim_3_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in stim_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stim_3"-------
    for thisComponent in stim_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "mask"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    text_2.setHeight(0.07)
    # keep track of which components have finished
    maskComponents = [text_2]
    for thisComponent in maskComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    maskClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "mask"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = maskClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=maskClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
                text_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in maskComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "mask"-------
    for thisComponent in maskComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "test"-------
    continueRoutine = True
    # update component parameters for each repeat
    if test_position == "left":
        target_position = [-.1, 0]
        lure_position = [.1, 0]
    elif test_position == "right":
        target_position = [.1, 0]
        lure_position = [-.1, 0]
    
    corr_ans = test_position
    
    if serial_position_test == 0:
        trial_points = stim_1_point
    elif serial_position_test == 1:
        trial_points = stim_2_point
    elif serial_position_test == 2:
        trial_points = stim_3_point
    stim_target_text.setPos(target_position)
    stim_target_text.setText(stim_letters[serial_position_test])
    stim_target_text.setHeight(0.07)
    stim_lure_text.setPos(lure_position)
    stim_lure_text.setText(stim_letters[3])
    stim_lure_text.setHeight(0.07)
    key_resp_test.keys = []
    key_resp_test.rt = []
    _key_resp_test_allKeys = []
    # keep track of which components have finished
    testComponents = [stim_target_text, stim_lure_text, key_resp_test]
    for thisComponent in testComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "test"-------
    while continueRoutine:
        # get current time
        t = testClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=testClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stim_target_text* updates
        if stim_target_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stim_target_text.frameNStart = frameN  # exact frame index
            stim_target_text.tStart = t  # local t and not account for scr refresh
            stim_target_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim_target_text, 'tStartRefresh')  # time at next scr refresh
            stim_target_text.setAutoDraw(True)
        
        # *stim_lure_text* updates
        if stim_lure_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stim_lure_text.frameNStart = frameN  # exact frame index
            stim_lure_text.tStart = t  # local t and not account for scr refresh
            stim_lure_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim_lure_text, 'tStartRefresh')  # time at next scr refresh
            stim_lure_text.setAutoDraw(True)
        
        # *key_resp_test* updates
        waitOnFlip = False
        if key_resp_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_test.frameNStart = frameN  # exact frame index
            key_resp_test.tStart = t  # local t and not account for scr refresh
            key_resp_test.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_test, 'tStartRefresh')  # time at next scr refresh
            key_resp_test.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_test.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_test.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_test.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_test.getKeys(keyList=['left','right'], waitRelease=False)
            _key_resp_test_allKeys.extend(theseKeys)
            if len(_key_resp_test_allKeys):
                key_resp_test.keys = _key_resp_test_allKeys[-1].name  # just the last key pressed
                key_resp_test.rt = _key_resp_test_allKeys[-1].rt
                # was this correct?
                if (key_resp_test.keys == str(corr_ans)) or (key_resp_test.keys == corr_ans):
                    key_resp_test.corr = 1
                else:
                    key_resp_test.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in testComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "test"-------
    for thisComponent in testComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData("trial_n", trial_n)
    thisExp.addData("block_n", block_n)
    
    trial_n += 1
    
    # check responses
    if key_resp_test.keys in ['', [], None]:  # No response was made
        key_resp_test.keys = None
        # was no response the correct answer?!
        if str(corr_ans).lower() == 'none':
           key_resp_test.corr = 1;  # correct non-response
        else:
           key_resp_test.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_practice (TrialHandler)
    trials_practice.addData('key_resp_test.keys',key_resp_test.keys)
    trials_practice.addData('key_resp_test.corr', key_resp_test.corr)
    if key_resp_test.keys != None:  # we had a response
        trials_practice.addData('key_resp_test.rt', key_resp_test.rt)
    # the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback_practice"-------
    continueRoutine = True
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    if key_resp_test.corr == 1:
        feedback_msg = "That was correct!"
    elif key_resp_test.corr == 0:
        feedback_msg = "That was incorrect. You should have pressed the " + str(test_position).upper() + " arrow key."
    
    
    
    current_text_2.setText(feedback_msg)
    # keep track of which components have finished
    feedback_practiceComponents = [current_text_2]
    for thisComponent in feedback_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback_practice"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedback_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *current_text_2* updates
        if current_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            current_text_2.frameNStart = frameN  # exact frame index
            current_text_2.tStart = t  # local t and not account for scr refresh
            current_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(current_text_2, 'tStartRefresh')  # time at next scr refresh
            current_text_2.setAutoDraw(True)
        if current_text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > current_text_2.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                current_text_2.tStop = t  # not accounting for scr refresh
                current_text_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(current_text_2, 'tStopRefresh')  # time at next scr refresh
                current_text_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedback_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback_practice"-------
    for thisComponent in feedback_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_practice'


# ------Prepare to start Routine "practice_end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
practice_endComponents = [text_11, key_resp_2]
for thisComponent in practice_endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_end"-------
while continueRoutine:
    # get current time
    t = practice_endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_endClock)
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
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
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
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_end"-------
for thisComponent in practice_endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
current_score = 0
accuracy = 0
trial_counter = 0
accuracy_block_total = 0
accuracy_block = 0
accuracy_total = 0
trial_counter_block = 0
trial_n = 1
block_n += 1
# the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=block_total, method='random', 
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
    
    # ------Prepare to start Routine "get_ready"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    get_readyComponents = [text_10]
    for thisComponent in get_readyComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    get_readyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "get_ready"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = get_readyClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=get_readyClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_10* updates
        if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_10.frameNStart = frameN  # exact frame index
            text_10.tStart = t  # local t and not account for scr refresh
            text_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
            text_10.setAutoDraw(True)
        if text_10.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_10.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_10.tStop = t  # not accounting for scr refresh
                text_10.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_10, 'tStopRefresh')  # time at next scr refresh
                text_10.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in get_readyComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "get_ready"-------
    for thisComponent in get_readyComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # set up handler to look after randomisation of conditions etc
    trials_experimental = data.TrialHandler(nReps=trial_total, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('conditions.xlsx'),
        seed=None, name='trials_experimental')
    thisExp.addLoop(trials_experimental)  # add the loop to the experiment
    thisTrials_experimental = trials_experimental.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_experimental.rgb)
    if thisTrials_experimental != None:
        for paramName in thisTrials_experimental:
            exec('{} = thisTrials_experimental[paramName]'.format(paramName))
    
    for thisTrials_experimental in trials_experimental:
        currentLoop = trials_experimental
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_experimental.rgb)
        if thisTrials_experimental != None:
            for paramName in thisTrials_experimental:
                exec('{} = thisTrials_experimental[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trial_setup"-------
        continueRoutine = True
        # update component parameters for each repeat
        stim_letters = []
        letters = ["B","F","G","H","J","L","M","Q","R","T","Y"]
        stim_letter = ''
        
        for i in range(4):
            shuffle(letters)
            stim_letter = letters[0]
            while stim_letter in stim_letters[-3:]:
                shuffle(letters)
                stim_letter = letters[0]
            stim_letters.append(stim_letter)
        
        i = 0
        stim_1_color = "black"
        stim_2_color = "black"
        stim_3_color = "black"
        stim_1_point = 3
        stim_2_point = 3
        stim_3_point = 3
        
        
        if trial_type == "sp_1_red":
            stim_1_color = "red"
            stim_1_point = 25
        elif trial_type == "sp_2_red":
            stim_2_color = "red"
            stim_2_point = 25
        elif trial_type == "sp_3_red":
            stim_3_color = "red"
            stim_3_point = 25
        
        # keep track of which components have finished
        trial_setupComponents = []
        for thisComponent in trial_setupComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trial_setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial_setup"-------
        while continueRoutine:
            # get current time
            t = trial_setupClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trial_setupClock)
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
            for thisComponent in trial_setupComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial_setup"-------
        for thisComponent in trial_setupComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "trial_setup" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "fixation"-------
        continueRoutine = True
        routineTimer.add(0.750000)
        # update component parameters for each repeat
        # keep track of which components have finished
        fixationComponents = [fixation_stim]
        for thisComponent in fixationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "fixation"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = fixationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=fixationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation_stim* updates
            if fixation_stim.status == NOT_STARTED and tThisFlip >= .25-frameTolerance:
                # keep track of start time/frame for later
                fixation_stim.frameNStart = frameN  # exact frame index
                fixation_stim.tStart = t  # local t and not account for scr refresh
                fixation_stim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation_stim, 'tStartRefresh')  # time at next scr refresh
                fixation_stim.setAutoDraw(True)
            if fixation_stim.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation_stim.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation_stim.tStop = t  # not accounting for scr refresh
                    fixation_stim.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation_stim, 'tStopRefresh')  # time at next scr refresh
                    fixation_stim.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "fixation"-------
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "stim_1"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        stim_1 = stim_letters[0].lower()
        stim_1_text.setColor(stim_1_color, colorSpace='rgb')
        stim_1_text.setText(stim_1)
        stim_1_text.setHeight(0.07)
        # keep track of which components have finished
        stim_1Components = [stim_1_text]
        for thisComponent in stim_1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stim_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stim_1"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = stim_1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stim_1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim_1_text* updates
            if stim_1_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim_1_text.frameNStart = frameN  # exact frame index
                stim_1_text.tStart = t  # local t and not account for scr refresh
                stim_1_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim_1_text, 'tStartRefresh')  # time at next scr refresh
                stim_1_text.setAutoDraw(True)
            if stim_1_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim_1_text.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    stim_1_text.tStop = t  # not accounting for scr refresh
                    stim_1_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim_1_text, 'tStopRefresh')  # time at next scr refresh
                    stim_1_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stim_1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stim_1"-------
        for thisComponent in stim_1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "stim_2"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        stim_2 = stim_letters[1].lower()
        i += 1
        stim_2_text.setColor(stim_2_color, colorSpace='rgb')
        stim_2_text.setText(stim_2)
        stim_2_text.setHeight(0.07)
        # keep track of which components have finished
        stim_2Components = [stim_2_text]
        for thisComponent in stim_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stim_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stim_2"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = stim_2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stim_2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim_2_text* updates
            if stim_2_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim_2_text.frameNStart = frameN  # exact frame index
                stim_2_text.tStart = t  # local t and not account for scr refresh
                stim_2_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim_2_text, 'tStartRefresh')  # time at next scr refresh
                stim_2_text.setAutoDraw(True)
            if stim_2_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim_2_text.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    stim_2_text.tStop = t  # not accounting for scr refresh
                    stim_2_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim_2_text, 'tStopRefresh')  # time at next scr refresh
                    stim_2_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stim_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stim_2"-------
        for thisComponent in stim_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "stim_3"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        stim_3 = stim_letters[2].lower()
        i += 1
        stim_3_text.setColor(stim_3_color, colorSpace='rgb')
        stim_3_text.setText(stim_3)
        stim_3_text.setHeight(0.07)
        # keep track of which components have finished
        stim_3Components = [stim_3_text]
        for thisComponent in stim_3Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stim_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stim_3"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = stim_3Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stim_3Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim_3_text* updates
            if stim_3_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim_3_text.frameNStart = frameN  # exact frame index
                stim_3_text.tStart = t  # local t and not account for scr refresh
                stim_3_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim_3_text, 'tStartRefresh')  # time at next scr refresh
                stim_3_text.setAutoDraw(True)
            if stim_3_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim_3_text.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    stim_3_text.tStop = t  # not accounting for scr refresh
                    stim_3_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim_3_text, 'tStopRefresh')  # time at next scr refresh
                    stim_3_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stim_3Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stim_3"-------
        for thisComponent in stim_3Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "mask"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        text_2.setHeight(0.07)
        # keep track of which components have finished
        maskComponents = [text_2]
        for thisComponent in maskComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        maskClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "mask"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = maskClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=maskClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_2* updates
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                text_2.setAutoDraw(True)
            if text_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_2.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    text_2.tStop = t  # not accounting for scr refresh
                    text_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
                    text_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in maskComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "mask"-------
        for thisComponent in maskComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "test"-------
        continueRoutine = True
        # update component parameters for each repeat
        if test_position == "left":
            target_position = [-.1, 0]
            lure_position = [.1, 0]
        elif test_position == "right":
            target_position = [.1, 0]
            lure_position = [-.1, 0]
        
        corr_ans = test_position
        
        if serial_position_test == 0:
            trial_points = stim_1_point
        elif serial_position_test == 1:
            trial_points = stim_2_point
        elif serial_position_test == 2:
            trial_points = stim_3_point
        stim_target_text.setPos(target_position)
        stim_target_text.setText(stim_letters[serial_position_test])
        stim_target_text.setHeight(0.07)
        stim_lure_text.setPos(lure_position)
        stim_lure_text.setText(stim_letters[3])
        stim_lure_text.setHeight(0.07)
        key_resp_test.keys = []
        key_resp_test.rt = []
        _key_resp_test_allKeys = []
        # keep track of which components have finished
        testComponents = [stim_target_text, stim_lure_text, key_resp_test]
        for thisComponent in testComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "test"-------
        while continueRoutine:
            # get current time
            t = testClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=testClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim_target_text* updates
            if stim_target_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim_target_text.frameNStart = frameN  # exact frame index
                stim_target_text.tStart = t  # local t and not account for scr refresh
                stim_target_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim_target_text, 'tStartRefresh')  # time at next scr refresh
                stim_target_text.setAutoDraw(True)
            
            # *stim_lure_text* updates
            if stim_lure_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim_lure_text.frameNStart = frameN  # exact frame index
                stim_lure_text.tStart = t  # local t and not account for scr refresh
                stim_lure_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim_lure_text, 'tStartRefresh')  # time at next scr refresh
                stim_lure_text.setAutoDraw(True)
            
            # *key_resp_test* updates
            waitOnFlip = False
            if key_resp_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_test.frameNStart = frameN  # exact frame index
                key_resp_test.tStart = t  # local t and not account for scr refresh
                key_resp_test.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_test, 'tStartRefresh')  # time at next scr refresh
                key_resp_test.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_test.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_test.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_test.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_test.getKeys(keyList=['left','right'], waitRelease=False)
                _key_resp_test_allKeys.extend(theseKeys)
                if len(_key_resp_test_allKeys):
                    key_resp_test.keys = _key_resp_test_allKeys[-1].name  # just the last key pressed
                    key_resp_test.rt = _key_resp_test_allKeys[-1].rt
                    # was this correct?
                    if (key_resp_test.keys == str(corr_ans)) or (key_resp_test.keys == corr_ans):
                        key_resp_test.corr = 1
                    else:
                        key_resp_test.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in testComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "test"-------
        for thisComponent in testComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData("trial_n", trial_n)
        thisExp.addData("block_n", block_n)
        
        trial_n += 1
        
        # check responses
        if key_resp_test.keys in ['', [], None]:  # No response was made
            key_resp_test.keys = None
            # was no response the correct answer?!
            if str(corr_ans).lower() == 'none':
               key_resp_test.corr = 1;  # correct non-response
            else:
               key_resp_test.corr = 0;  # failed to respond (incorrectly)
        # store data for trials_experimental (TrialHandler)
        trials_experimental.addData('key_resp_test.keys',key_resp_test.keys)
        trials_experimental.addData('key_resp_test.corr', key_resp_test.corr)
        if key_resp_test.keys != None:  # we had a response
            trials_experimental.addData('key_resp_test.rt', key_resp_test.rt)
        # the Routine "test" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "feedback"-------
        continueRoutine = True
        routineTimer.add(1.500000)
        # update component parameters for each repeat
        if key_resp_test.corr == 1:
            current_score += trial_points
            trial_points_text = "+ " + str(trial_points)
        elif key_resp_test.corr == 0:
            current_score -= trial_points
            trial_points_text = "- " + str(trial_points)
        
        
        current_score_text = "Current score: " + str(current_score)
        
        accuracy += key_resp_test.corr
        accuracy_block += key_resp_test.corr
        trial_counter += 1
        trial_counter_block += 1
        
        accuracy_total = round((accuracy/trial_counter*100))
        
        total_accuracy_msg = "Total Accuracy:\n" + str(accuracy_total) + "%"
        current_text.setText(current_score_text)
        point_text.setText(trial_points_text)
        text_12.setText(total_accuracy_msg)
        # keep track of which components have finished
        feedbackComponents = [current_text, point_text, text_12]
        for thisComponent in feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *current_text* updates
            if current_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                current_text.frameNStart = frameN  # exact frame index
                current_text.tStart = t  # local t and not account for scr refresh
                current_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(current_text, 'tStartRefresh')  # time at next scr refresh
                current_text.setAutoDraw(True)
            if current_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > current_text.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    current_text.tStop = t  # not accounting for scr refresh
                    current_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(current_text, 'tStopRefresh')  # time at next scr refresh
                    current_text.setAutoDraw(False)
            
            # *point_text* updates
            if point_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                point_text.frameNStart = frameN  # exact frame index
                point_text.tStart = t  # local t and not account for scr refresh
                point_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(point_text, 'tStartRefresh')  # time at next scr refresh
                point_text.setAutoDraw(True)
            if point_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > point_text.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    point_text.tStop = t  # not accounting for scr refresh
                    point_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(point_text, 'tStopRefresh')  # time at next scr refresh
                    point_text.setAutoDraw(False)
            
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
                if tThisFlipGlobal > text_12.tStartRefresh + 1.5-frameTolerance:
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
            for thisComponent in feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback"-------
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.nextEntry()
        
    # completed trial_total repeats of 'trials_experimental'
    
    
    # ------Prepare to start Routine "end_block"-------
    continueRoutine = True
    routineTimer.add(30.000000)
    # update component parameters for each repeat
    block_msg = "You have reached the end of block " + str(block_n) + " of " + str(block_total) + ".\nYour current score is " + str(current_score) + "\nPlease take a 30 second break."
    
    accuracy_total = round((accuracy/trial_counter*100))
    accuracy_block_total = round((accuracy_block/trial_counter_block*100))
    
    block_accuracy_msg = "Block Accuracy:\n" + str(accuracy_block_total) + "%"
    total_accuracy_msg = "Total Accuracy:\n" + str(accuracy_total) + "%"
    text_5.setText(block_msg)
    skip_break.keys = []
    skip_break.rt = []
    _skip_break_allKeys = []
    text_6.setText(block_accuracy_msg)
    text_7.setText(total_accuracy_msg)
    # keep track of which components have finished
    end_blockComponents = [text_5, skip_break, text_6, text_7]
    for thisComponent in end_blockComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    end_blockClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "end_block"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = end_blockClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=end_blockClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_5* updates
        if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_5.frameNStart = frameN  # exact frame index
            text_5.tStart = t  # local t and not account for scr refresh
            text_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
            text_5.setAutoDraw(True)
        if text_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_5.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                text_5.tStop = t  # not accounting for scr refresh
                text_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_5, 'tStopRefresh')  # time at next scr refresh
                text_5.setAutoDraw(False)
        
        # *skip_break* updates
        waitOnFlip = False
        if skip_break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            skip_break.frameNStart = frameN  # exact frame index
            skip_break.tStart = t  # local t and not account for scr refresh
            skip_break.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(skip_break, 'tStartRefresh')  # time at next scr refresh
            skip_break.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(skip_break.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(skip_break.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if skip_break.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > skip_break.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                skip_break.tStop = t  # not accounting for scr refresh
                skip_break.frameNStop = frameN  # exact frame index
                win.timeOnFlip(skip_break, 'tStopRefresh')  # time at next scr refresh
                skip_break.status = FINISHED
        if skip_break.status == STARTED and not waitOnFlip:
            theseKeys = skip_break.getKeys(keyList=['space'], waitRelease=False)
            _skip_break_allKeys.extend(theseKeys)
            if len(_skip_break_allKeys):
                skip_break.keys = _skip_break_allKeys[-1].name  # just the last key pressed
                skip_break.rt = _skip_break_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_6* updates
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            text_6.setAutoDraw(True)
        if text_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_6.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                text_6.tStop = t  # not accounting for scr refresh
                text_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_6, 'tStopRefresh')  # time at next scr refresh
                text_6.setAutoDraw(False)
        
        # *text_7* updates
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            text_7.setAutoDraw(True)
        if text_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_7.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                text_7.tStop = t  # not accounting for scr refresh
                text_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_7, 'tStopRefresh')  # time at next scr refresh
                text_7.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end_blockComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "end_block"-------
    for thisComponent in end_blockComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    accuracy_block = 0
    trial_counter_block = 0
    block_n += 1
    thisExp.nextEntry()
    
# completed block_total repeats of 'blocks'


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_end.keys = []
key_resp_end.rt = []
_key_resp_end_allKeys = []
# keep track of which components have finished
endComponents = [text_8, key_resp_end]
for thisComponent in endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end"-------
while continueRoutine:
    # get current time
    t = endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=endClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_8* updates
    if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_8.frameNStart = frameN  # exact frame index
        text_8.tStart = t  # local t and not account for scr refresh
        text_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
        text_8.setAutoDraw(True)
    
    # *key_resp_end* updates
    waitOnFlip = False
    if key_resp_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_end.frameNStart = frameN  # exact frame index
        key_resp_end.tStart = t  # local t and not account for scr refresh
        key_resp_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_end, 'tStartRefresh')  # time at next scr refresh
        key_resp_end.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_end.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_end.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_end.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_end.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_end_allKeys.extend(theseKeys)
        if len(_key_resp_end_allKeys):
            key_resp_end.keys = _key_resp_end_allKeys[-1].name  # just the last key pressed
            key_resp_end.rt = _key_resp_end_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end"-------
for thisComponent in endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_8.started', text_8.tStartRefresh)
thisExp.addData('text_8.stopped', text_8.tStopRefresh)
# the Routine "end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
