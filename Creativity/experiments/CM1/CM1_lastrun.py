#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Wed Apr 13 17:28:47 2022
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
expName = 'CM1'  # from the Builder filename that created this script
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
    originPath='/Users/kellycotton/Dropbox/Research/Creativity/CM1/Creativity-Memory/CM1/CM1_lastrun.py',
    savePickle=True, saveWideText=False,
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
words = [];
rat_stim = [];

key_to_position = {'a':0,'s':1,'z':2,'x':3}

targetwords = []

i=0



# Initialize components for Routine "instructions_si_practice"
instructions_si_practiceClock = core.Clock()
instr_text_si = visual.TextStim(win=win, name='instr_text_si',
    text='Press <space> when you are ready to begin the practice.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_resp_si = keyboard.Keyboard()

# Initialize components for Routine "si_key_positions"
si_key_positionsClock = core.Clock()
choice_a = visual.TextStim(win=win, name='choice_a',
    text='A',
    font='Arial',
    pos=(-.25, .25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
choice_s = visual.TextStim(win=win, name='choice_s',
    text='S',
    font='Arial',
    pos=(.25, .25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
choice_z = visual.TextStim(win=win, name='choice_z',
    text='Z',
    font='Arial',
    pos=(-.25, -.25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
choice_x = visual.TextStim(win=win, name='choice_x',
    text='X',
    font='Arial',
    pos=(.25, -.25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_si_space = keyboard.Keyboard()
text_practice = visual.TextStim(win=win, name='text_practice',
    text='The above keys correspond to the screen positions.\nPress <space> to continue',
    font='Arial',
    pos=(0, -.4), height=.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "practice_si"
practice_siClock = core.Clock()
fixation_practice = visual.ShapeStim(
    win=win, name='fixation_practice', vertices='cross',
    size=(0.1, 0.1),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-1.0, interpolate=True)
target_cue_practice = visual.TextStim(win=win, name='target_cue_practice',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
target_si_practice = visual.TextStim(win=win, name='target_si_practice',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
choice1_practice = visual.TextStim(win=win, name='choice1_practice',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
choice2_practice = visual.TextStim(win=win, name='choice2_practice',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
choice3_practice = visual.TextStim(win=win, name='choice3_practice',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
key_resp_si_practice = keyboard.Keyboard()

# Initialize components for Routine "end_practice"
end_practiceClock = core.Clock()
text_end_practice = visual.TextStim(win=win, name='text_end_practice',
    text='This is the end of the practice trials. \nThe experimental trials are next. \nThese trials are the same as the practice trials, except we are now keeping track of your responses. \n\nThere will be several breaks throughout the experiment, please use them as it will keep you rested and allow you to finish faster than if you skip them. \n\nThere will be a screen letting you know when you have finished this task. ',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_practice_end = keyboard.Keyboard()

# Initialize components for Routine "instructions_si"
instructions_siClock = core.Clock()
instr_text_si_2 = visual.TextStim(win=win, name='instr_text_si_2',
    text='Remember, press the key <a,s,z,x> that corresponds to the location of the word that matches the center cue word.\n\nPress <space> when you are ready to begin.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_resp_si_2 = keyboard.Keyboard()

# Initialize components for Routine "si_key_positions"
si_key_positionsClock = core.Clock()
choice_a = visual.TextStim(win=win, name='choice_a',
    text='A',
    font='Arial',
    pos=(-.25, .25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
choice_s = visual.TextStim(win=win, name='choice_s',
    text='S',
    font='Arial',
    pos=(.25, .25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
choice_z = visual.TextStim(win=win, name='choice_z',
    text='Z',
    font='Arial',
    pos=(-.25, -.25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
choice_x = visual.TextStim(win=win, name='choice_x',
    text='X',
    font='Arial',
    pos=(.25, -.25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_si_space = keyboard.Keyboard()
text_practice = visual.TextStim(win=win, name='text_practice',
    text='The above keys correspond to the screen positions.\nPress <space> to continue',
    font='Arial',
    pos=(0, -.4), height=.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "stimulus_identification"
stimulus_identificationClock = core.Clock()
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',
    size=(0.1, 0.1),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-1.0, interpolate=True)
target_cue = visual.TextStim(win=win, name='target_cue',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
target_si = visual.TextStim(win=win, name='target_si',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
choice1 = visual.TextStim(win=win, name='choice1',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
choice2 = visual.TextStim(win=win, name='choice2',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
choice3 = visual.TextStim(win=win, name='choice3',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
key_resp_si = keyboard.Keyboard()

# Initialize components for Routine "end_block_si"
end_block_siClock = core.Clock()
end_block_si_text = visual.TextStim(win=win, name='end_block_si_text',
    text='Please take a break to rest your eyes.\nWhen you are ready to continue, press <space>.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_block_si = keyboard.Keyboard()

# Initialize components for Routine "end"
endClock = core.Clock()
end_si_text = visual.TextStim(win=win, name='end_si_text',
    text='You have reached the end of the task. \n\nPlease press <space> when you are ready to continue.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "gough_scale"
gough_scaleClock = core.Clock()
gough_instructions = visual.TextStim(win=win, name='gough_instructions',
    text="Please indicate which of the following adjectives best describe yourself. \n\nPres <Y> for 'Yes' and <N> for 'No'.",
    font='Arial',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
trait_text = visual.TextStim(win=win, name='trait_text',
    text='',
    font='Arial',
    pos=(0, -.1), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_gough = keyboard.Keyboard()

# Initialize components for Routine "end"
endClock = core.Clock()
end_si_text = visual.TextStim(win=win, name='end_si_text',
    text='You have reached the end of the task. \n\nPlease press <space> when you are ready to continue.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "rat_setup"
rat_setupClock = core.Clock()

# Initialize components for Routine "instructions_rat"
instructions_ratClock = core.Clock()
instructions_rat_text = visual.TextStim(win=win, name='instructions_rat_text',
    text='For the next task, you will be presented with three words. \nYou will then find a fourth word that is related to all three.\nYou will type your answer, then press <enter> to see three new words.\nYou will have 30 seconds to complete each problem.\n\nExample: What word is related to these three words?\n\nPAINT DOLL CAT\n\nThe answer is "HOUSE": house paint, dollhouse, and house cat.\n\nPlease press <space> when you are ready to begin.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "rat_test"
rat_testClock = core.Clock()
rat_text = visual.TextStim(win=win, name='rat_text',
    text='',
    font='Arial',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_rat = keyboard.Keyboard()
j=0
text_resp = visual.TextStim(win=win, name='text_resp',
    text=None,
    font='Arial',
    pos=(0, -.25), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "end"
endClock = core.Clock()
end_si_text = visual.TextStim(win=win, name='end_si_text',
    text='You have reached the end of the task. \n\nPlease press <space> when you are ready to continue.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "instructions_ltm"
instructions_ltmClock = core.Clock()
instr_text_ltm = visual.TextStim(win=win, name='instr_text_ltm',
    text='For this task, we are going to be testing your memory for the words that you saw earlier. \nWe will present two words at the top of the screen. One of these words is a “cue” word from the first task. \nYour job is to decide which word you saw before and tell us how confident you are in your choice. \n\nUse your mouse to indicate which word was previously presented and your level of confidence using the bar.\n\nPress <space> when you are ready to begin.\n',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instr_resp_ltm = keyboard.Keyboard()

# Initialize components for Routine "recognition_test"
recognition_testClock = core.Clock()
k=0
fixation_ltm = visual.ShapeStim(
    win=win, name='fixation_ltm', vertices='cross',
    size=(0.1, 0.1),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-1.0, interpolate=True)
distractor = visual.TextStim(win=win, name='distractor',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
target_ltm = visual.TextStim(win=win, name='target_ltm',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
slider_right = visual.Slider(win=win, name='slider_right',
    startValue=None, size=(.6, 0.05), pos=(.35, -0.25), units=None,
    labels=['Guess', 'Sure'], ticks=(1,100), granularity=0,
    style=['rating', 'labels45'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, depth=-4, readOnly=False)
slider_left = visual.Slider(win=win, name='slider_left',
    startValue=None, size=(.6, 0.05), pos=(-.35, -0.25), units=None,
    labels=['Sure','Guess'], ticks=(-100,1), granularity=0,
    style=['rating', 'labels45'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.05,
    flip=False, depth=-5, readOnly=False)

# Initialize components for Routine "end_exp"
end_expClock = core.Clock()
end_text = visual.TextStim(win=win, name='end_text',
    text='Thank you for participating!\n\nPress <space> to close the experiment.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_end = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
start = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli/words_text.xlsx'),
    seed=None, name='start')
thisExp.addLoop(start)  # add the loop to the experiment
thisStart = start.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisStart.rgb)
if thisStart != None:
    for paramName in thisStart:
        exec('{} = thisStart[paramName]'.format(paramName))

for thisStart in start:
    currentLoop = start
    # abbreviate parameter names if possible (e.g. rgb = thisStart.rgb)
    if thisStart != None:
        for paramName in thisStart:
            exec('{} = thisStart[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "setup"-------
    continueRoutine = True
    # update component parameters for each repeat
    words.append([WordsStimuli])
    
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
    thisExp.nextEntry()
    
# completed 1 repeats of 'start'

# get names of stimulus parameters
if start.trialList in ([], [None], None):
    params = []
else:
    params = start.trialList[0].keys()
# save data for this loop
start.saveAsExcel(filename + '.xlsx', sheetName='start',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "instructions_si_practice"-------
continueRoutine = True
# update component parameters for each repeat
instr_resp_si.keys = []
instr_resp_si.rt = []
_instr_resp_si_allKeys = []
# keep track of which components have finished
instructions_si_practiceComponents = [instr_text_si, instr_resp_si]
for thisComponent in instructions_si_practiceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_si_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_si_practice"-------
while continueRoutine:
    # get current time
    t = instructions_si_practiceClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_si_practiceClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_text_si* updates
    if instr_text_si.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text_si.frameNStart = frameN  # exact frame index
        instr_text_si.tStart = t  # local t and not account for scr refresh
        instr_text_si.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text_si, 'tStartRefresh')  # time at next scr refresh
        instr_text_si.setAutoDraw(True)
    
    # *instr_resp_si* updates
    waitOnFlip = False
    if instr_resp_si.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_resp_si.frameNStart = frameN  # exact frame index
        instr_resp_si.tStart = t  # local t and not account for scr refresh
        instr_resp_si.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_resp_si, 'tStartRefresh')  # time at next scr refresh
        instr_resp_si.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_resp_si.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_resp_si.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_resp_si.status == STARTED and not waitOnFlip:
        theseKeys = instr_resp_si.getKeys(keyList=['space'], waitRelease=False)
        _instr_resp_si_allKeys.extend(theseKeys)
        if len(_instr_resp_si_allKeys):
            instr_resp_si.keys = _instr_resp_si_allKeys[-1].name  # just the last key pressed
            instr_resp_si.rt = _instr_resp_si_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_si_practiceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_si_practice"-------
for thisComponent in instructions_si_practiceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_si_practice" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "si_key_positions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_si_space.keys = []
key_resp_si_space.rt = []
_key_resp_si_space_allKeys = []
# keep track of which components have finished
si_key_positionsComponents = [choice_a, choice_s, choice_z, choice_x, key_resp_si_space, text_practice]
for thisComponent in si_key_positionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
si_key_positionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "si_key_positions"-------
while continueRoutine:
    # get current time
    t = si_key_positionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=si_key_positionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *choice_a* updates
    if choice_a.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        choice_a.frameNStart = frameN  # exact frame index
        choice_a.tStart = t  # local t and not account for scr refresh
        choice_a.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(choice_a, 'tStartRefresh')  # time at next scr refresh
        choice_a.setAutoDraw(True)
    
    # *choice_s* updates
    if choice_s.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        choice_s.frameNStart = frameN  # exact frame index
        choice_s.tStart = t  # local t and not account for scr refresh
        choice_s.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(choice_s, 'tStartRefresh')  # time at next scr refresh
        choice_s.setAutoDraw(True)
    
    # *choice_z* updates
    if choice_z.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        choice_z.frameNStart = frameN  # exact frame index
        choice_z.tStart = t  # local t and not account for scr refresh
        choice_z.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(choice_z, 'tStartRefresh')  # time at next scr refresh
        choice_z.setAutoDraw(True)
    
    # *choice_x* updates
    if choice_x.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        choice_x.frameNStart = frameN  # exact frame index
        choice_x.tStart = t  # local t and not account for scr refresh
        choice_x.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(choice_x, 'tStartRefresh')  # time at next scr refresh
        choice_x.setAutoDraw(True)
    
    # *key_resp_si_space* updates
    waitOnFlip = False
    if key_resp_si_space.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_si_space.frameNStart = frameN  # exact frame index
        key_resp_si_space.tStart = t  # local t and not account for scr refresh
        key_resp_si_space.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_si_space, 'tStartRefresh')  # time at next scr refresh
        key_resp_si_space.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_si_space.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_si_space.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_si_space.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_si_space.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_si_space_allKeys.extend(theseKeys)
        if len(_key_resp_si_space_allKeys):
            key_resp_si_space.keys = _key_resp_si_space_allKeys[-1].name  # just the last key pressed
            key_resp_si_space.rt = _key_resp_si_space_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_practice* updates
    if text_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_practice.frameNStart = frameN  # exact frame index
        text_practice.tStart = t  # local t and not account for scr refresh
        text_practice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_practice, 'tStartRefresh')  # time at next scr refresh
        text_practice.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in si_key_positionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "si_key_positions"-------
for thisComponent in si_key_positionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "si_key_positions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_si_loop = data.TrialHandler(nReps=2, method='fullRandom', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli/presentation.xlsx'),
    seed=None, name='practice_si_loop')
thisExp.addLoop(practice_si_loop)  # add the loop to the experiment
thisPractice_si_loop = practice_si_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_si_loop.rgb)
if thisPractice_si_loop != None:
    for paramName in thisPractice_si_loop:
        exec('{} = thisPractice_si_loop[paramName]'.format(paramName))

for thisPractice_si_loop in practice_si_loop:
    currentLoop = practice_si_loop
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_si_loop.rgb)
    if thisPractice_si_loop != None:
        for paramName in thisPractice_si_loop:
            exec('{} = thisPractice_si_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "practice_si"-------
    continueRoutine = True
    # update component parameters for each repeat
    trialtext = words[i:(i+4)]
    target = trialtext[0]
    
    positions = [(-.25, .25),
    (.25, .25),
    (-.25, -.25),
    (.25, -.25)]
    
    position_to_key = {positions[0]: 'a', positions[1]: 's', positions[2]: 'z', positions[3]: 'x'}
    
    shuffle(positions)
    
    if presentation == "before":
        start_time = .5
        stop_time = 2
    else:
        start_time = 4
        stop_time = 120
    
    
    target_cue_practice.setText(target
)
    target_si_practice.setPos(positions.pop())
    target_si_practice.setText(target)
    choice1_practice.setPos(positions.pop())
    choice1_practice.setText(trialtext[1])
    choice2_practice.setPos(positions.pop())
    choice2_practice.setText(trialtext[2])
    choice3_practice.setPos(positions.pop())
    choice3_practice.setText(trialtext[3])
    key_resp_si_practice.keys = []
    key_resp_si_practice.rt = []
    _key_resp_si_practice_allKeys = []
    # keep track of which components have finished
    practice_siComponents = [fixation_practice, target_cue_practice, target_si_practice, choice1_practice, choice2_practice, choice3_practice, key_resp_si_practice]
    for thisComponent in practice_siComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_siClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_si"-------
    while continueRoutine:
        # get current time
        t = practice_siClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_siClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_practice* updates
        if fixation_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_practice.frameNStart = frameN  # exact frame index
            fixation_practice.tStart = t  # local t and not account for scr refresh
            fixation_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_practice, 'tStartRefresh')  # time at next scr refresh
            fixation_practice.setAutoDraw(True)
        if fixation_practice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_practice.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_practice.tStop = t  # not accounting for scr refresh
                fixation_practice.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_practice, 'tStopRefresh')  # time at next scr refresh
                fixation_practice.setAutoDraw(False)
        
        # *target_cue_practice* updates
        if target_cue_practice.status == NOT_STARTED and tThisFlip >= start_time-frameTolerance:
            # keep track of start time/frame for later
            target_cue_practice.frameNStart = frameN  # exact frame index
            target_cue_practice.tStart = t  # local t and not account for scr refresh
            target_cue_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target_cue_practice, 'tStartRefresh')  # time at next scr refresh
            target_cue_practice.setAutoDraw(True)
        if target_cue_practice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > target_cue_practice.tStartRefresh + stop_time-frameTolerance:
                # keep track of stop time/frame for later
                target_cue_practice.tStop = t  # not accounting for scr refresh
                target_cue_practice.frameNStop = frameN  # exact frame index
                win.timeOnFlip(target_cue_practice, 'tStopRefresh')  # time at next scr refresh
                target_cue_practice.setAutoDraw(False)
        
        # *target_si_practice* updates
        if target_si_practice.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            target_si_practice.frameNStart = frameN  # exact frame index
            target_si_practice.tStart = t  # local t and not account for scr refresh
            target_si_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target_si_practice, 'tStartRefresh')  # time at next scr refresh
            target_si_practice.setAutoDraw(True)
        if target_si_practice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > target_si_practice.tStartRefresh + 120-frameTolerance:
                # keep track of stop time/frame for later
                target_si_practice.tStop = t  # not accounting for scr refresh
                target_si_practice.frameNStop = frameN  # exact frame index
                win.timeOnFlip(target_si_practice, 'tStopRefresh')  # time at next scr refresh
                target_si_practice.setAutoDraw(False)
        
        # *choice1_practice* updates
        if choice1_practice.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            choice1_practice.frameNStart = frameN  # exact frame index
            choice1_practice.tStart = t  # local t and not account for scr refresh
            choice1_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice1_practice, 'tStartRefresh')  # time at next scr refresh
            choice1_practice.setAutoDraw(True)
        if choice1_practice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > choice1_practice.tStartRefresh + 120-frameTolerance:
                # keep track of stop time/frame for later
                choice1_practice.tStop = t  # not accounting for scr refresh
                choice1_practice.frameNStop = frameN  # exact frame index
                win.timeOnFlip(choice1_practice, 'tStopRefresh')  # time at next scr refresh
                choice1_practice.setAutoDraw(False)
        
        # *choice2_practice* updates
        if choice2_practice.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            choice2_practice.frameNStart = frameN  # exact frame index
            choice2_practice.tStart = t  # local t and not account for scr refresh
            choice2_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice2_practice, 'tStartRefresh')  # time at next scr refresh
            choice2_practice.setAutoDraw(True)
        if choice2_practice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > choice2_practice.tStartRefresh + 120-frameTolerance:
                # keep track of stop time/frame for later
                choice2_practice.tStop = t  # not accounting for scr refresh
                choice2_practice.frameNStop = frameN  # exact frame index
                win.timeOnFlip(choice2_practice, 'tStopRefresh')  # time at next scr refresh
                choice2_practice.setAutoDraw(False)
        
        # *choice3_practice* updates
        if choice3_practice.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            choice3_practice.frameNStart = frameN  # exact frame index
            choice3_practice.tStart = t  # local t and not account for scr refresh
            choice3_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice3_practice, 'tStartRefresh')  # time at next scr refresh
            choice3_practice.setAutoDraw(True)
        if choice3_practice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > choice3_practice.tStartRefresh + 120-frameTolerance:
                # keep track of stop time/frame for later
                choice3_practice.tStop = t  # not accounting for scr refresh
                choice3_practice.frameNStop = frameN  # exact frame index
                win.timeOnFlip(choice3_practice, 'tStopRefresh')  # time at next scr refresh
                choice3_practice.setAutoDraw(False)
        
        # *key_resp_si_practice* updates
        waitOnFlip = False
        if key_resp_si_practice.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            key_resp_si_practice.frameNStart = frameN  # exact frame index
            key_resp_si_practice.tStart = t  # local t and not account for scr refresh
            key_resp_si_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_si_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_si_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_si_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_si_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_si_practice.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_si_practice.tStartRefresh + 120-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_si_practice.tStop = t  # not accounting for scr refresh
                key_resp_si_practice.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_si_practice, 'tStopRefresh')  # time at next scr refresh
                key_resp_si_practice.status = FINISHED
        if key_resp_si_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_si_practice.getKeys(keyList=['a', 's', 'z', 'x'], waitRelease=False)
            _key_resp_si_practice_allKeys.extend(theseKeys)
            if len(_key_resp_si_practice_allKeys):
                key_resp_si_practice.keys = _key_resp_si_practice_allKeys[-1].name  # just the last key pressed
                key_resp_si_practice.rt = _key_resp_si_practice_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_siComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_si"-------
    for thisComponent in practice_siComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    i=i+4
    correct_ans = target_si.pos
    
    
    # the Routine "practice_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 2 repeats of 'practice_si_loop'


# ------Prepare to start Routine "end_practice"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_practice_end.keys = []
key_resp_practice_end.rt = []
_key_resp_practice_end_allKeys = []
shuffle(words)

# keep track of which components have finished
end_practiceComponents = [text_end_practice, key_resp_practice_end]
for thisComponent in end_practiceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_practice"-------
while continueRoutine:
    # get current time
    t = end_practiceClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_practiceClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_end_practice* updates
    if text_end_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_end_practice.frameNStart = frameN  # exact frame index
        text_end_practice.tStart = t  # local t and not account for scr refresh
        text_end_practice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_end_practice, 'tStartRefresh')  # time at next scr refresh
        text_end_practice.setAutoDraw(True)
    
    # *key_resp_practice_end* updates
    waitOnFlip = False
    if key_resp_practice_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_practice_end.frameNStart = frameN  # exact frame index
        key_resp_practice_end.tStart = t  # local t and not account for scr refresh
        key_resp_practice_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_practice_end, 'tStartRefresh')  # time at next scr refresh
        key_resp_practice_end.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_practice_end.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_practice_end.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_practice_end.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_practice_end.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_practice_end_allKeys.extend(theseKeys)
        if len(_key_resp_practice_end_allKeys):
            key_resp_practice_end.keys = _key_resp_practice_end_allKeys[-1].name  # just the last key pressed
            key_resp_practice_end.rt = _key_resp_practice_end_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_practiceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_practice"-------
for thisComponent in end_practiceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_practice" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks_si = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='blocks_si')
thisExp.addLoop(blocks_si)  # add the loop to the experiment
thisBlocks_si = blocks_si.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlocks_si.rgb)
if thisBlocks_si != None:
    for paramName in thisBlocks_si:
        exec('{} = thisBlocks_si[paramName]'.format(paramName))

for thisBlocks_si in blocks_si:
    currentLoop = blocks_si
    # abbreviate parameter names if possible (e.g. rgb = thisBlocks_si.rgb)
    if thisBlocks_si != None:
        for paramName in thisBlocks_si:
            exec('{} = thisBlocks_si[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instructions_si"-------
    continueRoutine = True
    # update component parameters for each repeat
    instr_resp_si_2.keys = []
    instr_resp_si_2.rt = []
    _instr_resp_si_2_allKeys = []
    # keep track of which components have finished
    instructions_siComponents = [instr_text_si_2, instr_resp_si_2]
    for thisComponent in instructions_siComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instructions_siClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instructions_si"-------
    while continueRoutine:
        # get current time
        t = instructions_siClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instructions_siClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instr_text_si_2* updates
        if instr_text_si_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_text_si_2.frameNStart = frameN  # exact frame index
            instr_text_si_2.tStart = t  # local t and not account for scr refresh
            instr_text_si_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_text_si_2, 'tStartRefresh')  # time at next scr refresh
            instr_text_si_2.setAutoDraw(True)
        
        # *instr_resp_si_2* updates
        waitOnFlip = False
        if instr_resp_si_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_resp_si_2.frameNStart = frameN  # exact frame index
            instr_resp_si_2.tStart = t  # local t and not account for scr refresh
            instr_resp_si_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_resp_si_2, 'tStartRefresh')  # time at next scr refresh
            instr_resp_si_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instr_resp_si_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instr_resp_si_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instr_resp_si_2.status == STARTED and not waitOnFlip:
            theseKeys = instr_resp_si_2.getKeys(keyList=['space'], waitRelease=False)
            _instr_resp_si_2_allKeys.extend(theseKeys)
            if len(_instr_resp_si_2_allKeys):
                instr_resp_si_2.keys = _instr_resp_si_2_allKeys[-1].name  # just the last key pressed
                instr_resp_si_2.rt = _instr_resp_si_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructions_siComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instructions_si"-------
    for thisComponent in instructions_siComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instructions_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "si_key_positions"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_si_space.keys = []
    key_resp_si_space.rt = []
    _key_resp_si_space_allKeys = []
    # keep track of which components have finished
    si_key_positionsComponents = [choice_a, choice_s, choice_z, choice_x, key_resp_si_space, text_practice]
    for thisComponent in si_key_positionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    si_key_positionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "si_key_positions"-------
    while continueRoutine:
        # get current time
        t = si_key_positionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=si_key_positionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *choice_a* updates
        if choice_a.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            choice_a.frameNStart = frameN  # exact frame index
            choice_a.tStart = t  # local t and not account for scr refresh
            choice_a.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_a, 'tStartRefresh')  # time at next scr refresh
            choice_a.setAutoDraw(True)
        
        # *choice_s* updates
        if choice_s.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            choice_s.frameNStart = frameN  # exact frame index
            choice_s.tStart = t  # local t and not account for scr refresh
            choice_s.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_s, 'tStartRefresh')  # time at next scr refresh
            choice_s.setAutoDraw(True)
        
        # *choice_z* updates
        if choice_z.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            choice_z.frameNStart = frameN  # exact frame index
            choice_z.tStart = t  # local t and not account for scr refresh
            choice_z.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_z, 'tStartRefresh')  # time at next scr refresh
            choice_z.setAutoDraw(True)
        
        # *choice_x* updates
        if choice_x.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            choice_x.frameNStart = frameN  # exact frame index
            choice_x.tStart = t  # local t and not account for scr refresh
            choice_x.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choice_x, 'tStartRefresh')  # time at next scr refresh
            choice_x.setAutoDraw(True)
        
        # *key_resp_si_space* updates
        waitOnFlip = False
        if key_resp_si_space.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_si_space.frameNStart = frameN  # exact frame index
            key_resp_si_space.tStart = t  # local t and not account for scr refresh
            key_resp_si_space.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_si_space, 'tStartRefresh')  # time at next scr refresh
            key_resp_si_space.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_si_space.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_si_space.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_si_space.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_si_space.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_si_space_allKeys.extend(theseKeys)
            if len(_key_resp_si_space_allKeys):
                key_resp_si_space.keys = _key_resp_si_space_allKeys[-1].name  # just the last key pressed
                key_resp_si_space.rt = _key_resp_si_space_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_practice* updates
        if text_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_practice.frameNStart = frameN  # exact frame index
            text_practice.tStart = t  # local t and not account for scr refresh
            text_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_practice, 'tStartRefresh')  # time at next scr refresh
            text_practice.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in si_key_positionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "si_key_positions"-------
    for thisComponent in si_key_positionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "si_key_positions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trial_si = data.TrialHandler(nReps=1, method='fullRandom', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('stimuli/presentation.xlsx'),
        seed=None, name='trial_si')
    thisExp.addLoop(trial_si)  # add the loop to the experiment
    thisTrial_si = trial_si.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_si.rgb)
    if thisTrial_si != None:
        for paramName in thisTrial_si:
            exec('{} = thisTrial_si[paramName]'.format(paramName))
    
    for thisTrial_si in trial_si:
        currentLoop = trial_si
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_si.rgb)
        if thisTrial_si != None:
            for paramName in thisTrial_si:
                exec('{} = thisTrial_si[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "stimulus_identification"-------
        continueRoutine = True
        # update component parameters for each repeat
        trialtext = words[i:(i+4)]
        target = trialtext[0]
        
        positions = [(-.25, .25),
        (.25, .25),
        (-.25, -.25),
        (.25, -.25)]
        
        position_to_key = {positions[0]: 'a', positions[1]: 's', positions[2]: 'z', positions[3]: 'x'}
        
        shuffle(positions)
        
        if presentation == "before":
            start_time = .5
            stop_time = 2
        else:
            start_time = 4
            stop_time = 120
        
        
        target_cue.setText(target
)
        target_si.setPos(positions.pop())
        target_si.setText(target)
        choice1.setPos(positions.pop())
        choice1.setText(trialtext[1])
        choice2.setPos(positions.pop())
        choice2.setText(trialtext[2])
        choice3.setPos(positions.pop())
        choice3.setText(trialtext[3])
        key_resp_si.keys = []
        key_resp_si.rt = []
        _key_resp_si_allKeys = []
        # keep track of which components have finished
        stimulus_identificationComponents = [fixation, target_cue, target_si, choice1, choice2, choice3, key_resp_si]
        for thisComponent in stimulus_identificationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stimulus_identificationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stimulus_identification"-------
        while continueRoutine:
            # get current time
            t = stimulus_identificationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stimulus_identificationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation* updates
            if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation.frameNStart = frameN  # exact frame index
                fixation.tStart = t  # local t and not account for scr refresh
                fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                fixation.setAutoDraw(True)
            if fixation.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                    fixation.setAutoDraw(False)
            
            # *target_cue* updates
            if target_cue.status == NOT_STARTED and tThisFlip >= start_time-frameTolerance:
                # keep track of start time/frame for later
                target_cue.frameNStart = frameN  # exact frame index
                target_cue.tStart = t  # local t and not account for scr refresh
                target_cue.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(target_cue, 'tStartRefresh')  # time at next scr refresh
                target_cue.setAutoDraw(True)
            if target_cue.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > target_cue.tStartRefresh + stop_time-frameTolerance:
                    # keep track of stop time/frame for later
                    target_cue.tStop = t  # not accounting for scr refresh
                    target_cue.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(target_cue, 'tStopRefresh')  # time at next scr refresh
                    target_cue.setAutoDraw(False)
            
            # *target_si* updates
            if target_si.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
                # keep track of start time/frame for later
                target_si.frameNStart = frameN  # exact frame index
                target_si.tStart = t  # local t and not account for scr refresh
                target_si.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(target_si, 'tStartRefresh')  # time at next scr refresh
                target_si.setAutoDraw(True)
            if target_si.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > target_si.tStartRefresh + 120-frameTolerance:
                    # keep track of stop time/frame for later
                    target_si.tStop = t  # not accounting for scr refresh
                    target_si.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(target_si, 'tStopRefresh')  # time at next scr refresh
                    target_si.setAutoDraw(False)
            
            # *choice1* updates
            if choice1.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
                # keep track of start time/frame for later
                choice1.frameNStart = frameN  # exact frame index
                choice1.tStart = t  # local t and not account for scr refresh
                choice1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(choice1, 'tStartRefresh')  # time at next scr refresh
                choice1.setAutoDraw(True)
            if choice1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > choice1.tStartRefresh + 120-frameTolerance:
                    # keep track of stop time/frame for later
                    choice1.tStop = t  # not accounting for scr refresh
                    choice1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(choice1, 'tStopRefresh')  # time at next scr refresh
                    choice1.setAutoDraw(False)
            
            # *choice2* updates
            if choice2.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
                # keep track of start time/frame for later
                choice2.frameNStart = frameN  # exact frame index
                choice2.tStart = t  # local t and not account for scr refresh
                choice2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(choice2, 'tStartRefresh')  # time at next scr refresh
                choice2.setAutoDraw(True)
            if choice2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > choice2.tStartRefresh + 120-frameTolerance:
                    # keep track of stop time/frame for later
                    choice2.tStop = t  # not accounting for scr refresh
                    choice2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(choice2, 'tStopRefresh')  # time at next scr refresh
                    choice2.setAutoDraw(False)
            
            # *choice3* updates
            if choice3.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
                # keep track of start time/frame for later
                choice3.frameNStart = frameN  # exact frame index
                choice3.tStart = t  # local t and not account for scr refresh
                choice3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(choice3, 'tStartRefresh')  # time at next scr refresh
                choice3.setAutoDraw(True)
            if choice3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > choice3.tStartRefresh + 120-frameTolerance:
                    # keep track of stop time/frame for later
                    choice3.tStop = t  # not accounting for scr refresh
                    choice3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(choice3, 'tStopRefresh')  # time at next scr refresh
                    choice3.setAutoDraw(False)
            
            # *key_resp_si* updates
            waitOnFlip = False
            if key_resp_si.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
                # keep track of start time/frame for later
                key_resp_si.frameNStart = frameN  # exact frame index
                key_resp_si.tStart = t  # local t and not account for scr refresh
                key_resp_si.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_si, 'tStartRefresh')  # time at next scr refresh
                key_resp_si.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_si.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_si.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_si.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_si.tStartRefresh + 120-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_si.tStop = t  # not accounting for scr refresh
                    key_resp_si.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_si, 'tStopRefresh')  # time at next scr refresh
                    key_resp_si.status = FINISHED
            if key_resp_si.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_si.getKeys(keyList=['a', 's', 'z', 'x'], waitRelease=False)
                _key_resp_si_allKeys.extend(theseKeys)
                if len(_key_resp_si_allKeys):
                    key_resp_si.keys = _key_resp_si_allKeys[-1].name  # just the last key pressed
                    key_resp_si.rt = _key_resp_si_allKeys[-1].rt
                    # was this correct?
                    if (key_resp_si.keys == str(position_to_key[(target_si.pos)])) or (key_resp_si.keys == position_to_key[(target_si.pos)]):
                        key_resp_si.corr = 1
                    else:
                        key_resp_si.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stimulus_identificationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stimulus_identification"-------
        for thisComponent in stimulus_identificationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        i=i+4
        correct_ans = target_si.pos
        targetwords.append([target,presentation])
        # check responses
        if key_resp_si.keys in ['', [], None]:  # No response was made
            key_resp_si.keys = None
            # was no response the correct answer?!
            if str(position_to_key[(target_si.pos)]).lower() == 'none':
               key_resp_si.corr = 1;  # correct non-response
            else:
               key_resp_si.corr = 0;  # failed to respond (incorrectly)
        # store data for trial_si (TrialHandler)
        trial_si.addData('key_resp_si.keys',key_resp_si.keys)
        trial_si.addData('key_resp_si.corr', key_resp_si.corr)
        if key_resp_si.keys != None:  # we had a response
            trial_si.addData('key_resp_si.rt', key_resp_si.rt)
        # the Routine "stimulus_identification" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trial_si'
    
    # get names of stimulus parameters
    if trial_si.trialList in ([], [None], None):
        params = []
    else:
        params = trial_si.trialList[0].keys()
    # save data for this loop
    trial_si.saveAsExcel(filename + '.xlsx', sheetName='trial_si',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "end_block_si"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_block_si.keys = []
    key_resp_block_si.rt = []
    _key_resp_block_si_allKeys = []
    # keep track of which components have finished
    end_block_siComponents = [end_block_si_text, key_resp_block_si]
    for thisComponent in end_block_siComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    end_block_siClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "end_block_si"-------
    while continueRoutine:
        # get current time
        t = end_block_siClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=end_block_siClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *end_block_si_text* updates
        if end_block_si_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_block_si_text.frameNStart = frameN  # exact frame index
            end_block_si_text.tStart = t  # local t and not account for scr refresh
            end_block_si_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_block_si_text, 'tStartRefresh')  # time at next scr refresh
            end_block_si_text.setAutoDraw(True)
        
        # *key_resp_block_si* updates
        waitOnFlip = False
        if key_resp_block_si.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_block_si.frameNStart = frameN  # exact frame index
            key_resp_block_si.tStart = t  # local t and not account for scr refresh
            key_resp_block_si.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_block_si, 'tStartRefresh')  # time at next scr refresh
            key_resp_block_si.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_block_si.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_block_si.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_block_si.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_block_si.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_block_si_allKeys.extend(theseKeys)
            if len(_key_resp_block_si_allKeys):
                key_resp_block_si.keys = _key_resp_block_si_allKeys[-1].name  # just the last key pressed
                key_resp_block_si.rt = _key_resp_block_si_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end_block_siComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "end_block_si"-------
    for thisComponent in end_block_siComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "end_block_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'blocks_si'


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
endComponents = [end_si_text, key_resp]
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
    
    # *end_si_text* updates
    if end_si_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_si_text.frameNStart = frameN  # exact frame index
        end_si_text.tStart = t  # local t and not account for scr refresh
        end_si_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_si_text, 'tStartRefresh')  # time at next scr refresh
        end_si_text.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
# the Routine "end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli/gough_scale.xlsx'),
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
    
    # ------Prepare to start Routine "gough_scale"-------
    continueRoutine = True
    routineTimer.add(600.000000)
    # update component parameters for each repeat
    trait_text.setText(Trait)
    key_resp_gough.keys = []
    key_resp_gough.rt = []
    _key_resp_gough_allKeys = []
    # keep track of which components have finished
    gough_scaleComponents = [gough_instructions, trait_text, key_resp_gough]
    for thisComponent in gough_scaleComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    gough_scaleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "gough_scale"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = gough_scaleClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=gough_scaleClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *gough_instructions* updates
        if gough_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            gough_instructions.frameNStart = frameN  # exact frame index
            gough_instructions.tStart = t  # local t and not account for scr refresh
            gough_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(gough_instructions, 'tStartRefresh')  # time at next scr refresh
            gough_instructions.setAutoDraw(True)
        if gough_instructions.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > gough_instructions.tStartRefresh + 600-frameTolerance:
                # keep track of stop time/frame for later
                gough_instructions.tStop = t  # not accounting for scr refresh
                gough_instructions.frameNStop = frameN  # exact frame index
                win.timeOnFlip(gough_instructions, 'tStopRefresh')  # time at next scr refresh
                gough_instructions.setAutoDraw(False)
        
        # *trait_text* updates
        if trait_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trait_text.frameNStart = frameN  # exact frame index
            trait_text.tStart = t  # local t and not account for scr refresh
            trait_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trait_text, 'tStartRefresh')  # time at next scr refresh
            trait_text.setAutoDraw(True)
        if trait_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > trait_text.tStartRefresh + 120-frameTolerance:
                # keep track of stop time/frame for later
                trait_text.tStop = t  # not accounting for scr refresh
                trait_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(trait_text, 'tStopRefresh')  # time at next scr refresh
                trait_text.setAutoDraw(False)
        
        # *key_resp_gough* updates
        waitOnFlip = False
        if key_resp_gough.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_gough.frameNStart = frameN  # exact frame index
            key_resp_gough.tStart = t  # local t and not account for scr refresh
            key_resp_gough.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_gough, 'tStartRefresh')  # time at next scr refresh
            key_resp_gough.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_gough.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_gough.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_gough.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_gough.tStartRefresh + 600-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_gough.tStop = t  # not accounting for scr refresh
                key_resp_gough.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_gough, 'tStopRefresh')  # time at next scr refresh
                key_resp_gough.status = FINISHED
        if key_resp_gough.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_gough.getKeys(keyList=['y', 'n'], waitRelease=False)
            _key_resp_gough_allKeys.extend(theseKeys)
            if len(_key_resp_gough_allKeys):
                key_resp_gough.keys = _key_resp_gough_allKeys[-1].name  # just the last key pressed
                key_resp_gough.rt = _key_resp_gough_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in gough_scaleComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "gough_scale"-------
    for thisComponent in gough_scaleComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_gough.keys in ['', [], None]:  # No response was made
        key_resp_gough.keys = None
    trials.addData('key_resp_gough.keys',key_resp_gough.keys)
    if key_resp_gough.keys != None:  # we had a response
        trials.addData('key_resp_gough.rt', key_resp_gough.rt)
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
endComponents = [end_si_text, key_resp]
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
    
    # *end_si_text* updates
    if end_si_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_si_text.frameNStart = frameN  # exact frame index
        end_si_text.tStart = t  # local t and not account for scr refresh
        end_si_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_si_text, 'tStartRefresh')  # time at next scr refresh
        end_si_text.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
# the Routine "end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
rat_setup_stim = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli/rat.xlsx'),
    seed=None, name='rat_setup_stim')
thisExp.addLoop(rat_setup_stim)  # add the loop to the experiment
thisRat_setup_stim = rat_setup_stim.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRat_setup_stim.rgb)
if thisRat_setup_stim != None:
    for paramName in thisRat_setup_stim:
        exec('{} = thisRat_setup_stim[paramName]'.format(paramName))

for thisRat_setup_stim in rat_setup_stim:
    currentLoop = rat_setup_stim
    # abbreviate parameter names if possible (e.g. rgb = thisRat_setup_stim.rgb)
    if thisRat_setup_stim != None:
        for paramName in thisRat_setup_stim:
            exec('{} = thisRat_setup_stim[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "rat_setup"-------
    continueRoutine = True
    # update component parameters for each repeat
    rat_stim.append([Items,CorrectAnswer])
    shuffle(rat_stim);
    # keep track of which components have finished
    rat_setupComponents = []
    for thisComponent in rat_setupComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    rat_setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "rat_setup"-------
    while continueRoutine:
        # get current time
        t = rat_setupClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=rat_setupClock)
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
        for thisComponent in rat_setupComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "rat_setup"-------
    for thisComponent in rat_setupComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "rat_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'rat_setup_stim'


# ------Prepare to start Routine "instructions_rat"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
instructions_ratComponents = [instructions_rat_text, key_resp_2]
for thisComponent in instructions_ratComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_ratClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_rat"-------
while continueRoutine:
    # get current time
    t = instructions_ratClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_ratClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructions_rat_text* updates
    if instructions_rat_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_rat_text.frameNStart = frameN  # exact frame index
        instructions_rat_text.tStart = t  # local t and not account for scr refresh
        instructions_rat_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_rat_text, 'tStartRefresh')  # time at next scr refresh
        instructions_rat_text.setAutoDraw(True)
    
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
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_ratComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_rat"-------
for thisComponent in instructions_ratComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_rat" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_rat = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_rat')
thisExp.addLoop(trials_rat)  # add the loop to the experiment
thisTrials_rat = trials_rat.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_rat.rgb)
if thisTrials_rat != None:
    for paramName in thisTrials_rat:
        exec('{} = thisTrials_rat[paramName]'.format(paramName))

for thisTrials_rat in trials_rat:
    currentLoop = trials_rat
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_rat.rgb)
    if thisTrials_rat != None:
        for paramName in thisTrials_rat:
            exec('{} = thisTrials_rat[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "rat_test"-------
    continueRoutine = True
    routineTimer.add(30.000000)
    # update component parameters for each repeat
    rat_text.setText(rat_stim[j][0])
    key_resp_rat.keys = []
    key_resp_rat.rt = []
    _key_resp_rat_allKeys = []
    # keep track of which components have finished
    rat_testComponents = [rat_text, key_resp_rat, text_resp]
    for thisComponent in rat_testComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    rat_testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "rat_test"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = rat_testClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=rat_testClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *rat_text* updates
        if rat_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rat_text.frameNStart = frameN  # exact frame index
            rat_text.tStart = t  # local t and not account for scr refresh
            rat_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rat_text, 'tStartRefresh')  # time at next scr refresh
            rat_text.setAutoDraw(True)
        if rat_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > rat_text.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                rat_text.tStop = t  # not accounting for scr refresh
                rat_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(rat_text, 'tStopRefresh')  # time at next scr refresh
                rat_text.setAutoDraw(False)
        
        # *key_resp_rat* updates
        waitOnFlip = False
        if key_resp_rat.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_rat.frameNStart = frameN  # exact frame index
            key_resp_rat.tStart = t  # local t and not account for scr refresh
            key_resp_rat.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_rat, 'tStartRefresh')  # time at next scr refresh
            key_resp_rat.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_rat.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_rat.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_rat.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_rat.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_rat.tStop = t  # not accounting for scr refresh
                key_resp_rat.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_rat, 'tStopRefresh')  # time at next scr refresh
                key_resp_rat.status = FINISHED
        if key_resp_rat.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_rat.getKeys(keyList=None, waitRelease=False)
            _key_resp_rat_allKeys.extend(theseKeys)
            if len(_key_resp_rat_allKeys):
                key_resp_rat.keys = [key.name for key in _key_resp_rat_allKeys]  # storing all keys
                key_resp_rat.rt = [key.rt for key in _key_resp_rat_allKeys]
        
        # *text_resp* updates
        if text_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_resp.frameNStart = frameN  # exact frame index
            text_resp.tStart = t  # local t and not account for scr refresh
            text_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_resp, 'tStartRefresh')  # time at next scr refresh
            text_resp.setAutoDraw(True)
        if text_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_resp.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                text_resp.tStop = t  # not accounting for scr refresh
                text_resp.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_resp, 'tStopRefresh')  # time at next scr refresh
                text_resp.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in rat_testComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "rat_test"-------
    for thisComponent in rat_testComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_rat.keys in ['', [], None]:  # No response was made
        key_resp_rat.keys = None
    trials_rat.addData('key_resp_rat.keys',key_resp_rat.keys)
    if key_resp_rat.keys != None:  # we had a response
        trials_rat.addData('key_resp_rat.rt', key_resp_rat.rt)
    trials_rat.addData('text_resp.started', text_resp.tStartRefresh)
    trials_rat.addData('text_resp.stopped', text_resp.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_rat'

# get names of stimulus parameters
if trials_rat.trialList in ([], [None], None):
    params = []
else:
    params = trials_rat.trialList[0].keys()
# save data for this loop
trials_rat.saveAsExcel(filename + '.xlsx', sheetName='trials_rat',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
endComponents = [end_si_text, key_resp]
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
    
    # *end_si_text* updates
    if end_si_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_si_text.frameNStart = frameN  # exact frame index
        end_si_text.tStart = t  # local t and not account for scr refresh
        end_si_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_si_text, 'tStartRefresh')  # time at next scr refresh
        end_si_text.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
# the Routine "end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_ltm"-------
continueRoutine = True
# update component parameters for each repeat
instr_resp_ltm.keys = []
instr_resp_ltm.rt = []
_instr_resp_ltm_allKeys = []
shuffle(targetwords)
# keep track of which components have finished
instructions_ltmComponents = [instr_text_ltm, instr_resp_ltm]
for thisComponent in instructions_ltmComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_ltmClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_ltm"-------
while continueRoutine:
    # get current time
    t = instructions_ltmClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_ltmClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_text_ltm* updates
    if instr_text_ltm.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text_ltm.frameNStart = frameN  # exact frame index
        instr_text_ltm.tStart = t  # local t and not account for scr refresh
        instr_text_ltm.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text_ltm, 'tStartRefresh')  # time at next scr refresh
        instr_text_ltm.setAutoDraw(True)
    
    # *instr_resp_ltm* updates
    waitOnFlip = False
    if instr_resp_ltm.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_resp_ltm.frameNStart = frameN  # exact frame index
        instr_resp_ltm.tStart = t  # local t and not account for scr refresh
        instr_resp_ltm.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_resp_ltm, 'tStartRefresh')  # time at next scr refresh
        instr_resp_ltm.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_resp_ltm.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_resp_ltm.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_resp_ltm.status == STARTED and not waitOnFlip:
        theseKeys = instr_resp_ltm.getKeys(keyList=['space'], waitRelease=False)
        _instr_resp_ltm_allKeys.extend(theseKeys)
        if len(_instr_resp_ltm_allKeys):
            instr_resp_ltm.keys = _instr_resp_ltm_allKeys[-1].name  # just the last key pressed
            instr_resp_ltm.rt = _instr_resp_ltm_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_ltmComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_ltm"-------
for thisComponent in instructions_ltmComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_ltm" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trial_ltm = data.TrialHandler(nReps=targetwords.length, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trial_ltm')
thisExp.addLoop(trial_ltm)  # add the loop to the experiment
thisTrial_ltm = trial_ltm.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_ltm.rgb)
if thisTrial_ltm != None:
    for paramName in thisTrial_ltm:
        exec('{} = thisTrial_ltm[paramName]'.format(paramName))

for thisTrial_ltm in trial_ltm:
    currentLoop = trial_ltm
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_ltm.rgb)
    if thisTrial_ltm != None:
        for paramName in thisTrial_ltm:
            exec('{} = thisTrial_ltm[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "recognition_test"-------
    continueRoutine = True
    # update component parameters for each repeat
    positions = [(-.25, 0),(.25, 0)]
    shuffle(positions)
    
    
    distractor.setPos(positions.pop())
    distractor.setText(words.pop())
    target_ltm.setPos(positions.pop())
    target_ltm.setText(targetwords[k][0])
    slider_right.reset()
    slider_left.reset()
    # keep track of which components have finished
    recognition_testComponents = [fixation_ltm, distractor, target_ltm, slider_right, slider_left]
    for thisComponent in recognition_testComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    recognition_testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "recognition_test"-------
    while continueRoutine:
        # get current time
        t = recognition_testClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=recognition_testClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_ltm* updates
        if fixation_ltm.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_ltm.frameNStart = frameN  # exact frame index
            fixation_ltm.tStart = t  # local t and not account for scr refresh
            fixation_ltm.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_ltm, 'tStartRefresh')  # time at next scr refresh
            fixation_ltm.setAutoDraw(True)
        if fixation_ltm.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_ltm.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_ltm.tStop = t  # not accounting for scr refresh
                fixation_ltm.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_ltm, 'tStopRefresh')  # time at next scr refresh
                fixation_ltm.setAutoDraw(False)
        
        # *distractor* updates
        if distractor.status == NOT_STARTED and tThisFlip >= .5-frameTolerance:
            # keep track of start time/frame for later
            distractor.frameNStart = frameN  # exact frame index
            distractor.tStart = t  # local t and not account for scr refresh
            distractor.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(distractor, 'tStartRefresh')  # time at next scr refresh
            distractor.setAutoDraw(True)
        if distractor.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > distractor.tStartRefresh + 180-frameTolerance:
                # keep track of stop time/frame for later
                distractor.tStop = t  # not accounting for scr refresh
                distractor.frameNStop = frameN  # exact frame index
                win.timeOnFlip(distractor, 'tStopRefresh')  # time at next scr refresh
                distractor.setAutoDraw(False)
        
        # *target_ltm* updates
        if target_ltm.status == NOT_STARTED and tThisFlip >= .5-frameTolerance:
            # keep track of start time/frame for later
            target_ltm.frameNStart = frameN  # exact frame index
            target_ltm.tStart = t  # local t and not account for scr refresh
            target_ltm.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target_ltm, 'tStartRefresh')  # time at next scr refresh
            target_ltm.setAutoDraw(True)
        if target_ltm.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > target_ltm.tStartRefresh + 180-frameTolerance:
                # keep track of stop time/frame for later
                target_ltm.tStop = t  # not accounting for scr refresh
                target_ltm.frameNStop = frameN  # exact frame index
                win.timeOnFlip(target_ltm, 'tStopRefresh')  # time at next scr refresh
                target_ltm.setAutoDraw(False)
        
        # *slider_right* updates
        if slider_right.status == NOT_STARTED and tThisFlip >= .5-frameTolerance:
            # keep track of start time/frame for later
            slider_right.frameNStart = frameN  # exact frame index
            slider_right.tStart = t  # local t and not account for scr refresh
            slider_right.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_right, 'tStartRefresh')  # time at next scr refresh
            slider_right.setAutoDraw(True)
        
        # Check slider_right for response to end routine
        if slider_right.getRating() is not None and slider_right.status == STARTED:
            continueRoutine = False
        
        # *slider_left* updates
        if slider_left.status == NOT_STARTED and tThisFlip >= .5-frameTolerance:
            # keep track of start time/frame for later
            slider_left.frameNStart = frameN  # exact frame index
            slider_left.tStart = t  # local t and not account for scr refresh
            slider_left.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_left, 'tStartRefresh')  # time at next scr refresh
            slider_left.setAutoDraw(True)
        
        # Check slider_left for response to end routine
        if slider_left.getRating() is not None and slider_left.status == STARTED:
            continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in recognition_testComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "recognition_test"-------
    for thisComponent in recognition_testComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    distractor_text = distractor.text
    target_text = target_ltm.text
    distractor_pos = distractor.pos
    target_pos = target_ltm.pos
    psychoJS.experiment.addData('PresentationCondition', targetwords[k][1])
    k=k+1
    trial_ltm.addData('slider_right.response', slider_right.getRating())
    trial_ltm.addData('slider_right.rt', slider_right.getRT())
    trial_ltm.addData('slider_left.response', slider_left.getRating())
    trial_ltm.addData('slider_left.rt', slider_left.getRT())
    # the Routine "recognition_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed targetwords.length repeats of 'trial_ltm'

# get names of stimulus parameters
if trial_ltm.trialList in ([], [None], None):
    params = []
else:
    params = trial_ltm.trialList[0].keys()
# save data for this loop
trial_ltm.saveAsExcel(filename + '.xlsx', sheetName='trial_ltm',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "end_exp"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_end.keys = []
key_resp_end.rt = []
_key_resp_end_allKeys = []
# keep track of which components have finished
end_expComponents = [end_text, key_resp_end]
for thisComponent in end_expComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_expClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_exp"-------
while continueRoutine:
    # get current time
    t = end_expClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_expClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *end_text* updates
    if end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_text.frameNStart = frameN  # exact frame index
        end_text.tStart = t  # local t and not account for scr refresh
        end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_text, 'tStartRefresh')  # time at next scr refresh
        end_text.setAutoDraw(True)
    
    # *key_resp_end* updates
    waitOnFlip = False
    if key_resp_end.status == NOT_STARTED and tThisFlip >= .25-frameTolerance:
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
    for thisComponent in end_expComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_exp"-------
for thisComponent in end_expComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_exp" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
