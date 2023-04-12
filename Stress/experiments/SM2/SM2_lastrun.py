#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.4),
    on Tue Jun 28 18:03:51 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2022.1.4')


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
expName = 'SM1'  # from the Builder filename that created this script
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
    originPath='/Users/kellycotton/Dropbox/Research/Stress/SM2/SM2_lastrun.py',
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
    monitor='testMonitor', color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
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
from PIL import Image, ImageOps
import math
import colorsys
import re


positions = [(-.25,0),(-.25,.25),(0,.25),(.25,.25),(.25,0),(.25,-.25),(0,-.25),(-.25,-.25)]
circle_size = (0.2, 0.2)
dot_size = (0.05, 0.05)
angles = list(range(1,360))
dot_pos_resp = [0,0]
original_imgs = [""]*540
fix_time = .5
stim_array_time = .75
parity_time = 1.2
image_size = (0.1, 0.1)
block_n = 1
trial_n = 1
block_total = 1
trial_total = 1
memory_items = []
points_total = 0

i = 1
k = 1
for k in range(540):
    original_imgs[k] = "object_stim/obj{}.jpg".format(k)
    
shuffle(original_imgs)

def scalar_to_rgb(scalar):
    color_list = colorsys.hsv_to_rgb(scalar, 1, 1)
    color_list = [element * 255 for element in color_list]
    return color_list

# Initialize components for Routine "response_perception"
response_perceptionClock = core.Clock()
mouse_resp_perc = event.Mouse(win=win)
x, y = [None, None]
mouse_resp_perc.mouseClock = core.Clock()
circle_resp_7 = visual.Polygon(
    win=win, name='circle_resp_7',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[.25,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-2.0, interpolate=True)
image_6 = visual.ImageStim(
    win=win,
    name='image_6', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[.25,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
dot_resp1_7 = visual.Polygon(
    win=win, name='dot_resp1_7',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-4.0, interpolate=True)
stim1_3 = visual.ImageStim(
    win=win,
    name='stim1_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[-0.25, 0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
fixation_3 = visual.ShapeStim(
    win=win, name='fixation_3', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=-6.0, interpolate=True)
img_gray_4 = visual.ImageStim(
    win=win,
    name='img_gray_4', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[.25,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)

# Initialize components for Routine "instructions_1"
instructions_1Clock = core.Clock()
text_11 = visual.TextStim(win=win, name='text_11',
    text='During this experiment, you will complete several tasks. You will first practice the tasks separately then together before beginning the experiment.\n\nPlease read all instructions carefully throughout the experiment.\n\nDuring the first task, you will a series of colored objects. Your job is to remember to color of these objects. A small cross will appear in the center of the screen. This is your warning that the objects are coming and that you should pay attention. If you direct your eyes to the center of the screen you will see the objects better as they flash on the screen very quickly.\n\nAfter you have seen the objects, you will be asked to report the color of each object you saw previously. A gray version of one object will appear in the center of a ring. When you move the mouse, a dot will appear on the ring and the color of the object will begin to change. Use the mouse to move the dot along the ring until the object is the same color as you remember. Please click the mouse to submit your response. You will repeat this procedure for all three objects.\n\n\nPress SPACE to begin the practice.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "practice_memory_array1"
practice_memory_array1Clock = core.Clock()
stim1_2 = visual.ImageStim(
    win=win,
    name='stim1_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
stim2_2 = visual.ImageStim(
    win=win,
    name='stim2_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
stim3_2 = visual.ImageStim(
    win=win,
    name='stim3_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
fixation_2 = visual.ShapeStim(
    win=win, name='fixation_2', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=-4.0, interpolate=True)

# Initialize components for Routine "practice_response_memory"
practice_response_memoryClock = core.Clock()
mouse_resp_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_resp_3.mouseClock = core.Clock()
circle_resp_3 = visual.Polygon(
    win=win, name='circle_resp_3',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-2.0, interpolate=True)
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
dot_resp1_3 = visual.Polygon(
    win=win, name='dot_resp1_3',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-4.0, interpolate=True)
img_gray_2 = visual.ImageStim(
    win=win,
    name='img_gray_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# Initialize components for Routine "practice_feedback"
practice_feedbackClock = core.Clock()
text_6 = visual.TextStim(win=win, name='text_6',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()
image_4 = visual.ImageStim(
    win=win,
    name='image_4', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(-.25, 0), size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
circle_resp_4 = visual.Polygon(
    win=win, name='circle_resp_4',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-4.0, interpolate=True)
dot_resp1_4 = visual.Polygon(
    win=win, name='dot_resp1_4',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-5.0, interpolate=True)
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(.25, 0), size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
circle_resp_5 = visual.Polygon(
    win=win, name='circle_resp_5',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-7.0, interpolate=True)
dot_resp1_5 = visual.Polygon(
    win=win, name='dot_resp1_5',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-8.0, interpolate=True)
text_7 = visual.TextStim(win=win, name='text_7',
    text='Original Color:',
    font='Open Sans',
    pos=(-.25, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_8 = visual.TextStim(win=win, name='text_8',
    text='Your Response:',
    font='Open Sans',
    pos=(.25, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "instructions_2"
instructions_2Clock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text="Great, you have finished the first part of the practice!\n\nDuring the second task, you will see a number in the center of the screen. Your job is to decide if the number is even or odd. \n\nPress 'A' if the number is even and 'S' if the number is odd.\n\nPress SPACE to begin the practice.",
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "practice_parity1"
practice_parity1Clock = core.Clock()
parity_nums = [1,2,3,4,5,6,7,8]


text_5 = visual.TextStim(win=win, name='text_5',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
parity_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "practice_parity_feedback"
practice_parity_feedbackClock = core.Clock()
text_10 = visual.TextStim(win=win, name='text_10',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_9 = visual.TextStim(win=win, name='text_9',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "instructions_3"
instructions_3Clock = core.Clock()
text_13 = visual.TextStim(win=win, name='text_13',
    text="Great, you have finished the second part of the practice!\n\nDuring the final part of the practice, you will do both tasks that you just practiced. First, you will see the colored objects. Then you will see the numbers and indicate if they are even or odd. Finally, you will report the color of each object using the mouse.\n\nRemember, press 'A' if the number is even and 'S' if the number is odd.\n\nPress SPACE to begin the practice.",
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "practice_memory_array1"
practice_memory_array1Clock = core.Clock()
stim1_2 = visual.ImageStim(
    win=win,
    name='stim1_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
stim2_2 = visual.ImageStim(
    win=win,
    name='stim2_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
stim3_2 = visual.ImageStim(
    win=win,
    name='stim3_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
fixation_2 = visual.ShapeStim(
    win=win, name='fixation_2', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=-4.0, interpolate=True)

# Initialize components for Routine "delay1"
delay1Clock = core.Clock()
fixation_delay1 = visual.ShapeStim(
    win=win, name='fixation_delay1', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "practice_parity1"
practice_parity1Clock = core.Clock()
parity_nums = [1,2,3,4,5,6,7,8]


text_5 = visual.TextStim(win=win, name='text_5',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
parity_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "delay2"
delay2Clock = core.Clock()
fixation_delay2 = visual.ShapeStim(
    win=win, name='fixation_delay2', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "practice_response_memory"
practice_response_memoryClock = core.Clock()
mouse_resp_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_resp_3.mouseClock = core.Clock()
circle_resp_3 = visual.Polygon(
    win=win, name='circle_resp_3',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-2.0, interpolate=True)
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
dot_resp1_3 = visual.Polygon(
    win=win, name='dot_resp1_3',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-4.0, interpolate=True)
img_gray_2 = visual.ImageStim(
    win=win,
    name='img_gray_2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# Initialize components for Routine "practice_feedback"
practice_feedbackClock = core.Clock()
text_6 = visual.TextStim(win=win, name='text_6',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()
image_4 = visual.ImageStim(
    win=win,
    name='image_4', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(-.25, 0), size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
circle_resp_4 = visual.Polygon(
    win=win, name='circle_resp_4',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-4.0, interpolate=True)
dot_resp1_4 = visual.Polygon(
    win=win, name='dot_resp1_4',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-5.0, interpolate=True)
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(.25, 0), size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
circle_resp_5 = visual.Polygon(
    win=win, name='circle_resp_5',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-7.0, interpolate=True)
dot_resp1_5 = visual.Polygon(
    win=win, name='dot_resp1_5',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-8.0, interpolate=True)
text_7 = visual.TextStim(win=win, name='text_7',
    text='Original Color:',
    font='Open Sans',
    pos=(-.25, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_8 = visual.TextStim(win=win, name='text_8',
    text='Your Response:',
    font='Open Sans',
    pos=(.25, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "practice_end"
practice_endClock = core.Clock()
text_14 = visual.TextStim(win=win, name='text_14',
    text='Great, you have finished the practice trials!\n\nNow we will begin the real trials. Everything will be the same as what you just practiced, except you will not receive feedback and you can now earn points! For each object color that you remember correctly, you will receive points. You will receive more points the closer your response is to the original color. \n\nAdditionally, you will see a circle around one of the objects when they are first presented. If you remember this item correctly, you will receive double points!\n\nPlease try to respond as quickly and accurately as possible.\n\nPress SPACE when you are ready to begin.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "remind"
remindClock = core.Clock()
text_18 = visual.TextStim(win=win, name='text_18',
    text="Remember, press 'A' if even, 'S' if odd.\n\nPress SPACE to begin.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_9 = keyboard.Keyboard()

# Initialize components for Routine "memory_array"
memory_arrayClock = core.Clock()
stim1 = visual.ImageStim(
    win=win,
    name='stim1', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
stim2 = visual.ImageStim(
    win=win,
    name='stim2', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
stim3 = visual.ImageStim(
    win=win,
    name='stim3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
circle_focus_item = visual.Polygon(
    win=win, name='circle_focus_item',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-4.0, interpolate=True)
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=-5.0, interpolate=True)

# Initialize components for Routine "delay1"
delay1Clock = core.Clock()
fixation_delay1 = visual.ShapeStim(
    win=win, name='fixation_delay1', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "parity"
parityClock = core.Clock()
parity_nums = [1,2,3,4,5,6,7,8]


text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
parity_resp = keyboard.Keyboard()

# Initialize components for Routine "delay2"
delay2Clock = core.Clock()
fixation_delay2 = visual.ShapeStim(
    win=win, name='fixation_delay2', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "response_memory"
response_memoryClock = core.Clock()
mouse_resp = event.Mouse(win=win)
x, y = [None, None]
mouse_resp.mouseClock = core.Clock()
score = [0,0,0]
circle_resp = visual.Polygon(
    win=win, name='circle_resp',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-2.0, interpolate=True)
image_1 = visual.ImageStim(
    win=win,
    name='image_1', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
dot_resp1 = visual.Polygon(
    win=win, name='dot_resp1',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-4.0, interpolate=True)
img_gray_1 = visual.ImageStim(
    win=win,
    name='img_gray_1', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp = keyboard.Keyboard()
text_2 = visual.TextStim(win=win, name='text_2',
    text='',
    font='Open Sans',
    pos=(0, -.1), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_4 = visual.TextStim(win=win, name='text_4',
    text='Current score:',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_16 = visual.TextStim(win=win, name='text_16',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_17 = visual.TextStim(win=win, name='text_17',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_15 = visual.TextStim(win=win, name='text_15',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "end_block"
end_blockClock = core.Clock()
msg='no message'
block_message = 'no message'

text_block_end = visual.TextStim(win=win, name='text_block_end',
    text='',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_19 = visual.TextStim(win=win, name='text_19',
    text='Please take a short break.\n\nPress SPACE when you are ready to begin again.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_8 = keyboard.Keyboard()

# Initialize components for Routine "end_task"
end_taskClock = core.Clock()
text_20 = visual.TextStim(win=win, name='text_20',
    text='You have finished this part of the experiment. Please let your experimenter know.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "instructions_ltm"
instructions_ltmClock = core.Clock()
text_21 = visual.TextStim(win=win, name='text_21',
    text='Now, we are going to do another memory. During this part of the experiment, you will first be presented with a single object in the center of the screen. You previously saw this object during an earlier part of the experiment. Like before, your job is to use the mouse to adjust the color of the object until it matches what you saw earlier. You will do this for all of the earlier objects.\n\nPress SPACE when you are ready to begin.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_11 = keyboard.Keyboard()

# Initialize components for Routine "ltm_response_memory"
ltm_response_memoryClock = core.Clock()
mouse_resp_ltm = event.Mouse(win=win)
x, y = [None, None]
mouse_resp_ltm.mouseClock = core.Clock()
circle_resp_6 = visual.Polygon(
    win=win, name='circle_resp_6',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=None,
    opacity=None, depth=-2.0, interpolate=True)
image_5 = visual.ImageStim(
    win=win,
    name='image_5', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
dot_resp1_6 = visual.Polygon(
    win=win, name='dot_resp1_6',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0039, 0.0039, 0.0039], fillColor=[0.0039, 0.0039, 0.0039],
    opacity=None, depth=-4.0, interpolate=True)
img_gray_3 = visual.ImageStim(
    win=win,
    name='img_gray_3', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=[0,0], size=image_size,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# Initialize components for Routine "end_task"
end_taskClock = core.Clock()
text_20 = visual.TextStim(win=win, name='text_20',
    text='You have finished this part of the experiment. Please let your experimenter know.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_10 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
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

# set up handler to look after randomisation of conditions etc
trials_perception = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('delay_conds.xlsx'),
    seed=None, name='trials_perception')
thisExp.addLoop(trials_perception)  # add the loop to the experiment
thisTrials_perception = trials_perception.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_perception.rgb)
if thisTrials_perception != None:
    for paramName in thisTrials_perception:
        exec('{} = thisTrials_perception[paramName]'.format(paramName))

for thisTrials_perception in trials_perception:
    currentLoop = trials_perception
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_perception.rgb)
    if thisTrials_perception != None:
        for paramName in thisTrials_perception:
            exec('{} = thisTrials_perception[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "response_perception"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_resp_perc
    gotValidClick = False  # until a click is received
    
    mouse_resp_perc.getPos()
    mouse_resp_perc.setPos([0.25, 0])
    current_pos = mouse_resp_perc.setPos([0.25, 0])
    
    shuffle(angles)
    
    trial_angles = [angles[0]]
    print(trial_angles)
    err_total = 0
    
    stim = [Image.open(original_imgs[i]).convert('L')]
    stim_files = [original_imgs[i]]
    
    colors = scalar_to_rgb(trial_angles[0]/360)
    
    stim_1_color = ImageOps.colorize(stim[0], black = "black", mid = colors, white = "white")
    
    img_gray = stim[0]
    stim_presented = stim_files[0].split('object_stim/')[1].split('.jpg')[0]
    trial_n = i
    
    win.mouseVisible = True
    circle_resp_7.setSize(circle_size)
    dot_resp1_7.setSize(dot_size)
    stim1_3.setImage(stim_1_color)
    img_gray_4.setImage(img_gray)
    # keep track of which components have finished
    response_perceptionComponents = [mouse_resp_perc, circle_resp_7, image_6, dot_resp1_7, stim1_3, fixation_3, img_gray_4]
    for thisComponent in response_perceptionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    response_perceptionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "response_perception"-------
    while continueRoutine:
        # get current time
        t = response_perceptionClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=response_perceptionClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *mouse_resp_perc* updates
        if mouse_resp_perc.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_resp_perc.frameNStart = frameN  # exact frame index
            mouse_resp_perc.tStart = t  # local t and not account for scr refresh
            mouse_resp_perc.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_resp_perc, 'tStartRefresh')  # time at next scr refresh
            mouse_resp_perc.status = STARTED
            mouse_resp_perc.mouseClock.reset()
            prevButtonState = mouse_resp_perc.getPressed()  # if button is down already this ISN'T a new click
        if mouse_resp_perc.status == STARTED:  # only update if started and not finished!
            buttons = mouse_resp_perc.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    continueRoutine = False  # abort routine on response        
        mouse_x = mouse_resp_perc.getPos()[0]
        mouse_y = mouse_resp_perc.getPos()[1]
        adj_x = 0.25
        adj_y = 0
        
        mouse_x = mouse_x-(adj_x*2)
        mouse_y = mouse_y-(adj_y*2)
        r = np.linalg.norm([mouse_x,mouse_y])
        current_pos = [(mouse_x),(mouse_y)]
        
        cterm = [0, (- 50)];
        if (r == 0):
            theta = 0;
        elif (r != 0):
            theta = math.acos(np.dot(current_pos, cterm) / (r * -50))
        if (mouse_x < 0):
            theta = ((2 * pi) - theta)
        
        curr_angle = round(theta*(180/pi))
        
        dot_pos_resp = [(0.25 + ((circle_size[0] / 2) * sin(theta))), 
            (0 + ((circle_size[0] / 2) * cos(theta)))] 
        
        color_rgb = scalar_to_rgb(curr_angle/360)
        img_color_response = ImageOps.colorize(stim[0], black = "black", mid = color_rgb, white = "white")
        
        
        
        
        # *circle_resp_7* updates
        if circle_resp_7.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            circle_resp_7.frameNStart = frameN  # exact frame index
            circle_resp_7.tStart = t  # local t and not account for scr refresh
            circle_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(circle_resp_7, 'tStartRefresh')  # time at next scr refresh
            circle_resp_7.setAutoDraw(True)
        
        # *image_6* updates
        if image_6.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            image_6.frameNStart = frameN  # exact frame index
            image_6.tStart = t  # local t and not account for scr refresh
            image_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_6, 'tStartRefresh')  # time at next scr refresh
            image_6.setAutoDraw(True)
        if image_6.status == STARTED:  # only update if drawing
            image_6.setImage(img_color_response, log=False)
        
        # *dot_resp1_7* updates
        if dot_resp1_7.status == NOT_STARTED and all(current_pos) != all([0.0,0.0]):
            # keep track of start time/frame for later
            dot_resp1_7.frameNStart = frameN  # exact frame index
            dot_resp1_7.tStart = t  # local t and not account for scr refresh
            dot_resp1_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dot_resp1_7, 'tStartRefresh')  # time at next scr refresh
            dot_resp1_7.setAutoDraw(True)
        if dot_resp1_7.status == STARTED:  # only update if drawing
            dot_resp1_7.setPos(dot_pos_resp, log=False)
        
        # *stim1_3* updates
        if stim1_3.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            stim1_3.frameNStart = frameN  # exact frame index
            stim1_3.tStart = t  # local t and not account for scr refresh
            stim1_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim1_3, 'tStartRefresh')  # time at next scr refresh
            stim1_3.setAutoDraw(True)
        
        # *fixation_3* updates
        if fixation_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_3.frameNStart = frameN  # exact frame index
            fixation_3.tStart = t  # local t and not account for scr refresh
            fixation_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_3, 'tStartRefresh')  # time at next scr refresh
            fixation_3.setAutoDraw(True)
        
        # *img_gray_4* updates
        if img_gray_4.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
            # keep track of start time/frame for later
            img_gray_4.frameNStart = frameN  # exact frame index
            img_gray_4.tStart = t  # local t and not account for scr refresh
            img_gray_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_gray_4, 'tStartRefresh')  # time at next scr refresh
            img_gray_4.setAutoDraw(True)
        if img_gray_4.status == STARTED:
            if bool(all(current_pos) != all([0.0,0.0])):
                # keep track of stop time/frame for later
                img_gray_4.tStop = t  # not accounting for scr refresh
                img_gray_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(img_gray_4, 'tStopRefresh')  # time at next scr refresh
                img_gray_4.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in response_perceptionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "response_perception"-------
    for thisComponent in response_perceptionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for trials_perception (TrialHandler)
    x, y = mouse_resp_perc.getPos()
    buttons = mouse_resp_perc.getPressed()
    trials_perception.addData('mouse_resp_perc.x', x)
    trials_perception.addData('mouse_resp_perc.y', y)
    trials_perception.addData('mouse_resp_perc.leftButton', buttons[0])
    trials_perception.addData('mouse_resp_perc.midButton', buttons[1])
    trials_perception.addData('mouse_resp_perc.rightButton', buttons[2])
    thisExp.addData('disp_angle', trial_angles[0])
    thisExp.addData('resp_angle', curr_angle)
    thisExp.addData('block_n', block_n)
    thisExp.addData('trial_n', trial_n)
    thisExp.addData('stim_presented', stim_presented)
    thisExp.addData('stim_file', stim_files[0])
    
    
    err_angle = (trial_angles[0] - curr_angle + 360) % 360
    if (err_angle > 180):
        err_angle = 360 - err_angle
        
    thisExp.addData('err_angle', err_angle)
    
    if (err_angle == 0):
        points = 15
    elif (err_angle <= 5):
        points = 10
    elif (err_angle <= 10):
        points = 5
    elif (err_angle <= 30):
        points = 2
    else:
        points = 0
    
    
    points_total = points_total + points
    
    thisExp.addData('points', points)
    
    win.mouseVisible = False
    
    memory_items.append([stim_files[0], trial_angles[0], 0, delay_1])
    
    i = i+1
    # the Routine "response_perception" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials_perception'


# ------Prepare to start Routine "instructions_1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
win.mouseVisible = False
# keep track of which components have finished
instructions_1Components = [text_11, key_resp_4]
for thisComponent in instructions_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_1"-------
while continueRoutine:
    # get current time
    t = instructions_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_1Clock)
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
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
    for thisComponent in instructions_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_1"-------
for thisComponent in instructions_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_1 = data.TrialHandler(nReps=3.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
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
    
    # ------Prepare to start Routine "practice_memory_array1"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(angles)
    shuffle(positions)
    
    trial_angles = [angles[0], angles[1], angles[2]]
    err_total = 0
    
    
    stim = [Image.open(original_imgs[i]).convert('L'),
            Image.open(original_imgs[i+1]).convert('L'),
            Image.open(original_imgs[i+2]).convert('L')]
    stim_files = [original_imgs[i], original_imgs[i+1], original_imgs[i+2]]
    
    colors = [scalar_to_rgb(trial_angles[0]/360), scalar_to_rgb(trial_angles[1]/360), scalar_to_rgb(trial_angles[2]/360)]
    
    stim_1_color = ImageOps.colorize(stim[0], black = "black", mid = colors[0], white = "white")
    stim_2_color = ImageOps.colorize(stim[1], black = "black", mid = colors[1], white = "white")
    stim_3_color = ImageOps.colorize(stim[2], black = "black", mid = colors[2], white = "white")
    
    focus_item = randint(0,2)
    stim1_2.setPos([positions[0]])
    stim1_2.setImage(stim_1_color)
    stim2_2.setPos([positions[1]])
    stim2_2.setImage(stim_2_color)
    stim3_2.setPos([positions[2]])
    stim3_2.setImage(stim_3_color)
    # keep track of which components have finished
    practice_memory_array1Components = [stim1_2, stim2_2, stim3_2, fixation_2]
    for thisComponent in practice_memory_array1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_memory_array1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_memory_array1"-------
    while continueRoutine:
        # get current time
        t = practice_memory_array1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_memory_array1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
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
            if tThisFlipGlobal > stim1_2.tStartRefresh + stim_array_time-frameTolerance:
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
            if tThisFlipGlobal > stim2_2.tStartRefresh + stim_array_time-frameTolerance:
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
            if tThisFlipGlobal > stim3_2.tStartRefresh + stim_array_time-frameTolerance:
                # keep track of stop time/frame for later
                stim3_2.tStop = t  # not accounting for scr refresh
                stim3_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim3_2, 'tStopRefresh')  # time at next scr refresh
                stim3_2.setAutoDraw(False)
        
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
            if tThisFlipGlobal > fixation_2.tStartRefresh + (fix_time+stim_array_time)-frameTolerance:
                # keep track of stop time/frame for later
                fixation_2.tStop = t  # not accounting for scr refresh
                fixation_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_2, 'tStopRefresh')  # time at next scr refresh
                fixation_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_memory_array1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_memory_array1"-------
    for thisComponent in practice_memory_array1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    j = 0
    parity_i = 0
    shuffle(parity_nums)
    
    # the Routine "practice_memory_array1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    practice_response_memory1 = data.TrialHandler(nReps=3.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practice_response_memory1')
    thisExp.addLoop(practice_response_memory1)  # add the loop to the experiment
    thisPractice_response_memory1 = practice_response_memory1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_response_memory1.rgb)
    if thisPractice_response_memory1 != None:
        for paramName in thisPractice_response_memory1:
            exec('{} = thisPractice_response_memory1[paramName]'.format(paramName))
    
    for thisPractice_response_memory1 in practice_response_memory1:
        currentLoop = practice_response_memory1
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_response_memory1.rgb)
        if thisPractice_response_memory1 != None:
            for paramName in thisPractice_response_memory1:
                exec('{} = thisPractice_response_memory1[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "practice_response_memory"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the mouse_resp_3
        gotValidClick = False  # until a click is received
        
        mouse_resp_3.getPos()
        mouse_resp_3.setPos(positions[j])
        current_pos = mouse_resp_3.setPos(positions[j])
        
        img_gray = stim[j]
        stim_presented = stim_files[j].split('object_stim/')[1].split('.jpg')[0]
        
        item_n = j
        
        win.mouseVisible = True
        circle_resp_3.setPos([positions[j]])
        circle_resp_3.setSize(circle_size)
        image_2.setPos([positions[j]])
        dot_resp1_3.setSize(dot_size)
        img_gray_2.setPos([positions[j]])
        img_gray_2.setImage(img_gray)
        # keep track of which components have finished
        practice_response_memoryComponents = [mouse_resp_3, circle_resp_3, image_2, dot_resp1_3, img_gray_2]
        for thisComponent in practice_response_memoryComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_response_memoryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_response_memory"-------
        while continueRoutine:
            # get current time
            t = practice_response_memoryClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_response_memoryClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # *mouse_resp_3* updates
            if mouse_resp_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_resp_3.frameNStart = frameN  # exact frame index
                mouse_resp_3.tStart = t  # local t and not account for scr refresh
                mouse_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_resp_3, 'tStartRefresh')  # time at next scr refresh
                mouse_resp_3.status = STARTED
                mouse_resp_3.mouseClock.reset()
                prevButtonState = mouse_resp_3.getPressed()  # if button is down already this ISN'T a new click
            if mouse_resp_3.status == STARTED:  # only update if started and not finished!
                buttons = mouse_resp_3.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        continueRoutine = False  # abort routine on response            
            mouse_x = mouse_resp_3.getPos()[0]
            mouse_y = mouse_resp_3.getPos()[1]
            adj_x = positions[j][0]
            adj_y = positions[j][1]
            
            mouse_x = mouse_x-(adj_x*2)
            mouse_y = mouse_y-(adj_y*2)
            r = np.linalg.norm([mouse_x,mouse_y])
            current_pos = [(mouse_x),(mouse_y)]
            
            cterm = [0, (- 50)];
            if (r == 0):
                theta = 0;
            elif (r != 0):
                theta = math.acos(np.dot(current_pos, cterm) / (r * -50))
            if (mouse_x < 0):
                theta = ((2 * pi) - theta)
            
            curr_angle = round(theta*(180/pi))
            
            dot_pos_resp = [(positions[j][0] + ((circle_size[0] / 2) * sin(theta))), 
                (positions[j][1] + ((circle_size[0] / 2) * cos(theta)))] 
            
            color_rgb = scalar_to_rgb(curr_angle/360)
            img_color_response = ImageOps.colorize(stim[j], black = "black", mid = color_rgb, white = "white")
            
            
            
            
            # *circle_resp_3* updates
            if circle_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                circle_resp_3.frameNStart = frameN  # exact frame index
                circle_resp_3.tStart = t  # local t and not account for scr refresh
                circle_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle_resp_3, 'tStartRefresh')  # time at next scr refresh
                circle_resp_3.setAutoDraw(True)
            
            # *image_2* updates
            if image_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                image_2.setAutoDraw(True)
            if image_2.status == STARTED:  # only update if drawing
                image_2.setImage(img_color_response, log=False)
            
            # *dot_resp1_3* updates
            if dot_resp1_3.status == NOT_STARTED and all(current_pos) != all([0.0,0.0]):
                # keep track of start time/frame for later
                dot_resp1_3.frameNStart = frameN  # exact frame index
                dot_resp1_3.tStart = t  # local t and not account for scr refresh
                dot_resp1_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dot_resp1_3, 'tStartRefresh')  # time at next scr refresh
                dot_resp1_3.setAutoDraw(True)
            if dot_resp1_3.status == STARTED:  # only update if drawing
                dot_resp1_3.setPos(dot_pos_resp, log=False)
            
            # *img_gray_2* updates
            if img_gray_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                img_gray_2.frameNStart = frameN  # exact frame index
                img_gray_2.tStart = t  # local t and not account for scr refresh
                img_gray_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(img_gray_2, 'tStartRefresh')  # time at next scr refresh
                img_gray_2.setAutoDraw(True)
            if img_gray_2.status == STARTED:
                if bool(all(current_pos) != all([0.0,0.0])):
                    # keep track of stop time/frame for later
                    img_gray_2.tStop = t  # not accounting for scr refresh
                    img_gray_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(img_gray_2, 'tStopRefresh')  # time at next scr refresh
                    img_gray_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_response_memoryComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_response_memory"-------
        for thisComponent in practice_response_memoryComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for practice_response_memory1 (TrialHandler)
        
        
        err_angle = (trial_angles[j] - curr_angle + 360) % 360
        if (err_angle > 180):
            err_angle = 360 - err_angle
            
        
        
        win.mouseVisible = False
        # the Routine "practice_response_memory" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "practice_feedback"-------
        continueRoutine = True
        # update component parameters for each repeat
        
        presented_color = ImageOps.colorize(stim[j], black = "black", mid = colors[j], white = "white")
        
        response_color = ImageOps.colorize(stim[j], black = "black", mid = color_rgb, white = "white")
        
        original_dot_pos = [(-.25 + ((circle_size[0] / 2) * sin(trial_angles[j]*(pi/180)))), 
            (0 + ((circle_size[0] / 2) * cos(trial_angles[j]*(pi/180))))] 
            
        response_dot_pos = [(.25 + ((circle_size[0] / 2) * sin(curr_angle*(pi/180)))), 
            (0 + ((circle_size[0] / 2) * cos(curr_angle*(pi/180))))] 
        
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        image_4.setImage(presented_color)
        circle_resp_4.setPos((-.25, 0))
        circle_resp_4.setSize(circle_size)
        dot_resp1_4.setPos(original_dot_pos)
        dot_resp1_4.setSize(dot_size)
        image_3.setImage(response_color)
        circle_resp_5.setPos((.25, 0))
        circle_resp_5.setSize(circle_size)
        dot_resp1_5.setPos(response_dot_pos)
        dot_resp1_5.setSize(dot_size)
        # keep track of which components have finished
        practice_feedbackComponents = [text_6, key_resp_2, image_4, circle_resp_4, dot_resp1_4, image_3, circle_resp_5, dot_resp1_5, text_7, text_8]
        for thisComponent in practice_feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_feedback"-------
        while continueRoutine:
            # get current time
            t = practice_feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_feedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_6* updates
            if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_6.frameNStart = frameN  # exact frame index
                text_6.tStart = t  # local t and not account for scr refresh
                text_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
                text_6.setAutoDraw(True)
            
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
            
            # *image_4* updates
            if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_4.frameNStart = frameN  # exact frame index
                image_4.tStart = t  # local t and not account for scr refresh
                image_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
                image_4.setAutoDraw(True)
            
            # *circle_resp_4* updates
            if circle_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                circle_resp_4.frameNStart = frameN  # exact frame index
                circle_resp_4.tStart = t  # local t and not account for scr refresh
                circle_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle_resp_4, 'tStartRefresh')  # time at next scr refresh
                circle_resp_4.setAutoDraw(True)
            
            # *dot_resp1_4* updates
            if dot_resp1_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                dot_resp1_4.frameNStart = frameN  # exact frame index
                dot_resp1_4.tStart = t  # local t and not account for scr refresh
                dot_resp1_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dot_resp1_4, 'tStartRefresh')  # time at next scr refresh
                dot_resp1_4.setAutoDraw(True)
            
            # *image_3* updates
            if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_3.frameNStart = frameN  # exact frame index
                image_3.tStart = t  # local t and not account for scr refresh
                image_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                image_3.setAutoDraw(True)
            
            # *circle_resp_5* updates
            if circle_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                circle_resp_5.frameNStart = frameN  # exact frame index
                circle_resp_5.tStart = t  # local t and not account for scr refresh
                circle_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle_resp_5, 'tStartRefresh')  # time at next scr refresh
                circle_resp_5.setAutoDraw(True)
            
            # *dot_resp1_5* updates
            if dot_resp1_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                dot_resp1_5.frameNStart = frameN  # exact frame index
                dot_resp1_5.tStart = t  # local t and not account for scr refresh
                dot_resp1_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dot_resp1_5, 'tStartRefresh')  # time at next scr refresh
                dot_resp1_5.setAutoDraw(True)
            
            # *text_7* updates
            if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_7.frameNStart = frameN  # exact frame index
                text_7.tStart = t  # local t and not account for scr refresh
                text_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
                text_7.setAutoDraw(True)
            
            # *text_8* updates
            if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_8.frameNStart = frameN  # exact frame index
                text_8.tStart = t  # local t and not account for scr refresh
                text_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
                text_8.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_feedback"-------
        for thisComponent in practice_feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        i = i+3
        j = j+1
        # the Routine "practice_feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 3.0 repeats of 'practice_response_memory1'
    
    thisExp.nextEntry()
    
# completed 3.0 repeats of 'practice_1'


# ------Prepare to start Routine "instructions_2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
instructions_2Components = [text_12, key_resp_5]
for thisComponent in instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_2"-------
while continueRoutine:
    # get current time
    t = instructions_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_2Clock)
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
    for thisComponent in instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_2"-------
for thisComponent in instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_2 = data.TrialHandler(nReps=5.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
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
    
    # ------Prepare to start Routine "practice_parity1"-------
    continueRoutine = True
    # update component parameters for each repeat
    num_presented = parity_nums[parity_i]
    
    if num_presented%2 == 0:
        corr_ans_parity = "a"
    else:
        corr_ans_parity = "s"
    
    
    text_5.setText(num_presented)
    parity_resp_2.keys = []
    parity_resp_2.rt = []
    _parity_resp_2_allKeys = []
    # keep track of which components have finished
    practice_parity1Components = [text_5, parity_resp_2]
    for thisComponent in practice_parity1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_parity1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_parity1"-------
    while continueRoutine:
        # get current time
        t = practice_parity1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_parity1Clock)
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
            if tThisFlipGlobal > text_5.tStartRefresh + parity_time-frameTolerance:
                # keep track of stop time/frame for later
                text_5.tStop = t  # not accounting for scr refresh
                text_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_5, 'tStopRefresh')  # time at next scr refresh
                text_5.setAutoDraw(False)
        
        # *parity_resp_2* updates
        waitOnFlip = False
        if parity_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            parity_resp_2.frameNStart = frameN  # exact frame index
            parity_resp_2.tStart = t  # local t and not account for scr refresh
            parity_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(parity_resp_2, 'tStartRefresh')  # time at next scr refresh
            parity_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(parity_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(parity_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if parity_resp_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > parity_resp_2.tStartRefresh + parity_time-frameTolerance:
                # keep track of stop time/frame for later
                parity_resp_2.tStop = t  # not accounting for scr refresh
                parity_resp_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(parity_resp_2, 'tStopRefresh')  # time at next scr refresh
                parity_resp_2.status = FINISHED
        if parity_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = parity_resp_2.getKeys(keyList=['a','s'], waitRelease=False)
            _parity_resp_2_allKeys.extend(theseKeys)
            if len(_parity_resp_2_allKeys):
                parity_resp_2.keys = _parity_resp_2_allKeys[-1].name  # just the last key pressed
                parity_resp_2.rt = _parity_resp_2_allKeys[-1].rt
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_parity1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_parity1"-------
    for thisComponent in practice_parity1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    parity_i = parity_i+1
    
    if corr_ans_parity == parity_resp_2.keys:
        msg = "Correct!"
    elif parity_resp_2.keys == []:
        msg = "No key pressed.\n\nRemember press 'A' if even and 'S' if odd."
    else:
        msg = "Incorrect\n\nRemember press 'A' if even and 'S' if odd."
    # the Routine "practice_parity1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "practice_parity_feedback"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_9.setText(msg)
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    practice_parity_feedbackComponents = [text_10, text_9, key_resp_3]
    for thisComponent in practice_parity_feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_parity_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_parity_feedback"-------
    while continueRoutine:
        # get current time
        t = practice_parity_feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_parity_feedbackClock)
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
        for thisComponent in practice_parity_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_parity_feedback"-------
    for thisComponent in practice_parity_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "practice_parity_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 5.0 repeats of 'practice_2'


# ------Prepare to start Routine "instructions_3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
instructions_3Components = [text_13, key_resp_6]
for thisComponent in instructions_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_3"-------
while continueRoutine:
    # get current time
    t = instructions_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_3Clock)
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
    for thisComponent in instructions_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_3"-------
for thisComponent in instructions_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_3 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('delay_conds.xlsx'),
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
    
    # ------Prepare to start Routine "practice_memory_array1"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(angles)
    shuffle(positions)
    
    trial_angles = [angles[0], angles[1], angles[2]]
    err_total = 0
    
    
    stim = [Image.open(original_imgs[i]).convert('L'),
            Image.open(original_imgs[i+1]).convert('L'),
            Image.open(original_imgs[i+2]).convert('L')]
    stim_files = [original_imgs[i], original_imgs[i+1], original_imgs[i+2]]
    
    colors = [scalar_to_rgb(trial_angles[0]/360), scalar_to_rgb(trial_angles[1]/360), scalar_to_rgb(trial_angles[2]/360)]
    
    stim_1_color = ImageOps.colorize(stim[0], black = "black", mid = colors[0], white = "white")
    stim_2_color = ImageOps.colorize(stim[1], black = "black", mid = colors[1], white = "white")
    stim_3_color = ImageOps.colorize(stim[2], black = "black", mid = colors[2], white = "white")
    
    focus_item = randint(0,2)
    stim1_2.setPos([positions[0]])
    stim1_2.setImage(stim_1_color)
    stim2_2.setPos([positions[1]])
    stim2_2.setImage(stim_2_color)
    stim3_2.setPos([positions[2]])
    stim3_2.setImage(stim_3_color)
    # keep track of which components have finished
    practice_memory_array1Components = [stim1_2, stim2_2, stim3_2, fixation_2]
    for thisComponent in practice_memory_array1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_memory_array1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_memory_array1"-------
    while continueRoutine:
        # get current time
        t = practice_memory_array1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_memory_array1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
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
            if tThisFlipGlobal > stim1_2.tStartRefresh + stim_array_time-frameTolerance:
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
            if tThisFlipGlobal > stim2_2.tStartRefresh + stim_array_time-frameTolerance:
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
            if tThisFlipGlobal > stim3_2.tStartRefresh + stim_array_time-frameTolerance:
                # keep track of stop time/frame for later
                stim3_2.tStop = t  # not accounting for scr refresh
                stim3_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim3_2, 'tStopRefresh')  # time at next scr refresh
                stim3_2.setAutoDraw(False)
        
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
            if tThisFlipGlobal > fixation_2.tStartRefresh + (fix_time+stim_array_time)-frameTolerance:
                # keep track of stop time/frame for later
                fixation_2.tStop = t  # not accounting for scr refresh
                fixation_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_2, 'tStopRefresh')  # time at next scr refresh
                fixation_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_memory_array1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_memory_array1"-------
    for thisComponent in practice_memory_array1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    j = 0
    parity_i = 0
    shuffle(parity_nums)
    
    # the Routine "practice_memory_array1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "delay1"-------
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    delay1Components = [fixation_delay1]
    for thisComponent in delay1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    delay1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "delay1"-------
    while continueRoutine:
        # get current time
        t = delay1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=delay1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_delay1* updates
        if fixation_delay1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_delay1.frameNStart = frameN  # exact frame index
            fixation_delay1.tStart = t  # local t and not account for scr refresh
            fixation_delay1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_delay1, 'tStartRefresh')  # time at next scr refresh
            fixation_delay1.setAutoDraw(True)
        if fixation_delay1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_delay1.tStartRefresh + delay_1-frameTolerance:
                # keep track of stop time/frame for later
                fixation_delay1.tStop = t  # not accounting for scr refresh
                fixation_delay1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_delay1, 'tStopRefresh')  # time at next scr refresh
                fixation_delay1.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in delay1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "delay1"-------
    for thisComponent in delay1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "delay1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    practice_parity_2 = data.TrialHandler(nReps=3.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practice_parity_2')
    thisExp.addLoop(practice_parity_2)  # add the loop to the experiment
    thisPractice_parity_2 = practice_parity_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_parity_2.rgb)
    if thisPractice_parity_2 != None:
        for paramName in thisPractice_parity_2:
            exec('{} = thisPractice_parity_2[paramName]'.format(paramName))
    
    for thisPractice_parity_2 in practice_parity_2:
        currentLoop = practice_parity_2
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_parity_2.rgb)
        if thisPractice_parity_2 != None:
            for paramName in thisPractice_parity_2:
                exec('{} = thisPractice_parity_2[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "practice_parity1"-------
        continueRoutine = True
        # update component parameters for each repeat
        num_presented = parity_nums[parity_i]
        
        if num_presented%2 == 0:
            corr_ans_parity = "a"
        else:
            corr_ans_parity = "s"
        
        
        text_5.setText(num_presented)
        parity_resp_2.keys = []
        parity_resp_2.rt = []
        _parity_resp_2_allKeys = []
        # keep track of which components have finished
        practice_parity1Components = [text_5, parity_resp_2]
        for thisComponent in practice_parity1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_parity1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_parity1"-------
        while continueRoutine:
            # get current time
            t = practice_parity1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_parity1Clock)
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
                if tThisFlipGlobal > text_5.tStartRefresh + parity_time-frameTolerance:
                    # keep track of stop time/frame for later
                    text_5.tStop = t  # not accounting for scr refresh
                    text_5.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_5, 'tStopRefresh')  # time at next scr refresh
                    text_5.setAutoDraw(False)
            
            # *parity_resp_2* updates
            waitOnFlip = False
            if parity_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                parity_resp_2.frameNStart = frameN  # exact frame index
                parity_resp_2.tStart = t  # local t and not account for scr refresh
                parity_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(parity_resp_2, 'tStartRefresh')  # time at next scr refresh
                parity_resp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(parity_resp_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(parity_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if parity_resp_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > parity_resp_2.tStartRefresh + parity_time-frameTolerance:
                    # keep track of stop time/frame for later
                    parity_resp_2.tStop = t  # not accounting for scr refresh
                    parity_resp_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(parity_resp_2, 'tStopRefresh')  # time at next scr refresh
                    parity_resp_2.status = FINISHED
            if parity_resp_2.status == STARTED and not waitOnFlip:
                theseKeys = parity_resp_2.getKeys(keyList=['a','s'], waitRelease=False)
                _parity_resp_2_allKeys.extend(theseKeys)
                if len(_parity_resp_2_allKeys):
                    parity_resp_2.keys = _parity_resp_2_allKeys[-1].name  # just the last key pressed
                    parity_resp_2.rt = _parity_resp_2_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_parity1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_parity1"-------
        for thisComponent in practice_parity1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        parity_i = parity_i+1
        
        if corr_ans_parity == parity_resp_2.keys:
            msg = "Correct!"
        elif parity_resp_2.keys == []:
            msg = "No key pressed.\n\nRemember press 'A' if even and 'S' if odd."
        else:
            msg = "Incorrect\n\nRemember press 'A' if even and 'S' if odd."
        # the Routine "practice_parity1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 3.0 repeats of 'practice_parity_2'
    
    
    # ------Prepare to start Routine "delay2"-------
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    delay2Components = [fixation_delay2]
    for thisComponent in delay2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    delay2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "delay2"-------
    while continueRoutine:
        # get current time
        t = delay2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=delay2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_delay2* updates
        if fixation_delay2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_delay2.frameNStart = frameN  # exact frame index
            fixation_delay2.tStart = t  # local t and not account for scr refresh
            fixation_delay2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_delay2, 'tStartRefresh')  # time at next scr refresh
            fixation_delay2.setAutoDraw(True)
        if fixation_delay2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_delay2.tStartRefresh + delay_2-frameTolerance:
                # keep track of stop time/frame for later
                fixation_delay2.tStop = t  # not accounting for scr refresh
                fixation_delay2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_delay2, 'tStopRefresh')  # time at next scr refresh
                fixation_delay2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in delay2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "delay2"-------
    for thisComponent in delay2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "delay2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    practice_response_memory2 = data.TrialHandler(nReps=3.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practice_response_memory2')
    thisExp.addLoop(practice_response_memory2)  # add the loop to the experiment
    thisPractice_response_memory2 = practice_response_memory2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_response_memory2.rgb)
    if thisPractice_response_memory2 != None:
        for paramName in thisPractice_response_memory2:
            exec('{} = thisPractice_response_memory2[paramName]'.format(paramName))
    
    for thisPractice_response_memory2 in practice_response_memory2:
        currentLoop = practice_response_memory2
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_response_memory2.rgb)
        if thisPractice_response_memory2 != None:
            for paramName in thisPractice_response_memory2:
                exec('{} = thisPractice_response_memory2[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "practice_response_memory"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the mouse_resp_3
        gotValidClick = False  # until a click is received
        
        mouse_resp_3.getPos()
        mouse_resp_3.setPos(positions[j])
        current_pos = mouse_resp_3.setPos(positions[j])
        
        img_gray = stim[j]
        stim_presented = stim_files[j].split('object_stim/')[1].split('.jpg')[0]
        
        item_n = j
        
        win.mouseVisible = True
        circle_resp_3.setPos([positions[j]])
        circle_resp_3.setSize(circle_size)
        image_2.setPos([positions[j]])
        dot_resp1_3.setSize(dot_size)
        img_gray_2.setPos([positions[j]])
        img_gray_2.setImage(img_gray)
        # keep track of which components have finished
        practice_response_memoryComponents = [mouse_resp_3, circle_resp_3, image_2, dot_resp1_3, img_gray_2]
        for thisComponent in practice_response_memoryComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_response_memoryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_response_memory"-------
        while continueRoutine:
            # get current time
            t = practice_response_memoryClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_response_memoryClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # *mouse_resp_3* updates
            if mouse_resp_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_resp_3.frameNStart = frameN  # exact frame index
                mouse_resp_3.tStart = t  # local t and not account for scr refresh
                mouse_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_resp_3, 'tStartRefresh')  # time at next scr refresh
                mouse_resp_3.status = STARTED
                mouse_resp_3.mouseClock.reset()
                prevButtonState = mouse_resp_3.getPressed()  # if button is down already this ISN'T a new click
            if mouse_resp_3.status == STARTED:  # only update if started and not finished!
                buttons = mouse_resp_3.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        continueRoutine = False  # abort routine on response            
            mouse_x = mouse_resp_3.getPos()[0]
            mouse_y = mouse_resp_3.getPos()[1]
            adj_x = positions[j][0]
            adj_y = positions[j][1]
            
            mouse_x = mouse_x-(adj_x*2)
            mouse_y = mouse_y-(adj_y*2)
            r = np.linalg.norm([mouse_x,mouse_y])
            current_pos = [(mouse_x),(mouse_y)]
            
            cterm = [0, (- 50)];
            if (r == 0):
                theta = 0;
            elif (r != 0):
                theta = math.acos(np.dot(current_pos, cterm) / (r * -50))
            if (mouse_x < 0):
                theta = ((2 * pi) - theta)
            
            curr_angle = round(theta*(180/pi))
            
            dot_pos_resp = [(positions[j][0] + ((circle_size[0] / 2) * sin(theta))), 
                (positions[j][1] + ((circle_size[0] / 2) * cos(theta)))] 
            
            color_rgb = scalar_to_rgb(curr_angle/360)
            img_color_response = ImageOps.colorize(stim[j], black = "black", mid = color_rgb, white = "white")
            
            
            
            
            # *circle_resp_3* updates
            if circle_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                circle_resp_3.frameNStart = frameN  # exact frame index
                circle_resp_3.tStart = t  # local t and not account for scr refresh
                circle_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle_resp_3, 'tStartRefresh')  # time at next scr refresh
                circle_resp_3.setAutoDraw(True)
            
            # *image_2* updates
            if image_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                image_2.setAutoDraw(True)
            if image_2.status == STARTED:  # only update if drawing
                image_2.setImage(img_color_response, log=False)
            
            # *dot_resp1_3* updates
            if dot_resp1_3.status == NOT_STARTED and all(current_pos) != all([0.0,0.0]):
                # keep track of start time/frame for later
                dot_resp1_3.frameNStart = frameN  # exact frame index
                dot_resp1_3.tStart = t  # local t and not account for scr refresh
                dot_resp1_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dot_resp1_3, 'tStartRefresh')  # time at next scr refresh
                dot_resp1_3.setAutoDraw(True)
            if dot_resp1_3.status == STARTED:  # only update if drawing
                dot_resp1_3.setPos(dot_pos_resp, log=False)
            
            # *img_gray_2* updates
            if img_gray_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                img_gray_2.frameNStart = frameN  # exact frame index
                img_gray_2.tStart = t  # local t and not account for scr refresh
                img_gray_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(img_gray_2, 'tStartRefresh')  # time at next scr refresh
                img_gray_2.setAutoDraw(True)
            if img_gray_2.status == STARTED:
                if bool(all(current_pos) != all([0.0,0.0])):
                    # keep track of stop time/frame for later
                    img_gray_2.tStop = t  # not accounting for scr refresh
                    img_gray_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(img_gray_2, 'tStopRefresh')  # time at next scr refresh
                    img_gray_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_response_memoryComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_response_memory"-------
        for thisComponent in practice_response_memoryComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for practice_response_memory2 (TrialHandler)
        
        
        err_angle = (trial_angles[j] - curr_angle + 360) % 360
        if (err_angle > 180):
            err_angle = 360 - err_angle
            
        
        
        win.mouseVisible = False
        # the Routine "practice_response_memory" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "practice_feedback"-------
        continueRoutine = True
        # update component parameters for each repeat
        
        presented_color = ImageOps.colorize(stim[j], black = "black", mid = colors[j], white = "white")
        
        response_color = ImageOps.colorize(stim[j], black = "black", mid = color_rgb, white = "white")
        
        original_dot_pos = [(-.25 + ((circle_size[0] / 2) * sin(trial_angles[j]*(pi/180)))), 
            (0 + ((circle_size[0] / 2) * cos(trial_angles[j]*(pi/180))))] 
            
        response_dot_pos = [(.25 + ((circle_size[0] / 2) * sin(curr_angle*(pi/180)))), 
            (0 + ((circle_size[0] / 2) * cos(curr_angle*(pi/180))))] 
        
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        image_4.setImage(presented_color)
        circle_resp_4.setPos((-.25, 0))
        circle_resp_4.setSize(circle_size)
        dot_resp1_4.setPos(original_dot_pos)
        dot_resp1_4.setSize(dot_size)
        image_3.setImage(response_color)
        circle_resp_5.setPos((.25, 0))
        circle_resp_5.setSize(circle_size)
        dot_resp1_5.setPos(response_dot_pos)
        dot_resp1_5.setSize(dot_size)
        # keep track of which components have finished
        practice_feedbackComponents = [text_6, key_resp_2, image_4, circle_resp_4, dot_resp1_4, image_3, circle_resp_5, dot_resp1_5, text_7, text_8]
        for thisComponent in practice_feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_feedback"-------
        while continueRoutine:
            # get current time
            t = practice_feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_feedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_6* updates
            if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_6.frameNStart = frameN  # exact frame index
                text_6.tStart = t  # local t and not account for scr refresh
                text_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
                text_6.setAutoDraw(True)
            
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
            
            # *image_4* updates
            if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_4.frameNStart = frameN  # exact frame index
                image_4.tStart = t  # local t and not account for scr refresh
                image_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
                image_4.setAutoDraw(True)
            
            # *circle_resp_4* updates
            if circle_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                circle_resp_4.frameNStart = frameN  # exact frame index
                circle_resp_4.tStart = t  # local t and not account for scr refresh
                circle_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle_resp_4, 'tStartRefresh')  # time at next scr refresh
                circle_resp_4.setAutoDraw(True)
            
            # *dot_resp1_4* updates
            if dot_resp1_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                dot_resp1_4.frameNStart = frameN  # exact frame index
                dot_resp1_4.tStart = t  # local t and not account for scr refresh
                dot_resp1_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dot_resp1_4, 'tStartRefresh')  # time at next scr refresh
                dot_resp1_4.setAutoDraw(True)
            
            # *image_3* updates
            if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_3.frameNStart = frameN  # exact frame index
                image_3.tStart = t  # local t and not account for scr refresh
                image_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                image_3.setAutoDraw(True)
            
            # *circle_resp_5* updates
            if circle_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                circle_resp_5.frameNStart = frameN  # exact frame index
                circle_resp_5.tStart = t  # local t and not account for scr refresh
                circle_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle_resp_5, 'tStartRefresh')  # time at next scr refresh
                circle_resp_5.setAutoDraw(True)
            
            # *dot_resp1_5* updates
            if dot_resp1_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                dot_resp1_5.frameNStart = frameN  # exact frame index
                dot_resp1_5.tStart = t  # local t and not account for scr refresh
                dot_resp1_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dot_resp1_5, 'tStartRefresh')  # time at next scr refresh
                dot_resp1_5.setAutoDraw(True)
            
            # *text_7* updates
            if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_7.frameNStart = frameN  # exact frame index
                text_7.tStart = t  # local t and not account for scr refresh
                text_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
                text_7.setAutoDraw(True)
            
            # *text_8* updates
            if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_8.frameNStart = frameN  # exact frame index
                text_8.tStart = t  # local t and not account for scr refresh
                text_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
                text_8.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_feedback"-------
        for thisComponent in practice_feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        i = i+3
        j = j+1
        # the Routine "practice_feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 3.0 repeats of 'practice_response_memory2'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'practice_3'


# ------Prepare to start Routine "practice_end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
points_total = 0
# keep track of which components have finished
practice_endComponents = [text_14, key_resp_7]
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
    
    # *text_14* updates
    if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_14.frameNStart = frameN  # exact frame index
        text_14.tStart = t  # local t and not account for scr refresh
        text_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
        text_14.setAutoDraw(True)
    
    # *key_resp_7* updates
    waitOnFlip = False
    if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
# the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
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
    
    # ------Prepare to start Routine "remind"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_9.keys = []
    key_resp_9.rt = []
    _key_resp_9_allKeys = []
    # keep track of which components have finished
    remindComponents = [text_18, key_resp_9]
    for thisComponent in remindComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    remindClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "remind"-------
    while continueRoutine:
        # get current time
        t = remindClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=remindClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_18* updates
        if text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_18.frameNStart = frameN  # exact frame index
            text_18.tStart = t  # local t and not account for scr refresh
            text_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
            text_18.setAutoDraw(True)
        
        # *key_resp_9* updates
        waitOnFlip = False
        if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
        for thisComponent in remindComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "remind"-------
    for thisComponent in remindComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "remind" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=trial_total, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('delay_conds.xlsx'),
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
        
        # ------Prepare to start Routine "memory_array"-------
        continueRoutine = True
        # update component parameters for each repeat
        shuffle(angles)
        shuffle(positions)
        
        trial_angles = [angles[0], angles[1], angles[2]]
        err_total = 0
        
        stim = [Image.open(original_imgs[i]).convert('L'),
                Image.open(original_imgs[i+1]).convert('L'),
                Image.open(original_imgs[i+2]).convert('L')]
        stim_files = [original_imgs[i], original_imgs[i+1], original_imgs[i+2]]
        
        colors = [scalar_to_rgb(trial_angles[0]/360), scalar_to_rgb(trial_angles[1]/360), scalar_to_rgb(trial_angles[2]/360)]
        
        stim_1_color = ImageOps.colorize(stim[0], black = "black", mid = colors[0], white = "white")
        stim_2_color = ImageOps.colorize(stim[1], black = "black", mid = colors[1], white = "white")
        stim_3_color = ImageOps.colorize(stim[2], black = "black", mid = colors[2], white = "white")
        
        focus_item = randint(0,3)
        
        
        stim1.setPos([positions[0]])
        stim1.setImage(stim_1_color)
        stim2.setPos([positions[1]])
        stim2.setImage(stim_2_color)
        stim3.setPos([positions[2]])
        stim3.setImage(stim_3_color)
        circle_focus_item.setPos([positions[focus_item]])
        circle_focus_item.setSize(circle_size)
        # keep track of which components have finished
        memory_arrayComponents = [stim1, stim2, stim3, circle_focus_item, fixation]
        for thisComponent in memory_arrayComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        memory_arrayClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "memory_array"-------
        while continueRoutine:
            # get current time
            t = memory_arrayClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=memory_arrayClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
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
                if tThisFlipGlobal > stim1.tStartRefresh + stim_array_time-frameTolerance:
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
                if tThisFlipGlobal > stim2.tStartRefresh + stim_array_time-frameTolerance:
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
                if tThisFlipGlobal > stim3.tStartRefresh + stim_array_time-frameTolerance:
                    # keep track of stop time/frame for later
                    stim3.tStop = t  # not accounting for scr refresh
                    stim3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim3, 'tStopRefresh')  # time at next scr refresh
                    stim3.setAutoDraw(False)
            
            # *circle_focus_item* updates
            if circle_focus_item.status == NOT_STARTED and tThisFlip >= fix_time-frameTolerance:
                # keep track of start time/frame for later
                circle_focus_item.frameNStart = frameN  # exact frame index
                circle_focus_item.tStart = t  # local t and not account for scr refresh
                circle_focus_item.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle_focus_item, 'tStartRefresh')  # time at next scr refresh
                circle_focus_item.setAutoDraw(True)
            if circle_focus_item.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > circle_focus_item.tStartRefresh + stim_array_time-frameTolerance:
                    # keep track of stop time/frame for later
                    circle_focus_item.tStop = t  # not accounting for scr refresh
                    circle_focus_item.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(circle_focus_item, 'tStopRefresh')  # time at next scr refresh
                    circle_focus_item.setAutoDraw(False)
            
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
                if tThisFlipGlobal > fixation.tStartRefresh + (fix_time+stim_array_time)-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                    fixation.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in memory_arrayComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "memory_array"-------
        for thisComponent in memory_arrayComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        j = 0
        parity_i = 0
        shuffle(parity_nums)
        
        # the Routine "memory_array" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "delay1"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        delay1Components = [fixation_delay1]
        for thisComponent in delay1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        delay1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "delay1"-------
        while continueRoutine:
            # get current time
            t = delay1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=delay1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation_delay1* updates
            if fixation_delay1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation_delay1.frameNStart = frameN  # exact frame index
                fixation_delay1.tStart = t  # local t and not account for scr refresh
                fixation_delay1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation_delay1, 'tStartRefresh')  # time at next scr refresh
                fixation_delay1.setAutoDraw(True)
            if fixation_delay1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation_delay1.tStartRefresh + delay_1-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation_delay1.tStop = t  # not accounting for scr refresh
                    fixation_delay1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation_delay1, 'tStopRefresh')  # time at next scr refresh
                    fixation_delay1.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in delay1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "delay1"-------
        for thisComponent in delay1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "delay1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        parity_trials = data.TrialHandler(nReps=3.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='parity_trials')
        thisExp.addLoop(parity_trials)  # add the loop to the experiment
        thisParity_trial = parity_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisParity_trial.rgb)
        if thisParity_trial != None:
            for paramName in thisParity_trial:
                exec('{} = thisParity_trial[paramName]'.format(paramName))
        
        for thisParity_trial in parity_trials:
            currentLoop = parity_trials
            # abbreviate parameter names if possible (e.g. rgb = thisParity_trial.rgb)
            if thisParity_trial != None:
                for paramName in thisParity_trial:
                    exec('{} = thisParity_trial[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "parity"-------
            continueRoutine = True
            # update component parameters for each repeat
            num_presented = parity_nums[parity_i]
            
            if num_presented%2 == 0:
                corr_ans_parity = "a"
            else:
                corr_ans_parity = "s"
            text.setText(num_presented)
            parity_resp.keys = []
            parity_resp.rt = []
            _parity_resp_allKeys = []
            # keep track of which components have finished
            parityComponents = [text, parity_resp]
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
                
                # *text* updates
                if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text.frameNStart = frameN  # exact frame index
                    text.tStart = t  # local t and not account for scr refresh
                    text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                    text.setAutoDraw(True)
                if text.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text.tStartRefresh + parity_time-frameTolerance:
                        # keep track of stop time/frame for later
                        text.tStop = t  # not accounting for scr refresh
                        text.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
                        text.setAutoDraw(False)
                
                # *parity_resp* updates
                waitOnFlip = False
                if parity_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    parity_resp.frameNStart = frameN  # exact frame index
                    parity_resp.tStart = t  # local t and not account for scr refresh
                    parity_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(parity_resp, 'tStartRefresh')  # time at next scr refresh
                    parity_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(parity_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(parity_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if parity_resp.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > parity_resp.tStartRefresh + parity_time-frameTolerance:
                        # keep track of stop time/frame for later
                        parity_resp.tStop = t  # not accounting for scr refresh
                        parity_resp.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(parity_resp, 'tStopRefresh')  # time at next scr refresh
                        parity_resp.status = FINISHED
                if parity_resp.status == STARTED and not waitOnFlip:
                    theseKeys = parity_resp.getKeys(keyList=['a','s'], waitRelease=False)
                    _parity_resp_allKeys.extend(theseKeys)
                    if len(_parity_resp_allKeys):
                        parity_resp.keys = _parity_resp_allKeys[-1].name  # just the last key pressed
                        parity_resp.rt = _parity_resp_allKeys[-1].rt
                        # was this correct?
                        if (parity_resp.keys == str(corr_ans_parity)) or (parity_resp.keys == corr_ans_parity):
                            parity_resp.corr = 1
                        else:
                            parity_resp.corr = 0
                
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
            parity_i = parity_i+1
            thisExp.addData('parity_i', parity_i)
            thisExp.addData('num_presented', num_presented)
            thisExp.addData('trial_n', trial_n)
            
            # check responses
            if parity_resp.keys in ['', [], None]:  # No response was made
                parity_resp.keys = None
                # was no response the correct answer?!
                if str(corr_ans_parity).lower() == 'none':
                   parity_resp.corr = 1;  # correct non-response
                else:
                   parity_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for parity_trials (TrialHandler)
            parity_trials.addData('parity_resp.keys',parity_resp.keys)
            parity_trials.addData('parity_resp.corr', parity_resp.corr)
            if parity_resp.keys != None:  # we had a response
                parity_trials.addData('parity_resp.rt', parity_resp.rt)
            # the Routine "parity" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 3.0 repeats of 'parity_trials'
        
        
        # ------Prepare to start Routine "delay2"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        delay2Components = [fixation_delay2]
        for thisComponent in delay2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        delay2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "delay2"-------
        while continueRoutine:
            # get current time
            t = delay2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=delay2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation_delay2* updates
            if fixation_delay2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation_delay2.frameNStart = frameN  # exact frame index
                fixation_delay2.tStart = t  # local t and not account for scr refresh
                fixation_delay2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation_delay2, 'tStartRefresh')  # time at next scr refresh
                fixation_delay2.setAutoDraw(True)
            if fixation_delay2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation_delay2.tStartRefresh + delay_2-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation_delay2.tStop = t  # not accounting for scr refresh
                    fixation_delay2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation_delay2, 'tStopRefresh')  # time at next scr refresh
                    fixation_delay2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in delay2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "delay2"-------
        for thisComponent in delay2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "delay2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        memory_trials = data.TrialHandler(nReps=3.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='memory_trials')
        thisExp.addLoop(memory_trials)  # add the loop to the experiment
        thisMemory_trial = memory_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisMemory_trial.rgb)
        if thisMemory_trial != None:
            for paramName in thisMemory_trial:
                exec('{} = thisMemory_trial[paramName]'.format(paramName))
        
        for thisMemory_trial in memory_trials:
            currentLoop = memory_trials
            # abbreviate parameter names if possible (e.g. rgb = thisMemory_trial.rgb)
            if thisMemory_trial != None:
                for paramName in thisMemory_trial:
                    exec('{} = thisMemory_trial[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "response_memory"-------
            continueRoutine = True
            # update component parameters for each repeat
            # setup some python lists for storing info about the mouse_resp
            gotValidClick = False  # until a click is received
            
            mouse_resp.getPos()
            mouse_resp.setPos(positions[j])
            current_pos = mouse_resp.setPos(positions[j])
            
            img_gray = stim[j]
            stim_presented = stim_files[j].split('object_stim/')[1].split('.jpg')[0]
            
            
            item_n = j
            
            win.mouseVisible = True
            circle_resp.setPos([positions[j]])
            circle_resp.setSize(circle_size)
            image_1.setPos([positions[j]])
            dot_resp1.setSize(dot_size)
            img_gray_1.setPos([positions[j]])
            img_gray_1.setImage(img_gray)
            # keep track of which components have finished
            response_memoryComponents = [mouse_resp, circle_resp, image_1, dot_resp1, img_gray_1]
            for thisComponent in response_memoryComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            response_memoryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "response_memory"-------
            while continueRoutine:
                # get current time
                t = response_memoryClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=response_memoryClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # *mouse_resp* updates
                if mouse_resp.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    mouse_resp.frameNStart = frameN  # exact frame index
                    mouse_resp.tStart = t  # local t and not account for scr refresh
                    mouse_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mouse_resp, 'tStartRefresh')  # time at next scr refresh
                    mouse_resp.status = STARTED
                    mouse_resp.mouseClock.reset()
                    prevButtonState = mouse_resp.getPressed()  # if button is down already this ISN'T a new click
                if mouse_resp.status == STARTED:  # only update if started and not finished!
                    buttons = mouse_resp.getPressed()
                    if buttons != prevButtonState:  # button state changed?
                        prevButtonState = buttons
                        if sum(buttons) > 0:  # state changed to a new click
                            continueRoutine = False  # abort routine on response                
                mouse_x = mouse_resp.getPos()[0]
                mouse_y = mouse_resp.getPos()[1]
                adj_x = positions[j][0]
                adj_y = positions[j][1]
                
                mouse_x = mouse_x-(adj_x*2)
                mouse_y = mouse_y-(adj_y*2)
                r = np.linalg.norm([mouse_x,mouse_y])
                current_pos = [(mouse_x),(mouse_y)]
                
                cterm = [0, (- 50)];
                if (r == 0):
                    theta = 0;
                elif (r != 0):
                    theta = math.acos(np.dot(current_pos, cterm) / (r * -50))
                if (mouse_x < 0):
                    theta = ((2 * pi) - theta)
                
                curr_angle = round(theta*(180/pi))
                
                dot_pos_resp = [(positions[j][0] + ((circle_size[0] / 2) * sin(theta))), 
                    (positions[j][1] + ((circle_size[0] / 2) * cos(theta)))] 
                
                color_rgb = scalar_to_rgb(curr_angle/360)
                img_color_response = ImageOps.colorize(stim[j], black = "black", mid = color_rgb, white = "white")
                
                
                
                
                # *circle_resp* updates
                if circle_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    circle_resp.frameNStart = frameN  # exact frame index
                    circle_resp.tStart = t  # local t and not account for scr refresh
                    circle_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(circle_resp, 'tStartRefresh')  # time at next scr refresh
                    circle_resp.setAutoDraw(True)
                
                # *image_1* updates
                if image_1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    image_1.frameNStart = frameN  # exact frame index
                    image_1.tStart = t  # local t and not account for scr refresh
                    image_1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_1, 'tStartRefresh')  # time at next scr refresh
                    image_1.setAutoDraw(True)
                if image_1.status == STARTED:  # only update if drawing
                    image_1.setImage(img_color_response, log=False)
                
                # *dot_resp1* updates
                if dot_resp1.status == NOT_STARTED and all(current_pos) != all([0.0,0.0]):
                    # keep track of start time/frame for later
                    dot_resp1.frameNStart = frameN  # exact frame index
                    dot_resp1.tStart = t  # local t and not account for scr refresh
                    dot_resp1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(dot_resp1, 'tStartRefresh')  # time at next scr refresh
                    dot_resp1.setAutoDraw(True)
                if dot_resp1.status == STARTED:  # only update if drawing
                    dot_resp1.setPos(dot_pos_resp, log=False)
                
                # *img_gray_1* updates
                if img_gray_1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    img_gray_1.frameNStart = frameN  # exact frame index
                    img_gray_1.tStart = t  # local t and not account for scr refresh
                    img_gray_1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(img_gray_1, 'tStartRefresh')  # time at next scr refresh
                    img_gray_1.setAutoDraw(True)
                if img_gray_1.status == STARTED:
                    if bool(all(current_pos) != all([0.0,0.0])):
                        # keep track of stop time/frame for later
                        img_gray_1.tStop = t  # not accounting for scr refresh
                        img_gray_1.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(img_gray_1, 'tStopRefresh')  # time at next scr refresh
                        img_gray_1.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in response_memoryComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "response_memory"-------
            for thisComponent in response_memoryComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store data for memory_trials (TrialHandler)
            x, y = mouse_resp.getPos()
            buttons = mouse_resp.getPressed()
            memory_trials.addData('mouse_resp.x', x)
            memory_trials.addData('mouse_resp.y', y)
            memory_trials.addData('mouse_resp.leftButton', buttons[0])
            memory_trials.addData('mouse_resp.midButton', buttons[1])
            memory_trials.addData('mouse_resp.rightButton', buttons[2])
            thisExp.addData('disp_angle', trial_angles[j])
            thisExp.addData('resp_angle', curr_angle)
            thisExp.addData('block_n', block_n)
            thisExp.addData('trial_n', trial_n)
            thisExp.addData('item_n', item_n)
            thisExp.addData('focus_item', focus_item)
            thisExp.addData('stim_presented', stim_presented)
            thisExp.addData('stim_file', stim_files[j])
            
            
            err_angle = (trial_angles[j] - curr_angle + 360) % 360
            if (err_angle > 180):
                err_angle = 360 - err_angle
                
            thisExp.addData('err_angle', err_angle)
            
            if (err_angle == 0):
                points = 15
            elif (err_angle <= 5):
                points = 10
            elif (err_angle <= 10):
                points = 5
            elif (err_angle <= 30):
                points = 2
            else:
                points = 0
            
            if focus_item == j:
                points = points * 2
                central_item = 1
            else:
                central_item = 0
            
            points_total = points_total + points
            score[j] = points
            
            thisExp.addData('points', points)
            thisExp.addData('central_item', central_item)
            
            win.mouseVisible = False
            
            memory_items.append([stim_files[j], trial_angles[j], central_item, delay_1])
            
            i = i+3
            j = j+1
            # the Routine "response_memory" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 3.0 repeats of 'memory_trials'
        
        
        # ------Prepare to start Routine "feedback"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        text_2.setText(points_total)
        text_16.setPos([positions[0]])
        text_16.setText("Item 1:\n" + str(score[0]))
        text_17.setPos([positions[1]])
        text_17.setText("Item 2:\n" + str(score[1]))
        text_15.setPos([positions[2]])
        text_15.setText("Item 3:\n" + str(score[2]))
        # keep track of which components have finished
        feedbackComponents = [text_3, key_resp, text_2, text_4, text_16, text_17, text_15]
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
        while continueRoutine:
            # get current time
            t = feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
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
            
            # *text_2* updates
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                text_2.setAutoDraw(True)
            
            # *text_4* updates
            if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_4.frameNStart = frameN  # exact frame index
                text_4.tStart = t  # local t and not account for scr refresh
                text_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
                text_4.setAutoDraw(True)
            
            # *text_16* updates
            if text_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_16.frameNStart = frameN  # exact frame index
                text_16.tStart = t  # local t and not account for scr refresh
                text_16.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
                text_16.setAutoDraw(True)
            
            # *text_17* updates
            if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_17.frameNStart = frameN  # exact frame index
                text_17.tStart = t  # local t and not account for scr refresh
                text_17.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
                text_17.setAutoDraw(True)
            
            # *text_15* updates
            if text_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_15.frameNStart = frameN  # exact frame index
                text_15.tStart = t  # local t and not account for scr refresh
                text_15.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
                text_15.setAutoDraw(True)
            
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
        i = i+3
        trial_n = trial_n+1
        # the Routine "feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed trial_total repeats of 'trials'
    
    
    # ------Prepare to start Routine "end_block"-------
    continueRoutine = True
    # update component parameters for each repeat
    block_message = "You have reached the end of block %i of %i." %(block_n, block_total)
    text_block_end.setText(block_message)
    key_resp_8.keys = []
    key_resp_8.rt = []
    _key_resp_8_allKeys = []
    # keep track of which components have finished
    end_blockComponents = [text_block_end, text_19, key_resp_8]
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
        
        # *text_19* updates
        if text_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_19.frameNStart = frameN  # exact frame index
            text_19.tStart = t  # local t and not account for scr refresh
            text_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_19, 'tStartRefresh')  # time at next scr refresh
            text_19.setAutoDraw(True)
        
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
    
    # the Routine "end_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed block_total repeats of 'block'


# ------Prepare to start Routine "end_task"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
end_taskComponents = [text_20, key_resp_10]
for thisComponent in end_taskComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_taskClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_task"-------
while continueRoutine:
    # get current time
    t = end_taskClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_taskClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_20* updates
    if text_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_20.frameNStart = frameN  # exact frame index
        text_20.tStart = t  # local t and not account for scr refresh
        text_20.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_20, 'tStartRefresh')  # time at next scr refresh
        text_20.setAutoDraw(True)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
        theseKeys = key_resp_10.getKeys(keyList=['c'], waitRelease=False)
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
    for thisComponent in end_taskComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_task"-------
for thisComponent in end_taskComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_task" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_ltm"-------
continueRoutine = True
# update component parameters for each repeat
shuffle(memory_items)

i = 1

key_resp_11.keys = []
key_resp_11.rt = []
_key_resp_11_allKeys = []
# keep track of which components have finished
instructions_ltmComponents = [text_21, key_resp_11]
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
    
    # *text_21* updates
    if text_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_21.frameNStart = frameN  # exact frame index
        text_21.tStart = t  # local t and not account for scr refresh
        text_21.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
        text_21.setAutoDraw(True)
    
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
trials_ltm = data.TrialHandler(nReps=len(memory_items), method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_ltm')
thisExp.addLoop(trials_ltm)  # add the loop to the experiment
thisTrials_ltm = trials_ltm.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_ltm.rgb)
if thisTrials_ltm != None:
    for paramName in thisTrials_ltm:
        exec('{} = thisTrials_ltm[paramName]'.format(paramName))

for thisTrials_ltm in trials_ltm:
    currentLoop = trials_ltm
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_ltm.rgb)
    if thisTrials_ltm != None:
        for paramName in thisTrials_ltm:
            exec('{} = thisTrials_ltm[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "ltm_response_memory"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_resp_ltm
    gotValidClick = False  # until a click is received
    
    mouse_resp_ltm.getPos()
    mouse_resp_ltm.setPos([0,0])
    current_pos = mouse_resp_ltm.setPos([0,0])
    
    img_gray = Image.open(memory_items[i][0]).convert('L')
    stim_presented = memory_items[i][0].split('object_stim/')[1].split('.jpg')[0]
    
    
    colors = scalar_to_rgb(memory_items[i][1]/360)
    
    stim_1_color = ImageOps.colorize(img_gray, black = "black", mid = colors, white = "white")
    
    trial_n = i
    
    win.mouseVisible = True
    circle_resp_6.setSize(circle_size)
    dot_resp1_6.setSize(dot_size)
    img_gray_3.setImage(img_gray)
    # keep track of which components have finished
    ltm_response_memoryComponents = [mouse_resp_ltm, circle_resp_6, image_5, dot_resp1_6, img_gray_3]
    for thisComponent in ltm_response_memoryComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ltm_response_memoryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ltm_response_memory"-------
    while continueRoutine:
        # get current time
        t = ltm_response_memoryClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ltm_response_memoryClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *mouse_resp_ltm* updates
        if mouse_resp_ltm.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_resp_ltm.frameNStart = frameN  # exact frame index
            mouse_resp_ltm.tStart = t  # local t and not account for scr refresh
            mouse_resp_ltm.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_resp_ltm, 'tStartRefresh')  # time at next scr refresh
            mouse_resp_ltm.status = STARTED
            mouse_resp_ltm.mouseClock.reset()
            prevButtonState = mouse_resp_ltm.getPressed()  # if button is down already this ISN'T a new click
        if mouse_resp_ltm.status == STARTED:  # only update if started and not finished!
            buttons = mouse_resp_ltm.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    continueRoutine = False  # abort routine on response        
        mouse_x = mouse_resp_ltm.getPos()[0]
        mouse_y = mouse_resp_ltm.getPos()[1]
        
        mouse_x = mouse_x
        mouse_y = mouse_y
        r = np.linalg.norm([mouse_x,mouse_y])
        current_pos = [(mouse_x),(mouse_y)]
        
        cterm = [0, (- 50)];
        if (r == 0):
            theta = 0;
        elif (r != 0):
            theta = math.acos(np.dot(current_pos, cterm) / (r * -50))
        if (mouse_x < 0):
            theta = ((2 * pi) - theta)
        
        curr_angle = round(theta*(180/pi))
        
        dot_pos_resp = [(0 + ((circle_size[0] / 2) * sin(theta))), 
            (0+ ((circle_size[0] / 2) * cos(theta)))] 
        
        color_rgb = scalar_to_rgb(curr_angle/360)
        img_color_response = ImageOps.colorize(img_gray, black = "black", mid = color_rgb, white = "white")
        
        
        
        
        # *circle_resp_6* updates
        if circle_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            circle_resp_6.frameNStart = frameN  # exact frame index
            circle_resp_6.tStart = t  # local t and not account for scr refresh
            circle_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(circle_resp_6, 'tStartRefresh')  # time at next scr refresh
            circle_resp_6.setAutoDraw(True)
        
        # *image_5* updates
        if image_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            image_5.frameNStart = frameN  # exact frame index
            image_5.tStart = t  # local t and not account for scr refresh
            image_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
            image_5.setAutoDraw(True)
        if image_5.status == STARTED:  # only update if drawing
            image_5.setImage(img_color_response, log=False)
        
        # *dot_resp1_6* updates
        if dot_resp1_6.status == NOT_STARTED and all(current_pos) != all([0.0,0.0]):
            # keep track of start time/frame for later
            dot_resp1_6.frameNStart = frameN  # exact frame index
            dot_resp1_6.tStart = t  # local t and not account for scr refresh
            dot_resp1_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dot_resp1_6, 'tStartRefresh')  # time at next scr refresh
            dot_resp1_6.setAutoDraw(True)
        if dot_resp1_6.status == STARTED:  # only update if drawing
            dot_resp1_6.setPos(dot_pos_resp, log=False)
        
        # *img_gray_3* updates
        if img_gray_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            img_gray_3.frameNStart = frameN  # exact frame index
            img_gray_3.tStart = t  # local t and not account for scr refresh
            img_gray_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_gray_3, 'tStartRefresh')  # time at next scr refresh
            img_gray_3.setAutoDraw(True)
        if img_gray_3.status == STARTED:
            if bool(all(current_pos) != all([0.0,0.0])):
                # keep track of stop time/frame for later
                img_gray_3.tStop = t  # not accounting for scr refresh
                img_gray_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(img_gray_3, 'tStopRefresh')  # time at next scr refresh
                img_gray_3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ltm_response_memoryComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ltm_response_memory"-------
    for thisComponent in ltm_response_memoryComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for trials_ltm (TrialHandler)
    x, y = mouse_resp_ltm.getPos()
    buttons = mouse_resp_ltm.getPressed()
    trials_ltm.addData('mouse_resp_ltm.x', x)
    trials_ltm.addData('mouse_resp_ltm.y', y)
    trials_ltm.addData('mouse_resp_ltm.leftButton', buttons[0])
    trials_ltm.addData('mouse_resp_ltm.midButton', buttons[1])
    trials_ltm.addData('mouse_resp_ltm.rightButton', buttons[2])
    thisExp.addData('disp_angle_ltm', memory_items[i][1])
    thisExp.addData('resp_angle_ltm', curr_angle)
    thisExp.addData('trial_n', trial_n)
    thisExp.addData('focus_item', memory_items[i][2])
    thisExp.addData('stim_presented', stim_presented)
    thisExp.addData('stim_file', memory_items[i][0])
    thisExp.addData('delay_1', memory_items[i][3])
    
    
    err_angle = (memory_items[i][1] - curr_angle + 360) % 360
    if (err_angle > 180):
        err_angle = 360 - err_angle
        
    thisExp.addData('err_angle_ltm', err_angle)
    
    if (err_angle == 0):
        points = 15
    elif (err_angle <= 5):
        points = 10
    elif (err_angle <= 10):
        points = 5
    elif (err_angle <= 30):
        points = 2
    else:
        points = 0
    
    points_total = points_total + points
    
    
    thisExp.addData('points', points)
    thisExp.addData('central_item', central_item)
    
    win.mouseVisible = False
    i = i+1
    # the Routine "ltm_response_memory" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed len(memory_items) repeats of 'trials_ltm'


# ------Prepare to start Routine "end_task"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
end_taskComponents = [text_20, key_resp_10]
for thisComponent in end_taskComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_taskClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_task"-------
while continueRoutine:
    # get current time
    t = end_taskClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_taskClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_20* updates
    if text_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_20.frameNStart = frameN  # exact frame index
        text_20.tStart = t  # local t and not account for scr refresh
        text_20.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_20, 'tStartRefresh')  # time at next scr refresh
        text_20.setAutoDraw(True)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
        theseKeys = key_resp_10.getKeys(keyList=['c'], waitRelease=False)
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
    for thisComponent in end_taskComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_task"-------
for thisComponent in end_taskComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_task" was not non-slip safe, so reset the non-slip timer
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
