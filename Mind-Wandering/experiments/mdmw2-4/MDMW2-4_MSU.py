#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Wed Nov 10 13:57:09 2021
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
expName = 'MDMW2-3'  # from the Builder filename that created this script
expInfo = {'participant': '', 'version': '2.4'}
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
    originPath='/Users/kellycotton/Dropbox/mind-wandering2_4_MSU/MDMW2-4_MSU.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='#A9A9A9', colorSpace='hex',
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

# Initialize components for Routine "start_code"
start_codeClock = core.Clock()
stim_positions = [(0,.125), (0,-.125), 
(.125,0), (-.125, 0),
(.125,.125), (.125,-.125),
(-.125,.125), (-.125,-.125)]

cog_load_stim = [1,2,3,4,5,6,7,8,9]

position_selection = [0,1,2,3]

mask_size = [(0.025), (0.025)]

colors = ["Crimson", "Chartreuse", "Blue", 
"Yellow", "MediumOrchid", "DarkOrange", 
"DodgerBlue", "Turquoise", "MediumVioletRed"]
fix_time = .5
stim_time = .5
mask_onset = 1 # should equal (fix_time + stim_time)
mask_time = .1
delay_onset = 1.1 # should equal (fix_time + stim_time + mask_time)
delay_time = .8
block_n = 0
corr_count = 0
block_total = 4
import random

# Initialize components for Routine "exp_instructions"
exp_instructionsClock = core.Clock()
text_10 = visual.TextStim(win=win, name='text_10',
    text='Welcome to the experiment! \n\nIn this experiment, you will be completing a series of memory problems where you remember colored squares while judging whether numbers are even or odd. \n\nYou will also tell us what you were thinking about during each trial. \n\nBefore you get started, you will practice each of the tasks individually.\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "practice_instructions1"
practice_instructions1Clock = core.Clock()
text_instructions_2 = visual.TextStim(win=win, name='text_instructions_2',
    text='Let’s practice the first task.\nIn this task, you will first see a group colored squares, followed by a group of jumbled squares that will replace the original colored squares.\n\nAfter a brief delay, you will see one square in the same location as one of the previously presented squares. Your job is to determine if this square is the same color as the original square.\n\nPress S if it is the same color and D if it is a different color.\n\nDuring the practice, you will receive feedback about your performance. \n\nPress SPACE to start the practice.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "practice_presentation"
practice_presentationClock = core.Clock()
fixation_2 = visual.ShapeStim(
    win=win, name='fixation_2', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-1.0, interpolate=True)
stim1_2 = visual.Rect(
    win=win, name='stim1_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)
stim2_2 = visual.Rect(
    win=win, name='stim2_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
stim3_2 = visual.Rect(
    win=win, name='stim3_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)
stim4_2 = visual.Rect(
    win=win, name='stim4_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-5.0, interpolate=True)
mask1 = visual.Rect(
    win=win, name='mask1',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
mask1_5 = visual.Rect(
    win=win, name='mask1_5',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-7.0, interpolate=True)
mask1_6 = visual.Rect(
    win=win, name='mask1_6',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-8.0, interpolate=True)
mask1_7 = visual.Rect(
    win=win, name='mask1_7',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-9.0, interpolate=True)
mask2 = visual.Rect(
    win=win, name='mask2',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-10.0, interpolate=True)
mask2_5 = visual.Rect(
    win=win, name='mask2_5',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-11.0, interpolate=True)
mask2_6 = visual.Rect(
    win=win, name='mask2_6',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-12.0, interpolate=True)
mask2_7 = visual.Rect(
    win=win, name='mask2_7',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-13.0, interpolate=True)
mask3 = visual.Rect(
    win=win, name='mask3',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-14.0, interpolate=True)
mask3_5 = visual.Rect(
    win=win, name='mask3_5',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-15.0, interpolate=True)
mask3_6 = visual.Rect(
    win=win, name='mask3_6',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-16.0, interpolate=True)
mask3_7 = visual.Rect(
    win=win, name='mask3_7',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-17.0, interpolate=True)
mask4 = visual.Rect(
    win=win, name='mask4',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-18.0, interpolate=True)
mask4_5 = visual.Rect(
    win=win, name='mask4_5',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-19.0, interpolate=True)
mask4_6 = visual.Rect(
    win=win, name='mask4_6',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-20.0, interpolate=True)
mask4_7 = visual.Rect(
    win=win, name='mask4_7',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-21.0, interpolate=True)

# Initialize components for Routine "practice_response_presentation"
practice_response_presentationClock = core.Clock()
resp1_2 = visual.Rect(
    win=win, name='resp1_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
key_resp_prac = keyboard.Keyboard()

# Initialize components for Routine "feedback_presentation"
feedback_presentationClock = core.Clock()
msg = 'no message'

text_3 = visual.TextStim(win=win, name='text_3',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "practice_instructions2"
practice_instructions2Clock = core.Clock()
text_instructions_3 = visual.TextStim(win=win, name='text_instructions_3',
    text='Now, we’ll practice the second task.\nIn this task, you may see a number in the center of the screen.\n\nYour job is to decide if it is even or odd.\n\nPlease try to respond as quickly and accurately as possible.\n\nPress I if the number is even and O if the number is odd.\n\nOn some trials, you will not see a number. Do not press any keys. \n\nDuring the practice, you will receive feedback about your performance. \n\nPress SPACE to start the practice.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "practice_cog_load"
practice_cog_loadClock = core.Clock()
text_cogload_2 = visual.TextStim(win=win, name='text_cogload_2',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_load_prac = keyboard.Keyboard()

# Initialize components for Routine "feedback_cogload"
feedback_cogloadClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_8 = keyboard.Keyboard()

# Initialize components for Routine "practice_instructions3"
practice_instructions3Clock = core.Clock()
text_instructions_4 = visual.TextStim(win=win, name='text_instructions_4',
    text='Now, we are going to combine the colored square task and the number task.\n\nFirst, you will see a group colored squares, followed by a group of jumbled squares.\n\nYou may then see a series of numbers in the center of the screen. Again, you will decide if each number is even or odd. You might see 0, 2, or 4 numbers.\n\nFinally, after you have seen all of the numbers, you will see a single colored square. Just like before, you have to decide if that colored square is the same color as the original square in that location.\n\nRemember, for the colored square task, press S if the color is the same and D if the color is different.\n\nFor the number task, press I if the number is even and O if the number is odd.\n\nPress SPACE to start the practice.',
    font='Open Sans',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_9 = keyboard.Keyboard()

# Initialize components for Routine "practice_presentation"
practice_presentationClock = core.Clock()
fixation_2 = visual.ShapeStim(
    win=win, name='fixation_2', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-1.0, interpolate=True)
stim1_2 = visual.Rect(
    win=win, name='stim1_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)
stim2_2 = visual.Rect(
    win=win, name='stim2_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
stim3_2 = visual.Rect(
    win=win, name='stim3_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)
stim4_2 = visual.Rect(
    win=win, name='stim4_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-5.0, interpolate=True)
mask1 = visual.Rect(
    win=win, name='mask1',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
mask1_5 = visual.Rect(
    win=win, name='mask1_5',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-7.0, interpolate=True)
mask1_6 = visual.Rect(
    win=win, name='mask1_6',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-8.0, interpolate=True)
mask1_7 = visual.Rect(
    win=win, name='mask1_7',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-9.0, interpolate=True)
mask2 = visual.Rect(
    win=win, name='mask2',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-10.0, interpolate=True)
mask2_5 = visual.Rect(
    win=win, name='mask2_5',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-11.0, interpolate=True)
mask2_6 = visual.Rect(
    win=win, name='mask2_6',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-12.0, interpolate=True)
mask2_7 = visual.Rect(
    win=win, name='mask2_7',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-13.0, interpolate=True)
mask3 = visual.Rect(
    win=win, name='mask3',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-14.0, interpolate=True)
mask3_5 = visual.Rect(
    win=win, name='mask3_5',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-15.0, interpolate=True)
mask3_6 = visual.Rect(
    win=win, name='mask3_6',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-16.0, interpolate=True)
mask3_7 = visual.Rect(
    win=win, name='mask3_7',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-17.0, interpolate=True)
mask4 = visual.Rect(
    win=win, name='mask4',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-18.0, interpolate=True)
mask4_5 = visual.Rect(
    win=win, name='mask4_5',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-19.0, interpolate=True)
mask4_6 = visual.Rect(
    win=win, name='mask4_6',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-20.0, interpolate=True)
mask4_7 = visual.Rect(
    win=win, name='mask4_7',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-21.0, interpolate=True)

# Initialize components for Routine "delay"
delayClock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text=' ',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "practice_cog_load"
practice_cog_loadClock = core.Clock()
text_cogload_2 = visual.TextStim(win=win, name='text_cogload_2',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_load_prac = keyboard.Keyboard()

# Initialize components for Routine "practice_response_presentation"
practice_response_presentationClock = core.Clock()
resp1_2 = visual.Rect(
    win=win, name='resp1_2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
key_resp_prac = keyboard.Keyboard()

# Initialize components for Routine "feedback_presentation"
feedback_presentationClock = core.Clock()
msg = 'no message'

text_3 = visual.TextStim(win=win, name='text_3',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "end_block"
end_blockClock = core.Clock()
msg='no message'
block_message = 'no message'

text_block_end = visual.TextStim(win=win, name='text_block_end',
    text='',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_2 = visual.TextStim(win=win, name='text_2',
    text='Please take a short break.\n\nPress SPACE when you are ready to begin again.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
text_instructions = visual.TextStim(win=win, name='text_instructions',
    text='Now we are going to begin the real experiment.\n\nEverything will be the same as in the practice, but you will no longer receive feedback. \n\nAfter each trial you will be asked to indicate what you were just thinking about. It is perfectly normal to think about things that are not related to the task. \n\nWe will give you several categories of things that people might think about during tasks like these. Please try your best to honestly assess your thoughts and choose a category that best describes your thoughts at the time when we ask.\n\nPress SPACE to continue.',
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
    text='Below are the different options and corresponding number that you will press:\n\n1) The task: for thoughts about task stimuli, required responses, or task goals\n2) Task experience/performance: for thoughts\nabout your performance or task difficulty \n3) Everyday things: for thoughts about normal events in the recent or distant past or future\n4) Current state of being: for thoughts about your physical or emotional state \n5) Personal worries: for thoughts about your life concerns\n6) Daydreams: for fantasies or thoughts disconnected from reality\n7) External environment: for thoughts about objects or task unrelated events in the room\n8) Other: for any thoughts not captured by the other choices\n\nWhen you are ready to begin the experiment, press SPACE.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_16 = keyboard.Keyboard()

# Initialize components for Routine "key_reminder"
key_reminderClock = core.Clock()
text_remind = visual.TextStim(win=win, name='text_remind',
    text='Remember\n\nFor the colored square task:\nS = same\nD = different\n\nFor the even/odd task:\nI = even\nO = odd\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_12 = keyboard.Keyboard()

# Initialize components for Routine "stimulus_presentation"
stimulus_presentationClock = core.Clock()
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-1.0, interpolate=True)
stim1 = visual.Rect(
    win=win, name='stim1',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)
stim2 = visual.Rect(
    win=win, name='stim2',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
stim3 = visual.Rect(
    win=win, name='stim3',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)
stim4 = visual.Rect(
    win=win, name='stim4',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-5.0, interpolate=True)
mask1_1 = visual.Rect(
    win=win, name='mask1_1',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
mask1_2 = visual.Rect(
    win=win, name='mask1_2',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-7.0, interpolate=True)
mask1_3 = visual.Rect(
    win=win, name='mask1_3',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-8.0, interpolate=True)
mask1_4 = visual.Rect(
    win=win, name='mask1_4',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-9.0, interpolate=True)
mask2_1 = visual.Rect(
    win=win, name='mask2_1',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-10.0, interpolate=True)
mask2_2 = visual.Rect(
    win=win, name='mask2_2',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-11.0, interpolate=True)
mask2_3 = visual.Rect(
    win=win, name='mask2_3',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-12.0, interpolate=True)
mask2_4 = visual.Rect(
    win=win, name='mask2_4',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-13.0, interpolate=True)
mask3_1 = visual.Rect(
    win=win, name='mask3_1',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-14.0, interpolate=True)
mask3_2 = visual.Rect(
    win=win, name='mask3_2',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-15.0, interpolate=True)
mask3_3 = visual.Rect(
    win=win, name='mask3_3',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-16.0, interpolate=True)
mask3_4 = visual.Rect(
    win=win, name='mask3_4',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-17.0, interpolate=True)
mask4_1 = visual.Rect(
    win=win, name='mask4_1',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-18.0, interpolate=True)
mask4_2 = visual.Rect(
    win=win, name='mask4_2',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-19.0, interpolate=True)
mask4_3 = visual.Rect(
    win=win, name='mask4_3',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-20.0, interpolate=True)
mask4_4 = visual.Rect(
    win=win, name='mask4_4',
    width=(mask_size[0], mask_size[1])[0], height=(mask_size[0], mask_size[1])[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-21.0, interpolate=True)

# Initialize components for Routine "delay"
delayClock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text=' ',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "cog_load"
cog_loadClock = core.Clock()
text_cogload = visual.TextStim(win=win, name='text_cogload',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_load = keyboard.Keyboard()

# Initialize components for Routine "stimulus_response"
stimulus_responseClock = core.Clock()
resp1 = visual.Rect(
    win=win, name='resp1',
    width=(0.05, 0.05)[0], height=(0.05, 0.05)[1],
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
key_resp_stimulus = keyboard.Keyboard()

# Initialize components for Routine "mw_probe"
mw_probeClock = core.Clock()
mw_text = visual.TextStim(win=win, name='mw_text',
    text='What were you just thinking about?\n\n1) The task\n2) Task experience/performance\n3) Everyday things\n4) Current state of being\n5) Personal worries\n6) Daydreams\n7) External environment\n8) Other\n\nSelect an option to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_mw = keyboard.Keyboard()

# Initialize components for Routine "feedback_trials"
feedback_trialsClock = core.Clock()
msg = 'no message'

text_13 = visual.TextStim(win=win, name='text_13',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_17 = keyboard.Keyboard()

# Initialize components for Routine "end_block"
end_blockClock = core.Clock()
msg='no message'
block_message = 'no message'

text_block_end = visual.TextStim(win=win, name='text_block_end',
    text='',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_2 = visual.TextStim(win=win, name='text_2',
    text='Please take a short break.\n\nPress SPACE when you are ready to begin again.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "mw_q_instruct"
mw_q_instructClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Now we will present a collection of statements about your everyday experience. Using the 1-6 scale below, please indicate how frequently or infrequently you currently have each experience. Please answer according to what really reflects your experience rather than what you think your experience should be. Please treat each item separately from every other item.  ',
    font='Open Sans',
    pos=(0, .25), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_number_2 = visual.TextStim(win=win, name='text_number_2',
    text='1       2        3        4          5      6',
    font='Open Sans',
    pos=(0, .1), height=0.06, wrapWidth=500.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_text_2 = visual.TextStim(win=win, name='text_text_2',
    text='  Almost         Very        Somewhat     Somewhat           Very          Almost\n always     frequently    frequently     infrequently    infrequently    never',
    font='Open Sans',
    pos=(0, .03), height=0.03, wrapWidth=500.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
mw_q_continue_2 = visual.TextStim(win=win, name='mw_q_continue_2',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_15 = keyboard.Keyboard()

# Initialize components for Routine "mw_questions"
mw_questionsClock = core.Clock()
mw_q_text_2 = visual.TextStim(win=win, name='mw_q_text_2',
    text='',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_number = visual.TextStim(win=win, name='text_number',
    text='1       2        3        4          5      6',
    font='Open Sans',
    pos=(0, .1), height=0.06, wrapWidth=500.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_text = visual.TextStim(win=win, name='text_text',
    text='  Almost         Very        Somewhat     Somewhat           Very          Almost\n always     frequently    frequently     infrequently    infrequently    never',
    font='Open Sans',
    pos=(0, .03), height=0.03, wrapWidth=500.0, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
mw_q_text = visual.TextStim(win=win, name='mw_q_text',
    text='',
    font='Open Sans',
    pos=(0, -.15), height=0.06, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-4.0);
key_resp_mw_q = keyboard.Keyboard()
key_resp_13 = keyboard.Keyboard()
mw_q_continue = visual.TextStim(win=win, name='mw_q_continue',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "end"
endClock = core.Clock()
text_end = visual.TextStim(win=win, name='text_end',
    text='You have reached the end of the experiment.\n\nThank you for participating!\n\nPress SPACE to end.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "start_code"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
start_codeComponents = []
for thisComponent in start_codeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
start_codeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "start_code"-------
while continueRoutine:
    # get current time
    t = start_codeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=start_codeClock)
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
    for thisComponent in start_codeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "start_code"-------
for thisComponent in start_codeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "start_code" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "exp_instructions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
exp_instructionsComponents = [text_10, key_resp_4]
for thisComponent in exp_instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
exp_instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "exp_instructions"-------
while continueRoutine:
    # get current time
    t = exp_instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=exp_instructionsClock)
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
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
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
    for thisComponent in exp_instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "exp_instructions"-------
for thisComponent in exp_instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp_instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "practice_instructions1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
practice_instructions1Components = [text_instructions_2, key_resp_5]
for thisComponent in practice_instructions1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_instructions1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_instructions1"-------
while continueRoutine:
    # get current time
    t = practice_instructions1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_instructions1Clock)
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
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
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
    for thisComponent in practice_instructions1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_instructions1"-------
for thisComponent in practice_instructions1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practice_instructions1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_practice_presentation = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('exp_cond.xlsx'),
    seed=None, name='trials_practice_presentation')
thisExp.addLoop(trials_practice_presentation)  # add the loop to the experiment
thisTrials_practice_presentation = trials_practice_presentation.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_practice_presentation.rgb)
if thisTrials_practice_presentation != None:
    for paramName in thisTrials_practice_presentation:
        exec('{} = thisTrials_practice_presentation[paramName]'.format(paramName))

for thisTrials_practice_presentation in trials_practice_presentation:
    currentLoop = trials_practice_presentation
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_practice_presentation.rgb)
    if thisTrials_practice_presentation != None:
        for paramName in thisTrials_practice_presentation:
            exec('{} = thisTrials_practice_presentation[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "practice_presentation"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(stim_positions)
    shuffle(colors)
    
    stim1_2.setFillColor(colors[0])
    stim1_2.setPos([stim_positions[0]])
    stim1_2.setLineColor(colors[0])
    stim2_2.setFillColor(colors[1])
    stim2_2.setPos([stim_positions[1]])
    stim2_2.setLineColor(colors[1])
    stim3_2.setFillColor(colors[2])
    stim3_2.setPos([stim_positions[2]])
    stim3_2.setLineColor(colors[2])
    stim4_2.setFillColor(colors[3])
    stim4_2.setPos([stim_positions[3]])
    stim4_2.setLineColor(colors[3])
    mask1.setFillColor(colors[5])
    mask1.setPos((stim_positions[0][0]-.0125, stim_positions[0][1]-.0125))
    mask1.setLineColor(colors[5])
    mask1_5.setFillColor(colors[6])
    mask1_5.setPos((stim_positions[0][0]+.0125, stim_positions[0][1]-.0125))
    mask1_5.setLineColor(colors[6])
    mask1_6.setFillColor(colors[7])
    mask1_6.setPos((stim_positions[0][0]+.0125, stim_positions[0][1]+.0125))
    mask1_6.setLineColor(colors[7])
    mask1_7.setFillColor(colors[8])
    mask1_7.setPos((stim_positions[0][0]-.0125, stim_positions[0][1]+.0125))
    mask1_7.setLineColor(colors[8])
    mask2.setFillColor(colors[5])
    mask2.setPos((stim_positions[1][0]-.0125, stim_positions[1][1]-.0125))
    mask2.setLineColor(colors[5])
    mask2_5.setFillColor(colors[6])
    mask2_5.setPos((stim_positions[1][0]+.0125, stim_positions[1][1]-.0125))
    mask2_5.setLineColor(colors[6])
    mask2_6.setFillColor(colors[7])
    mask2_6.setPos((stim_positions[1][0]+.0125, stim_positions[1][1]+.0125))
    mask2_6.setLineColor(colors[7])
    mask2_7.setFillColor(colors[8])
    mask2_7.setPos((stim_positions[1][0]-.0125, stim_positions[1][1]+.0125))
    mask2_7.setLineColor(colors[8])
    mask3.setFillColor(colors[5])
    mask3.setPos((stim_positions[2][0]-.0125, stim_positions[2][1]-.0125))
    mask3.setLineColor(colors[5])
    mask3_5.setFillColor(colors[6])
    mask3_5.setPos((stim_positions[2][0]+.0125, stim_positions[2][1]-.0125))
    mask3_5.setLineColor(colors[6])
    mask3_6.setFillColor(colors[7])
    mask3_6.setPos((stim_positions[2][0]+.0125, stim_positions[2][1]+.0125))
    mask3_6.setLineColor(colors[7])
    mask3_7.setFillColor(colors[8])
    mask3_7.setPos((stim_positions[2][0]-.0125, stim_positions[2][1]+.0125))
    mask3_7.setLineColor(colors[8])
    mask4.setFillColor(colors[5])
    mask4.setPos((stim_positions[3][0]-.0125, stim_positions[3][1]-.0125))
    mask4.setLineColor(colors[5])
    mask4_5.setFillColor(colors[6])
    mask4_5.setPos((stim_positions[3][0]+.0125, stim_positions[3][1]-.0125))
    mask4_5.setLineColor(colors[6])
    mask4_6.setFillColor(colors[7])
    mask4_6.setPos((stim_positions[3][0]+.0125, stim_positions[3][1]+.0125))
    mask4_6.setLineColor(colors[7])
    mask4_7.setFillColor(colors[8])
    mask4_7.setPos((stim_positions[3][0]-.0125, stim_positions[3][1]+.0125))
    mask4_7.setLineColor(colors[8])
    # keep track of which components have finished
    practice_presentationComponents = [fixation_2, stim1_2, stim2_2, stim3_2, stim4_2, mask1, mask1_5, mask1_6, mask1_7, mask2, mask2_5, mask2_6, mask2_7, mask3, mask3_5, mask3_6, mask3_7, mask4, mask4_5, mask4_6, mask4_7]
    for thisComponent in practice_presentationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_presentation"-------
    while continueRoutine:
        # get current time
        t = practice_presentationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_presentationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_2* updates
        if fixation_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_2.frameNStart = frameN  # exact frame index
            fixation_2.tStart = t  # local t and not account for scr refresh
            fixation_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_2, 'tStartRefresh')  # time at next scr refresh
            fixation_2.setAutoDraw(True)
        if fixation_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_2.tStartRefresh + fix_time-frameTolerance:
                # keep track of stop time/frame for later
                fixation_2.tStop = t  # not accounting for scr refresh
                fixation_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_2, 'tStopRefresh')  # time at next scr refresh
                fixation_2.setAutoDraw(False)
        
        # *stim1_2* updates
        if stim1_2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim1_2.frameNStart = frameN  # exact frame index
            stim1_2.tStart = t  # local t and not account for scr refresh
            stim1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim1_2, 'tStartRefresh')  # time at next scr refresh
            stim1_2.setAutoDraw(True)
        if stim1_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim1_2.tStartRefresh + stim_time-frameTolerance:
                # keep track of stop time/frame for later
                stim1_2.tStop = t  # not accounting for scr refresh
                stim1_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim1_2, 'tStopRefresh')  # time at next scr refresh
                stim1_2.setAutoDraw(False)
        
        # *stim2_2* updates
        if stim2_2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim2_2.frameNStart = frameN  # exact frame index
            stim2_2.tStart = t  # local t and not account for scr refresh
            stim2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim2_2, 'tStartRefresh')  # time at next scr refresh
            stim2_2.setAutoDraw(True)
        if stim2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim2_2.tStartRefresh + stim_time-frameTolerance:
                # keep track of stop time/frame for later
                stim2_2.tStop = t  # not accounting for scr refresh
                stim2_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim2_2, 'tStopRefresh')  # time at next scr refresh
                stim2_2.setAutoDraw(False)
        
        # *stim3_2* updates
        if stim3_2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim3_2.frameNStart = frameN  # exact frame index
            stim3_2.tStart = t  # local t and not account for scr refresh
            stim3_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim3_2, 'tStartRefresh')  # time at next scr refresh
            stim3_2.setAutoDraw(True)
        if stim3_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim3_2.tStartRefresh + stim_time-frameTolerance:
                # keep track of stop time/frame for later
                stim3_2.tStop = t  # not accounting for scr refresh
                stim3_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim3_2, 'tStopRefresh')  # time at next scr refresh
                stim3_2.setAutoDraw(False)
        
        # *stim4_2* updates
        if stim4_2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim4_2.frameNStart = frameN  # exact frame index
            stim4_2.tStart = t  # local t and not account for scr refresh
            stim4_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim4_2, 'tStartRefresh')  # time at next scr refresh
            stim4_2.setAutoDraw(True)
        if stim4_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim4_2.tStartRefresh + stim_time-frameTolerance:
                # keep track of stop time/frame for later
                stim4_2.tStop = t  # not accounting for scr refresh
                stim4_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim4_2, 'tStopRefresh')  # time at next scr refresh
                stim4_2.setAutoDraw(False)
        
        # *mask1* updates
        if mask1.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask1.frameNStart = frameN  # exact frame index
            mask1.tStart = t  # local t and not account for scr refresh
            mask1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask1, 'tStartRefresh')  # time at next scr refresh
            mask1.setAutoDraw(True)
        if mask1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask1.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask1.tStop = t  # not accounting for scr refresh
                mask1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask1, 'tStopRefresh')  # time at next scr refresh
                mask1.setAutoDraw(False)
        
        # *mask1_5* updates
        if mask1_5.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask1_5.frameNStart = frameN  # exact frame index
            mask1_5.tStart = t  # local t and not account for scr refresh
            mask1_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask1_5, 'tStartRefresh')  # time at next scr refresh
            mask1_5.setAutoDraw(True)
        if mask1_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask1_5.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask1_5.tStop = t  # not accounting for scr refresh
                mask1_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask1_5, 'tStopRefresh')  # time at next scr refresh
                mask1_5.setAutoDraw(False)
        
        # *mask1_6* updates
        if mask1_6.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask1_6.frameNStart = frameN  # exact frame index
            mask1_6.tStart = t  # local t and not account for scr refresh
            mask1_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask1_6, 'tStartRefresh')  # time at next scr refresh
            mask1_6.setAutoDraw(True)
        if mask1_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask1_6.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask1_6.tStop = t  # not accounting for scr refresh
                mask1_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask1_6, 'tStopRefresh')  # time at next scr refresh
                mask1_6.setAutoDraw(False)
        
        # *mask1_7* updates
        if mask1_7.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask1_7.frameNStart = frameN  # exact frame index
            mask1_7.tStart = t  # local t and not account for scr refresh
            mask1_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask1_7, 'tStartRefresh')  # time at next scr refresh
            mask1_7.setAutoDraw(True)
        if mask1_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask1_7.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask1_7.tStop = t  # not accounting for scr refresh
                mask1_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask1_7, 'tStopRefresh')  # time at next scr refresh
                mask1_7.setAutoDraw(False)
        
        # *mask2* updates
        if mask2.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask2.frameNStart = frameN  # exact frame index
            mask2.tStart = t  # local t and not account for scr refresh
            mask2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask2, 'tStartRefresh')  # time at next scr refresh
            mask2.setAutoDraw(True)
        if mask2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask2.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask2.tStop = t  # not accounting for scr refresh
                mask2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask2, 'tStopRefresh')  # time at next scr refresh
                mask2.setAutoDraw(False)
        
        # *mask2_5* updates
        if mask2_5.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask2_5.frameNStart = frameN  # exact frame index
            mask2_5.tStart = t  # local t and not account for scr refresh
            mask2_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask2_5, 'tStartRefresh')  # time at next scr refresh
            mask2_5.setAutoDraw(True)
        if mask2_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask2_5.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask2_5.tStop = t  # not accounting for scr refresh
                mask2_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask2_5, 'tStopRefresh')  # time at next scr refresh
                mask2_5.setAutoDraw(False)
        
        # *mask2_6* updates
        if mask2_6.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask2_6.frameNStart = frameN  # exact frame index
            mask2_6.tStart = t  # local t and not account for scr refresh
            mask2_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask2_6, 'tStartRefresh')  # time at next scr refresh
            mask2_6.setAutoDraw(True)
        if mask2_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask2_6.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask2_6.tStop = t  # not accounting for scr refresh
                mask2_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask2_6, 'tStopRefresh')  # time at next scr refresh
                mask2_6.setAutoDraw(False)
        
        # *mask2_7* updates
        if mask2_7.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask2_7.frameNStart = frameN  # exact frame index
            mask2_7.tStart = t  # local t and not account for scr refresh
            mask2_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask2_7, 'tStartRefresh')  # time at next scr refresh
            mask2_7.setAutoDraw(True)
        if mask2_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask2_7.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask2_7.tStop = t  # not accounting for scr refresh
                mask2_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask2_7, 'tStopRefresh')  # time at next scr refresh
                mask2_7.setAutoDraw(False)
        
        # *mask3* updates
        if mask3.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask3.frameNStart = frameN  # exact frame index
            mask3.tStart = t  # local t and not account for scr refresh
            mask3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask3, 'tStartRefresh')  # time at next scr refresh
            mask3.setAutoDraw(True)
        if mask3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask3.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask3.tStop = t  # not accounting for scr refresh
                mask3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask3, 'tStopRefresh')  # time at next scr refresh
                mask3.setAutoDraw(False)
        
        # *mask3_5* updates
        if mask3_5.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask3_5.frameNStart = frameN  # exact frame index
            mask3_5.tStart = t  # local t and not account for scr refresh
            mask3_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask3_5, 'tStartRefresh')  # time at next scr refresh
            mask3_5.setAutoDraw(True)
        if mask3_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask3_5.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask3_5.tStop = t  # not accounting for scr refresh
                mask3_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask3_5, 'tStopRefresh')  # time at next scr refresh
                mask3_5.setAutoDraw(False)
        
        # *mask3_6* updates
        if mask3_6.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask3_6.frameNStart = frameN  # exact frame index
            mask3_6.tStart = t  # local t and not account for scr refresh
            mask3_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask3_6, 'tStartRefresh')  # time at next scr refresh
            mask3_6.setAutoDraw(True)
        if mask3_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask3_6.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask3_6.tStop = t  # not accounting for scr refresh
                mask3_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask3_6, 'tStopRefresh')  # time at next scr refresh
                mask3_6.setAutoDraw(False)
        
        # *mask3_7* updates
        if mask3_7.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask3_7.frameNStart = frameN  # exact frame index
            mask3_7.tStart = t  # local t and not account for scr refresh
            mask3_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask3_7, 'tStartRefresh')  # time at next scr refresh
            mask3_7.setAutoDraw(True)
        if mask3_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask3_7.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask3_7.tStop = t  # not accounting for scr refresh
                mask3_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask3_7, 'tStopRefresh')  # time at next scr refresh
                mask3_7.setAutoDraw(False)
        
        # *mask4* updates
        if mask4.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask4.frameNStart = frameN  # exact frame index
            mask4.tStart = t  # local t and not account for scr refresh
            mask4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask4, 'tStartRefresh')  # time at next scr refresh
            mask4.setAutoDraw(True)
        if mask4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask4.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask4.tStop = t  # not accounting for scr refresh
                mask4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask4, 'tStopRefresh')  # time at next scr refresh
                mask4.setAutoDraw(False)
        
        # *mask4_5* updates
        if mask4_5.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask4_5.frameNStart = frameN  # exact frame index
            mask4_5.tStart = t  # local t and not account for scr refresh
            mask4_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask4_5, 'tStartRefresh')  # time at next scr refresh
            mask4_5.setAutoDraw(True)
        if mask4_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask4_5.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask4_5.tStop = t  # not accounting for scr refresh
                mask4_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask4_5, 'tStopRefresh')  # time at next scr refresh
                mask4_5.setAutoDraw(False)
        
        # *mask4_6* updates
        if mask4_6.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask4_6.frameNStart = frameN  # exact frame index
            mask4_6.tStart = t  # local t and not account for scr refresh
            mask4_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask4_6, 'tStartRefresh')  # time at next scr refresh
            mask4_6.setAutoDraw(True)
        if mask4_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask4_6.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask4_6.tStop = t  # not accounting for scr refresh
                mask4_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask4_6, 'tStopRefresh')  # time at next scr refresh
                mask4_6.setAutoDraw(False)
        
        # *mask4_7* updates
        if mask4_7.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask4_7.frameNStart = frameN  # exact frame index
            mask4_7.tStart = t  # local t and not account for scr refresh
            mask4_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask4_7, 'tStartRefresh')  # time at next scr refresh
            mask4_7.setAutoDraw(True)
        if mask4_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask4_7.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask4_7.tStop = t  # not accounting for scr refresh
                mask4_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask4_7, 'tStopRefresh')  # time at next scr refresh
                mask4_7.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_presentationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_presentation"-------
    for thisComponent in practice_presentationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "practice_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "practice_response_presentation"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(position_selection)
    
    if (change_cond == "same"):
        resp_position = stim_positions[position_selection[0]]
        resp_color = colors[position_selection[0]]
        correct_ans_wm = "s"
    else:
        resp_position = stim_positions[position_selection[0]]
        resp_color = colors[5]
        correct_ans_wm = "d"
    resp1_2.setFillColor(resp_color)
    resp1_2.setPos(resp_position)
    resp1_2.setLineColor(resp_color)
    key_resp_prac.keys = []
    key_resp_prac.rt = []
    _key_resp_prac_allKeys = []
    # keep track of which components have finished
    practice_response_presentationComponents = [resp1_2, key_resp_prac]
    for thisComponent in practice_response_presentationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_response_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_response_presentation"-------
    while continueRoutine:
        # get current time
        t = practice_response_presentationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_response_presentationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *resp1_2* updates
        if resp1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            resp1_2.frameNStart = frameN  # exact frame index
            resp1_2.tStart = t  # local t and not account for scr refresh
            resp1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp1_2, 'tStartRefresh')  # time at next scr refresh
            resp1_2.setAutoDraw(True)
        
        # *key_resp_prac* updates
        waitOnFlip = False
        if key_resp_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_prac.frameNStart = frameN  # exact frame index
            key_resp_prac.tStart = t  # local t and not account for scr refresh
            key_resp_prac.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_prac, 'tStartRefresh')  # time at next scr refresh
            key_resp_prac.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_prac.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_prac.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_prac.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_prac.getKeys(keyList=['s', 'd'], waitRelease=False)
            _key_resp_prac_allKeys.extend(theseKeys)
            if len(_key_resp_prac_allKeys):
                key_resp_prac.keys = _key_resp_prac_allKeys[-1].name  # just the last key pressed
                key_resp_prac.rt = _key_resp_prac_allKeys[-1].rt
                # was this correct?
                if (key_resp_prac.keys == str(correct_ans_wm)) or (key_resp_prac.keys == correct_ans_wm):
                    key_resp_prac.corr = 1
                else:
                    key_resp_prac.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_response_presentationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_response_presentation"-------
    for thisComponent in practice_response_presentationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_prac.keys in ['', [], None]:  # No response was made
        key_resp_prac.keys = None
        # was no response the correct answer?!
        if str(correct_ans_wm).lower() == 'none':
           key_resp_prac.corr = 1;  # correct non-response
        else:
           key_resp_prac.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_practice_presentation (TrialHandler)
    trials_practice_presentation.addData('key_resp_prac.keys',key_resp_prac.keys)
    trials_practice_presentation.addData('key_resp_prac.corr', key_resp_prac.corr)
    if key_resp_prac.keys != None:  # we had a response
        trials_practice_presentation.addData('key_resp_prac.rt', key_resp_prac.rt)
    # the Routine "practice_response_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback_presentation"-------
    continueRoutine = True
    # update component parameters for each repeat
    if not key_resp_prac.keys :
        msg="Failed to respond"
    elif correct_ans_wm == key_resp_prac.keys:#stored on last run routine
        msg="Correct! Press SPACE to continue."
        corr_count = corr_count + 1
    else:
        msg="Oops! That was wrong. Press SPACE to continue."
    text_3.setText(msg)
    key_resp_6.keys = []
    key_resp_6.rt = []
    _key_resp_6_allKeys = []
    # keep track of which components have finished
    feedback_presentationComponents = [text_3, key_resp_6]
    for thisComponent in feedback_presentationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback_presentation"-------
    while continueRoutine:
        # get current time
        t = feedback_presentationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback_presentationClock)
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
        for thisComponent in feedback_presentationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback_presentation"-------
    for thisComponent in feedback_presentationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_practice_presentation.addData('text_3.started', text_3.tStartRefresh)
    trials_practice_presentation.addData('text_3.stopped', text_3.tStopRefresh)
    # the Routine "feedback_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'trials_practice_presentation'


# ------Prepare to start Routine "practice_instructions2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
practice_instructions2Components = [text_instructions_3, key_resp_7]
for thisComponent in practice_instructions2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_instructions2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_instructions2"-------
while continueRoutine:
    # get current time
    t = practice_instructions2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_instructions2Clock)
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
    for thisComponent in practice_instructions2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_instructions2"-------
for thisComponent in practice_instructions2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practice_instructions2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_cogload_practice1 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('exp_cond.xlsx'),
    seed=None, name='trials_cogload_practice1')
thisExp.addLoop(trials_cogload_practice1)  # add the loop to the experiment
thisTrials_cogload_practice1 = trials_cogload_practice1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_cogload_practice1.rgb)
if thisTrials_cogload_practice1 != None:
    for paramName in thisTrials_cogload_practice1:
        exec('{} = thisTrials_cogload_practice1[paramName]'.format(paramName))

for thisTrials_cogload_practice1 in trials_cogload_practice1:
    currentLoop = trials_cogload_practice1
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_cogload_practice1.rgb)
    if thisTrials_cogload_practice1 != None:
        for paramName in thisTrials_cogload_practice1:
            exec('{} = thisTrials_cogload_practice1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "practice_cog_load"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(cog_load_stim)
    if (cognitive_load == 1):
        correct_ans_cogload = "NA"
    elif (cog_load_stim[0] % 2 == 0):
        correct_ans_cogload = "i"
    else:
        correct_ans_cogload = "o"
    
    if (cognitive_load == 2):
        total_duration = 3
        cl_stim = cog_load_stim[0]
    elif (cognitive_load == 4):
        total_duration = 1.5
        cl_stim = cog_load_stim[0]
    else:
        total_duration = 6
        cl_stim = " "
    text_cogload_2.setText(cl_stim)
    key_resp_load_prac.keys = []
    key_resp_load_prac.rt = []
    _key_resp_load_prac_allKeys = []
    # keep track of which components have finished
    practice_cog_loadComponents = [text_cogload_2, key_resp_load_prac]
    for thisComponent in practice_cog_loadComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_cog_loadClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_cog_load"-------
    while continueRoutine:
        # get current time
        t = practice_cog_loadClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_cog_loadClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_cogload_2* updates
        if text_cogload_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_cogload_2.frameNStart = frameN  # exact frame index
            text_cogload_2.tStart = t  # local t and not account for scr refresh
            text_cogload_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_cogload_2, 'tStartRefresh')  # time at next scr refresh
            text_cogload_2.setAutoDraw(True)
        if text_cogload_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_cogload_2.tStartRefresh + 0.9-frameTolerance:
                # keep track of stop time/frame for later
                text_cogload_2.tStop = t  # not accounting for scr refresh
                text_cogload_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_cogload_2, 'tStopRefresh')  # time at next scr refresh
                text_cogload_2.setAutoDraw(False)
        
        # *key_resp_load_prac* updates
        waitOnFlip = False
        if key_resp_load_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_load_prac.frameNStart = frameN  # exact frame index
            key_resp_load_prac.tStart = t  # local t and not account for scr refresh
            key_resp_load_prac.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_load_prac, 'tStartRefresh')  # time at next scr refresh
            key_resp_load_prac.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_load_prac.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_load_prac.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_load_prac.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_load_prac.tStartRefresh + total_duration-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_load_prac.tStop = t  # not accounting for scr refresh
                key_resp_load_prac.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_load_prac, 'tStopRefresh')  # time at next scr refresh
                key_resp_load_prac.status = FINISHED
        if key_resp_load_prac.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_load_prac.getKeys(keyList=['i', 'o'], waitRelease=False)
            _key_resp_load_prac_allKeys.extend(theseKeys)
            if len(_key_resp_load_prac_allKeys):
                key_resp_load_prac.keys = _key_resp_load_prac_allKeys[-1].name  # just the last key pressed
                key_resp_load_prac.rt = _key_resp_load_prac_allKeys[-1].rt
                # was this correct?
                if (key_resp_load_prac.keys == str(correct_ans_cogload)) or (key_resp_load_prac.keys == correct_ans_cogload):
                    key_resp_load_prac.corr = 1
                else:
                    key_resp_load_prac.corr = 0
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_cog_loadComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_cog_load"-------
    for thisComponent in practice_cog_loadComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_load_prac.keys in ['', [], None]:  # No response was made
        key_resp_load_prac.keys = None
        # was no response the correct answer?!
        if str(correct_ans_cogload).lower() == 'none':
           key_resp_load_prac.corr = 1;  # correct non-response
        else:
           key_resp_load_prac.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_cogload_practice1 (TrialHandler)
    trials_cogload_practice1.addData('key_resp_load_prac.keys',key_resp_load_prac.keys)
    trials_cogload_practice1.addData('key_resp_load_prac.corr', key_resp_load_prac.corr)
    if key_resp_load_prac.keys != None:  # we had a response
        trials_cogload_practice1.addData('key_resp_load_prac.rt', key_resp_load_prac.rt)
    # the Routine "practice_cog_load" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback_cogload"-------
    continueRoutine = True
    # update component parameters for each repeat
    if key_resp_load_prac.corr == 1:
        msg="Correct! Press SPACE to continue."
    elif cognitive_load == 1:
        msg = "No number presented. Press SPACE to continue."
    else:    
        msg = "Oops! That was wrong or you didn't respond. Press SPACE to continue."
    text_4.setText(msg)
    key_resp_8.keys = []
    key_resp_8.rt = []
    _key_resp_8_allKeys = []
    # keep track of which components have finished
    feedback_cogloadComponents = [text_4, key_resp_8]
    for thisComponent in feedback_cogloadComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback_cogloadClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback_cogload"-------
    while continueRoutine:
        # get current time
        t = feedback_cogloadClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback_cogloadClock)
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
        
        # *key_resp_8* updates
        waitOnFlip = False
        if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
        for thisComponent in feedback_cogloadComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback_cogload"-------
    for thisComponent in feedback_cogloadComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "feedback_cogload" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'trials_cogload_practice1'


# ------Prepare to start Routine "practice_instructions3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
corr_count = 0
# keep track of which components have finished
practice_instructions3Components = [text_instructions_4, key_resp_9]
for thisComponent in practice_instructions3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_instructions3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_instructions3"-------
while continueRoutine:
    # get current time
    t = practice_instructions3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_instructions3Clock)
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
    for thisComponent in practice_instructions3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_instructions3"-------
for thisComponent in practice_instructions3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practice_instructions3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_practice = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('exp_cond.xlsx'),
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
    
    # ------Prepare to start Routine "practice_presentation"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(stim_positions)
    shuffle(colors)
    
    stim1_2.setFillColor(colors[0])
    stim1_2.setPos([stim_positions[0]])
    stim1_2.setLineColor(colors[0])
    stim2_2.setFillColor(colors[1])
    stim2_2.setPos([stim_positions[1]])
    stim2_2.setLineColor(colors[1])
    stim3_2.setFillColor(colors[2])
    stim3_2.setPos([stim_positions[2]])
    stim3_2.setLineColor(colors[2])
    stim4_2.setFillColor(colors[3])
    stim4_2.setPos([stim_positions[3]])
    stim4_2.setLineColor(colors[3])
    mask1.setFillColor(colors[5])
    mask1.setPos((stim_positions[0][0]-.0125, stim_positions[0][1]-.0125))
    mask1.setLineColor(colors[5])
    mask1_5.setFillColor(colors[6])
    mask1_5.setPos((stim_positions[0][0]+.0125, stim_positions[0][1]-.0125))
    mask1_5.setLineColor(colors[6])
    mask1_6.setFillColor(colors[7])
    mask1_6.setPos((stim_positions[0][0]+.0125, stim_positions[0][1]+.0125))
    mask1_6.setLineColor(colors[7])
    mask1_7.setFillColor(colors[8])
    mask1_7.setPos((stim_positions[0][0]-.0125, stim_positions[0][1]+.0125))
    mask1_7.setLineColor(colors[8])
    mask2.setFillColor(colors[5])
    mask2.setPos((stim_positions[1][0]-.0125, stim_positions[1][1]-.0125))
    mask2.setLineColor(colors[5])
    mask2_5.setFillColor(colors[6])
    mask2_5.setPos((stim_positions[1][0]+.0125, stim_positions[1][1]-.0125))
    mask2_5.setLineColor(colors[6])
    mask2_6.setFillColor(colors[7])
    mask2_6.setPos((stim_positions[1][0]+.0125, stim_positions[1][1]+.0125))
    mask2_6.setLineColor(colors[7])
    mask2_7.setFillColor(colors[8])
    mask2_7.setPos((stim_positions[1][0]-.0125, stim_positions[1][1]+.0125))
    mask2_7.setLineColor(colors[8])
    mask3.setFillColor(colors[5])
    mask3.setPos((stim_positions[2][0]-.0125, stim_positions[2][1]-.0125))
    mask3.setLineColor(colors[5])
    mask3_5.setFillColor(colors[6])
    mask3_5.setPos((stim_positions[2][0]+.0125, stim_positions[2][1]-.0125))
    mask3_5.setLineColor(colors[6])
    mask3_6.setFillColor(colors[7])
    mask3_6.setPos((stim_positions[2][0]+.0125, stim_positions[2][1]+.0125))
    mask3_6.setLineColor(colors[7])
    mask3_7.setFillColor(colors[8])
    mask3_7.setPos((stim_positions[2][0]-.0125, stim_positions[2][1]+.0125))
    mask3_7.setLineColor(colors[8])
    mask4.setFillColor(colors[5])
    mask4.setPos((stim_positions[3][0]-.0125, stim_positions[3][1]-.0125))
    mask4.setLineColor(colors[5])
    mask4_5.setFillColor(colors[6])
    mask4_5.setPos((stim_positions[3][0]+.0125, stim_positions[3][1]-.0125))
    mask4_5.setLineColor(colors[6])
    mask4_6.setFillColor(colors[7])
    mask4_6.setPos((stim_positions[3][0]+.0125, stim_positions[3][1]+.0125))
    mask4_6.setLineColor(colors[7])
    mask4_7.setFillColor(colors[8])
    mask4_7.setPos((stim_positions[3][0]-.0125, stim_positions[3][1]+.0125))
    mask4_7.setLineColor(colors[8])
    # keep track of which components have finished
    practice_presentationComponents = [fixation_2, stim1_2, stim2_2, stim3_2, stim4_2, mask1, mask1_5, mask1_6, mask1_7, mask2, mask2_5, mask2_6, mask2_7, mask3, mask3_5, mask3_6, mask3_7, mask4, mask4_5, mask4_6, mask4_7]
    for thisComponent in practice_presentationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_presentation"-------
    while continueRoutine:
        # get current time
        t = practice_presentationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_presentationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_2* updates
        if fixation_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_2.frameNStart = frameN  # exact frame index
            fixation_2.tStart = t  # local t and not account for scr refresh
            fixation_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_2, 'tStartRefresh')  # time at next scr refresh
            fixation_2.setAutoDraw(True)
        if fixation_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_2.tStartRefresh + fix_time-frameTolerance:
                # keep track of stop time/frame for later
                fixation_2.tStop = t  # not accounting for scr refresh
                fixation_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_2, 'tStopRefresh')  # time at next scr refresh
                fixation_2.setAutoDraw(False)
        
        # *stim1_2* updates
        if stim1_2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim1_2.frameNStart = frameN  # exact frame index
            stim1_2.tStart = t  # local t and not account for scr refresh
            stim1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim1_2, 'tStartRefresh')  # time at next scr refresh
            stim1_2.setAutoDraw(True)
        if stim1_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim1_2.tStartRefresh + stim_time-frameTolerance:
                # keep track of stop time/frame for later
                stim1_2.tStop = t  # not accounting for scr refresh
                stim1_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim1_2, 'tStopRefresh')  # time at next scr refresh
                stim1_2.setAutoDraw(False)
        
        # *stim2_2* updates
        if stim2_2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim2_2.frameNStart = frameN  # exact frame index
            stim2_2.tStart = t  # local t and not account for scr refresh
            stim2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim2_2, 'tStartRefresh')  # time at next scr refresh
            stim2_2.setAutoDraw(True)
        if stim2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim2_2.tStartRefresh + stim_time-frameTolerance:
                # keep track of stop time/frame for later
                stim2_2.tStop = t  # not accounting for scr refresh
                stim2_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim2_2, 'tStopRefresh')  # time at next scr refresh
                stim2_2.setAutoDraw(False)
        
        # *stim3_2* updates
        if stim3_2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim3_2.frameNStart = frameN  # exact frame index
            stim3_2.tStart = t  # local t and not account for scr refresh
            stim3_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim3_2, 'tStartRefresh')  # time at next scr refresh
            stim3_2.setAutoDraw(True)
        if stim3_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim3_2.tStartRefresh + stim_time-frameTolerance:
                # keep track of stop time/frame for later
                stim3_2.tStop = t  # not accounting for scr refresh
                stim3_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim3_2, 'tStopRefresh')  # time at next scr refresh
                stim3_2.setAutoDraw(False)
        
        # *stim4_2* updates
        if stim4_2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim4_2.frameNStart = frameN  # exact frame index
            stim4_2.tStart = t  # local t and not account for scr refresh
            stim4_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim4_2, 'tStartRefresh')  # time at next scr refresh
            stim4_2.setAutoDraw(True)
        if stim4_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim4_2.tStartRefresh + stim_time-frameTolerance:
                # keep track of stop time/frame for later
                stim4_2.tStop = t  # not accounting for scr refresh
                stim4_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim4_2, 'tStopRefresh')  # time at next scr refresh
                stim4_2.setAutoDraw(False)
        
        # *mask1* updates
        if mask1.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask1.frameNStart = frameN  # exact frame index
            mask1.tStart = t  # local t and not account for scr refresh
            mask1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask1, 'tStartRefresh')  # time at next scr refresh
            mask1.setAutoDraw(True)
        if mask1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask1.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask1.tStop = t  # not accounting for scr refresh
                mask1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask1, 'tStopRefresh')  # time at next scr refresh
                mask1.setAutoDraw(False)
        
        # *mask1_5* updates
        if mask1_5.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask1_5.frameNStart = frameN  # exact frame index
            mask1_5.tStart = t  # local t and not account for scr refresh
            mask1_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask1_5, 'tStartRefresh')  # time at next scr refresh
            mask1_5.setAutoDraw(True)
        if mask1_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask1_5.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask1_5.tStop = t  # not accounting for scr refresh
                mask1_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask1_5, 'tStopRefresh')  # time at next scr refresh
                mask1_5.setAutoDraw(False)
        
        # *mask1_6* updates
        if mask1_6.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask1_6.frameNStart = frameN  # exact frame index
            mask1_6.tStart = t  # local t and not account for scr refresh
            mask1_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask1_6, 'tStartRefresh')  # time at next scr refresh
            mask1_6.setAutoDraw(True)
        if mask1_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask1_6.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask1_6.tStop = t  # not accounting for scr refresh
                mask1_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask1_6, 'tStopRefresh')  # time at next scr refresh
                mask1_6.setAutoDraw(False)
        
        # *mask1_7* updates
        if mask1_7.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask1_7.frameNStart = frameN  # exact frame index
            mask1_7.tStart = t  # local t and not account for scr refresh
            mask1_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask1_7, 'tStartRefresh')  # time at next scr refresh
            mask1_7.setAutoDraw(True)
        if mask1_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask1_7.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask1_7.tStop = t  # not accounting for scr refresh
                mask1_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask1_7, 'tStopRefresh')  # time at next scr refresh
                mask1_7.setAutoDraw(False)
        
        # *mask2* updates
        if mask2.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask2.frameNStart = frameN  # exact frame index
            mask2.tStart = t  # local t and not account for scr refresh
            mask2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask2, 'tStartRefresh')  # time at next scr refresh
            mask2.setAutoDraw(True)
        if mask2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask2.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask2.tStop = t  # not accounting for scr refresh
                mask2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask2, 'tStopRefresh')  # time at next scr refresh
                mask2.setAutoDraw(False)
        
        # *mask2_5* updates
        if mask2_5.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask2_5.frameNStart = frameN  # exact frame index
            mask2_5.tStart = t  # local t and not account for scr refresh
            mask2_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask2_5, 'tStartRefresh')  # time at next scr refresh
            mask2_5.setAutoDraw(True)
        if mask2_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask2_5.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask2_5.tStop = t  # not accounting for scr refresh
                mask2_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask2_5, 'tStopRefresh')  # time at next scr refresh
                mask2_5.setAutoDraw(False)
        
        # *mask2_6* updates
        if mask2_6.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask2_6.frameNStart = frameN  # exact frame index
            mask2_6.tStart = t  # local t and not account for scr refresh
            mask2_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask2_6, 'tStartRefresh')  # time at next scr refresh
            mask2_6.setAutoDraw(True)
        if mask2_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask2_6.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask2_6.tStop = t  # not accounting for scr refresh
                mask2_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask2_6, 'tStopRefresh')  # time at next scr refresh
                mask2_6.setAutoDraw(False)
        
        # *mask2_7* updates
        if mask2_7.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask2_7.frameNStart = frameN  # exact frame index
            mask2_7.tStart = t  # local t and not account for scr refresh
            mask2_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask2_7, 'tStartRefresh')  # time at next scr refresh
            mask2_7.setAutoDraw(True)
        if mask2_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask2_7.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask2_7.tStop = t  # not accounting for scr refresh
                mask2_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask2_7, 'tStopRefresh')  # time at next scr refresh
                mask2_7.setAutoDraw(False)
        
        # *mask3* updates
        if mask3.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask3.frameNStart = frameN  # exact frame index
            mask3.tStart = t  # local t and not account for scr refresh
            mask3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask3, 'tStartRefresh')  # time at next scr refresh
            mask3.setAutoDraw(True)
        if mask3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask3.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask3.tStop = t  # not accounting for scr refresh
                mask3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask3, 'tStopRefresh')  # time at next scr refresh
                mask3.setAutoDraw(False)
        
        # *mask3_5* updates
        if mask3_5.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask3_5.frameNStart = frameN  # exact frame index
            mask3_5.tStart = t  # local t and not account for scr refresh
            mask3_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask3_5, 'tStartRefresh')  # time at next scr refresh
            mask3_5.setAutoDraw(True)
        if mask3_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask3_5.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask3_5.tStop = t  # not accounting for scr refresh
                mask3_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask3_5, 'tStopRefresh')  # time at next scr refresh
                mask3_5.setAutoDraw(False)
        
        # *mask3_6* updates
        if mask3_6.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask3_6.frameNStart = frameN  # exact frame index
            mask3_6.tStart = t  # local t and not account for scr refresh
            mask3_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask3_6, 'tStartRefresh')  # time at next scr refresh
            mask3_6.setAutoDraw(True)
        if mask3_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask3_6.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask3_6.tStop = t  # not accounting for scr refresh
                mask3_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask3_6, 'tStopRefresh')  # time at next scr refresh
                mask3_6.setAutoDraw(False)
        
        # *mask3_7* updates
        if mask3_7.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask3_7.frameNStart = frameN  # exact frame index
            mask3_7.tStart = t  # local t and not account for scr refresh
            mask3_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask3_7, 'tStartRefresh')  # time at next scr refresh
            mask3_7.setAutoDraw(True)
        if mask3_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask3_7.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask3_7.tStop = t  # not accounting for scr refresh
                mask3_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask3_7, 'tStopRefresh')  # time at next scr refresh
                mask3_7.setAutoDraw(False)
        
        # *mask4* updates
        if mask4.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask4.frameNStart = frameN  # exact frame index
            mask4.tStart = t  # local t and not account for scr refresh
            mask4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask4, 'tStartRefresh')  # time at next scr refresh
            mask4.setAutoDraw(True)
        if mask4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask4.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask4.tStop = t  # not accounting for scr refresh
                mask4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask4, 'tStopRefresh')  # time at next scr refresh
                mask4.setAutoDraw(False)
        
        # *mask4_5* updates
        if mask4_5.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask4_5.frameNStart = frameN  # exact frame index
            mask4_5.tStart = t  # local t and not account for scr refresh
            mask4_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask4_5, 'tStartRefresh')  # time at next scr refresh
            mask4_5.setAutoDraw(True)
        if mask4_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask4_5.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask4_5.tStop = t  # not accounting for scr refresh
                mask4_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask4_5, 'tStopRefresh')  # time at next scr refresh
                mask4_5.setAutoDraw(False)
        
        # *mask4_6* updates
        if mask4_6.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask4_6.frameNStart = frameN  # exact frame index
            mask4_6.tStart = t  # local t and not account for scr refresh
            mask4_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask4_6, 'tStartRefresh')  # time at next scr refresh
            mask4_6.setAutoDraw(True)
        if mask4_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask4_6.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask4_6.tStop = t  # not accounting for scr refresh
                mask4_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask4_6, 'tStopRefresh')  # time at next scr refresh
                mask4_6.setAutoDraw(False)
        
        # *mask4_7* updates
        if mask4_7.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
            # keep track of start time/frame for later
            mask4_7.frameNStart = frameN  # exact frame index
            mask4_7.tStart = t  # local t and not account for scr refresh
            mask4_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mask4_7, 'tStartRefresh')  # time at next scr refresh
            mask4_7.setAutoDraw(True)
        if mask4_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mask4_7.tStartRefresh + mask_time-frameTolerance:
                # keep track of stop time/frame for later
                mask4_7.tStop = t  # not accounting for scr refresh
                mask4_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mask4_7, 'tStopRefresh')  # time at next scr refresh
                mask4_7.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_presentationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_presentation"-------
    for thisComponent in practice_presentationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "practice_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "delay"-------
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    delayComponents = [text_12]
    for thisComponent in delayComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    delayClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "delay"-------
    while continueRoutine:
        # get current time
        t = delayClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=delayClock)
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
            if tThisFlipGlobal > text_12.tStartRefresh + delay_time-frameTolerance:
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
        for thisComponent in delayComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "delay"-------
    for thisComponent in delayComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "delay" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_cogload_practice2 = data.TrialHandler(nReps=cognitive_load, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials_cogload_practice2')
    thisExp.addLoop(trials_cogload_practice2)  # add the loop to the experiment
    thisTrials_cogload_practice2 = trials_cogload_practice2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_cogload_practice2.rgb)
    if thisTrials_cogload_practice2 != None:
        for paramName in thisTrials_cogload_practice2:
            exec('{} = thisTrials_cogload_practice2[paramName]'.format(paramName))
    
    for thisTrials_cogload_practice2 in trials_cogload_practice2:
        currentLoop = trials_cogload_practice2
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_cogload_practice2.rgb)
        if thisTrials_cogload_practice2 != None:
            for paramName in thisTrials_cogload_practice2:
                exec('{} = thisTrials_cogload_practice2[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "practice_cog_load"-------
        continueRoutine = True
        # update component parameters for each repeat
        shuffle(cog_load_stim)
        if (cognitive_load == 1):
            correct_ans_cogload = "NA"
        elif (cog_load_stim[0] % 2 == 0):
            correct_ans_cogload = "i"
        else:
            correct_ans_cogload = "o"
        
        if (cognitive_load == 2):
            total_duration = 3
            cl_stim = cog_load_stim[0]
        elif (cognitive_load == 4):
            total_duration = 1.5
            cl_stim = cog_load_stim[0]
        else:
            total_duration = 6
            cl_stim = " "
        text_cogload_2.setText(cl_stim)
        key_resp_load_prac.keys = []
        key_resp_load_prac.rt = []
        _key_resp_load_prac_allKeys = []
        # keep track of which components have finished
        practice_cog_loadComponents = [text_cogload_2, key_resp_load_prac]
        for thisComponent in practice_cog_loadComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_cog_loadClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_cog_load"-------
        while continueRoutine:
            # get current time
            t = practice_cog_loadClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_cog_loadClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_cogload_2* updates
            if text_cogload_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_cogload_2.frameNStart = frameN  # exact frame index
                text_cogload_2.tStart = t  # local t and not account for scr refresh
                text_cogload_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_cogload_2, 'tStartRefresh')  # time at next scr refresh
                text_cogload_2.setAutoDraw(True)
            if text_cogload_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_cogload_2.tStartRefresh + 0.9-frameTolerance:
                    # keep track of stop time/frame for later
                    text_cogload_2.tStop = t  # not accounting for scr refresh
                    text_cogload_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_cogload_2, 'tStopRefresh')  # time at next scr refresh
                    text_cogload_2.setAutoDraw(False)
            
            # *key_resp_load_prac* updates
            waitOnFlip = False
            if key_resp_load_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_load_prac.frameNStart = frameN  # exact frame index
                key_resp_load_prac.tStart = t  # local t and not account for scr refresh
                key_resp_load_prac.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_load_prac, 'tStartRefresh')  # time at next scr refresh
                key_resp_load_prac.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_load_prac.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_load_prac.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_load_prac.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_load_prac.tStartRefresh + total_duration-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_load_prac.tStop = t  # not accounting for scr refresh
                    key_resp_load_prac.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_load_prac, 'tStopRefresh')  # time at next scr refresh
                    key_resp_load_prac.status = FINISHED
            if key_resp_load_prac.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_load_prac.getKeys(keyList=['i', 'o'], waitRelease=False)
                _key_resp_load_prac_allKeys.extend(theseKeys)
                if len(_key_resp_load_prac_allKeys):
                    key_resp_load_prac.keys = _key_resp_load_prac_allKeys[-1].name  # just the last key pressed
                    key_resp_load_prac.rt = _key_resp_load_prac_allKeys[-1].rt
                    # was this correct?
                    if (key_resp_load_prac.keys == str(correct_ans_cogload)) or (key_resp_load_prac.keys == correct_ans_cogload):
                        key_resp_load_prac.corr = 1
                    else:
                        key_resp_load_prac.corr = 0
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_cog_loadComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_cog_load"-------
        for thisComponent in practice_cog_loadComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp_load_prac.keys in ['', [], None]:  # No response was made
            key_resp_load_prac.keys = None
            # was no response the correct answer?!
            if str(correct_ans_cogload).lower() == 'none':
               key_resp_load_prac.corr = 1;  # correct non-response
            else:
               key_resp_load_prac.corr = 0;  # failed to respond (incorrectly)
        # store data for trials_cogload_practice2 (TrialHandler)
        trials_cogload_practice2.addData('key_resp_load_prac.keys',key_resp_load_prac.keys)
        trials_cogload_practice2.addData('key_resp_load_prac.corr', key_resp_load_prac.corr)
        if key_resp_load_prac.keys != None:  # we had a response
            trials_cogload_practice2.addData('key_resp_load_prac.rt', key_resp_load_prac.rt)
        # the Routine "practice_cog_load" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed cognitive_load repeats of 'trials_cogload_practice2'
    
    
    # ------Prepare to start Routine "practice_response_presentation"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(position_selection)
    
    if (change_cond == "same"):
        resp_position = stim_positions[position_selection[0]]
        resp_color = colors[position_selection[0]]
        correct_ans_wm = "s"
    else:
        resp_position = stim_positions[position_selection[0]]
        resp_color = colors[5]
        correct_ans_wm = "d"
    resp1_2.setFillColor(resp_color)
    resp1_2.setPos(resp_position)
    resp1_2.setLineColor(resp_color)
    key_resp_prac.keys = []
    key_resp_prac.rt = []
    _key_resp_prac_allKeys = []
    # keep track of which components have finished
    practice_response_presentationComponents = [resp1_2, key_resp_prac]
    for thisComponent in practice_response_presentationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_response_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_response_presentation"-------
    while continueRoutine:
        # get current time
        t = practice_response_presentationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_response_presentationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *resp1_2* updates
        if resp1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            resp1_2.frameNStart = frameN  # exact frame index
            resp1_2.tStart = t  # local t and not account for scr refresh
            resp1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp1_2, 'tStartRefresh')  # time at next scr refresh
            resp1_2.setAutoDraw(True)
        
        # *key_resp_prac* updates
        waitOnFlip = False
        if key_resp_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_prac.frameNStart = frameN  # exact frame index
            key_resp_prac.tStart = t  # local t and not account for scr refresh
            key_resp_prac.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_prac, 'tStartRefresh')  # time at next scr refresh
            key_resp_prac.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_prac.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_prac.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_prac.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_prac.getKeys(keyList=['s', 'd'], waitRelease=False)
            _key_resp_prac_allKeys.extend(theseKeys)
            if len(_key_resp_prac_allKeys):
                key_resp_prac.keys = _key_resp_prac_allKeys[-1].name  # just the last key pressed
                key_resp_prac.rt = _key_resp_prac_allKeys[-1].rt
                # was this correct?
                if (key_resp_prac.keys == str(correct_ans_wm)) or (key_resp_prac.keys == correct_ans_wm):
                    key_resp_prac.corr = 1
                else:
                    key_resp_prac.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_response_presentationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_response_presentation"-------
    for thisComponent in practice_response_presentationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_prac.keys in ['', [], None]:  # No response was made
        key_resp_prac.keys = None
        # was no response the correct answer?!
        if str(correct_ans_wm).lower() == 'none':
           key_resp_prac.corr = 1;  # correct non-response
        else:
           key_resp_prac.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_practice (TrialHandler)
    trials_practice.addData('key_resp_prac.keys',key_resp_prac.keys)
    trials_practice.addData('key_resp_prac.corr', key_resp_prac.corr)
    if key_resp_prac.keys != None:  # we had a response
        trials_practice.addData('key_resp_prac.rt', key_resp_prac.rt)
    # the Routine "practice_response_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback_presentation"-------
    continueRoutine = True
    # update component parameters for each repeat
    if not key_resp_prac.keys :
        msg="Failed to respond"
    elif correct_ans_wm == key_resp_prac.keys:#stored on last run routine
        msg="Correct! Press SPACE to continue."
        corr_count = corr_count + 1
    else:
        msg="Oops! That was wrong. Press SPACE to continue."
    text_3.setText(msg)
    key_resp_6.keys = []
    key_resp_6.rt = []
    _key_resp_6_allKeys = []
    # keep track of which components have finished
    feedback_presentationComponents = [text_3, key_resp_6]
    for thisComponent in feedback_presentationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback_presentation"-------
    while continueRoutine:
        # get current time
        t = feedback_presentationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback_presentationClock)
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
        for thisComponent in feedback_presentationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback_presentation"-------
    for thisComponent in feedback_presentationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_practice.addData('text_3.started', text_3.tStartRefresh)
    trials_practice.addData('text_3.stopped', text_3.tStopRefresh)
    # the Routine "feedback_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'trials_practice'


# ------Prepare to start Routine "end_block"-------
continueRoutine = True
# update component parameters for each repeat
msg = "You got %i trials correct!" %(corr_count)

if (block_n == 0):
    block_message = "You have reached the end of the practice."
else:
    block_message = "You have reached the end of block %i of %i." %(block_n, block_total)
text_block_end.setText(block_message)
text_6.setText(msg)
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
end_blockComponents = [text_block_end, text_6, text_2, key_resp_3]
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
    
    # *text_block_end* updates
    if text_block_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_block_end.frameNStart = frameN  # exact frame index
        text_block_end.tStart = t  # local t and not account for scr refresh
        text_block_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_block_end, 'tStartRefresh')  # time at next scr refresh
        text_block_end.setAutoDraw(True)
    
    # *text_6* updates
    if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_6.frameNStart = frameN  # exact frame index
        text_6.tStart = t  # local t and not account for scr refresh
        text_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
        text_6.setAutoDraw(True)
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
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
block_n = block_n + 1

thisExp.addData('text_6.started', text_6.tStartRefresh)
thisExp.addData('text_6.stopped', text_6.tStopRefresh)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# the Routine "end_block" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
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
block = data.TrialHandler(nReps=block_total, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='block')
thisExp.addLoop(block)  # add the loop to the experiment
thisBlock = block.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in block:
    currentLoop = block
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "key_reminder"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_12.keys = []
    key_resp_12.rt = []
    _key_resp_12_allKeys = []
    corr_count = 0
    # keep track of which components have finished
    key_reminderComponents = [text_remind, key_resp_12]
    for thisComponent in key_reminderComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    key_reminderClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "key_reminder"-------
    while continueRoutine:
        # get current time
        t = key_reminderClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=key_reminderClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_remind* updates
        if text_remind.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_remind.frameNStart = frameN  # exact frame index
            text_remind.tStart = t  # local t and not account for scr refresh
            text_remind.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_remind, 'tStartRefresh')  # time at next scr refresh
            text_remind.setAutoDraw(True)
        
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
        for thisComponent in key_reminderComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "key_reminder"-------
    for thisComponent in key_reminderComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    block.addData('text_remind.started', text_remind.tStartRefresh)
    block.addData('text_remind.stopped', text_remind.tStopRefresh)
    # the Routine "key_reminder" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=6.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('exp_cond.xlsx'),
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
        
        # ------Prepare to start Routine "stimulus_presentation"-------
        continueRoutine = True
        # update component parameters for each repeat
        shuffle(stim_positions)
        shuffle(colors)
        stim1.setFillColor(colors[0])
        stim1.setPos([stim_positions[0]])
        stim1.setLineColor(colors[0])
        stim2.setFillColor(colors[1])
        stim2.setPos([stim_positions[1]])
        stim2.setLineColor(colors[1])
        stim3.setFillColor(colors[2])
        stim3.setPos([stim_positions[2]])
        stim3.setLineColor(colors[2])
        stim4.setFillColor(colors[3])
        stim4.setPos([stim_positions[3]])
        stim4.setLineColor(colors[3])
        mask1_1.setFillColor(colors[5])
        mask1_1.setPos((stim_positions[0][0]-.0125, stim_positions[0][1]-.0125))
        mask1_1.setLineColor(colors[5])
        mask1_2.setFillColor(colors[6])
        mask1_2.setPos((stim_positions[0][0]+.0125, stim_positions[0][1]-.0125))
        mask1_2.setLineColor(colors[6])
        mask1_3.setFillColor(colors[7])
        mask1_3.setPos((stim_positions[0][0]+.0125, stim_positions[0][1]+.0125))
        mask1_3.setLineColor(colors[7])
        mask1_4.setFillColor(colors[8])
        mask1_4.setPos((stim_positions[0][0]-.0125, stim_positions[0][1]+.0125))
        mask1_4.setLineColor(colors[8])
        mask2_1.setFillColor(colors[5])
        mask2_1.setPos((stim_positions[1][0]-.0125, stim_positions[1][1]-.0125))
        mask2_1.setLineColor(colors[5])
        mask2_2.setFillColor(colors[6])
        mask2_2.setPos((stim_positions[1][0]+.0125, stim_positions[1][1]-.0125))
        mask2_2.setLineColor(colors[6])
        mask2_3.setFillColor(colors[7])
        mask2_3.setPos((stim_positions[1][0]+.0125, stim_positions[1][1]+.0125))
        mask2_3.setLineColor(colors[7])
        mask2_4.setFillColor(colors[8])
        mask2_4.setPos((stim_positions[1][0]-.0125, stim_positions[1][1]+.0125))
        mask2_4.setLineColor(colors[8])
        mask3_1.setFillColor(colors[5])
        mask3_1.setPos((stim_positions[2][0]-.0125, stim_positions[2][1]-.0125))
        mask3_1.setLineColor(colors[5])
        mask3_2.setFillColor(colors[6])
        mask3_2.setPos((stim_positions[2][0]+.0125, stim_positions[2][1]-.0125))
        mask3_2.setLineColor(colors[6])
        mask3_3.setFillColor(colors[7])
        mask3_3.setPos((stim_positions[2][0]+.0125, stim_positions[2][1]+.0125))
        mask3_3.setLineColor(colors[7])
        mask3_4.setFillColor(colors[8])
        mask3_4.setPos((stim_positions[2][0]-.0125, stim_positions[2][1]+.0125))
        mask3_4.setLineColor(colors[8])
        mask4_1.setFillColor(colors[5])
        mask4_1.setPos((stim_positions[3][0]-.0125, stim_positions[3][1]-.0125))
        mask4_1.setLineColor(colors[5])
        mask4_2.setFillColor(colors[6])
        mask4_2.setPos((stim_positions[3][0]+.0125, stim_positions[3][1]-.0125))
        mask4_2.setLineColor(colors[6])
        mask4_3.setFillColor(colors[7])
        mask4_3.setPos((stim_positions[3][0]+.0125, stim_positions[3][1]+.0125))
        mask4_3.setLineColor(colors[7])
        mask4_4.setFillColor(colors[8])
        mask4_4.setPos((stim_positions[3][0]-.0125, stim_positions[3][1]+.0125))
        mask4_4.setLineColor(colors[8])
        # keep track of which components have finished
        stimulus_presentationComponents = [fixation, stim1, stim2, stim3, stim4, mask1_1, mask1_2, mask1_3, mask1_4, mask2_1, mask2_2, mask2_3, mask2_4, mask3_1, mask3_2, mask3_3, mask3_4, mask4_1, mask4_2, mask4_3, mask4_4]
        for thisComponent in stimulus_presentationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stimulus_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stimulus_presentation"-------
        while continueRoutine:
            # get current time
            t = stimulus_presentationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stimulus_presentationClock)
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
                if tThisFlipGlobal > fixation.tStartRefresh + fix_time-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                    fixation.setAutoDraw(False)
            
            # *stim1* updates
            if stim1.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
                # keep track of start time/frame for later
                stim1.frameNStart = frameN  # exact frame index
                stim1.tStart = t  # local t and not account for scr refresh
                stim1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim1, 'tStartRefresh')  # time at next scr refresh
                stim1.setAutoDraw(True)
            if stim1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim1.tStartRefresh + stim_time-frameTolerance:
                    # keep track of stop time/frame for later
                    stim1.tStop = t  # not accounting for scr refresh
                    stim1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim1, 'tStopRefresh')  # time at next scr refresh
                    stim1.setAutoDraw(False)
            
            # *stim2* updates
            if stim2.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
                # keep track of start time/frame for later
                stim2.frameNStart = frameN  # exact frame index
                stim2.tStart = t  # local t and not account for scr refresh
                stim2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim2, 'tStartRefresh')  # time at next scr refresh
                stim2.setAutoDraw(True)
            if stim2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim2.tStartRefresh + stim_time-frameTolerance:
                    # keep track of stop time/frame for later
                    stim2.tStop = t  # not accounting for scr refresh
                    stim2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim2, 'tStopRefresh')  # time at next scr refresh
                    stim2.setAutoDraw(False)
            
            # *stim3* updates
            if stim3.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
                # keep track of start time/frame for later
                stim3.frameNStart = frameN  # exact frame index
                stim3.tStart = t  # local t and not account for scr refresh
                stim3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim3, 'tStartRefresh')  # time at next scr refresh
                stim3.setAutoDraw(True)
            if stim3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim3.tStartRefresh + stim_time-frameTolerance:
                    # keep track of stop time/frame for later
                    stim3.tStop = t  # not accounting for scr refresh
                    stim3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim3, 'tStopRefresh')  # time at next scr refresh
                    stim3.setAutoDraw(False)
            
            # *stim4* updates
            if stim4.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
                # keep track of start time/frame for later
                stim4.frameNStart = frameN  # exact frame index
                stim4.tStart = t  # local t and not account for scr refresh
                stim4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim4, 'tStartRefresh')  # time at next scr refresh
                stim4.setAutoDraw(True)
            if stim4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim4.tStartRefresh + stim_time-frameTolerance:
                    # keep track of stop time/frame for later
                    stim4.tStop = t  # not accounting for scr refresh
                    stim4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim4, 'tStopRefresh')  # time at next scr refresh
                    stim4.setAutoDraw(False)
            
            # *mask1_1* updates
            if mask1_1.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask1_1.frameNStart = frameN  # exact frame index
                mask1_1.tStart = t  # local t and not account for scr refresh
                mask1_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask1_1, 'tStartRefresh')  # time at next scr refresh
                mask1_1.setAutoDraw(True)
            if mask1_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask1_1.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask1_1.tStop = t  # not accounting for scr refresh
                    mask1_1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask1_1, 'tStopRefresh')  # time at next scr refresh
                    mask1_1.setAutoDraw(False)
            
            # *mask1_2* updates
            if mask1_2.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask1_2.frameNStart = frameN  # exact frame index
                mask1_2.tStart = t  # local t and not account for scr refresh
                mask1_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask1_2, 'tStartRefresh')  # time at next scr refresh
                mask1_2.setAutoDraw(True)
            if mask1_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask1_2.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask1_2.tStop = t  # not accounting for scr refresh
                    mask1_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask1_2, 'tStopRefresh')  # time at next scr refresh
                    mask1_2.setAutoDraw(False)
            
            # *mask1_3* updates
            if mask1_3.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask1_3.frameNStart = frameN  # exact frame index
                mask1_3.tStart = t  # local t and not account for scr refresh
                mask1_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask1_3, 'tStartRefresh')  # time at next scr refresh
                mask1_3.setAutoDraw(True)
            if mask1_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask1_3.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask1_3.tStop = t  # not accounting for scr refresh
                    mask1_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask1_3, 'tStopRefresh')  # time at next scr refresh
                    mask1_3.setAutoDraw(False)
            
            # *mask1_4* updates
            if mask1_4.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask1_4.frameNStart = frameN  # exact frame index
                mask1_4.tStart = t  # local t and not account for scr refresh
                mask1_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask1_4, 'tStartRefresh')  # time at next scr refresh
                mask1_4.setAutoDraw(True)
            if mask1_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask1_4.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask1_4.tStop = t  # not accounting for scr refresh
                    mask1_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask1_4, 'tStopRefresh')  # time at next scr refresh
                    mask1_4.setAutoDraw(False)
            
            # *mask2_1* updates
            if mask2_1.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask2_1.frameNStart = frameN  # exact frame index
                mask2_1.tStart = t  # local t and not account for scr refresh
                mask2_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask2_1, 'tStartRefresh')  # time at next scr refresh
                mask2_1.setAutoDraw(True)
            if mask2_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask2_1.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask2_1.tStop = t  # not accounting for scr refresh
                    mask2_1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask2_1, 'tStopRefresh')  # time at next scr refresh
                    mask2_1.setAutoDraw(False)
            
            # *mask2_2* updates
            if mask2_2.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask2_2.frameNStart = frameN  # exact frame index
                mask2_2.tStart = t  # local t and not account for scr refresh
                mask2_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask2_2, 'tStartRefresh')  # time at next scr refresh
                mask2_2.setAutoDraw(True)
            if mask2_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask2_2.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask2_2.tStop = t  # not accounting for scr refresh
                    mask2_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask2_2, 'tStopRefresh')  # time at next scr refresh
                    mask2_2.setAutoDraw(False)
            
            # *mask2_3* updates
            if mask2_3.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask2_3.frameNStart = frameN  # exact frame index
                mask2_3.tStart = t  # local t and not account for scr refresh
                mask2_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask2_3, 'tStartRefresh')  # time at next scr refresh
                mask2_3.setAutoDraw(True)
            if mask2_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask2_3.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask2_3.tStop = t  # not accounting for scr refresh
                    mask2_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask2_3, 'tStopRefresh')  # time at next scr refresh
                    mask2_3.setAutoDraw(False)
            
            # *mask2_4* updates
            if mask2_4.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask2_4.frameNStart = frameN  # exact frame index
                mask2_4.tStart = t  # local t and not account for scr refresh
                mask2_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask2_4, 'tStartRefresh')  # time at next scr refresh
                mask2_4.setAutoDraw(True)
            if mask2_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask2_4.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask2_4.tStop = t  # not accounting for scr refresh
                    mask2_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask2_4, 'tStopRefresh')  # time at next scr refresh
                    mask2_4.setAutoDraw(False)
            
            # *mask3_1* updates
            if mask3_1.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask3_1.frameNStart = frameN  # exact frame index
                mask3_1.tStart = t  # local t and not account for scr refresh
                mask3_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask3_1, 'tStartRefresh')  # time at next scr refresh
                mask3_1.setAutoDraw(True)
            if mask3_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask3_1.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask3_1.tStop = t  # not accounting for scr refresh
                    mask3_1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask3_1, 'tStopRefresh')  # time at next scr refresh
                    mask3_1.setAutoDraw(False)
            
            # *mask3_2* updates
            if mask3_2.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask3_2.frameNStart = frameN  # exact frame index
                mask3_2.tStart = t  # local t and not account for scr refresh
                mask3_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask3_2, 'tStartRefresh')  # time at next scr refresh
                mask3_2.setAutoDraw(True)
            if mask3_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask3_2.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask3_2.tStop = t  # not accounting for scr refresh
                    mask3_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask3_2, 'tStopRefresh')  # time at next scr refresh
                    mask3_2.setAutoDraw(False)
            
            # *mask3_3* updates
            if mask3_3.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask3_3.frameNStart = frameN  # exact frame index
                mask3_3.tStart = t  # local t and not account for scr refresh
                mask3_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask3_3, 'tStartRefresh')  # time at next scr refresh
                mask3_3.setAutoDraw(True)
            if mask3_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask3_3.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask3_3.tStop = t  # not accounting for scr refresh
                    mask3_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask3_3, 'tStopRefresh')  # time at next scr refresh
                    mask3_3.setAutoDraw(False)
            
            # *mask3_4* updates
            if mask3_4.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask3_4.frameNStart = frameN  # exact frame index
                mask3_4.tStart = t  # local t and not account for scr refresh
                mask3_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask3_4, 'tStartRefresh')  # time at next scr refresh
                mask3_4.setAutoDraw(True)
            if mask3_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask3_4.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask3_4.tStop = t  # not accounting for scr refresh
                    mask3_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask3_4, 'tStopRefresh')  # time at next scr refresh
                    mask3_4.setAutoDraw(False)
            
            # *mask4_1* updates
            if mask4_1.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask4_1.frameNStart = frameN  # exact frame index
                mask4_1.tStart = t  # local t and not account for scr refresh
                mask4_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask4_1, 'tStartRefresh')  # time at next scr refresh
                mask4_1.setAutoDraw(True)
            if mask4_1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask4_1.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask4_1.tStop = t  # not accounting for scr refresh
                    mask4_1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask4_1, 'tStopRefresh')  # time at next scr refresh
                    mask4_1.setAutoDraw(False)
            
            # *mask4_2* updates
            if mask4_2.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask4_2.frameNStart = frameN  # exact frame index
                mask4_2.tStart = t  # local t and not account for scr refresh
                mask4_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask4_2, 'tStartRefresh')  # time at next scr refresh
                mask4_2.setAutoDraw(True)
            if mask4_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask4_2.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask4_2.tStop = t  # not accounting for scr refresh
                    mask4_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask4_2, 'tStopRefresh')  # time at next scr refresh
                    mask4_2.setAutoDraw(False)
            
            # *mask4_3* updates
            if mask4_3.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask4_3.frameNStart = frameN  # exact frame index
                mask4_3.tStart = t  # local t and not account for scr refresh
                mask4_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask4_3, 'tStartRefresh')  # time at next scr refresh
                mask4_3.setAutoDraw(True)
            if mask4_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask4_3.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask4_3.tStop = t  # not accounting for scr refresh
                    mask4_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask4_3, 'tStopRefresh')  # time at next scr refresh
                    mask4_3.setAutoDraw(False)
            
            # *mask4_4* updates
            if mask4_4.status == NOT_STARTED and tThisFlip >= mask_onset-frameTolerance:
                # keep track of start time/frame for later
                mask4_4.frameNStart = frameN  # exact frame index
                mask4_4.tStart = t  # local t and not account for scr refresh
                mask4_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask4_4, 'tStartRefresh')  # time at next scr refresh
                mask4_4.setAutoDraw(True)
            if mask4_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask4_4.tStartRefresh + mask_time-frameTolerance:
                    # keep track of stop time/frame for later
                    mask4_4.tStop = t  # not accounting for scr refresh
                    mask4_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask4_4, 'tStopRefresh')  # time at next scr refresh
                    mask4_4.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stimulus_presentationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stimulus_presentation"-------
        for thisComponent in stimulus_presentationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "stimulus_presentation" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "delay"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        delayComponents = [text_12]
        for thisComponent in delayComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        delayClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "delay"-------
        while continueRoutine:
            # get current time
            t = delayClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=delayClock)
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
                if tThisFlipGlobal > text_12.tStartRefresh + delay_time-frameTolerance:
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
            for thisComponent in delayComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "delay"-------
        for thisComponent in delayComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "delay" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials_cogload = data.TrialHandler(nReps=cognitive_load, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='trials_cogload')
        thisExp.addLoop(trials_cogload)  # add the loop to the experiment
        thisTrials_cogload = trials_cogload.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_cogload.rgb)
        if thisTrials_cogload != None:
            for paramName in thisTrials_cogload:
                exec('{} = thisTrials_cogload[paramName]'.format(paramName))
        
        for thisTrials_cogload in trials_cogload:
            currentLoop = trials_cogload
            # abbreviate parameter names if possible (e.g. rgb = thisTrials_cogload.rgb)
            if thisTrials_cogload != None:
                for paramName in thisTrials_cogload:
                    exec('{} = thisTrials_cogload[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "cog_load"-------
            continueRoutine = True
            # update component parameters for each repeat
            shuffle(cog_load_stim)
            
            shuffle(cog_load_stim)
            if (cognitive_load == 1):
                correct_ans_cogload = "NA"
            elif (cog_load_stim[0] % 2 == 0):
                correct_ans_cogload = "i"
            else:
                correct_ans_cogload = "o"
            
            if (cognitive_load == 2):
                total_duration = 3
                cl_stim = cog_load_stim[0]
            elif (cognitive_load == 4):
                total_duration = 1.5
                cl_stim = cog_load_stim[0]
            else:
                total_duration = 6
                cl_stim = " "
            text_cogload.setText(cl_stim)
            key_resp_load.keys = []
            key_resp_load.rt = []
            _key_resp_load_allKeys = []
            # keep track of which components have finished
            cog_loadComponents = [text_cogload, key_resp_load]
            for thisComponent in cog_loadComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            cog_loadClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "cog_load"-------
            while continueRoutine:
                # get current time
                t = cog_loadClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=cog_loadClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_cogload* updates
                if text_cogload.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_cogload.frameNStart = frameN  # exact frame index
                    text_cogload.tStart = t  # local t and not account for scr refresh
                    text_cogload.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_cogload, 'tStartRefresh')  # time at next scr refresh
                    text_cogload.setAutoDraw(True)
                if text_cogload.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_cogload.tStartRefresh + 0.9-frameTolerance:
                        # keep track of stop time/frame for later
                        text_cogload.tStop = t  # not accounting for scr refresh
                        text_cogload.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(text_cogload, 'tStopRefresh')  # time at next scr refresh
                        text_cogload.setAutoDraw(False)
                
                # *key_resp_load* updates
                waitOnFlip = False
                if key_resp_load.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_load.frameNStart = frameN  # exact frame index
                    key_resp_load.tStart = t  # local t and not account for scr refresh
                    key_resp_load.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_load, 'tStartRefresh')  # time at next scr refresh
                    key_resp_load.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_load.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_load.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_load.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_load.tStartRefresh + total_duration-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_load.tStop = t  # not accounting for scr refresh
                        key_resp_load.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(key_resp_load, 'tStopRefresh')  # time at next scr refresh
                        key_resp_load.status = FINISHED
                if key_resp_load.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_load.getKeys(keyList=['i', 'o'], waitRelease=False)
                    _key_resp_load_allKeys.extend(theseKeys)
                    if len(_key_resp_load_allKeys):
                        key_resp_load.keys = _key_resp_load_allKeys[-1].name  # just the last key pressed
                        key_resp_load.rt = _key_resp_load_allKeys[-1].rt
                        # was this correct?
                        if (key_resp_load.keys == str(correct_ans_cogload)) or (key_resp_load.keys == correct_ans_cogload):
                            key_resp_load.corr = 1
                        else:
                            key_resp_load.corr = 0
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in cog_loadComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "cog_load"-------
            for thisComponent in cog_loadComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('cogload_presented', cog_load_stim[0]) 
            thisExp.addData('cogload_condition', cognitive_load) 
            # check responses
            if key_resp_load.keys in ['', [], None]:  # No response was made
                key_resp_load.keys = None
                # was no response the correct answer?!
                if str(correct_ans_cogload).lower() == 'none':
                   key_resp_load.corr = 1;  # correct non-response
                else:
                   key_resp_load.corr = 0;  # failed to respond (incorrectly)
            # store data for trials_cogload (TrialHandler)
            trials_cogload.addData('key_resp_load.keys',key_resp_load.keys)
            trials_cogload.addData('key_resp_load.corr', key_resp_load.corr)
            if key_resp_load.keys != None:  # we had a response
                trials_cogload.addData('key_resp_load.rt', key_resp_load.rt)
            # the Routine "cog_load" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed cognitive_load repeats of 'trials_cogload'
        
        
        # ------Prepare to start Routine "stimulus_response"-------
        continueRoutine = True
        routineTimer.add(180.000000)
        # update component parameters for each repeat
        shuffle(position_selection)
        
        if (change_cond == "same"):
            resp_position = stim_positions[position_selection[0]]
            resp_color = colors[position_selection[0]]
            correct_ans_wm = "s"
        else:
            resp_position = stim_positions[position_selection[0]]
            resp_color = colors[5]
            correct_ans_wm = "d"
            
        resp1.setFillColor(resp_color)
        resp1.setPos(resp_position)
        resp1.setLineColor(resp_color)
        key_resp_stimulus.keys = []
        key_resp_stimulus.rt = []
        _key_resp_stimulus_allKeys = []
        # keep track of which components have finished
        stimulus_responseComponents = [resp1, key_resp_stimulus]
        for thisComponent in stimulus_responseComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stimulus_responseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stimulus_response"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = stimulus_responseClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stimulus_responseClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *resp1* updates
            if resp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp1.frameNStart = frameN  # exact frame index
                resp1.tStart = t  # local t and not account for scr refresh
                resp1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp1, 'tStartRefresh')  # time at next scr refresh
                resp1.setAutoDraw(True)
            if resp1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > resp1.tStartRefresh + 180.0-frameTolerance:
                    # keep track of stop time/frame for later
                    resp1.tStop = t  # not accounting for scr refresh
                    resp1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(resp1, 'tStopRefresh')  # time at next scr refresh
                    resp1.setAutoDraw(False)
            
            # *key_resp_stimulus* updates
            waitOnFlip = False
            if key_resp_stimulus.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_stimulus.frameNStart = frameN  # exact frame index
                key_resp_stimulus.tStart = t  # local t and not account for scr refresh
                key_resp_stimulus.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_stimulus, 'tStartRefresh')  # time at next scr refresh
                key_resp_stimulus.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_stimulus.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_stimulus.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_stimulus.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_stimulus.tStartRefresh + 180.0-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_stimulus.tStop = t  # not accounting for scr refresh
                    key_resp_stimulus.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_stimulus, 'tStopRefresh')  # time at next scr refresh
                    key_resp_stimulus.status = FINISHED
            if key_resp_stimulus.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_stimulus.getKeys(keyList=['s', 'd'], waitRelease=False)
                _key_resp_stimulus_allKeys.extend(theseKeys)
                if len(_key_resp_stimulus_allKeys):
                    key_resp_stimulus.keys = _key_resp_stimulus_allKeys[-1].name  # just the last key pressed
                    key_resp_stimulus.rt = _key_resp_stimulus_allKeys[-1].rt
                    # was this correct?
                    if (key_resp_stimulus.keys == str(correct_ans_wm)) or (key_resp_stimulus.keys == correct_ans_wm):
                        key_resp_stimulus.corr = 1
                    else:
                        key_resp_stimulus.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stimulus_responseComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stimulus_response"-------
        for thisComponent in stimulus_responseComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp_stimulus.keys in ['', [], None]:  # No response was made
            key_resp_stimulus.keys = None
            # was no response the correct answer?!
            if str(correct_ans_wm).lower() == 'none':
               key_resp_stimulus.corr = 1;  # correct non-response
            else:
               key_resp_stimulus.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('key_resp_stimulus.keys',key_resp_stimulus.keys)
        trials.addData('key_resp_stimulus.corr', key_resp_stimulus.corr)
        if key_resp_stimulus.keys != None:  # we had a response
            trials.addData('key_resp_stimulus.rt', key_resp_stimulus.rt)
        
        # ------Prepare to start Routine "mw_probe"-------
        continueRoutine = True
        routineTimer.add(180.000000)
        # update component parameters for each repeat
        key_resp_mw.keys = []
        key_resp_mw.rt = []
        _key_resp_mw_allKeys = []
        # keep track of which components have finished
        mw_probeComponents = [mw_text, key_resp_mw]
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
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = mw_probeClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=mw_probeClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *mw_text* updates
            if mw_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mw_text.frameNStart = frameN  # exact frame index
                mw_text.tStart = t  # local t and not account for scr refresh
                mw_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mw_text, 'tStartRefresh')  # time at next scr refresh
                mw_text.setAutoDraw(True)
            if mw_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mw_text.tStartRefresh + 180.0-frameTolerance:
                    # keep track of stop time/frame for later
                    mw_text.tStop = t  # not accounting for scr refresh
                    mw_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mw_text, 'tStopRefresh')  # time at next scr refresh
                    mw_text.setAutoDraw(False)
            
            # *key_resp_mw* updates
            waitOnFlip = False
            if key_resp_mw.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_mw.frameNStart = frameN  # exact frame index
                key_resp_mw.tStart = t  # local t and not account for scr refresh
                key_resp_mw.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_mw, 'tStartRefresh')  # time at next scr refresh
                key_resp_mw.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_mw.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_mw.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_mw.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_mw.tStartRefresh + 180.0-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_mw.tStop = t  # not accounting for scr refresh
                    key_resp_mw.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_mw, 'tStopRefresh')  # time at next scr refresh
                    key_resp_mw.status = FINISHED
            if key_resp_mw.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_mw.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8'], waitRelease=False)
                _key_resp_mw_allKeys.extend(theseKeys)
                if len(_key_resp_mw_allKeys):
                    key_resp_mw.keys = _key_resp_mw_allKeys[-1].name  # just the last key pressed
                    key_resp_mw.rt = _key_resp_mw_allKeys[-1].rt
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
        if key_resp_mw.keys in ['', [], None]:  # No response was made
            key_resp_mw.keys = None
        trials.addData('key_resp_mw.keys',key_resp_mw.keys)
        if key_resp_mw.keys != None:  # we had a response
            trials.addData('key_resp_mw.rt', key_resp_mw.rt)
        
        # ------Prepare to start Routine "feedback_trials"-------
        continueRoutine = True
        # update component parameters for each repeat
        if not key_resp_stimulus.keys :
            msg="Failed to respond"
        elif correct_ans_wm == key_resp_stimulus.keys:#stored on last run routine
            msg="That trial was correct! Press SPACE to continue."
        else:
            msg="Oops! That trial was incorrect. Press SPACE to continue."
            
        if key_resp_stimulus.corr == 1:
            corr_count = corr_count + 1
        else:
            corr_count = corr_count
        text_13.setText(msg)
        key_resp_17.keys = []
        key_resp_17.rt = []
        _key_resp_17_allKeys = []
        # keep track of which components have finished
        feedback_trialsComponents = [text_13, key_resp_17]
        for thisComponent in feedback_trialsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedback_trialsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback_trials"-------
        while continueRoutine:
            # get current time
            t = feedback_trialsClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedback_trialsClock)
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
            
            # *key_resp_17* updates
            waitOnFlip = False
            if key_resp_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_17.frameNStart = frameN  # exact frame index
                key_resp_17.tStart = t  # local t and not account for scr refresh
                key_resp_17.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_17, 'tStartRefresh')  # time at next scr refresh
                key_resp_17.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_17.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_17.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_17.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_17.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_17_allKeys.extend(theseKeys)
                if len(_key_resp_17_allKeys):
                    key_resp_17.keys = _key_resp_17_allKeys[-1].name  # just the last key pressed
                    key_resp_17.rt = _key_resp_17_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedback_trialsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback_trials"-------
        for thisComponent in feedback_trialsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('text_13.started', text_13.tStartRefresh)
        trials.addData('text_13.stopped', text_13.tStopRefresh)
        # the Routine "feedback_trials" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 6.0 repeats of 'trials'
    
    
    # ------Prepare to start Routine "end_block"-------
    continueRoutine = True
    # update component parameters for each repeat
    msg = "You got %i trials correct!" %(corr_count)
    
    if (block_n == 0):
        block_message = "You have reached the end of the practice."
    else:
        block_message = "You have reached the end of block %i of %i." %(block_n, block_total)
    text_block_end.setText(block_message)
    text_6.setText(msg)
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    end_blockComponents = [text_block_end, text_6, text_2, key_resp_3]
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
        
        # *text_block_end* updates
        if text_block_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_block_end.frameNStart = frameN  # exact frame index
            text_block_end.tStart = t  # local t and not account for scr refresh
            text_block_end.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_block_end, 'tStartRefresh')  # time at next scr refresh
            text_block_end.setAutoDraw(True)
        
        # *text_6* updates
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            text_6.setAutoDraw(True)
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        
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
    block_n = block_n + 1
    
    block.addData('text_6.started', text_6.tStartRefresh)
    block.addData('text_6.stopped', text_6.tStopRefresh)
    block.addData('text_2.started', text_2.tStartRefresh)
    block.addData('text_2.stopped', text_2.tStopRefresh)
    # the Routine "end_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed block_total repeats of 'block'


# ------Prepare to start Routine "mw_q_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_15.keys = []
key_resp_15.rt = []
_key_resp_15_allKeys = []
# keep track of which components have finished
mw_q_instructComponents = [text, text_number_2, text_text_2, mw_q_continue_2, key_resp_15]
for thisComponent in mw_q_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
mw_q_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "mw_q_instruct"-------
while continueRoutine:
    # get current time
    t = mw_q_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=mw_q_instructClock)
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
    
    # *text_number_2* updates
    if text_number_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_number_2.frameNStart = frameN  # exact frame index
        text_number_2.tStart = t  # local t and not account for scr refresh
        text_number_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_number_2, 'tStartRefresh')  # time at next scr refresh
        text_number_2.setAutoDraw(True)
    
    # *text_text_2* updates
    if text_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_text_2.frameNStart = frameN  # exact frame index
        text_text_2.tStart = t  # local t and not account for scr refresh
        text_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_text_2, 'tStartRefresh')  # time at next scr refresh
        text_text_2.setAutoDraw(True)
    
    # *mw_q_continue_2* updates
    if mw_q_continue_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mw_q_continue_2.frameNStart = frameN  # exact frame index
        mw_q_continue_2.tStart = t  # local t and not account for scr refresh
        mw_q_continue_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mw_q_continue_2, 'tStartRefresh')  # time at next scr refresh
        mw_q_continue_2.setAutoDraw(True)
    
    # *key_resp_15* updates
    waitOnFlip = False
    if key_resp_15.status == NOT_STARTED and tThisFlip >= 0.25-frameTolerance:
        # keep track of start time/frame for later
        key_resp_15.frameNStart = frameN  # exact frame index
        key_resp_15.tStart = t  # local t and not account for scr refresh
        key_resp_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_15, 'tStartRefresh')  # time at next scr refresh
        key_resp_15.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_15.clock.reset)  # t=0 on next screen flip
    if key_resp_15.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_15.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_15_allKeys.extend(theseKeys)
        if len(_key_resp_15_allKeys):
            key_resp_15.keys = _key_resp_15_allKeys[-1].name  # just the last key pressed
            key_resp_15.rt = _key_resp_15_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in mw_q_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "mw_q_instruct"-------
for thisComponent in mw_q_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# the Routine "mw_q_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_maas = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('maas.xlsx'),
    seed=None, name='trials_maas')
thisExp.addLoop(trials_maas)  # add the loop to the experiment
thisTrials_maa = trials_maas.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_maa.rgb)
if thisTrials_maa != None:
    for paramName in thisTrials_maa:
        exec('{} = thisTrials_maa[paramName]'.format(paramName))

for thisTrials_maa in trials_maas:
    currentLoop = trials_maas
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_maa.rgb)
    if thisTrials_maa != None:
        for paramName in thisTrials_maa:
            exec('{} = thisTrials_maa[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "mw_questions"-------
    continueRoutine = True
    # update component parameters for each repeat
    mw_q_text_2.setText(question)
    key_resp_mw_q.keys = []
    key_resp_mw_q.rt = []
    _key_resp_mw_q_allKeys = []
    key_resp_13.keys = []
    key_resp_13.rt = []
    _key_resp_13_allKeys = []
    # keep track of which components have finished
    mw_questionsComponents = [mw_q_text_2, text_number, text_text, mw_q_text, key_resp_mw_q, key_resp_13, mw_q_continue]
    for thisComponent in mw_questionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    mw_questionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "mw_questions"-------
    while continueRoutine:
        # get current time
        t = mw_questionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=mw_questionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if (key_resp_mw_q.keys == []):
            text_mw_q_op = 0
            mw_q_text_disp = "Please select a number."
        else:
            text_mw_q_op = 1
            mw_q_text_disp = key_resp_mw_q.keys
        
        # *mw_q_text_2* updates
        if mw_q_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mw_q_text_2.frameNStart = frameN  # exact frame index
            mw_q_text_2.tStart = t  # local t and not account for scr refresh
            mw_q_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mw_q_text_2, 'tStartRefresh')  # time at next scr refresh
            mw_q_text_2.setAutoDraw(True)
        
        # *text_number* updates
        if text_number.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_number.frameNStart = frameN  # exact frame index
            text_number.tStart = t  # local t and not account for scr refresh
            text_number.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_number, 'tStartRefresh')  # time at next scr refresh
            text_number.setAutoDraw(True)
        
        # *text_text* updates
        if text_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_text.frameNStart = frameN  # exact frame index
            text_text.tStart = t  # local t and not account for scr refresh
            text_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_text, 'tStartRefresh')  # time at next scr refresh
            text_text.setAutoDraw(True)
        
        # *mw_q_text* updates
        if mw_q_text.status == NOT_STARTED and tThisFlip >= 0.2-frameTolerance:
            # keep track of start time/frame for later
            mw_q_text.frameNStart = frameN  # exact frame index
            mw_q_text.tStart = t  # local t and not account for scr refresh
            mw_q_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mw_q_text, 'tStartRefresh')  # time at next scr refresh
            mw_q_text.setAutoDraw(True)
        if mw_q_text.status == STARTED:  # only update if drawing
            mw_q_text.setOpacity(text_mw_q_op, log=False)
            mw_q_text.setText(mw_q_text_disp, log=False)
        
        # *key_resp_mw_q* updates
        waitOnFlip = False
        if key_resp_mw_q.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_mw_q.frameNStart = frameN  # exact frame index
            key_resp_mw_q.tStart = t  # local t and not account for scr refresh
            key_resp_mw_q.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_mw_q, 'tStartRefresh')  # time at next scr refresh
            key_resp_mw_q.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_mw_q.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_mw_q.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_mw_q.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_mw_q.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7'], waitRelease=False)
            _key_resp_mw_q_allKeys.extend(theseKeys)
            if len(_key_resp_mw_q_allKeys):
                key_resp_mw_q.keys = _key_resp_mw_q_allKeys[-1].name  # just the last key pressed
                key_resp_mw_q.rt = _key_resp_mw_q_allKeys[-1].rt
        
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
        if key_resp_13.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_13.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_13_allKeys.extend(theseKeys)
            if len(_key_resp_13_allKeys):
                key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
                key_resp_13.rt = _key_resp_13_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *mw_q_continue* updates
        if mw_q_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mw_q_continue.frameNStart = frameN  # exact frame index
            mw_q_continue.tStart = t  # local t and not account for scr refresh
            mw_q_continue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mw_q_continue, 'tStartRefresh')  # time at next scr refresh
            mw_q_continue.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in mw_questionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "mw_questions"-------
    for thisComponent in mw_questionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_mw_q.keys in ['', [], None]:  # No response was made
        key_resp_mw_q.keys = None
    trials_maas.addData('key_resp_mw_q.keys',key_resp_mw_q.keys)
    if key_resp_mw_q.keys != None:  # we had a response
        trials_maas.addData('key_resp_mw_q.rt', key_resp_mw_q.rt)
    # the Routine "mw_questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_maas'


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
endComponents = [text_end, key_resp_2]
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
    
    # *text_end* updates
    if text_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_end.frameNStart = frameN  # exact frame index
        text_end.tStart = t  # local t and not account for scr refresh
        text_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_end, 'tStartRefresh')  # time at next scr refresh
        text_end.setAutoDraw(True)
    
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
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
