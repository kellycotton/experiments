#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.4),
    on Thu Oct 20 10:23:56 2022
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
expName = 'mdmw3-1'  # from the Builder filename that created this script
expInfo = {
    'participant': '',
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
    originPath='/Users/kellycotton/Dropbox/Research/Mind-Wandering/MindWandering/mdmw3-1/mdmw3-1_lastrun.py',
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

# Initialize components for Routine "exp_setup"
exp_setupClock = core.Clock()
words = []
words_presented = []

nums = [1,2,3,4,5,6,7,8]
block_total = 3
block_n = 1
trial_n = 0
trial_n_ltm = 0

trial_length = 4
i = 0

win.mouseVisible = False


# Initialize components for Routine "distract_mw"
distract_mwClock = core.Clock()
text_13 = visual.TextStim(win=win, name='text_13',
    text='During the previous trials, how much of the time were you thinking about something other than the task?\n\nPress SPACE to submit your answer.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
resp_distract_mw = visual.Slider(win=win, name='resp_distract_mw',
    startValue=None, size=(1.0, 0.1), pos=(0, -0.3), units=None,
    labels=("None of the time", "All of the time"), ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, ori=0.0, depth=-2, readOnly=False)
key_resp_13 = keyboard.Keyboard()

# Initialize components for Routine "distract_instruct"
distract_instructClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='You have finished the first test!\n\nNow you will begin the second test. During this test, you will first see a cross in the center of the screen. Again, this is your cue to get ready. You will then see a circle in the center of the screen. If the circle is green, press SPACE. If this circle is blue, do NOT press any key. A new circle will appear and you will repeat this process. \n\nRemember:\nGREEN circle = Press SPACE\nBLUE circle = Do NOT press\n\nPress SPACE when you are ready to begin.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fix_cross = visual.ShapeStim(
    win=win, name='fix_cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "go_nogo_trial"
go_nogo_trialClock = core.Clock()
distract_stim = visual.ShapeStim(
    win=win, name='distract_stim',
    size=(0.3, 0.3), vertices='circle',
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
key_resp_distract = keyboard.Keyboard()

# Initialize components for Routine "distract_mw"
distract_mwClock = core.Clock()
text_13 = visual.TextStim(win=win, name='text_13',
    text='During the previous trials, how much of the time were you thinking about something other than the task?\n\nPress SPACE to submit your answer.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
resp_distract_mw = visual.Slider(win=win, name='resp_distract_mw',
    startValue=None, size=(1.0, 0.1), pos=(0, -0.3), units=None,
    labels=("None of the time", "All of the time"), ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, ori=0.0, depth=-2, readOnly=False)
key_resp_13 = keyboard.Keyboard()

# Initialize components for Routine "end_block"
end_blockClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "exp_instruct"
exp_instructClock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='Welcome to the experiment! \n\nIn this experiment, you will be completing several tasks. During the first task, your job will be to remember a list of words. Sometimes, we will ask you to do a second task while you are learning the list of words.\n\nDuring certain trials, you will also tell us what you were thinking about during that trial. \n\nBefore you get started, you will practice each of the tasks individually.\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "practice_instructions_1"
practice_instructions_1Clock = core.Clock()
text_instructions_2 = visual.TextStim(win=win, name='text_instructions_2',
    text='Let’s practice the first task.\n\nIn this task, you will first see a cross in the center of the screen. This is your warning that the words are about to appear and you should get ready. After the cross, you will then see a single word in the center of the screen. It will then disappear and then you will see another word appear. This will repeat for four words total.\n\nAfter all the words have been presented, you will be asked to recall as many words as possible in the order they were presented. Please type one word at a time and hit ENTER to submit. \n\nDuring the practice, you will receive feedback about your performance. \n\nPress SPACE to start the practice.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "trial_setup"
trial_setupClock = core.Clock()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fix_cross = visual.ShapeStim(
    win=win, name='fix_cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "stim_present"
stim_presentClock = core.Clock()
stim = visual.TextStim(win=win, name='stim',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "test_immediate"
test_immediateClock = core.Clock()
immediate_test_resp = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='immediate_test_resp',
     autoLog=True,
)
key_resp_3 = keyboard.Keyboard()
text_6 = visual.TextStim(win=win, name='text_6',
    text="Please type all the words that you remember in the order that they were presented. Press ENTER to submit each word. If you don't remember a word, press ENTER to continue.",
    font='Open Sans',
    pos=(0, -.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "feedback_1"
feedback_1Clock = core.Clock()
text_8 = visual.TextStim(win=win, name='text_8',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_11 = keyboard.Keyboard()

# Initialize components for Routine "practice_instructions_2"
practice_instructions_2Clock = core.Clock()
text_instructions_3 = visual.TextStim(win=win, name='text_instructions_3',
    text='Now, we’ll practice the second task. \n\nIn this task, you may see a number in the center of the screen. Your job is to decide if the number is even or odd.\n\nPlease try to respond as quickly and accurately as possible.\n\nPress E if the number is even and O if the number is odd.\n\nDuring the practice, you will receive feedback about your performance. \n\nPress SPACE to start the practice.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_8 = keyboard.Keyboard()

# Initialize components for Routine "parity"
parityClock = core.Clock()
text_parity = visual.TextStim(win=win, name='text_parity',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_parity = keyboard.Keyboard()

# Initialize components for Routine "feedback_2"
feedback_2Clock = core.Clock()
text_10 = visual.TextStim(win=win, name='text_10',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_12 = keyboard.Keyboard()

# Initialize components for Routine "practice_instructions_3"
practice_instructions_3Clock = core.Clock()
text_instructions_4 = visual.TextStim(win=win, name='text_instructions_4',
    text='Now, we are going to combine the tasks.\n\nOn each trial, you will see a word, followed by two numbers. Again, you will decide if each number is even or odd. This will repeat four times. After you have seen all of the words, you will be asked to recall as many words as you can remember in the order they were originally presented in.\n\nRemember, for the number task, press E if the number is even and O if the number is odd.\n\nPress SPACE to start the practice.',
    font='Open Sans',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_9 = keyboard.Keyboard()

# Initialize components for Routine "trial_setup"
trial_setupClock = core.Clock()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fix_cross = visual.ShapeStim(
    win=win, name='fix_cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "stim_present"
stim_presentClock = core.Clock()
stim = visual.TextStim(win=win, name='stim',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "parity"
parityClock = core.Clock()
text_parity = visual.TextStim(win=win, name='text_parity',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_parity = keyboard.Keyboard()

# Initialize components for Routine "test_immediate"
test_immediateClock = core.Clock()
immediate_test_resp = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='immediate_test_resp',
     autoLog=True,
)
key_resp_3 = keyboard.Keyboard()
text_6 = visual.TextStim(win=win, name='text_6',
    text="Please type all the words that you remember in the order that they were presented. Press ENTER to submit each word. If you don't remember a word, press ENTER to continue.",
    font='Open Sans',
    pos=(0, -.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "feedback_1"
feedback_1Clock = core.Clock()
text_8 = visual.TextStim(win=win, name='text_8',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_11 = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
text_instructions = visual.TextStim(win=win, name='text_instructions',
    text='Now we are going to begin the real experiment.\n\nEverything will be the same as in the practice. On some trials, you will just see the words and on other trials you will see the words and the numbers.\n\nAfter some trials you will be asked to indicate what you were just thinking about. It is perfectly normal to think about things that are not related to the task. \n\nWe will give you several categories of things that people might think about during tasks like these. Please try your best to honestly assess your thoughts and choose a category that best describes your thoughts at the time when we ask.\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "instructions_mw"
instructions_mwClock = core.Clock()
text_instructions_5 = visual.TextStim(win=win, name='text_instructions_5',
    text='When we ask you what you were just thinking about, you will press a number on your keyboard that corresponds to different options. \n\nDon’t worry, you don’t have to remember the options! We’ll show you the numbers and corresponding options when we ask. \n\nOn the next screen, we’ll show you an explanation of what we mean by each option.\n\nPress SPACE to continue',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_14 = keyboard.Keyboard()

# Initialize components for Routine "mw_meaning"
mw_meaningClock = core.Clock()
text_11 = visual.TextStim(win=win, name='text_11',
    text='Below are the different options and corresponding number that you will press:\n\n1) The word task: for thoughts about the list of words, required responses, or word task goals\n2) The number task: for thoughts about the numbers, required responses, or number task goals\n3) Both tasks: for thoughts about the words and numbers, required responses, or both task goals\n4) Task experience/performance: for thoughts\nabout your performance or task difficulty \n5) Something else: for thoughts about normal events in the recent or distant past or future, your physical or emotional state, your life concerns, fantasies or thoughts disconnected from reality, thoughts about objects or task unrelated events in the room, or any thoughts not captured by the other choices\n\nWhen you are ready to begin the experiment, press SPACE.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_16 = keyboard.Keyboard()

# Initialize components for Routine "trial_setup"
trial_setupClock = core.Clock()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fix_cross = visual.ShapeStim(
    win=win, name='fix_cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "stim_present"
stim_presentClock = core.Clock()
stim = visual.TextStim(win=win, name='stim',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "parity"
parityClock = core.Clock()
text_parity = visual.TextStim(win=win, name='text_parity',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_parity = keyboard.Keyboard()

# Initialize components for Routine "test_immediate"
test_immediateClock = core.Clock()
immediate_test_resp = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='immediate_test_resp',
     autoLog=True,
)
key_resp_3 = keyboard.Keyboard()
text_6 = visual.TextStim(win=win, name='text_6',
    text="Please type all the words that you remember in the order that they were presented. Press ENTER to submit each word. If you don't remember a word, press ENTER to continue.",
    font='Open Sans',
    pos=(0, -.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "mw_probe"
mw_probeClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='What were you thinking about during this trial?\n\n1) The word task\n2) The number task\n3) Both tasks\n4) Task experience/performance\n5) Something else\n\nSelect an option to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_mw_probe = keyboard.Keyboard()
text_3 = visual.TextStim(win=win, name='text_3',
    text='Press SPACE to begin the next trial.',
    font='Open Sans',
    pos=(0, -.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "end_block"
end_blockClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "distract_instruct"
distract_instructClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='You have finished the first test!\n\nNow you will begin the second test. During this test, you will first see a cross in the center of the screen. Again, this is your cue to get ready. You will then see a circle in the center of the screen. If the circle is green, press SPACE. If this circle is blue, do NOT press any key. A new circle will appear and you will repeat this process. \n\nRemember:\nGREEN circle = Press SPACE\nBLUE circle = Do NOT press\n\nPress SPACE when you are ready to begin.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fix_cross = visual.ShapeStim(
    win=win, name='fix_cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "ltm_instruct"
ltm_instructClock = core.Clock()
text_7 = visual.TextStim(win=win, name='text_7',
    text='You have finished the second memory task!\n\nFor the last memory task, you will see two words presented on the screen. One of the words will be from the first memory task and one will be a completely new word. Your job is to decide which word you saw earlier.\n\nIf you think the left word was presented earlier, press the LEFT arrow key. If you think the right word was presented earlier, press the RIGHT arrow key.\n\nPress SPACE to begin.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fix_cross = visual.ShapeStim(
    win=win, name='fix_cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "stim_present_delay"
stim_present_delayClock = core.Clock()
target_text = visual.TextStim(win=win, name='target_text',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
lure_text = visual.TextStim(win=win, name='lure_text',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_ltm = keyboard.Keyboard()

# Initialize components for Routine "end"
endClock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text='You have reached the end of the experiment. Press ESC to exit.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
setup_loop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('words_text.csv'),
    seed=None, name='setup_loop')
thisExp.addLoop(setup_loop)  # add the loop to the experiment
thisSetup_loop = setup_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSetup_loop.rgb)
if thisSetup_loop != None:
    for paramName in thisSetup_loop:
        exec('{} = thisSetup_loop[paramName]'.format(paramName))

for thisSetup_loop in setup_loop:
    currentLoop = setup_loop
    # abbreviate parameter names if possible (e.g. rgb = thisSetup_loop.rgb)
    if thisSetup_loop != None:
        for paramName in thisSetup_loop:
            exec('{} = thisSetup_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "exp_setup"-------
    continueRoutine = True
    # update component parameters for each repeat
    words.append([WordsStimuli])
    
    # keep track of which components have finished
    exp_setupComponents = []
    for thisComponent in exp_setupComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    exp_setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "exp_setup"-------
    while continueRoutine:
        # get current time
        t = exp_setupClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=exp_setupClock)
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
        for thisComponent in exp_setupComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "exp_setup"-------
    for thisComponent in exp_setupComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "exp_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'setup_loop'


# ------Prepare to start Routine "distract_mw"-------
continueRoutine = True
# update component parameters for each repeat
win.mouseVisible = True

document.body.style.cursor='auto'
resp_distract_mw.reset()
key_resp_13.keys = []
key_resp_13.rt = []
_key_resp_13_allKeys = []
# keep track of which components have finished
distract_mwComponents = [text_13, resp_distract_mw, key_resp_13]
for thisComponent in distract_mwComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
distract_mwClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "distract_mw"-------
while continueRoutine:
    # get current time
    t = distract_mwClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=distract_mwClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_13* updates
    if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_13.frameNStart = frameN  # exact frame index
        text_13.tStart = t  # local t and not account for scr refresh
        text_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
        text_13.setAutoDraw(True)
    
    # *resp_distract_mw* updates
    if resp_distract_mw.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        resp_distract_mw.frameNStart = frameN  # exact frame index
        resp_distract_mw.tStart = t  # local t and not account for scr refresh
        resp_distract_mw.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(resp_distract_mw, 'tStartRefresh')  # time at next scr refresh
        resp_distract_mw.setAutoDraw(True)
    
    # *key_resp_13* updates
    waitOnFlip = False
    if key_resp_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_13.frameNStart = frameN  # exact frame index
        key_resp_13.tStart = t  # local t and not account for scr refresh
        key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
        key_resp_13.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_13.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_13.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_13.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_13_allKeys.extend(theseKeys)
        if len(_key_resp_13_allKeys):
            key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
            key_resp_13.rt = _key_resp_13_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in distract_mwComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "distract_mw"-------
for thisComponent in distract_mwComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
win.mouseVisible = False
thisExp.addData('resp_distract_mw.response', resp_distract_mw.getRating())
thisExp.addData('resp_distract_mw.rt', resp_distract_mw.getRT())
# the Routine "distract_mw" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "distract_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
block_n = 1
block_total = 2
# keep track of which components have finished
distract_instructComponents = [text_4, key_resp_5]
for thisComponent in distract_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
distract_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "distract_instruct"-------
while continueRoutine:
    # get current time
    t = distract_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=distract_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
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
    for thisComponent in distract_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "distract_instruct"-------
for thisComponent in distract_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "distract_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=block_total, method='random', 
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
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fix_cross]
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
        
        # *fix_cross* updates
        if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_cross.frameNStart = frameN  # exact frame index
            fix_cross.tStart = t  # local t and not account for scr refresh
            fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
            fix_cross.setAutoDraw(True)
        if fix_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_cross.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                fix_cross.tStop = t  # not accounting for scr refresh
                fix_cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_cross, 'tStopRefresh')  # time at next scr refresh
                fix_cross.setAutoDraw(False)
        
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
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=15.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('distract_conds.csv'),
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
        
        # ------Prepare to start Routine "go_nogo_trial"-------
        continueRoutine = True
        routineTimer.add(2.100000)
        # update component parameters for each repeat
        distract_stim.setFillColor(stim_color)
        distract_stim.setLineColor(stim_color)
        key_resp_distract.keys = []
        key_resp_distract.rt = []
        _key_resp_distract_allKeys = []
        # keep track of which components have finished
        go_nogo_trialComponents = [distract_stim, key_resp_distract]
        for thisComponent in go_nogo_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        go_nogo_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "go_nogo_trial"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = go_nogo_trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=go_nogo_trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *distract_stim* updates
            if distract_stim.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                distract_stim.frameNStart = frameN  # exact frame index
                distract_stim.tStart = t  # local t and not account for scr refresh
                distract_stim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distract_stim, 'tStartRefresh')  # time at next scr refresh
                distract_stim.setAutoDraw(True)
            if distract_stim.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > distract_stim.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    distract_stim.tStop = t  # not accounting for scr refresh
                    distract_stim.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(distract_stim, 'tStopRefresh')  # time at next scr refresh
                    distract_stim.setAutoDraw(False)
            
            # *key_resp_distract* updates
            waitOnFlip = False
            if key_resp_distract.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                key_resp_distract.frameNStart = frameN  # exact frame index
                key_resp_distract.tStart = t  # local t and not account for scr refresh
                key_resp_distract.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_distract, 'tStartRefresh')  # time at next scr refresh
                key_resp_distract.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_distract.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_distract.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_distract.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_distract.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_distract.tStop = t  # not accounting for scr refresh
                    key_resp_distract.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_distract, 'tStopRefresh')  # time at next scr refresh
                    key_resp_distract.status = FINISHED
            if key_resp_distract.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_distract.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_distract_allKeys.extend(theseKeys)
                if len(_key_resp_distract_allKeys):
                    key_resp_distract.keys = _key_resp_distract_allKeys[-1].name  # just the last key pressed
                    key_resp_distract.rt = _key_resp_distract_allKeys[-1].rt
                    # was this correct?
                    if (key_resp_distract.keys == str(distract_corr_ans)) or (key_resp_distract.keys == distract_corr_ans):
                        key_resp_distract.corr = 1
                    else:
                        key_resp_distract.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in go_nogo_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "go_nogo_trial"-------
        for thisComponent in go_nogo_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp_distract.keys in ['', [], None]:  # No response was made
            key_resp_distract.keys = None
            # was no response the correct answer?!
            if str(distract_corr_ans).lower() == 'none':
               key_resp_distract.corr = 1;  # correct non-response
            else:
               key_resp_distract.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('key_resp_distract.keys',key_resp_distract.keys)
        trials.addData('key_resp_distract.corr', key_resp_distract.corr)
        if key_resp_distract.keys != None:  # we had a response
            trials.addData('key_resp_distract.rt', key_resp_distract.rt)
        thisExp.nextEntry()
        
    # completed 15.0 repeats of 'trials'
    
    
    # ------Prepare to start Routine "distract_mw"-------
    continueRoutine = True
    # update component parameters for each repeat
    win.mouseVisible = True
    
    document.body.style.cursor='auto'
    resp_distract_mw.reset()
    key_resp_13.keys = []
    key_resp_13.rt = []
    _key_resp_13_allKeys = []
    # keep track of which components have finished
    distract_mwComponents = [text_13, resp_distract_mw, key_resp_13]
    for thisComponent in distract_mwComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    distract_mwClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "distract_mw"-------
    while continueRoutine:
        # get current time
        t = distract_mwClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=distract_mwClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_13* updates
        if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_13.frameNStart = frameN  # exact frame index
            text_13.tStart = t  # local t and not account for scr refresh
            text_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
            text_13.setAutoDraw(True)
        
        # *resp_distract_mw* updates
        if resp_distract_mw.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            resp_distract_mw.frameNStart = frameN  # exact frame index
            resp_distract_mw.tStart = t  # local t and not account for scr refresh
            resp_distract_mw.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_distract_mw, 'tStartRefresh')  # time at next scr refresh
            resp_distract_mw.setAutoDraw(True)
        
        # *key_resp_13* updates
        waitOnFlip = False
        if key_resp_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_13.frameNStart = frameN  # exact frame index
            key_resp_13.tStart = t  # local t and not account for scr refresh
            key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
            key_resp_13.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_13.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_13.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_13.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_13_allKeys.extend(theseKeys)
            if len(_key_resp_13_allKeys):
                key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
                key_resp_13.rt = _key_resp_13_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in distract_mwComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "distract_mw"-------
    for thisComponent in distract_mwComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    win.mouseVisible = False
    trials_2.addData('resp_distract_mw.response', resp_distract_mw.getRating())
    trials_2.addData('resp_distract_mw.rt', resp_distract_mw.getRT())
    # the Routine "distract_mw" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "end_block"-------
    continueRoutine = True
    # update component parameters for each repeat
    block_msg = f"You have reached the end of block {block_n} of {block_total}.\n\nPress SPACE to continue."
    text.setText(block_msg)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    end_blockComponents = [text, key_resp_2]
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
    while continueRoutine:
        # get current time
        t = end_blockClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=end_blockClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        
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
    block_n += 1
    # the Routine "end_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed block_total repeats of 'trials_2'


# ------Prepare to start Routine "exp_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
exp_instructComponents = [text_5, key_resp_6]
for thisComponent in exp_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
exp_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "exp_instruct"-------
while continueRoutine:
    # get current time
    t = exp_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=exp_instructClock)
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
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "exp_instruct"-------
for thisComponent in exp_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
# the Routine "exp_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practice_instructions_1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
practice_instructions_1Components = [text_instructions_2, key_resp_7]
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
    
    # *text_instructions_2* updates
    if text_instructions_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instructions_2.frameNStart = frameN  # exact frame index
        text_instructions_2.tStart = t  # local t and not account for scr refresh
        text_instructions_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instructions_2, 'tStartRefresh')  # time at next scr refresh
        text_instructions_2.setAutoDraw(True)
    
    # *key_resp_7* updates
    waitOnFlip = False
    if key_resp_7.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_7.frameNStart = frameN  # exact frame index
        key_resp_7.tStart = t  # local t and not account for scr refresh
        key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
        key_resp_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_7.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_7.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_7_allKeys.extend(theseKeys)
        if len(_key_resp_7_allKeys):
            key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[-1].rt
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
practice_1 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('practice_1.csv'),
    seed=None, name='practice_1')
thisExp.addLoop(practice_1)  # add the loop to the experiment
thisPractice_1 = practice_1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_1.rgb)
if thisPractice_1 != None:
    for paramName in thisPractice_1:
        exec('{} = thisPractice_1[paramName]'.format(paramName))

for thisPractice_1 in practice_1:
    currentLoop = practice_1
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_1.rgb)
    if thisPractice_1 != None:
        for paramName in thisPractice_1:
            exec('{} = thisPractice_1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial_setup"-------
    continueRoutine = True
    # update component parameters for each repeat
    trial_words = words[i:(i+trial_length)]
    stim_n = 0
    resp_i = 0
    parity_n = 0
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
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fix_cross]
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
        
        # *fix_cross* updates
        if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_cross.frameNStart = frameN  # exact frame index
            fix_cross.tStart = t  # local t and not account for scr refresh
            fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
            fix_cross.setAutoDraw(True)
        if fix_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_cross.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                fix_cross.tStop = t  # not accounting for scr refresh
                fix_cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_cross, 'tStopRefresh')  # time at next scr refresh
                fix_cross.setAutoDraw(False)
        
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
    
    # set up handler to look after randomisation of conditions etc
    practice_1_present = data.TrialHandler(nReps=trial_length, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practice_1_present')
    thisExp.addLoop(practice_1_present)  # add the loop to the experiment
    thisPractice_1_present = practice_1_present.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_1_present.rgb)
    if thisPractice_1_present != None:
        for paramName in thisPractice_1_present:
            exec('{} = thisPractice_1_present[paramName]'.format(paramName))
    
    for thisPractice_1_present in practice_1_present:
        currentLoop = practice_1_present
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_1_present.rgb)
        if thisPractice_1_present != None:
            for paramName in thisPractice_1_present:
                exec('{} = thisPractice_1_present[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "stim_present"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        word_present = trial_words[stim_n]
        
        words_presented.append([word_present, stim_n, trial_n])
        stim.setText(word_present)
        # keep track of which components have finished
        stim_presentComponents = [stim]
        for thisComponent in stim_presentComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stim_presentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stim_present"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = stim_presentClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stim_presentClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim* updates
            if stim.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                stim.frameNStart = frameN  # exact frame index
                stim.tStart = t  # local t and not account for scr refresh
                stim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim, 'tStartRefresh')  # time at next scr refresh
                stim.setAutoDraw(True)
            if stim.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim.tStartRefresh + .9-frameTolerance:
                    # keep track of stop time/frame for later
                    stim.tStop = t  # not accounting for scr refresh
                    stim.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim, 'tStopRefresh')  # time at next scr refresh
                    stim.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stim_presentComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stim_present"-------
        for thisComponent in stim_presentComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData("word_presented", word_present)
        thisExp.addData("serial_position", stim_n)
        thisExp.addData("trial_n", trial_n)
        thisExp.addData("block_n", block_n)
        
        stim_n += 1
        
        thisExp.nextEntry()
        
    # completed trial_length repeats of 'practice_1_present'
    
    
    # set up handler to look after randomisation of conditions etc
    practice_test_1 = data.TrialHandler(nReps=trial_length, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practice_test_1')
    thisExp.addLoop(practice_test_1)  # add the loop to the experiment
    thisPractice_test_1 = practice_test_1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_test_1.rgb)
    if thisPractice_test_1 != None:
        for paramName in thisPractice_test_1:
            exec('{} = thisPractice_test_1[paramName]'.format(paramName))
    
    for thisPractice_test_1 in practice_test_1:
        currentLoop = practice_test_1
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_test_1.rgb)
        if thisPractice_test_1 != None:
            for paramName in thisPractice_test_1:
                exec('{} = thisPractice_test_1[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "test_immediate"-------
        continueRoutine = True
        # update component parameters for each repeat
        immediate_test_resp.reset()
        key_resp_3.keys = []
        key_resp_3.rt = []
        _key_resp_3_allKeys = []
        # keep track of which components have finished
        test_immediateComponents = [immediate_test_resp, key_resp_3, text_6]
        for thisComponent in test_immediateComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        test_immediateClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "test_immediate"-------
        while continueRoutine:
            # get current time
            t = test_immediateClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=test_immediateClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *immediate_test_resp* updates
            if immediate_test_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                immediate_test_resp.frameNStart = frameN  # exact frame index
                immediate_test_resp.tStart = t  # local t and not account for scr refresh
                immediate_test_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(immediate_test_resp, 'tStartRefresh')  # time at next scr refresh
                immediate_test_resp.setAutoDraw(True)
            
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
                theseKeys = key_resp_3.getKeys(keyList=['return'], waitRelease=False)
                _key_resp_3_allKeys.extend(theseKeys)
                if len(_key_resp_3_allKeys):
                    key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                    key_resp_3.rt = _key_resp_3_allKeys[-1].rt
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
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in test_immediateComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "test_immediate"-------
        for thisComponent in test_immediateComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData("serial_position_resp", resp_i)
        thisExp.addData("trial_n", trial_n)
        thisExp.addData("block_n", block_n)
        
        resp_i += 1
        
        practice_test_1.addData('immediate_test_resp.text',immediate_test_resp.text)
        # the Routine "test_immediate" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed trial_length repeats of 'practice_test_1'
    
    
    # ------Prepare to start Routine "feedback_1"-------
    continueRoutine = True
    # update component parameters for each repeat
    feedback_msg = f"The correct words were: {trial_words[0]}, {trial_words[1]}, {trial_words[2]}, and {trial_words[3]}\n\n\nPress SPACE to continue."
    text_8.setText(feedback_msg)
    key_resp_11.keys = []
    key_resp_11.rt = []
    _key_resp_11_allKeys = []
    # keep track of which components have finished
    feedback_1Components = [text_8, key_resp_11]
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
        
        # *text_8* updates
        if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_8.frameNStart = frameN  # exact frame index
            text_8.tStart = t  # local t and not account for scr refresh
            text_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
            text_8.setAutoDraw(True)
        
        # *key_resp_11* updates
        waitOnFlip = False
        if key_resp_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_11.frameNStart = frameN  # exact frame index
            key_resp_11.tStart = t  # local t and not account for scr refresh
            key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
            key_resp_11.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_11.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_11.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_11.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_11_allKeys.extend(theseKeys)
            if len(_key_resp_11_allKeys):
                key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
                key_resp_11.rt = _key_resp_11_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
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
    i += trial_length
    
    # the Routine "feedback_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'practice_1'


# ------Prepare to start Routine "practice_instructions_2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_8.keys = []
key_resp_8.rt = []
_key_resp_8_allKeys = []
# keep track of which components have finished
practice_instructions_2Components = [text_instructions_3, key_resp_8]
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
    
    # *text_instructions_3* updates
    if text_instructions_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instructions_3.frameNStart = frameN  # exact frame index
        text_instructions_3.tStart = t  # local t and not account for scr refresh
        text_instructions_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instructions_3, 'tStartRefresh')  # time at next scr refresh
        text_instructions_3.setAutoDraw(True)
    
    # *key_resp_8* updates
    waitOnFlip = False
    if key_resp_8.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_8.frameNStart = frameN  # exact frame index
        key_resp_8.tStart = t  # local t and not account for scr refresh
        key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
        key_resp_8.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_8.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_8.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_8_allKeys.extend(theseKeys)
        if len(_key_resp_8_allKeys):
            key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
            key_resp_8.rt = _key_resp_8_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
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
practice_2 = data.TrialHandler(nReps=4.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('practice_2.csv'),
    seed=None, name='practice_2')
thisExp.addLoop(practice_2)  # add the loop to the experiment
thisPractice_2 = practice_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_2.rgb)
if thisPractice_2 != None:
    for paramName in thisPractice_2:
        exec('{} = thisPractice_2[paramName]'.format(paramName))

for thisPractice_2 in practice_2:
    currentLoop = practice_2
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_2.rgb)
    if thisPractice_2 != None:
        for paramName in thisPractice_2:
            exec('{} = thisPractice_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "parity"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(nums)
    parity_stim = nums[0]
    
    if parity_stim % 2 == 0:
        corr_ans_parity = "e"
    elif parity_stim % 2 == 1:
        corr_ans_parity = "o"
    text_parity.setOpacity(parity_disp)
    text_parity.setText(parity_stim)
    key_resp_parity.keys = []
    key_resp_parity.rt = []
    _key_resp_parity_allKeys = []
    # keep track of which components have finished
    parityComponents = [text_parity, key_resp_parity]
    for thisComponent in parityComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    parityClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "parity"-------
    while continueRoutine:
        # get current time
        t = parityClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=parityClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_parity* updates
        if text_parity.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
            # keep track of start time/frame for later
            text_parity.frameNStart = frameN  # exact frame index
            text_parity.tStart = t  # local t and not account for scr refresh
            text_parity.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_parity, 'tStartRefresh')  # time at next scr refresh
            text_parity.setAutoDraw(True)
        if text_parity.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_parity.tStartRefresh + parity_dur-frameTolerance:
                # keep track of stop time/frame for later
                text_parity.tStop = t  # not accounting for scr refresh
                text_parity.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_parity, 'tStopRefresh')  # time at next scr refresh
                text_parity.setAutoDraw(False)
        
        # *key_resp_parity* updates
        waitOnFlip = False
        if key_resp_parity.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_parity.frameNStart = frameN  # exact frame index
            key_resp_parity.tStart = t  # local t and not account for scr refresh
            key_resp_parity.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_parity, 'tStartRefresh')  # time at next scr refresh
            key_resp_parity.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_parity.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_parity.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_parity.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_parity.tStartRefresh + parity_dur-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_parity.tStop = t  # not accounting for scr refresh
                key_resp_parity.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_parity, 'tStopRefresh')  # time at next scr refresh
                key_resp_parity.status = FINISHED
        if key_resp_parity.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_parity.getKeys(keyList=['e','o'], waitRelease=False)
            _key_resp_parity_allKeys.extend(theseKeys)
            if len(_key_resp_parity_allKeys):
                key_resp_parity.keys = _key_resp_parity_allKeys[0].name  # just the first key pressed
                key_resp_parity.rt = _key_resp_parity_allKeys[0].rt
                # was this correct?
                if (key_resp_parity.keys == str(corr_ans_parity)) or (key_resp_parity.keys == corr_ans_parity):
                    key_resp_parity.corr = 1
                else:
                    key_resp_parity.corr = 0
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in parityComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "parity"-------
    for thisComponent in parityComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData("trial_n", trial_n)
    thisExp.addData("block_n", block_n)
    thisExp.addData("parity_n", parity_n)
    thisExp.addData("parity_stim", parity_stim)
    
    parity_n += 1
    # check responses
    if key_resp_parity.keys in ['', [], None]:  # No response was made
        key_resp_parity.keys = None
        # was no response the correct answer?!
        if str(corr_ans_parity).lower() == 'none':
           key_resp_parity.corr = 1;  # correct non-response
        else:
           key_resp_parity.corr = 0;  # failed to respond (incorrectly)
    # store data for practice_2 (TrialHandler)
    practice_2.addData('key_resp_parity.keys',key_resp_parity.keys)
    practice_2.addData('key_resp_parity.corr', key_resp_parity.corr)
    if key_resp_parity.keys != None:  # we had a response
        practice_2.addData('key_resp_parity.rt', key_resp_parity.rt)
    # the Routine "parity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    feedback_msg = ''
    
    if key_resp_parity.corr == 1:
        feedback_msg = "Correct!"
    elif key_resp_parity.corr == 0:
        feedback_msg = f"Incorrect. The correct response was {corr_ans_parity}." 
        
    feedback_msg += "\n\n\nPress SPACE to continue."
    text_10.setText(feedback_msg)
    key_resp_12.keys = []
    key_resp_12.rt = []
    _key_resp_12_allKeys = []
    # keep track of which components have finished
    feedback_2Components = [text_10, key_resp_12]
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
        
        # *text_10* updates
        if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_10.frameNStart = frameN  # exact frame index
            text_10.tStart = t  # local t and not account for scr refresh
            text_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
            text_10.setAutoDraw(True)
        
        # *key_resp_12* updates
        waitOnFlip = False
        if key_resp_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_12.frameNStart = frameN  # exact frame index
            key_resp_12.tStart = t  # local t and not account for scr refresh
            key_resp_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_12, 'tStartRefresh')  # time at next scr refresh
            key_resp_12.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_12.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_12.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_12.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_12.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_12_allKeys.extend(theseKeys)
            if len(_key_resp_12_allKeys):
                key_resp_12.keys = _key_resp_12_allKeys[-1].name  # just the last key pressed
                key_resp_12.rt = _key_resp_12_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
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
    # check responses
    if key_resp_12.keys in ['', [], None]:  # No response was made
        key_resp_12.keys = None
    practice_2.addData('key_resp_12.keys',key_resp_12.keys)
    if key_resp_12.keys != None:  # we had a response
        practice_2.addData('key_resp_12.rt', key_resp_12.rt)
    practice_2.addData('key_resp_12.started', key_resp_12.tStartRefresh)
    practice_2.addData('key_resp_12.stopped', key_resp_12.tStopRefresh)
    # the Routine "feedback_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 4.0 repeats of 'practice_2'


# ------Prepare to start Routine "practice_instructions_3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
practice_instructions_3Components = [text_instructions_4, key_resp_9]
for thisComponent in practice_instructions_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_instructions_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_instructions_3"-------
while continueRoutine:
    # get current time
    t = practice_instructions_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_instructions_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_instructions_4* updates
    if text_instructions_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instructions_4.frameNStart = frameN  # exact frame index
        text_instructions_4.tStart = t  # local t and not account for scr refresh
        text_instructions_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instructions_4, 'tStartRefresh')  # time at next scr refresh
        text_instructions_4.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_instructions_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_instructions_3"-------
for thisComponent in practice_instructions_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practice_instructions_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_3 = data.TrialHandler(nReps=2.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('practice_3.csv'),
    seed=None, name='practice_3')
thisExp.addLoop(practice_3)  # add the loop to the experiment
thisPractice_3 = practice_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_3.rgb)
if thisPractice_3 != None:
    for paramName in thisPractice_3:
        exec('{} = thisPractice_3[paramName]'.format(paramName))

for thisPractice_3 in practice_3:
    currentLoop = practice_3
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_3.rgb)
    if thisPractice_3 != None:
        for paramName in thisPractice_3:
            exec('{} = thisPractice_3[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial_setup"-------
    continueRoutine = True
    # update component parameters for each repeat
    trial_words = words[i:(i+trial_length)]
    stim_n = 0
    resp_i = 0
    parity_n = 0
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
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fix_cross]
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
        
        # *fix_cross* updates
        if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_cross.frameNStart = frameN  # exact frame index
            fix_cross.tStart = t  # local t and not account for scr refresh
            fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
            fix_cross.setAutoDraw(True)
        if fix_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_cross.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                fix_cross.tStop = t  # not accounting for scr refresh
                fix_cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_cross, 'tStopRefresh')  # time at next scr refresh
                fix_cross.setAutoDraw(False)
        
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
    
    # set up handler to look after randomisation of conditions etc
    stim_presentation_practice = data.TrialHandler(nReps=trial_length, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='stim_presentation_practice')
    thisExp.addLoop(stim_presentation_practice)  # add the loop to the experiment
    thisStim_presentation_practice = stim_presentation_practice.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisStim_presentation_practice.rgb)
    if thisStim_presentation_practice != None:
        for paramName in thisStim_presentation_practice:
            exec('{} = thisStim_presentation_practice[paramName]'.format(paramName))
    
    for thisStim_presentation_practice in stim_presentation_practice:
        currentLoop = stim_presentation_practice
        # abbreviate parameter names if possible (e.g. rgb = thisStim_presentation_practice.rgb)
        if thisStim_presentation_practice != None:
            for paramName in thisStim_presentation_practice:
                exec('{} = thisStim_presentation_practice[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "stim_present"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        word_present = trial_words[stim_n]
        
        words_presented.append([word_present, stim_n, trial_n])
        stim.setText(word_present)
        # keep track of which components have finished
        stim_presentComponents = [stim]
        for thisComponent in stim_presentComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stim_presentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stim_present"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = stim_presentClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stim_presentClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim* updates
            if stim.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                stim.frameNStart = frameN  # exact frame index
                stim.tStart = t  # local t and not account for scr refresh
                stim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim, 'tStartRefresh')  # time at next scr refresh
                stim.setAutoDraw(True)
            if stim.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim.tStartRefresh + .9-frameTolerance:
                    # keep track of stop time/frame for later
                    stim.tStop = t  # not accounting for scr refresh
                    stim.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim, 'tStopRefresh')  # time at next scr refresh
                    stim.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stim_presentComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stim_present"-------
        for thisComponent in stim_presentComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData("word_presented", word_present)
        thisExp.addData("serial_position", stim_n)
        thisExp.addData("trial_n", trial_n)
        thisExp.addData("block_n", block_n)
        
        stim_n += 1
        
        
        # set up handler to look after randomisation of conditions etc
        practice_parity = data.TrialHandler(nReps=2.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='practice_parity')
        thisExp.addLoop(practice_parity)  # add the loop to the experiment
        thisPractice_parity = practice_parity.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_parity.rgb)
        if thisPractice_parity != None:
            for paramName in thisPractice_parity:
                exec('{} = thisPractice_parity[paramName]'.format(paramName))
        
        for thisPractice_parity in practice_parity:
            currentLoop = practice_parity
            # abbreviate parameter names if possible (e.g. rgb = thisPractice_parity.rgb)
            if thisPractice_parity != None:
                for paramName in thisPractice_parity:
                    exec('{} = thisPractice_parity[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "parity"-------
            continueRoutine = True
            # update component parameters for each repeat
            shuffle(nums)
            parity_stim = nums[0]
            
            if parity_stim % 2 == 0:
                corr_ans_parity = "e"
            elif parity_stim % 2 == 1:
                corr_ans_parity = "o"
            text_parity.setOpacity(parity_disp)
            text_parity.setText(parity_stim)
            key_resp_parity.keys = []
            key_resp_parity.rt = []
            _key_resp_parity_allKeys = []
            # keep track of which components have finished
            parityComponents = [text_parity, key_resp_parity]
            for thisComponent in parityComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            parityClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "parity"-------
            while continueRoutine:
                # get current time
                t = parityClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=parityClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_parity* updates
                if text_parity.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                    # keep track of start time/frame for later
                    text_parity.frameNStart = frameN  # exact frame index
                    text_parity.tStart = t  # local t and not account for scr refresh
                    text_parity.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_parity, 'tStartRefresh')  # time at next scr refresh
                    text_parity.setAutoDraw(True)
                if text_parity.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_parity.tStartRefresh + parity_dur-frameTolerance:
                        # keep track of stop time/frame for later
                        text_parity.tStop = t  # not accounting for scr refresh
                        text_parity.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(text_parity, 'tStopRefresh')  # time at next scr refresh
                        text_parity.setAutoDraw(False)
                
                # *key_resp_parity* updates
                waitOnFlip = False
                if key_resp_parity.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_parity.frameNStart = frameN  # exact frame index
                    key_resp_parity.tStart = t  # local t and not account for scr refresh
                    key_resp_parity.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_parity, 'tStartRefresh')  # time at next scr refresh
                    key_resp_parity.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_parity.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_parity.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_parity.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_parity.tStartRefresh + parity_dur-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_parity.tStop = t  # not accounting for scr refresh
                        key_resp_parity.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(key_resp_parity, 'tStopRefresh')  # time at next scr refresh
                        key_resp_parity.status = FINISHED
                if key_resp_parity.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_parity.getKeys(keyList=['e','o'], waitRelease=False)
                    _key_resp_parity_allKeys.extend(theseKeys)
                    if len(_key_resp_parity_allKeys):
                        key_resp_parity.keys = _key_resp_parity_allKeys[0].name  # just the first key pressed
                        key_resp_parity.rt = _key_resp_parity_allKeys[0].rt
                        # was this correct?
                        if (key_resp_parity.keys == str(corr_ans_parity)) or (key_resp_parity.keys == corr_ans_parity):
                            key_resp_parity.corr = 1
                        else:
                            key_resp_parity.corr = 0
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in parityComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "parity"-------
            for thisComponent in parityComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData("trial_n", trial_n)
            thisExp.addData("block_n", block_n)
            thisExp.addData("parity_n", parity_n)
            thisExp.addData("parity_stim", parity_stim)
            
            parity_n += 1
            # check responses
            if key_resp_parity.keys in ['', [], None]:  # No response was made
                key_resp_parity.keys = None
                # was no response the correct answer?!
                if str(corr_ans_parity).lower() == 'none':
                   key_resp_parity.corr = 1;  # correct non-response
                else:
                   key_resp_parity.corr = 0;  # failed to respond (incorrectly)
            # store data for practice_parity (TrialHandler)
            practice_parity.addData('key_resp_parity.keys',key_resp_parity.keys)
            practice_parity.addData('key_resp_parity.corr', key_resp_parity.corr)
            if key_resp_parity.keys != None:  # we had a response
                practice_parity.addData('key_resp_parity.rt', key_resp_parity.rt)
            # the Routine "parity" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 2.0 repeats of 'practice_parity'
        
        thisExp.nextEntry()
        
    # completed trial_length repeats of 'stim_presentation_practice'
    
    
    # set up handler to look after randomisation of conditions etc
    practice_test_2 = data.TrialHandler(nReps=trial_length, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practice_test_2')
    thisExp.addLoop(practice_test_2)  # add the loop to the experiment
    thisPractice_test_2 = practice_test_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_test_2.rgb)
    if thisPractice_test_2 != None:
        for paramName in thisPractice_test_2:
            exec('{} = thisPractice_test_2[paramName]'.format(paramName))
    
    for thisPractice_test_2 in practice_test_2:
        currentLoop = practice_test_2
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_test_2.rgb)
        if thisPractice_test_2 != None:
            for paramName in thisPractice_test_2:
                exec('{} = thisPractice_test_2[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "test_immediate"-------
        continueRoutine = True
        # update component parameters for each repeat
        immediate_test_resp.reset()
        key_resp_3.keys = []
        key_resp_3.rt = []
        _key_resp_3_allKeys = []
        # keep track of which components have finished
        test_immediateComponents = [immediate_test_resp, key_resp_3, text_6]
        for thisComponent in test_immediateComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        test_immediateClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "test_immediate"-------
        while continueRoutine:
            # get current time
            t = test_immediateClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=test_immediateClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *immediate_test_resp* updates
            if immediate_test_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                immediate_test_resp.frameNStart = frameN  # exact frame index
                immediate_test_resp.tStart = t  # local t and not account for scr refresh
                immediate_test_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(immediate_test_resp, 'tStartRefresh')  # time at next scr refresh
                immediate_test_resp.setAutoDraw(True)
            
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
                theseKeys = key_resp_3.getKeys(keyList=['return'], waitRelease=False)
                _key_resp_3_allKeys.extend(theseKeys)
                if len(_key_resp_3_allKeys):
                    key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                    key_resp_3.rt = _key_resp_3_allKeys[-1].rt
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
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in test_immediateComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "test_immediate"-------
        for thisComponent in test_immediateComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData("serial_position_resp", resp_i)
        thisExp.addData("trial_n", trial_n)
        thisExp.addData("block_n", block_n)
        
        resp_i += 1
        
        practice_test_2.addData('immediate_test_resp.text',immediate_test_resp.text)
        # the Routine "test_immediate" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed trial_length repeats of 'practice_test_2'
    
    
    # ------Prepare to start Routine "feedback_1"-------
    continueRoutine = True
    # update component parameters for each repeat
    feedback_msg = f"The correct words were: {trial_words[0]}, {trial_words[1]}, {trial_words[2]}, and {trial_words[3]}\n\n\nPress SPACE to continue."
    text_8.setText(feedback_msg)
    key_resp_11.keys = []
    key_resp_11.rt = []
    _key_resp_11_allKeys = []
    # keep track of which components have finished
    feedback_1Components = [text_8, key_resp_11]
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
        
        # *text_8* updates
        if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_8.frameNStart = frameN  # exact frame index
            text_8.tStart = t  # local t and not account for scr refresh
            text_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
            text_8.setAutoDraw(True)
        
        # *key_resp_11* updates
        waitOnFlip = False
        if key_resp_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_11.frameNStart = frameN  # exact frame index
            key_resp_11.tStart = t  # local t and not account for scr refresh
            key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
            key_resp_11.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_11.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_11.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_11.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_11_allKeys.extend(theseKeys)
            if len(_key_resp_11_allKeys):
                key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
                key_resp_11.rt = _key_resp_11_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
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
    i += trial_length
    
    # the Routine "feedback_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 2.0 repeats of 'practice_3'


# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
words_presented = []
trial_n = 0
# keep track of which components have finished
instructionsComponents = [text_instructions, key_resp]
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
    
    # *text_instructions* updates
    if text_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instructions.frameNStart = frameN  # exact frame index
        text_instructions.tStart = t  # local t and not account for scr refresh
        text_instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instructions, 'tStartRefresh')  # time at next scr refresh
        text_instructions.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
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

# ------Prepare to start Routine "instructions_mw"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_14.keys = []
key_resp_14.rt = []
_key_resp_14_allKeys = []
# keep track of which components have finished
instructions_mwComponents = [text_instructions_5, key_resp_14]
for thisComponent in instructions_mwComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_mwClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_mw"-------
while continueRoutine:
    # get current time
    t = instructions_mwClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_mwClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_instructions_5* updates
    if text_instructions_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instructions_5.frameNStart = frameN  # exact frame index
        text_instructions_5.tStart = t  # local t and not account for scr refresh
        text_instructions_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instructions_5, 'tStartRefresh')  # time at next scr refresh
        text_instructions_5.setAutoDraw(True)
    
    # *key_resp_14* updates
    waitOnFlip = False
    if key_resp_14.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_14.frameNStart = frameN  # exact frame index
        key_resp_14.tStart = t  # local t and not account for scr refresh
        key_resp_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_14, 'tStartRefresh')  # time at next scr refresh
        key_resp_14.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_14.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_14.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_14.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_14.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_14_allKeys.extend(theseKeys)
        if len(_key_resp_14_allKeys):
            key_resp_14.keys = _key_resp_14_allKeys[-1].name  # just the last key pressed
            key_resp_14.rt = _key_resp_14_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_mwComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_mw"-------
for thisComponent in instructions_mwComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_mw" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "mw_meaning"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_16.keys = []
key_resp_16.rt = []
_key_resp_16_allKeys = []
# keep track of which components have finished
mw_meaningComponents = [text_11, key_resp_16]
for thisComponent in mw_meaningComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
mw_meaningClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "mw_meaning"-------
while continueRoutine:
    # get current time
    t = mw_meaningClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=mw_meaningClock)
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
    
    # *key_resp_16* updates
    waitOnFlip = False
    if key_resp_16.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_16.frameNStart = frameN  # exact frame index
        key_resp_16.tStart = t  # local t and not account for scr refresh
        key_resp_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_16, 'tStartRefresh')  # time at next scr refresh
        key_resp_16.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_16.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_16.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_16.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_16.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_16_allKeys.extend(theseKeys)
        if len(_key_resp_16_allKeys):
            key_resp_16.keys = _key_resp_16_allKeys[-1].name  # just the last key pressed
            key_resp_16.rt = _key_resp_16_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in mw_meaningComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "mw_meaning"-------
for thisComponent in mw_meaningComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "mw_meaning" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
block_immediate = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('block_conds.csv'),
    seed=None, name='block_immediate')
thisExp.addLoop(block_immediate)  # add the loop to the experiment
thisBlock_immediate = block_immediate.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock_immediate.rgb)
if thisBlock_immediate != None:
    for paramName in thisBlock_immediate:
        exec('{} = thisBlock_immediate[paramName]'.format(paramName))

for thisBlock_immediate in block_immediate:
    currentLoop = block_immediate
    # abbreviate parameter names if possible (e.g. rgb = thisBlock_immediate.rgb)
    if thisBlock_immediate != None:
        for paramName in thisBlock_immediate:
            exec('{} = thisBlock_immediate[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials_immediate = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_immediate')
    thisExp.addLoop(trials_immediate)  # add the loop to the experiment
    thisTrials_immediate = trials_immediate.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_immediate.rgb)
    if thisTrials_immediate != None:
        for paramName in thisTrials_immediate:
            exec('{} = thisTrials_immediate[paramName]'.format(paramName))
    
    for thisTrials_immediate in trials_immediate:
        currentLoop = trials_immediate
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_immediate.rgb)
        if thisTrials_immediate != None:
            for paramName in thisTrials_immediate:
                exec('{} = thisTrials_immediate[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trial_setup"-------
        continueRoutine = True
        # update component parameters for each repeat
        trial_words = words[i:(i+trial_length)]
        stim_n = 0
        resp_i = 0
        parity_n = 0
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
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        # keep track of which components have finished
        fixationComponents = [fix_cross]
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
            
            # *fix_cross* updates
            if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix_cross.frameNStart = frameN  # exact frame index
                fix_cross.tStart = t  # local t and not account for scr refresh
                fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
                fix_cross.setAutoDraw(True)
            if fix_cross.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix_cross.tStartRefresh + .5-frameTolerance:
                    # keep track of stop time/frame for later
                    fix_cross.tStop = t  # not accounting for scr refresh
                    fix_cross.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fix_cross, 'tStopRefresh')  # time at next scr refresh
                    fix_cross.setAutoDraw(False)
            
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
        
        # set up handler to look after randomisation of conditions etc
        stim_presentation_loop = data.TrialHandler(nReps=trial_length, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='stim_presentation_loop')
        thisExp.addLoop(stim_presentation_loop)  # add the loop to the experiment
        thisStim_presentation_loop = stim_presentation_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisStim_presentation_loop.rgb)
        if thisStim_presentation_loop != None:
            for paramName in thisStim_presentation_loop:
                exec('{} = thisStim_presentation_loop[paramName]'.format(paramName))
        
        for thisStim_presentation_loop in stim_presentation_loop:
            currentLoop = stim_presentation_loop
            # abbreviate parameter names if possible (e.g. rgb = thisStim_presentation_loop.rgb)
            if thisStim_presentation_loop != None:
                for paramName in thisStim_presentation_loop:
                    exec('{} = thisStim_presentation_loop[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "stim_present"-------
            continueRoutine = True
            routineTimer.add(1.000000)
            # update component parameters for each repeat
            word_present = trial_words[stim_n]
            
            words_presented.append([word_present, stim_n, trial_n])
            stim.setText(word_present)
            # keep track of which components have finished
            stim_presentComponents = [stim]
            for thisComponent in stim_presentComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            stim_presentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "stim_present"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = stim_presentClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=stim_presentClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *stim* updates
                if stim.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                    # keep track of start time/frame for later
                    stim.frameNStart = frameN  # exact frame index
                    stim.tStart = t  # local t and not account for scr refresh
                    stim.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stim, 'tStartRefresh')  # time at next scr refresh
                    stim.setAutoDraw(True)
                if stim.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > stim.tStartRefresh + .9-frameTolerance:
                        # keep track of stop time/frame for later
                        stim.tStop = t  # not accounting for scr refresh
                        stim.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(stim, 'tStopRefresh')  # time at next scr refresh
                        stim.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in stim_presentComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "stim_present"-------
            for thisComponent in stim_presentComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData("word_presented", word_present)
            thisExp.addData("serial_position", stim_n)
            thisExp.addData("trial_n", trial_n)
            thisExp.addData("block_n", block_n)
            
            stim_n += 1
            
            
            # set up handler to look after randomisation of conditions etc
            parity_loop = data.TrialHandler(nReps=2.0, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=[None],
                seed=None, name='parity_loop')
            thisExp.addLoop(parity_loop)  # add the loop to the experiment
            thisParity_loop = parity_loop.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisParity_loop.rgb)
            if thisParity_loop != None:
                for paramName in thisParity_loop:
                    exec('{} = thisParity_loop[paramName]'.format(paramName))
            
            for thisParity_loop in parity_loop:
                currentLoop = parity_loop
                # abbreviate parameter names if possible (e.g. rgb = thisParity_loop.rgb)
                if thisParity_loop != None:
                    for paramName in thisParity_loop:
                        exec('{} = thisParity_loop[paramName]'.format(paramName))
                
                # ------Prepare to start Routine "parity"-------
                continueRoutine = True
                # update component parameters for each repeat
                shuffle(nums)
                parity_stim = nums[0]
                
                if parity_stim % 2 == 0:
                    corr_ans_parity = "e"
                elif parity_stim % 2 == 1:
                    corr_ans_parity = "o"
                text_parity.setOpacity(parity_disp)
                text_parity.setText(parity_stim)
                key_resp_parity.keys = []
                key_resp_parity.rt = []
                _key_resp_parity_allKeys = []
                # keep track of which components have finished
                parityComponents = [text_parity, key_resp_parity]
                for thisComponent in parityComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                parityClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
                frameN = -1
                
                # -------Run Routine "parity"-------
                while continueRoutine:
                    # get current time
                    t = parityClock.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=parityClock)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    # *text_parity* updates
                    if text_parity.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                        # keep track of start time/frame for later
                        text_parity.frameNStart = frameN  # exact frame index
                        text_parity.tStart = t  # local t and not account for scr refresh
                        text_parity.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(text_parity, 'tStartRefresh')  # time at next scr refresh
                        text_parity.setAutoDraw(True)
                    if text_parity.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > text_parity.tStartRefresh + parity_dur-frameTolerance:
                            # keep track of stop time/frame for later
                            text_parity.tStop = t  # not accounting for scr refresh
                            text_parity.frameNStop = frameN  # exact frame index
                            win.timeOnFlip(text_parity, 'tStopRefresh')  # time at next scr refresh
                            text_parity.setAutoDraw(False)
                    
                    # *key_resp_parity* updates
                    waitOnFlip = False
                    if key_resp_parity.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        key_resp_parity.frameNStart = frameN  # exact frame index
                        key_resp_parity.tStart = t  # local t and not account for scr refresh
                        key_resp_parity.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(key_resp_parity, 'tStartRefresh')  # time at next scr refresh
                        key_resp_parity.status = STARTED
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(key_resp_parity.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(key_resp_parity.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if key_resp_parity.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > key_resp_parity.tStartRefresh + parity_dur-frameTolerance:
                            # keep track of stop time/frame for later
                            key_resp_parity.tStop = t  # not accounting for scr refresh
                            key_resp_parity.frameNStop = frameN  # exact frame index
                            win.timeOnFlip(key_resp_parity, 'tStopRefresh')  # time at next scr refresh
                            key_resp_parity.status = FINISHED
                    if key_resp_parity.status == STARTED and not waitOnFlip:
                        theseKeys = key_resp_parity.getKeys(keyList=['e','o'], waitRelease=False)
                        _key_resp_parity_allKeys.extend(theseKeys)
                        if len(_key_resp_parity_allKeys):
                            key_resp_parity.keys = _key_resp_parity_allKeys[0].name  # just the first key pressed
                            key_resp_parity.rt = _key_resp_parity_allKeys[0].rt
                            # was this correct?
                            if (key_resp_parity.keys == str(corr_ans_parity)) or (key_resp_parity.keys == corr_ans_parity):
                                key_resp_parity.corr = 1
                            else:
                                key_resp_parity.corr = 0
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in parityComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # -------Ending Routine "parity"-------
                for thisComponent in parityComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                thisExp.addData("trial_n", trial_n)
                thisExp.addData("block_n", block_n)
                thisExp.addData("parity_n", parity_n)
                thisExp.addData("parity_stim", parity_stim)
                
                parity_n += 1
                # check responses
                if key_resp_parity.keys in ['', [], None]:  # No response was made
                    key_resp_parity.keys = None
                    # was no response the correct answer?!
                    if str(corr_ans_parity).lower() == 'none':
                       key_resp_parity.corr = 1;  # correct non-response
                    else:
                       key_resp_parity.corr = 0;  # failed to respond (incorrectly)
                # store data for parity_loop (TrialHandler)
                parity_loop.addData('key_resp_parity.keys',key_resp_parity.keys)
                parity_loop.addData('key_resp_parity.corr', key_resp_parity.corr)
                if key_resp_parity.keys != None:  # we had a response
                    parity_loop.addData('key_resp_parity.rt', key_resp_parity.rt)
                # the Routine "parity" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed 2.0 repeats of 'parity_loop'
            
            thisExp.nextEntry()
            
        # completed trial_length repeats of 'stim_presentation_loop'
        
        
        # set up handler to look after randomisation of conditions etc
        test_immediate_loop = data.TrialHandler(nReps=trial_length, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='test_immediate_loop')
        thisExp.addLoop(test_immediate_loop)  # add the loop to the experiment
        thisTest_immediate_loop = test_immediate_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTest_immediate_loop.rgb)
        if thisTest_immediate_loop != None:
            for paramName in thisTest_immediate_loop:
                exec('{} = thisTest_immediate_loop[paramName]'.format(paramName))
        
        for thisTest_immediate_loop in test_immediate_loop:
            currentLoop = test_immediate_loop
            # abbreviate parameter names if possible (e.g. rgb = thisTest_immediate_loop.rgb)
            if thisTest_immediate_loop != None:
                for paramName in thisTest_immediate_loop:
                    exec('{} = thisTest_immediate_loop[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "test_immediate"-------
            continueRoutine = True
            # update component parameters for each repeat
            immediate_test_resp.reset()
            key_resp_3.keys = []
            key_resp_3.rt = []
            _key_resp_3_allKeys = []
            # keep track of which components have finished
            test_immediateComponents = [immediate_test_resp, key_resp_3, text_6]
            for thisComponent in test_immediateComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            test_immediateClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "test_immediate"-------
            while continueRoutine:
                # get current time
                t = test_immediateClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=test_immediateClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *immediate_test_resp* updates
                if immediate_test_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    immediate_test_resp.frameNStart = frameN  # exact frame index
                    immediate_test_resp.tStart = t  # local t and not account for scr refresh
                    immediate_test_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(immediate_test_resp, 'tStartRefresh')  # time at next scr refresh
                    immediate_test_resp.setAutoDraw(True)
                
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
                    theseKeys = key_resp_3.getKeys(keyList=['return'], waitRelease=False)
                    _key_resp_3_allKeys.extend(theseKeys)
                    if len(_key_resp_3_allKeys):
                        key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                        key_resp_3.rt = _key_resp_3_allKeys[-1].rt
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
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in test_immediateComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "test_immediate"-------
            for thisComponent in test_immediateComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData("serial_position_resp", resp_i)
            thisExp.addData("trial_n", trial_n)
            thisExp.addData("block_n", block_n)
            
            resp_i += 1
            
            test_immediate_loop.addData('immediate_test_resp.text',immediate_test_resp.text)
            # the Routine "test_immediate" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed trial_length repeats of 'test_immediate_loop'
        
        
        # ------Prepare to start Routine "mw_probe"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_mw_probe.keys = []
        key_resp_mw_probe.rt = []
        _key_resp_mw_probe_allKeys = []
        i += trial_length
        
        key_resp_4.keys = []
        key_resp_4.rt = []
        _key_resp_4_allKeys = []
        # keep track of which components have finished
        mw_probeComponents = [text_2, key_resp_mw_probe, text_3, key_resp_4]
        for thisComponent in mw_probeComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        mw_probeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "mw_probe"-------
        while continueRoutine:
            # get current time
            t = mw_probeClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=mw_probeClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_2* updates
            if text_2.status == NOT_STARTED and mw_dur:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                text_2.setAutoDraw(True)
            
            # *key_resp_mw_probe* updates
            waitOnFlip = False
            if key_resp_mw_probe.status == NOT_STARTED and mw_dur:
                # keep track of start time/frame for later
                key_resp_mw_probe.frameNStart = frameN  # exact frame index
                key_resp_mw_probe.tStart = t  # local t and not account for scr refresh
                key_resp_mw_probe.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_mw_probe, 'tStartRefresh')  # time at next scr refresh
                key_resp_mw_probe.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_mw_probe.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_mw_probe.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_mw_probe.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_mw_probe.getKeys(keyList=['1','2','3','4','5','6'], waitRelease=False)
                _key_resp_mw_probe_allKeys.extend(theseKeys)
                if len(_key_resp_mw_probe_allKeys):
                    key_resp_mw_probe.keys = _key_resp_mw_probe_allKeys[0].name  # just the first key pressed
                    key_resp_mw_probe.rt = _key_resp_mw_probe_allKeys[0].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_3* updates
            if text_3.status == NOT_STARTED and not mw_dur:
                # keep track of start time/frame for later
                text_3.frameNStart = frameN  # exact frame index
                text_3.tStart = t  # local t and not account for scr refresh
                text_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
                text_3.setAutoDraw(True)
            
            # *key_resp_4* updates
            waitOnFlip = False
            if key_resp_4.status == NOT_STARTED and not mw_dur:
                # keep track of start time/frame for later
                key_resp_4.frameNStart = frameN  # exact frame index
                key_resp_4.tStart = t  # local t and not account for scr refresh
                key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
                key_resp_4.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            if key_resp_4.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_4_allKeys.extend(theseKeys)
                if len(_key_resp_4_allKeys):
                    key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                    key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in mw_probeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "mw_probe"-------
        for thisComponent in mw_probeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp_mw_probe.keys in ['', [], None]:  # No response was made
            key_resp_mw_probe.keys = None
        trials_immediate.addData('key_resp_mw_probe.keys',key_resp_mw_probe.keys)
        if key_resp_mw_probe.keys != None:  # we had a response
            trials_immediate.addData('key_resp_mw_probe.rt', key_resp_mw_probe.rt)
        thisExp.addData("trial_n", trial_n)
        trial_n += 1
        # the Routine "mw_probe" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials_immediate'
    
    
    # ------Prepare to start Routine "end_block"-------
    continueRoutine = True
    # update component parameters for each repeat
    block_msg = f"You have reached the end of block {block_n} of {block_total}.\n\nPress SPACE to continue."
    text.setText(block_msg)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    end_blockComponents = [text, key_resp_2]
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
    while continueRoutine:
        # get current time
        t = end_blockClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=end_blockClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        
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
    block_n += 1
    # the Routine "end_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'block_immediate'


# ------Prepare to start Routine "distract_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
block_n = 1
block_total = 2
# keep track of which components have finished
distract_instructComponents = [text_4, key_resp_5]
for thisComponent in distract_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
distract_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "distract_instruct"-------
while continueRoutine:
    # get current time
    t = distract_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=distract_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
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
    for thisComponent in distract_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "distract_instruct"-------
for thisComponent in distract_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "distract_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_distract = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('distract_cond.csv'),
    seed=None, name='trials_distract')
thisExp.addLoop(trials_distract)  # add the loop to the experiment
thisTrials_distract = trials_distract.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_distract.rgb)
if thisTrials_distract != None:
    for paramName in thisTrials_distract:
        exec('{} = thisTrials_distract[paramName]'.format(paramName))

for thisTrials_distract in trials_distract:
    currentLoop = trials_distract
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_distract.rgb)
    if thisTrials_distract != None:
        for paramName in thisTrials_distract:
            exec('{} = thisTrials_distract[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fix_cross]
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
        
        # *fix_cross* updates
        if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_cross.frameNStart = frameN  # exact frame index
            fix_cross.tStart = t  # local t and not account for scr refresh
            fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
            fix_cross.setAutoDraw(True)
        if fix_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_cross.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                fix_cross.tStop = t  # not accounting for scr refresh
                fix_cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_cross, 'tStopRefresh')  # time at next scr refresh
                fix_cross.setAutoDraw(False)
        
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
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_distract'


# ------Prepare to start Routine "ltm_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
ltm_length = len(words_presented)
# keep track of which components have finished
ltm_instructComponents = [text_7, key_resp_10]
for thisComponent in ltm_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ltm_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ltm_instruct"-------
while continueRoutine:
    # get current time
    t = ltm_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ltm_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_7* updates
    if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_7.frameNStart = frameN  # exact frame index
        text_7.tStart = t  # local t and not account for scr refresh
        text_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
        text_7.setAutoDraw(True)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_10.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_10.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ltm_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ltm_instruct"-------
for thisComponent in ltm_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "ltm_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_delay = data.TrialHandler(nReps=ltm_length, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_delay')
thisExp.addLoop(trials_delay)  # add the loop to the experiment
thisTrials_delay = trials_delay.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_delay.rgb)
if thisTrials_delay != None:
    for paramName in thisTrials_delay:
        exec('{} = thisTrials_delay[paramName]'.format(paramName))

for thisTrials_delay in trials_delay:
    currentLoop = trials_delay
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_delay.rgb)
    if thisTrials_delay != None:
        for paramName in thisTrials_delay:
            exec('{} = thisTrials_delay[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fix_cross]
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
        
        # *fix_cross* updates
        if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_cross.frameNStart = frameN  # exact frame index
            fix_cross.tStart = t  # local t and not account for scr refresh
            fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
            fix_cross.setAutoDraw(True)
        if fix_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_cross.tStartRefresh + .5-frameTolerance:
                # keep track of stop time/frame for later
                fix_cross.tStop = t  # not accounting for scr refresh
                fix_cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_cross, 'tStopRefresh')  # time at next scr refresh
                fix_cross.setAutoDraw(False)
        
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
    
    # ------Prepare to start Routine "stim_present_delay"-------
    continueRoutine = True
    # update component parameters for each repeat
    stim_pos = ["left", "right"]
    shuffle(stim_pos)
    
    target_pos = stim_pos[0]
    lure_pos = stim_pos[1]
    
    corr_ans_ltm = target_pos
    
    if target_pos == "left":
        target_coord = (-.2, 0)
    elif target_pos == "right":
        target_coord = (.2, 0)
        
    if lure_pos == "left":
        lure_coord = (-.2, 0)
    elif lure_pos == "right":
        lure_coord = (.2, 0)
    target_text.setPos(target_coord)
    target_text.setText(words_presented[trial_n_ltm][0])
    lure_text.setPos(lure_coord)
    lure_text.setText(words.pop()[0])
    key_resp_ltm.keys = []
    key_resp_ltm.rt = []
    _key_resp_ltm_allKeys = []
    # keep track of which components have finished
    stim_present_delayComponents = [target_text, lure_text, key_resp_ltm]
    for thisComponent in stim_present_delayComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    stim_present_delayClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stim_present_delay"-------
    while continueRoutine:
        # get current time
        t = stim_present_delayClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=stim_present_delayClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *target_text* updates
        if target_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            target_text.frameNStart = frameN  # exact frame index
            target_text.tStart = t  # local t and not account for scr refresh
            target_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target_text, 'tStartRefresh')  # time at next scr refresh
            target_text.setAutoDraw(True)
        
        # *lure_text* updates
        if lure_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            lure_text.frameNStart = frameN  # exact frame index
            lure_text.tStart = t  # local t and not account for scr refresh
            lure_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(lure_text, 'tStartRefresh')  # time at next scr refresh
            lure_text.setAutoDraw(True)
        
        # *key_resp_ltm* updates
        waitOnFlip = False
        if key_resp_ltm.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_ltm.frameNStart = frameN  # exact frame index
            key_resp_ltm.tStart = t  # local t and not account for scr refresh
            key_resp_ltm.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_ltm, 'tStartRefresh')  # time at next scr refresh
            key_resp_ltm.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_ltm.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_ltm.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_ltm.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_ltm.getKeys(keyList=['left','right'], waitRelease=False)
            _key_resp_ltm_allKeys.extend(theseKeys)
            if len(_key_resp_ltm_allKeys):
                key_resp_ltm.keys = _key_resp_ltm_allKeys[-1].name  # just the last key pressed
                key_resp_ltm.rt = _key_resp_ltm_allKeys[-1].rt
                # was this correct?
                if (key_resp_ltm.keys == str(corr_ans_ltm)) or (key_resp_ltm.keys == corr_ans_ltm):
                    key_resp_ltm.corr = 1
                else:
                    key_resp_ltm.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in stim_present_delayComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stim_present_delay"-------
    for thisComponent in stim_present_delayComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData("trial_n_ltm", trial_n_ltm)
    thisExp.addData("presented_serial_position", words_presented[1])
    thisExp.addData("presented_trial_n", words_presented[2])
    thisExp.addData("target_position", target_pos)
    
    trial_n_ltm += 1
    
    
    
    # check responses
    if key_resp_ltm.keys in ['', [], None]:  # No response was made
        key_resp_ltm.keys = None
        # was no response the correct answer?!
        if str(corr_ans_ltm).lower() == 'none':
           key_resp_ltm.corr = 1;  # correct non-response
        else:
           key_resp_ltm.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_delay (TrialHandler)
    trials_delay.addData('key_resp_ltm.keys',key_resp_ltm.keys)
    trials_delay.addData('key_resp_ltm.corr', key_resp_ltm.corr)
    if key_resp_ltm.keys != None:  # we had a response
        trials_delay.addData('key_resp_ltm.rt', key_resp_ltm.rt)
    # the Routine "stim_present_delay" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed ltm_length repeats of 'trials_delay'


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
endComponents = [text_12]
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
    
    # *text_12* updates
    if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_12.frameNStart = frameN  # exact frame index
        text_12.tStart = t  # local t and not account for scr refresh
        text_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
        text_12.setAutoDraw(True)
    
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
