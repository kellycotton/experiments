/**************** 
 * Mdmw3-1 Test *
 ****************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'mdmw3-1';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'site': '', 'version': '3.1'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
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
const setup_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(setup_loopLoopBegin(setup_loopLoopScheduler));
flowScheduler.add(setup_loopLoopScheduler);
flowScheduler.add(setup_loopLoopEnd);
flowScheduler.add(exp_instructRoutineBegin());
flowScheduler.add(exp_instructRoutineEachFrame());
flowScheduler.add(exp_instructRoutineEnd());
flowScheduler.add(practice_instructions_1RoutineBegin());
flowScheduler.add(practice_instructions_1RoutineEachFrame());
flowScheduler.add(practice_instructions_1RoutineEnd());
const practice_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_1LoopBegin(practice_1LoopScheduler));
flowScheduler.add(practice_1LoopScheduler);
flowScheduler.add(practice_1LoopEnd);
flowScheduler.add(practice_instructions_2RoutineBegin());
flowScheduler.add(practice_instructions_2RoutineEachFrame());
flowScheduler.add(practice_instructions_2RoutineEnd());
const practice_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_2LoopBegin(practice_2LoopScheduler));
flowScheduler.add(practice_2LoopScheduler);
flowScheduler.add(practice_2LoopEnd);
flowScheduler.add(practice_instructions_3RoutineBegin());
flowScheduler.add(practice_instructions_3RoutineEachFrame());
flowScheduler.add(practice_instructions_3RoutineEnd());
const practice_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_3LoopBegin(practice_3LoopScheduler));
flowScheduler.add(practice_3LoopScheduler);
flowScheduler.add(practice_3LoopEnd);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(instructions_mwRoutineBegin());
flowScheduler.add(instructions_mwRoutineEachFrame());
flowScheduler.add(instructions_mwRoutineEnd());
flowScheduler.add(mw_meaningRoutineBegin());
flowScheduler.add(mw_meaningRoutineEachFrame());
flowScheduler.add(mw_meaningRoutineEnd());
const block_immediateLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_immediateLoopBegin(block_immediateLoopScheduler));
flowScheduler.add(block_immediateLoopScheduler);
flowScheduler.add(block_immediateLoopEnd);
flowScheduler.add(distract_instructRoutineBegin());
flowScheduler.add(distract_instructRoutineEachFrame());
flowScheduler.add(distract_instructRoutineEnd());
const block_distractLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_distractLoopBegin(block_distractLoopScheduler));
flowScheduler.add(block_distractLoopScheduler);
flowScheduler.add(block_distractLoopEnd);
flowScheduler.add(ltm_instructRoutineBegin());
flowScheduler.add(ltm_instructRoutineEachFrame());
flowScheduler.add(ltm_instructRoutineEnd());
const trials_delayLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_delayLoopBegin(trials_delayLoopScheduler));
flowScheduler.add(trials_delayLoopScheduler);
flowScheduler.add(trials_delayLoopEnd);
flowScheduler.add(mw_q_instructRoutineBegin());
flowScheduler.add(mw_q_instructRoutineEachFrame());
flowScheduler.add(mw_q_instructRoutineEnd());
const maas_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(maas_trialsLoopBegin(maas_trialsLoopScheduler));
flowScheduler.add(maas_trialsLoopScheduler);
flowScheduler.add(maas_trialsLoopEnd);
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
    {'name': 'block_conds.csv', 'path': 'block_conds.csv'},
    {'name': 'practice_2.csv', 'path': 'practice_2.csv'},
    {'name': 'practice_1.csv', 'path': 'practice_1.csv'},
    {'name': 'words_text.csv', 'path': 'words_text.csv'},
    {'name': 'distract_conds.csv', 'path': 'distract_conds.csv'},
    {'name': 'maas.csv', 'path': 'maas.csv'},
    {'name': 'practice_3.csv', 'path': 'practice_3.csv'}
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
  
  return Scheduler.Event.NEXT;
}


var exp_setupClock;
var words;
var words_presented;
var nums;
var block_total;
var block_n;
var trial_n;
var trial_n_ltm;
var trial_length;
var i;
var exp_instructClock;
var text_5;
var key_resp_6;
var practice_instructions_1Clock;
var text_instructions_2;
var key_resp_7;
var trial_setupClock;
var fixationClock;
var fix_cross;
var stim_present_practiceClock;
var stim_2;
var test_immediate_practiceClock;
var immediate_test_resp_2;
var key_resp_17;
var text_14;
var feedback_1Clock;
var text_8;
var key_resp_11;
var practice_instructions_2Clock;
var text_instructions_3;
var key_resp_8;
var parity_practiceClock;
var text_parity_2;
var key_resp_parity_2;
var feedback_2Clock;
var text_10;
var key_resp_12;
var practice_instructions_3Clock;
var text_instructions_4;
var key_resp_9;
var instructionsClock;
var text_instructions;
var key_resp;
var instructions_mwClock;
var text_instructions_5;
var key_resp_14;
var mw_meaningClock;
var text_11;
var key_resp_16;
var stim_presentClock;
var stim;
var parityClock;
var text_parity;
var key_resp_parity;
var test_immediateClock;
var immediate_test_resp;
var key_resp_3;
var text_6;
var mw_probeClock;
var text_2;
var key_resp_mw_probe;
var end_blockClock;
var text;
var key_resp_2;
var distract_instructClock;
var text_4;
var key_resp_5;
var distract_remindClock;
var text_17;
var key_resp_20;
var go_nogo_trialClock;
var distract_stim;
var key_resp_distract;
var distract_mwClock;
var text_13;
var resp_distract_mw;
var key_resp_13;
var ltm_instructClock;
var text_7;
var key_resp_10;
var stim_present_delayClock;
var target_text;
var lure_text;
var key_resp_ltm;
var continue_trialClock;
var text_3;
var key_resp_4;
var mw_q_instructClock;
var text_15;
var text_number_2;
var text_text_2;
var mw_q_continue_2;
var key_resp_18;
var mw_questionsClock;
var mw_q_text_2;
var text_number;
var text_text;
var slider_maas;
var key_resp_19;
var text_16;
var endClock;
var text_12;
var key_resp_15;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "exp_setup"
  exp_setupClock = new util.Clock();
  words = [];
  words_presented = [];
  nums = [1, 2, 3, 4, 5, 6, 7, 8];
  block_total = 6;
  block_n = 1;
  trial_n = 0;
  trial_n_ltm = 0;
  trial_length = 4;
  i = 0;
  
  document.body.style.cursor='none';
  
  // Initialize components for Routine "exp_instruct"
  exp_instructClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Welcome to the experiment! \n\nIn this experiment, you will be completing several tasks. During the first task, your job will be to remember a list of words. Sometimes, we will ask you to do a second task while you are learning the list of words.\n\nBefore you get started, you will practice each of the tasks individually.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions_1"
  practice_instructions_1Clock = new util.Clock();
  text_instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_2',
    text: 'Let’s practice the first task.\n\nIn this task, you will first see a cross in the center of the screen. This is your warning that the words are about to appear and you should get ready. After the cross, you will then see a single word in the center of the screen. It will then disappear and then you will see another word appear. This will repeat for four words total.\n\nAfter all the words have been presented, you will be asked to recall as many words as possible in the order they were presented. Please type one word at a time and hit ENTER to submit. \n\nDuring the practice, you will receive feedback about your performance. \n\nPress SPACE to start the practice.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_setup"
  trial_setupClock = new util.Clock();
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fix_cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "stim_present_practice"
  stim_present_practiceClock = new util.Clock();
  stim_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "test_immediate_practice"
  test_immediate_practiceClock = new util.Clock();
  immediate_test_resp_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'immediate_test_resp_2',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: "Please type all the words that you remember in the order that they were presented. Press ENTER to submit each word. If you don't remember a word, press ENTER to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "feedback_1"
  feedback_1Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions_2"
  practice_instructions_2Clock = new util.Clock();
  text_instructions_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_3',
    text: 'Now, we’ll practice the second task. \n\nIn this task, you may see a number in the center of the screen. Your job is to decide if the number is even or odd.\n\nPlease try to respond as quickly and accurately as possible.\n\nPress E if the number is even and O if the number is odd.\n\nDuring the practice, you will receive feedback about your performance. \n\nPress SPACE to start the practice.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "parity_practice"
  parity_practiceClock = new util.Clock();
  text_parity_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_parity_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  key_resp_parity_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_2"
  feedback_2Clock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions_3"
  practice_instructions_3Clock = new util.Clock();
  text_instructions_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_4',
    text: 'Now, we are going to combine the tasks.\n\nOn each trial, you will see a word, followed by two numbers. Again, you will decide if each number is even or odd. This will repeat four times. After you have seen all of the words, you will be asked to recall as many words as you can remember in the order they were originally presented in.\n\nRemember, for the number task, press E if the number is even and O if the number is odd.\n\nPress SPACE to start the practice.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: 'Now we are going to begin the real experiment.\n\nEverything will be the same as in the practice. On some trials, you will just see the words and on other trials you will see the words and the numbers.\n\nRemember, both tasks are important! Please try to respond as quickly and accurately as possible.\n\nAfter each trial, you will be asked to indicate what you were just thinking about. It is perfectly normal to think about things that are not related to the task. \n\nWe will give you several categories of things that people might think about during tasks like these. Please try your best to honestly assess your thoughts and choose a category that best describes your thoughts at the time when we ask.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_mw"
  instructions_mwClock = new util.Clock();
  text_instructions_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_5',
    text: 'When we ask you what you were just thinking about, you will press a number on your keyboard that corresponds to different options. \n\nDon’t worry, you don’t have to remember the options! We’ll show you the numbers and corresponding options when we ask. \n\nOn the next screen, we’ll show you an explanation of what we mean by each option.\n\nPress SPACE to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mw_meaning"
  mw_meaningClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Below are the different options and corresponding number that you will press:\n\n1) The word task: for thoughts about the list of words, required responses, or word task goals\n2) The number task: for thoughts about the numbers, required responses, or number task goals\n3) Both tasks: for thoughts about the words and numbers, required responses, or both task goals\n4) Task experience/performance: for thoughts\nabout your performance or task difficulty \n5) Something else: for thoughts about normal events in the recent or distant past or future, your physical or emotional state, your life concerns, fantasies or thoughts disconnected from reality, thoughts about objects or task unrelated events in the room, or any thoughts not captured by the other choices\n\nWhen you are ready to begin the experiment, press SPACE.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stim_present"
  stim_presentClock = new util.Clock();
  stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "parity"
  parityClock = new util.Clock();
  text_parity = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_parity',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  key_resp_parity = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_immediate"
  test_immediateClock = new util.Clock();
  immediate_test_resp = new visual.TextBox({
    win: psychoJS.window,
    name: 'immediate_test_resp',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: "Please type all the words that you remember in the order that they were presented. Press ENTER to submit each word. If you don't remember a word, press ENTER to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "mw_probe"
  mw_probeClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'What were you thinking about during this trial?\n\n1) The word task\n2) The number task\n3) Both tasks\n4) Task experience/performance\n5) Something else\n\nSelect an option to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_mw_probe = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_block"
  end_blockClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "distract_instruct"
  distract_instructClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'You have finished the first test!\n\nNow you will begin the second test. During this test, you will first see a cross in the center of the screen. Again, this is your cue to get ready. You will then see a circle in the center of the screen. If the circle is green, press SPACE. If this circle is blue, do NOT press any key. A new circle will appear and you will repeat this process. \n\n\nPress SPACE when you are ready to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "distract_remind"
  distract_remindClock = new util.Clock();
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Remember:\nGREEN circle = Press SPACE\nBLUE circle = Do NOT press\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "go_nogo_trial"
  go_nogo_trialClock = new util.Clock();
  distract_stim = new visual.Polygon({
    win: psychoJS.window, name: 'distract_stim', 
    edges: 100, size:[0.3, 0.3],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  key_resp_distract = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "distract_mw"
  distract_mwClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'During the previous trials, how much of the time were you thinking about something other than the task?\n\nPress SPACE to submit your answer.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  resp_distract_mw = new visual.Slider({
    win: psychoJS.window, name: 'resp_distract_mw',
    size: [1.0, 0.1], pos: [0, (- 0.25)], units: 'height',
    labels: ["1\nNone of the time", "10\nAll of the time"], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ltm_instruct"
  ltm_instructClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'You have finished the second task!\n\nFor the last task, you will see two words presented on the screen. One of the words will be from the first memory task and one will be a completely new word. Your job is to decide which word you saw earlier.\n\nIf you think the left word was presented earlier, press the LEFT arrow key. If you think the right word was presented earlier, press the RIGHT arrow key.\n\nPress SPACE to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stim_present_delay"
  stim_present_delayClock = new util.Clock();
  target_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  lure_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'lure_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_ltm = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "continue_trial"
  continue_trialClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mw_q_instruct"
  mw_q_instructClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Congratulations, you have finished the last test!\n\nWe have a few final questions and then you are finished.\n\nNow we will present a collection of statements about your everyday experience. Using the 1-6 scale below, please indicate how frequently or infrequently you currently have each experience. Please answer according to what really reflects your experience rather than what you think your experience should be. Please treat each item separately from every other item.  ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_number_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_number_2',
    text: '1       2        3        4          5       6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: 500.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_text_2',
    text: '  Almost         Very        Somewhat     Somewhat           Very          Almost\n always     frequently    frequently     infrequently    infrequently    never',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: 500.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mw_q_continue_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'mw_q_continue_2',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mw_questions"
  mw_questionsClock = new util.Clock();
  mw_q_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'mw_q_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  text_number = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_number',
    text: '1       2        3        4          5      6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.06,  wrapWidth: 500.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_text',
    text: '  Almost         Very        Somewhat     Somewhat           Very          Almost\n always     frequently    frequently     infrequently    infrequently    never',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: 500.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  slider_maas = new visual.Slider({
    win: psychoJS.window, name: 'slider_maas',
    size: [1.0, 0.05], pos: [0, (- 0.25)], units: 'height',
    labels: [1, 2, 3, 4, 5, 6], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  key_resp_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'Press SPACE to submit.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'You have reached the end of the experiment.\n\nThank you again for your participation!\n\nPress SPACE to exit.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var setup_loop;
var currentLoop;
function setup_loopLoopBegin(setup_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    setup_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'words_text.csv',
      seed: undefined, name: 'setup_loop'
    });
    psychoJS.experiment.addLoop(setup_loop); // add the loop to the experiment
    currentLoop = setup_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSetup_loop of setup_loop) {
      const snapshot = setup_loop.getSnapshot();
      setup_loopLoopScheduler.add(importConditions(snapshot));
      setup_loopLoopScheduler.add(exp_setupRoutineBegin(snapshot));
      setup_loopLoopScheduler.add(exp_setupRoutineEachFrame());
      setup_loopLoopScheduler.add(exp_setupRoutineEnd());
      setup_loopLoopScheduler.add(endLoopIteration(setup_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function setup_loopLoopEnd() {
  psychoJS.experiment.removeLoop(setup_loop);

  return Scheduler.Event.NEXT;
}


var practice_1;
function practice_1LoopBegin(practice_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_1.csv',
      seed: undefined, name: 'practice_1'
    });
    psychoJS.experiment.addLoop(practice_1); // add the loop to the experiment
    currentLoop = practice_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_1 of practice_1) {
      const snapshot = practice_1.getSnapshot();
      practice_1LoopScheduler.add(importConditions(snapshot));
      practice_1LoopScheduler.add(trial_setupRoutineBegin(snapshot));
      practice_1LoopScheduler.add(trial_setupRoutineEachFrame());
      practice_1LoopScheduler.add(trial_setupRoutineEnd());
      practice_1LoopScheduler.add(fixationRoutineBegin(snapshot));
      practice_1LoopScheduler.add(fixationRoutineEachFrame());
      practice_1LoopScheduler.add(fixationRoutineEnd());
      const practice_1_presentLoopScheduler = new Scheduler(psychoJS);
      practice_1LoopScheduler.add(practice_1_presentLoopBegin(practice_1_presentLoopScheduler, snapshot));
      practice_1LoopScheduler.add(practice_1_presentLoopScheduler);
      practice_1LoopScheduler.add(practice_1_presentLoopEnd);
      const practice_test_1LoopScheduler = new Scheduler(psychoJS);
      practice_1LoopScheduler.add(practice_test_1LoopBegin(practice_test_1LoopScheduler, snapshot));
      practice_1LoopScheduler.add(practice_test_1LoopScheduler);
      practice_1LoopScheduler.add(practice_test_1LoopEnd);
      practice_1LoopScheduler.add(feedback_1RoutineBegin(snapshot));
      practice_1LoopScheduler.add(feedback_1RoutineEachFrame());
      practice_1LoopScheduler.add(feedback_1RoutineEnd());
      practice_1LoopScheduler.add(endLoopIteration(practice_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practice_1_present;
function practice_1_presentLoopBegin(practice_1_presentLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_1_present = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_1_present'
    });
    psychoJS.experiment.addLoop(practice_1_present); // add the loop to the experiment
    currentLoop = practice_1_present;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_1_present of practice_1_present) {
      const snapshot = practice_1_present.getSnapshot();
      practice_1_presentLoopScheduler.add(importConditions(snapshot));
      practice_1_presentLoopScheduler.add(stim_present_practiceRoutineBegin(snapshot));
      practice_1_presentLoopScheduler.add(stim_present_practiceRoutineEachFrame());
      practice_1_presentLoopScheduler.add(stim_present_practiceRoutineEnd());
      practice_1_presentLoopScheduler.add(endLoopIteration(practice_1_presentLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_1_presentLoopEnd() {
  psychoJS.experiment.removeLoop(practice_1_present);

  return Scheduler.Event.NEXT;
}


var practice_test_1;
function practice_test_1LoopBegin(practice_test_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_test_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_test_1'
    });
    psychoJS.experiment.addLoop(practice_test_1); // add the loop to the experiment
    currentLoop = practice_test_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_test_1 of practice_test_1) {
      const snapshot = practice_test_1.getSnapshot();
      practice_test_1LoopScheduler.add(importConditions(snapshot));
      practice_test_1LoopScheduler.add(test_immediate_practiceRoutineBegin(snapshot));
      practice_test_1LoopScheduler.add(test_immediate_practiceRoutineEachFrame());
      practice_test_1LoopScheduler.add(test_immediate_practiceRoutineEnd());
      practice_test_1LoopScheduler.add(endLoopIteration(practice_test_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_test_1LoopEnd() {
  psychoJS.experiment.removeLoop(practice_test_1);

  return Scheduler.Event.NEXT;
}


async function practice_1LoopEnd() {
  psychoJS.experiment.removeLoop(practice_1);

  return Scheduler.Event.NEXT;
}


var practice_2;
function practice_2LoopBegin(practice_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_2.csv',
      seed: undefined, name: 'practice_2'
    });
    psychoJS.experiment.addLoop(practice_2); // add the loop to the experiment
    currentLoop = practice_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_2 of practice_2) {
      const snapshot = practice_2.getSnapshot();
      practice_2LoopScheduler.add(importConditions(snapshot));
      practice_2LoopScheduler.add(parity_practiceRoutineBegin(snapshot));
      practice_2LoopScheduler.add(parity_practiceRoutineEachFrame());
      practice_2LoopScheduler.add(parity_practiceRoutineEnd());
      practice_2LoopScheduler.add(feedback_2RoutineBegin(snapshot));
      practice_2LoopScheduler.add(feedback_2RoutineEachFrame());
      practice_2LoopScheduler.add(feedback_2RoutineEnd());
      practice_2LoopScheduler.add(endLoopIteration(practice_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_2LoopEnd() {
  psychoJS.experiment.removeLoop(practice_2);

  return Scheduler.Event.NEXT;
}


var practice_3;
function practice_3LoopBegin(practice_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_3.csv',
      seed: undefined, name: 'practice_3'
    });
    psychoJS.experiment.addLoop(practice_3); // add the loop to the experiment
    currentLoop = practice_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_3 of practice_3) {
      const snapshot = practice_3.getSnapshot();
      practice_3LoopScheduler.add(importConditions(snapshot));
      practice_3LoopScheduler.add(trial_setupRoutineBegin(snapshot));
      practice_3LoopScheduler.add(trial_setupRoutineEachFrame());
      practice_3LoopScheduler.add(trial_setupRoutineEnd());
      practice_3LoopScheduler.add(fixationRoutineBegin(snapshot));
      practice_3LoopScheduler.add(fixationRoutineEachFrame());
      practice_3LoopScheduler.add(fixationRoutineEnd());
      const stim_presentation_practiceLoopScheduler = new Scheduler(psychoJS);
      practice_3LoopScheduler.add(stim_presentation_practiceLoopBegin(stim_presentation_practiceLoopScheduler, snapshot));
      practice_3LoopScheduler.add(stim_presentation_practiceLoopScheduler);
      practice_3LoopScheduler.add(stim_presentation_practiceLoopEnd);
      const practice_test_2LoopScheduler = new Scheduler(psychoJS);
      practice_3LoopScheduler.add(practice_test_2LoopBegin(practice_test_2LoopScheduler, snapshot));
      practice_3LoopScheduler.add(practice_test_2LoopScheduler);
      practice_3LoopScheduler.add(practice_test_2LoopEnd);
      practice_3LoopScheduler.add(feedback_1RoutineBegin(snapshot));
      practice_3LoopScheduler.add(feedback_1RoutineEachFrame());
      practice_3LoopScheduler.add(feedback_1RoutineEnd());
      practice_3LoopScheduler.add(endLoopIteration(practice_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var stim_presentation_practice;
function stim_presentation_practiceLoopBegin(stim_presentation_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stim_presentation_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'stim_presentation_practice'
    });
    psychoJS.experiment.addLoop(stim_presentation_practice); // add the loop to the experiment
    currentLoop = stim_presentation_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStim_presentation_practice of stim_presentation_practice) {
      const snapshot = stim_presentation_practice.getSnapshot();
      stim_presentation_practiceLoopScheduler.add(importConditions(snapshot));
      stim_presentation_practiceLoopScheduler.add(stim_present_practiceRoutineBegin(snapshot));
      stim_presentation_practiceLoopScheduler.add(stim_present_practiceRoutineEachFrame());
      stim_presentation_practiceLoopScheduler.add(stim_present_practiceRoutineEnd());
      const practice_parityLoopScheduler = new Scheduler(psychoJS);
      stim_presentation_practiceLoopScheduler.add(practice_parityLoopBegin(practice_parityLoopScheduler, snapshot));
      stim_presentation_practiceLoopScheduler.add(practice_parityLoopScheduler);
      stim_presentation_practiceLoopScheduler.add(practice_parityLoopEnd);
      stim_presentation_practiceLoopScheduler.add(endLoopIteration(stim_presentation_practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practice_parity;
function practice_parityLoopBegin(practice_parityLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_parity = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_parity'
    });
    psychoJS.experiment.addLoop(practice_parity); // add the loop to the experiment
    currentLoop = practice_parity;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_parity of practice_parity) {
      const snapshot = practice_parity.getSnapshot();
      practice_parityLoopScheduler.add(importConditions(snapshot));
      practice_parityLoopScheduler.add(parity_practiceRoutineBegin(snapshot));
      practice_parityLoopScheduler.add(parity_practiceRoutineEachFrame());
      practice_parityLoopScheduler.add(parity_practiceRoutineEnd());
      practice_parityLoopScheduler.add(endLoopIteration(practice_parityLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_parityLoopEnd() {
  psychoJS.experiment.removeLoop(practice_parity);

  return Scheduler.Event.NEXT;
}


async function stim_presentation_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(stim_presentation_practice);

  return Scheduler.Event.NEXT;
}


var practice_test_2;
function practice_test_2LoopBegin(practice_test_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_test_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_test_2'
    });
    psychoJS.experiment.addLoop(practice_test_2); // add the loop to the experiment
    currentLoop = practice_test_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_test_2 of practice_test_2) {
      const snapshot = practice_test_2.getSnapshot();
      practice_test_2LoopScheduler.add(importConditions(snapshot));
      practice_test_2LoopScheduler.add(test_immediate_practiceRoutineBegin(snapshot));
      practice_test_2LoopScheduler.add(test_immediate_practiceRoutineEachFrame());
      practice_test_2LoopScheduler.add(test_immediate_practiceRoutineEnd());
      practice_test_2LoopScheduler.add(endLoopIteration(practice_test_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_test_2LoopEnd() {
  psychoJS.experiment.removeLoop(practice_test_2);

  return Scheduler.Event.NEXT;
}


async function practice_3LoopEnd() {
  psychoJS.experiment.removeLoop(practice_3);

  return Scheduler.Event.NEXT;
}


var block_immediate;
function block_immediateLoopBegin(block_immediateLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_immediate = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'block_conds.csv',
      seed: undefined, name: 'block_immediate'
    });
    psychoJS.experiment.addLoop(block_immediate); // add the loop to the experiment
    currentLoop = block_immediate;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock_immediate of block_immediate) {
      const snapshot = block_immediate.getSnapshot();
      block_immediateLoopScheduler.add(importConditions(snapshot));
      const trials_immediateLoopScheduler = new Scheduler(psychoJS);
      block_immediateLoopScheduler.add(trials_immediateLoopBegin(trials_immediateLoopScheduler, snapshot));
      block_immediateLoopScheduler.add(trials_immediateLoopScheduler);
      block_immediateLoopScheduler.add(trials_immediateLoopEnd);
      block_immediateLoopScheduler.add(end_blockRoutineBegin(snapshot));
      block_immediateLoopScheduler.add(end_blockRoutineEachFrame());
      block_immediateLoopScheduler.add(end_blockRoutineEnd());
      block_immediateLoopScheduler.add(endLoopIteration(block_immediateLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_immediate;
function trials_immediateLoopBegin(trials_immediateLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_immediate = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 7, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_immediate'
    });
    psychoJS.experiment.addLoop(trials_immediate); // add the loop to the experiment
    currentLoop = trials_immediate;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_immediate of trials_immediate) {
      const snapshot = trials_immediate.getSnapshot();
      trials_immediateLoopScheduler.add(importConditions(snapshot));
      trials_immediateLoopScheduler.add(trial_setupRoutineBegin(snapshot));
      trials_immediateLoopScheduler.add(trial_setupRoutineEachFrame());
      trials_immediateLoopScheduler.add(trial_setupRoutineEnd());
      trials_immediateLoopScheduler.add(fixationRoutineBegin(snapshot));
      trials_immediateLoopScheduler.add(fixationRoutineEachFrame());
      trials_immediateLoopScheduler.add(fixationRoutineEnd());
      const stim_presentation_loopLoopScheduler = new Scheduler(psychoJS);
      trials_immediateLoopScheduler.add(stim_presentation_loopLoopBegin(stim_presentation_loopLoopScheduler, snapshot));
      trials_immediateLoopScheduler.add(stim_presentation_loopLoopScheduler);
      trials_immediateLoopScheduler.add(stim_presentation_loopLoopEnd);
      const test_immediate_loopLoopScheduler = new Scheduler(psychoJS);
      trials_immediateLoopScheduler.add(test_immediate_loopLoopBegin(test_immediate_loopLoopScheduler, snapshot));
      trials_immediateLoopScheduler.add(test_immediate_loopLoopScheduler);
      trials_immediateLoopScheduler.add(test_immediate_loopLoopEnd);
      trials_immediateLoopScheduler.add(mw_probeRoutineBegin(snapshot));
      trials_immediateLoopScheduler.add(mw_probeRoutineEachFrame());
      trials_immediateLoopScheduler.add(mw_probeRoutineEnd());
      trials_immediateLoopScheduler.add(endLoopIteration(trials_immediateLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var stim_presentation_loop;
function stim_presentation_loopLoopBegin(stim_presentation_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stim_presentation_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'stim_presentation_loop'
    });
    psychoJS.experiment.addLoop(stim_presentation_loop); // add the loop to the experiment
    currentLoop = stim_presentation_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStim_presentation_loop of stim_presentation_loop) {
      const snapshot = stim_presentation_loop.getSnapshot();
      stim_presentation_loopLoopScheduler.add(importConditions(snapshot));
      stim_presentation_loopLoopScheduler.add(stim_presentRoutineBegin(snapshot));
      stim_presentation_loopLoopScheduler.add(stim_presentRoutineEachFrame());
      stim_presentation_loopLoopScheduler.add(stim_presentRoutineEnd());
      const parity_loopLoopScheduler = new Scheduler(psychoJS);
      stim_presentation_loopLoopScheduler.add(parity_loopLoopBegin(parity_loopLoopScheduler, snapshot));
      stim_presentation_loopLoopScheduler.add(parity_loopLoopScheduler);
      stim_presentation_loopLoopScheduler.add(parity_loopLoopEnd);
      stim_presentation_loopLoopScheduler.add(endLoopIteration(stim_presentation_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var parity_loop;
function parity_loopLoopBegin(parity_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    parity_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'parity_loop'
    });
    psychoJS.experiment.addLoop(parity_loop); // add the loop to the experiment
    currentLoop = parity_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisParity_loop of parity_loop) {
      const snapshot = parity_loop.getSnapshot();
      parity_loopLoopScheduler.add(importConditions(snapshot));
      parity_loopLoopScheduler.add(parityRoutineBegin(snapshot));
      parity_loopLoopScheduler.add(parityRoutineEachFrame());
      parity_loopLoopScheduler.add(parityRoutineEnd());
      parity_loopLoopScheduler.add(endLoopIteration(parity_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function parity_loopLoopEnd() {
  psychoJS.experiment.removeLoop(parity_loop);

  return Scheduler.Event.NEXT;
}


async function stim_presentation_loopLoopEnd() {
  psychoJS.experiment.removeLoop(stim_presentation_loop);

  return Scheduler.Event.NEXT;
}


var test_immediate_loop;
function test_immediate_loopLoopBegin(test_immediate_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_immediate_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'test_immediate_loop'
    });
    psychoJS.experiment.addLoop(test_immediate_loop); // add the loop to the experiment
    currentLoop = test_immediate_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_immediate_loop of test_immediate_loop) {
      const snapshot = test_immediate_loop.getSnapshot();
      test_immediate_loopLoopScheduler.add(importConditions(snapshot));
      test_immediate_loopLoopScheduler.add(test_immediateRoutineBegin(snapshot));
      test_immediate_loopLoopScheduler.add(test_immediateRoutineEachFrame());
      test_immediate_loopLoopScheduler.add(test_immediateRoutineEnd());
      test_immediate_loopLoopScheduler.add(endLoopIteration(test_immediate_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_immediate_loopLoopEnd() {
  psychoJS.experiment.removeLoop(test_immediate_loop);

  return Scheduler.Event.NEXT;
}


async function trials_immediateLoopEnd() {
  psychoJS.experiment.removeLoop(trials_immediate);

  return Scheduler.Event.NEXT;
}


async function block_immediateLoopEnd() {
  psychoJS.experiment.removeLoop(block_immediate);

  return Scheduler.Event.NEXT;
}


var block_distract;
function block_distractLoopBegin(block_distractLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_distract = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block_distract'
    });
    psychoJS.experiment.addLoop(block_distract); // add the loop to the experiment
    currentLoop = block_distract;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock_distract of block_distract) {
      const snapshot = block_distract.getSnapshot();
      block_distractLoopScheduler.add(importConditions(snapshot));
      block_distractLoopScheduler.add(distract_remindRoutineBegin(snapshot));
      block_distractLoopScheduler.add(distract_remindRoutineEachFrame());
      block_distractLoopScheduler.add(distract_remindRoutineEnd());
      block_distractLoopScheduler.add(fixationRoutineBegin(snapshot));
      block_distractLoopScheduler.add(fixationRoutineEachFrame());
      block_distractLoopScheduler.add(fixationRoutineEnd());
      const trials_nogoLoopScheduler = new Scheduler(psychoJS);
      block_distractLoopScheduler.add(trials_nogoLoopBegin(trials_nogoLoopScheduler, snapshot));
      block_distractLoopScheduler.add(trials_nogoLoopScheduler);
      block_distractLoopScheduler.add(trials_nogoLoopEnd);
      block_distractLoopScheduler.add(distract_mwRoutineBegin(snapshot));
      block_distractLoopScheduler.add(distract_mwRoutineEachFrame());
      block_distractLoopScheduler.add(distract_mwRoutineEnd());
      block_distractLoopScheduler.add(end_blockRoutineBegin(snapshot));
      block_distractLoopScheduler.add(end_blockRoutineEachFrame());
      block_distractLoopScheduler.add(end_blockRoutineEnd());
      block_distractLoopScheduler.add(endLoopIteration(block_distractLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_nogo;
function trials_nogoLoopBegin(trials_nogoLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_nogo = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 15, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'distract_conds.csv',
      seed: undefined, name: 'trials_nogo'
    });
    psychoJS.experiment.addLoop(trials_nogo); // add the loop to the experiment
    currentLoop = trials_nogo;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_nogo of trials_nogo) {
      const snapshot = trials_nogo.getSnapshot();
      trials_nogoLoopScheduler.add(importConditions(snapshot));
      trials_nogoLoopScheduler.add(go_nogo_trialRoutineBegin(snapshot));
      trials_nogoLoopScheduler.add(go_nogo_trialRoutineEachFrame());
      trials_nogoLoopScheduler.add(go_nogo_trialRoutineEnd());
      trials_nogoLoopScheduler.add(endLoopIteration(trials_nogoLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_nogoLoopEnd() {
  psychoJS.experiment.removeLoop(trials_nogo);

  return Scheduler.Event.NEXT;
}


async function block_distractLoopEnd() {
  psychoJS.experiment.removeLoop(block_distract);

  return Scheduler.Event.NEXT;
}


var trials_delay;
function trials_delayLoopBegin(trials_delayLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_delay = new TrialHandler({
      psychoJS: psychoJS,
      nReps: ltm_length, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_delay'
    });
    psychoJS.experiment.addLoop(trials_delay); // add the loop to the experiment
    currentLoop = trials_delay;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_delay of trials_delay) {
      const snapshot = trials_delay.getSnapshot();
      trials_delayLoopScheduler.add(importConditions(snapshot));
      trials_delayLoopScheduler.add(fixationRoutineBegin(snapshot));
      trials_delayLoopScheduler.add(fixationRoutineEachFrame());
      trials_delayLoopScheduler.add(fixationRoutineEnd());
      trials_delayLoopScheduler.add(stim_present_delayRoutineBegin(snapshot));
      trials_delayLoopScheduler.add(stim_present_delayRoutineEachFrame());
      trials_delayLoopScheduler.add(stim_present_delayRoutineEnd());
      trials_delayLoopScheduler.add(continue_trialRoutineBegin(snapshot));
      trials_delayLoopScheduler.add(continue_trialRoutineEachFrame());
      trials_delayLoopScheduler.add(continue_trialRoutineEnd());
      trials_delayLoopScheduler.add(endLoopIteration(trials_delayLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_delayLoopEnd() {
  psychoJS.experiment.removeLoop(trials_delay);

  return Scheduler.Event.NEXT;
}


var maas_trials;
function maas_trialsLoopBegin(maas_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    maas_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'maas.csv',
      seed: undefined, name: 'maas_trials'
    });
    psychoJS.experiment.addLoop(maas_trials); // add the loop to the experiment
    currentLoop = maas_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMaas_trial of maas_trials) {
      const snapshot = maas_trials.getSnapshot();
      maas_trialsLoopScheduler.add(importConditions(snapshot));
      maas_trialsLoopScheduler.add(mw_questionsRoutineBegin(snapshot));
      maas_trialsLoopScheduler.add(mw_questionsRoutineEachFrame());
      maas_trialsLoopScheduler.add(mw_questionsRoutineEnd());
      maas_trialsLoopScheduler.add(endLoopIteration(maas_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function maas_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(maas_trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var exp_setupComponents;
function exp_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exp_setup'-------
    t = 0;
    exp_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    words.push([WordsStimuli]);
    
    // keep track of which components have finished
    exp_setupComponents = [];
    
    for (const thisComponent of exp_setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exp_setup'-------
    // get current time
    t = exp_setupClock.getTime();
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
    for (const thisComponent of exp_setupComponents)
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


function exp_setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'exp_setup'-------
    for (const thisComponent of exp_setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "exp_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var exp_instructComponents;
function exp_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exp_instruct'-------
    t = 0;
    exp_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    exp_instructComponents = [];
    exp_instructComponents.push(text_5);
    exp_instructComponents.push(key_resp_6);
    
    for (const thisComponent of exp_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exp_instruct'-------
    // get current time
    t = exp_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_instructComponents)
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


function exp_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'exp_instruct'-------
    for (const thisComponent of exp_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_6.stop();
    // the Routine "exp_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
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
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    practice_instructions_1Components = [];
    practice_instructions_1Components.push(text_instructions_2);
    practice_instructions_1Components.push(key_resp_7);
    
    for (const thisComponent of practice_instructions_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *text_instructions_2* updates
    if (t >= 0.0 && text_instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_2.tStart = t;  // (not accounting for frame time here)
      text_instructions_2.frameNStart = frameN;  // exact frame index
      
      text_instructions_2.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 1.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_instructions_1Components)
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


function practice_instructions_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instructions_1'-------
    for (const thisComponent of practice_instructions_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_7.stop();
    // the Routine "practice_instructions_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_words;
var stim_n;
var resp_i;
var parity_n;
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
    trial_words = words.slice(i, (i + trial_length));
    stim_n = 0;
    resp_i = 0;
    parity_n = 0;
    
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
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fix_cross);
    
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
    
    // *fix_cross* updates
    if (t >= 0.0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross.setAutoDraw(false);
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


var word_present;
var stim_present_practiceComponents;
function stim_present_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stim_present_practice'-------
    t = 0;
    stim_present_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    word_present = trial_words[stim_n];
    words_presented.push([word_present, stim_n, trial_n]);
    
    stim_2.setText(word_present);
    // keep track of which components have finished
    stim_present_practiceComponents = [];
    stim_present_practiceComponents.push(stim_2);
    
    for (const thisComponent of stim_present_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stim_present_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stim_present_practice'-------
    // get current time
    t = stim_present_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_2* updates
    if (t >= 0.1 && stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_2.tStart = t;  // (not accounting for frame time here)
      stim_2.frameNStart = frameN;  // exact frame index
      
      stim_2.setAutoDraw(true);
    }

    frameRemains = 0.1 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim_2.setAutoDraw(false);
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
    for (const thisComponent of stim_present_practiceComponents)
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


function stim_present_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'stim_present_practice'-------
    for (const thisComponent of stim_present_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    stim_n += 1;
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_17_allKeys;
var test_immediate_practiceComponents;
function test_immediate_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test_immediate_practice'-------
    t = 0;
    test_immediate_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    immediate_test_resp_2.setText('');
    immediate_test_resp_2.refresh();
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    // keep track of which components have finished
    test_immediate_practiceComponents = [];
    test_immediate_practiceComponents.push(immediate_test_resp_2);
    test_immediate_practiceComponents.push(key_resp_17);
    test_immediate_practiceComponents.push(text_14);
    
    for (const thisComponent of test_immediate_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_immediate_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test_immediate_practice'-------
    // get current time
    t = test_immediate_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *immediate_test_resp_2* updates
    if (t >= 0.0 && immediate_test_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      immediate_test_resp_2.tStart = t;  // (not accounting for frame time here)
      immediate_test_resp_2.frameNStart = frameN;  // exact frame index
      
      immediate_test_resp_2.setAutoDraw(true);
    }

    
    // *key_resp_17* updates
    if (t >= 0.0 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_17.tStart = t;  // (not accounting for frame time here)
      key_resp_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
    }

    if (key_resp_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_17.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
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
    for (const thisComponent of test_immediate_practiceComponents)
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


function test_immediate_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'test_immediate_practice'-------
    for (const thisComponent of test_immediate_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    resp_i += 1;
    
    psychoJS.experiment.addData('immediate_test_resp_2.text',immediate_test_resp_2.text)
    key_resp_17.stop();
    // the Routine "test_immediate_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_msg;
var _key_resp_11_allKeys;
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
    feedback_msg = `The correct words were: ${trial_words[0]}, ${trial_words[1]}, ${trial_words[2]}, and ${trial_words[3]}
    
    
    Press SPACE to continue.`
    ;
    
    text_8.setText(feedback_msg);
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    feedback_1Components = [];
    feedback_1Components.push(text_8);
    feedback_1Components.push(key_resp_11);
    
    for (const thisComponent of feedback_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
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
    for (const thisComponent of feedback_1Components)
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


function feedback_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_1'-------
    for (const thisComponent of feedback_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    i += trial_length;
    
    key_resp_11.stop();
    // the Routine "feedback_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
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
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    practice_instructions_2Components = [];
    practice_instructions_2Components.push(text_instructions_3);
    practice_instructions_2Components.push(key_resp_8);
    
    for (const thisComponent of practice_instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *text_instructions_3* updates
    if (t >= 0.0 && text_instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_3.tStart = t;  // (not accounting for frame time here)
      text_instructions_3.frameNStart = frameN;  // exact frame index
      
      text_instructions_3.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 1.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
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
    for (const thisComponent of practice_instructions_2Components)
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


function practice_instructions_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instructions_2'-------
    for (const thisComponent of practice_instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_8.stop();
    // the Routine "practice_instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var parity_stim;
var corr_ans_parity;
var _key_resp_parity_2_allKeys;
var parity_practiceComponents;
function parity_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'parity_practice'-------
    t = 0;
    parity_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(nums);
    parity_stim = nums[0];
    if (((parity_stim % 2) === 0)) {
        corr_ans_parity = "e";
    } else {
        if (((parity_stim % 2) === 1)) {
            corr_ans_parity = "o";
        }
    }
    
    text_parity_2.setOpacity(parity_disp);
    text_parity_2.setText(parity_stim);
    key_resp_parity_2.keys = undefined;
    key_resp_parity_2.rt = undefined;
    _key_resp_parity_2_allKeys = [];
    // keep track of which components have finished
    parity_practiceComponents = [];
    parity_practiceComponents.push(text_parity_2);
    parity_practiceComponents.push(key_resp_parity_2);
    
    for (const thisComponent of parity_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function parity_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'parity_practice'-------
    // get current time
    t = parity_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_parity_2* updates
    if (t >= 0.1 && text_parity_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_parity_2.tStart = t;  // (not accounting for frame time here)
      text_parity_2.frameNStart = frameN;  // exact frame index
      
      text_parity_2.setAutoDraw(true);
    }

    frameRemains = 0.1 + parity_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_parity_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_parity_2.setAutoDraw(false);
    }
    
    // *key_resp_parity_2* updates
    if (t >= 0.0 && key_resp_parity_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_parity_2.tStart = t;  // (not accounting for frame time here)
      key_resp_parity_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_parity_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_parity_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_parity_2.clearEvents(); });
    }

    frameRemains = 0.0 + parity_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_parity_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_parity_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_parity_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_parity_2.getKeys({keyList: ['e', 'o'], waitRelease: false});
      _key_resp_parity_2_allKeys = _key_resp_parity_2_allKeys.concat(theseKeys);
      if (_key_resp_parity_2_allKeys.length > 0) {
        key_resp_parity_2.keys = _key_resp_parity_2_allKeys[0].name;  // just the first key pressed
        key_resp_parity_2.rt = _key_resp_parity_2_allKeys[0].rt;
        // was this correct?
        if (key_resp_parity_2.keys == corr_ans_parity) {
            key_resp_parity_2.corr = 1;
        } else {
            key_resp_parity_2.corr = 0;
        }
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
    for (const thisComponent of parity_practiceComponents)
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


function parity_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'parity_practice'-------
    for (const thisComponent of parity_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    parity_n += 1;
    
    // was no response the correct answer?!
    if (key_resp_parity_2.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans_parity)) {
         key_resp_parity_2.corr = 1;  // correct non-response
      } else {
         key_resp_parity_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_parity_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_parity_2.keys', key_resp_parity_2.keys);
    psychoJS.experiment.addData('key_resp_parity_2.corr', key_resp_parity_2.corr);
    if (typeof key_resp_parity_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_parity_2.rt', key_resp_parity_2.rt);
        }
    
    key_resp_parity_2.stop();
    // the Routine "parity_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
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
    feedback_msg = "";
    if ((key_resp_parity_2.corr === 1)) {
        feedback_msg = "Correct!";
    } else {
        if ((key_resp_parity_2.corr === 0)) {
            feedback_msg = `Incorrect. The correct response was ${corr_ans_parity}.`;
        }
    }
    feedback_msg += "\n\n\nPress SPACE to continue.";
    
    text_10.setText(feedback_msg);
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    feedback_2Components = [];
    feedback_2Components.push(text_10);
    feedback_2Components.push(key_resp_12);
    
    for (const thisComponent of feedback_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
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
    for (const thisComponent of feedback_2Components)
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


function feedback_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_2'-------
    for (const thisComponent of feedback_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_12.stop();
    // the Routine "feedback_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var practice_instructions_3Components;
function practice_instructions_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_instructions_3'-------
    t = 0;
    practice_instructions_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    practice_instructions_3Components = [];
    practice_instructions_3Components.push(text_instructions_4);
    practice_instructions_3Components.push(key_resp_9);
    
    for (const thisComponent of practice_instructions_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_instructions_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_instructions_3'-------
    // get current time
    t = practice_instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_4* updates
    if (t >= 0.0 && text_instructions_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_4.tStart = t;  // (not accounting for frame time here)
      text_instructions_4.frameNStart = frameN;  // exact frame index
      
      text_instructions_4.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 1.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
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
    for (const thisComponent of practice_instructions_3Components)
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


function practice_instructions_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instructions_3'-------
    for (const thisComponent of practice_instructions_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_9.stop();
    // the Routine "practice_instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
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
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    words_presented = [];
    trial_n = 0;
    
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_instructions);
    instructionsComponents.push(key_resp);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 1.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
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


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_14_allKeys;
var instructions_mwComponents;
function instructions_mwRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_mw'-------
    t = 0;
    instructions_mwClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // keep track of which components have finished
    instructions_mwComponents = [];
    instructions_mwComponents.push(text_instructions_5);
    instructions_mwComponents.push(key_resp_14);
    
    for (const thisComponent of instructions_mwComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_mwRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_mw'-------
    // get current time
    t = instructions_mwClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_5* updates
    if (t >= 0.0 && text_instructions_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_5.tStart = t;  // (not accounting for frame time here)
      text_instructions_5.frameNStart = frameN;  // exact frame index
      
      text_instructions_5.setAutoDraw(true);
    }

    
    // *key_resp_14* updates
    if (t >= 1.5 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }

    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
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
    for (const thisComponent of instructions_mwComponents)
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


function instructions_mwRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_mw'-------
    for (const thisComponent of instructions_mwComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_14.stop();
    // the Routine "instructions_mw" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_16_allKeys;
var mw_meaningComponents;
function mw_meaningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'mw_meaning'-------
    t = 0;
    mw_meaningClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    // keep track of which components have finished
    mw_meaningComponents = [];
    mw_meaningComponents.push(text_11);
    mw_meaningComponents.push(key_resp_16);
    
    for (const thisComponent of mw_meaningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mw_meaningRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'mw_meaning'-------
    // get current time
    t = mw_meaningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    
    // *key_resp_16* updates
    if (t >= 1.5 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }

    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
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
    for (const thisComponent of mw_meaningComponents)
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


function mw_meaningRoutineEnd() {
  return async function () {
    //------Ending Routine 'mw_meaning'-------
    for (const thisComponent of mw_meaningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_16.stop();
    // the Routine "mw_meaning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stim_presentComponents;
function stim_presentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stim_present'-------
    t = 0;
    stim_presentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    word_present = trial_words[stim_n];
    words_presented.push([word_present, stim_n, trial_n, block_type]);
    
    stim.setText(word_present);
    // keep track of which components have finished
    stim_presentComponents = [];
    stim_presentComponents.push(stim);
    
    for (const thisComponent of stim_presentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stim_presentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stim_present'-------
    // get current time
    t = stim_presentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim* updates
    if (t >= 0.1 && stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim.tStart = t;  // (not accounting for frame time here)
      stim.frameNStart = frameN;  // exact frame index
      
      stim.setAutoDraw(true);
    }

    frameRemains = 0.1 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim.setAutoDraw(false);
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
    for (const thisComponent of stim_presentComponents)
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


function stim_presentRoutineEnd() {
  return async function () {
    //------Ending Routine 'stim_present'-------
    for (const thisComponent of stim_presentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("word_presented", word_present);
    psychoJS.experiment.addData("serial_position", stim_n);
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("block_n", block_n);
    psychoJS.experiment.addData("block_type", block_type);
    stim_n += 1;
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_parity_allKeys;
var parityComponents;
function parityRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'parity'-------
    t = 0;
    parityClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(nums);
    parity_stim = nums[0];
    if (((parity_stim % 2) === 0)) {
        corr_ans_parity = "e";
    } else {
        if (((parity_stim % 2) === 1)) {
            corr_ans_parity = "o";
        }
    }
    
    text_parity.setOpacity(parity_disp);
    text_parity.setText(parity_stim);
    key_resp_parity.keys = undefined;
    key_resp_parity.rt = undefined;
    _key_resp_parity_allKeys = [];
    // keep track of which components have finished
    parityComponents = [];
    parityComponents.push(text_parity);
    parityComponents.push(key_resp_parity);
    
    for (const thisComponent of parityComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function parityRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'parity'-------
    // get current time
    t = parityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_parity* updates
    if (t >= 0.1 && text_parity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_parity.tStart = t;  // (not accounting for frame time here)
      text_parity.frameNStart = frameN;  // exact frame index
      
      text_parity.setAutoDraw(true);
    }

    frameRemains = 0.1 + parity_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_parity.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_parity.setAutoDraw(false);
    }
    
    // *key_resp_parity* updates
    if (t >= 0.0 && key_resp_parity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_parity.tStart = t;  // (not accounting for frame time here)
      key_resp_parity.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_parity.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_parity.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_parity.clearEvents(); });
    }

    frameRemains = 0.0 + parity_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_parity.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_parity.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_parity.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_parity.getKeys({keyList: ['e', 'o'], waitRelease: false});
      _key_resp_parity_allKeys = _key_resp_parity_allKeys.concat(theseKeys);
      if (_key_resp_parity_allKeys.length > 0) {
        key_resp_parity.keys = _key_resp_parity_allKeys[0].name;  // just the first key pressed
        key_resp_parity.rt = _key_resp_parity_allKeys[0].rt;
        // was this correct?
        if (key_resp_parity.keys == corr_ans_parity) {
            key_resp_parity.corr = 1;
        } else {
            key_resp_parity.corr = 0;
        }
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
    for (const thisComponent of parityComponents)
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


function parityRoutineEnd() {
  return async function () {
    //------Ending Routine 'parity'-------
    for (const thisComponent of parityComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("block_n", block_n);
    psychoJS.experiment.addData("parity_n", parity_n);
    psychoJS.experiment.addData("parity_stim", parity_stim);
    psychoJS.experiment.addData("block_type", block_type);
    parity_n += 1;
    
    // was no response the correct answer?!
    if (key_resp_parity.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans_parity)) {
         key_resp_parity.corr = 1;  // correct non-response
      } else {
         key_resp_parity.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_parity.corr, level);
    }
    psychoJS.experiment.addData('key_resp_parity.keys', key_resp_parity.keys);
    psychoJS.experiment.addData('key_resp_parity.corr', key_resp_parity.corr);
    if (typeof key_resp_parity.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_parity.rt', key_resp_parity.rt);
        }
    
    key_resp_parity.stop();
    // the Routine "parity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var test_immediateComponents;
function test_immediateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test_immediate'-------
    t = 0;
    test_immediateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    immediate_test_resp.setText('');
    immediate_test_resp.refresh();
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    test_immediateComponents = [];
    test_immediateComponents.push(immediate_test_resp);
    test_immediateComponents.push(key_resp_3);
    test_immediateComponents.push(text_6);
    
    for (const thisComponent of test_immediateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_immediateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test_immediate'-------
    // get current time
    t = test_immediateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *immediate_test_resp* updates
    if (t >= 0.0 && immediate_test_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      immediate_test_resp.tStart = t;  // (not accounting for frame time here)
      immediate_test_resp.frameNStart = frameN;  // exact frame index
      
      immediate_test_resp.setAutoDraw(true);
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
      let theseKeys = key_resp_3.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_immediateComponents)
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


function test_immediateRoutineEnd() {
  return async function () {
    //------Ending Routine 'test_immediate'-------
    for (const thisComponent of test_immediateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("serial_position_resp", resp_i);
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("block_n", block_n);
    psychoJS.experiment.addData("block_type", block_type);
    resp_i += 1;
    
    psychoJS.experiment.addData('immediate_test_resp.text',immediate_test_resp.text)
    key_resp_3.stop();
    // the Routine "test_immediate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_mw_probe_allKeys;
var mw_probeComponents;
function mw_probeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'mw_probe'-------
    t = 0;
    mw_probeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_mw_probe.keys = undefined;
    key_resp_mw_probe.rt = undefined;
    _key_resp_mw_probe_allKeys = [];
    i += trial_length;
    
    // keep track of which components have finished
    mw_probeComponents = [];
    mw_probeComponents.push(text_2);
    mw_probeComponents.push(key_resp_mw_probe);
    
    for (const thisComponent of mw_probeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mw_probeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'mw_probe'-------
    // get current time
    t = mw_probeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_mw_probe* updates
    if (t >= 0 && key_resp_mw_probe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_mw_probe.tStart = t;  // (not accounting for frame time here)
      key_resp_mw_probe.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_mw_probe.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mw_probe.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mw_probe.clearEvents(); });
    }

    if (key_resp_mw_probe.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_mw_probe.getKeys({keyList: ['1', '2', '3', '4', '5', '6'], waitRelease: false});
      _key_resp_mw_probe_allKeys = _key_resp_mw_probe_allKeys.concat(theseKeys);
      if (_key_resp_mw_probe_allKeys.length > 0) {
        key_resp_mw_probe.keys = _key_resp_mw_probe_allKeys[0].name;  // just the first key pressed
        key_resp_mw_probe.rt = _key_resp_mw_probe_allKeys[0].rt;
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
    for (const thisComponent of mw_probeComponents)
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


function mw_probeRoutineEnd() {
  return async function () {
    //------Ending Routine 'mw_probe'-------
    for (const thisComponent of mw_probeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_mw_probe.corr, level);
    }
    psychoJS.experiment.addData('key_resp_mw_probe.keys', key_resp_mw_probe.keys);
    if (typeof key_resp_mw_probe.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_mw_probe.rt', key_resp_mw_probe.rt);
        routineTimer.reset();
        }
    
    key_resp_mw_probe.stop();
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("block_n", block_n);
    psychoJS.experiment.addData("block_type", block_type);
    trial_n += 1;
    
    // the Routine "mw_probe" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var block_msg;
var _key_resp_2_allKeys;
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
    block_msg = `You have reached the end of block ${block_n} of ${block_total}.
    
    Press SPACE when you are ready to continue.`
    ;
    
    text.setText(block_msg);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    end_blockComponents = [];
    end_blockComponents.push(text);
    end_blockComponents.push(key_resp_2);
    
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
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 2 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
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


function end_blockRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_block'-------
    for (const thisComponent of end_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    block_n += 1;
    
    key_resp_2.stop();
    // the Routine "end_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var distract_instructComponents;
function distract_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'distract_instruct'-------
    t = 0;
    distract_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    block_n = 1;
    block_total = 3;
    
    // keep track of which components have finished
    distract_instructComponents = [];
    distract_instructComponents.push(text_4);
    distract_instructComponents.push(key_resp_5);
    
    for (const thisComponent of distract_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function distract_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'distract_instruct'-------
    // get current time
    t = distract_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 2 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
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
    for (const thisComponent of distract_instructComponents)
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


function distract_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'distract_instruct'-------
    for (const thisComponent of distract_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_5.stop();
    // the Routine "distract_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_20_allKeys;
var distract_remindComponents;
function distract_remindRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'distract_remind'-------
    t = 0;
    distract_remindClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_20.keys = undefined;
    key_resp_20.rt = undefined;
    _key_resp_20_allKeys = [];
    // keep track of which components have finished
    distract_remindComponents = [];
    distract_remindComponents.push(text_17);
    distract_remindComponents.push(key_resp_20);
    
    for (const thisComponent of distract_remindComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function distract_remindRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'distract_remind'-------
    // get current time
    t = distract_remindClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    
    // *key_resp_20* updates
    if (t >= 0.0 && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_20.tStart = t;  // (not accounting for frame time here)
      key_resp_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.clearEvents(); });
    }

    if (key_resp_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_20.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_20_allKeys = _key_resp_20_allKeys.concat(theseKeys);
      if (_key_resp_20_allKeys.length > 0) {
        key_resp_20.keys = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].name;  // just the last key pressed
        key_resp_20.rt = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].rt;
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
    for (const thisComponent of distract_remindComponents)
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


function distract_remindRoutineEnd() {
  return async function () {
    //------Ending Routine 'distract_remind'-------
    for (const thisComponent of distract_remindComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_20.stop();
    // the Routine "distract_remind" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_distract_allKeys;
var go_nogo_trialComponents;
function go_nogo_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'go_nogo_trial'-------
    t = 0;
    go_nogo_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.100000);
    // update component parameters for each repeat
    distract_stim.setFillColor(new util.Color(stim_color));
    distract_stim.setLineColor(new util.Color(stim_color));
    key_resp_distract.keys = undefined;
    key_resp_distract.rt = undefined;
    _key_resp_distract_allKeys = [];
    // keep track of which components have finished
    go_nogo_trialComponents = [];
    go_nogo_trialComponents.push(distract_stim);
    go_nogo_trialComponents.push(key_resp_distract);
    
    for (const thisComponent of go_nogo_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function go_nogo_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'go_nogo_trial'-------
    // get current time
    t = go_nogo_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *distract_stim* updates
    if (t >= 0.1 && distract_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distract_stim.tStart = t;  // (not accounting for frame time here)
      distract_stim.frameNStart = frameN;  // exact frame index
      
      distract_stim.setAutoDraw(true);
    }

    frameRemains = 0.1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distract_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distract_stim.setAutoDraw(false);
    }
    
    // *key_resp_distract* updates
    if (t >= 0.1 && key_resp_distract.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_distract.tStart = t;  // (not accounting for frame time here)
      key_resp_distract.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_distract.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_distract.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_distract.clearEvents(); });
    }

    frameRemains = 0.1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_distract.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_distract.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_distract.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_distract.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_distract_allKeys = _key_resp_distract_allKeys.concat(theseKeys);
      if (_key_resp_distract_allKeys.length > 0) {
        key_resp_distract.keys = _key_resp_distract_allKeys[_key_resp_distract_allKeys.length - 1].name;  // just the last key pressed
        key_resp_distract.rt = _key_resp_distract_allKeys[_key_resp_distract_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_distract.keys == distract_corr_ans) {
            key_resp_distract.corr = 1;
        } else {
            key_resp_distract.corr = 0;
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
    for (const thisComponent of go_nogo_trialComponents)
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


function go_nogo_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'go_nogo_trial'-------
    for (const thisComponent of go_nogo_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_distract.keys === undefined) {
      if (['None','none',undefined].includes(distract_corr_ans)) {
         key_resp_distract.corr = 1;  // correct non-response
      } else {
         key_resp_distract.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_distract.corr, level);
    }
    psychoJS.experiment.addData('key_resp_distract.keys', key_resp_distract.keys);
    psychoJS.experiment.addData('key_resp_distract.corr', key_resp_distract.corr);
    if (typeof key_resp_distract.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_distract.rt', key_resp_distract.rt);
        routineTimer.reset();
        }
    
    key_resp_distract.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_13_allKeys;
var distract_mwComponents;
function distract_mwRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'distract_mw'-------
    t = 0;
    distract_mwClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    document.body.style.cursor='auto';
    resp_distract_mw.reset()
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    distract_mwComponents = [];
    distract_mwComponents.push(text_13);
    distract_mwComponents.push(resp_distract_mw);
    distract_mwComponents.push(key_resp_13);
    
    for (const thisComponent of distract_mwComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function distract_mwRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'distract_mw'-------
    // get current time
    t = distract_mwClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    
    // *resp_distract_mw* updates
    if (t >= 0.0 && resp_distract_mw.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_distract_mw.tStart = t;  // (not accounting for frame time here)
      resp_distract_mw.frameNStart = frameN;  // exact frame index
      
      resp_distract_mw.setAutoDraw(true);
    }

    
    // *key_resp_13* updates
    if (t >= 2 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
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
    for (const thisComponent of distract_mwComponents)
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


function distract_mwRoutineEnd() {
  return async function () {
    //------Ending Routine 'distract_mw'-------
    for (const thisComponent of distract_mwComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    document.body.style.cursor='none';
    
    psychoJS.experiment.addData('resp_distract_mw.response', resp_distract_mw.getRating());
    psychoJS.experiment.addData('resp_distract_mw.rt', resp_distract_mw.getRT());
    key_resp_13.stop();
    // the Routine "distract_mw" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var ltm_length;
var ltm_instructComponents;
function ltm_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ltm_instruct'-------
    t = 0;
    ltm_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    ltm_length = words_presented.length;
    util.shuffle(words_presented);
    
    // keep track of which components have finished
    ltm_instructComponents = [];
    ltm_instructComponents.push(text_7);
    ltm_instructComponents.push(key_resp_10);
    
    for (const thisComponent of ltm_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ltm_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ltm_instruct'-------
    // get current time
    t = ltm_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 2 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
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
    for (const thisComponent of ltm_instructComponents)
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


function ltm_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'ltm_instruct'-------
    for (const thisComponent of ltm_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_10.stop();
    // the Routine "ltm_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stim_pos;
var target_pos;
var lure_pos;
var corr_ans_ltm;
var lure_word;
var target_coord;
var lure_coord;
var _key_resp_ltm_allKeys;
var stim_present_delayComponents;
function stim_present_delayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stim_present_delay'-------
    t = 0;
    stim_present_delayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim_pos = ["left", "right"];
    util.shuffle(stim_pos);
    target_pos = stim_pos[0];
    lure_pos = stim_pos[1];
    corr_ans_ltm = target_pos;
    lure_word = words.pop()[0];
    if ((target_pos === "left")) {
        target_coord = [(- 0.2), 0];
    } else {
        if ((target_pos === "right")) {
            target_coord = [0.2, 0];
        }
    }
    if ((lure_pos === "left")) {
        lure_coord = [(- 0.2), 0];
    } else {
        if ((lure_pos === "right")) {
            lure_coord = [0.2, 0];
        }
    }
    
    target_text.setPos(target_coord);
    target_text.setText(words_presented[trial_n_ltm][0]);
    lure_text.setPos(lure_coord);
    lure_text.setText(lure_word);
    key_resp_ltm.keys = undefined;
    key_resp_ltm.rt = undefined;
    _key_resp_ltm_allKeys = [];
    // keep track of which components have finished
    stim_present_delayComponents = [];
    stim_present_delayComponents.push(target_text);
    stim_present_delayComponents.push(lure_text);
    stim_present_delayComponents.push(key_resp_ltm);
    
    for (const thisComponent of stim_present_delayComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stim_present_delayRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stim_present_delay'-------
    // get current time
    t = stim_present_delayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *target_text* updates
    if (t >= 0.0 && target_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_text.tStart = t;  // (not accounting for frame time here)
      target_text.frameNStart = frameN;  // exact frame index
      
      target_text.setAutoDraw(true);
    }

    
    // *lure_text* updates
    if (t >= 0.0 && lure_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lure_text.tStart = t;  // (not accounting for frame time here)
      lure_text.frameNStart = frameN;  // exact frame index
      
      lure_text.setAutoDraw(true);
    }

    
    // *key_resp_ltm* updates
    if (t >= 0.0 && key_resp_ltm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ltm.tStart = t;  // (not accounting for frame time here)
      key_resp_ltm.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_ltm.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ltm.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ltm.clearEvents(); });
    }

    if (key_resp_ltm.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ltm.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_ltm_allKeys = _key_resp_ltm_allKeys.concat(theseKeys);
      if (_key_resp_ltm_allKeys.length > 0) {
        key_resp_ltm.keys = _key_resp_ltm_allKeys[_key_resp_ltm_allKeys.length - 1].name;  // just the last key pressed
        key_resp_ltm.rt = _key_resp_ltm_allKeys[_key_resp_ltm_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_ltm.keys == corr_ans_ltm) {
            key_resp_ltm.corr = 1;
        } else {
            key_resp_ltm.corr = 0;
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
    for (const thisComponent of stim_present_delayComponents)
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


function stim_present_delayRoutineEnd() {
  return async function () {
    //------Ending Routine 'stim_present_delay'-------
    for (const thisComponent of stim_present_delayComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("trial_n_ltm", trial_n_ltm);
    psychoJS.experiment.addData("presented_word", words_presented[trial_n_ltm][0]);
    psychoJS.experiment.addData("presented_serial_position", words_presented[trial_n_ltm][1]);
    psychoJS.experiment.addData("presented_trial_n", words_presented[trial_n_ltm][2]);
    psychoJS.experiment.addData("presented_block_type", words_presented[trial_n_ltm][3]);
    psychoJS.experiment.addData("target_position", target_pos);
    psychoJS.experiment.addData("lure_word", lure_word);
    trial_n_ltm += 1;
    
    // was no response the correct answer?!
    if (key_resp_ltm.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans_ltm)) {
         key_resp_ltm.corr = 1;  // correct non-response
      } else {
         key_resp_ltm.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_ltm.corr, level);
    }
    psychoJS.experiment.addData('key_resp_ltm.keys', key_resp_ltm.keys);
    psychoJS.experiment.addData('key_resp_ltm.corr', key_resp_ltm.corr);
    if (typeof key_resp_ltm.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_ltm.rt', key_resp_ltm.rt);
        routineTimer.reset();
        }
    
    key_resp_ltm.stop();
    // the Routine "stim_present_delay" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var continue_trialComponents;
function continue_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'continue_trial'-------
    t = 0;
    continue_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    continue_trialComponents = [];
    continue_trialComponents.push(text_3);
    continue_trialComponents.push(key_resp_4);
    
    for (const thisComponent of continue_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function continue_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'continue_trial'-------
    // get current time
    t = continue_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
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
    for (const thisComponent of continue_trialComponents)
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


function continue_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'continue_trial'-------
    for (const thisComponent of continue_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_4.stop();
    // the Routine "continue_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_18_allKeys;
var mw_q_instructComponents;
function mw_q_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'mw_q_instruct'-------
    t = 0;
    mw_q_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    // keep track of which components have finished
    mw_q_instructComponents = [];
    mw_q_instructComponents.push(text_15);
    mw_q_instructComponents.push(text_number_2);
    mw_q_instructComponents.push(text_text_2);
    mw_q_instructComponents.push(mw_q_continue_2);
    mw_q_instructComponents.push(key_resp_18);
    
    for (const thisComponent of mw_q_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mw_q_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'mw_q_instruct'-------
    // get current time
    t = mw_q_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    
    // *text_number_2* updates
    if (t >= 0.0 && text_number_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_number_2.tStart = t;  // (not accounting for frame time here)
      text_number_2.frameNStart = frameN;  // exact frame index
      
      text_number_2.setAutoDraw(true);
    }

    
    // *text_text_2* updates
    if (t >= 0.0 && text_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_text_2.tStart = t;  // (not accounting for frame time here)
      text_text_2.frameNStart = frameN;  // exact frame index
      
      text_text_2.setAutoDraw(true);
    }

    
    // *mw_q_continue_2* updates
    if (t >= 0.0 && mw_q_continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mw_q_continue_2.tStart = t;  // (not accounting for frame time here)
      mw_q_continue_2.frameNStart = frameN;  // exact frame index
      
      mw_q_continue_2.setAutoDraw(true);
    }

    
    // *key_resp_18* updates
    if (t >= 1.0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
    }

    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
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
    for (const thisComponent of mw_q_instructComponents)
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


function mw_q_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'mw_q_instruct'-------
    for (const thisComponent of mw_q_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_18.stop();
    // the Routine "mw_q_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_19_allKeys;
var mw_questionsComponents;
function mw_questionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'mw_questions'-------
    t = 0;
    mw_questionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    mw_q_text_2.setText(question);
    slider_maas.reset()
    key_resp_19.keys = undefined;
    key_resp_19.rt = undefined;
    _key_resp_19_allKeys = [];
    document.body.style.cursor='auto';
    
    // keep track of which components have finished
    mw_questionsComponents = [];
    mw_questionsComponents.push(mw_q_text_2);
    mw_questionsComponents.push(text_number);
    mw_questionsComponents.push(text_text);
    mw_questionsComponents.push(slider_maas);
    mw_questionsComponents.push(key_resp_19);
    mw_questionsComponents.push(text_16);
    
    for (const thisComponent of mw_questionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mw_questionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'mw_questions'-------
    // get current time
    t = mw_questionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mw_q_text_2* updates
    if (t >= 0.0 && mw_q_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mw_q_text_2.tStart = t;  // (not accounting for frame time here)
      mw_q_text_2.frameNStart = frameN;  // exact frame index
      
      mw_q_text_2.setAutoDraw(true);
    }

    
    // *text_number* updates
    if (t >= 0.0 && text_number.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_number.tStart = t;  // (not accounting for frame time here)
      text_number.frameNStart = frameN;  // exact frame index
      
      text_number.setAutoDraw(true);
    }

    
    // *text_text* updates
    if (t >= 0.0 && text_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_text.tStart = t;  // (not accounting for frame time here)
      text_text.frameNStart = frameN;  // exact frame index
      
      text_text.setAutoDraw(true);
    }

    
    // *slider_maas* updates
    if (t >= 0.0 && slider_maas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_maas.tStart = t;  // (not accounting for frame time here)
      slider_maas.frameNStart = frameN;  // exact frame index
      
      slider_maas.setAutoDraw(true);
    }

    
    // *key_resp_19* updates
    if (t >= 1 && key_resp_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_19.tStart = t;  // (not accounting for frame time here)
      key_resp_19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.clearEvents(); });
    }

    if (key_resp_19.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_19.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_19_allKeys = _key_resp_19_allKeys.concat(theseKeys);
      if (_key_resp_19_allKeys.length > 0) {
        key_resp_19.keys = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].name;  // just the last key pressed
        key_resp_19.rt = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_16* updates
    if (t >= 0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
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
    for (const thisComponent of mw_questionsComponents)
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


function mw_questionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'mw_questions'-------
    for (const thisComponent of mw_questionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_maas.response', slider_maas.getRating());
    psychoJS.experiment.addData('slider_maas.rt', slider_maas.getRT());
    key_resp_19.stop();
    // the Routine "mw_questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_15_allKeys;
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
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_12);
    endComponents.push(key_resp_15);
    
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
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    
    // *key_resp_15* updates
    if (t >= 0.0 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
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
    key_resp_15.stop();
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
