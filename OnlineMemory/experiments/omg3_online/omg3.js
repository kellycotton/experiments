/************* 
 * Omg3 Test *
 *************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'omg3';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'condition': 'online', 'site': 'msu'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.3254, 0.3254, 0.3254]),
  units: 'height',
  waitBlanking: true
});
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
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(practice_instruct_1RoutineBegin());
flowScheduler.add(practice_instruct_1RoutineEachFrame());
flowScheduler.add(practice_instruct_1RoutineEnd());
const trials_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_practiceLoopBegin(trials_practiceLoopScheduler));
flowScheduler.add(trials_practiceLoopScheduler);
flowScheduler.add(trials_practiceLoopEnd);
flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'conditions_practice.xlsx', 'path': 'conditions_practice.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://montclair.sona-systems.com/webstudy_credit.aspx?experiment_id=435&credit_token=7a1ae312df874e648c55ee6db96189c5&survey_code=' + expInfo['participant']), '');

  return Scheduler.Event.NEXT;
}


var setupClock;
var practice_instruct_1Clock;
var text_9;
var key_resp;
var trial_setupClock;
var fixationClock;
var fixation_stim;
var stim_1Clock;
var stim_1_text;
var stim_2Clock;
var stim_2_text;
var stim_3Clock;
var stim_3_text;
var maskClock;
var text_2;
var testClock;
var stim_target_text;
var stim_lure_text;
var key_resp_test;
var feedback_practiceClock;
var current_text_2;
var practice_endClock;
var text_11;
var key_resp_2;
var get_readyClock;
var text_10;
var feedbackClock;
var current_score;
var current_score_text;
var trial_points_text;
var accuracy;
var trial_counter;
var accuracy_block_total;
var accuracy_block;
var accuracy_total;
var trial_counter_block;
var current_text;
var point_text;
var text_12;
var end_blockClock;
var block_msg;
var block_accuracy_msg;
var total_accuracy_msg;
var text_5;
var skip_break;
var text_6;
var text_7;
var endClock;
var text_8;
var key_resp_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  document.body.style.cursor='none';
  
  // Initialize components for Routine "practice_instruct_1"
  practice_instruct_1Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Welcome to the experiment!\n\nDuring this experiment, you are going to see a series of letters. Your job is to remember these letters.\n\nFirst, you will see a cross in the center of the screen. This is your warning that the letters are about to appear and you should pay attention. Next, you will see three letters appear in the center of the screen, followed by a #.\n\nYou will then see two letters on the screen at the same time. One of these letters was in the series of letters you just saw and one is a new letter. Your job is to decide which letter you saw before. If you think you saw the letter on the LEFT, press the LEFT arrow key. If you think you saw the letter on the RIGHT, press the RIGHT arrow key.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_setup"
  trial_setupClock = new util.Clock();
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_stim = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_stim', 
    vertices: 'cross', size:[0.07, 0.07],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "stim_1"
  stim_1Clock = new util.Clock();
  stim_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_1_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "stim_2"
  stim_2Clock = new util.Clock();
  stim_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_2_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "stim_3"
  stim_3Clock = new util.Clock();
  stim_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_3_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "mask"
  maskClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '# # # #',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  stim_target_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_target_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  stim_lure_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_lure_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_practice"
  feedback_practiceClock = new util.Clock();
  current_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'current_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: "You have finished the practice! Let's begin the real trials.\n\nDuring the real trials, you can earn points! On every trial, you can earn 3 points if you are correct. You can also lose 3 points if you are incorrect. \n\nSomtimes you will see a RED letter. If you remember this letter correctly, you will earn 25 points. If you answer incorrectly, you will lose 25 points. \n\nAgain, if you remember seeing the letter on the LEFT, press the LEFT arrow key. If you remember seeing the letter on the RIGHT, press the RIGHT arrow key.\n\nPlease try to respond as fast and accurately as possible.\n\nPress SPACE to begin.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "get_ready"
  get_readyClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Get ready!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  current_score = 0;
  current_score_text = "";
  trial_points_text = "";
  accuracy = 0;
  trial_counter = 0;
  accuracy_block_total = 0;
  accuracy_block = 0;
  accuracy_total = 0;
  trial_counter_block = 0;
  
  current_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'current_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  point_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'point_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "end_block"
  end_blockClock = new util.Clock();
  block_msg = "";
  block_accuracy_msg = "";
  total_accuracy_msg = "";
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  skip_break = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.25), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.25, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'You have reached the end of the experiment!\n\nThank you for your participation!\n\nPlease press SPACE to end.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var stim_time;
var fix_time;
var mask_time;
var stim_size;
var block_n;
var block_total;
var trial_n;
var trial_total;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim_time = 0.5;
    fix_time = 0.5;
    mask_time = 0.5;
    stim_size = 0.1;
    block_n = 0;
    block_total = 6;
    trial_n = 1;
    trial_total = 1;
    psychoJS.window.mouseVisible = false;
    
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame() {
  return async function () {
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


function setupRoutineEnd() {
  return async function () {
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


var _key_resp_allKeys;
var practice_instruct_1Components;
function practice_instruct_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_instruct_1'-------
    t = 0;
    practice_instruct_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    practice_instruct_1Components = [];
    practice_instruct_1Components.push(text_9);
    practice_instruct_1Components.push(key_resp);
    
    for (const thisComponent of practice_instruct_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_instruct_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_instruct_1'-------
    // get current time
    t = practice_instruct_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_instruct_1Components)
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


function practice_instruct_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instruct_1'-------
    for (const thisComponent of practice_instruct_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp.stop();
    // the Routine "practice_instruct_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_practice;
var currentLoop;
function trials_practiceLoopBegin(trials_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_practice.xlsx',
      seed: undefined, name: 'trials_practice'
    });
    psychoJS.experiment.addLoop(trials_practice); // add the loop to the experiment
    currentLoop = trials_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_practice of trials_practice) {
      const snapshot = trials_practice.getSnapshot();
      trials_practiceLoopScheduler.add(importConditions(snapshot));
      trials_practiceLoopScheduler.add(trial_setupRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(trial_setupRoutineEachFrame());
      trials_practiceLoopScheduler.add(trial_setupRoutineEnd());
      trials_practiceLoopScheduler.add(fixationRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(fixationRoutineEachFrame());
      trials_practiceLoopScheduler.add(fixationRoutineEnd());
      trials_practiceLoopScheduler.add(stim_1RoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(stim_1RoutineEachFrame());
      trials_practiceLoopScheduler.add(stim_1RoutineEnd());
      trials_practiceLoopScheduler.add(stim_2RoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(stim_2RoutineEachFrame());
      trials_practiceLoopScheduler.add(stim_2RoutineEnd());
      trials_practiceLoopScheduler.add(stim_3RoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(stim_3RoutineEachFrame());
      trials_practiceLoopScheduler.add(stim_3RoutineEnd());
      trials_practiceLoopScheduler.add(maskRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(maskRoutineEachFrame());
      trials_practiceLoopScheduler.add(maskRoutineEnd());
      trials_practiceLoopScheduler.add(testRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(testRoutineEachFrame());
      trials_practiceLoopScheduler.add(testRoutineEnd());
      trials_practiceLoopScheduler.add(feedback_practiceRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(feedback_practiceRoutineEachFrame());
      trials_practiceLoopScheduler.add(feedback_practiceRoutineEnd());
      trials_practiceLoopScheduler.add(endLoopIteration(trials_practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(trials_practice);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: block_total, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      const snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(get_readyRoutineBegin(snapshot));
      blocksLoopScheduler.add(get_readyRoutineEachFrame());
      blocksLoopScheduler.add(get_readyRoutineEnd());
      const trials_experimentalLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trials_experimentalLoopBegin(trials_experimentalLoopScheduler, snapshot));
      blocksLoopScheduler.add(trials_experimentalLoopScheduler);
      blocksLoopScheduler.add(trials_experimentalLoopEnd);
      blocksLoopScheduler.add(end_blockRoutineBegin(snapshot));
      blocksLoopScheduler.add(end_blockRoutineEachFrame());
      blocksLoopScheduler.add(end_blockRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_experimental;
function trials_experimentalLoopBegin(trials_experimentalLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_experimental = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_total, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials_experimental'
    });
    psychoJS.experiment.addLoop(trials_experimental); // add the loop to the experiment
    currentLoop = trials_experimental;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_experimental of trials_experimental) {
      const snapshot = trials_experimental.getSnapshot();
      trials_experimentalLoopScheduler.add(importConditions(snapshot));
      trials_experimentalLoopScheduler.add(trial_setupRoutineBegin(snapshot));
      trials_experimentalLoopScheduler.add(trial_setupRoutineEachFrame());
      trials_experimentalLoopScheduler.add(trial_setupRoutineEnd());
      trials_experimentalLoopScheduler.add(fixationRoutineBegin(snapshot));
      trials_experimentalLoopScheduler.add(fixationRoutineEachFrame());
      trials_experimentalLoopScheduler.add(fixationRoutineEnd());
      trials_experimentalLoopScheduler.add(stim_1RoutineBegin(snapshot));
      trials_experimentalLoopScheduler.add(stim_1RoutineEachFrame());
      trials_experimentalLoopScheduler.add(stim_1RoutineEnd());
      trials_experimentalLoopScheduler.add(stim_2RoutineBegin(snapshot));
      trials_experimentalLoopScheduler.add(stim_2RoutineEachFrame());
      trials_experimentalLoopScheduler.add(stim_2RoutineEnd());
      trials_experimentalLoopScheduler.add(stim_3RoutineBegin(snapshot));
      trials_experimentalLoopScheduler.add(stim_3RoutineEachFrame());
      trials_experimentalLoopScheduler.add(stim_3RoutineEnd());
      trials_experimentalLoopScheduler.add(maskRoutineBegin(snapshot));
      trials_experimentalLoopScheduler.add(maskRoutineEachFrame());
      trials_experimentalLoopScheduler.add(maskRoutineEnd());
      trials_experimentalLoopScheduler.add(testRoutineBegin(snapshot));
      trials_experimentalLoopScheduler.add(testRoutineEachFrame());
      trials_experimentalLoopScheduler.add(testRoutineEnd());
      trials_experimentalLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trials_experimentalLoopScheduler.add(feedbackRoutineEachFrame());
      trials_experimentalLoopScheduler.add(feedbackRoutineEnd());
      trials_experimentalLoopScheduler.add(endLoopIteration(trials_experimentalLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_experimentalLoopEnd() {
  psychoJS.experiment.removeLoop(trials_experimental);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var _pj;
var stim_letters;
var letters;
var stim_letter;
var i;
var stim_1_color;
var stim_2_color;
var stim_3_color;
var stim_1_point;
var stim_2_point;
var stim_3_point;
var trial_setupComponents;
function trial_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial_setup'-------
    t = 0;
    trial_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    stim_letters = [];
    letters = ["B", "F", "G", "H", "J", "L", "M", "Q", "R", "T", "Y"];
    stim_letter = "";
    for (var i, _pj_c = 0, _pj_a = util.range(4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        util.shuffle(letters);
        stim_letter = letters[0];
        while (_pj.in_es6(stim_letter, stim_letters.slice((- 3)))) {
            util.shuffle(letters);
            stim_letter = letters[0];
        }
        stim_letters.push(stim_letter);
    }
    i = 0;
    stim_1_color = "black";
    stim_2_color = "black";
    stim_3_color = "black";
    stim_1_point = 3;
    stim_2_point = 3;
    stim_3_point = 3;
    if ((trial_type === "sp_1_red")) {
        stim_1_color = "red";
        stim_1_point = 25;
    } else {
        if ((trial_type === "sp_2_red")) {
            stim_2_color = "red";
            stim_2_point = 25;
        } else {
            if ((trial_type === "sp_3_red")) {
                stim_3_color = "red";
                stim_3_point = 25;
            }
        }
    }
    
    // keep track of which components have finished
    trial_setupComponents = [];
    
    for (const thisComponent of trial_setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial_setup'-------
    // get current time
    t = trial_setupClock.getTime();
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
    for (const thisComponent of trial_setupComponents)
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


function trial_setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial_setup'-------
    for (const thisComponent of trial_setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "trial_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.750000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixation_stim);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixation'-------
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_stim* updates
    if (t >= 0.25 && fixation_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_stim.tStart = t;  // (not accounting for frame time here)
      fixation_stim.frameNStart = frameN;  // exact frame index
      
      fixation_stim.setAutoDraw(true);
    }

    frameRemains = 0.25 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_stim.setAutoDraw(false);
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
    for (const thisComponent of fixationComponents)
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


function fixationRoutineEnd() {
  return async function () {
    //------Ending Routine 'fixation'-------
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var stim_1;
var stim_1Components;
function stim_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stim_1'-------
    t = 0;
    stim_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    stim_1 = stim_letters[0].toLowerCase();
    
    stim_1_text.setColor(new util.Color(stim_1_color));
    stim_1_text.setText(stim_1);
    stim_1_text.setHeight(0.07);
    // keep track of which components have finished
    stim_1Components = [];
    stim_1Components.push(stim_1_text);
    
    for (const thisComponent of stim_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stim_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stim_1'-------
    // get current time
    t = stim_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_1_text* updates
    if (t >= 0.0 && stim_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_1_text.tStart = t;  // (not accounting for frame time here)
      stim_1_text.frameNStart = frameN;  // exact frame index
      
      stim_1_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim_1_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim_1_text.setAutoDraw(false);
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
    for (const thisComponent of stim_1Components)
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


function stim_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'stim_1'-------
    for (const thisComponent of stim_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var stim_2;
var stim_2Components;
function stim_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stim_2'-------
    t = 0;
    stim_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    stim_2 = stim_letters[1].toLowerCase();
    i += 1;
    
    stim_2_text.setColor(new util.Color(stim_2_color));
    stim_2_text.setText(stim_2);
    stim_2_text.setHeight(0.07);
    // keep track of which components have finished
    stim_2Components = [];
    stim_2Components.push(stim_2_text);
    
    for (const thisComponent of stim_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stim_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stim_2'-------
    // get current time
    t = stim_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_2_text* updates
    if (t >= 0.0 && stim_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_2_text.tStart = t;  // (not accounting for frame time here)
      stim_2_text.frameNStart = frameN;  // exact frame index
      
      stim_2_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim_2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim_2_text.setAutoDraw(false);
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
    for (const thisComponent of stim_2Components)
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


function stim_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'stim_2'-------
    for (const thisComponent of stim_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var stim_3;
var stim_3Components;
function stim_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stim_3'-------
    t = 0;
    stim_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    stim_3 = stim_letters[2].toLowerCase();
    i += 1;
    
    stim_3_text.setColor(new util.Color(stim_3_color));
    stim_3_text.setText(stim_3);
    stim_3_text.setHeight(0.07);
    // keep track of which components have finished
    stim_3Components = [];
    stim_3Components.push(stim_3_text);
    
    for (const thisComponent of stim_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stim_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stim_3'-------
    // get current time
    t = stim_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_3_text* updates
    if (t >= 0.0 && stim_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_3_text.tStart = t;  // (not accounting for frame time here)
      stim_3_text.frameNStart = frameN;  // exact frame index
      
      stim_3_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim_3_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim_3_text.setAutoDraw(false);
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
    for (const thisComponent of stim_3Components)
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


function stim_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'stim_3'-------
    for (const thisComponent of stim_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var maskComponents;
function maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'mask'-------
    t = 0;
    maskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    text_2.setHeight(0.07);
    // keep track of which components have finished
    maskComponents = [];
    maskComponents.push(text_2);
    
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function maskRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'mask'-------
    // get current time
    t = maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
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
    for (const thisComponent of maskComponents)
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


function maskRoutineEnd() {
  return async function () {
    //------Ending Routine 'mask'-------
    for (const thisComponent of maskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var target_position;
var lure_position;
var corr_ans;
var trial_points;
var _key_resp_test_allKeys;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test'-------
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((test_position === "left")) {
        target_position = [(- 0.1), 0];
        lure_position = [0.1, 0];
    } else {
        if ((test_position === "right")) {
            target_position = [0.1, 0];
            lure_position = [(- 0.1), 0];
        }
    }
    corr_ans = test_position;
    if ((serial_position_test === 0)) {
        trial_points = stim_1_point;
    } else {
        if ((serial_position_test === 1)) {
            trial_points = stim_2_point;
        } else {
            if ((serial_position_test === 2)) {
                trial_points = stim_3_point;
            }
        }
    }
    
    stim_target_text.setPos(target_position);
    stim_target_text.setText(stim_letters[serial_position_test]);
    stim_target_text.setHeight(0.07);
    stim_lure_text.setPos(lure_position);
    stim_lure_text.setText(stim_letters[3]);
    stim_lure_text.setHeight(0.07);
    key_resp_test.keys = undefined;
    key_resp_test.rt = undefined;
    _key_resp_test_allKeys = [];
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(stim_target_text);
    testComponents.push(stim_lure_text);
    testComponents.push(key_resp_test);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test'-------
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_target_text* updates
    if (t >= 0.0 && stim_target_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_target_text.tStart = t;  // (not accounting for frame time here)
      stim_target_text.frameNStart = frameN;  // exact frame index
      
      stim_target_text.setAutoDraw(true);
    }

    
    // *stim_lure_text* updates
    if (t >= 0.0 && stim_lure_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_lure_text.tStart = t;  // (not accounting for frame time here)
      stim_lure_text.frameNStart = frameN;  // exact frame index
      
      stim_lure_text.setAutoDraw(true);
    }

    
    // *key_resp_test* updates
    if (t >= 0.0 && key_resp_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_test.tStart = t;  // (not accounting for frame time here)
      key_resp_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_test.clearEvents(); });
    }

    if (key_resp_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_test.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_test_allKeys = _key_resp_test_allKeys.concat(theseKeys);
      if (_key_resp_test_allKeys.length > 0) {
        key_resp_test.keys = _key_resp_test_allKeys[_key_resp_test_allKeys.length - 1].name;  // just the last key pressed
        key_resp_test.rt = _key_resp_test_allKeys[_key_resp_test_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_test.keys == corr_ans) {
            key_resp_test.corr = 1;
        } else {
            key_resp_test.corr = 0;
        }
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
    for (const thisComponent of testComponents)
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


function testRoutineEnd() {
  return async function () {
    //------Ending Routine 'test'-------
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("block_n", block_n);
    trial_n += 1;
    
    // was no response the correct answer?!
    if (key_resp_test.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         key_resp_test.corr = 1;  // correct non-response
      } else {
         key_resp_test.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_test.corr, level);
    }
    psychoJS.experiment.addData('key_resp_test.keys', key_resp_test.keys);
    psychoJS.experiment.addData('key_resp_test.corr', key_resp_test.corr);
    if (typeof key_resp_test.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_test.rt', key_resp_test.rt);
        routineTimer.reset();
        }
    
    key_resp_test.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_msg;
var feedback_practiceComponents;
function feedback_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_practice'-------
    t = 0;
    feedback_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    if ((key_resp_test.corr === 1)) {
        feedback_msg = "That was correct!";
    } else {
        if ((key_resp_test.corr === 0)) {
            feedback_msg = (("That was incorrect. You should have pressed the " + test_position.toString().toUpperCase()) + " arrow key.");
        }
    }
    
    current_text_2.setText(feedback_msg);
    // keep track of which components have finished
    feedback_practiceComponents = [];
    feedback_practiceComponents.push(current_text_2);
    
    for (const thisComponent of feedback_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_practice'-------
    // get current time
    t = feedback_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *current_text_2* updates
    if (t >= 0.0 && current_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      current_text_2.tStart = t;  // (not accounting for frame time here)
      current_text_2.frameNStart = frameN;  // exact frame index
      
      current_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (current_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      current_text_2.setAutoDraw(false);
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
    for (const thisComponent of feedback_practiceComponents)
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


function feedback_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_practice'-------
    for (const thisComponent of feedback_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_end'-------
    t = 0;
    practice_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(text_11);
    practice_endComponents.push(key_resp_2);
    
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_end'-------
    // get current time
    t = practice_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 5 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_endComponents)
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


function practice_endRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_end'-------
    for (const thisComponent of practice_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_2.stop();
    current_score = 0;
    accuracy = 0;
    trial_counter = 0;
    accuracy_block_total = 0;
    accuracy_block = 0;
    accuracy_total = 0;
    trial_counter_block = 0;
    trial_n = 1;
    block_n += 1;
    
    // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var get_readyComponents;
function get_readyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'get_ready'-------
    t = 0;
    get_readyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    get_readyComponents = [];
    get_readyComponents.push(text_10);
    
    for (const thisComponent of get_readyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function get_readyRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'get_ready'-------
    // get current time
    t = get_readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
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
    for (const thisComponent of get_readyComponents)
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


function get_readyRoutineEnd() {
  return async function () {
    //------Ending Routine 'get_ready'-------
    for (const thisComponent of get_readyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    if ((key_resp_test.corr === 1)) {
        current_score += trial_points;
        trial_points_text = ("+ " + trial_points.toString());
    } else {
        if ((key_resp_test.corr === 0)) {
            current_score -= trial_points;
            trial_points_text = ("- " + trial_points.toString());
        }
    }
    current_score_text = ("Current score: " + current_score.toString());
    accuracy += key_resp_test.corr;
    accuracy_block += key_resp_test.corr;
    trial_counter += 1;
    trial_counter_block += 1;
    accuracy_total = Math.round(((accuracy / trial_counter) * 100));
    total_accuracy_msg = (("Total Accuracy:\n" + accuracy_total.toString()) + "%");
    
    current_text.setText(current_score_text);
    point_text.setText(trial_points_text);
    text_12.setText(total_accuracy_msg);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(current_text);
    feedbackComponents.push(point_text);
    feedbackComponents.push(text_12);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *current_text* updates
    if (t >= 0.0 && current_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      current_text.tStart = t;  // (not accounting for frame time here)
      current_text.frameNStart = frameN;  // exact frame index
      
      current_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (current_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      current_text.setAutoDraw(false);
    }
    
    // *point_text* updates
    if (t >= 0.0 && point_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      point_text.tStart = t;  // (not accounting for frame time here)
      point_text.frameNStart = frameN;  // exact frame index
      
      point_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (point_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      point_text.setAutoDraw(false);
    }
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_12.setAutoDraw(false);
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
    for (const thisComponent of feedbackComponents)
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


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _skip_break_allKeys;
var end_blockComponents;
function end_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_block'-------
    t = 0;
    end_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    block_msg = (((((("You have reached the end of block " + block_n.toString()) + " of ") + block_total.toString()) + ".\nYour current score is ") + current_score.toString()) + "\nPlease take a 30 second break.");
    accuracy_total = Math.round(((accuracy / trial_counter) * 100));
    accuracy_block_total = Math.round(((accuracy_block / trial_counter_block) * 100));
    block_accuracy_msg = (("Block Accuracy:\n" + accuracy_block_total.toString()) + "%");
    total_accuracy_msg = (("Total Accuracy:\n" + accuracy_total.toString()) + "%");
    
    text_5.setText(block_msg);
    skip_break.keys = undefined;
    skip_break.rt = undefined;
    _skip_break_allKeys = [];
    text_6.setText(block_accuracy_msg);
    text_7.setText(total_accuracy_msg);
    // keep track of which components have finished
    end_blockComponents = [];
    end_blockComponents.push(text_5);
    end_blockComponents.push(skip_break);
    end_blockComponents.push(text_6);
    end_blockComponents.push(text_7);
    
    for (const thisComponent of end_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_blockRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_block'-------
    // get current time
    t = end_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    // *skip_break* updates
    if (t >= 0.0 && skip_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_break.tStart = t;  // (not accounting for frame time here)
      skip_break.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_break.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_break.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_break.clearEvents(); });
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skip_break.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skip_break.status = PsychoJS.Status.FINISHED;
  }

    if (skip_break.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_break.getKeys({keyList: ['space'], waitRelease: false});
      _skip_break_allKeys = _skip_break_allKeys.concat(theseKeys);
      if (_skip_break_allKeys.length > 0) {
        skip_break.keys = _skip_break_allKeys[_skip_break_allKeys.length - 1].name;  // just the last key pressed
        skip_break.rt = _skip_break_allKeys[_skip_break_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
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
    for (const thisComponent of end_blockComponents)
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


function end_blockRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_block'-------
    for (const thisComponent of end_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    accuracy_block = 0;
    trial_counter_block = 0;
    block_n += 1;
    
    skip_break.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_end_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_end.keys = undefined;
    key_resp_end.rt = undefined;
    _key_resp_end_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_8);
    endComponents.push(key_resp_end);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *key_resp_end* updates
    if (t >= 0.0 && key_resp_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end.tStart = t;  // (not accounting for frame time here)
      key_resp_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.clearEvents(); });
    }

    if (key_resp_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_end_allKeys = _key_resp_end_allKeys.concat(theseKeys);
      if (_key_resp_end_allKeys.length > 0) {
        key_resp_end.keys = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end.rt = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].rt;
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
    for (const thisComponent of endComponents)
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


function endRoutineEnd() {
  return async function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_end.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
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
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
