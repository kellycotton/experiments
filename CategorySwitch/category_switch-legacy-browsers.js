/************************ 
 * Category_Switch Test *
 ************************/


// store info about the experiment session:
let expName = 'category_switch';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
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
flowScheduler.add(practice_instructions_1RoutineBegin());
flowScheduler.add(practice_instructions_1RoutineEachFrame());
flowScheduler.add(practice_instructions_1RoutineEnd());
flowScheduler.add(quick_instructRoutineBegin());
flowScheduler.add(quick_instructRoutineEachFrame());
flowScheduler.add(quick_instructRoutineEnd());
flowScheduler.add(pause_keysRoutineBegin());
flowScheduler.add(pause_keysRoutineEachFrame());
flowScheduler.add(pause_keysRoutineEnd());
const prac_trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_trials_1LoopBegin(prac_trials_1LoopScheduler));
flowScheduler.add(prac_trials_1LoopScheduler);
flowScheduler.add(prac_trials_1LoopEnd);
flowScheduler.add(end_practice_blockRoutineBegin());
flowScheduler.add(end_practice_blockRoutineEachFrame());
flowScheduler.add(end_practice_blockRoutineEnd());
flowScheduler.add(practice_instructions_1RoutineBegin());
flowScheduler.add(practice_instructions_1RoutineEachFrame());
flowScheduler.add(practice_instructions_1RoutineEnd());
flowScheduler.add(quick_instructRoutineBegin());
flowScheduler.add(quick_instructRoutineEachFrame());
flowScheduler.add(quick_instructRoutineEnd());
flowScheduler.add(pause_keysRoutineBegin());
flowScheduler.add(pause_keysRoutineEachFrame());
flowScheduler.add(pause_keysRoutineEnd());
const prac_trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_trials_2LoopBegin(prac_trials_2LoopScheduler));
flowScheduler.add(prac_trials_2LoopScheduler);
flowScheduler.add(prac_trials_2LoopEnd);
flowScheduler.add(end_practice_blockRoutineBegin());
flowScheduler.add(end_practice_blockRoutineEachFrame());
flowScheduler.add(end_practice_blockRoutineEnd());
flowScheduler.add(practice_instructions_2RoutineBegin());
flowScheduler.add(practice_instructions_2RoutineEachFrame());
flowScheduler.add(practice_instructions_2RoutineEnd());
flowScheduler.add(quick_instructRoutineBegin());
flowScheduler.add(quick_instructRoutineEachFrame());
flowScheduler.add(quick_instructRoutineEnd());
flowScheduler.add(pause_keysRoutineBegin());
flowScheduler.add(pause_keysRoutineEachFrame());
flowScheduler.add(pause_keysRoutineEnd());
const prac_trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_trials_3LoopBegin(prac_trials_3LoopScheduler));
flowScheduler.add(prac_trials_3LoopScheduler);
flowScheduler.add(prac_trials_3LoopEnd);
flowScheduler.add(end_practice_blockRoutineBegin());
flowScheduler.add(end_practice_blockRoutineEachFrame());
flowScheduler.add(end_practice_blockRoutineEnd());
flowScheduler.add(end_practiceRoutineBegin());
flowScheduler.add(end_practiceRoutineEachFrame());
flowScheduler.add(end_practiceRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(end_expRoutineBegin());
flowScheduler.add(end_expRoutineEachFrame());
flowScheduler.add(end_expRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli_prac_2.xlsx', 'path': 'stimuli_prac_2.xlsx'},
    {'name': 'stimuli_prac_3.xlsx', 'path': 'stimuli_prac_3.xlsx'},
    {'name': 'cross.png', 'path': 'cross.png'},
    {'name': 'trialtypes.xlsx', 'path': 'trialtypes.xlsx'},
    {'name': 'heart.png', 'path': 'heart.png'},
    {'name': 'arrows.png', 'path': 'arrows.png'},
    {'name': 'stimuli_prac_1.xlsx', 'path': 'stimuli_prac_1.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
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
var new_trial_alive;
var new_trial_stimuli;
var last_trial_alive;
var heart;
var cross;
var practice_i;
var block_i;
var i;
var block_total;
var stim_living;
var stim_nonliving;
var stim_big;
var stim_small;
var target_stims;
var practice_instructions_1Clock;
var text_9;
var key_resp_3;
var quick_instructClock;
var text_53;
var key_resp_9;
var pause_keysClock;
var text_14;
var image;
var text_22;
var key_resp_10;
var practice_cue_1Clock;
var cue_2;
var practice_trial_1Clock;
var cue_5;
var text_10;
var prac_1_key_resp;
var feedback_1Clock;
var text_12;
var end_practice_blockClock;
var text_11;
var key_resp_5;
var practice_instructions_2Clock;
var text_17;
var key_resp_6;
var text_18;
var text_19;
var text_20;
var text_21;
var heart_instruct_2;
var cross_instruct_2;
var practice_cue_2Clock;
var cue_3;
var practice_trial_2Clock;
var cue_6;
var text_15;
var prac_3_key_resp;
var feedback_2Clock;
var text_16;
var end_practiceClock;
var text_23;
var key_resp_11;
var instructionsClock;
var text_3;
var key_resp_2;
var text_4;
var text_5;
var text_6;
var text_7;
var heart_instruct;
var cross_instruct;
var first_cueClock;
var cue_4;
var first_trialClock;
var cue_7;
var text_2;
var key_resp_4;
var trial_setupClock;
var cue_presentationClock;
var cue;
var trialClock;
var cue_8;
var text;
var key_resp;
var end_blockClock;
var msg;
var block_message;
var text_13;
var key_resp_7;
var text_24;
var instructions_againClock;
var text_25;
var end_expClock;
var text_8;
var key_resp_8;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  new_trial_alive = " ";
  new_trial_stimuli = " ";
  last_trial_alive = " ";
  
  
  heart = "heart.png";
  cross = "cross.png";
  practice_i = 0;
  block_i = 1;
  i = 0;
  block_total = 4; 
  
  stim_living = ["shark", "lion", "oak", "alligator", "mushroom", "sparrow", "goldfish", "lizard"];
  stim_nonliving = ["table", "bicycle", "coat", "cloud", "pebble", "knob", "marble", "snowflake"];
  stim_big = ["table", "bicycle", "coat", "cloud", "shark", "lion", "oak", "alligator"];
  stim_small = ["pebble", "knob", "marble", "snowflake", "mushroom", "sparrow", "goldfish", "lizard"];
  practice_i = 0;
  
  for (i = 0; i < 8; i++) {
      stim_living[i] = [stim_living[i], "congruent", "alive"];
      stim_nonliving[i] = [stim_nonliving[i], "incongruent", "alive"];
      stim_big[i] = [stim_big[i], "congruent", "size"];
      stim_small[i] = [stim_small[i], "incongruent", "size"];
  }
  
  // create really big stimulus lists to avoid running out of index
  stim_living = stim_living.concat(stim_living)
  stim_living = stim_living.concat(stim_living)
  stim_living = stim_living.concat(stim_living)
  stim_nonliving = stim_living.concat(stim_nonliving)
  stim_nonliving = stim_living.concat(stim_nonliving)
  stim_nonliving = stim_living.concat(stim_nonliving)
  stim_big = stim_big.concat(stim_big)
  stim_big = stim_big.concat(stim_big)
  stim_big = stim_big.concat(stim_big)
  stim_small = stim_small.concat(stim_small)
  stim_small = stim_small.concat(stim_small)
  stim_small = stim_small.concat(stim_small)
  
  target_stims = stim_living.concat(stim_nonliving, stim_big, stim_small)
  // Initialize components for Routine "practice_instructions_1"
  practice_instructions_1Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "quick_instruct"
  quick_instructClock = new util.Clock();
  text_53 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_53',
    text: 'Please respond as quickly as possible without making errors. \n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pause_keys"
  pause_keysClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Take a moment to put your fingers on the correct keys.  \n\nYou may press SPACE after 10 seconds to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'arrows.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'Please press SPACE now.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.075,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_cue_1"
  practice_cue_1Clock = new util.Clock();
  cue_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "practice_trial_1"
  practice_trial_1Clock = new util.Clock();
  cue_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prac_1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_1"
  feedback_1Clock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end_practice_block"
  end_practice_blockClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Great job! Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions_2"
  practice_instructions_2Clock = new util.Clock();
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Now, we are going to do both categories. \n\nRemember, if you see a heart: press the LEFT arrow key if living and the RIGHT arrow key if nonliving.\n\nIf you see a cross: press the LEFT arrow key if big and the RIGHT arrow key if small. \n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'LIVING',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'BIG',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: 'NONLIVING',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'SMALL',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  heart_instruct_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'heart_instruct_2', units : undefined, 
    image : 'heart.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.25)], size : [0.05, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  cross_instruct_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cross_instruct_2', units : undefined, 
    image : 'cross.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.05, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "practice_cue_2"
  practice_cue_2Clock = new util.Clock();
  cue_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "practice_trial_2"
  practice_trial_2Clock = new util.Clock();
  cue_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_6', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prac_3_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_2"
  feedback_2Clock = new util.Clock();
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end_practice"
  end_practiceClock = new util.Clock();
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'You have finished the practice. We are now going to begin the main test. Everything will be the same, except we are now going to record your responses and you will no longer receive feedback. \n\nYou will complete 4 parts of about 4 minutes each.\n\nDuring the test, please respond as quickly as you can without making mistakes.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Remember, if you see a heart: press the LEFT arrow key if living and the RIGHT arrow key if nonliving.\n\nIf you see a cross: press the LEFT arrow key if big and the RIGHT arrow key if small. \n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'LIVING',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'BIG',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'NONLIVING',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'SMALL',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  heart_instruct = new visual.ImageStim({
    win : psychoJS.window,
    name : 'heart_instruct', units : undefined, 
    image : 'heart.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.25)], size : [0.05, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  cross_instruct = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cross_instruct', units : undefined, 
    image : 'cross.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.05, 0.05],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "first_cue"
  first_cueClock = new util.Clock();
  cue_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "first_trial"
  first_trialClock = new util.Clock();
  cue_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_7', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_setup"
  trial_setupClock = new util.Clock();
  // Initialize components for Routine "cue_presentation"
  cue_presentationClock = new util.Clock();
  cue = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  cue_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_8', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_block"
  end_blockClock = new util.Clock();
   msg = "no message!";
  block_message = 'no message';
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'We’re going to continue doing the same thing. When you are ready to continue, press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instructions_again"
  instructions_againClock = new util.Clock();
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: 'Here are the instructions again:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end_exp"
  end_expClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'You have reached the end of the experiment. \n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
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
    // keep track of which components have finished
    setupComponents = [];
    
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var k;
var practice_text;
var _key_resp_3_allKeys;
var practice_instructions_1Components;
function practice_instructions_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_instructions_1'-------
    t = 0;
    practice_instructions_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    k = 0;
    if ((practice_i === 0)) {
        practice_text = "We are going to begin the practice. \n \nDuring this part, you will first see a HEART in the center of the screen. Next, you will see a word in the center of the screen.\n \nYour job is to judge if the word describes a living or nonliving thing. \n \nPress the LEFT arrow key if living, the RIGHT arrow key if nonliving.\n \nPress SPACE to continue.";
    } else {
        practice_text = "During this part, you will first see a CROSS in the center of the screen. Next, you will see a word in the center of the screen.\n \nYour job is to judge if the word describes something bigger or smaller than a soccer ball. \n \nPress the LEFT arrow key if bigger, the RIGHT arrow key if smaller.\n \nPress SPACE to continue.";
    }
    
    text_9.setText(practice_text);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    practice_instructions_1Components = [];
    practice_instructions_1Components.push(text_9);
    practice_instructions_1Components.push(key_resp_3);
    
    practice_instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_instructions_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_instructions_1'-------
    // get current time
    t = practice_instructions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
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
    practice_instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_instructions_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instructions_1'-------
    practice_instructions_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_3.stop();
    // the Routine "practice_instructions_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var quick_instructComponents;
function quick_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'quick_instruct'-------
    t = 0;
    quick_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    quick_instructComponents = [];
    quick_instructComponents.push(text_53);
    quick_instructComponents.push(key_resp_9);
    
    quick_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function quick_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'quick_instruct'-------
    // get current time
    t = quick_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_53* updates
    if (t >= 0.0 && text_53.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_53.tStart = t;  // (not accounting for frame time here)
      text_53.frameNStart = frameN;  // exact frame index
      
      text_53.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
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
    quick_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quick_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'quick_instruct'-------
    quick_instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_9.stop();
    // the Routine "quick_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var pause_keysComponents;
function pause_keysRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pause_keys'-------
    t = 0;
    pause_keysClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    pause_keysComponents = [];
    pause_keysComponents.push(text_14);
    pause_keysComponents.push(image);
    pause_keysComponents.push(text_22);
    pause_keysComponents.push(key_resp_10);
    
    pause_keysComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function pause_keysRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pause_keys'-------
    // get current time
    t = pause_keysClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_14.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 15 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *text_22* updates
    if (t >= 15 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 15 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
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
    pause_keysComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pause_keysRoutineEnd() {
  return async function () {
    //------Ending Routine 'pause_keys'-------
    pause_keysComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_10.stop();
    // the Routine "pause_keys" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var prac_trials_1;
var currentLoop;
function prac_trials_1LoopBegin(prac_trials_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli_prac_1.xlsx',
      seed: undefined, name: 'prac_trials_1'
    });
    psychoJS.experiment.addLoop(prac_trials_1); // add the loop to the experiment
    currentLoop = prac_trials_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trials_1.forEach(function() {
      const snapshot = prac_trials_1.getSnapshot();
    
      prac_trials_1LoopScheduler.add(importConditions(snapshot));
      prac_trials_1LoopScheduler.add(practice_cue_1RoutineBegin(snapshot));
      prac_trials_1LoopScheduler.add(practice_cue_1RoutineEachFrame());
      prac_trials_1LoopScheduler.add(practice_cue_1RoutineEnd());
      prac_trials_1LoopScheduler.add(practice_trial_1RoutineBegin(snapshot));
      prac_trials_1LoopScheduler.add(practice_trial_1RoutineEachFrame());
      prac_trials_1LoopScheduler.add(practice_trial_1RoutineEnd());
      prac_trials_1LoopScheduler.add(feedback_1RoutineBegin(snapshot));
      prac_trials_1LoopScheduler.add(feedback_1RoutineEachFrame());
      prac_trials_1LoopScheduler.add(feedback_1RoutineEnd());
      prac_trials_1LoopScheduler.add(endLoopIteration(prac_trials_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trials_1LoopEnd() {
  psychoJS.experiment.removeLoop(prac_trials_1);

  return Scheduler.Event.NEXT;
}


var prac_trials_2;
function prac_trials_2LoopBegin(prac_trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli_prac_2.xlsx',
      seed: undefined, name: 'prac_trials_2'
    });
    psychoJS.experiment.addLoop(prac_trials_2); // add the loop to the experiment
    currentLoop = prac_trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trials_2.forEach(function() {
      const snapshot = prac_trials_2.getSnapshot();
    
      prac_trials_2LoopScheduler.add(importConditions(snapshot));
      prac_trials_2LoopScheduler.add(practice_cue_1RoutineBegin(snapshot));
      prac_trials_2LoopScheduler.add(practice_cue_1RoutineEachFrame());
      prac_trials_2LoopScheduler.add(practice_cue_1RoutineEnd());
      prac_trials_2LoopScheduler.add(practice_trial_1RoutineBegin(snapshot));
      prac_trials_2LoopScheduler.add(practice_trial_1RoutineEachFrame());
      prac_trials_2LoopScheduler.add(practice_trial_1RoutineEnd());
      prac_trials_2LoopScheduler.add(feedback_1RoutineBegin(snapshot));
      prac_trials_2LoopScheduler.add(feedback_1RoutineEachFrame());
      prac_trials_2LoopScheduler.add(feedback_1RoutineEnd());
      prac_trials_2LoopScheduler.add(endLoopIteration(prac_trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(prac_trials_2);

  return Scheduler.Event.NEXT;
}


var prac_trials_3;
function prac_trials_3LoopBegin(prac_trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli_prac_3.xlsx',
      seed: undefined, name: 'prac_trials_3'
    });
    psychoJS.experiment.addLoop(prac_trials_3); // add the loop to the experiment
    currentLoop = prac_trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trials_3.forEach(function() {
      const snapshot = prac_trials_3.getSnapshot();
    
      prac_trials_3LoopScheduler.add(importConditions(snapshot));
      prac_trials_3LoopScheduler.add(practice_cue_2RoutineBegin(snapshot));
      prac_trials_3LoopScheduler.add(practice_cue_2RoutineEachFrame());
      prac_trials_3LoopScheduler.add(practice_cue_2RoutineEnd());
      prac_trials_3LoopScheduler.add(practice_trial_2RoutineBegin(snapshot));
      prac_trials_3LoopScheduler.add(practice_trial_2RoutineEachFrame());
      prac_trials_3LoopScheduler.add(practice_trial_2RoutineEnd());
      prac_trials_3LoopScheduler.add(feedback_2RoutineBegin(snapshot));
      prac_trials_3LoopScheduler.add(feedback_2RoutineEachFrame());
      prac_trials_3LoopScheduler.add(feedback_2RoutineEnd());
      prac_trials_3LoopScheduler.add(endLoopIteration(prac_trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(prac_trials_3);

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
    blocks.forEach(function() {
      const snapshot = blocks.getSnapshot();
    
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(instructionsRoutineBegin(snapshot));
      blocksLoopScheduler.add(instructionsRoutineEachFrame());
      blocksLoopScheduler.add(instructionsRoutineEnd());
      blocksLoopScheduler.add(quick_instructRoutineBegin(snapshot));
      blocksLoopScheduler.add(quick_instructRoutineEachFrame());
      blocksLoopScheduler.add(quick_instructRoutineEnd());
      blocksLoopScheduler.add(pause_keysRoutineBegin(snapshot));
      blocksLoopScheduler.add(pause_keysRoutineEachFrame());
      blocksLoopScheduler.add(pause_keysRoutineEnd());
      blocksLoopScheduler.add(first_cueRoutineBegin(snapshot));
      blocksLoopScheduler.add(first_cueRoutineEachFrame());
      blocksLoopScheduler.add(first_cueRoutineEnd());
      blocksLoopScheduler.add(first_trialRoutineBegin(snapshot));
      blocksLoopScheduler.add(first_trialRoutineEachFrame());
      blocksLoopScheduler.add(first_trialRoutineEnd());
      const trials_setup_loopLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trials_setup_loopLoopBegin(trials_setup_loopLoopScheduler, snapshot));
      blocksLoopScheduler.add(trials_setup_loopLoopScheduler);
      blocksLoopScheduler.add(trials_setup_loopLoopEnd);
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(end_blockRoutineBegin(snapshot));
      blocksLoopScheduler.add(end_blockRoutineEachFrame());
      blocksLoopScheduler.add(end_blockRoutineEnd());
      blocksLoopScheduler.add(instructions_againRoutineBegin(snapshot));
      blocksLoopScheduler.add(instructions_againRoutineEachFrame());
      blocksLoopScheduler.add(instructions_againRoutineEnd());
      blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_setup_loop;
function trials_setup_loopLoopBegin(trials_setup_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_setup_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trialtypes.xlsx',
      seed: undefined, name: 'trials_setup_loop'
    });
    psychoJS.experiment.addLoop(trials_setup_loop); // add the loop to the experiment
    currentLoop = trials_setup_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_setup_loop.forEach(function() {
      const snapshot = trials_setup_loop.getSnapshot();
    
      trials_setup_loopLoopScheduler.add(importConditions(snapshot));
      trials_setup_loopLoopScheduler.add(trial_setupRoutineBegin(snapshot));
      trials_setup_loopLoopScheduler.add(trial_setupRoutineEachFrame());
      trials_setup_loopLoopScheduler.add(trial_setupRoutineEnd());
      trials_setup_loopLoopScheduler.add(endLoopIteration(trials_setup_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_setup_loopLoopEnd() {
  psychoJS.experiment.removeLoop(trials_setup_loop);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 32, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(cue_presentationRoutineBegin(snapshot));
      trialsLoopScheduler.add(cue_presentationRoutineEachFrame());
      trialsLoopScheduler.add(cue_presentationRoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var practice_cue;
var cue_text;
var practice_cue_1Components;
function practice_cue_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_cue_1'-------
    t = 0;
    practice_cue_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.700000);
    // update component parameters for each repeat
    if ((practice_i === 0)) {
        practice_cue = heart;
        cue_text = "Does the word describe a living thing?";
    } else {
        practice_cue = cross;
        cue_text = "Does the word describe a something bigger than a soccer ball?";
    }
    
    cue_2.setImage(practice_cue);
    // keep track of which components have finished
    practice_cue_1Components = [];
    practice_cue_1Components.push(cue_2);
    
    practice_cue_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_cue_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_cue_1'-------
    // get current time
    t = practice_cue_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_2* updates
    if (t >= 0.2 && cue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_2.tStart = t;  // (not accounting for frame time here)
      cue_2.frameNStart = frameN;  // exact frame index
      
      cue_2.setAutoDraw(true);
    }

    frameRemains = 0.2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cue_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_2.setAutoDraw(false);
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
    practice_cue_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_cue_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_cue_1'-------
    practice_cue_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var corr_ans;
var _prac_1_key_resp_allKeys;
var practice_trial_1Components;
function practice_trial_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_trial_1'-------
    t = 0;
    practice_trial_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((congruency_stim === "congruent")) {
        corr_ans = "left";
    } else {
        corr_ans = "right";
    }
    
    cue_5.setImage(practice_cue);
    text_10.setText(word);
    prac_1_key_resp.keys = undefined;
    prac_1_key_resp.rt = undefined;
    _prac_1_key_resp_allKeys = [];
    // keep track of which components have finished
    practice_trial_1Components = [];
    practice_trial_1Components.push(cue_5);
    practice_trial_1Components.push(text_10);
    practice_trial_1Components.push(prac_1_key_resp);
    
    practice_trial_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_trial_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_trial_1'-------
    // get current time
    t = practice_trial_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_5* updates
    if (t >= 0.0 && cue_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_5.tStart = t;  // (not accounting for frame time here)
      cue_5.frameNStart = frameN;  // exact frame index
      
      cue_5.setAutoDraw(true);
    }

    
    // *text_10* updates
    if (t >= 0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *prac_1_key_resp* updates
    if (t >= 0 && prac_1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_1_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_1_key_resp.clearEvents(); });
    }

    if (prac_1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_1_key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _prac_1_key_resp_allKeys = _prac_1_key_resp_allKeys.concat(theseKeys);
      if (_prac_1_key_resp_allKeys.length > 0) {
        prac_1_key_resp.keys = _prac_1_key_resp_allKeys[_prac_1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_1_key_resp.rt = _prac_1_key_resp_allKeys[_prac_1_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (prac_1_key_resp.keys == corr_ans) {
            prac_1_key_resp.corr = 1;
        } else {
            prac_1_key_resp.corr = 0;
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
    practice_trial_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trial_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_trial_1'-------
    practice_trial_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (prac_1_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         prac_1_key_resp.corr = 1;  // correct non-response
      } else {
         prac_1_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('prac_1_key_resp.keys', prac_1_key_resp.keys);
    psychoJS.experiment.addData('prac_1_key_resp.corr', prac_1_key_resp.corr);
    if (typeof prac_1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_1_key_resp.rt', prac_1_key_resp.rt);
        routineTimer.reset();
        }
    
    prac_1_key_resp.stop();
    // the Routine "practice_trial_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_message;
var feedback_time;
var feedback_1Components;
function feedback_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_1'-------
    t = 0;
    feedback_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((practice_i === 0)) {
        feedback_message = "That was incorrect.\n \nRemember, press the LEFT arrow key if living and the RIGHT arrow key if nonliving.";
    } else {
        feedback_message = "That was incorrect.\n \nRemember, press the LEFT arrow key if bigger and the RIGHT arrow key if smaller.";
    }
    if ((prac_1_key_resp.corr === 0)) {
        feedback_time = 2;
    } else {
        feedback_time = 0;
    }
    
    text_12.setText(feedback_message);
    // keep track of which components have finished
    feedback_1Components = [];
    feedback_1Components.push(text_12);
    
    feedback_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_1'-------
    // get current time
    t = feedback_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    feedback_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_1'-------
    feedback_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    k = (k + 1);
    
    // the Routine "feedback_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var end_practice_blockComponents;
function end_practice_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_practice_block'-------
    t = 0;
    end_practice_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    end_practice_blockComponents = [];
    end_practice_blockComponents.push(text_11);
    end_practice_blockComponents.push(key_resp_5);
    
    end_practice_blockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_practice_blockRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_practice_block'-------
    // get current time
    t = end_practice_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
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
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
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
    end_practice_blockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var first_stims;
function end_practice_blockRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_practice_block'-------
    end_practice_blockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    practice_i = (i + 1);
    util.shuffle(target_stims);
    first_stims = target_stims.slice(0, 4);
    
    key_resp_5.stop();
    // the Routine "end_practice_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var practice_instructions_2Components;
function practice_instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_instructions_2'-------
    t = 0;
    practice_instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    k = 0;
    
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    practice_instructions_2Components = [];
    practice_instructions_2Components.push(text_17);
    practice_instructions_2Components.push(key_resp_6);
    practice_instructions_2Components.push(text_18);
    practice_instructions_2Components.push(text_19);
    practice_instructions_2Components.push(text_20);
    practice_instructions_2Components.push(text_21);
    practice_instructions_2Components.push(heart_instruct_2);
    practice_instructions_2Components.push(cross_instruct_2);
    
    practice_instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_instructions_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_instructions_2'-------
    // get current time
    t = practice_instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }

    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }

    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }

    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }

    
    // *heart_instruct_2* updates
    if (t >= 0.0 && heart_instruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      heart_instruct_2.tStart = t;  // (not accounting for frame time here)
      heart_instruct_2.frameNStart = frameN;  // exact frame index
      
      heart_instruct_2.setAutoDraw(true);
    }

    
    // *cross_instruct_2* updates
    if (t >= 0.0 && cross_instruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_instruct_2.tStart = t;  // (not accounting for frame time here)
      cross_instruct_2.frameNStart = frameN;  // exact frame index
      
      cross_instruct_2.setAutoDraw(true);
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
    practice_instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_instructions_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instructions_2'-------
    practice_instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_6.stop();
    // the Routine "practice_instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_cue_2Components;
function practice_cue_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_cue_2'-------
    t = 0;
    practice_cue_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.700000);
    // update component parameters for each repeat
    if ((characteristic === "living")) {
        practice_cue = heart;
        cue_text = "Does the word describe a living thing?";
    } else {
        practice_cue = cross;
        cue_text = "Does the word describe a something bigger than a soccer ball?";
    }
    
    cue_3.setImage(practice_cue);
    // keep track of which components have finished
    practice_cue_2Components = [];
    practice_cue_2Components.push(cue_3);
    
    practice_cue_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_cue_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_cue_2'-------
    // get current time
    t = practice_cue_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_3* updates
    if (t >= 0.2 && cue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_3.tStart = t;  // (not accounting for frame time here)
      cue_3.frameNStart = frameN;  // exact frame index
      
      cue_3.setAutoDraw(true);
    }

    frameRemains = 0.2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cue_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_3.setAutoDraw(false);
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
    practice_cue_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_cue_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_cue_2'-------
    practice_cue_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _prac_3_key_resp_allKeys;
var practice_trial_2Components;
function practice_trial_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_trial_2'-------
    t = 0;
    practice_trial_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((congruency_stim === "congruent")) {
        corr_ans = "left";
    } else {
        corr_ans = "right";
    }
    
    cue_6.setImage(practice_cue);
    text_15.setText(word);
    prac_3_key_resp.keys = undefined;
    prac_3_key_resp.rt = undefined;
    _prac_3_key_resp_allKeys = [];
    // keep track of which components have finished
    practice_trial_2Components = [];
    practice_trial_2Components.push(cue_6);
    practice_trial_2Components.push(text_15);
    practice_trial_2Components.push(prac_3_key_resp);
    
    practice_trial_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_trial_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_trial_2'-------
    // get current time
    t = practice_trial_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_6* updates
    if (t >= 0.0 && cue_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_6.tStart = t;  // (not accounting for frame time here)
      cue_6.frameNStart = frameN;  // exact frame index
      
      cue_6.setAutoDraw(true);
    }

    
    // *text_15* updates
    if (t >= 0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    
    // *prac_3_key_resp* updates
    if (t >= 0 && prac_3_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_3_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_3_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_3_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_3_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_3_key_resp.clearEvents(); });
    }

    if (prac_3_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_3_key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _prac_3_key_resp_allKeys = _prac_3_key_resp_allKeys.concat(theseKeys);
      if (_prac_3_key_resp_allKeys.length > 0) {
        prac_3_key_resp.keys = _prac_3_key_resp_allKeys[_prac_3_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_3_key_resp.rt = _prac_3_key_resp_allKeys[_prac_3_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (prac_3_key_resp.keys == corr_ans) {
            prac_3_key_resp.corr = 1;
        } else {
            prac_3_key_resp.corr = 0;
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
    practice_trial_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trial_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_trial_2'-------
    practice_trial_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (prac_3_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         prac_3_key_resp.corr = 1;  // correct non-response
      } else {
         prac_3_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('prac_3_key_resp.keys', prac_3_key_resp.keys);
    psychoJS.experiment.addData('prac_3_key_resp.corr', prac_3_key_resp.corr);
    if (typeof prac_3_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_3_key_resp.rt', prac_3_key_resp.rt);
        routineTimer.reset();
        }
    
    prac_3_key_resp.stop();
    // the Routine "practice_trial_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_2Components;
function feedback_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_2'-------
    t = 0;
    feedback_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((characteristic === "living")) {
        feedback_message = "That was incorrect.\n \n Remember, press the LEFT arrow key if living and the RIGHT arrow key if nonliving.";
    } else {
        feedback_message = "That was incorrect.\n \n Remember, press the LEFT arrow key if bigger and the RIGHT arrow key if smaller.";
    }
    if ((prac_3_key_resp.corr === 0)) {
        feedback_time = 2;
    } else {
        feedback_time = 0;
    }
    
    text_16.setText(feedback_message);
    // keep track of which components have finished
    feedback_2Components = [];
    feedback_2Components.push(text_16);
    
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_2'-------
    // get current time
    t = feedback_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_16.setAutoDraw(false);
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
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_2'-------
    feedback_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    k = (k + 1);
    
    // the Routine "feedback_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_11_allKeys;
var end_practiceComponents;
function end_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_practice'-------
    t = 0;
    end_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    end_practiceComponents = [];
    end_practiceComponents.push(text_23);
    end_practiceComponents.push(key_resp_11);
    
    end_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_practice'-------
    // get current time
    t = end_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }

    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
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
    end_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_practice'-------
    end_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_11.stop();
    // the Routine "end_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var alive;
var new_trial_congruent;
var trial_switch_array;
var trial_congruent_array;
var trial_alive_array;
var _key_resp_2_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    i = 0;
    k = 0;
    alive = first_stims[0][2];
    new_trial_congruent = first_stims[0][1];
    trial_switch_array = [];
    trial_congruent_array = [];
    trial_alive_array = [];
    
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_3);
    instructionsComponents.push(key_resp_2);
    instructionsComponents.push(text_4);
    instructionsComponents.push(text_5);
    instructionsComponents.push(text_6);
    instructionsComponents.push(text_7);
    instructionsComponents.push(heart_instruct);
    instructionsComponents.push(cross_instruct);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
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
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *heart_instruct* updates
    if (t >= 0.0 && heart_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      heart_instruct.tStart = t;  // (not accounting for frame time here)
      heart_instruct.frameNStart = frameN;  // exact frame index
      
      heart_instruct.setAutoDraw(true);
    }

    
    // *cross_instruct* updates
    if (t >= 0.0 && cross_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_instruct.tStart = t;  // (not accounting for frame time here)
      cross_instruct.frameNStart = frameN;  // exact frame index
      
      cross_instruct.setAutoDraw(true);
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
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var cue_stim;
var first_cueComponents;
function first_cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'first_cue'-------
    t = 0;
    first_cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.700000);
    // update component parameters for each repeat
    if ((alive === "alive")) {
        cue_stim = heart;
        cue_text = "Does the word describe a living thing?";
    } else {
        cue_stim = cross;
        cue_text = "Does the word describe a something bigger than a soccer ball?";
    }
    
    cue_4.setImage(cue_stim);
    // keep track of which components have finished
    first_cueComponents = [];
    first_cueComponents.push(cue_4);
    
    first_cueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function first_cueRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'first_cue'-------
    // get current time
    t = first_cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_4* updates
    if (t >= 0.2 && cue_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_4.tStart = t;  // (not accounting for frame time here)
      cue_4.frameNStart = frameN;  // exact frame index
      
      cue_4.setAutoDraw(true);
    }

    frameRemains = 0.2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cue_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_4.setAutoDraw(false);
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
    first_cueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function first_cueRoutineEnd() {
  return async function () {
    //------Ending Routine 'first_cue'-------
    first_cueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var first_trialComponents;
function first_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'first_trial'-------
    t = 0;
    first_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((new_trial_congruent=== "congruent")) {
        corr_ans = "left";
    } else {
        corr_ans = "right";
    }
    
    cue_7.setImage(cue_stim);
    text_2.setText(first_stims[k][0]);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    first_trialComponents = [];
    first_trialComponents.push(cue_7);
    first_trialComponents.push(text_2);
    first_trialComponents.push(key_resp_4);
    
    first_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function first_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'first_trial'-------
    // get current time
    t = first_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_7* updates
    if (t >= 0.0 && cue_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_7.tStart = t;  // (not accounting for frame time here)
      cue_7.frameNStart = frameN;  // exact frame index
      
      cue_7.setAutoDraw(true);
    }

    
    // *text_2* updates
    if (t >= 0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_4.keys == 'corr_ans') {
            key_resp_4.corr = 1;
        } else {
            key_resp_4.corr = 0;
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
    first_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function first_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'first_trial'-------
    first_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Presented_Stim', first_stims[k][0]);
    psychoJS.experiment.addData('Presented_Stim_Quality', alive);
    psychoJS.experiment.addData('TrialType_Congruency', new_trial_congruent);
    psychoJS.experiment.addData('TrialType_Switch', "nonswitch");
    
    target_stims = [];
    // was no response the correct answer?!
    if (key_resp_4.keys === undefined) {
      if (['None','none',undefined].includes('corr_ans')) {
         key_resp_4.corr = 1;  // correct non-response
      } else {
         key_resp_4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    psychoJS.experiment.addData('key_resp_4.corr', key_resp_4.corr);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "first_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_switch;
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
    
    last_trial_alive = alive;
    trial_switch = trialtype_switch;
    new_trial_congruent = trialtype_congruent; 
    
    if ((trial_switch === "nonswitch")) {
        new_trial_alive = last_trial_alive;
        if (new_trial_alive === "alive") {
            alive = "alive";
            if (new_trial_congruent === "congruent") {
                new_trial_stimuli = stim_living.pop(0);
                target_stims.push(new_trial_stimuli[0]);
                trial_alive_array = trial_alive_array.concat(new_trial_alive);
                trial_switch_array = trial_switch_array.concat(trial_switch);
                trial_congruent_array = trial_congruent_array.concat(new_trial_congruent);
            } else {
                new_trial_stimuli = stim_nonliving.pop(0);
                target_stims.push(new_trial_stimuli[0]);
                trial_alive_array = trial_alive_array.concat(new_trial_alive);
                trial_switch_array = trial_switch_array.concat(trial_switch);
                trial_congruent_array = trial_congruent_array.concat(new_trial_congruent);
            }
        } else {
            alive = "size";
            if (new_trial_congruent === "congruent") {
                new_trial_stimuli = stim_big.pop(0);
                target_stims.push(new_trial_stimuli[0]);
                trial_alive_array = trial_alive_array.concat(new_trial_alive);
                trial_switch_array = trial_switch_array.concat(trial_switch);
                trial_congruent_array = trial_congruent_array.concat(new_trial_congruent);
            } else {
                new_trial_stimuli = stim_small.pop(0);
                target_stims.push(new_trial_stimuli[0]);
                trial_alive_array = trial_alive_array.concat(new_trial_alive);
                trial_switch_array = trial_switch_array.concat(trial_switch);
                trial_congruent_array = trial_congruent_array.concat(new_trial_congruent);
            }
        }
    } else {
        if (last_trial_alive === "size") {
            alive = "alive";
            new_trial_alive = alive;
            if (new_trial_congruent === "congruent") {
                new_trial_stimuli = stim_living.pop(0);
                target_stims.push(new_trial_stimuli[0]);
                trial_alive_array = trial_alive_array.concat(new_trial_alive);
                trial_switch_array = trial_switch_array.concat(trial_switch);
                trial_congruent_array = trial_congruent_array.concat(new_trial_congruent);      
            } else {
                new_trial_stimuli = stim_nonliving.pop(0);
                target_stims.push(new_trial_stimuli[0]);
                trial_alive_array = trial_alive_array.concat(new_trial_alive);
                trial_switch_array = trial_switch_array.concat(trial_switch);
                trial_congruent_array = trial_congruent_array.concat(new_trial_congruent);
            }
        } else {
            alive = "size";
            new_trial_alive = alive;
            if (new_trial_congruent === "congruent") {
                new_trial_stimuli = stim_big.pop(0);
                target_stims.push(new_trial_stimuli[0]);
                trial_alive_array = trial_alive_array.concat(new_trial_alive);
                trial_switch_array = trial_switch_array.concat(trial_switch);
                trial_congruent_array = trial_congruent_array.concat(new_trial_congruent);
            } else {
                new_trial_stimuli = stim_small.pop(0);
                target_stims.push(new_trial_stimuli[0]);
                trial_alive_array = trial_alive_array.concat(new_trial_alive);
                trial_switch_array = trial_switch_array.concat(trial_switch);
                trial_congruent_array = trial_congruent_array.concat(new_trial_congruent);
            }
        }
    }
    // keep track of which components have finished
    trial_setupComponents = [];
    
    trial_setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    trial_setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    trial_setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trial_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var cue_presentationComponents;
function cue_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cue_presentation'-------
    t = 0;
    cue_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.700000);
    // update component parameters for each repeat
    if ((trial_alive_array[k] === "alive")) {
        cue_stim = heart;
        cue_text = "Does the word describe a living thing?";
    } else {
        cue_stim = cross;
        cue_text = "Does the word describe a something bigger than a soccer ball?";
    }
    
    cue.setImage(cue_stim);
    // keep track of which components have finished
    cue_presentationComponents = [];
    cue_presentationComponents.push(cue);
    
    cue_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function cue_presentationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cue_presentation'-------
    // get current time
    t = cue_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue* updates
    if (t >= 0.2 && cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue.tStart = t;  // (not accounting for frame time here)
      cue.frameNStart = frameN;  // exact frame index
      
      cue.setAutoDraw(true);
    }

    frameRemains = 0.2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue.setAutoDraw(false);
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
    cue_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cue_presentationRoutineEnd() {
  return async function () {
    //------Ending Routine 'cue_presentation'-------
    cue_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((trial_congruent_array[k] === "congruent")) {
        corr_ans = "left";
    } else {
        corr_ans = "right";
    }
    
    cue_8.setImage(cue_stim);
    text.setText(target_stims[k]);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(cue_8);
    trialComponents.push(text);
    trialComponents.push(key_resp);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_8* updates
    if (t >= 0.0 && cue_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_8.tStart = t;  // (not accounting for frame time here)
      cue_8.frameNStart = frameN;  // exact frame index
      
      cue_8.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == corr_ans) {
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
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    
    psychoJS.experiment.addData('Presented_Stim', target_stims[k]);
    psychoJS.experiment.addData('Presented_Stim_Quality', trial_alive_array[k]);
    psychoJS.experiment.addData('TrialType_Congruency', trial_congruent_array[k]);
    psychoJS.experiment.addData('TrialType_Switch', trial_switch_array[k]);
    psychoJS.experiment.addData('CorrectAnswer', corr_ans);
    k = (k + 1);
    
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var end_block_message;
var _key_resp_7_allKeys;
var end_blockComponents;
function end_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_block'-------
    t = 0;
    end_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((block_i === 0)) {
        end_block_message = "You have reached the end of the practice.";
    } else {
        end_block_message = "You have reached the end of block " + block_i + " of " + block_total + ".";
    }   
    text_13.setText(end_block_message);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    end_blockComponents = [];
    end_blockComponents.push(text_13);
    end_blockComponents.push(key_resp_7);
    end_blockComponents.push(text_24);
    
    end_blockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
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
    end_blockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_blockRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_block'-------
    end_blockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    block_i = (block_i + 1);
    
    key_resp_7.stop();
    // the Routine "end_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructions_againComponents;
function instructions_againRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_again'-------
    t = 0;
    instructions_againClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    instructions_againComponents = [];
    instructions_againComponents.push(text_25);
    
    instructions_againComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_againRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_again'-------
    // get current time
    t = instructions_againClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_25.setAutoDraw(false);
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
    instructions_againComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_againRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_again'-------
    instructions_againComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var end_expComponents;
function end_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_exp'-------
    t = 0;
    end_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    end_expComponents = [];
    end_expComponents.push(text_8);
    end_expComponents.push(key_resp_8);
    
    end_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_expRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_exp'-------
    // get current time
    t = end_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
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
    end_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_expRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_exp'-------
    end_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_8.stop();
    // the Routine "end_exp" was not non-slip safe, so reset the non-slip timer
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
