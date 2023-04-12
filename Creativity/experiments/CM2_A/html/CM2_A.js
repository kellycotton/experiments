/************** 
 * Cm2_A Test *
 **************/

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
let expName = 'CM2_A';  // from the Builder filename that created this script
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
flowScheduler.add(problem_instructionsRoutineBegin());
flowScheduler.add(problem_instructionsRoutineEachFrame());
flowScheduler.add(problem_instructionsRoutineEnd());
const trials_problemLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_problemLoopBegin, trials_problemLoopScheduler);
flowScheduler.add(trials_problemLoopScheduler);
flowScheduler.add(trials_problemLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(instructions_si_practiceRoutineBegin());
flowScheduler.add(instructions_si_practiceRoutineEachFrame());
flowScheduler.add(instructions_si_practiceRoutineEnd());
flowScheduler.add(si_key_positionsRoutineBegin());
flowScheduler.add(si_key_positionsRoutineEachFrame());
flowScheduler.add(si_key_positionsRoutineEnd());
const practice_si_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_si_loopLoopBegin, practice_si_loopLoopScheduler);
flowScheduler.add(practice_si_loopLoopScheduler);
flowScheduler.add(practice_si_loopLoopEnd);
flowScheduler.add(end_practiceRoutineBegin());
flowScheduler.add(end_practiceRoutineEachFrame());
flowScheduler.add(end_practiceRoutineEnd());
const blocks_siLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocks_siLoopBegin, blocks_siLoopScheduler);
flowScheduler.add(blocks_siLoopScheduler);
flowScheduler.add(blocks_siLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
const rat_setup_stimLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(rat_setup_stimLoopBegin, rat_setup_stimLoopScheduler);
flowScheduler.add(rat_setup_stimLoopScheduler);
flowScheduler.add(rat_setup_stimLoopEnd);
flowScheduler.add(instructions_ratRoutineBegin());
flowScheduler.add(instructions_ratRoutineEachFrame());
flowScheduler.add(instructions_ratRoutineEnd());
const trials_ratLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_ratLoopBegin, trials_ratLoopScheduler);
flowScheduler.add(trials_ratLoopScheduler);
flowScheduler.add(trials_ratLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
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
var rat_stim;
var key_to_position;
var targetwords;
var rei_scaleClock;
var rei_instructions;
var rei_1;
var rei_2;
var rei_3;
var rei_4;
var rei_5;
var rei_text;
var key_resp_rei;
var problem_instructionsClock;
var text_au_instruct;
var text_instruct_end;
var key_resp_4;
var problem_solvingClock;
var k;
var numbers;
var symbols;
var items_au;
var problem_conditions;
var problem_opacity;
var item_opacity;
var problem_reps;
var continue_routine;
var number_1;
var symbol_sign;
var number_2;
var key_resp_problem;
var text_item;
var text_resp_problem;
var text_end_au;
var key_resp_3;
var endClock;
var end_si_text;
var key_resp;
var instructions_si_practiceClock;
var instr_text_si;
var instr_resp_si;
var si_key_positionsClock;
var choice_a;
var choice_s;
var choice_z;
var choice_x;
var key_resp_si_space;
var text_practice;
var practice_siClock;
var fixation_practice;
var target_cue_practice;
var target_si_practice;
var choice1_practice;
var choice2_practice;
var choice3_practice;
var key_resp_si_practice;
var end_practiceClock;
var text_end_practice;
var key_resp_practice_end;
var instructions_siClock;
var instr_text_si_2;
var instr_resp_si_2;
var stimulus_identificationClock;
var i;
var fixation;
var target_cue;
var target_si;
var choice1;
var choice2;
var choice3;
var key_resp_si;
var end_block_siClock;
var end_block_si_text;
var key_resp_block_si;
var rat_setupClock;
var instructions_ratClock;
var instructions_rat_text;
var key_resp_2;
var rat_testClock;
var rat_text;
var rat_i;
var key_resp_rat;
var text_resp;
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
  rat_stim = [];
  key_to_position = {"a": 0, "s": 1, "z": 2, "x": 3};
  targetwords = [];
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
  
  // Initialize components for Routine "problem_instructions"
  problem_instructionsClock = new util.Clock();
  text_au_instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_au_instruct',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_instruct_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instruct_end',
    text: 'Press <space> to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "problem_solving"
  problem_solvingClock = new util.Clock();
  k = 0;
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  symbols = ["add", "subtract"];
  items_au = ["brick", "paperclip", "plank of wood", "newspaper", "ping pong ball"];
  shuffle(items_au);
  problem_conditions = ["math", "creative"];
  shuffle(problem_conditions);
  
  if ((problem_conditions[0] === "math")) {
      problem_opacity = 1;
      item_opacity = 0;
      problem_reps = 60;
      continue_routine = false;
  } else {
      problem_opacity = 0;
      item_opacity = 1;
      problem_reps = 5;
      continue_routine = true;
  }
  
  number_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'number_1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  symbol_sign = new visual.TextStim({
    win: psychoJS.window,
    name: 'symbol_sign',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  number_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'number_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: problem_opacity,
    depth: -3.0 
  });
  
  key_resp_problem = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_item = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_item',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -5.0 
  });
  
  text_resp_problem = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_resp_problem',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  text_end_au = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_au',
    text: 'Press <enter> to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_si_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_si_text',
    text: 'You have reached the end of the task. \n\nPlease press <space> when you are ready to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_si_practice"
  instructions_si_practiceClock = new util.Clock();
  instr_text_si = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_si',
    text: 'During the next task, you are going to perform a simple identification task involving words. \nFirst, a small cross will appear in the center of the screen. This is your warning to pay attention as the words are about to appear. \nNext, there are two things that may happen:\n1. You may see a word in the center of the screen which will disappear after a few seconds. \nThis is your cue word because on the next screen you will see four words appear in the four corners of the screen, one of which will match the cue word you just saw. \n2. You may see a word in the center of the screen followed by the four words presented in the four corners. This time the center cue word will remain on the screen at the same time. \n\nYour job for both scenarios is to select the location of the word which matches the center cue word using the <A> (upper left), <S> (upper right), <Z> (bottom left), or <X> (bottom right) key. \n\nPress <space> to begin the practice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_resp_si = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "si_key_positions"
  si_key_positionsClock = new util.Clock();
  choice_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_a',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), 0.25], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  choice_s = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_s',
    text: 'S',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  choice_z = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_z',
    text: 'Z',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  choice_x = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_x',
    text: 'X',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  key_resp_si_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_practice',
    text: 'The above keys correspond to the screen positions.\nPress <space> to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "practice_si"
  practice_siClock = new util.Clock();
  fixation_practice = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_practice', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  target_cue_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_cue_practice',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  target_si_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_si_practice',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  choice1_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice1_practice',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  choice2_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice2_practice',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  choice3_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice3_practice',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  key_resp_si_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_practice"
  end_practiceClock = new util.Clock();
  text_end_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_practice',
    text: 'You have finished the practice. \n\nPlease press <space> to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_practice_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_si"
  instructions_siClock = new util.Clock();
  instr_text_si_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_si_2',
    text: 'You will see a series of words presented on the screen. \nThere will be a word in the center that is your cue. \n\nPress the key <a,s,z,x> that corresponds to the location of the word that matches the cue.\n\nPress <space> when you are ready to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_resp_si_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "si_key_positions"
  si_key_positionsClock = new util.Clock();
  choice_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_a',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), 0.25], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  choice_s = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_s',
    text: 'S',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  choice_z = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_z',
    text: 'Z',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  choice_x = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_x',
    text: 'X',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  key_resp_si_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_practice',
    text: 'The above keys correspond to the screen positions.\nPress <space> to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "stimulus_identification"
  stimulus_identificationClock = new util.Clock();
  i = 0;
  
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  target_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_cue',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  target_si = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_si',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  choice1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  choice2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  choice3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  key_resp_si = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_block_si"
  end_block_siClock = new util.Clock();
  end_block_si_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_block_si_text',
    text: 'Please take a break to rest your eyes.\nWhen you are ready to continue, press <space>.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_block_si = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_si_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_si_text',
    text: 'You have reached the end of the task. \n\nPlease press <space> when you are ready to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rat_setup"
  rat_setupClock = new util.Clock();
  // Initialize components for Routine "instructions_rat"
  instructions_ratClock = new util.Clock();
  instructions_rat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_rat_text',
    text: 'For the next task, you will be presented with three words. \nYou will then find a fourth word that is related to all three.\nYou will type your answer, then press <enter> to see three new words.\n\nExample: What word is related to these three words?\n\nPAINT DOLL CAT\n\nThe answer is "HOUSE": house paint, dollhouse, and house cat.\n\nPlease press <space> when you are ready to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rat_test"
  rat_testClock = new util.Clock();
  rat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rat_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  rat_i = 0;
  
  key_resp_rat = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_resp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_si_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_si_text',
    text: 'You have reached the end of the task. \n\nPlease press <space> when you are ready to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_ltm"
  instructions_ltmClock = new util.Clock();
  instr_text_ltm_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_ltm_1',
    text: 'You will see two words on the screen. One of the words was previously displayed during this task: \n\n',
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


var trials_problem;
function trials_problemLoopBegin(trials_problemLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_problem = new TrialHandler({
    psychoJS: psychoJS,
    nReps: problem_reps, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_problem'
  });
  psychoJS.experiment.addLoop(trials_problem); // add the loop to the experiment
  currentLoop = trials_problem;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_problem of trials_problem) {
    const snapshot = trials_problem.getSnapshot();
    trials_problemLoopScheduler.add(importConditions(snapshot));
    trials_problemLoopScheduler.add(problem_solvingRoutineBegin(snapshot));
    trials_problemLoopScheduler.add(problem_solvingRoutineEachFrame(snapshot));
    trials_problemLoopScheduler.add(problem_solvingRoutineEnd(snapshot));
    trials_problemLoopScheduler.add(endLoopIteration(trials_problemLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_problemLoopEnd() {
  psychoJS.experiment.removeLoop(trials_problem);

  return Scheduler.Event.NEXT;
}


var practice_si_loop;
function practice_si_loopLoopBegin(practice_si_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_si_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stimuli/presentation.xlsx',
    seed: undefined, name: 'practice_si_loop'
  });
  psychoJS.experiment.addLoop(practice_si_loop); // add the loop to the experiment
  currentLoop = practice_si_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_si_loop of practice_si_loop) {
    const snapshot = practice_si_loop.getSnapshot();
    practice_si_loopLoopScheduler.add(importConditions(snapshot));
    practice_si_loopLoopScheduler.add(practice_siRoutineBegin(snapshot));
    practice_si_loopLoopScheduler.add(practice_siRoutineEachFrame(snapshot));
    practice_si_loopLoopScheduler.add(practice_siRoutineEnd(snapshot));
    practice_si_loopLoopScheduler.add(endLoopIteration(practice_si_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practice_si_loopLoopEnd() {
  psychoJS.experiment.removeLoop(practice_si_loop);

  return Scheduler.Event.NEXT;
}


var blocks_si;
function blocks_siLoopBegin(blocks_siLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks_si = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks_si'
  });
  psychoJS.experiment.addLoop(blocks_si); // add the loop to the experiment
  currentLoop = blocks_si;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlocks_si of blocks_si) {
    const snapshot = blocks_si.getSnapshot();
    blocks_siLoopScheduler.add(importConditions(snapshot));
    blocks_siLoopScheduler.add(instructions_siRoutineBegin(snapshot));
    blocks_siLoopScheduler.add(instructions_siRoutineEachFrame(snapshot));
    blocks_siLoopScheduler.add(instructions_siRoutineEnd(snapshot));
    blocks_siLoopScheduler.add(si_key_positionsRoutineBegin(snapshot));
    blocks_siLoopScheduler.add(si_key_positionsRoutineEachFrame(snapshot));
    blocks_siLoopScheduler.add(si_key_positionsRoutineEnd(snapshot));
    const trial_siLoopScheduler = new Scheduler(psychoJS);
    blocks_siLoopScheduler.add(trial_siLoopBegin, trial_siLoopScheduler);
    blocks_siLoopScheduler.add(trial_siLoopScheduler);
    blocks_siLoopScheduler.add(trial_siLoopEnd);
    blocks_siLoopScheduler.add(end_block_siRoutineBegin(snapshot));
    blocks_siLoopScheduler.add(end_block_siRoutineEachFrame(snapshot));
    blocks_siLoopScheduler.add(end_block_siRoutineEnd(snapshot));
    blocks_siLoopScheduler.add(endLoopIteration(blocks_siLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trial_si;
function trial_siLoopBegin(trial_siLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trial_si = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 11, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stimuli/presentation.xlsx',
    seed: undefined, name: 'trial_si'
  });
  psychoJS.experiment.addLoop(trial_si); // add the loop to the experiment
  currentLoop = trial_si;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_si of trial_si) {
    const snapshot = trial_si.getSnapshot();
    trial_siLoopScheduler.add(importConditions(snapshot));
    trial_siLoopScheduler.add(stimulus_identificationRoutineBegin(snapshot));
    trial_siLoopScheduler.add(stimulus_identificationRoutineEachFrame(snapshot));
    trial_siLoopScheduler.add(stimulus_identificationRoutineEnd(snapshot));
    trial_siLoopScheduler.add(endLoopIteration(trial_siLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trial_siLoopEnd() {
  psychoJS.experiment.removeLoop(trial_si);

  return Scheduler.Event.NEXT;
}


function blocks_siLoopEnd() {
  psychoJS.experiment.removeLoop(blocks_si);

  return Scheduler.Event.NEXT;
}


var rat_setup_stim;
function rat_setup_stimLoopBegin(rat_setup_stimLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  rat_setup_stim = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stimuli/rat.xlsx',
    seed: undefined, name: 'rat_setup_stim'
  });
  psychoJS.experiment.addLoop(rat_setup_stim); // add the loop to the experiment
  currentLoop = rat_setup_stim;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRat_setup_stim of rat_setup_stim) {
    const snapshot = rat_setup_stim.getSnapshot();
    rat_setup_stimLoopScheduler.add(importConditions(snapshot));
    rat_setup_stimLoopScheduler.add(rat_setupRoutineBegin(snapshot));
    rat_setup_stimLoopScheduler.add(rat_setupRoutineEachFrame(snapshot));
    rat_setup_stimLoopScheduler.add(rat_setupRoutineEnd(snapshot));
    rat_setup_stimLoopScheduler.add(endLoopIteration(rat_setup_stimLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function rat_setup_stimLoopEnd() {
  psychoJS.experiment.removeLoop(rat_setup_stim);

  return Scheduler.Event.NEXT;
}


var trials_rat;
function trials_ratLoopBegin(trials_ratLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_rat = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 20, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_rat'
  });
  psychoJS.experiment.addLoop(trials_rat); // add the loop to the experiment
  currentLoop = trials_rat;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_rat of trials_rat) {
    const snapshot = trials_rat.getSnapshot();
    trials_ratLoopScheduler.add(importConditions(snapshot));
    trials_ratLoopScheduler.add(rat_testRoutineBegin(snapshot));
    trials_ratLoopScheduler.add(rat_testRoutineEachFrame(snapshot));
    trials_ratLoopScheduler.add(rat_testRoutineEnd(snapshot));
    trials_ratLoopScheduler.add(endLoopIteration(trials_ratLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_ratLoopEnd() {
  psychoJS.experiment.removeLoop(trials_rat);

  return Scheduler.Event.NEXT;
}


var trial_ltm;
function trial_ltmLoopBegin(trial_ltmLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trial_ltm = new TrialHandler({
    psychoJS: psychoJS,
    nReps: targetwords.length, method: TrialHandler.Method.RANDOM,
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


var instruct_text_problems;
var _key_resp_4_allKeys;
var problem_instructionsComponents;
function problem_instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'problem_instructions'-------
    t = 0;
    problem_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    
    if ((problem_conditions[0] === "math")) {
        instruct_text_problems = "On the next screen, you will see a series of math problems.\nFor each problem, please type the correct answer and press <enter> to submit."
    } else {
        instruct_text_problems = "On the next screen you will be presented with a common item. Please list as many possible uses for this item.\nYou will have 3 minutes to type as many possible uses.\nIn between your answers, please type a comma.\nFor example, if the word is COFFEE CUP, your answers might look like this:\n\nsoup bowl, plant pot, template to draw a circle"
    }
    text_au_instruct.setText(instruct_text_problems);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    problem_instructionsComponents = [];
    problem_instructionsComponents.push(text_au_instruct);
    problem_instructionsComponents.push(text_instruct_end);
    problem_instructionsComponents.push(key_resp_4);
    
    for (const thisComponent of problem_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function problem_instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'problem_instructions'-------
    // get current time
    t = problem_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_au_instruct* updates
    if (t >= 0.0 && text_au_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_au_instruct.tStart = t;  // (not accounting for frame time here)
      text_au_instruct.frameNStart = frameN;  // exact frame index
      
      text_au_instruct.setAutoDraw(true);
    }

    
    // *text_instruct_end* updates
    if (t >= 0.0 && text_instruct_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instruct_end.tStart = t;  // (not accounting for frame time here)
      text_instruct_end.frameNStart = frameN;  // exact frame index
      
      text_instruct_end.setAutoDraw(true);
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
    for (const thisComponent of problem_instructionsComponents)
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


function problem_instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'problem_instructions'-------
    for (const thisComponent of problem_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "problem_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var symbol;
var correct_answer_math;
var _key_resp_problem_allKeys;
var _key_resp_3_allKeys;
var problem_solvingComponents;
function problem_solvingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'problem_solving'-------
    t = 0;
    problem_solvingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(240.000000);
    // update component parameters for each repeat
    shuffle(numbers);
    shuffle(symbols);
    if ((symbols[0] === "subtract")) {
        symbol = "-";
        correct_answer_math = (numbers[0] - numbers[1]);
    } else {
        symbol = "+";
        correct_answer_math = (numbers[0] + numbers[1]);
    }
    
    text_resp_problem.setText('');  // empty the onscreen text ready for next input (just be sure to save it)
    
    number_1.setOpacity(problem_opacity);
    number_1.setText(numbers[0]);
    symbol_sign.setOpacity(problem_opacity);
    symbol_sign.setText(symbol);
    number_2.setText(numbers[1]);
    key_resp_problem.keys = undefined;
    key_resp_problem.rt = undefined;
    _key_resp_problem_allKeys = [];
    text_item.setOpacity(item_opacity);
    text_item.setText(items_au[k]);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    problem_solvingComponents = [];
    problem_solvingComponents.push(number_1);
    problem_solvingComponents.push(symbol_sign);
    problem_solvingComponents.push(number_2);
    problem_solvingComponents.push(key_resp_problem);
    problem_solvingComponents.push(text_item);
    problem_solvingComponents.push(text_resp_problem);
    problem_solvingComponents.push(text_end_au);
    problem_solvingComponents.push(key_resp_3);
    
    for (const thisComponent of problem_solvingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var textAdd;
var tempText;
function problem_solvingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'problem_solving'-------
    // get current time
    t = problem_solvingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    let theseKeys = psychoJS.eventManager.getKeys();
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.indexOf('return') > -1) {
        textAdd = '';  // Add nothing
        tempText = text_resp_problem.text;  // get the text from the text component
        if ((problem_conditions[0] === "math")) {
            text_resp_problem.setText('');  // empty the onscreen text ready for next input (just be sure to save it)
        }
        continueRoutine = continue_routine; // End routine 
    }
    
    if (textAdd) {
        if (theseKeys.indexOf('space') > -1) {
            text_resp_problem.setText(text_resp_problem.text + " ");  
            textAdd = undefined;
        } else if (theseKeys.indexOf('backspace') > -1) {
            //text_resp_problem.setText(text_resp_problem.text + textAdd[textAdd.length-1]);  
            //textAdd = '';  // Add nothing
            //text_resp_problem.setText('')  // empty the onscreen text ready for next input (just be sure to save it)
            text_resp_problem.setText(text_resp_problem.text.slice(0, -1));
            textAdd = undefined;
        } else if (theseKeys.indexOf('lshift') > -1) {
            text_resp_problem.setText(text_resp_problem.text + " ");  
            textAdd = undefined;
        } else if (theseKeys.indexOf('rshift') > -1) {
            text_resp_problem.setText(text_resp_problem.text + " ");  
            textAdd = undefined;
        } else if (theseKeys.indexOf('minus') > -1) {
            text_resp_problem.setText(text_resp_problem.text + " ");  
            textAdd = '-';
        } else if (theseKeys.indexOf('comma') > -1) {
            text_resp_problem.setText(text_resp_problem.text + " ");  
            textAdd = ',';
        } else if (theseKeys.indexOf('period') > -1) {
            text_resp_problem.setText(text_resp_problem.text + " ");  
            textAdd = '.';
        } else if (theseKeys.indexOf('apostrophe') > -1) {
            text_resp_problem.setText(text_resp_problem.text + " ");  
            textAdd = '\'';
        } else {
            text_resp_problem.setText(text_resp_problem.text + textAdd);  
            textAdd = undefined;
        }
    }
    
    // *number_1* updates
    if (t >= 0.0 && number_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      number_1.tStart = t;  // (not accounting for frame time here)
      number_1.frameNStart = frameN;  // exact frame index
      
      number_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((number_1.status === PsychoJS.Status.STARTED || number_1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      number_1.setAutoDraw(false);
    }
    
    // *symbol_sign* updates
    if (t >= 0.0 && symbol_sign.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      symbol_sign.tStart = t;  // (not accounting for frame time here)
      symbol_sign.frameNStart = frameN;  // exact frame index
      
      symbol_sign.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((symbol_sign.status === PsychoJS.Status.STARTED || symbol_sign.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      symbol_sign.setAutoDraw(false);
    }
    
    // *number_2* updates
    if (t >= 0.0 && number_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      number_2.tStart = t;  // (not accounting for frame time here)
      number_2.frameNStart = frameN;  // exact frame index
      
      number_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((number_2.status === PsychoJS.Status.STARTED || number_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      number_2.setAutoDraw(false);
    }
    
    // *key_resp_problem* updates
    if (t >= 0.0 && key_resp_problem.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_problem.tStart = t;  // (not accounting for frame time here)
      key_resp_problem.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_problem.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_problem.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_problem.clearEvents(); });
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_problem.status === PsychoJS.Status.STARTED || key_resp_problem.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_problem.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_problem.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_problem.getKeys({keyList: [], waitRelease: false});
      _key_resp_problem_allKeys = _key_resp_problem_allKeys.concat(theseKeys);
      if (_key_resp_problem_allKeys.length > 0) {
        key_resp_problem.keys = _key_resp_problem_allKeys.map((key) => key.name);  // storing all keys
        key_resp_problem.rt = _key_resp_problem_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *text_item* updates
    if (t >= 0.0 && text_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_item.tStart = t;  // (not accounting for frame time here)
      text_item.frameNStart = frameN;  // exact frame index
      
      text_item.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_item.status === PsychoJS.Status.STARTED || text_item.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_item.setAutoDraw(false);
    }
    
    // *text_resp_problem* updates
    if (t >= 0.0 && text_resp_problem.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_resp_problem.tStart = t;  // (not accounting for frame time here)
      text_resp_problem.frameNStart = frameN;  // exact frame index
      
      text_resp_problem.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_resp_problem.status === PsychoJS.Status.STARTED || text_resp_problem.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_resp_problem.setAutoDraw(false);
    }
    
    // *text_end_au* updates
    if (t >= 120 && text_end_au.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_au.tStart = t;  // (not accounting for frame time here)
      text_end_au.frameNStart = frameN;  // exact frame index
      
      text_end_au.setAutoDraw(true);
    }

    frameRemains = 120 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_end_au.status === PsychoJS.Status.STARTED || text_end_au.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_end_au.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 120 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    }

    frameRemains = 120 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_3.status === PsychoJS.Status.STARTED || key_resp_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of problem_solvingComponents)
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


function problem_solvingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'problem_solving'-------
    for (const thisComponent of problem_solvingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Problem_Condition', problem_conditions[0]);
    psychoJS.experiment.addData('textInput_problem', tempText);
    psychoJS.experiment.addData('PresentedItems_au', items_au[k]);
    psychoJS.experiment.addData('CorrectAnswer_math', correct_answer_math);
    k = (k + 1);
    
    psychoJS.experiment.addData('key_resp_problem.keys', key_resp_problem.keys);
    if (typeof key_resp_problem.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_problem.rt', key_resp_problem.rt);
        }
    
    key_resp_problem.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_si_text);
    endComponents.push(key_resp);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_si_text* updates
    if (t >= 0.0 && end_si_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_si_text.tStart = t;  // (not accounting for frame time here)
      end_si_text.frameNStart = frameN;  // exact frame index
      
      end_si_text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
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


function endRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instr_resp_si_allKeys;
var instructions_si_practiceComponents;
function instructions_si_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_si_practice'-------
    t = 0;
    instructions_si_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_resp_si.keys = undefined;
    instr_resp_si.rt = undefined;
    _instr_resp_si_allKeys = [];
    // keep track of which components have finished
    instructions_si_practiceComponents = [];
    instructions_si_practiceComponents.push(instr_text_si);
    instructions_si_practiceComponents.push(instr_resp_si);
    
    for (const thisComponent of instructions_si_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_si_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_si_practice'-------
    // get current time
    t = instructions_si_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text_si* updates
    if (t >= 0.0 && instr_text_si.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_si.tStart = t;  // (not accounting for frame time here)
      instr_text_si.frameNStart = frameN;  // exact frame index
      
      instr_text_si.setAutoDraw(true);
    }

    
    // *instr_resp_si* updates
    if (t >= 0.0 && instr_resp_si.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp_si.tStart = t;  // (not accounting for frame time here)
      instr_resp_si.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp_si.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp_si.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp_si.clearEvents(); });
    }

    if (instr_resp_si.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp_si.getKeys({keyList: ['space'], waitRelease: false});
      _instr_resp_si_allKeys = _instr_resp_si_allKeys.concat(theseKeys);
      if (_instr_resp_si_allKeys.length > 0) {
        instr_resp_si.keys = _instr_resp_si_allKeys[_instr_resp_si_allKeys.length - 1].name;  // just the last key pressed
        instr_resp_si.rt = _instr_resp_si_allKeys[_instr_resp_si_allKeys.length - 1].rt;
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
    for (const thisComponent of instructions_si_practiceComponents)
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


function instructions_si_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_si_practice'-------
    for (const thisComponent of instructions_si_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instructions_si_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_si_space_allKeys;
var si_key_positionsComponents;
function si_key_positionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'si_key_positions'-------
    t = 0;
    si_key_positionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_si_space.keys = undefined;
    key_resp_si_space.rt = undefined;
    _key_resp_si_space_allKeys = [];
    // keep track of which components have finished
    si_key_positionsComponents = [];
    si_key_positionsComponents.push(choice_a);
    si_key_positionsComponents.push(choice_s);
    si_key_positionsComponents.push(choice_z);
    si_key_positionsComponents.push(choice_x);
    si_key_positionsComponents.push(key_resp_si_space);
    si_key_positionsComponents.push(text_practice);
    
    for (const thisComponent of si_key_positionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function si_key_positionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'si_key_positions'-------
    // get current time
    t = si_key_positionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *choice_a* updates
    if (t >= 0 && choice_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_a.tStart = t;  // (not accounting for frame time here)
      choice_a.frameNStart = frameN;  // exact frame index
      
      choice_a.setAutoDraw(true);
    }

    
    // *choice_s* updates
    if (t >= 0 && choice_s.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_s.tStart = t;  // (not accounting for frame time here)
      choice_s.frameNStart = frameN;  // exact frame index
      
      choice_s.setAutoDraw(true);
    }

    
    // *choice_z* updates
    if (t >= 0 && choice_z.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_z.tStart = t;  // (not accounting for frame time here)
      choice_z.frameNStart = frameN;  // exact frame index
      
      choice_z.setAutoDraw(true);
    }

    
    // *choice_x* updates
    if (t >= 0 && choice_x.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_x.tStart = t;  // (not accounting for frame time here)
      choice_x.frameNStart = frameN;  // exact frame index
      
      choice_x.setAutoDraw(true);
    }

    
    // *key_resp_si_space* updates
    if (t >= 0 && key_resp_si_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_si_space.tStart = t;  // (not accounting for frame time here)
      key_resp_si_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_si_space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_si_space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_si_space.clearEvents(); });
    }

    if (key_resp_si_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_si_space.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_si_space_allKeys = _key_resp_si_space_allKeys.concat(theseKeys);
      if (_key_resp_si_space_allKeys.length > 0) {
        key_resp_si_space.keys = _key_resp_si_space_allKeys[_key_resp_si_space_allKeys.length - 1].name;  // just the last key pressed
        key_resp_si_space.rt = _key_resp_si_space_allKeys[_key_resp_si_space_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_practice* updates
    if (t >= 0.0 && text_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_practice.tStart = t;  // (not accounting for frame time here)
      text_practice.frameNStart = frameN;  // exact frame index
      
      text_practice.setAutoDraw(true);
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
    for (const thisComponent of si_key_positionsComponents)
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


function si_key_positionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'si_key_positions'-------
    for (const thisComponent of si_key_positionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "si_key_positions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialtext;
var target;
var positions;
var position_to_key;
var start_time;
var stop_time;
var _key_resp_si_practice_allKeys;
var practice_siComponents;
function practice_siRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_si'-------
    t = 0;
    practice_siClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trialtext = words_practice.slice(i, (i + 4));
    target = trialtext[0];
    positions = [[(- 0.25), 0.25], [0.25, 0.25], [(- 0.25), (- 0.25)], [0.25, (- 0.25)]];
    position_to_key = {[positions[0]]: "a", [positions[1]]: "s", [positions[2]]: "z", [positions[3]]: "x"};
    shuffle(positions);
    if ((presentation === "before")) {
        start_time = 0.5;
        stop_time = 2;
    } else {
        start_time = 4;
        stop_time = 120;
    }
    
    target_cue_practice.setText(target);
    target_si_practice.setPos(positions.pop());
    target_si_practice.setText(target);
    choice1_practice.setPos(positions.pop());
    choice1_practice.setText(trialtext[1]);
    choice2_practice.setPos(positions.pop());
    choice2_practice.setText(trialtext[2]);
    choice3_practice.setPos(positions.pop());
    choice3_practice.setText(trialtext[3]);
    key_resp_si_practice.keys = undefined;
    key_resp_si_practice.rt = undefined;
    _key_resp_si_practice_allKeys = [];
    // keep track of which components have finished
    practice_siComponents = [];
    practice_siComponents.push(fixation_practice);
    practice_siComponents.push(target_cue_practice);
    practice_siComponents.push(target_si_practice);
    practice_siComponents.push(choice1_practice);
    practice_siComponents.push(choice2_practice);
    practice_siComponents.push(choice3_practice);
    practice_siComponents.push(key_resp_si_practice);
    
    for (const thisComponent of practice_siComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_siRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_si'-------
    // get current time
    t = practice_siClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_practice* updates
    if (t >= 0.0 && fixation_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_practice.tStart = t;  // (not accounting for frame time here)
      fixation_practice.frameNStart = frameN;  // exact frame index
      
      fixation_practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation_practice.status === PsychoJS.Status.STARTED || fixation_practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation_practice.setAutoDraw(false);
    }
    
    // *target_cue_practice* updates
    if (t >= start_time && target_cue_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_cue_practice.tStart = t;  // (not accounting for frame time here)
      target_cue_practice.frameNStart = frameN;  // exact frame index
      
      target_cue_practice.setAutoDraw(true);
    }

    frameRemains = start_time + stop_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((target_cue_practice.status === PsychoJS.Status.STARTED || target_cue_practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      target_cue_practice.setAutoDraw(false);
    }
    
    // *target_si_practice* updates
    if (t >= 4 && target_si_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_si_practice.tStart = t;  // (not accounting for frame time here)
      target_si_practice.frameNStart = frameN;  // exact frame index
      
      target_si_practice.setAutoDraw(true);
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((target_si_practice.status === PsychoJS.Status.STARTED || target_si_practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      target_si_practice.setAutoDraw(false);
    }
    
    // *choice1_practice* updates
    if (t >= 4 && choice1_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice1_practice.tStart = t;  // (not accounting for frame time here)
      choice1_practice.frameNStart = frameN;  // exact frame index
      
      choice1_practice.setAutoDraw(true);
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((choice1_practice.status === PsychoJS.Status.STARTED || choice1_practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      choice1_practice.setAutoDraw(false);
    }
    
    // *choice2_practice* updates
    if (t >= 4 && choice2_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2_practice.tStart = t;  // (not accounting for frame time here)
      choice2_practice.frameNStart = frameN;  // exact frame index
      
      choice2_practice.setAutoDraw(true);
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((choice2_practice.status === PsychoJS.Status.STARTED || choice2_practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      choice2_practice.setAutoDraw(false);
    }
    
    // *choice3_practice* updates
    if (t >= 4 && choice3_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice3_practice.tStart = t;  // (not accounting for frame time here)
      choice3_practice.frameNStart = frameN;  // exact frame index
      
      choice3_practice.setAutoDraw(true);
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((choice3_practice.status === PsychoJS.Status.STARTED || choice3_practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      choice3_practice.setAutoDraw(false);
    }
    
    // *key_resp_si_practice* updates
    if (t >= 4 && key_resp_si_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_si_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_si_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_si_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_si_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_si_practice.clearEvents(); });
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_si_practice.status === PsychoJS.Status.STARTED || key_resp_si_practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_si_practice.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_si_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_si_practice.getKeys({keyList: ['a', 's', 'z', 'x'], waitRelease: false});
      _key_resp_si_practice_allKeys = _key_resp_si_practice_allKeys.concat(theseKeys);
      if (_key_resp_si_practice_allKeys.length > 0) {
        key_resp_si_practice.keys = _key_resp_si_practice_allKeys[_key_resp_si_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_si_practice.rt = _key_resp_si_practice_allKeys[_key_resp_si_practice_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_siComponents)
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


var correct_ans;
function practice_siRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_si'-------
    for (const thisComponent of practice_siComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    i = (i + 4);
    correct_ans = target_si.pos;
    psychoJS.experiment.addData("TargetWord_SI", trialtext[0]);
    psychoJS.experiment.addData("ResponseWords_SI", trialtext.slice(1, 4));
    
    // the Routine "practice_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_practice_end_allKeys;
var v;
var end_practiceComponents;
function end_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end_practice'-------
    t = 0;
    end_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_practice_end.keys = undefined;
    key_resp_practice_end.rt = undefined;
    _key_resp_practice_end_allKeys = [];
    shuffle(words_target);
    shuffle(words_lure);
    shuffle(words_distractor);
    i = 0;
    v = 0;
    
    // keep track of which components have finished
    end_practiceComponents = [];
    end_practiceComponents.push(text_end_practice);
    end_practiceComponents.push(key_resp_practice_end);
    
    for (const thisComponent of end_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end_practice'-------
    // get current time
    t = end_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_practice* updates
    if (t >= 0.0 && text_end_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_practice.tStart = t;  // (not accounting for frame time here)
      text_end_practice.frameNStart = frameN;  // exact frame index
      
      text_end_practice.setAutoDraw(true);
    }

    
    // *key_resp_practice_end* updates
    if (t >= 0.0 && key_resp_practice_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_practice_end.tStart = t;  // (not accounting for frame time here)
      key_resp_practice_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_practice_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice_end.clearEvents(); });
    }

    if (key_resp_practice_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_practice_end.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_practice_end_allKeys = _key_resp_practice_end_allKeys.concat(theseKeys);
      if (_key_resp_practice_end_allKeys.length > 0) {
        key_resp_practice_end.keys = _key_resp_practice_end_allKeys[_key_resp_practice_end_allKeys.length - 1].name;  // just the last key pressed
        key_resp_practice_end.rt = _key_resp_practice_end_allKeys[_key_resp_practice_end_allKeys.length - 1].rt;
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


function end_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end_practice'-------
    for (const thisComponent of end_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instr_resp_si_2_allKeys;
var instructions_siComponents;
function instructions_siRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_si'-------
    t = 0;
    instructions_siClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_resp_si_2.keys = undefined;
    instr_resp_si_2.rt = undefined;
    _instr_resp_si_2_allKeys = [];
    // keep track of which components have finished
    instructions_siComponents = [];
    instructions_siComponents.push(instr_text_si_2);
    instructions_siComponents.push(instr_resp_si_2);
    
    for (const thisComponent of instructions_siComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_siRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_si'-------
    // get current time
    t = instructions_siClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text_si_2* updates
    if (t >= 0.0 && instr_text_si_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_si_2.tStart = t;  // (not accounting for frame time here)
      instr_text_si_2.frameNStart = frameN;  // exact frame index
      
      instr_text_si_2.setAutoDraw(true);
    }

    
    // *instr_resp_si_2* updates
    if (t >= 0.0 && instr_resp_si_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp_si_2.tStart = t;  // (not accounting for frame time here)
      instr_resp_si_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp_si_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp_si_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp_si_2.clearEvents(); });
    }

    if (instr_resp_si_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp_si_2.getKeys({keyList: ['space'], waitRelease: false});
      _instr_resp_si_2_allKeys = _instr_resp_si_2_allKeys.concat(theseKeys);
      if (_instr_resp_si_2_allKeys.length > 0) {
        instr_resp_si_2.keys = _instr_resp_si_2_allKeys[_instr_resp_si_2_allKeys.length - 1].name;  // just the last key pressed
        instr_resp_si_2.rt = _instr_resp_si_2_allKeys[_instr_resp_si_2_allKeys.length - 1].rt;
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
    for (const thisComponent of instructions_siComponents)
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


function instructions_siRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_si'-------
    for (const thisComponent of instructions_siComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instructions_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_si_allKeys;
var stimulus_identificationComponents;
function stimulus_identificationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'stimulus_identification'-------
    t = 0;
    stimulus_identificationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trialtext = [words_target[i], words_lure[v], words_lure[(v+1)], words_lure[(v+2)]];
    target = trialtext[0];
    positions = [[(- 0.25), 0.25], [0.25, 0.25], [(- 0.25), (- 0.25)], [0.25, (- 0.25)]];
    position_to_key = {[positions[0]]: "a", [positions[1]]: "s", [positions[2]]: "z", [positions[3]]: "x"};
    shuffle(positions);
    if ((presentation === "before")) {
        start_time = .5;
        stop_time = 2;
    } else {
        start_time = 4;
        stop_time = 120;
    }
    target_cue.setText(target);
    target_si.setPos(positions.pop());
    target_si.setText(target);
    choice1.setPos(positions.pop());
    choice1.setText(trialtext[1]);
    choice2.setPos(positions.pop());
    choice2.setText(trialtext[2]);
    choice3.setPos(positions.pop());
    choice3.setText(trialtext[3]);
    key_resp_si.keys = undefined;
    key_resp_si.rt = undefined;
    _key_resp_si_allKeys = [];
    // keep track of which components have finished
    stimulus_identificationComponents = [];
    stimulus_identificationComponents.push(fixation);
    stimulus_identificationComponents.push(target_cue);
    stimulus_identificationComponents.push(target_si);
    stimulus_identificationComponents.push(choice1);
    stimulus_identificationComponents.push(choice2);
    stimulus_identificationComponents.push(choice3);
    stimulus_identificationComponents.push(key_resp_si);
    
    for (const thisComponent of stimulus_identificationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimulus_identificationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'stimulus_identification'-------
    // get current time
    t = stimulus_identificationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation.status === PsychoJS.Status.STARTED || fixation.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *target_cue* updates
    if (t >= start_time && target_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_cue.tStart = t;  // (not accounting for frame time here)
      target_cue.frameNStart = frameN;  // exact frame index
      
      target_cue.setAutoDraw(true);
    }

    frameRemains = start_time + stop_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((target_cue.status === PsychoJS.Status.STARTED || target_cue.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      target_cue.setAutoDraw(false);
    }
    
    // *target_si* updates
    if (t >= 4 && target_si.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_si.tStart = t;  // (not accounting for frame time here)
      target_si.frameNStart = frameN;  // exact frame index
      
      target_si.setAutoDraw(true);
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((target_si.status === PsychoJS.Status.STARTED || target_si.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      target_si.setAutoDraw(false);
    }
    
    // *choice1* updates
    if (t >= 4 && choice1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice1.tStart = t;  // (not accounting for frame time here)
      choice1.frameNStart = frameN;  // exact frame index
      
      choice1.setAutoDraw(true);
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((choice1.status === PsychoJS.Status.STARTED || choice1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      choice1.setAutoDraw(false);
    }
    
    // *choice2* updates
    if (t >= 4 && choice2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice2.tStart = t;  // (not accounting for frame time here)
      choice2.frameNStart = frameN;  // exact frame index
      
      choice2.setAutoDraw(true);
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((choice2.status === PsychoJS.Status.STARTED || choice2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      choice2.setAutoDraw(false);
    }
    
    // *choice3* updates
    if (t >= 4 && choice3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice3.tStart = t;  // (not accounting for frame time here)
      choice3.frameNStart = frameN;  // exact frame index
      
      choice3.setAutoDraw(true);
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((choice3.status === PsychoJS.Status.STARTED || choice3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      choice3.setAutoDraw(false);
    }
    
    // *key_resp_si* updates
    if (t >= 4 && key_resp_si.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_si.tStart = t;  // (not accounting for frame time here)
      key_resp_si.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_si.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_si.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_si.clearEvents(); });
    }

    frameRemains = 4 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_si.status === PsychoJS.Status.STARTED || key_resp_si.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_si.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_si.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_si.getKeys({keyList: ['a', 's', 'z', 'x'], waitRelease: false});
      _key_resp_si_allKeys = _key_resp_si_allKeys.concat(theseKeys);
      if (_key_resp_si_allKeys.length > 0) {
        key_resp_si.keys = _key_resp_si_allKeys[_key_resp_si_allKeys.length - 1].name;  // just the last key pressed
        key_resp_si.rt = _key_resp_si_allKeys[_key_resp_si_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_si.keys == position_to_key[target_si.pos]) {
            key_resp_si.corr = 1;
        } else {
            key_resp_si.corr = 0;
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
    for (const thisComponent of stimulus_identificationComponents)
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


function stimulus_identificationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'stimulus_identification'-------
    for (const thisComponent of stimulus_identificationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    i = (i + 1);
    v = (v + 3);
    correct_ans = target_si.pos;
    targetwords.append([target, presentation]);
    psychoJS.experiment.addData("TargetWord_SI", trialtext[0]);
    psychoJS.experiment.addData("ResponseWords_SI", trialtext.slice(1, 4));
    
    // was no response the correct answer?!
    if (key_resp_si.keys === undefined) {
      if (['None','none',undefined].includes(position_to_key[target_si.pos])) {
         key_resp_si.corr = 1;  // correct non-response
      } else {
         key_resp_si.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_si.keys', key_resp_si.keys);
    psychoJS.experiment.addData('key_resp_si.corr', key_resp_si.corr);
    if (typeof key_resp_si.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_si.rt', key_resp_si.rt);
        routineTimer.reset();
        }
    
    key_resp_si.stop();
    // the Routine "stimulus_identification" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_block_si_allKeys;
var end_block_siComponents;
function end_block_siRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end_block_si'-------
    t = 0;
    end_block_siClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_block_si.keys = undefined;
    key_resp_block_si.rt = undefined;
    _key_resp_block_si_allKeys = [];
    // keep track of which components have finished
    end_block_siComponents = [];
    end_block_siComponents.push(end_block_si_text);
    end_block_siComponents.push(key_resp_block_si);
    
    for (const thisComponent of end_block_siComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_block_siRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end_block_si'-------
    // get current time
    t = end_block_siClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_block_si_text* updates
    if (t >= 0.0 && end_block_si_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_block_si_text.tStart = t;  // (not accounting for frame time here)
      end_block_si_text.frameNStart = frameN;  // exact frame index
      
      end_block_si_text.setAutoDraw(true);
    }

    
    // *key_resp_block_si* updates
    if (t >= 0.0 && key_resp_block_si.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_block_si.tStart = t;  // (not accounting for frame time here)
      key_resp_block_si.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_block_si.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_block_si.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_block_si.clearEvents(); });
    }

    if (key_resp_block_si.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_block_si.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_block_si_allKeys = _key_resp_block_si_allKeys.concat(theseKeys);
      if (_key_resp_block_si_allKeys.length > 0) {
        key_resp_block_si.keys = _key_resp_block_si_allKeys[_key_resp_block_si_allKeys.length - 1].name;  // just the last key pressed
        key_resp_block_si.rt = _key_resp_block_si_allKeys[_key_resp_block_si_allKeys.length - 1].rt;
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
    for (const thisComponent of end_block_siComponents)
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


function end_block_siRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end_block_si'-------
    for (const thisComponent of end_block_siComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end_block_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var rat_setupComponents;
function rat_setupRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'rat_setup'-------
    t = 0;
    rat_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    rat_stim.append([Items, CorrectAnswer]);
    shuffle(rat_stim);
    
    // keep track of which components have finished
    rat_setupComponents = [];
    
    for (const thisComponent of rat_setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rat_setupRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'rat_setup'-------
    // get current time
    t = rat_setupClock.getTime();
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
    for (const thisComponent of rat_setupComponents)
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


function rat_setupRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'rat_setup'-------
    for (const thisComponent of rat_setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "rat_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var instructions_ratComponents;
function instructions_ratRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_rat'-------
    t = 0;
    instructions_ratClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    instructions_ratComponents = [];
    instructions_ratComponents.push(instructions_rat_text);
    instructions_ratComponents.push(key_resp_2);
    
    for (const thisComponent of instructions_ratComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_ratRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_rat'-------
    // get current time
    t = instructions_ratClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_rat_text* updates
    if (t >= 0.0 && instructions_rat_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_rat_text.tStart = t;  // (not accounting for frame time here)
      instructions_rat_text.frameNStart = frameN;  // exact frame index
      
      instructions_rat_text.setAutoDraw(true);
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_ratComponents)
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


function instructions_ratRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_rat'-------
    for (const thisComponent of instructions_ratComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instructions_rat" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_rat_allKeys;
var rat_testComponents;
function rat_testRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'rat_test'-------
    t = 0;
    rat_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    rat_text.setText(rat_stim[rat_i][0]);
    key_resp_rat.keys = undefined;
    key_resp_rat.rt = undefined;
    _key_resp_rat_allKeys = [];
    // keep track of which components have finished
    rat_testComponents = [];
    rat_testComponents.push(rat_text);
    rat_testComponents.push(key_resp_rat);
    rat_testComponents.push(text_resp);
    
    for (const thisComponent of rat_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rat_testRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'rat_test'-------
    // get current time
    t = rat_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rat_text* updates
    if (t >= 0.0 && rat_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rat_text.tStart = t;  // (not accounting for frame time here)
      rat_text.frameNStart = frameN;  // exact frame index
      
      rat_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rat_text.status === PsychoJS.Status.STARTED || rat_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rat_text.setAutoDraw(false);
    }
    let theseKeys = psychoJS.eventManager.getKeys();
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.indexOf('return') > -1) {
        textAdd = '';  // Add nothing
        tempText = text_resp.text;  // get the text from the text component
        text_resp.setText('');  // empty the onscreen text ready for next input (just be sure to save it)
        continueRoutine = false; // End routine 
    }
    
    if (textAdd) {
        if (theseKeys.indexOf('space') > -1) {
            text_resp.setText(text_resp.text + " ");  
            textAdd = undefined;
        } else if (theseKeys.indexOf('backspace') > -1) {
            text_resp.setText(text_resp.text + textAdd[textAdd.length-1]);  
            textAdd = '';  // Add nothing
            text_resp.setText('')  // empty the onscreen text ready for next input (just be sure to save it)
        } else if (theseKeys.indexOf('lshift') > -1) {
            text_resp.setText(text_resp.text + " ");  
            textAdd = undefined;
        } else if (theseKeys.indexOf('rshift') > -1) {
            text_resp.setText(text_resp.text + " ");  
            textAdd = undefined;
        } else {
            text_resp.setText(text_resp.text + textAdd);  
            textAdd = undefined;
        }
    }
    
    // *key_resp_rat* updates
    if (t >= 0.0 && key_resp_rat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_rat.tStart = t;  // (not accounting for frame time here)
      key_resp_rat.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_rat.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_rat.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_rat.clearEvents(); });
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_rat.status === PsychoJS.Status.STARTED || key_resp_rat.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_rat.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_rat.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_rat.getKeys({keyList: [], waitRelease: false});
      _key_resp_rat_allKeys = _key_resp_rat_allKeys.concat(theseKeys);
      if (_key_resp_rat_allKeys.length > 0) {
        key_resp_rat.keys = _key_resp_rat_allKeys.map((key) => key.name);  // storing all keys
        key_resp_rat.rt = _key_resp_rat_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *text_resp* updates
    if (t >= 0.0 && text_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_resp.tStart = t;  // (not accounting for frame time here)
      text_resp.frameNStart = frameN;  // exact frame index
      
      text_resp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_resp.status === PsychoJS.Status.STARTED || text_resp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_resp.setAutoDraw(false);
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
    for (const thisComponent of rat_testComponents)
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


function rat_testRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'rat_test'-------
    for (const thisComponent of rat_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textInput', tempText);
    psychoJS.experiment.addData('PresentedItems', rat_stim[rat_i][0]);
    psychoJS.experiment.addData('CorrectAnswer_RAT', rat_stim[rat_i][1]);
    
    rat_i = (rat_i+1);
    text_resp.setText('');  // empty the onscreen text ready for next input (just be sure to save it)
    
    psychoJS.experiment.addData('key_resp_rat.keys', key_resp_rat.keys);
    if (typeof key_resp_rat.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_rat.rt', key_resp_rat.rt);
        }
    
    key_resp_rat.stop();
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
    shuffle(targetwords);
    document.body.style.cursor='auto';
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
    target_ltm.setText(targetwords[m][0]);
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
    psychoJS.experiment.addData("TargetWord", targetwords[m][0]);
    psychoJS.experiment.addData("TargetTextDisplayed", target_text);
    psychoJS.experiment.addData("DistractorWord", distractor_text);
    psychoJS.experiment.addData("PresentationCondition", targetwords[m][1]);
    psychoJS.experiment.addData('TargetPosition', target_pos)
    psychoJS.experiment.addData('DistractorPosition', distractor_pos)
    m = (m+1);
    
    
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
