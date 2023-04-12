#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.4),
    on Tue Sep 27 13:17:01 2022
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
    'group': '',
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
    originPath='/Users/kellycotton/Dropbox/Research/Stress/SM1/SM1_lastrun.py',
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
    size=[700, 700], fullscr=False, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
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
angles = list(range(1,361))
dot_pos_resp = [0,0]
original_imgs = [""]*540
fix_time = .5
stim_array_time = .75
stim_array_time_slow = 2
parity_time = 1.2
image_size = (0.1, 0.1)
block_n = 1
trial_n = 1
block_total = 4
trial_total = 6

i = 1

for k in range(540):
    original_imgs[k] = "object_stim/obj{}.jpg".format(k)
    
shuffle(original_imgs)

def scalar_to_rgb(scalar):
    color_list = colorsys.hsv_to_rgb(scalar, 1, 1)
    color_list = [element * 255 for element in color_list]
    return color_list

# Initialize components for Routine "age_q"
age_qClock = core.Clock()
text_61 = visual.TextStim(win=win, name='text_61',
    text='Enter your age:',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
age_resp = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='age_resp',
     autoLog=True,
)
text_89 = visual.TextStim(win=win, name='text_89',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.4), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_11 = keyboard.Keyboard()

# Initialize components for Routine "gender_q"
gender_qClock = core.Clock()
text_83 = visual.TextStim(win=win, name='text_83',
    text='What is your gender identity?',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_84 = visual.TextStim(win=win, name='text_84',
    text='Man',
    font='Open Sans',
    pos=(-.4, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_90 = visual.TextStim(win=win, name='text_90',
    text='1',
    font='Open Sans',
    pos=(-.4, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_85 = visual.TextStim(win=win, name='text_85',
    text='Woman',
    font='Open Sans',
    pos=(-.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_91 = visual.TextStim(win=win, name='text_91',
    text='2',
    font='Open Sans',
    pos=(-.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_86 = visual.TextStim(win=win, name='text_86',
    text='Another gender \nidentity ',
    font='Open Sans',
    pos=(.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_92 = visual.TextStim(win=win, name='text_92',
    text='3',
    font='Open Sans',
    pos=(.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_87 = visual.TextStim(win=win, name='text_87',
    text='I prefer not \nto respond',
    font='Open Sans',
    pos=(.4, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_93 = visual.TextStim(win=win, name='text_93',
    text='4',
    font='Open Sans',
    pos=(.4, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
gender_resp = keyboard.Keyboard()

# Initialize components for Routine "race_q"
race_qClock = core.Clock()
text_62 = visual.TextStim(win=win, name='text_62',
    text='What is your race/ethnicity? (Select all that apply) ',
    font='Open Sans',
    pos=(0, .3), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_64 = visual.TextStim(win=win, name='text_64',
    text='White',
    font='Open Sans',
    pos=(-.6, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_74 = visual.TextStim(win=win, name='text_74',
    text='1',
    font='Open Sans',
    pos=(-.6, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_65 = visual.TextStim(win=win, name='text_65',
    text='Black or African \nAmerican',
    font='Open Sans',
    pos=(-.4, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_75 = visual.TextStim(win=win, name='text_75',
    text='2',
    font='Open Sans',
    pos=(-.4, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_66 = visual.TextStim(win=win, name='text_66',
    text='Hispanic, Latino, \nor Spanish Origin',
    font='Open Sans',
    pos=(-.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_76 = visual.TextStim(win=win, name='text_76',
    text='3',
    font='Open Sans',
    pos=(-.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_67 = visual.TextStim(win=win, name='text_67',
    text='Asian',
    font='Open Sans',
    pos=(.05, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_77 = visual.TextStim(win=win, name='text_77',
    text='4',
    font='Open Sans',
    pos=(.05, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
text_68 = visual.TextStim(win=win, name='text_68',
    text='Native American \nor Alaskan Native',
    font='Open Sans',
    pos=(.25, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_78 = visual.TextStim(win=win, name='text_78',
    text='5',
    font='Open Sans',
    pos=(.25, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
text_69 = visual.TextStim(win=win, name='text_69',
    text='Hawaiian Native \nor Pacific Islander',
    font='Open Sans',
    pos=(.55, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);
text_79 = visual.TextStim(win=win, name='text_79',
    text='6',
    font='Open Sans',
    pos=(.55, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-12.0);
text_70 = visual.TextStim(win=win, name='text_70',
    text='More than one',
    font='Open Sans',
    pos=(-.3, -.2), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-13.0);
text_80 = visual.TextStim(win=win, name='text_80',
    text='7',
    font='Open Sans',
    pos=(-.3, -.125), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-14.0);
text_71 = visual.TextStim(win=win, name='text_71',
    text='Other',
    font='Open Sans',
    pos=(0, -.2), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-15.0);
text_81 = visual.TextStim(win=win, name='text_81',
    text='8',
    font='Open Sans',
    pos=(0, -.125), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-16.0);
text_72 = visual.TextStim(win=win, name='text_72',
    text='I prefer not to respond',
    font='Open Sans',
    pos=(.3, -.2), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-17.0);
text_82 = visual.TextStim(win=win, name='text_82',
    text='9',
    font='Open Sans',
    pos=(.3, -.125), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-18.0);
key_resp_race = keyboard.Keyboard()
key_resp_10 = keyboard.Keyboard()
text_73 = visual.TextStim(win=win, name='text_73',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.4), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-21.0);

# Initialize components for Routine "hand_q"
hand_qClock = core.Clock()
text_94 = visual.TextStim(win=win, name='text_94',
    text='Which hand do you use to brush your teeth?',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_97 = visual.TextStim(win=win, name='text_97',
    text='Left',
    font='Open Sans',
    pos=(-.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_98 = visual.TextStim(win=win, name='text_98',
    text='1',
    font='Open Sans',
    pos=(-.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_99 = visual.TextStim(win=win, name='text_99',
    text='Right',
    font='Open Sans',
    pos=(.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_100 = visual.TextStim(win=win, name='text_100',
    text='2',
    font='Open Sans',
    pos=(.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
hand_resp = keyboard.Keyboard()

# Initialize components for Routine "color_q"
color_qClock = core.Clock()
text_95 = visual.TextStim(win=win, name='text_95',
    text='Are you color-blind?',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_101 = visual.TextStim(win=win, name='text_101',
    text='Yes',
    font='Open Sans',
    pos=(-.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_102 = visual.TextStim(win=win, name='text_102',
    text='1',
    font='Open Sans',
    pos=(-.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_104 = visual.TextStim(win=win, name='text_104',
    text='No',
    font='Open Sans',
    pos=(.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_105 = visual.TextStim(win=win, name='text_105',
    text='2',
    font='Open Sans',
    pos=(.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
color_resp = keyboard.Keyboard()

# Initialize components for Routine "english_q"
english_qClock = core.Clock()
text_96 = visual.TextStim(win=win, name='text_96',
    text='Did you learn to speak English by age 5?',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_107 = visual.TextStim(win=win, name='text_107',
    text='Yes',
    font='Open Sans',
    pos=(-.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_108 = visual.TextStim(win=win, name='text_108',
    text='1',
    font='Open Sans',
    pos=(-.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_109 = visual.TextStim(win=win, name='text_109',
    text='No',
    font='Open Sans',
    pos=(.15, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_110 = visual.TextStim(win=win, name='text_110',
    text='2',
    font='Open Sans',
    pos=(.15, .075), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
english_resp = keyboard.Keyboard()

# Initialize components for Routine "stai_instruct"
stai_instructClock = core.Clock()
text_117 = visual.TextStim(win=win, name='text_117',
    text='A number of statements which people have used to describe themselves are given below. Read each statement and then select the appropriate number key to indicate how you feel right now, that is, at this moment. There are no right or wrong answers. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_19 = keyboard.Keyboard()

# Initialize components for Routine "stai"
staiClock = core.Clock()
text_52 = visual.TextStim(win=win, name='text_52',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_53 = visual.TextStim(win=win, name='text_53',
    text='Not at all',
    font='Open Sans',
    pos=(-.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_54 = visual.TextStim(win=win, name='text_54',
    text='1',
    font='Open Sans',
    pos=(-.45, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_55 = visual.TextStim(win=win, name='text_55',
    text='A little',
    font='Open Sans',
    pos=(-.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_56 = visual.TextStim(win=win, name='text_56',
    text='2',
    font='Open Sans',
    pos=(-.15, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_57 = visual.TextStim(win=win, name='text_57',
    text='Somewhat',
    font='Open Sans',
    pos=(.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_58 = visual.TextStim(win=win, name='text_58',
    text='3',
    font='Open Sans',
    pos=(.15, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_59 = visual.TextStim(win=win, name='text_59',
    text='Very much so',
    font='Open Sans',
    pos=(.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_60 = visual.TextStim(win=win, name='text_60',
    text='4',
    font='Open Sans',
    pos=(.45, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
key_resp_stai = keyboard.Keyboard()

# Initialize components for Routine "instructions_1"
instructions_1Clock = core.Clock()
text_11 = visual.TextStim(win=win, name='text_11',
    text='During this experiment, you will complete several tasks. You will first practice the tasks separately then together.\n\nPlease read all instructions carefully throughout the experiment.\n\nDuring the first task, you will a series of colored objects. Your job is to remember to color of these objects. A small cross will appear in the center of the screen. This is your warning that the objects are coming and that you should pay attention. If you direct your eyes to the center of the screen you will see the objects better as they flash on the screen very quickly.\n\nAfter you have seen the objects, you will be asked to report the color of each object you saw previously. A gray version of one object will appear in the center of a ring. When you move the mouse, a dot will appear on the ring and the color of the object will begin to change. Use the mouse to move the dot along the ring until the object is the same color as you remember. Please click the mouse to submit your response. You will repeat this procedure for all three objects.\n\n\nPress SPACE to begin the practice.',
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
    text="Great, you have finished the second part of the practice!\n\nDuring the next part of the practice, you will do both tasks. First, you will see the colored objects. Then you will see the numbers and indicate if they are even or odd. Finally, you will report the color of each object using the mouse.\n\nRemember, press 'A' if the number is even and 'S' if the number is odd. Keep your fingers on these keys so you are ready when the numbers appear.\n\nPress SPACE to begin the practice.",
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

# Initialize components for Routine "instructions_4"
instructions_4Clock = core.Clock()
text_88 = visual.TextStim(win=win, name='text_88',
    text="Now, you will practice a few trials that will be exactly like the real trials. Everything will be the same as what you practiced earlier, except these trials will be much faster and you will no longer receive feedback showing the original color compared to your response color. \n\nAdditionally, you can now earn points! For each object color that you remember correctly, you will receive points. You will receive more points the closer your response is to the original color.  You will see a circle around one of the objects when they are first presented. If you remember this item correctly, you will receive bonus points!\n\nYou will also receive points for the even/odd task. The more that you answer correctly, the more points you will receive.\n\nRemember, press 'A' if the number is even and 'S' if the number is odd. Keep your fingers on these keys so you are ready when the numbers appear.\n\nBoth tasks are important. Please try to respond as quickly and accurately as possible. \n\nPress SPACE when you are ready to begin.",
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_13 = keyboard.Keyboard()

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

parity_points = 0
parity_points_total = 0
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
points_total = 0

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
    pos=(0, -.05), height=0.05, wrapWidth=None, ori=0.0, 
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
text_113 = visual.TextStim(win=win, name='text_113',
    text='',
    font='Open Sans',
    pos=(0, .05), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
circle_focus_item_2 = visual.Polygon(
    win=win, name='circle_focus_item_2',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[1.0000, -1.0000, -1.0000], fillColor=None,
    opacity=None, depth=-8.0, interpolate=True)
text_103 = visual.TextStim(win=win, name='text_103',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_15 = visual.TextStim(win=win, name='text_15',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "practice_end"
practice_endClock = core.Clock()
text_14 = visual.TextStim(win=win, name='text_14',
    text='Great, you have finished the practice trials!\n',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "trial_instruct"
trial_instructClock = core.Clock()
text_63 = visual.TextStim(win=win, name='text_63',
    text='Now we will begin the real trials. Everything will be the same as what you practiced earlier.\n\nRemember, both tasks are important. Please try to respond as quickly and accurately as possible. \n\nPress SPACE when you are ready to begin.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_21 = keyboard.Keyboard()

# Initialize components for Routine "remind"
remindClock = core.Clock()
text_18 = visual.TextStim(win=win, name='text_18',
    text="Remember, press 'A' if even, 'S' if odd.\n\nKeep your fingers on these keys so you are ready when the numbers appear.\n\nPress SPACE to begin.",
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

parity_points = 0
parity_points_total = 0
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
points_total = 0

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
    pos=(0, -.05), height=0.05, wrapWidth=None, ori=0.0, 
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
text_113 = visual.TextStim(win=win, name='text_113',
    text='',
    font='Open Sans',
    pos=(0, .05), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
circle_focus_item_2 = visual.Polygon(
    win=win, name='circle_focus_item_2',
    edges=75, size=[1.0, 1.0],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=10.0,     colorSpace='rgb',  lineColor=[1.0000, -1.0000, -1.0000], fillColor=None,
    opacity=None, depth=-8.0, interpolate=True)
text_103 = visual.TextStim(win=win, name='text_103',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_15 = visual.TextStim(win=win, name='text_15',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);

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

# Initialize components for Routine "end"
endClock = core.Clock()
text_49 = visual.TextStim(win=win, name='text_49',
    text='Congratulations, you have reached the end of this part of the experiment! Please tell your experimenter.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_20 = keyboard.Keyboard()

# Initialize components for Routine "stai_instruct"
stai_instructClock = core.Clock()
text_117 = visual.TextStim(win=win, name='text_117',
    text='A number of statements which people have used to describe themselves are given below. Read each statement and then select the appropriate number key to indicate how you feel right now, that is, at this moment. There are no right or wrong answers. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_19 = keyboard.Keyboard()

# Initialize components for Routine "stai"
staiClock = core.Clock()
text_52 = visual.TextStim(win=win, name='text_52',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_53 = visual.TextStim(win=win, name='text_53',
    text='Not at all',
    font='Open Sans',
    pos=(-.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_54 = visual.TextStim(win=win, name='text_54',
    text='1',
    font='Open Sans',
    pos=(-.45, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_55 = visual.TextStim(win=win, name='text_55',
    text='A little',
    font='Open Sans',
    pos=(-.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_56 = visual.TextStim(win=win, name='text_56',
    text='2',
    font='Open Sans',
    pos=(-.15, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_57 = visual.TextStim(win=win, name='text_57',
    text='Somewhat',
    font='Open Sans',
    pos=(.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_58 = visual.TextStim(win=win, name='text_58',
    text='3',
    font='Open Sans',
    pos=(.15, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_59 = visual.TextStim(win=win, name='text_59',
    text='Very much so',
    font='Open Sans',
    pos=(.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_60 = visual.TextStim(win=win, name='text_60',
    text='4',
    font='Open Sans',
    pos=(.45, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
key_resp_stai = keyboard.Keyboard()

# Initialize components for Routine "bai_instruct"
bai_instructClock = core.Clock()
text_114 = visual.TextStim(win=win, name='text_114',
    text='On the next screen is a list of common symptoms of anxiety. Please carefully read each item in the list. Indicate how much you have been bothered by that symptom during the past month, including today, by pressing the corresponding number key.\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_12 = keyboard.Keyboard()

# Initialize components for Routine "bai"
baiClock = core.Clock()
text_20 = visual.TextStim(win=win, name='text_20',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_21 = visual.TextStim(win=win, name='text_21',
    text='Not at all\n',
    font='Open Sans',
    pos=(-.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_22 = visual.TextStim(win=win, name='text_22',
    text='0',
    font='Open Sans',
    pos=(-.45, -.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_24 = visual.TextStim(win=win, name='text_24',
    text='Mildly, but it didn’t \nbother me much',
    font='Open Sans',
    pos=(-.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_26 = visual.TextStim(win=win, name='text_26',
    text='1',
    font='Open Sans',
    pos=(-.15, -.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_25 = visual.TextStim(win=win, name='text_25',
    text='Moderately, it wasn’t \npleasant at times',
    font='Open Sans',
    pos=(.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_27 = visual.TextStim(win=win, name='text_27',
    text='2',
    font='Open Sans',
    pos=(.15, -.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_23 = visual.TextStim(win=win, name='text_23',
    text='Severely - it \nbothered me a lot',
    font='Open Sans',
    pos=(.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_28 = visual.TextStim(win=win, name='text_28',
    text='3',
    font='Open Sans',
    pos=(.45, -.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
key_resp_bai = keyboard.Keyboard()
text_29 = visual.TextStim(win=win, name='text_29',
    text='Indicate how much you have been bothered by that symptom during the past month, including today, by pressing the corresponding number key.',
    font='Open Sans',
    pos=(0, .25), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "dass_instruct"
dass_instructClock = core.Clock()
text_115 = visual.TextStim(win=win, name='text_115',
    text='Please read each statement and press a number key 0, 1, 2, or 3 which indicates how much the statement applied to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement.\n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_17 = keyboard.Keyboard()

# Initialize components for Routine "dass"
dassClock = core.Clock()
text_30 = visual.TextStim(win=win, name='text_30',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_31 = visual.TextStim(win=win, name='text_31',
    text='Did not apply \nto me at all\n',
    font='Open Sans',
    pos=(-.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_32 = visual.TextStim(win=win, name='text_32',
    text='0',
    font='Open Sans',
    pos=(-.45, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_33 = visual.TextStim(win=win, name='text_33',
    text='Applied to me in \nsome degree, or \nsome of the time',
    font='Open Sans',
    pos=(-.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_34 = visual.TextStim(win=win, name='text_34',
    text='1',
    font='Open Sans',
    pos=(-.15, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_35 = visual.TextStim(win=win, name='text_35',
    text='Applied to me a \nconsiderable degree \nor a good part of time',
    font='Open Sans',
    pos=(.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_36 = visual.TextStim(win=win, name='text_36',
    text='2',
    font='Open Sans',
    pos=(.15, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_37 = visual.TextStim(win=win, name='text_37',
    text='Applied to me very much \nor most of the time\n',
    font='Open Sans',
    pos=(.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_38 = visual.TextStim(win=win, name='text_38',
    text='3',
    font='Open Sans',
    pos=(.45, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
key_resp_dass = keyboard.Keyboard()
text_39 = visual.TextStim(win=win, name='text_39',
    text='Please read each statement and press a number key 0, 1, 2, or 3 which indicates how much the statement applied to you over the past week. ',
    font='Open Sans',
    pos=(0, .25), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);

# Initialize components for Routine "pss_instruct"
pss_instructClock = core.Clock()
text_116 = visual.TextStim(win=win, name='text_116',
    text='The questions in this scale ask you about your feelings and thoughts during the last month. In each case, you will be asked to indicate by pressing the number key corresponding to how often you felt or thought a certain way. \n\nPress SPACE to continue.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_18 = keyboard.Keyboard()

# Initialize components for Routine "pss"
pssClock = core.Clock()
text_40 = visual.TextStim(win=win, name='text_40',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_41 = visual.TextStim(win=win, name='text_41',
    text='Never',
    font='Open Sans',
    pos=(-.5, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_42 = visual.TextStim(win=win, name='text_42',
    text='0',
    font='Open Sans',
    pos=(-.5, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_43 = visual.TextStim(win=win, name='text_43',
    text='Almost never',
    font='Open Sans',
    pos=(-.25, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_44 = visual.TextStim(win=win, name='text_44',
    text='1',
    font='Open Sans',
    pos=(-.25, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_45 = visual.TextStim(win=win, name='text_45',
    text='Sometimes',
    font='Open Sans',
    pos=(0, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_46 = visual.TextStim(win=win, name='text_46',
    text='2',
    font='Open Sans',
    pos=(0, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_47 = visual.TextStim(win=win, name='text_47',
    text='Fairly often',
    font='Open Sans',
    pos=(.25, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_48 = visual.TextStim(win=win, name='text_48',
    text='3',
    font='Open Sans',
    pos=(.25, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
text_50 = visual.TextStim(win=win, name='text_50',
    text='Very often',
    font='Open Sans',
    pos=(.5, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_51 = visual.TextStim(win=win, name='text_51',
    text='4',
    font='Open Sans',
    pos=(.5, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
key_resp_pss = keyboard.Keyboard()

# Initialize components for Routine "end"
endClock = core.Clock()
text_49 = visual.TextStim(win=win, name='text_49',
    text='Congratulations, you have reached the end of this part of the experiment! Please tell your experimenter.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_20 = keyboard.Keyboard()

# Initialize components for Routine "end_instruct"
end_instructClock = core.Clock()
text_106 = visual.TextStim(win=win, name='text_106',
    text="Experimenter:\n\nFirst, please enter the heart rate and SbO2 measurements taken during the stress protocol.\n\nThen, enter the subject's response to the paper copy of the STAI.\n\nPress SPACE to continue.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_14 = keyboard.Keyboard()

# Initialize components for Routine "hr1_entry"
hr1_entryClock = core.Clock()
text_111 = visual.TextStim(win=win, name='text_111',
    text='Heart Rate Measurement 1:',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_112 = visual.TextStim(win=win, name='text_112',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
hr_1 = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='hr_1',
     autoLog=True,
)
key_resp_15 = keyboard.Keyboard()

# Initialize components for Routine "hr2_entry"
hr2_entryClock = core.Clock()
text_118 = visual.TextStim(win=win, name='text_118',
    text='Heart Rate Measurement 2:',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_119 = visual.TextStim(win=win, name='text_119',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
hr_2 = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='hr_2',
     autoLog=True,
)
key_resp_16 = keyboard.Keyboard()

# Initialize components for Routine "hr3_entry"
hr3_entryClock = core.Clock()
text_125 = visual.TextStim(win=win, name='text_125',
    text='Heart Rate Measurement 3:',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_126 = visual.TextStim(win=win, name='text_126',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
hr_3 = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='hr_3',
     autoLog=True,
)
key_resp_25 = keyboard.Keyboard()

# Initialize components for Routine "sb02_1_entry"
sb02_1_entryClock = core.Clock()
text_120 = visual.TextStim(win=win, name='text_120',
    text='Blood Oxygen Measurement 1:',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_121 = visual.TextStim(win=win, name='text_121',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
sb02_1 = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='sb02_1',
     autoLog=True,
)
key_resp_22 = keyboard.Keyboard()

# Initialize components for Routine "sb02_2_entry"
sb02_2_entryClock = core.Clock()
text_122 = visual.TextStim(win=win, name='text_122',
    text='Blood Oxygen Measurement 2:',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_123 = visual.TextStim(win=win, name='text_123',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
sb02_2 = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='sb02_2',
     autoLog=True,
)
key_resp_23 = keyboard.Keyboard()

# Initialize components for Routine "sb02_3_entry"
sb02_3_entryClock = core.Clock()
text_127 = visual.TextStim(win=win, name='text_127',
    text='Blood Oxygen Measurement 3:',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_128 = visual.TextStim(win=win, name='text_128',
    text='Press SPACE to continue.',
    font='Open Sans',
    pos=(0, -.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
sb02_3 = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='sb02_3',
     autoLog=True,
)
key_resp_26 = keyboard.Keyboard()

# Initialize components for Routine "stai"
staiClock = core.Clock()
text_52 = visual.TextStim(win=win, name='text_52',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
text_53 = visual.TextStim(win=win, name='text_53',
    text='Not at all',
    font='Open Sans',
    pos=(-.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_54 = visual.TextStim(win=win, name='text_54',
    text='1',
    font='Open Sans',
    pos=(-.45, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_55 = visual.TextStim(win=win, name='text_55',
    text='A little',
    font='Open Sans',
    pos=(-.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_56 = visual.TextStim(win=win, name='text_56',
    text='2',
    font='Open Sans',
    pos=(-.15, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_57 = visual.TextStim(win=win, name='text_57',
    text='Somewhat',
    font='Open Sans',
    pos=(.15, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
text_58 = visual.TextStim(win=win, name='text_58',
    text='3',
    font='Open Sans',
    pos=(.15, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_59 = visual.TextStim(win=win, name='text_59',
    text='Very much so',
    font='Open Sans',
    pos=(.45, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_60 = visual.TextStim(win=win, name='text_60',
    text='4',
    font='Open Sans',
    pos=(.45, -.23), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
key_resp_stai = keyboard.Keyboard()

# Initialize components for Routine "experimenter"
experimenterClock = core.Clock()
text_129 = visual.TextStim(win=win, name='text_129',
    text='Please enter experimenter initials. Press SPACE to submit.',
    font='Open Sans',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_initials = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='textbox_initials',
     autoLog=True,
)
key_resp_27 = keyboard.Keyboard()

# Initialize components for Routine "experiment_end"
experiment_endClock = core.Clock()
text_124 = visual.TextStim(win=win, name='text_124',
    text='Please enter any important notes from the session. Press RETURN when you are done and ready to end the experiment.',
    font='Open Sans',
    pos=(0, .25), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_notes = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='textbox_notes',
     autoLog=True,
)
key_resp_24 = keyboard.Keyboard()

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

# ------Prepare to start Routine "age_q"-------
continueRoutine = True
# update component parameters for each repeat
age_resp.reset()
key_resp_11.keys = []
key_resp_11.rt = []
_key_resp_11_allKeys = []
# keep track of which components have finished
age_qComponents = [text_61, age_resp, text_89, key_resp_11]
for thisComponent in age_qComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
age_qClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "age_q"-------
while continueRoutine:
    # get current time
    t = age_qClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=age_qClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_61* updates
    if text_61.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_61.frameNStart = frameN  # exact frame index
        text_61.tStart = t  # local t and not account for scr refresh
        text_61.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_61, 'tStartRefresh')  # time at next scr refresh
        text_61.setAutoDraw(True)
    
    # *age_resp* updates
    if age_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        age_resp.frameNStart = frameN  # exact frame index
        age_resp.tStart = t  # local t and not account for scr refresh
        age_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(age_resp, 'tStartRefresh')  # time at next scr refresh
        age_resp.setAutoDraw(True)
    
    # *text_89* updates
    if text_89.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_89.frameNStart = frameN  # exact frame index
        text_89.tStart = t  # local t and not account for scr refresh
        text_89.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_89, 'tStartRefresh')  # time at next scr refresh
        text_89.setAutoDraw(True)
    
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
    for thisComponent in age_qComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "age_q"-------
for thisComponent in age_qComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('age_resp.text',age_resp.text)
# the Routine "age_q" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "gender_q"-------
continueRoutine = True
# update component parameters for each repeat
gender_resp.keys = []
gender_resp.rt = []
_gender_resp_allKeys = []
# keep track of which components have finished
gender_qComponents = [text_83, text_84, text_90, text_85, text_91, text_86, text_92, text_87, text_93, gender_resp]
for thisComponent in gender_qComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
gender_qClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "gender_q"-------
while continueRoutine:
    # get current time
    t = gender_qClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=gender_qClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_83* updates
    if text_83.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_83.frameNStart = frameN  # exact frame index
        text_83.tStart = t  # local t and not account for scr refresh
        text_83.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_83, 'tStartRefresh')  # time at next scr refresh
        text_83.setAutoDraw(True)
    
    # *text_84* updates
    if text_84.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_84.frameNStart = frameN  # exact frame index
        text_84.tStart = t  # local t and not account for scr refresh
        text_84.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_84, 'tStartRefresh')  # time at next scr refresh
        text_84.setAutoDraw(True)
    
    # *text_90* updates
    if text_90.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_90.frameNStart = frameN  # exact frame index
        text_90.tStart = t  # local t and not account for scr refresh
        text_90.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_90, 'tStartRefresh')  # time at next scr refresh
        text_90.setAutoDraw(True)
    
    # *text_85* updates
    if text_85.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_85.frameNStart = frameN  # exact frame index
        text_85.tStart = t  # local t and not account for scr refresh
        text_85.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_85, 'tStartRefresh')  # time at next scr refresh
        text_85.setAutoDraw(True)
    
    # *text_91* updates
    if text_91.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_91.frameNStart = frameN  # exact frame index
        text_91.tStart = t  # local t and not account for scr refresh
        text_91.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_91, 'tStartRefresh')  # time at next scr refresh
        text_91.setAutoDraw(True)
    
    # *text_86* updates
    if text_86.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_86.frameNStart = frameN  # exact frame index
        text_86.tStart = t  # local t and not account for scr refresh
        text_86.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_86, 'tStartRefresh')  # time at next scr refresh
        text_86.setAutoDraw(True)
    
    # *text_92* updates
    if text_92.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_92.frameNStart = frameN  # exact frame index
        text_92.tStart = t  # local t and not account for scr refresh
        text_92.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_92, 'tStartRefresh')  # time at next scr refresh
        text_92.setAutoDraw(True)
    
    # *text_87* updates
    if text_87.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_87.frameNStart = frameN  # exact frame index
        text_87.tStart = t  # local t and not account for scr refresh
        text_87.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_87, 'tStartRefresh')  # time at next scr refresh
        text_87.setAutoDraw(True)
    
    # *text_93* updates
    if text_93.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_93.frameNStart = frameN  # exact frame index
        text_93.tStart = t  # local t and not account for scr refresh
        text_93.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_93, 'tStartRefresh')  # time at next scr refresh
        text_93.setAutoDraw(True)
    
    # *gender_resp* updates
    waitOnFlip = False
    if gender_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        gender_resp.frameNStart = frameN  # exact frame index
        gender_resp.tStart = t  # local t and not account for scr refresh
        gender_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(gender_resp, 'tStartRefresh')  # time at next scr refresh
        gender_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(gender_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(gender_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if gender_resp.status == STARTED and not waitOnFlip:
        theseKeys = gender_resp.getKeys(keyList=['1','2','3','4'], waitRelease=False)
        _gender_resp_allKeys.extend(theseKeys)
        if len(_gender_resp_allKeys):
            gender_resp.keys = _gender_resp_allKeys[-1].name  # just the last key pressed
            gender_resp.rt = _gender_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in gender_qComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "gender_q"-------
for thisComponent in gender_qComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if gender_resp.keys in ['', [], None]:  # No response was made
    gender_resp.keys = None
thisExp.addData('gender_resp.keys',gender_resp.keys)
if gender_resp.keys != None:  # we had a response
    thisExp.addData('gender_resp.rt', gender_resp.rt)
thisExp.nextEntry()
# the Routine "gender_q" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "race_q"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_race.keys = []
key_resp_race.rt = []
_key_resp_race_allKeys = []
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
race_qComponents = [text_62, text_64, text_74, text_65, text_75, text_66, text_76, text_67, text_77, text_68, text_78, text_69, text_79, text_70, text_80, text_71, text_81, text_72, text_82, key_resp_race, key_resp_10, text_73]
for thisComponent in race_qComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
race_qClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "race_q"-------
while continueRoutine:
    # get current time
    t = race_qClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=race_qClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_62* updates
    if text_62.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_62.frameNStart = frameN  # exact frame index
        text_62.tStart = t  # local t and not account for scr refresh
        text_62.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_62, 'tStartRefresh')  # time at next scr refresh
        text_62.setAutoDraw(True)
    
    # *text_64* updates
    if text_64.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_64.frameNStart = frameN  # exact frame index
        text_64.tStart = t  # local t and not account for scr refresh
        text_64.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_64, 'tStartRefresh')  # time at next scr refresh
        text_64.setAutoDraw(True)
    
    # *text_74* updates
    if text_74.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_74.frameNStart = frameN  # exact frame index
        text_74.tStart = t  # local t and not account for scr refresh
        text_74.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_74, 'tStartRefresh')  # time at next scr refresh
        text_74.setAutoDraw(True)
    
    # *text_65* updates
    if text_65.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_65.frameNStart = frameN  # exact frame index
        text_65.tStart = t  # local t and not account for scr refresh
        text_65.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_65, 'tStartRefresh')  # time at next scr refresh
        text_65.setAutoDraw(True)
    
    # *text_75* updates
    if text_75.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_75.frameNStart = frameN  # exact frame index
        text_75.tStart = t  # local t and not account for scr refresh
        text_75.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_75, 'tStartRefresh')  # time at next scr refresh
        text_75.setAutoDraw(True)
    
    # *text_66* updates
    if text_66.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_66.frameNStart = frameN  # exact frame index
        text_66.tStart = t  # local t and not account for scr refresh
        text_66.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_66, 'tStartRefresh')  # time at next scr refresh
        text_66.setAutoDraw(True)
    
    # *text_76* updates
    if text_76.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_76.frameNStart = frameN  # exact frame index
        text_76.tStart = t  # local t and not account for scr refresh
        text_76.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_76, 'tStartRefresh')  # time at next scr refresh
        text_76.setAutoDraw(True)
    
    # *text_67* updates
    if text_67.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_67.frameNStart = frameN  # exact frame index
        text_67.tStart = t  # local t and not account for scr refresh
        text_67.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_67, 'tStartRefresh')  # time at next scr refresh
        text_67.setAutoDraw(True)
    
    # *text_77* updates
    if text_77.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_77.frameNStart = frameN  # exact frame index
        text_77.tStart = t  # local t and not account for scr refresh
        text_77.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_77, 'tStartRefresh')  # time at next scr refresh
        text_77.setAutoDraw(True)
    
    # *text_68* updates
    if text_68.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_68.frameNStart = frameN  # exact frame index
        text_68.tStart = t  # local t and not account for scr refresh
        text_68.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_68, 'tStartRefresh')  # time at next scr refresh
        text_68.setAutoDraw(True)
    
    # *text_78* updates
    if text_78.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_78.frameNStart = frameN  # exact frame index
        text_78.tStart = t  # local t and not account for scr refresh
        text_78.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_78, 'tStartRefresh')  # time at next scr refresh
        text_78.setAutoDraw(True)
    
    # *text_69* updates
    if text_69.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_69.frameNStart = frameN  # exact frame index
        text_69.tStart = t  # local t and not account for scr refresh
        text_69.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_69, 'tStartRefresh')  # time at next scr refresh
        text_69.setAutoDraw(True)
    
    # *text_79* updates
    if text_79.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_79.frameNStart = frameN  # exact frame index
        text_79.tStart = t  # local t and not account for scr refresh
        text_79.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_79, 'tStartRefresh')  # time at next scr refresh
        text_79.setAutoDraw(True)
    
    # *text_70* updates
    if text_70.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_70.frameNStart = frameN  # exact frame index
        text_70.tStart = t  # local t and not account for scr refresh
        text_70.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_70, 'tStartRefresh')  # time at next scr refresh
        text_70.setAutoDraw(True)
    
    # *text_80* updates
    if text_80.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_80.frameNStart = frameN  # exact frame index
        text_80.tStart = t  # local t and not account for scr refresh
        text_80.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_80, 'tStartRefresh')  # time at next scr refresh
        text_80.setAutoDraw(True)
    
    # *text_71* updates
    if text_71.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_71.frameNStart = frameN  # exact frame index
        text_71.tStart = t  # local t and not account for scr refresh
        text_71.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_71, 'tStartRefresh')  # time at next scr refresh
        text_71.setAutoDraw(True)
    
    # *text_81* updates
    if text_81.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_81.frameNStart = frameN  # exact frame index
        text_81.tStart = t  # local t and not account for scr refresh
        text_81.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_81, 'tStartRefresh')  # time at next scr refresh
        text_81.setAutoDraw(True)
    
    # *text_72* updates
    if text_72.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_72.frameNStart = frameN  # exact frame index
        text_72.tStart = t  # local t and not account for scr refresh
        text_72.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_72, 'tStartRefresh')  # time at next scr refresh
        text_72.setAutoDraw(True)
    
    # *text_82* updates
    if text_82.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_82.frameNStart = frameN  # exact frame index
        text_82.tStart = t  # local t and not account for scr refresh
        text_82.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_82, 'tStartRefresh')  # time at next scr refresh
        text_82.setAutoDraw(True)
    
    # *key_resp_race* updates
    waitOnFlip = False
    if key_resp_race.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_race.frameNStart = frameN  # exact frame index
        key_resp_race.tStart = t  # local t and not account for scr refresh
        key_resp_race.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_race, 'tStartRefresh')  # time at next scr refresh
        key_resp_race.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_race.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_race.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_race.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_race.getKeys(keyList=['1','2','3','4','6','7','8','9'], waitRelease=False)
        _key_resp_race_allKeys.extend(theseKeys)
        if len(_key_resp_race_allKeys):
            key_resp_race.keys = [key.name for key in _key_resp_race_allKeys]  # storing all keys
            key_resp_race.rt = [key.rt for key in _key_resp_race_allKeys]
    
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
        theseKeys = key_resp_10.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_73* updates
    if text_73.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_73.frameNStart = frameN  # exact frame index
        text_73.tStart = t  # local t and not account for scr refresh
        text_73.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_73, 'tStartRefresh')  # time at next scr refresh
        text_73.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in race_qComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "race_q"-------
for thisComponent in race_qComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_race.keys in ['', [], None]:  # No response was made
    key_resp_race.keys = None
thisExp.addData('key_resp_race.keys',key_resp_race.keys)
if key_resp_race.keys != None:  # we had a response
    thisExp.addData('key_resp_race.rt', key_resp_race.rt)
thisExp.nextEntry()
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.addData('key_resp_10.started', key_resp_10.tStartRefresh)
thisExp.addData('key_resp_10.stopped', key_resp_10.tStopRefresh)
thisExp.nextEntry()
# the Routine "race_q" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "hand_q"-------
continueRoutine = True
# update component parameters for each repeat
hand_resp.keys = []
hand_resp.rt = []
_hand_resp_allKeys = []
# keep track of which components have finished
hand_qComponents = [text_94, text_97, text_98, text_99, text_100, hand_resp]
for thisComponent in hand_qComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
hand_qClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "hand_q"-------
while continueRoutine:
    # get current time
    t = hand_qClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=hand_qClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_94* updates
    if text_94.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_94.frameNStart = frameN  # exact frame index
        text_94.tStart = t  # local t and not account for scr refresh
        text_94.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_94, 'tStartRefresh')  # time at next scr refresh
        text_94.setAutoDraw(True)
    
    # *text_97* updates
    if text_97.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_97.frameNStart = frameN  # exact frame index
        text_97.tStart = t  # local t and not account for scr refresh
        text_97.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_97, 'tStartRefresh')  # time at next scr refresh
        text_97.setAutoDraw(True)
    
    # *text_98* updates
    if text_98.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_98.frameNStart = frameN  # exact frame index
        text_98.tStart = t  # local t and not account for scr refresh
        text_98.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_98, 'tStartRefresh')  # time at next scr refresh
        text_98.setAutoDraw(True)
    
    # *text_99* updates
    if text_99.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_99.frameNStart = frameN  # exact frame index
        text_99.tStart = t  # local t and not account for scr refresh
        text_99.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_99, 'tStartRefresh')  # time at next scr refresh
        text_99.setAutoDraw(True)
    
    # *text_100* updates
    if text_100.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_100.frameNStart = frameN  # exact frame index
        text_100.tStart = t  # local t and not account for scr refresh
        text_100.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_100, 'tStartRefresh')  # time at next scr refresh
        text_100.setAutoDraw(True)
    
    # *hand_resp* updates
    waitOnFlip = False
    if hand_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        hand_resp.frameNStart = frameN  # exact frame index
        hand_resp.tStart = t  # local t and not account for scr refresh
        hand_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(hand_resp, 'tStartRefresh')  # time at next scr refresh
        hand_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(hand_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(hand_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if hand_resp.status == STARTED and not waitOnFlip:
        theseKeys = hand_resp.getKeys(keyList=['1','2'], waitRelease=False)
        _hand_resp_allKeys.extend(theseKeys)
        if len(_hand_resp_allKeys):
            hand_resp.keys = _hand_resp_allKeys[-1].name  # just the last key pressed
            hand_resp.rt = _hand_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in hand_qComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "hand_q"-------
for thisComponent in hand_qComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if hand_resp.keys in ['', [], None]:  # No response was made
    hand_resp.keys = None
thisExp.addData('hand_resp.keys',hand_resp.keys)
if hand_resp.keys != None:  # we had a response
    thisExp.addData('hand_resp.rt', hand_resp.rt)
thisExp.nextEntry()
# the Routine "hand_q" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "color_q"-------
continueRoutine = True
# update component parameters for each repeat
color_resp.keys = []
color_resp.rt = []
_color_resp_allKeys = []
# keep track of which components have finished
color_qComponents = [text_95, text_101, text_102, text_104, text_105, color_resp]
for thisComponent in color_qComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
color_qClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "color_q"-------
while continueRoutine:
    # get current time
    t = color_qClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=color_qClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_95* updates
    if text_95.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_95.frameNStart = frameN  # exact frame index
        text_95.tStart = t  # local t and not account for scr refresh
        text_95.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_95, 'tStartRefresh')  # time at next scr refresh
        text_95.setAutoDraw(True)
    
    # *text_101* updates
    if text_101.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_101.frameNStart = frameN  # exact frame index
        text_101.tStart = t  # local t and not account for scr refresh
        text_101.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_101, 'tStartRefresh')  # time at next scr refresh
        text_101.setAutoDraw(True)
    
    # *text_102* updates
    if text_102.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_102.frameNStart = frameN  # exact frame index
        text_102.tStart = t  # local t and not account for scr refresh
        text_102.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_102, 'tStartRefresh')  # time at next scr refresh
        text_102.setAutoDraw(True)
    
    # *text_104* updates
    if text_104.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_104.frameNStart = frameN  # exact frame index
        text_104.tStart = t  # local t and not account for scr refresh
        text_104.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_104, 'tStartRefresh')  # time at next scr refresh
        text_104.setAutoDraw(True)
    
    # *text_105* updates
    if text_105.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_105.frameNStart = frameN  # exact frame index
        text_105.tStart = t  # local t and not account for scr refresh
        text_105.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_105, 'tStartRefresh')  # time at next scr refresh
        text_105.setAutoDraw(True)
    
    # *color_resp* updates
    waitOnFlip = False
    if color_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        color_resp.frameNStart = frameN  # exact frame index
        color_resp.tStart = t  # local t and not account for scr refresh
        color_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(color_resp, 'tStartRefresh')  # time at next scr refresh
        color_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(color_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(color_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if color_resp.status == STARTED and not waitOnFlip:
        theseKeys = color_resp.getKeys(keyList=['1','2'], waitRelease=False)
        _color_resp_allKeys.extend(theseKeys)
        if len(_color_resp_allKeys):
            color_resp.keys = _color_resp_allKeys[-1].name  # just the last key pressed
            color_resp.rt = _color_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in color_qComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "color_q"-------
for thisComponent in color_qComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if color_resp.keys in ['', [], None]:  # No response was made
    color_resp.keys = None
thisExp.addData('color_resp.keys',color_resp.keys)
if color_resp.keys != None:  # we had a response
    thisExp.addData('color_resp.rt', color_resp.rt)
thisExp.nextEntry()
# the Routine "color_q" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "english_q"-------
continueRoutine = True
# update component parameters for each repeat
english_resp.keys = []
english_resp.rt = []
_english_resp_allKeys = []
# keep track of which components have finished
english_qComponents = [text_96, text_107, text_108, text_109, text_110, english_resp]
for thisComponent in english_qComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
english_qClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "english_q"-------
while continueRoutine:
    # get current time
    t = english_qClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=english_qClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_96* updates
    if text_96.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_96.frameNStart = frameN  # exact frame index
        text_96.tStart = t  # local t and not account for scr refresh
        text_96.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_96, 'tStartRefresh')  # time at next scr refresh
        text_96.setAutoDraw(True)
    
    # *text_107* updates
    if text_107.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_107.frameNStart = frameN  # exact frame index
        text_107.tStart = t  # local t and not account for scr refresh
        text_107.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_107, 'tStartRefresh')  # time at next scr refresh
        text_107.setAutoDraw(True)
    
    # *text_108* updates
    if text_108.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_108.frameNStart = frameN  # exact frame index
        text_108.tStart = t  # local t and not account for scr refresh
        text_108.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_108, 'tStartRefresh')  # time at next scr refresh
        text_108.setAutoDraw(True)
    
    # *text_109* updates
    if text_109.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_109.frameNStart = frameN  # exact frame index
        text_109.tStart = t  # local t and not account for scr refresh
        text_109.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_109, 'tStartRefresh')  # time at next scr refresh
        text_109.setAutoDraw(True)
    
    # *text_110* updates
    if text_110.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_110.frameNStart = frameN  # exact frame index
        text_110.tStart = t  # local t and not account for scr refresh
        text_110.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_110, 'tStartRefresh')  # time at next scr refresh
        text_110.setAutoDraw(True)
    
    # *english_resp* updates
    waitOnFlip = False
    if english_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        english_resp.frameNStart = frameN  # exact frame index
        english_resp.tStart = t  # local t and not account for scr refresh
        english_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(english_resp, 'tStartRefresh')  # time at next scr refresh
        english_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(english_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(english_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if english_resp.status == STARTED and not waitOnFlip:
        theseKeys = english_resp.getKeys(keyList=['1','2'], waitRelease=False)
        _english_resp_allKeys.extend(theseKeys)
        if len(_english_resp_allKeys):
            english_resp.keys = _english_resp_allKeys[-1].name  # just the last key pressed
            english_resp.rt = _english_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in english_qComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "english_q"-------
for thisComponent in english_qComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if english_resp.keys in ['', [], None]:  # No response was made
    english_resp.keys = None
thisExp.addData('english_resp.keys',english_resp.keys)
if english_resp.keys != None:  # we had a response
    thisExp.addData('english_resp.rt', english_resp.rt)
thisExp.nextEntry()
# the Routine "english_q" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "stai_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_19.keys = []
key_resp_19.rt = []
_key_resp_19_allKeys = []
# keep track of which components have finished
stai_instructComponents = [text_117, key_resp_19]
for thisComponent in stai_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
stai_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "stai_instruct"-------
while continueRoutine:
    # get current time
    t = stai_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=stai_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_117* updates
    if text_117.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_117.frameNStart = frameN  # exact frame index
        text_117.tStart = t  # local t and not account for scr refresh
        text_117.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_117, 'tStartRefresh')  # time at next scr refresh
        text_117.setAutoDraw(True)
    
    # *key_resp_19* updates
    waitOnFlip = False
    if key_resp_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_19.frameNStart = frameN  # exact frame index
        key_resp_19.tStart = t  # local t and not account for scr refresh
        key_resp_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_19, 'tStartRefresh')  # time at next scr refresh
        key_resp_19.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_19.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_19.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_19.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_19.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_19_allKeys.extend(theseKeys)
        if len(_key_resp_19_allKeys):
            key_resp_19.keys = _key_resp_19_allKeys[-1].name  # just the last key pressed
            key_resp_19.rt = _key_resp_19_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in stai_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "stai_instruct"-------
for thisComponent in stai_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "stai_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
stai_trials_1 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stai_qs.xlsx'),
    seed=None, name='stai_trials_1')
thisExp.addLoop(stai_trials_1)  # add the loop to the experiment
thisStai_trial_1 = stai_trials_1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisStai_trial_1.rgb)
if thisStai_trial_1 != None:
    for paramName in thisStai_trial_1:
        exec('{} = thisStai_trial_1[paramName]'.format(paramName))

for thisStai_trial_1 in stai_trials_1:
    currentLoop = stai_trials_1
    # abbreviate parameter names if possible (e.g. rgb = thisStai_trial_1.rgb)
    if thisStai_trial_1 != None:
        for paramName in thisStai_trial_1:
            exec('{} = thisStai_trial_1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "stai"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_52.setText(STAI_item)
    key_resp_stai.keys = []
    key_resp_stai.rt = []
    _key_resp_stai_allKeys = []
    # keep track of which components have finished
    staiComponents = [text_52, text_53, text_54, text_55, text_56, text_57, text_58, text_59, text_60, key_resp_stai]
    for thisComponent in staiComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    staiClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stai"-------
    while continueRoutine:
        # get current time
        t = staiClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=staiClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_52* updates
        if text_52.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_52.frameNStart = frameN  # exact frame index
            text_52.tStart = t  # local t and not account for scr refresh
            text_52.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_52, 'tStartRefresh')  # time at next scr refresh
            text_52.setAutoDraw(True)
        
        # *text_53* updates
        if text_53.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_53.frameNStart = frameN  # exact frame index
            text_53.tStart = t  # local t and not account for scr refresh
            text_53.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
            text_53.setAutoDraw(True)
        
        # *text_54* updates
        if text_54.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_54.frameNStart = frameN  # exact frame index
            text_54.tStart = t  # local t and not account for scr refresh
            text_54.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_54, 'tStartRefresh')  # time at next scr refresh
            text_54.setAutoDraw(True)
        
        # *text_55* updates
        if text_55.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_55.frameNStart = frameN  # exact frame index
            text_55.tStart = t  # local t and not account for scr refresh
            text_55.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_55, 'tStartRefresh')  # time at next scr refresh
            text_55.setAutoDraw(True)
        
        # *text_56* updates
        if text_56.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_56.frameNStart = frameN  # exact frame index
            text_56.tStart = t  # local t and not account for scr refresh
            text_56.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_56, 'tStartRefresh')  # time at next scr refresh
            text_56.setAutoDraw(True)
        
        # *text_57* updates
        if text_57.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_57.frameNStart = frameN  # exact frame index
            text_57.tStart = t  # local t and not account for scr refresh
            text_57.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_57, 'tStartRefresh')  # time at next scr refresh
            text_57.setAutoDraw(True)
        
        # *text_58* updates
        if text_58.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_58.frameNStart = frameN  # exact frame index
            text_58.tStart = t  # local t and not account for scr refresh
            text_58.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_58, 'tStartRefresh')  # time at next scr refresh
            text_58.setAutoDraw(True)
        
        # *text_59* updates
        if text_59.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_59.frameNStart = frameN  # exact frame index
            text_59.tStart = t  # local t and not account for scr refresh
            text_59.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_59, 'tStartRefresh')  # time at next scr refresh
            text_59.setAutoDraw(True)
        
        # *text_60* updates
        if text_60.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_60.frameNStart = frameN  # exact frame index
            text_60.tStart = t  # local t and not account for scr refresh
            text_60.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_60, 'tStartRefresh')  # time at next scr refresh
            text_60.setAutoDraw(True)
        
        # *key_resp_stai* updates
        waitOnFlip = False
        if key_resp_stai.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_stai.frameNStart = frameN  # exact frame index
            key_resp_stai.tStart = t  # local t and not account for scr refresh
            key_resp_stai.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_stai, 'tStartRefresh')  # time at next scr refresh
            key_resp_stai.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_stai.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_stai.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_stai.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_stai.getKeys(keyList=['1','2','3','4'], waitRelease=False)
            _key_resp_stai_allKeys.extend(theseKeys)
            if len(_key_resp_stai_allKeys):
                key_resp_stai.keys = _key_resp_stai_allKeys[-1].name  # just the last key pressed
                key_resp_stai.rt = _key_resp_stai_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in staiComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stai"-------
    for thisComponent in staiComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_stai.keys in ['', [], None]:  # No response was made
        key_resp_stai.keys = None
    stai_trials_1.addData('key_resp_stai.keys',key_resp_stai.keys)
    if key_resp_stai.keys != None:  # we had a response
        stai_trials_1.addData('key_resp_stai.rt', key_resp_stai.rt)
    # the Routine "stai" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'stai_trials_1'


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
            if tThisFlipGlobal > stim1_2.tStartRefresh + stim_array_time_slow-frameTolerance:
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
            if tThisFlipGlobal > stim2_2.tStartRefresh + stim_array_time_slow-frameTolerance:
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
            if tThisFlipGlobal > stim3_2.tStartRefresh + stim_array_time_slow-frameTolerance:
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
            if tThisFlipGlobal > fixation_2.tStartRefresh + (fix_time+stim_array_time_slow)-frameTolerance:
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
            
            mouse_x = mouse_x-(adj_x)
            mouse_y = mouse_y-(adj_y)
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
        
        if curr_angle == 0:
            response_color = stim[j]
        else:
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
practice_2 = data.TrialHandler(nReps=3.0, method='random', 
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
    
# completed 3.0 repeats of 'practice_2'


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
            if tThisFlipGlobal > stim1_2.tStartRefresh + stim_array_time_slow-frameTolerance:
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
            if tThisFlipGlobal > stim2_2.tStartRefresh + stim_array_time_slow-frameTolerance:
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
            if tThisFlipGlobal > stim3_2.tStartRefresh + stim_array_time_slow-frameTolerance:
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
            if tThisFlipGlobal > fixation_2.tStartRefresh + (fix_time+stim_array_time_slow)-frameTolerance:
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
            
            mouse_x = mouse_x-(adj_x)
            mouse_y = mouse_y-(adj_y)
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
        
        if curr_angle == 0:
            response_color = stim[j]
        else:
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


# ------Prepare to start Routine "instructions_4"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_13.keys = []
key_resp_13.rt = []
_key_resp_13_allKeys = []
# keep track of which components have finished
instructions_4Components = [text_88, key_resp_13]
for thisComponent in instructions_4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_4"-------
while continueRoutine:
    # get current time
    t = instructions_4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_88* updates
    if text_88.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_88.frameNStart = frameN  # exact frame index
        text_88.tStart = t  # local t and not account for scr refresh
        text_88.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_88, 'tStartRefresh')  # time at next scr refresh
        text_88.setAutoDraw(True)
    
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
    for thisComponent in instructions_4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_4"-------
for thisComponent in instructions_4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_trials_full = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('delay_conds.xlsx'),
    seed=None, name='practice_trials_full')
thisExp.addLoop(practice_trials_full)  # add the loop to the experiment
thisPractice_trials_full = practice_trials_full.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_trials_full.rgb)
if thisPractice_trials_full != None:
    for paramName in thisPractice_trials_full:
        exec('{} = thisPractice_trials_full[paramName]'.format(paramName))

for thisPractice_trials_full in practice_trials_full:
    currentLoop = practice_trials_full
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_trials_full.rgb)
    if thisPractice_trials_full != None:
        for paramName in thisPractice_trials_full:
            exec('{} = thisPractice_trials_full[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "memory_array"-------
    continueRoutine = True
    # update component parameters for each repeat
    shuffle(angles)
    shuffle(positions)
    
    trial_angles = [angles[0], angles[1], angles[2]]
    err_total = 0
    parity_points = 0
    memory_points = 0
    
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
    parity_trials_practice = data.TrialHandler(nReps=3.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='parity_trials_practice')
    thisExp.addLoop(parity_trials_practice)  # add the loop to the experiment
    thisParity_trials_practice = parity_trials_practice.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisParity_trials_practice.rgb)
    if thisParity_trials_practice != None:
        for paramName in thisParity_trials_practice:
            exec('{} = thisParity_trials_practice[paramName]'.format(paramName))
    
    for thisParity_trials_practice in parity_trials_practice:
        currentLoop = parity_trials_practice
        # abbreviate parameter names if possible (e.g. rgb = thisParity_trials_practice.rgb)
        if thisParity_trials_practice != None:
            for paramName in thisParity_trials_practice:
                exec('{} = thisParity_trials_practice[paramName]'.format(paramName))
        
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
        
        if corr_ans_parity == parity_resp.keys:
            parity_points_trial = 1
        else:
            parity_points_trial = 0
            
            
        parity_points = parity_points + parity_points_trial
        parity_points_total = parity_points_total + parity_points 
        
        # check responses
        if parity_resp.keys in ['', [], None]:  # No response was made
            parity_resp.keys = None
            # was no response the correct answer?!
            if str(corr_ans_parity).lower() == 'none':
               parity_resp.corr = 1;  # correct non-response
            else:
               parity_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for parity_trials_practice (TrialHandler)
        parity_trials_practice.addData('parity_resp.keys',parity_resp.keys)
        parity_trials_practice.addData('parity_resp.corr', parity_resp.corr)
        if parity_resp.keys != None:  # we had a response
            parity_trials_practice.addData('parity_resp.rt', parity_resp.rt)
        # the Routine "parity" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 3.0 repeats of 'parity_trials_practice'
    
    
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
    practice_response_memory3 = data.TrialHandler(nReps=3.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practice_response_memory3')
    thisExp.addLoop(practice_response_memory3)  # add the loop to the experiment
    thisPractice_response_memory3 = practice_response_memory3.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_response_memory3.rgb)
    if thisPractice_response_memory3 != None:
        for paramName in thisPractice_response_memory3:
            exec('{} = thisPractice_response_memory3[paramName]'.format(paramName))
    
    for thisPractice_response_memory3 in practice_response_memory3:
        currentLoop = practice_response_memory3
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_response_memory3.rgb)
        if thisPractice_response_memory3 != None:
            for paramName in thisPractice_response_memory3:
                exec('{} = thisPractice_response_memory3[paramName]'.format(paramName))
        
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
            
            mouse_x = mouse_x-(adj_x)
            mouse_y = mouse_y-(adj_y)
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
        # store data for practice_response_memory3 (TrialHandler)
        x, y = mouse_resp.getPos()
        buttons = mouse_resp.getPressed()
        practice_response_memory3.addData('mouse_resp.x', x)
        practice_response_memory3.addData('mouse_resp.y', y)
        practice_response_memory3.addData('mouse_resp.leftButton', buttons[0])
        practice_response_memory3.addData('mouse_resp.midButton', buttons[1])
        practice_response_memory3.addData('mouse_resp.rightButton', buttons[2])
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
        
        if curr_angle == 0:
            memory_points = 0
        elif (err_angle <= 90):
            memory_points = 20-(round(err_angle/10))
        else:
            memory_points = 0
        
        if focus_item == j:
            memory_points = memory_points * 2
            central_item = 1
        else:
            central_item = 0
        
        points_total = points_total + memory_points
        score[j] = memory_points
        
        thisExp.addData('memory_points', memory_points)
        thisExp.addData('parity_points', parity_points)
        thisExp.addData('points_total', points_total)
        thisExp.addData('central_item', central_item)
        
        win.mouseVisible = False
        j = j+1
        
        # the Routine "response_memory" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 3.0 repeats of 'practice_response_memory3'
    
    
    # ------Prepare to start Routine "feedback"-------
    continueRoutine = True
    # update component parameters for each repeat
    points_total = points_total + parity_points
    new_position_y = positions[focus_item][1] - .05
    new_position = [positions[focus_item][0], new_position_y]
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    text_2.setText(points_total)
    text_16.setPos([positions[0]])
    text_16.setText("Item 1:\n" + str(score[0]))
    text_17.setPos([positions[1]])
    text_17.setText("Item 2:\n" + str(score[1]))
    text_113.setText("Even/odd score: " + str(parity_points))
    circle_focus_item_2.setPos([positions[focus_item]])
    circle_focus_item_2.setSize(circle_size)
    text_103.setPos(new_position)
    text_103.setText('Bonus!')
    text_15.setPos([positions[2]])
    text_15.setText("Item 3:\n" + str(score[2]))
    # keep track of which components have finished
    feedbackComponents = [text_3, key_resp, text_2, text_4, text_16, text_17, text_113, circle_focus_item_2, text_103, text_15]
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
        
        # *text_113* updates
        if text_113.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_113.frameNStart = frameN  # exact frame index
            text_113.tStart = t  # local t and not account for scr refresh
            text_113.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_113, 'tStartRefresh')  # time at next scr refresh
            text_113.setAutoDraw(True)
        
        # *circle_focus_item_2* updates
        if circle_focus_item_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            circle_focus_item_2.frameNStart = frameN  # exact frame index
            circle_focus_item_2.tStart = t  # local t and not account for scr refresh
            circle_focus_item_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(circle_focus_item_2, 'tStartRefresh')  # time at next scr refresh
            circle_focus_item_2.setAutoDraw(True)
        
        # *text_103* updates
        if text_103.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_103.frameNStart = frameN  # exact frame index
            text_103.tStart = t  # local t and not account for scr refresh
            text_103.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_103, 'tStartRefresh')  # time at next scr refresh
            text_103.setAutoDraw(True)
        
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
    parity_points = 0
    # the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'practice_trials_full'


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
        theseKeys = key_resp_7.getKeys(keyList=['c'], waitRelease=False)
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

# ------Prepare to start Routine "trial_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_21.keys = []
key_resp_21.rt = []
_key_resp_21_allKeys = []
# keep track of which components have finished
trial_instructComponents = [text_63, key_resp_21]
for thisComponent in trial_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
trial_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "trial_instruct"-------
while continueRoutine:
    # get current time
    t = trial_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=trial_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_63* updates
    if text_63.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_63.frameNStart = frameN  # exact frame index
        text_63.tStart = t  # local t and not account for scr refresh
        text_63.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_63, 'tStartRefresh')  # time at next scr refresh
        text_63.setAutoDraw(True)
    
    # *key_resp_21* updates
    waitOnFlip = False
    if key_resp_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_21.frameNStart = frameN  # exact frame index
        key_resp_21.tStart = t  # local t and not account for scr refresh
        key_resp_21.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_21, 'tStartRefresh')  # time at next scr refresh
        key_resp_21.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_21.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_21.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_21.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_21.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_21_allKeys.extend(theseKeys)
        if len(_key_resp_21_allKeys):
            key_resp_21.keys = _key_resp_21_allKeys[-1].name  # just the last key pressed
            key_resp_21.rt = _key_resp_21_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in trial_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "trial_instruct"-------
for thisComponent in trial_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "trial_instruct" was not non-slip safe, so reset the non-slip timer
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
        parity_points = 0
        memory_points = 0
        
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
            
            if corr_ans_parity == parity_resp.keys:
                parity_points_trial = 1
            else:
                parity_points_trial = 0
                
                
            parity_points = parity_points + parity_points_trial
            parity_points_total = parity_points_total + parity_points 
            
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
                
                mouse_x = mouse_x-(adj_x)
                mouse_y = mouse_y-(adj_y)
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
            
            if curr_angle == 0:
                memory_points = 0
            elif (err_angle <= 90):
                memory_points = 20-(round(err_angle/10))
            else:
                memory_points = 0
            
            if focus_item == j:
                memory_points = memory_points * 2
                central_item = 1
            else:
                central_item = 0
            
            points_total = points_total + memory_points
            score[j] = memory_points
            
            thisExp.addData('memory_points', memory_points)
            thisExp.addData('parity_points', parity_points)
            thisExp.addData('points_total', points_total)
            thisExp.addData('central_item', central_item)
            
            win.mouseVisible = False
            j = j+1
            
            # the Routine "response_memory" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 3.0 repeats of 'memory_trials'
        
        
        # ------Prepare to start Routine "feedback"-------
        continueRoutine = True
        # update component parameters for each repeat
        points_total = points_total + parity_points
        new_position_y = positions[focus_item][1] - .05
        new_position = [positions[focus_item][0], new_position_y]
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        text_2.setText(points_total)
        text_16.setPos([positions[0]])
        text_16.setText("Item 1:\n" + str(score[0]))
        text_17.setPos([positions[1]])
        text_17.setText("Item 2:\n" + str(score[1]))
        text_113.setText("Even/odd score: " + str(parity_points))
        circle_focus_item_2.setPos([positions[focus_item]])
        circle_focus_item_2.setSize(circle_size)
        text_103.setPos(new_position)
        text_103.setText('Bonus!')
        text_15.setPos([positions[2]])
        text_15.setText("Item 3:\n" + str(score[2]))
        # keep track of which components have finished
        feedbackComponents = [text_3, key_resp, text_2, text_4, text_16, text_17, text_113, circle_focus_item_2, text_103, text_15]
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
            
            # *text_113* updates
            if text_113.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_113.frameNStart = frameN  # exact frame index
                text_113.tStart = t  # local t and not account for scr refresh
                text_113.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_113, 'tStartRefresh')  # time at next scr refresh
                text_113.setAutoDraw(True)
            
            # *circle_focus_item_2* updates
            if circle_focus_item_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                circle_focus_item_2.frameNStart = frameN  # exact frame index
                circle_focus_item_2.tStart = t  # local t and not account for scr refresh
                circle_focus_item_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(circle_focus_item_2, 'tStartRefresh')  # time at next scr refresh
                circle_focus_item_2.setAutoDraw(True)
            
            # *text_103* updates
            if text_103.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_103.frameNStart = frameN  # exact frame index
                text_103.tStart = t  # local t and not account for scr refresh
                text_103.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_103, 'tStartRefresh')  # time at next scr refresh
                text_103.setAutoDraw(True)
            
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
        parity_points = 0
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


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_20.keys = []
key_resp_20.rt = []
_key_resp_20_allKeys = []
# keep track of which components have finished
endComponents = [text_49, key_resp_20]
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
    
    # *text_49* updates
    if text_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_49.frameNStart = frameN  # exact frame index
        text_49.tStart = t  # local t and not account for scr refresh
        text_49.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_49, 'tStartRefresh')  # time at next scr refresh
        text_49.setAutoDraw(True)
    
    # *key_resp_20* updates
    waitOnFlip = False
    if key_resp_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_20.frameNStart = frameN  # exact frame index
        key_resp_20.tStart = t  # local t and not account for scr refresh
        key_resp_20.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_20, 'tStartRefresh')  # time at next scr refresh
        key_resp_20.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_20.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_20.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_20.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_20.getKeys(keyList=['c'], waitRelease=False)
        _key_resp_20_allKeys.extend(theseKeys)
        if len(_key_resp_20_allKeys):
            key_resp_20.keys = _key_resp_20_allKeys[-1].name  # just the last key pressed
            key_resp_20.rt = _key_resp_20_allKeys[-1].rt
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

# ------Prepare to start Routine "stai_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_19.keys = []
key_resp_19.rt = []
_key_resp_19_allKeys = []
# keep track of which components have finished
stai_instructComponents = [text_117, key_resp_19]
for thisComponent in stai_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
stai_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "stai_instruct"-------
while continueRoutine:
    # get current time
    t = stai_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=stai_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_117* updates
    if text_117.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_117.frameNStart = frameN  # exact frame index
        text_117.tStart = t  # local t and not account for scr refresh
        text_117.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_117, 'tStartRefresh')  # time at next scr refresh
        text_117.setAutoDraw(True)
    
    # *key_resp_19* updates
    waitOnFlip = False
    if key_resp_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_19.frameNStart = frameN  # exact frame index
        key_resp_19.tStart = t  # local t and not account for scr refresh
        key_resp_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_19, 'tStartRefresh')  # time at next scr refresh
        key_resp_19.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_19.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_19.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_19.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_19.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_19_allKeys.extend(theseKeys)
        if len(_key_resp_19_allKeys):
            key_resp_19.keys = _key_resp_19_allKeys[-1].name  # just the last key pressed
            key_resp_19.rt = _key_resp_19_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in stai_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "stai_instruct"-------
for thisComponent in stai_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "stai_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
stai_trials_3 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stai_qs.xlsx'),
    seed=None, name='stai_trials_3')
thisExp.addLoop(stai_trials_3)  # add the loop to the experiment
thisStai_trial_3 = stai_trials_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisStai_trial_3.rgb)
if thisStai_trial_3 != None:
    for paramName in thisStai_trial_3:
        exec('{} = thisStai_trial_3[paramName]'.format(paramName))

for thisStai_trial_3 in stai_trials_3:
    currentLoop = stai_trials_3
    # abbreviate parameter names if possible (e.g. rgb = thisStai_trial_3.rgb)
    if thisStai_trial_3 != None:
        for paramName in thisStai_trial_3:
            exec('{} = thisStai_trial_3[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "stai"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_52.setText(STAI_item)
    key_resp_stai.keys = []
    key_resp_stai.rt = []
    _key_resp_stai_allKeys = []
    # keep track of which components have finished
    staiComponents = [text_52, text_53, text_54, text_55, text_56, text_57, text_58, text_59, text_60, key_resp_stai]
    for thisComponent in staiComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    staiClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stai"-------
    while continueRoutine:
        # get current time
        t = staiClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=staiClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_52* updates
        if text_52.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_52.frameNStart = frameN  # exact frame index
            text_52.tStart = t  # local t and not account for scr refresh
            text_52.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_52, 'tStartRefresh')  # time at next scr refresh
            text_52.setAutoDraw(True)
        
        # *text_53* updates
        if text_53.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_53.frameNStart = frameN  # exact frame index
            text_53.tStart = t  # local t and not account for scr refresh
            text_53.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
            text_53.setAutoDraw(True)
        
        # *text_54* updates
        if text_54.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_54.frameNStart = frameN  # exact frame index
            text_54.tStart = t  # local t and not account for scr refresh
            text_54.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_54, 'tStartRefresh')  # time at next scr refresh
            text_54.setAutoDraw(True)
        
        # *text_55* updates
        if text_55.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_55.frameNStart = frameN  # exact frame index
            text_55.tStart = t  # local t and not account for scr refresh
            text_55.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_55, 'tStartRefresh')  # time at next scr refresh
            text_55.setAutoDraw(True)
        
        # *text_56* updates
        if text_56.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_56.frameNStart = frameN  # exact frame index
            text_56.tStart = t  # local t and not account for scr refresh
            text_56.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_56, 'tStartRefresh')  # time at next scr refresh
            text_56.setAutoDraw(True)
        
        # *text_57* updates
        if text_57.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_57.frameNStart = frameN  # exact frame index
            text_57.tStart = t  # local t and not account for scr refresh
            text_57.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_57, 'tStartRefresh')  # time at next scr refresh
            text_57.setAutoDraw(True)
        
        # *text_58* updates
        if text_58.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_58.frameNStart = frameN  # exact frame index
            text_58.tStart = t  # local t and not account for scr refresh
            text_58.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_58, 'tStartRefresh')  # time at next scr refresh
            text_58.setAutoDraw(True)
        
        # *text_59* updates
        if text_59.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_59.frameNStart = frameN  # exact frame index
            text_59.tStart = t  # local t and not account for scr refresh
            text_59.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_59, 'tStartRefresh')  # time at next scr refresh
            text_59.setAutoDraw(True)
        
        # *text_60* updates
        if text_60.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_60.frameNStart = frameN  # exact frame index
            text_60.tStart = t  # local t and not account for scr refresh
            text_60.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_60, 'tStartRefresh')  # time at next scr refresh
            text_60.setAutoDraw(True)
        
        # *key_resp_stai* updates
        waitOnFlip = False
        if key_resp_stai.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_stai.frameNStart = frameN  # exact frame index
            key_resp_stai.tStart = t  # local t and not account for scr refresh
            key_resp_stai.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_stai, 'tStartRefresh')  # time at next scr refresh
            key_resp_stai.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_stai.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_stai.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_stai.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_stai.getKeys(keyList=['1','2','3','4'], waitRelease=False)
            _key_resp_stai_allKeys.extend(theseKeys)
            if len(_key_resp_stai_allKeys):
                key_resp_stai.keys = _key_resp_stai_allKeys[-1].name  # just the last key pressed
                key_resp_stai.rt = _key_resp_stai_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in staiComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stai"-------
    for thisComponent in staiComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_stai.keys in ['', [], None]:  # No response was made
        key_resp_stai.keys = None
    stai_trials_3.addData('key_resp_stai.keys',key_resp_stai.keys)
    if key_resp_stai.keys != None:  # we had a response
        stai_trials_3.addData('key_resp_stai.rt', key_resp_stai.rt)
    # the Routine "stai" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'stai_trials_3'


# ------Prepare to start Routine "bai_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_12.keys = []
key_resp_12.rt = []
_key_resp_12_allKeys = []
# keep track of which components have finished
bai_instructComponents = [text_114, key_resp_12]
for thisComponent in bai_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
bai_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "bai_instruct"-------
while continueRoutine:
    # get current time
    t = bai_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=bai_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_114* updates
    if text_114.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_114.frameNStart = frameN  # exact frame index
        text_114.tStart = t  # local t and not account for scr refresh
        text_114.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_114, 'tStartRefresh')  # time at next scr refresh
        text_114.setAutoDraw(True)
    
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
    for thisComponent in bai_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "bai_instruct"-------
for thisComponent in bai_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "bai_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
bai_trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('bai_qs.xlsx'),
    seed=None, name='bai_trials')
thisExp.addLoop(bai_trials)  # add the loop to the experiment
thisBai_trial = bai_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBai_trial.rgb)
if thisBai_trial != None:
    for paramName in thisBai_trial:
        exec('{} = thisBai_trial[paramName]'.format(paramName))

for thisBai_trial in bai_trials:
    currentLoop = bai_trials
    # abbreviate parameter names if possible (e.g. rgb = thisBai_trial.rgb)
    if thisBai_trial != None:
        for paramName in thisBai_trial:
            exec('{} = thisBai_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "bai"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_20.setText(BAI_item)
    key_resp_bai.keys = []
    key_resp_bai.rt = []
    _key_resp_bai_allKeys = []
    # keep track of which components have finished
    baiComponents = [text_20, text_21, text_22, text_24, text_26, text_25, text_27, text_23, text_28, key_resp_bai, text_29]
    for thisComponent in baiComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    baiClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "bai"-------
    while continueRoutine:
        # get current time
        t = baiClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=baiClock)
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
        
        # *text_21* updates
        if text_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_21.frameNStart = frameN  # exact frame index
            text_21.tStart = t  # local t and not account for scr refresh
            text_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
            text_21.setAutoDraw(True)
        
        # *text_22* updates
        if text_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_22.frameNStart = frameN  # exact frame index
            text_22.tStart = t  # local t and not account for scr refresh
            text_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_22, 'tStartRefresh')  # time at next scr refresh
            text_22.setAutoDraw(True)
        
        # *text_24* updates
        if text_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_24.frameNStart = frameN  # exact frame index
            text_24.tStart = t  # local t and not account for scr refresh
            text_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
            text_24.setAutoDraw(True)
        
        # *text_26* updates
        if text_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_26.frameNStart = frameN  # exact frame index
            text_26.tStart = t  # local t and not account for scr refresh
            text_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_26, 'tStartRefresh')  # time at next scr refresh
            text_26.setAutoDraw(True)
        
        # *text_25* updates
        if text_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_25.frameNStart = frameN  # exact frame index
            text_25.tStart = t  # local t and not account for scr refresh
            text_25.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_25, 'tStartRefresh')  # time at next scr refresh
            text_25.setAutoDraw(True)
        
        # *text_27* updates
        if text_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_27.frameNStart = frameN  # exact frame index
            text_27.tStart = t  # local t and not account for scr refresh
            text_27.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_27, 'tStartRefresh')  # time at next scr refresh
            text_27.setAutoDraw(True)
        
        # *text_23* updates
        if text_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_23.frameNStart = frameN  # exact frame index
            text_23.tStart = t  # local t and not account for scr refresh
            text_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_23, 'tStartRefresh')  # time at next scr refresh
            text_23.setAutoDraw(True)
        
        # *text_28* updates
        if text_28.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_28.frameNStart = frameN  # exact frame index
            text_28.tStart = t  # local t and not account for scr refresh
            text_28.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_28, 'tStartRefresh')  # time at next scr refresh
            text_28.setAutoDraw(True)
        
        # *key_resp_bai* updates
        waitOnFlip = False
        if key_resp_bai.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_bai.frameNStart = frameN  # exact frame index
            key_resp_bai.tStart = t  # local t and not account for scr refresh
            key_resp_bai.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_bai, 'tStartRefresh')  # time at next scr refresh
            key_resp_bai.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_bai.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_bai.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_bai.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_bai.getKeys(keyList=['0','1','2','3'], waitRelease=False)
            _key_resp_bai_allKeys.extend(theseKeys)
            if len(_key_resp_bai_allKeys):
                key_resp_bai.keys = _key_resp_bai_allKeys[-1].name  # just the last key pressed
                key_resp_bai.rt = _key_resp_bai_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_29* updates
        if text_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_29.frameNStart = frameN  # exact frame index
            text_29.tStart = t  # local t and not account for scr refresh
            text_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_29, 'tStartRefresh')  # time at next scr refresh
            text_29.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in baiComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "bai"-------
    for thisComponent in baiComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_bai.keys in ['', [], None]:  # No response was made
        key_resp_bai.keys = None
    bai_trials.addData('key_resp_bai.keys',key_resp_bai.keys)
    if key_resp_bai.keys != None:  # we had a response
        bai_trials.addData('key_resp_bai.rt', key_resp_bai.rt)
    # the Routine "bai" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'bai_trials'


# ------Prepare to start Routine "dass_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_17.keys = []
key_resp_17.rt = []
_key_resp_17_allKeys = []
# keep track of which components have finished
dass_instructComponents = [text_115, key_resp_17]
for thisComponent in dass_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
dass_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "dass_instruct"-------
while continueRoutine:
    # get current time
    t = dass_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=dass_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_115* updates
    if text_115.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_115.frameNStart = frameN  # exact frame index
        text_115.tStart = t  # local t and not account for scr refresh
        text_115.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_115, 'tStartRefresh')  # time at next scr refresh
        text_115.setAutoDraw(True)
    
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
    for thisComponent in dass_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "dass_instruct"-------
for thisComponent in dass_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "dass_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
dass_trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('dass_qs.xlsx'),
    seed=None, name='dass_trials')
thisExp.addLoop(dass_trials)  # add the loop to the experiment
thisDass_trial = dass_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDass_trial.rgb)
if thisDass_trial != None:
    for paramName in thisDass_trial:
        exec('{} = thisDass_trial[paramName]'.format(paramName))

for thisDass_trial in dass_trials:
    currentLoop = dass_trials
    # abbreviate parameter names if possible (e.g. rgb = thisDass_trial.rgb)
    if thisDass_trial != None:
        for paramName in thisDass_trial:
            exec('{} = thisDass_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "dass"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_30.setText(DASS_item)
    key_resp_dass.keys = []
    key_resp_dass.rt = []
    _key_resp_dass_allKeys = []
    # keep track of which components have finished
    dassComponents = [text_30, text_31, text_32, text_33, text_34, text_35, text_36, text_37, text_38, key_resp_dass, text_39]
    for thisComponent in dassComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    dassClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "dass"-------
    while continueRoutine:
        # get current time
        t = dassClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=dassClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_30* updates
        if text_30.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_30.frameNStart = frameN  # exact frame index
            text_30.tStart = t  # local t and not account for scr refresh
            text_30.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_30, 'tStartRefresh')  # time at next scr refresh
            text_30.setAutoDraw(True)
        
        # *text_31* updates
        if text_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_31.frameNStart = frameN  # exact frame index
            text_31.tStart = t  # local t and not account for scr refresh
            text_31.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_31, 'tStartRefresh')  # time at next scr refresh
            text_31.setAutoDraw(True)
        
        # *text_32* updates
        if text_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_32.frameNStart = frameN  # exact frame index
            text_32.tStart = t  # local t and not account for scr refresh
            text_32.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_32, 'tStartRefresh')  # time at next scr refresh
            text_32.setAutoDraw(True)
        
        # *text_33* updates
        if text_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_33.frameNStart = frameN  # exact frame index
            text_33.tStart = t  # local t and not account for scr refresh
            text_33.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_33, 'tStartRefresh')  # time at next scr refresh
            text_33.setAutoDraw(True)
        
        # *text_34* updates
        if text_34.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_34.frameNStart = frameN  # exact frame index
            text_34.tStart = t  # local t and not account for scr refresh
            text_34.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_34, 'tStartRefresh')  # time at next scr refresh
            text_34.setAutoDraw(True)
        
        # *text_35* updates
        if text_35.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_35.frameNStart = frameN  # exact frame index
            text_35.tStart = t  # local t and not account for scr refresh
            text_35.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_35, 'tStartRefresh')  # time at next scr refresh
            text_35.setAutoDraw(True)
        
        # *text_36* updates
        if text_36.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_36.frameNStart = frameN  # exact frame index
            text_36.tStart = t  # local t and not account for scr refresh
            text_36.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_36, 'tStartRefresh')  # time at next scr refresh
            text_36.setAutoDraw(True)
        
        # *text_37* updates
        if text_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_37.frameNStart = frameN  # exact frame index
            text_37.tStart = t  # local t and not account for scr refresh
            text_37.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_37, 'tStartRefresh')  # time at next scr refresh
            text_37.setAutoDraw(True)
        
        # *text_38* updates
        if text_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_38.frameNStart = frameN  # exact frame index
            text_38.tStart = t  # local t and not account for scr refresh
            text_38.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_38, 'tStartRefresh')  # time at next scr refresh
            text_38.setAutoDraw(True)
        
        # *key_resp_dass* updates
        waitOnFlip = False
        if key_resp_dass.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_dass.frameNStart = frameN  # exact frame index
            key_resp_dass.tStart = t  # local t and not account for scr refresh
            key_resp_dass.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_dass, 'tStartRefresh')  # time at next scr refresh
            key_resp_dass.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_dass.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_dass.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_dass.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_dass.getKeys(keyList=['0','1','2','3'], waitRelease=False)
            _key_resp_dass_allKeys.extend(theseKeys)
            if len(_key_resp_dass_allKeys):
                key_resp_dass.keys = _key_resp_dass_allKeys[-1].name  # just the last key pressed
                key_resp_dass.rt = _key_resp_dass_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_39* updates
        if text_39.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_39.frameNStart = frameN  # exact frame index
            text_39.tStart = t  # local t and not account for scr refresh
            text_39.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_39, 'tStartRefresh')  # time at next scr refresh
            text_39.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in dassComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "dass"-------
    for thisComponent in dassComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_dass.keys in ['', [], None]:  # No response was made
        key_resp_dass.keys = None
    dass_trials.addData('key_resp_dass.keys',key_resp_dass.keys)
    if key_resp_dass.keys != None:  # we had a response
        dass_trials.addData('key_resp_dass.rt', key_resp_dass.rt)
    # the Routine "dass" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'dass_trials'


# ------Prepare to start Routine "pss_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_18.keys = []
key_resp_18.rt = []
_key_resp_18_allKeys = []
# keep track of which components have finished
pss_instructComponents = [text_116, key_resp_18]
for thisComponent in pss_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
pss_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "pss_instruct"-------
while continueRoutine:
    # get current time
    t = pss_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=pss_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_116* updates
    if text_116.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_116.frameNStart = frameN  # exact frame index
        text_116.tStart = t  # local t and not account for scr refresh
        text_116.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_116, 'tStartRefresh')  # time at next scr refresh
        text_116.setAutoDraw(True)
    
    # *key_resp_18* updates
    waitOnFlip = False
    if key_resp_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_18.frameNStart = frameN  # exact frame index
        key_resp_18.tStart = t  # local t and not account for scr refresh
        key_resp_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_18, 'tStartRefresh')  # time at next scr refresh
        key_resp_18.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_18.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_18.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_18.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_18.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_18_allKeys.extend(theseKeys)
        if len(_key_resp_18_allKeys):
            key_resp_18.keys = _key_resp_18_allKeys[-1].name  # just the last key pressed
            key_resp_18.rt = _key_resp_18_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in pss_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "pss_instruct"-------
for thisComponent in pss_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "pss_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
pss_trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('pss_qs.xlsx'),
    seed=None, name='pss_trials')
thisExp.addLoop(pss_trials)  # add the loop to the experiment
thisPss_trial = pss_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPss_trial.rgb)
if thisPss_trial != None:
    for paramName in thisPss_trial:
        exec('{} = thisPss_trial[paramName]'.format(paramName))

for thisPss_trial in pss_trials:
    currentLoop = pss_trials
    # abbreviate parameter names if possible (e.g. rgb = thisPss_trial.rgb)
    if thisPss_trial != None:
        for paramName in thisPss_trial:
            exec('{} = thisPss_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "pss"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_40.setText(PSS_item)
    key_resp_pss.keys = []
    key_resp_pss.rt = []
    _key_resp_pss_allKeys = []
    # keep track of which components have finished
    pssComponents = [text_40, text_41, text_42, text_43, text_44, text_45, text_46, text_47, text_48, text_50, text_51, key_resp_pss]
    for thisComponent in pssComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    pssClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "pss"-------
    while continueRoutine:
        # get current time
        t = pssClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=pssClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_40* updates
        if text_40.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_40.frameNStart = frameN  # exact frame index
            text_40.tStart = t  # local t and not account for scr refresh
            text_40.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_40, 'tStartRefresh')  # time at next scr refresh
            text_40.setAutoDraw(True)
        
        # *text_41* updates
        if text_41.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_41.frameNStart = frameN  # exact frame index
            text_41.tStart = t  # local t and not account for scr refresh
            text_41.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_41, 'tStartRefresh')  # time at next scr refresh
            text_41.setAutoDraw(True)
        
        # *text_42* updates
        if text_42.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_42.frameNStart = frameN  # exact frame index
            text_42.tStart = t  # local t and not account for scr refresh
            text_42.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_42, 'tStartRefresh')  # time at next scr refresh
            text_42.setAutoDraw(True)
        
        # *text_43* updates
        if text_43.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_43.frameNStart = frameN  # exact frame index
            text_43.tStart = t  # local t and not account for scr refresh
            text_43.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_43, 'tStartRefresh')  # time at next scr refresh
            text_43.setAutoDraw(True)
        
        # *text_44* updates
        if text_44.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_44.frameNStart = frameN  # exact frame index
            text_44.tStart = t  # local t and not account for scr refresh
            text_44.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_44, 'tStartRefresh')  # time at next scr refresh
            text_44.setAutoDraw(True)
        
        # *text_45* updates
        if text_45.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_45.frameNStart = frameN  # exact frame index
            text_45.tStart = t  # local t and not account for scr refresh
            text_45.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_45, 'tStartRefresh')  # time at next scr refresh
            text_45.setAutoDraw(True)
        
        # *text_46* updates
        if text_46.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_46.frameNStart = frameN  # exact frame index
            text_46.tStart = t  # local t and not account for scr refresh
            text_46.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_46, 'tStartRefresh')  # time at next scr refresh
            text_46.setAutoDraw(True)
        
        # *text_47* updates
        if text_47.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_47.frameNStart = frameN  # exact frame index
            text_47.tStart = t  # local t and not account for scr refresh
            text_47.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_47, 'tStartRefresh')  # time at next scr refresh
            text_47.setAutoDraw(True)
        
        # *text_48* updates
        if text_48.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_48.frameNStart = frameN  # exact frame index
            text_48.tStart = t  # local t and not account for scr refresh
            text_48.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_48, 'tStartRefresh')  # time at next scr refresh
            text_48.setAutoDraw(True)
        
        # *text_50* updates
        if text_50.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_50.frameNStart = frameN  # exact frame index
            text_50.tStart = t  # local t and not account for scr refresh
            text_50.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_50, 'tStartRefresh')  # time at next scr refresh
            text_50.setAutoDraw(True)
        
        # *text_51* updates
        if text_51.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_51.frameNStart = frameN  # exact frame index
            text_51.tStart = t  # local t and not account for scr refresh
            text_51.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_51, 'tStartRefresh')  # time at next scr refresh
            text_51.setAutoDraw(True)
        
        # *key_resp_pss* updates
        waitOnFlip = False
        if key_resp_pss.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_pss.frameNStart = frameN  # exact frame index
            key_resp_pss.tStart = t  # local t and not account for scr refresh
            key_resp_pss.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_pss, 'tStartRefresh')  # time at next scr refresh
            key_resp_pss.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_pss.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_pss.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_pss.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_pss.getKeys(keyList=['0','1','2','3','4'], waitRelease=False)
            _key_resp_pss_allKeys.extend(theseKeys)
            if len(_key_resp_pss_allKeys):
                key_resp_pss.keys = _key_resp_pss_allKeys[-1].name  # just the last key pressed
                key_resp_pss.rt = _key_resp_pss_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in pssComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "pss"-------
    for thisComponent in pssComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_pss.keys in ['', [], None]:  # No response was made
        key_resp_pss.keys = None
    pss_trials.addData('key_resp_pss.keys',key_resp_pss.keys)
    if key_resp_pss.keys != None:  # we had a response
        pss_trials.addData('key_resp_pss.rt', key_resp_pss.rt)
    # the Routine "pss" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'pss_trials'


# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_20.keys = []
key_resp_20.rt = []
_key_resp_20_allKeys = []
# keep track of which components have finished
endComponents = [text_49, key_resp_20]
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
    
    # *text_49* updates
    if text_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_49.frameNStart = frameN  # exact frame index
        text_49.tStart = t  # local t and not account for scr refresh
        text_49.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_49, 'tStartRefresh')  # time at next scr refresh
        text_49.setAutoDraw(True)
    
    # *key_resp_20* updates
    waitOnFlip = False
    if key_resp_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_20.frameNStart = frameN  # exact frame index
        key_resp_20.tStart = t  # local t and not account for scr refresh
        key_resp_20.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_20, 'tStartRefresh')  # time at next scr refresh
        key_resp_20.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_20.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_20.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_20.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_20.getKeys(keyList=['c'], waitRelease=False)
        _key_resp_20_allKeys.extend(theseKeys)
        if len(_key_resp_20_allKeys):
            key_resp_20.keys = _key_resp_20_allKeys[-1].name  # just the last key pressed
            key_resp_20.rt = _key_resp_20_allKeys[-1].rt
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

# ------Prepare to start Routine "end_instruct"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_14.keys = []
key_resp_14.rt = []
_key_resp_14_allKeys = []
# keep track of which components have finished
end_instructComponents = [text_106, key_resp_14]
for thisComponent in end_instructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
end_instructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end_instruct"-------
while continueRoutine:
    # get current time
    t = end_instructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=end_instructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_106* updates
    if text_106.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_106.frameNStart = frameN  # exact frame index
        text_106.tStart = t  # local t and not account for scr refresh
        text_106.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_106, 'tStartRefresh')  # time at next scr refresh
        text_106.setAutoDraw(True)
    
    # *key_resp_14* updates
    waitOnFlip = False
    if key_resp_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
    for thisComponent in end_instructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_instruct"-------
for thisComponent in end_instructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "hr1_entry"-------
continueRoutine = True
# update component parameters for each repeat
hr_1.reset()
key_resp_15.keys = []
key_resp_15.rt = []
_key_resp_15_allKeys = []
# keep track of which components have finished
hr1_entryComponents = [text_111, text_112, hr_1, key_resp_15]
for thisComponent in hr1_entryComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
hr1_entryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "hr1_entry"-------
while continueRoutine:
    # get current time
    t = hr1_entryClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=hr1_entryClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_111* updates
    if text_111.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_111.frameNStart = frameN  # exact frame index
        text_111.tStart = t  # local t and not account for scr refresh
        text_111.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_111, 'tStartRefresh')  # time at next scr refresh
        text_111.setAutoDraw(True)
    
    # *text_112* updates
    if text_112.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_112.frameNStart = frameN  # exact frame index
        text_112.tStart = t  # local t and not account for scr refresh
        text_112.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_112, 'tStartRefresh')  # time at next scr refresh
        text_112.setAutoDraw(True)
    
    # *hr_1* updates
    if hr_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        hr_1.frameNStart = frameN  # exact frame index
        hr_1.tStart = t  # local t and not account for scr refresh
        hr_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(hr_1, 'tStartRefresh')  # time at next scr refresh
        hr_1.setAutoDraw(True)
    
    # *key_resp_15* updates
    waitOnFlip = False
    if key_resp_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_15.frameNStart = frameN  # exact frame index
        key_resp_15.tStart = t  # local t and not account for scr refresh
        key_resp_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_15, 'tStartRefresh')  # time at next scr refresh
        key_resp_15.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_15.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_15.clearEvents, eventType='keyboard')  # clear events on next screen flip
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
    for thisComponent in hr1_entryComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "hr1_entry"-------
for thisComponent in hr1_entryComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('hr_1.text',hr_1.text)
# the Routine "hr1_entry" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "hr2_entry"-------
continueRoutine = True
# update component parameters for each repeat
hr_2.reset()
key_resp_16.keys = []
key_resp_16.rt = []
_key_resp_16_allKeys = []
# keep track of which components have finished
hr2_entryComponents = [text_118, text_119, hr_2, key_resp_16]
for thisComponent in hr2_entryComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
hr2_entryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "hr2_entry"-------
while continueRoutine:
    # get current time
    t = hr2_entryClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=hr2_entryClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_118* updates
    if text_118.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_118.frameNStart = frameN  # exact frame index
        text_118.tStart = t  # local t and not account for scr refresh
        text_118.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_118, 'tStartRefresh')  # time at next scr refresh
        text_118.setAutoDraw(True)
    
    # *text_119* updates
    if text_119.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_119.frameNStart = frameN  # exact frame index
        text_119.tStart = t  # local t and not account for scr refresh
        text_119.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_119, 'tStartRefresh')  # time at next scr refresh
        text_119.setAutoDraw(True)
    
    # *hr_2* updates
    if hr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        hr_2.frameNStart = frameN  # exact frame index
        hr_2.tStart = t  # local t and not account for scr refresh
        hr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(hr_2, 'tStartRefresh')  # time at next scr refresh
        hr_2.setAutoDraw(True)
    
    # *key_resp_16* updates
    waitOnFlip = False
    if key_resp_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
    for thisComponent in hr2_entryComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "hr2_entry"-------
for thisComponent in hr2_entryComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('hr_2.text',hr_2.text)
# the Routine "hr2_entry" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "hr3_entry"-------
continueRoutine = True
# update component parameters for each repeat
hr_3.reset()
key_resp_25.keys = []
key_resp_25.rt = []
_key_resp_25_allKeys = []
# keep track of which components have finished
hr3_entryComponents = [text_125, text_126, hr_3, key_resp_25]
for thisComponent in hr3_entryComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
hr3_entryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "hr3_entry"-------
while continueRoutine:
    # get current time
    t = hr3_entryClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=hr3_entryClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_125* updates
    if text_125.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_125.frameNStart = frameN  # exact frame index
        text_125.tStart = t  # local t and not account for scr refresh
        text_125.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_125, 'tStartRefresh')  # time at next scr refresh
        text_125.setAutoDraw(True)
    
    # *text_126* updates
    if text_126.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_126.frameNStart = frameN  # exact frame index
        text_126.tStart = t  # local t and not account for scr refresh
        text_126.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_126, 'tStartRefresh')  # time at next scr refresh
        text_126.setAutoDraw(True)
    
    # *hr_3* updates
    if hr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        hr_3.frameNStart = frameN  # exact frame index
        hr_3.tStart = t  # local t and not account for scr refresh
        hr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(hr_3, 'tStartRefresh')  # time at next scr refresh
        hr_3.setAutoDraw(True)
    
    # *key_resp_25* updates
    waitOnFlip = False
    if key_resp_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_25.frameNStart = frameN  # exact frame index
        key_resp_25.tStart = t  # local t and not account for scr refresh
        key_resp_25.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_25, 'tStartRefresh')  # time at next scr refresh
        key_resp_25.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_25.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_25.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_25.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_25.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_25_allKeys.extend(theseKeys)
        if len(_key_resp_25_allKeys):
            key_resp_25.keys = _key_resp_25_allKeys[-1].name  # just the last key pressed
            key_resp_25.rt = _key_resp_25_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in hr3_entryComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "hr3_entry"-------
for thisComponent in hr3_entryComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('hr_3.text',hr_3.text)
# the Routine "hr3_entry" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "sb02_1_entry"-------
continueRoutine = True
# update component parameters for each repeat
sb02_1.reset()
key_resp_22.keys = []
key_resp_22.rt = []
_key_resp_22_allKeys = []
# keep track of which components have finished
sb02_1_entryComponents = [text_120, text_121, sb02_1, key_resp_22]
for thisComponent in sb02_1_entryComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
sb02_1_entryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "sb02_1_entry"-------
while continueRoutine:
    # get current time
    t = sb02_1_entryClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=sb02_1_entryClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_120* updates
    if text_120.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_120.frameNStart = frameN  # exact frame index
        text_120.tStart = t  # local t and not account for scr refresh
        text_120.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_120, 'tStartRefresh')  # time at next scr refresh
        text_120.setAutoDraw(True)
    
    # *text_121* updates
    if text_121.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_121.frameNStart = frameN  # exact frame index
        text_121.tStart = t  # local t and not account for scr refresh
        text_121.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_121, 'tStartRefresh')  # time at next scr refresh
        text_121.setAutoDraw(True)
    
    # *sb02_1* updates
    if sb02_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sb02_1.frameNStart = frameN  # exact frame index
        sb02_1.tStart = t  # local t and not account for scr refresh
        sb02_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sb02_1, 'tStartRefresh')  # time at next scr refresh
        sb02_1.setAutoDraw(True)
    
    # *key_resp_22* updates
    waitOnFlip = False
    if key_resp_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_22.frameNStart = frameN  # exact frame index
        key_resp_22.tStart = t  # local t and not account for scr refresh
        key_resp_22.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_22, 'tStartRefresh')  # time at next scr refresh
        key_resp_22.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_22.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_22.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_22.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_22.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_22_allKeys.extend(theseKeys)
        if len(_key_resp_22_allKeys):
            key_resp_22.keys = _key_resp_22_allKeys[-1].name  # just the last key pressed
            key_resp_22.rt = _key_resp_22_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in sb02_1_entryComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "sb02_1_entry"-------
for thisComponent in sb02_1_entryComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('sb02_1.text',sb02_1.text)
# the Routine "sb02_1_entry" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "sb02_2_entry"-------
continueRoutine = True
# update component parameters for each repeat
sb02_2.reset()
key_resp_23.keys = []
key_resp_23.rt = []
_key_resp_23_allKeys = []
# keep track of which components have finished
sb02_2_entryComponents = [text_122, text_123, sb02_2, key_resp_23]
for thisComponent in sb02_2_entryComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
sb02_2_entryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "sb02_2_entry"-------
while continueRoutine:
    # get current time
    t = sb02_2_entryClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=sb02_2_entryClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_122* updates
    if text_122.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_122.frameNStart = frameN  # exact frame index
        text_122.tStart = t  # local t and not account for scr refresh
        text_122.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_122, 'tStartRefresh')  # time at next scr refresh
        text_122.setAutoDraw(True)
    
    # *text_123* updates
    if text_123.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_123.frameNStart = frameN  # exact frame index
        text_123.tStart = t  # local t and not account for scr refresh
        text_123.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_123, 'tStartRefresh')  # time at next scr refresh
        text_123.setAutoDraw(True)
    
    # *sb02_2* updates
    if sb02_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sb02_2.frameNStart = frameN  # exact frame index
        sb02_2.tStart = t  # local t and not account for scr refresh
        sb02_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sb02_2, 'tStartRefresh')  # time at next scr refresh
        sb02_2.setAutoDraw(True)
    
    # *key_resp_23* updates
    waitOnFlip = False
    if key_resp_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_23.frameNStart = frameN  # exact frame index
        key_resp_23.tStart = t  # local t and not account for scr refresh
        key_resp_23.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_23, 'tStartRefresh')  # time at next scr refresh
        key_resp_23.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_23.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_23.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_23.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_23.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_23_allKeys.extend(theseKeys)
        if len(_key_resp_23_allKeys):
            key_resp_23.keys = _key_resp_23_allKeys[-1].name  # just the last key pressed
            key_resp_23.rt = _key_resp_23_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in sb02_2_entryComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "sb02_2_entry"-------
for thisComponent in sb02_2_entryComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('sb02_2.text',sb02_2.text)
# the Routine "sb02_2_entry" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "sb02_3_entry"-------
continueRoutine = True
# update component parameters for each repeat
sb02_3.reset()
key_resp_26.keys = []
key_resp_26.rt = []
_key_resp_26_allKeys = []
# keep track of which components have finished
sb02_3_entryComponents = [text_127, text_128, sb02_3, key_resp_26]
for thisComponent in sb02_3_entryComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
sb02_3_entryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "sb02_3_entry"-------
while continueRoutine:
    # get current time
    t = sb02_3_entryClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=sb02_3_entryClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_127* updates
    if text_127.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_127.frameNStart = frameN  # exact frame index
        text_127.tStart = t  # local t and not account for scr refresh
        text_127.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_127, 'tStartRefresh')  # time at next scr refresh
        text_127.setAutoDraw(True)
    
    # *text_128* updates
    if text_128.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_128.frameNStart = frameN  # exact frame index
        text_128.tStart = t  # local t and not account for scr refresh
        text_128.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_128, 'tStartRefresh')  # time at next scr refresh
        text_128.setAutoDraw(True)
    
    # *sb02_3* updates
    if sb02_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sb02_3.frameNStart = frameN  # exact frame index
        sb02_3.tStart = t  # local t and not account for scr refresh
        sb02_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sb02_3, 'tStartRefresh')  # time at next scr refresh
        sb02_3.setAutoDraw(True)
    
    # *key_resp_26* updates
    waitOnFlip = False
    if key_resp_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_26.frameNStart = frameN  # exact frame index
        key_resp_26.tStart = t  # local t and not account for scr refresh
        key_resp_26.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_26, 'tStartRefresh')  # time at next scr refresh
        key_resp_26.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_26.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_26.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_26.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_26.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_26_allKeys.extend(theseKeys)
        if len(_key_resp_26_allKeys):
            key_resp_26.keys = _key_resp_26_allKeys[-1].name  # just the last key pressed
            key_resp_26.rt = _key_resp_26_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in sb02_3_entryComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "sb02_3_entry"-------
for thisComponent in sb02_3_entryComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('sb02_3.text',sb02_3.text)
# the Routine "sb02_3_entry" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
stai_trials_2 = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stai_qs.xlsx'),
    seed=None, name='stai_trials_2')
thisExp.addLoop(stai_trials_2)  # add the loop to the experiment
thisStai_trial_2 = stai_trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisStai_trial_2.rgb)
if thisStai_trial_2 != None:
    for paramName in thisStai_trial_2:
        exec('{} = thisStai_trial_2[paramName]'.format(paramName))

for thisStai_trial_2 in stai_trials_2:
    currentLoop = stai_trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisStai_trial_2.rgb)
    if thisStai_trial_2 != None:
        for paramName in thisStai_trial_2:
            exec('{} = thisStai_trial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "stai"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_52.setText(STAI_item)
    key_resp_stai.keys = []
    key_resp_stai.rt = []
    _key_resp_stai_allKeys = []
    # keep track of which components have finished
    staiComponents = [text_52, text_53, text_54, text_55, text_56, text_57, text_58, text_59, text_60, key_resp_stai]
    for thisComponent in staiComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    staiClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stai"-------
    while continueRoutine:
        # get current time
        t = staiClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=staiClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_52* updates
        if text_52.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_52.frameNStart = frameN  # exact frame index
            text_52.tStart = t  # local t and not account for scr refresh
            text_52.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_52, 'tStartRefresh')  # time at next scr refresh
            text_52.setAutoDraw(True)
        
        # *text_53* updates
        if text_53.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_53.frameNStart = frameN  # exact frame index
            text_53.tStart = t  # local t and not account for scr refresh
            text_53.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
            text_53.setAutoDraw(True)
        
        # *text_54* updates
        if text_54.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_54.frameNStart = frameN  # exact frame index
            text_54.tStart = t  # local t and not account for scr refresh
            text_54.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_54, 'tStartRefresh')  # time at next scr refresh
            text_54.setAutoDraw(True)
        
        # *text_55* updates
        if text_55.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_55.frameNStart = frameN  # exact frame index
            text_55.tStart = t  # local t and not account for scr refresh
            text_55.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_55, 'tStartRefresh')  # time at next scr refresh
            text_55.setAutoDraw(True)
        
        # *text_56* updates
        if text_56.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_56.frameNStart = frameN  # exact frame index
            text_56.tStart = t  # local t and not account for scr refresh
            text_56.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_56, 'tStartRefresh')  # time at next scr refresh
            text_56.setAutoDraw(True)
        
        # *text_57* updates
        if text_57.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_57.frameNStart = frameN  # exact frame index
            text_57.tStart = t  # local t and not account for scr refresh
            text_57.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_57, 'tStartRefresh')  # time at next scr refresh
            text_57.setAutoDraw(True)
        
        # *text_58* updates
        if text_58.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_58.frameNStart = frameN  # exact frame index
            text_58.tStart = t  # local t and not account for scr refresh
            text_58.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_58, 'tStartRefresh')  # time at next scr refresh
            text_58.setAutoDraw(True)
        
        # *text_59* updates
        if text_59.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_59.frameNStart = frameN  # exact frame index
            text_59.tStart = t  # local t and not account for scr refresh
            text_59.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_59, 'tStartRefresh')  # time at next scr refresh
            text_59.setAutoDraw(True)
        
        # *text_60* updates
        if text_60.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_60.frameNStart = frameN  # exact frame index
            text_60.tStart = t  # local t and not account for scr refresh
            text_60.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_60, 'tStartRefresh')  # time at next scr refresh
            text_60.setAutoDraw(True)
        
        # *key_resp_stai* updates
        waitOnFlip = False
        if key_resp_stai.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_stai.frameNStart = frameN  # exact frame index
            key_resp_stai.tStart = t  # local t and not account for scr refresh
            key_resp_stai.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_stai, 'tStartRefresh')  # time at next scr refresh
            key_resp_stai.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_stai.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_stai.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_stai.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_stai.getKeys(keyList=['1','2','3','4'], waitRelease=False)
            _key_resp_stai_allKeys.extend(theseKeys)
            if len(_key_resp_stai_allKeys):
                key_resp_stai.keys = _key_resp_stai_allKeys[-1].name  # just the last key pressed
                key_resp_stai.rt = _key_resp_stai_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in staiComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stai"-------
    for thisComponent in staiComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_stai.keys in ['', [], None]:  # No response was made
        key_resp_stai.keys = None
    stai_trials_2.addData('key_resp_stai.keys',key_resp_stai.keys)
    if key_resp_stai.keys != None:  # we had a response
        stai_trials_2.addData('key_resp_stai.rt', key_resp_stai.rt)
    # the Routine "stai" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'stai_trials_2'


# ------Prepare to start Routine "experimenter"-------
continueRoutine = True
# update component parameters for each repeat
textbox_initials.reset()
key_resp_27.keys = []
key_resp_27.rt = []
_key_resp_27_allKeys = []
# keep track of which components have finished
experimenterComponents = [text_129, textbox_initials, key_resp_27]
for thisComponent in experimenterComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
experimenterClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "experimenter"-------
while continueRoutine:
    # get current time
    t = experimenterClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=experimenterClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_129* updates
    if text_129.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_129.frameNStart = frameN  # exact frame index
        text_129.tStart = t  # local t and not account for scr refresh
        text_129.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_129, 'tStartRefresh')  # time at next scr refresh
        text_129.setAutoDraw(True)
    
    # *textbox_initials* updates
    if textbox_initials.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_initials.frameNStart = frameN  # exact frame index
        textbox_initials.tStart = t  # local t and not account for scr refresh
        textbox_initials.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_initials, 'tStartRefresh')  # time at next scr refresh
        textbox_initials.setAutoDraw(True)
    
    # *key_resp_27* updates
    waitOnFlip = False
    if key_resp_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_27.frameNStart = frameN  # exact frame index
        key_resp_27.tStart = t  # local t and not account for scr refresh
        key_resp_27.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_27, 'tStartRefresh')  # time at next scr refresh
        key_resp_27.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_27.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_27.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_27.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_27.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_27_allKeys.extend(theseKeys)
        if len(_key_resp_27_allKeys):
            key_resp_27.keys = _key_resp_27_allKeys[-1].name  # just the last key pressed
            key_resp_27.rt = _key_resp_27_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in experimenterComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "experimenter"-------
for thisComponent in experimenterComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox_initials.text',textbox_initials.text)
# the Routine "experimenter" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "experiment_end"-------
continueRoutine = True
# update component parameters for each repeat
textbox_notes.reset()
key_resp_24.keys = []
key_resp_24.rt = []
_key_resp_24_allKeys = []
# keep track of which components have finished
experiment_endComponents = [text_124, textbox_notes, key_resp_24]
for thisComponent in experiment_endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
experiment_endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "experiment_end"-------
while continueRoutine:
    # get current time
    t = experiment_endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=experiment_endClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_124* updates
    if text_124.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_124.frameNStart = frameN  # exact frame index
        text_124.tStart = t  # local t and not account for scr refresh
        text_124.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_124, 'tStartRefresh')  # time at next scr refresh
        text_124.setAutoDraw(True)
    
    # *textbox_notes* updates
    if textbox_notes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_notes.frameNStart = frameN  # exact frame index
        textbox_notes.tStart = t  # local t and not account for scr refresh
        textbox_notes.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_notes, 'tStartRefresh')  # time at next scr refresh
        textbox_notes.setAutoDraw(True)
    
    # *key_resp_24* updates
    waitOnFlip = False
    if key_resp_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_24.frameNStart = frameN  # exact frame index
        key_resp_24.tStart = t  # local t and not account for scr refresh
        key_resp_24.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_24, 'tStartRefresh')  # time at next scr refresh
        key_resp_24.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_24.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_24.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_24.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_24.getKeys(keyList=['return'], waitRelease=False)
        _key_resp_24_allKeys.extend(theseKeys)
        if len(_key_resp_24_allKeys):
            key_resp_24.keys = _key_resp_24_allKeys[-1].name  # just the last key pressed
            key_resp_24.rt = _key_resp_24_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in experiment_endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "experiment_end"-------
for thisComponent in experiment_endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox_notes.text',textbox_notes.text)
# the Routine "experiment_end" was not non-slip safe, so reset the non-slip timer
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
