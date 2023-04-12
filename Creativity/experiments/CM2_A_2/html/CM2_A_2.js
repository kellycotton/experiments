/**************** 
 * Cm2_A_2 Test *
 ****************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'CM2_A_2';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const startLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(startLoopBegin, startLoopScheduler);
flowScheduler.add(startLoopScheduler);
flowScheduler.add(startLoopEnd);
const trials_reiLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_reiLoopBegin, trials_reiLoopScheduler);
flowScheduler.add(trials_reiLoopScheduler);
flowScheduler.add(trials_reiLoopEnd);
flowScheduler.add(instructions_ltmRoutineBegin());
flowScheduler.add(instructions_ltmRoutineEachFrame());
flowScheduler.add(instructions_ltmRoutineEnd());
const trial_ltmLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trial_ltmLoopBegin, trial_ltmLoopScheduler);
flowScheduler.add(trial_ltmLoopScheduler);
flowScheduler.add(trial_ltmLoopEnd);
flowScheduler.add(end_experimentRoutineBegin());
flowScheduler.add(end_experimentRoutineEachFrame());
flowScheduler.add(end_experimentRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var shuffle;
var words_practice;
var words_target;
var words_lure;
var words_distractor;
var rei_scaleClock;
var rei_instructions;
var rei_1;
var rei_2;
var rei_3;
var rei_4;
var rei_5;
var rei_text;
var key_resp_rei;
var instructions_ltmClock;
var instr_text_ltm_1;
var instr_resp_ltm;
var instr_text_ltm_2;
var text_example_1;
var text_example_2;
var text_example_3;
var text_example_4;
var text_example_5;
var recognition_testClock;
var m;
var fixation_ltm;
var distractor;
var target_ltm;
var slider_right;
var slider_left;
var end_experimentClock;
var text_end_exp;
var key_resp_5;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  Array.prototype.append = [].push; 
  shuffle = util.shuffle;
  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    quitPsychoJS('Mobile device detected. Goodbye!', false)
  }
  
  words_practice = [];
  words_target = [];
  words_lure = [];
  words_distractor = [];
  document.body.style.cursor='none';
  // Initialize components for Routine "rei_scale"
  rei_scaleClock = new util.Clock();
  rei_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'rei_instructions',
    text: 'Using the following scale, please rate the extent that these items refer to you.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  rei_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rei_1',
    text: '1\nDefinitely true\nof myself',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), 0.05], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  rei_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rei_2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.125), 0.085], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  rei_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rei_3',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.085], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  rei_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rei_4',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0.125, 0.085], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  rei_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rei_5',
    text: '5\nDefinitely not \ntrue of myself',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.05], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  rei_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rei_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  key_resp_rei = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_ltm"
  instructions_ltmClock = new util.Clock();
  instr_text_ltm_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_ltm_1',
    text: 'You will see two words on the screen. One of the words was previously displayed yesterday during this task: \n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_resp_ltm = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_text_ltm_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_ltm_2',
    text: "Below each word there is a confidence bar ranging from ''Guess'' to ''Sure''.\nUse your mouse to indicate which word was previously presented and your level of confidence using the bar.\n\nPress <space> to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_example_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_example_1',
    text: 'TWIG',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_example_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_example_2',
    text: 'TWIG',
    font: 'Arial',
    units: undefined, 
    pos: [0.1, 0.2], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  text_example_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_example_3',
    text: 'SHEEP',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.1), 0.2], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  text_example_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_example_4',
    text: 'SALT',
    font: 'Arial',
    units: undefined, 
    pos: [0.1, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  text_example_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_example_5',
    text: 'BONE',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.1), 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "recognition_test"
  recognition_testClock = new util.Clock();
  m = 0;
  fixation_ltm = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_ltm', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  distractor = new visual.TextStim({
    win: psychoJS.window,
    name: 'distractor',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  target_ltm = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_ltm',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  slider_right = new visual.Slider({
    win: psychoJS.window, name: 'slider_right',
    size: [0.6, 0.05], pos: [0.35, (- 0.25)], units: 'height',
    labels: ["Guess", "Sure"], ticks: [1, 100],
    granularity: 0, style: [visual.Slider.Style.RATING, visual.Slider.Style.LABELS_45],
    color: new util.Color('LightGray'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  slider_left = new visual.Slider({
    win: psychoJS.window, name: 'slider_left',
    size: [0.6, 0.05], pos: [(- 0.35), (- 0.25)], units: 'height',
    labels: ["Sure", "Guess"], ticks: [(- 100), 1],
    granularity: 0, style: [visual.Slider.Style.RATING, visual.Slider.Style.LABELS_45],
    color: new util.Color('LightGray'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  // Initialize components for Routine "end_experiment"
  end_experimentClock = new util.Clock();
  text_end_exp = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_exp',
    text: 'Congratulations, you have reached the end of the experiment!\n\nThank you for your time and participation.\n\nPlease press <space> to close.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var start;
var currentLoop;
function startLoopBegin(startLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  start = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stimuli/words_text_A.xlsx',
    seed: undefined, name: 'start'
  });
  psychoJS.experiment.addLoop(start); // add the loop to the experiment
  currentLoop = start;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisStart of start) {
    const snapshot = start.getSnapshot();
    startLoopScheduler.add(importConditions(snapshot));
    startLoopScheduler.add(setupRoutineBegin(snapshot));
    startLoopScheduler.add(setupRoutineEachFrame(snapshot));
    startLoopScheduler.add(setupRoutineEnd(snapshot));
    startLoopScheduler.add(endLoopIteration(startLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function startLoopEnd() {
  psychoJS.experiment.removeLoop(start);

  return Scheduler.Event.NEXT;
}


var trials_rei;
function trials_reiLoopBegin(trials_reiLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_rei = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stimuli/REI_scale.xlsx',
    seed: undefined, name: 'trials_rei'
  });
  psychoJS.experiment.addLoop(trials_rei); // add the loop to the experiment
  currentLoop = trials_rei;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_rei of trials_rei) {
    const snapshot = trials_rei.getSnapshot();
    trials_reiLoopScheduler.add(importConditions(snapshot));
    trials_reiLoopScheduler.add(rei_scaleRoutineBegin(snapshot));
    trials_reiLoopScheduler.add(rei_scaleRoutineEachFrame(snapshot));
    trials_reiLoopScheduler.add(rei_scaleRoutineEnd(snapshot));
    trials_reiLoopScheduler.add(endLoopIteration(trials_reiLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_reiLoopEnd() {
  psychoJS.experiment.removeLoop(trials_rei);

  return Scheduler.Event.NEXT;
}


var trial_ltm;
function trial_ltmLoopBegin(trial_ltmLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trial_ltm = new TrialHandler({
    psychoJS: psychoJS,
    nReps: words_target.length, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trial_ltm'
  });
  psychoJS.experiment.addLoop(trial_ltm); // add the loop to the experiment
  currentLoop = trial_ltm;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_ltm of trial_ltm) {
    const snapshot = trial_ltm.getSnapshot();
    trial_ltmLoopScheduler.add(importConditions(snapshot));
    trial_ltmLoopScheduler.add(recognition_testRoutineBegin(snapshot));
    trial_ltmLoopScheduler.add(recognition_testRoutineEachFrame(snapshot));
    trial_ltmLoopScheduler.add(recognition_testRoutineEnd(snapshot));
    trial_ltmLoopScheduler.add(endLoopIteration(trial_ltmLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trial_ltmLoopEnd() {
  psychoJS.experiment.removeLoop(trial_ltm);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((Type === "practice")) {
        words_practice.append([WordsStimuli]);
    } else {
        if ((Type === "target")) {
            words_target.append([WordsStimuli]);
        } else {
            if ((Type === "lure")) {
                words_lure.append([WordsStimuli]);
            } else {
                words_distractor.append([WordsStimuli]);
            }
        }
    }
    
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_rei_allKeys;
var rei_scaleComponents;
function rei_scaleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'rei_scale'-------
    t = 0;
    rei_scaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(180.000000);
    // update component parameters for each repeat
    rei_text.setText(rei_question);
    key_resp_rei.keys = undefined;
    key_resp_rei.rt = undefined;
    _key_resp_rei_allKeys = [];
    // keep track of which components have finished
    rei_scaleComponents = [];
    rei_scaleComponents.push(rei_instructions);
    rei_scaleComponents.push(rei_1);
    rei_scaleComponents.push(rei_2);
    rei_scaleComponents.push(rei_3);
    rei_scaleComponents.push(rei_4);
    rei_scaleComponents.push(rei_5);
    rei_scaleComponents.push(rei_text);
    rei_scaleComponents.push(key_resp_rei);
    
    for (const thisComponent of rei_scaleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function rei_scaleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'rei_scale'-------
    // get current time
    t = rei_scaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rei_instructions* updates
    if (t >= 0.0 && rei_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rei_instructions.tStart = t;  // (not accounting for frame time here)
      rei_instructions.frameNStart = frameN;  // exact frame index
      
      rei_instructions.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rei_instructions.status === PsychoJS.Status.STARTED || rei_instructions.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rei_instructions.setAutoDraw(false);
    }
    
    // *rei_1* updates
    if (t >= 0.0 && rei_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rei_1.tStart = t;  // (not accounting for frame time here)
      rei_1.frameNStart = frameN;  // exact frame index
      
      rei_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rei_1.status === PsychoJS.Status.STARTED || rei_1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rei_1.setAutoDraw(false);
    }
    
    // *rei_2* updates
    if (t >= 0.0 && rei_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rei_2.tStart = t;  // (not accounting for frame time here)
      rei_2.frameNStart = frameN;  // exact frame index
      
      rei_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rei_2.status === PsychoJS.Status.STARTED || rei_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rei_2.setAutoDraw(false);
    }
    
    // *rei_3* updates
    if (t >= 0.0 && rei_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rei_3.tStart = t;  // (not accounting for frame time here)
      rei_3.frameNStart = frameN;  // exact frame index
      
      rei_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rei_3.status === PsychoJS.Status.STARTED || rei_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rei_3.setAutoDraw(false);
    }
    
    // *rei_4* updates
    if (t >= 0.0 && rei_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rei_4.tStart = t;  // (not accounting for frame time here)
      rei_4.frameNStart = frameN;  // exact frame index
      
      rei_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rei_4.status === PsychoJS.Status.STARTED || rei_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rei_4.setAutoDraw(false);
    }
    
    // *rei_5* updates
    if (t >= 0.0 && rei_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rei_5.tStart = t;  // (not accounting for frame time here)
      rei_5.frameNStart = frameN;  // exact frame index
      
      rei_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rei_5.status === PsychoJS.Status.STARTED || rei_5.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rei_5.setAutoDraw(false);
    }
    
    // *rei_text* updates
    if (t >= 0.0 && rei_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rei_text.tStart = t;  // (not accounting for frame time here)
      rei_text.frameNStart = frameN;  // exact frame index
      
      rei_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rei_text.status === PsychoJS.Status.STARTED || rei_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rei_text.setAutoDraw(false);
    }
    
    // *key_resp_rei* updates
    if (t >= 0.0 && key_resp_rei.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_rei.tStart = t;  // (not accounting for frame time here)
      key_resp_rei.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_rei.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_rei.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_rei.clearEvents(); });
    }

    frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_rei.status === PsychoJS.Status.STARTED || key_resp_rei.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_rei.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_rei.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_rei.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _key_resp_rei_allKeys = _key_resp_rei_allKeys.concat(theseKeys);
      if (_key_resp_rei_allKeys.length > 0) {
        key_resp_rei.keys = _key_resp_rei_allKeys[_key_resp_rei_allKeys.length - 1].name;  // just the last key pressed
        key_resp_rei.rt = _key_resp_rei_allKeys[_key_resp_rei_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rei_scaleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rei_scaleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'rei_scale'-------
    for (const thisComponent of rei_scaleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_rei.keys', key_resp_rei.keys);
    if (typeof key_resp_rei.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_rei.rt', key_resp_rei.rt);
        routineTimer.reset();
        }
    
    key_resp_rei.stop();
    return Scheduler.Event.NEXT;
  };
}


var _instr_resp_ltm_allKeys;
var instructions_ltmComponents;
function instructions_ltmRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_ltm'-------
    t = 0;
    instructions_ltmClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_resp_ltm.keys = undefined;
    instr_resp_ltm.rt = undefined;
    _instr_resp_ltm_allKeys = [];
    shuffle(words_target);
    shuffle(words_distractor);
    document.body.style.cursor='auto';
    m = 0;
    // keep track of which components have finished
    instructions_ltmComponents = [];
    instructions_ltmComponents.push(instr_text_ltm_1);
    instructions_ltmComponents.push(instr_resp_ltm);
    instructions_ltmComponents.push(instr_text_ltm_2);
    instructions_ltmComponents.push(text_example_1);
    instructions_ltmComponents.push(text_example_2);
    instructions_ltmComponents.push(text_example_3);
    instructions_ltmComponents.push(text_example_4);
    instructions_ltmComponents.push(text_example_5);
    
    for (const thisComponent of instructions_ltmComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_ltmRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_ltm'-------
    // get current time
    t = instructions_ltmClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text_ltm_1* updates
    if (t >= 0.0 && instr_text_ltm_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_ltm_1.tStart = t;  // (not accounting for frame time here)
      instr_text_ltm_1.frameNStart = frameN;  // exact frame index
      
      instr_text_ltm_1.setAutoDraw(true);
    }

    
    // *instr_resp_ltm* updates
    if (t >= 0.0 && instr_resp_ltm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp_ltm.tStart = t;  // (not accounting for frame time here)
      instr_resp_ltm.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp_ltm.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp_ltm.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp_ltm.clearEvents(); });
    }

    if (instr_resp_ltm.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp_ltm.getKeys({keyList: ['space'], waitRelease: false});
      _instr_resp_ltm_allKeys = _instr_resp_ltm_allKeys.concat(theseKeys);
      if (_instr_resp_ltm_allKeys.length > 0) {
        instr_resp_ltm.keys = _instr_resp_ltm_allKeys[_instr_resp_ltm_allKeys.length - 1].name;  // just the last key pressed
        instr_resp_ltm.rt = _instr_resp_ltm_allKeys[_instr_resp_ltm_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_text_ltm_2* updates
    if (t >= 0.0 && instr_text_ltm_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_ltm_2.tStart = t;  // (not accounting for frame time here)
      instr_text_ltm_2.frameNStart = frameN;  // exact frame index
      
      instr_text_ltm_2.setAutoDraw(true);
    }

    
    // *text_example_1* updates
    if (t >= 0.0 && text_example_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_example_1.tStart = t;  // (not accounting for frame time here)
      text_example_1.frameNStart = frameN;  // exact frame index
      
      text_example_1.setAutoDraw(true);
    }

    
    // *text_example_2* updates
    if (t >= 0.0 && text_example_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_example_2.tStart = t;  // (not accounting for frame time here)
      text_example_2.frameNStart = frameN;  // exact frame index
      
      text_example_2.setAutoDraw(true);
    }

    
    // *text_example_3* updates
    if (t >= 0.0 && text_example_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_example_3.tStart = t;  // (not accounting for frame time here)
      text_example_3.frameNStart = frameN;  // exact frame index
      
      text_example_3.setAutoDraw(true);
    }

    
    // *text_example_4* updates
    if (t >= 0.0 && text_example_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_example_4.tStart = t;  // (not accounting for frame time here)
      text_example_4.frameNStart = frameN;  // exact frame index
      
      text_example_4.setAutoDraw(true);
    }

    
    // *text_example_5* updates
    if (t >= 0.0 && text_example_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_example_5.tStart = t;  // (not accounting for frame time here)
      text_example_5.frameNStart = frameN;  // exact frame index
      
      text_example_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_ltmComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_ltmRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_ltm'-------
    for (const thisComponent of instructions_ltmComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instructions_ltm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var positions;
var position_to_key;
var recognition_testComponents;
function recognition_testRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'recognition_test'-------
    t = 0;
    recognition_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    positions = [[(- 0.25), 0], [0.25, 0]];
    position_to_key = {[positions[0]]: "left", [positions[1]]: "right"};
    shuffle(positions);
    
    distractor.setPos(positions.pop());
    distractor.setText(words_distractor.pop());
    target_ltm.setPos(positions.pop());
    target_ltm.setText(words_target[m]);
    slider_right.reset()
    slider_left.reset()
    // keep track of which components have finished
    recognition_testComponents = [];
    recognition_testComponents.push(fixation_ltm);
    recognition_testComponents.push(distractor);
    recognition_testComponents.push(target_ltm);
    recognition_testComponents.push(slider_right);
    recognition_testComponents.push(slider_left);
    
    for (const thisComponent of recognition_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recognition_testRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'recognition_test'-------
    // get current time
    t = recognition_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_ltm* updates
    if (t >= 0.0 && fixation_ltm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_ltm.tStart = t;  // (not accounting for frame time here)
      fixation_ltm.frameNStart = frameN;  // exact frame index
      
      fixation_ltm.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation_ltm.status === PsychoJS.Status.STARTED || fixation_ltm.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation_ltm.setAutoDraw(false);
    }
    
    // *distractor* updates
    if (t >= 0.5 && distractor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor.tStart = t;  // (not accounting for frame time here)
      distractor.frameNStart = frameN;  // exact frame index
      
      distractor.setAutoDraw(true);
    }

    frameRemains = 0.5 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((distractor.status === PsychoJS.Status.STARTED || distractor.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      distractor.setAutoDraw(false);
    }
    
    // *target_ltm* updates
    if (t >= 0.5 && target_ltm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_ltm.tStart = t;  // (not accounting for frame time here)
      target_ltm.frameNStart = frameN;  // exact frame index
      
      target_ltm.setAutoDraw(true);
    }

    frameRemains = 0.5 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((target_ltm.status === PsychoJS.Status.STARTED || target_ltm.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      target_ltm.setAutoDraw(false);
    }
    
    // *slider_right* updates
    if (t >= 0.5 && slider_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_right.tStart = t;  // (not accounting for frame time here)
      slider_right.frameNStart = frameN;  // exact frame index
      
      slider_right.setAutoDraw(true);
    }

    
    // Check slider_right for response to end routine
    if (slider_right.getRating() !== undefined && slider_right.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *slider_left* updates
    if (t >= 0.5 && slider_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_left.tStart = t;  // (not accounting for frame time here)
      slider_left.frameNStart = frameN;  // exact frame index
      
      slider_left.setAutoDraw(true);
    }

    
    // Check slider_left for response to end routine
    if (slider_left.getRating() !== undefined && slider_left.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of recognition_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var distractor_text;
var target_text;
var distractor_pos;
var target_pos;
function recognition_testRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'recognition_test'-------
    for (const thisComponent of recognition_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    distractor_text = distractor.text;
    target_text = target_ltm.text;
    distractor_pos = distractor.pos;
    target_pos = target_ltm.pos;
    psychoJS.experiment.addData("TargetWord", words_target[m][0]);
    psychoJS.experiment.addData("TargetTextDisplayed", target_text);
    psychoJS.experiment.addData("DistractorWord", distractor_text);
    psychoJS.experiment.addData('TargetPosition', target_pos)
    psychoJS.experiment.addData('DistractorPosition', distractor_pos)
    m = m+1;
    psychoJS.experiment.addData('slider_right.response', slider_right.getRating());
    psychoJS.experiment.addData('slider_right.rt', slider_right.getRT());
    psychoJS.experiment.addData('slider_left.response', slider_left.getRating());
    psychoJS.experiment.addData('slider_left.rt', slider_left.getRT());
    // the Routine "recognition_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var end_experimentComponents;
function end_experimentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end_experiment'-------
    t = 0;
    end_experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    end_experimentComponents = [];
    end_experimentComponents.push(text_end_exp);
    end_experimentComponents.push(key_resp_5);
    
    for (const thisComponent of end_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_experimentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end_experiment'-------
    // get current time
    t = end_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_exp* updates
    if (t >= 0.0 && text_end_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_exp.tStart = t;  // (not accounting for frame time here)
      text_end_exp.frameNStart = frameN;  // exact frame index
      
      text_end_exp.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space', 'return'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_experimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_experimentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end_experiment'-------
    for (const thisComponent of end_experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
