/*************** 
 * Wmb1.2 Test *
 ***************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

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
let expName = 'WMB1.2';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

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
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
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


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
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
var range;
var perm;
var get_test_positions;
var get_color_from_filename;
var get_shape_from_filename;
var get_filename_from_shape_and_color;
var start_practiceClock;
var text_practice_start;
var key_resp_practice_start;
var instructionsClock;
var instructions_trial;
var instruct_key;
var trialClock;
var fix;
var stim1;
var stim2;
var stim3;
var stim4;
var testClock;
var test1;
var test2;
var test3;
var test4;
var key_resp;
var feedbackClock;
var text_feedback;
var text_feedback_answer;
var text_trial;
var text_test;
var text;
var key_resp_feedback;
var feedback_trial_1;
var feedback_trial_2;
var feedback_trial_3;
var feedback_trial_4;
var feedback_test_1;
var feedback_test_2;
var feedback_test_3;
var feedback_test_4;
var end_practiceClock;
var text_end_practice_1;
var key_resp_end_practice;
var end_blockClock;
var text_end_block;
var key_resp_end_block;
var end_experimentClock;
var text_end;
var key_resp_end;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  shuffle = util.shuffle;
  
  range = function(start, count) {
    return Array.apply(0, Array(count))
      .map((element, index) => index + start);
  }
  
  perm = function(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }
  
  
  var c, 
      combinations, 
      corresponding_last_seen, 
      last_positions, 
      possible_combinations, 
      test_positions, 
      unique_combination;
  
  get_test_positions = function(pos) {
      var comb, c, _pj_a, _pj_b, _pj_c, _pj_d, c_idx;
      combinations = perm(pos);
      last_positions = combinations[0];
      combinations = combinations.splice(0);
      possible_combinations = [];
      for (comb, _pj_c = 0, _pj_a = combinations, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          comb = _pj_a[_pj_c];
          unique_combination = true;
          for (c_idx = 0, _pj_d = comb.length; (c_idx < _pj_d); c_idx += 1) {
              c = comb[c_idx];
              corresponding_last_seen = last_positions[c_idx];
              if (c === corresponding_last_seen) {
                  unique_combination = false;
                  }
              }
          if (unique_combination) {
              possible_combinations.push(comb);
              }
          }
      return possible_combinations[0];
  }
  
  get_color_from_filename = function(filename){
      return filename.split('_')[2].split('.')[0]
  }
  
  get_shape_from_filename = function(filename){
      return filename.split('_')[1]
  }
  
  get_filename_from_shape_and_color = function(shape,color) {
      return (((("stimuli/shape_" + shape.toString()) + "_") + color) + ".png");
  }
  // Initialize components for Routine "start_practice"
  start_practiceClock = new util.Clock();
  text_practice_start = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_practice_start',
    text: 'Press space to start the practice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_practice_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_trial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instruct_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  stim3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  stim4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  test1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  test2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  test3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  test4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  text_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback',
    text: 'Correct answer:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_feedback_answer = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback_answer',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trial',
    text: 'Original',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0.25], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_test',
    text: 'Test',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Press space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  key_resp_feedback = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  feedback_trial_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_trial_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -7.0 
  });
  feedback_trial_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_trial_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -8.0 
  });
  feedback_trial_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_trial_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -9.0 
  });
  feedback_trial_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_trial_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -10.0 
  });
  feedback_test_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_test_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -11.0 
  });
  feedback_test_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_test_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -12.0 
  });
  feedback_test_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_test_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -13.0 
  });
  feedback_test_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_test_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -14.0 
  });
  // Initialize components for Routine "end_practice"
  end_practiceClock = new util.Clock();
  text_end_practice_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_practice_1',
    text: 'You have reached the end of the practice.\n\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_end_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions_trial = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_trial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instruct_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  stim3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  stim4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  test1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  test2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  test3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  test4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_block"
  end_blockClock = new util.Clock();
  text_end_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_block',
    text: 'You have reached the end of this block.\nPlease take a short break.\n\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_end_block = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_experiment"
  end_experimentClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'You have reached the end of the experiment.\n\nThank you for your participation!\n\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
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
var shapes;
var colors;
var positions;
var possible_shapes;
var possible_colors;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    shapes = [("stimuli/shape_0.png"), ("stimuli/shape_1.png"), ("stimuli/shape_2.png"), ("stimuli/shape_3.png"), ("stimuli/shape_4.png"), ("stimuli/shape_5.png"), ("stimuli/shape_6.png"), ("stimuli/shape_7.png")]
    colors = [("stimuli/color_0.png"), ("stimuli/color_1.png"), ("stimuli/color_2.png"), ("stimuli/color_3.png"), ("stimuli/color_4.png"), ("stimuli/color_5.png"), ("stimuli/color_6.png"), ("stimuli/color_7.png")]
    positions = [[0.15, 0.15], [(- 0.15), 0.15], [(- 0.15), (- 0.15)], [0.15, (- 0.15)], [0.05, 0.05], [(- 0.05), 0.05], [(- 0.05), (- 0.05)], [0.05, (- 0.05)]];
    
    possible_shapes = ["0", "1", "2", "3", "4", "5", "6", "7"];
    possible_colors = ["blue", "green", "olive", "pink", "purple", "salmon", "teal", "yellow"];
    
    
    
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
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


function setupRoutineEnd(trials) {
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


var blocks;
var currentLoop;
function blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'blocks.xlsx',
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(start_practiceRoutineBegin(snapshot));
    thisScheduler.add(start_practiceRoutineEachFrame(snapshot));
    thisScheduler.add(start_practiceRoutineEnd(snapshot));
    thisScheduler.add(instructionsRoutineBegin(snapshot));
    thisScheduler.add(instructionsRoutineEachFrame(snapshot));
    thisScheduler.add(instructionsRoutineEnd(snapshot));
    const practice_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(practice_trialsLoopBegin, practice_trialsLoopScheduler);
    thisScheduler.add(practice_trialsLoopScheduler);
    thisScheduler.add(practice_trialsLoopEnd);
    thisScheduler.add(end_practiceRoutineBegin(snapshot));
    thisScheduler.add(end_practiceRoutineEachFrame(snapshot));
    thisScheduler.add(end_practiceRoutineEnd(snapshot));
    thisScheduler.add(instructionsRoutineBegin(snapshot));
    thisScheduler.add(instructionsRoutineEachFrame(snapshot));
    thisScheduler.add(instructionsRoutineEnd(snapshot));
    const experiment_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(experiment_trialsLoopBegin, experiment_trialsLoopScheduler);
    thisScheduler.add(experiment_trialsLoopScheduler);
    thisScheduler.add(experiment_trialsLoopEnd);
    thisScheduler.add(end_blockRoutineBegin(snapshot));
    thisScheduler.add(end_blockRoutineEachFrame(snapshot));
    thisScheduler.add(end_blockRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var practice_trials;
function practice_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 4, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'condition.xlsx',
    seed: undefined, name: 'practice_trials'
  });
  psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
  currentLoop = practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_trial of practice_trials) {
    const snapshot = practice_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(testRoutineBegin(snapshot));
    thisScheduler.add(testRoutineEachFrame(snapshot));
    thisScheduler.add(testRoutineEnd(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(practice_trials);

  return Scheduler.Event.NEXT;
}


var experiment_trials;
function experiment_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  experiment_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 27, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'condition.xlsx',
    seed: undefined, name: 'experiment_trials'
  });
  psychoJS.experiment.addLoop(experiment_trials); // add the loop to the experiment
  currentLoop = experiment_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisExperiment_trial of experiment_trials) {
    const snapshot = experiment_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(testRoutineBegin(snapshot));
    thisScheduler.add(testRoutineEachFrame(snapshot));
    thisScheduler.add(testRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function experiment_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(experiment_trials);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var _key_resp_practice_start_allKeys;
var reps;
var condition_change_order;
var change;
var practice_or_trial;
var start_practiceComponents;
function start_practiceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'start_practice'-------
    t = 0;
    start_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_practice_start.keys = undefined;
    key_resp_practice_start.rt = undefined;
    _key_resp_practice_start_allKeys = [];
    reps = 4; // change to match the number of trials within a block
    condition_change_order = [];
    change = 0;
    practice_or_trial = 0;
    
    for (var i = 0; i < reps; i++) {
        change = "shape"
        condition_change_order.push(change)
    }
    for (var i = 0; i < reps; i++) {
        change = "color"
        condition_change_order.push(change)
    }
    
    shuffle(condition_change_order)
    
    practice_or_trial = "practice"
    // keep track of which components have finished
    start_practiceComponents = [];
    start_practiceComponents.push(text_practice_start);
    start_practiceComponents.push(key_resp_practice_start);
    
    for (const thisComponent of start_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function start_practiceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'start_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = start_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_practice_start* updates
    if (t >= 0.0 && text_practice_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_practice_start.tStart = t;  // (not accounting for frame time here)
      text_practice_start.frameNStart = frameN;  // exact frame index
      
      text_practice_start.setAutoDraw(true);
    }

    
    // *key_resp_practice_start* updates
    if (t >= 0.0 && key_resp_practice_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_practice_start.tStart = t;  // (not accounting for frame time here)
      key_resp_practice_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_practice_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice_start.clearEvents(); });
    }

    if (key_resp_practice_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_practice_start.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_practice_start_allKeys = _key_resp_practice_start_allKeys.concat(theseKeys);
      if (_key_resp_practice_start_allKeys.length > 0) {
        key_resp_practice_start.keys = _key_resp_practice_start_allKeys[_key_resp_practice_start_allKeys.length - 1].name;  // just the last key pressed
        key_resp_practice_start.rt = _key_resp_practice_start_allKeys[_key_resp_practice_start_allKeys.length - 1].rt;
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
    for (const thisComponent of start_practiceComponents)
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


function start_practiceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_practice'-------
    for (const thisComponent of start_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "start_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_counter;
var instruct_text;
var _instruct_key_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    trial_counter = 0;
    if ((practice_or_trial === "practice")) {
        instruct_text = instruct_text_practice;
    } else {
        instruct_text = instruct_text_trials;
    }
    
    instructions_trial.setText(instruct_text);
    instruct_key.keys = undefined;
    instruct_key.rt = undefined;
    _instruct_key_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructions_trial);
    instructionsComponents.push(instruct_key);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_trial* updates
    if (t >= 0.0 && instructions_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_trial.tStart = t;  // (not accounting for frame time here)
      instructions_trial.frameNStart = frameN;  // exact frame index
      
      instructions_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instructions_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instructions_trial.setAutoDraw(false);
    }
    
    // *instruct_key* updates
    if (t >= 0.0 && instruct_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_key.tStart = t;  // (not accounting for frame time here)
      instruct_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruct_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruct_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruct_key.clearEvents(); });
    }

    if (instruct_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruct_key.getKeys({keyList: ['space'], waitRelease: false});
      _instruct_key_allKeys = _instruct_key_allKeys.concat(theseKeys);
      if (_instruct_key_allKeys.length > 0) {
        instruct_key.keys = _instruct_key_allKeys[_instruct_key_allKeys.length - 1].name;  // just the last key pressed
        instruct_key.rt = _instruct_key_allKeys[_instruct_key_allKeys.length - 1].rt;
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
    for (const thisComponent of instructionsComponents)
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


function instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimuli;
var visibility;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    if ((block === "shape")) {
        stimuli = shapes;
        shuffle(stimuli);
    } else if ((block == "color")){
        stimuli = colors;
        shuffle(stimuli);
    } else {
            shuffle(possible_colors);
            shuffle(possible_shapes);
            stimuli = [get_filename_from_shape_and_color(possible_shapes[0],possible_colors[0]),
            get_filename_from_shape_and_color(possible_shapes[1],possible_colors[1]),
            get_filename_from_shape_and_color(possible_shapes[2],possible_colors[2]),
            get_filename_from_shape_and_color(possible_shapes[3],possible_colors[3]),
            get_filename_from_shape_and_color(possible_shapes[4],possible_colors[4]),
            get_filename_from_shape_and_color(possible_shapes[5],possible_colors[5])]
        }
    
    shuffle(positions);
    if ((setsize === 4)) {
        visibility = 1;
    } else {
        visibility = 0;
    }
    
    stim1.setPos(positions[0]);
    stim1.setImage(stimuli[0]);
    stim2.setPos(positions[1]);
    stim2.setSize([0.1, 0.1]);
    stim2.setImage(stimuli[1]);
    stim3.setOpacity(visibility);
    stim3.setPos(positions[2]);
    stim3.setImage(stimuli[2]);
    stim4.setOpacity(visibility);
    stim4.setPos(positions[3]);
    stim4.setImage(stimuli[3]);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fix);
    trialComponents.push(stim1);
    trialComponents.push(stim2);
    trialComponents.push(stim3);
    trialComponents.push(stim4);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    
    // *stim1* updates
    if (t >= 0.75 && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }

    frameRemains = 0.75 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1.setAutoDraw(false);
    }
    
    // *stim2* updates
    if (t >= 0.75 && stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2.tStart = t;  // (not accounting for frame time here)
      stim2.frameNStart = frameN;  // exact frame index
      
      stim2.setAutoDraw(true);
    }

    frameRemains = 0.75 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2.setAutoDraw(false);
    }
    
    // *stim3* updates
    if (t >= 0.75 && stim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3.tStart = t;  // (not accounting for frame time here)
      stim3.frameNStart = frameN;  // exact frame index
      
      stim3.setAutoDraw(true);
    }

    frameRemains = 0.75 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3.setAutoDraw(false);
    }
    
    // *stim4* updates
    if (t >= 0.75 && stim4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4.tStart = t;  // (not accounting for frame time here)
      stim4.frameNStart = frameN;  // exact frame index
      
      stim4.setAutoDraw(true);
    }

    frameRemains = 0.75 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim4.setAutoDraw(false);
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
    for (const thisComponent of trialComponents)
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


var shape_1;
var color_1;
var shape_2;
var color_2;
var pos;
var test_positions;
var stimuli_1;
var stimuli_2;
var correct_answer;
function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    shape_1 = 0
    color_1 = 0
    shape_2 = 0
    color_2 = 0
    
    if ((setsize === 2)) {
        pos = [stim1.pos, stim2.pos];
        test_positions = get_test_positions(pos);
        test_positions.push(stim3.pos, stim4.pos);
    } else {
        pos = [stim1.pos, stim2.pos, stim3.pos, stim4.pos];
        test_positions = get_test_positions(pos);
    }
    
    if ((condition === "same")) {
        stimuli_1 = stimuli[0];
        stimuli_2 = stimuli[1];
        correct_answer = "s";
    } else {
        if ((block === "shape_and_color")) {
            change = "both";
            shape_1 = get_shape_from_filename(stimuli[0]);
            color_1 = get_color_from_filename(stimuli[0]);
            shape_2 = get_shape_from_filename(stimuli[1]);
            color_2 = get_color_from_filename(stimuli[1]);
            stimuli_1 = get_filename_from_shape_and_color(shape_1, color_2)
            stimuli_2 = get_filename_from_shape_and_color(shape_2, color_1)
        } else if ((block === "shape_or_color")) {
            if (condition_change_order[trial_counter] === "shape") {
                change = "shape";
                color_1 = get_color_from_filename(stimuli[0]);
                color_2 = get_color_from_filename(stimuli[1]);
                stimuli_1 = get_filename_from_shape_and_color(possible_shapes[6], color_1)
                stimuli_2 = get_filename_from_shape_and_color(possible_shapes[7], color_2)        
                } 
            else {
                change = "color";
                shape_1 = get_shape_from_filename(stimuli[0]);
                shape_2 = get_shape_from_filename(stimuli[1]);
                stimuli_1 = get_filename_from_shape_and_color(shape_1, possible_colors[6])
                stimuli_2 = get_filename_from_shape_and_color(shape_2, possible_colors[7])        
                } 
            } else {
            stimuli_1 = stimuli[6];
            stimuli_2 = stimuli[7];
        }
        correct_answer = "d";
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var testComponents;
function testRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'test'-------
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    test1.setPos(test_positions[0]);
    test1.setImage(stimuli_1);
    test2.setPos(test_positions[1]);
    test2.setImage(stimuli_2);
    test3.setOpacity(visibility);
    test3.setPos(test_positions[2]);
    test3.setImage(stimuli[2]);
    test4.setOpacity(visibility);
    test4.setPos(test_positions[3]);
    test4.setImage(stimuli[3]);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(test1);
    testComponents.push(test2);
    testComponents.push(test3);
    testComponents.push(test4);
    testComponents.push(key_resp);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function testRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test1* updates
    if (t >= 0.9 && test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test1.tStart = t;  // (not accounting for frame time here)
      test1.frameNStart = frameN;  // exact frame index
      
      test1.setAutoDraw(true);
    }

    
    // *test2* updates
    if (t >= 0.9 && test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test2.tStart = t;  // (not accounting for frame time here)
      test2.frameNStart = frameN;  // exact frame index
      
      test2.setAutoDraw(true);
    }

    
    // *test3* updates
    if (t >= 0.9 && test3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test3.tStart = t;  // (not accounting for frame time here)
      test3.frameNStart = frameN;  // exact frame index
      
      test3.setAutoDraw(true);
    }

    
    // *test4* updates
    if (t >= 0.9 && test4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test4.tStart = t;  // (not accounting for frame time here)
      test4.frameNStart = frameN;  // exact frame index
      
      test4.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.9 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['s', 'd'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == correct_answer) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
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


function testRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'test'-------
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    if ((condition === "different")) {
        trial_counter += 1;
    }
    
    if (block === "shape") {
        change = "shape";
    } else if (block === "color"){
        change = "color";
    } else if (block === "shape_and_color") {
        change = "both";
    }
    
    if (condition === "same") {
        change = "none"
    }
    
    psychoJS.experiment.addData('stimuli_block', block);
    psychoJS.experiment.addData('stimuli_change', change);
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var answer_text;
var trial_positions;
var feedback_test_positions;
var _key_resp_feedback_allKeys;
var feedbackComponents;
function feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((correct_answer === "s")) {
        answer_text = "Same";
    } else {
        answer_text = "Different";
    }
    trial_positions = [[(positions[0][0] - 0.5), positions[0][1]], [(positions[1][0] - 0.5), positions[1][1]], [(positions[2][0] - 0.5), positions[2][1]], [(positions[3][0] - 0.5), positions[3][1]]];
    feedback_test_positions = [[(test_positions[0][0] + 0.4), test_positions[0][1]], [(test_positions[1][0] + 0.4), test_positions[1][1]], [(test_positions[2][0] + 0.4), test_positions[2][1]], [(test_positions[3][0] + 0.4), test_positions[3][1]]];
    
    text_feedback_answer.setText(answer_text);
    key_resp_feedback.keys = undefined;
    key_resp_feedback.rt = undefined;
    _key_resp_feedback_allKeys = [];
    feedback_trial_1.setPos(trial_positions[0]);
    feedback_trial_1.setImage(stimuli[0]);
    feedback_trial_2.setPos(trial_positions[1]);
    feedback_trial_2.setSize([0.1, 0.1]);
    feedback_trial_2.setImage(stimuli[1]);
    feedback_trial_3.setOpacity(visibility);
    feedback_trial_3.setPos(trial_positions[2]);
    feedback_trial_3.setSize([0.1, 0.1]);
    feedback_trial_3.setImage(stimuli[2]);
    feedback_trial_4.setOpacity(visibility);
    feedback_trial_4.setPos(trial_positions[3]);
    feedback_trial_4.setImage(stimuli[3]);
    feedback_test_1.setPos(feedback_test_positions[0]);
    feedback_test_1.setImage(stimuli_1);
    feedback_test_2.setPos(feedback_test_positions[1]);
    feedback_test_2.setImage(stimuli_2);
    feedback_test_3.setOpacity(visibility);
    feedback_test_3.setPos(feedback_test_positions[2]);
    feedback_test_3.setImage(stimuli[2]);
    feedback_test_4.setOpacity(visibility);
    feedback_test_4.setPos(feedback_test_positions[3]);
    feedback_test_4.setImage(stimuli[3]);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(text_feedback);
    feedbackComponents.push(text_feedback_answer);
    feedbackComponents.push(text_trial);
    feedbackComponents.push(text_test);
    feedbackComponents.push(text);
    feedbackComponents.push(key_resp_feedback);
    feedbackComponents.push(feedback_trial_1);
    feedbackComponents.push(feedback_trial_2);
    feedbackComponents.push(feedback_trial_3);
    feedbackComponents.push(feedback_trial_4);
    feedbackComponents.push(feedback_test_1);
    feedbackComponents.push(feedback_test_2);
    feedbackComponents.push(feedback_test_3);
    feedbackComponents.push(feedback_test_4);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_feedback* updates
    if (t >= 0.0 && text_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback.tStart = t;  // (not accounting for frame time here)
      text_feedback.frameNStart = frameN;  // exact frame index
      
      text_feedback.setAutoDraw(true);
    }

    
    // *text_feedback_answer* updates
    if (t >= 0.0 && text_feedback_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback_answer.tStart = t;  // (not accounting for frame time here)
      text_feedback_answer.frameNStart = frameN;  // exact frame index
      
      text_feedback_answer.setAutoDraw(true);
    }

    
    // *text_trial* updates
    if (t >= 0.0 && text_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_trial.tStart = t;  // (not accounting for frame time here)
      text_trial.frameNStart = frameN;  // exact frame index
      
      text_trial.setAutoDraw(true);
    }

    
    // *text_test* updates
    if (t >= 0.0 && text_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_test.tStart = t;  // (not accounting for frame time here)
      text_test.frameNStart = frameN;  // exact frame index
      
      text_test.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_feedback* updates
    if (t >= 0.0 && key_resp_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_feedback.tStart = t;  // (not accounting for frame time here)
      key_resp_feedback.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_feedback.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feedback.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feedback.clearEvents(); });
    }

    if (key_resp_feedback.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_feedback.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_feedback_allKeys = _key_resp_feedback_allKeys.concat(theseKeys);
      if (_key_resp_feedback_allKeys.length > 0) {
        key_resp_feedback.keys = _key_resp_feedback_allKeys[_key_resp_feedback_allKeys.length - 1].name;  // just the last key pressed
        key_resp_feedback.rt = _key_resp_feedback_allKeys[_key_resp_feedback_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *feedback_trial_1* updates
    if (t >= 0 && feedback_trial_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_trial_1.tStart = t;  // (not accounting for frame time here)
      feedback_trial_1.frameNStart = frameN;  // exact frame index
      
      feedback_trial_1.setAutoDraw(true);
    }

    
    // *feedback_trial_2* updates
    if (t >= 0 && feedback_trial_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_trial_2.tStart = t;  // (not accounting for frame time here)
      feedback_trial_2.frameNStart = frameN;  // exact frame index
      
      feedback_trial_2.setAutoDraw(true);
    }

    
    // *feedback_trial_3* updates
    if (t >= 0 && feedback_trial_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_trial_3.tStart = t;  // (not accounting for frame time here)
      feedback_trial_3.frameNStart = frameN;  // exact frame index
      
      feedback_trial_3.setAutoDraw(true);
    }

    
    // *feedback_trial_4* updates
    if (t >= 0 && feedback_trial_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_trial_4.tStart = t;  // (not accounting for frame time here)
      feedback_trial_4.frameNStart = frameN;  // exact frame index
      
      feedback_trial_4.setAutoDraw(true);
    }

    
    // *feedback_test_1* updates
    if (t >= 0 && feedback_test_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_test_1.tStart = t;  // (not accounting for frame time here)
      feedback_test_1.frameNStart = frameN;  // exact frame index
      
      feedback_test_1.setAutoDraw(true);
    }

    
    // *feedback_test_2* updates
    if (t >= 0 && feedback_test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_test_2.tStart = t;  // (not accounting for frame time here)
      feedback_test_2.frameNStart = frameN;  // exact frame index
      
      feedback_test_2.setAutoDraw(true);
    }

    
    // *feedback_test_3* updates
    if (t >= 0 && feedback_test_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_test_3.tStart = t;  // (not accounting for frame time here)
      feedback_test_3.frameNStart = frameN;  // exact frame index
      
      feedback_test_3.setAutoDraw(true);
    }

    
    // *feedback_test_4* updates
    if (t >= 0 && feedback_test_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_test_4.tStart = t;  // (not accounting for frame time here)
      feedback_test_4.frameNStart = frameN;  // exact frame index
      
      feedback_test_4.setAutoDraw(true);
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
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_end_practice_allKeys;
var end_practiceComponents;
function end_practiceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end_practice'-------
    t = 0;
    end_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_end_practice.keys = undefined;
    key_resp_end_practice.rt = undefined;
    _key_resp_end_practice_allKeys = [];
    // keep track of which components have finished
    end_practiceComponents = [];
    end_practiceComponents.push(text_end_practice_1);
    end_practiceComponents.push(key_resp_end_practice);
    
    for (const thisComponent of end_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function end_practiceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = end_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_practice_1* updates
    if (t >= 0.0 && text_end_practice_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_practice_1.tStart = t;  // (not accounting for frame time here)
      text_end_practice_1.frameNStart = frameN;  // exact frame index
      
      text_end_practice_1.setAutoDraw(true);
    }

    
    // *key_resp_end_practice* updates
    if (t >= 0.0 && key_resp_end_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_end_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end_practice.clearEvents(); });
    }

    if (key_resp_end_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end_practice.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_end_practice_allKeys = _key_resp_end_practice_allKeys.concat(theseKeys);
      if (_key_resp_end_practice_allKeys.length > 0) {
        key_resp_end_practice.keys = _key_resp_end_practice_allKeys[_key_resp_end_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end_practice.rt = _key_resp_end_practice_allKeys[_key_resp_end_practice_allKeys.length - 1].rt;
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
    for (const thisComponent of end_practiceComponents)
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


function end_practiceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end_practice'-------
    for (const thisComponent of end_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    reps = 27; // change to match the number of trials within a block
    condition_change_order = [];
    change = 0;
    
    for (var i = 0; i < reps; i++) {
        change = "shape"
        condition_change_order.push(change)
    }
    for (var i = 0; i < reps; i++) {
        change = "color"
        condition_change_order.push(change)
    }
    
    shuffle(condition_change_order)
    
    practice_or_trial = "trial"
    // the Routine "end_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_end_block_allKeys;
var end_blockComponents;
function end_blockRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end_block'-------
    t = 0;
    end_blockClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_end_block.keys = undefined;
    key_resp_end_block.rt = undefined;
    _key_resp_end_block_allKeys = [];
    // keep track of which components have finished
    end_blockComponents = [];
    end_blockComponents.push(text_end_block);
    end_blockComponents.push(key_resp_end_block);
    
    for (const thisComponent of end_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function end_blockRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end_block'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = end_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_block* updates
    if (t >= 0.0 && text_end_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_block.tStart = t;  // (not accounting for frame time here)
      text_end_block.frameNStart = frameN;  // exact frame index
      
      text_end_block.setAutoDraw(true);
    }

    
    // *key_resp_end_block* updates
    if (t >= 0.0 && key_resp_end_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end_block.tStart = t;  // (not accounting for frame time here)
      key_resp_end_block.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end_block.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end_block.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end_block.clearEvents(); });
    }

    if (key_resp_end_block.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end_block.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_end_block_allKeys = _key_resp_end_block_allKeys.concat(theseKeys);
      if (_key_resp_end_block_allKeys.length > 0) {
        key_resp_end_block.keys = _key_resp_end_block_allKeys[_key_resp_end_block_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end_block.rt = _key_resp_end_block_allKeys[_key_resp_end_block_allKeys.length - 1].rt;
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
    for (const thisComponent of end_blockComponents)
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


function end_blockRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end_block'-------
    for (const thisComponent of end_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_end_allKeys;
var end_experimentComponents;
function end_experimentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end_experiment'-------
    t = 0;
    end_experimentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_end.keys = undefined;
    key_resp_end.rt = undefined;
    _key_resp_end_allKeys = [];
    // keep track of which components have finished
    end_experimentComponents = [];
    end_experimentComponents.push(text_end);
    end_experimentComponents.push(key_resp_end);
    
    for (const thisComponent of end_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function end_experimentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end_experiment'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = end_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
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


function end_experimentRoutineEnd(trials) {
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


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
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
