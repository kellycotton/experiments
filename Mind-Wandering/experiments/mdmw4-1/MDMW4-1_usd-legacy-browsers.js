﻿/******************** 
 * Mdmw4-1_Usd Test *
 ********************/


// store info about the experiment session:
let expName = 'MDMW4-1_usd';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'version': '4.1', 'site': 'usd'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('#A9A9A9'),
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
flowScheduler.add(start_codeRoutineBegin());
flowScheduler.add(start_codeRoutineEachFrame());
flowScheduler.add(start_codeRoutineEnd());
flowScheduler.add(exp_instructionsRoutineBegin());
flowScheduler.add(exp_instructionsRoutineEachFrame());
flowScheduler.add(exp_instructionsRoutineEnd());
flowScheduler.add(practice_instructions1RoutineBegin());
flowScheduler.add(practice_instructions1RoutineEachFrame());
flowScheduler.add(practice_instructions1RoutineEnd());
const trials_practice_presentationLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_practice_presentationLoopBegin(trials_practice_presentationLoopScheduler));
flowScheduler.add(trials_practice_presentationLoopScheduler);
flowScheduler.add(trials_practice_presentationLoopEnd);
flowScheduler.add(practice_instructions2RoutineBegin());
flowScheduler.add(practice_instructions2RoutineEachFrame());
flowScheduler.add(practice_instructions2RoutineEnd());
const trials_cogload_practice1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_cogload_practice1LoopBegin(trials_cogload_practice1LoopScheduler));
flowScheduler.add(trials_cogload_practice1LoopScheduler);
flowScheduler.add(trials_cogload_practice1LoopEnd);
flowScheduler.add(practice_instructions3RoutineBegin());
flowScheduler.add(practice_instructions3RoutineEachFrame());
flowScheduler.add(practice_instructions3RoutineEnd());
const trials_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_practiceLoopBegin(trials_practiceLoopScheduler));
flowScheduler.add(trials_practiceLoopScheduler);
flowScheduler.add(trials_practiceLoopEnd);
flowScheduler.add(end_blockRoutineBegin());
flowScheduler.add(end_blockRoutineEachFrame());
flowScheduler.add(end_blockRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(instructions_mwRoutineBegin());
flowScheduler.add(instructions_mwRoutineEachFrame());
flowScheduler.add(instructions_mwRoutineEnd());
flowScheduler.add(mw_meaningRoutineBegin());
flowScheduler.add(mw_meaningRoutineEachFrame());
flowScheduler.add(mw_meaningRoutineEnd());
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin(blockLoopScheduler));
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);
flowScheduler.add(mw_q_instructRoutineBegin());
flowScheduler.add(mw_q_instructRoutineEachFrame());
flowScheduler.add(mw_q_instructRoutineEnd());
const trials_maasLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_maasLoopBegin(trials_maasLoopScheduler));
flowScheduler.add(trials_maasLoopScheduler);
flowScheduler.add(trials_maasLoopEnd);
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
    {'name': 'exp_cond.xlsx', 'path': 'exp_cond.xlsx'},
    {'name': 'maas.xlsx', 'path': 'maas.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


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
  psychoJS.setRedirectUrls(('https://usd.sona-systems.com/webstudy_credit.aspx?experiment_id=550&credit_token=6a7ddac6eff0477b81ddf9d35d053e10&survey_code=' + expInfo['participant']), '');

  return Scheduler.Event.NEXT;
}


var start_codeClock;
var stim_positions;
var cog_load_stim;
var position_selection;
var mask_size;
var colors;
var mask_colors;
var fix_time;
var stim_time;
var mask_onset;
var mask_time;
var delay_onset;
var delay_time;
var corr_count;
var block_total;
var block_n;
var trial_n;
var shuffle;
var asarray;
var exp_instructionsClock;
var text_10;
var key_resp_4;
var practice_instructions1Clock;
var text_instructions_2;
var key_resp_5;
var practice_presentationClock;
var fixation_2;
var stim1_2;
var mask1;
var mask1_5;
var mask1_6;
var mask1_7;
var delayClock;
var text_12;
var practice_presentation_2Clock;
var stim2_3;
var mask2_8;
var mask2_9;
var mask2_10;
var mask2_11;
var practice_presentation_3Clock;
var stim3_4;
var mask3_12;
var mask3_13;
var mask3_14;
var mask3_15;
var practice_presentation_4Clock;
var stim4_2;
var mask4_16;
var mask4_17;
var mask4_18;
var mask4_19;
var practice_response_presentationClock;
var resp1_2;
var key_resp_prac;
var text_14;
var feedback_presentationClock;
var msg;
var text_3;
var key_resp_6;
var practice_instructions2Clock;
var text_instructions_3;
var key_resp_7;
var practice_cog_loadClock;
var text_cogload_2;
var key_resp_load_prac;
var feedback_cogloadClock;
var text_4;
var key_resp_8;
var practice_instructions3Clock;
var text_instructions_4;
var key_resp_9;
var stimulus_presentation_4Clock;
var stim4_5;
var mask4_12;
var mask4_13;
var mask4_14;
var mask4_15;
var end_blockClock;
var block_message;
var text_block_end;
var text_6;
var text_2;
var key_resp_3;
var instructionsClock;
var text_instructions;
var key_resp;
var instructions_mwClock;
var text_instructions_5;
var key_resp_14;
var mw_meaningClock;
var text_11;
var key_resp_16;
var key_reminderClock;
var text_remind;
var key_resp_12;
var stimulus_presentationClock;
var fixation;
var stim1;
var mask1_1;
var mask1_2;
var mask1_3;
var mask1_4;
var cog_loadClock;
var text_cogload;
var key_resp_load;
var stimulus_presentation_2Clock;
var stim2_2;
var mask2;
var mask2_5;
var mask2_6;
var mask2_7;
var stimulus_presentation_3Clock;
var stim3_3;
var mask3_8;
var mask3_9;
var mask3_10;
var mask3_11;
var stimulus_responseClock;
var resp1;
var key_resp_stimulus;
var text_15;
var mw_probeClock;
var mw_text;
var key_resp_mw;
var feedback_trialsClock;
var text_13;
var key_resp_17;
var mw_q_instructClock;
var text;
var text_number_2;
var text_text_2;
var mw_q_continue_2;
var key_resp_15;
var mw_questionsClock;
var mw_q_text_2;
var text_number;
var text_text;
var mw_q_text;
var key_resp_mw_q;
var key_resp_13;
var mw_q_continue;
var endClock;
var text_end;
var key_resp_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "start_code"
  start_codeClock = new util.Clock();
  stim_positions = [[0, 0.125], [0, (- 0.125)], [0.125, 0], [(- 0.125), 0], [0.125, 0.125], [0.125, (- 0.125)], [(- 0.125), 0.125], [(- 0.125), (- 0.125)]];
  cog_load_stim = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  position_selection = [0, 1, 2, 3];
  mask_size = [0.025, 0.025];
  colors = ["Crimson", "Chartreuse", "Blue", "Yellow", "MediumOrchid", "DarkOrange", "DodgerBlue", "Turquoise", "MediumVioletRed"];
  mask_colors = ["Crimson", "Chartreuse", "Blue", "Yellow", "MediumOrchid", "DarkOrange", "DodgerBlue", "Turquoise", "MediumVioletRed"];
  fix_time = 0.5;
  stim_time = 0.5;
  mask_onset = 1;
  mask_time = 0.1;
  delay_onset = 1.1;
  delay_time = 0.8;
  corr_count = 0;
  block_total = 5;
  block_n = 0;
  trial_n = 0;
  
  shuffle = util.shuffle
  asarray = function(something) {
  return something;
  }
  
  document.body.style.cursor='none';
  // Initialize components for Routine "exp_instructions"
  exp_instructionsClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Welcome to the experiment! \n\nIn this experiment, you will be completing a series of memory problems where you remember colored squares while judging whether numbers are even or odd. \n\nYou will also tell us what you were thinking about during each trial. \n\nBefore you get started, you will practice each of the tasks individually, then together.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions1"
  practice_instructions1Clock = new util.Clock();
  text_instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_2',
    text: 'Let’s practice the first task.\nIn this task, you will first see a series of colored squares, each followed by a group of jumbled squares that will replace the original colored square.\n\nAfter a brief delay, you will see one square in the same location as one of the previously presented squares. Your job is to determine if this square is the same color as the original square.\n\nPress S if it is the same color and D if it is a different color.\n\nDuring the practice, you will receive feedback about your performance. \n\nPress SPACE to start the practice.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_presentation"
  practice_presentationClock = new util.Clock();
  fixation_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  stim1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim1_2', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  mask1 = new visual.Rect ({
    win: psychoJS.window, name: 'mask1', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mask1_5 = new visual.Rect ({
    win: psychoJS.window, name: 'mask1_5', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  mask1_6 = new visual.Rect ({
    win: psychoJS.window, name: 'mask1_6', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  mask1_7 = new visual.Rect ({
    win: psychoJS.window, name: 'mask1_7', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  // Initialize components for Routine "delay"
  delayClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice_presentation_2"
  practice_presentation_2Clock = new util.Clock();
  stim2_3 = new visual.Rect ({
    win: psychoJS.window, name: 'stim2_3', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  mask2_8 = new visual.Rect ({
    win: psychoJS.window, name: 'mask2_8', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  mask2_9 = new visual.Rect ({
    win: psychoJS.window, name: 'mask2_9', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  mask2_10 = new visual.Rect ({
    win: psychoJS.window, name: 'mask2_10', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mask2_11 = new visual.Rect ({
    win: psychoJS.window, name: 'mask2_11', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "practice_presentation_3"
  practice_presentation_3Clock = new util.Clock();
  stim3_4 = new visual.Rect ({
    win: psychoJS.window, name: 'stim3_4', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  mask3_12 = new visual.Rect ({
    win: psychoJS.window, name: 'mask3_12', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  mask3_13 = new visual.Rect ({
    win: psychoJS.window, name: 'mask3_13', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  mask3_14 = new visual.Rect ({
    win: psychoJS.window, name: 'mask3_14', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mask3_15 = new visual.Rect ({
    win: psychoJS.window, name: 'mask3_15', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "practice_presentation_4"
  practice_presentation_4Clock = new util.Clock();
  stim4_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim4_2', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  mask4_16 = new visual.Rect ({
    win: psychoJS.window, name: 'mask4_16', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  mask4_17 = new visual.Rect ({
    win: psychoJS.window, name: 'mask4_17', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  mask4_18 = new visual.Rect ({
    win: psychoJS.window, name: 'mask4_18', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mask4_19 = new visual.Rect ({
    win: psychoJS.window, name: 'mask4_19', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "practice_response_presentation"
  practice_response_presentationClock = new util.Clock();
  resp1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'resp1_2', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  key_resp_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "feedback_presentation"
  feedback_presentationClock = new util.Clock();
  msg = "no message";
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions2"
  practice_instructions2Clock = new util.Clock();
  text_instructions_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_3',
    text: 'Now, we’ll practice the second task.\nIn this task, you may see a number in the center of the screen.\n\nYour job is to decide if it is even or odd.\n\nPlease try to respond as quickly and accurately as possible.\n\nPress I if the number is even and O if the number is odd.\n\nDuring the practice, you will receive feedback about your performance. \n\nPress SPACE to start the practice.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_cog_load"
  practice_cog_loadClock = new util.Clock();
  text_cogload_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_cogload_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_load_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_cogload"
  feedback_cogloadClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions3"
  practice_instructions3Clock = new util.Clock();
  text_instructions_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_4',
    text: 'Now, we are going to combine the colored square task and the number task.\n\nFirst, you will see a a colored square, followed by a group of jumbled squares. You may then see a series of numbers in the center of the screen. Again, you will decide if each number is even or odd. You might see 0, 2, or 4 numbers. This pattern will repeat four times.\n\nFinally, after you have seen all of the colored squares, you will see a single colored square. Just like before, you have to decide if that colored square is the same color as the original square in that location.\n\nRemember, for the colored square task, press S if the color is the same and D if the color is different.\n\nFor the number task, press I if the number is even and O if the number is odd.\n\nPress SPACE to start the practice.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stimulus_presentation_4"
  stimulus_presentation_4Clock = new util.Clock();
  stim4_5 = new visual.Rect ({
    win: psychoJS.window, name: 'stim4_5', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  mask4_12 = new visual.Rect ({
    win: psychoJS.window, name: 'mask4_12', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  mask4_13 = new visual.Rect ({
    win: psychoJS.window, name: 'mask4_13', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  mask4_14 = new visual.Rect ({
    win: psychoJS.window, name: 'mask4_14', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mask4_15 = new visual.Rect ({
    win: psychoJS.window, name: 'mask4_15', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "end_block"
  end_blockClock = new util.Clock();
  msg = "no message!";
  block_message = 'no message';
  text_block_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_block_end',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Please take a short break.\n\nPress SPACE when you are ready to begin again.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: 'Now we are going to begin the real experiment.\n\nEverything will be the same as in the practice.\n\nAfter each trial you will be asked to indicate what you were just thinking about. It is perfectly normal to think about things that are not related to the task. \n\nWe will give you several categories of things that people might think about during tasks like these. Please try your best to honestly assess your thoughts and choose a category that best describes your thoughts at the time when we ask.\n\nPress SPACE to continue.',
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
    text: 'Below are the different options and corresponding number that you will press:\n\n1) The task: for thoughts about task stimuli, required responses, or task goals\n2) Task experience/performance: for thoughts\nabout your performance or task difficulty \n3) Everyday things: for thoughts about normal events in the recent or distant past or future\n4) Current state of being: for thoughts about your physical or emotional state \n5) Personal worries: for thoughts about your life concerns\n6) Daydreams: for fantasies or thoughts disconnected from reality\n7) External environment: for thoughts about objects or task unrelated events in the room\n8) Other: for any thoughts not captured by the other choices\n\nWhen you are ready to begin the experiment, press SPACE.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "key_reminder"
  key_reminderClock = new util.Clock();
  text_remind = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_remind',
    text: 'Remember\n\nFor the colored square task:\nS = same\nD = different\n\nFor the even/odd task:\nI = even\nO = odd\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stimulus_presentation"
  stimulus_presentationClock = new util.Clock();
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  stim1 = new visual.Rect ({
    win: psychoJS.window, name: 'stim1', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  mask1_1 = new visual.Rect ({
    win: psychoJS.window, name: 'mask1_1', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mask1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'mask1_2', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  mask1_3 = new visual.Rect ({
    win: psychoJS.window, name: 'mask1_3', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  mask1_4 = new visual.Rect ({
    win: psychoJS.window, name: 'mask1_4', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  // Initialize components for Routine "cog_load"
  cog_loadClock = new util.Clock();
  text_cogload = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_cogload',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_load = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stimulus_presentation_2"
  stimulus_presentation_2Clock = new util.Clock();
  stim2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim2_2', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  mask2 = new visual.Rect ({
    win: psychoJS.window, name: 'mask2', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  mask2_5 = new visual.Rect ({
    win: psychoJS.window, name: 'mask2_5', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  mask2_6 = new visual.Rect ({
    win: psychoJS.window, name: 'mask2_6', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mask2_7 = new visual.Rect ({
    win: psychoJS.window, name: 'mask2_7', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "stimulus_presentation_3"
  stimulus_presentation_3Clock = new util.Clock();
  stim3_3 = new visual.Rect ({
    win: psychoJS.window, name: 'stim3_3', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  mask3_8 = new visual.Rect ({
    win: psychoJS.window, name: 'mask3_8', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  mask3_9 = new visual.Rect ({
    win: psychoJS.window, name: 'mask3_9', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  mask3_10 = new visual.Rect ({
    win: psychoJS.window, name: 'mask3_10', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  mask3_11 = new visual.Rect ({
    win: psychoJS.window, name: 'mask3_11', 
    width: [mask_size[0], mask_size[1]][0], height: [mask_size[0], mask_size[1]][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "stimulus_response"
  stimulus_responseClock = new util.Clock();
  resp1 = new visual.Rect ({
    win: psychoJS.window, name: 'resp1', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  key_resp_stimulus = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "mw_probe"
  mw_probeClock = new util.Clock();
  mw_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'mw_text',
    text: 'What were you just thinking about?\n\n1) The task\n2) Task experience/performance\n3) Everyday things\n4) Current state of being\n5) Personal worries\n6) Daydreams\n7) External environment\n8) Other\n\nSelect an option to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_mw = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_trials"
  feedback_trialsClock = new util.Clock();
  msg = "no message";
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mw_q_instruct"
  mw_q_instructClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Now we will present a collection of statements about your everyday experience. Using the 1-6 scale below, please indicate how frequently or infrequently you currently have each experience. Please answer according to what really reflects your experience rather than what you think your experience should be. Please treat each item separately from every other item.  ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_number_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_number_2',
    text: '1       2        3        4          5      6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.06,  wrapWidth: 500.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_text_2',
    text: '  Almost         Very        Somewhat     Somewhat           Very          Almost\n always     frequently    frequently     infrequently    infrequently    never',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.03], height: 0.03,  wrapWidth: 500.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mw_q_continue_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'mw_q_continue_2',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mw_questions"
  mw_questionsClock = new util.Clock();
  mw_q_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'mw_q_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_number = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_number',
    text: '1       2        3        4          5      6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.06,  wrapWidth: 500.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_text',
    text: '  Almost         Very        Somewhat     Somewhat           Very          Almost\n always     frequently    frequently     infrequently    infrequently    never',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.03], height: 0.03,  wrapWidth: 500.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  mw_q_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'mw_q_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -4.0 
  });
  
  key_resp_mw_q = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mw_q_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'mw_q_continue',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'You have reached the end of the experiment.\n\nThank you for participating!\n\nPress SPACE to end.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var start_codeComponents;
function start_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'start_code'-------
    t = 0;
    start_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    start_codeComponents = [];
    
    start_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_codeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'start_code'-------
    // get current time
    t = start_codeClock.getTime();
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
    start_codeComponents.forEach( function(thisComponent) {
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


function start_codeRoutineEnd() {
  return async function () {
    //------Ending Routine 'start_code'-------
    start_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "start_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var exp_instructionsComponents;
function exp_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exp_instructions'-------
    t = 0;
    exp_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    exp_instructionsComponents = [];
    exp_instructionsComponents.push(text_10);
    exp_instructionsComponents.push(key_resp_4);
    
    exp_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp_instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exp_instructions'-------
    // get current time
    t = exp_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 1.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
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
    exp_instructionsComponents.forEach( function(thisComponent) {
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


function exp_instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'exp_instructions'-------
    exp_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_4.stop();
    // the Routine "exp_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var practice_instructions1Components;
function practice_instructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_instructions1'-------
    t = 0;
    practice_instructions1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    practice_instructions1Components = [];
    practice_instructions1Components.push(text_instructions_2);
    practice_instructions1Components.push(key_resp_5);
    
    practice_instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_instructions1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_instructions1'-------
    // get current time
    t = practice_instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_2* updates
    if (t >= 0.0 && text_instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_2.tStart = t;  // (not accounting for frame time here)
      text_instructions_2.frameNStart = frameN;  // exact frame index
      
      text_instructions_2.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 1.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
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
    practice_instructions1Components.forEach( function(thisComponent) {
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


function practice_instructions1RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instructions1'-------
    practice_instructions1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_5.stop();
    // the Routine "practice_instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_practice_presentation;
var currentLoop;
function trials_practice_presentationLoopBegin(trials_practice_presentationLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_practice_presentation = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'exp_cond.xlsx', '3:6'),
      seed: undefined, name: 'trials_practice_presentation'
    });
    psychoJS.experiment.addLoop(trials_practice_presentation); // add the loop to the experiment
    currentLoop = trials_practice_presentation;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_practice_presentation.forEach(function() {
      const snapshot = trials_practice_presentation.getSnapshot();
    
      trials_practice_presentationLoopScheduler.add(importConditions(snapshot));
      trials_practice_presentationLoopScheduler.add(practice_presentationRoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(practice_presentationRoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(practice_presentationRoutineEnd());
      trials_practice_presentationLoopScheduler.add(delayRoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(delayRoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(delayRoutineEnd());
      trials_practice_presentationLoopScheduler.add(practice_presentation_2RoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(practice_presentation_2RoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(practice_presentation_2RoutineEnd());
      trials_practice_presentationLoopScheduler.add(delayRoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(delayRoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(delayRoutineEnd());
      trials_practice_presentationLoopScheduler.add(practice_presentation_3RoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(practice_presentation_3RoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(practice_presentation_3RoutineEnd());
      trials_practice_presentationLoopScheduler.add(delayRoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(delayRoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(delayRoutineEnd());
      trials_practice_presentationLoopScheduler.add(practice_presentation_4RoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(practice_presentation_4RoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(practice_presentation_4RoutineEnd());
      trials_practice_presentationLoopScheduler.add(delayRoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(delayRoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(delayRoutineEnd());
      trials_practice_presentationLoopScheduler.add(practice_response_presentationRoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(practice_response_presentationRoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(practice_response_presentationRoutineEnd());
      trials_practice_presentationLoopScheduler.add(feedback_presentationRoutineBegin(snapshot));
      trials_practice_presentationLoopScheduler.add(feedback_presentationRoutineEachFrame());
      trials_practice_presentationLoopScheduler.add(feedback_presentationRoutineEnd());
      trials_practice_presentationLoopScheduler.add(endLoopIteration(trials_practice_presentationLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_practice_presentationLoopEnd() {
  psychoJS.experiment.removeLoop(trials_practice_presentation);

  return Scheduler.Event.NEXT;
}


var trials_cogload_practice1;
function trials_cogload_practice1LoopBegin(trials_cogload_practice1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_practice1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'exp_cond.xlsx', '3:6'),
      seed: undefined, name: 'trials_cogload_practice1'
    });
    psychoJS.experiment.addLoop(trials_cogload_practice1); // add the loop to the experiment
    currentLoop = trials_cogload_practice1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_practice1.forEach(function() {
      const snapshot = trials_cogload_practice1.getSnapshot();
    
      trials_cogload_practice1LoopScheduler.add(importConditions(snapshot));
      trials_cogload_practice1LoopScheduler.add(practice_cog_loadRoutineBegin(snapshot));
      trials_cogload_practice1LoopScheduler.add(practice_cog_loadRoutineEachFrame());
      trials_cogload_practice1LoopScheduler.add(practice_cog_loadRoutineEnd());
      trials_cogload_practice1LoopScheduler.add(feedback_cogloadRoutineBegin(snapshot));
      trials_cogload_practice1LoopScheduler.add(feedback_cogloadRoutineEachFrame());
      trials_cogload_practice1LoopScheduler.add(feedback_cogloadRoutineEnd());
      trials_cogload_practice1LoopScheduler.add(endLoopIteration(trials_cogload_practice1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_practice1LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_practice1);

  return Scheduler.Event.NEXT;
}


var trials_practice;
function trials_practiceLoopBegin(trials_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'exp_cond.xlsx', '2:5'),
      seed: undefined, name: 'trials_practice'
    });
    psychoJS.experiment.addLoop(trials_practice); // add the loop to the experiment
    currentLoop = trials_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_practice.forEach(function() {
      const snapshot = trials_practice.getSnapshot();
    
      trials_practiceLoopScheduler.add(importConditions(snapshot));
      trials_practiceLoopScheduler.add(practice_presentationRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(practice_presentationRoutineEachFrame());
      trials_practiceLoopScheduler.add(practice_presentationRoutineEnd());
      trials_practiceLoopScheduler.add(delayRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(delayRoutineEachFrame());
      trials_practiceLoopScheduler.add(delayRoutineEnd());
      const trials_cogload_practice2_1LoopScheduler = new Scheduler(psychoJS);
      trials_practiceLoopScheduler.add(trials_cogload_practice2_1LoopBegin(trials_cogload_practice2_1LoopScheduler, snapshot));
      trials_practiceLoopScheduler.add(trials_cogload_practice2_1LoopScheduler);
      trials_practiceLoopScheduler.add(trials_cogload_practice2_1LoopEnd);
      trials_practiceLoopScheduler.add(practice_presentation_2RoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(practice_presentation_2RoutineEachFrame());
      trials_practiceLoopScheduler.add(practice_presentation_2RoutineEnd());
      trials_practiceLoopScheduler.add(delayRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(delayRoutineEachFrame());
      trials_practiceLoopScheduler.add(delayRoutineEnd());
      const trials_cogload_practice2_2LoopScheduler = new Scheduler(psychoJS);
      trials_practiceLoopScheduler.add(trials_cogload_practice2_2LoopBegin(trials_cogload_practice2_2LoopScheduler, snapshot));
      trials_practiceLoopScheduler.add(trials_cogload_practice2_2LoopScheduler);
      trials_practiceLoopScheduler.add(trials_cogload_practice2_2LoopEnd);
      trials_practiceLoopScheduler.add(practice_presentation_3RoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(practice_presentation_3RoutineEachFrame());
      trials_practiceLoopScheduler.add(practice_presentation_3RoutineEnd());
      trials_practiceLoopScheduler.add(delayRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(delayRoutineEachFrame());
      trials_practiceLoopScheduler.add(delayRoutineEnd());
      const trials_cogload_practice2_3LoopScheduler = new Scheduler(psychoJS);
      trials_practiceLoopScheduler.add(trials_cogload_practice2_3LoopBegin(trials_cogload_practice2_3LoopScheduler, snapshot));
      trials_practiceLoopScheduler.add(trials_cogload_practice2_3LoopScheduler);
      trials_practiceLoopScheduler.add(trials_cogload_practice2_3LoopEnd);
      trials_practiceLoopScheduler.add(stimulus_presentation_4RoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(stimulus_presentation_4RoutineEachFrame());
      trials_practiceLoopScheduler.add(stimulus_presentation_4RoutineEnd());
      trials_practiceLoopScheduler.add(delayRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(delayRoutineEachFrame());
      trials_practiceLoopScheduler.add(delayRoutineEnd());
      const trials_cogload_practice2_4LoopScheduler = new Scheduler(psychoJS);
      trials_practiceLoopScheduler.add(trials_cogload_practice2_4LoopBegin(trials_cogload_practice2_4LoopScheduler, snapshot));
      trials_practiceLoopScheduler.add(trials_cogload_practice2_4LoopScheduler);
      trials_practiceLoopScheduler.add(trials_cogload_practice2_4LoopEnd);
      trials_practiceLoopScheduler.add(practice_response_presentationRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(practice_response_presentationRoutineEachFrame());
      trials_practiceLoopScheduler.add(practice_response_presentationRoutineEnd());
      trials_practiceLoopScheduler.add(feedback_presentationRoutineBegin(snapshot));
      trials_practiceLoopScheduler.add(feedback_presentationRoutineEachFrame());
      trials_practiceLoopScheduler.add(feedback_presentationRoutineEnd());
      trials_practiceLoopScheduler.add(endLoopIteration(trials_practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_cogload_practice2_1;
function trials_cogload_practice2_1LoopBegin(trials_cogload_practice2_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_practice2_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: cognitive_load, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_cogload_practice2_1'
    });
    psychoJS.experiment.addLoop(trials_cogload_practice2_1); // add the loop to the experiment
    currentLoop = trials_cogload_practice2_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_practice2_1.forEach(function() {
      const snapshot = trials_cogload_practice2_1.getSnapshot();
    
      trials_cogload_practice2_1LoopScheduler.add(importConditions(snapshot));
      trials_cogload_practice2_1LoopScheduler.add(practice_cog_loadRoutineBegin(snapshot));
      trials_cogload_practice2_1LoopScheduler.add(practice_cog_loadRoutineEachFrame());
      trials_cogload_practice2_1LoopScheduler.add(practice_cog_loadRoutineEnd());
      trials_cogload_practice2_1LoopScheduler.add(endLoopIteration(trials_cogload_practice2_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_practice2_1LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_practice2_1);

  return Scheduler.Event.NEXT;
}


var trials_cogload_practice2_2;
function trials_cogload_practice2_2LoopBegin(trials_cogload_practice2_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_practice2_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: cognitive_load, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_cogload_practice2_2'
    });
    psychoJS.experiment.addLoop(trials_cogload_practice2_2); // add the loop to the experiment
    currentLoop = trials_cogload_practice2_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_practice2_2.forEach(function() {
      const snapshot = trials_cogload_practice2_2.getSnapshot();
    
      trials_cogload_practice2_2LoopScheduler.add(importConditions(snapshot));
      trials_cogload_practice2_2LoopScheduler.add(practice_cog_loadRoutineBegin(snapshot));
      trials_cogload_practice2_2LoopScheduler.add(practice_cog_loadRoutineEachFrame());
      trials_cogload_practice2_2LoopScheduler.add(practice_cog_loadRoutineEnd());
      trials_cogload_practice2_2LoopScheduler.add(endLoopIteration(trials_cogload_practice2_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_practice2_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_practice2_2);

  return Scheduler.Event.NEXT;
}


var trials_cogload_practice2_3;
function trials_cogload_practice2_3LoopBegin(trials_cogload_practice2_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_practice2_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: cognitive_load, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_cogload_practice2_3'
    });
    psychoJS.experiment.addLoop(trials_cogload_practice2_3); // add the loop to the experiment
    currentLoop = trials_cogload_practice2_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_practice2_3.forEach(function() {
      const snapshot = trials_cogload_practice2_3.getSnapshot();
    
      trials_cogload_practice2_3LoopScheduler.add(importConditions(snapshot));
      trials_cogload_practice2_3LoopScheduler.add(practice_cog_loadRoutineBegin(snapshot));
      trials_cogload_practice2_3LoopScheduler.add(practice_cog_loadRoutineEachFrame());
      trials_cogload_practice2_3LoopScheduler.add(practice_cog_loadRoutineEnd());
      trials_cogload_practice2_3LoopScheduler.add(endLoopIteration(trials_cogload_practice2_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_practice2_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_practice2_3);

  return Scheduler.Event.NEXT;
}


var trials_cogload_practice2_4;
function trials_cogload_practice2_4LoopBegin(trials_cogload_practice2_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_practice2_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: cognitive_load, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_cogload_practice2_4'
    });
    psychoJS.experiment.addLoop(trials_cogload_practice2_4); // add the loop to the experiment
    currentLoop = trials_cogload_practice2_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_practice2_4.forEach(function() {
      const snapshot = trials_cogload_practice2_4.getSnapshot();
    
      trials_cogload_practice2_4LoopScheduler.add(importConditions(snapshot));
      trials_cogload_practice2_4LoopScheduler.add(practice_cog_loadRoutineBegin(snapshot));
      trials_cogload_practice2_4LoopScheduler.add(practice_cog_loadRoutineEachFrame());
      trials_cogload_practice2_4LoopScheduler.add(practice_cog_loadRoutineEnd());
      trials_cogload_practice2_4LoopScheduler.add(endLoopIteration(trials_cogload_practice2_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_practice2_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_practice2_4);

  return Scheduler.Event.NEXT;
}


async function trials_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(trials_practice);

  return Scheduler.Event.NEXT;
}


var block;
function blockLoopBegin(blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: block_total, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block'
    });
    psychoJS.experiment.addLoop(block); // add the loop to the experiment
    currentLoop = block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block.forEach(function() {
      const snapshot = block.getSnapshot();
    
      blockLoopScheduler.add(importConditions(snapshot));
      blockLoopScheduler.add(key_reminderRoutineBegin(snapshot));
      blockLoopScheduler.add(key_reminderRoutineEachFrame());
      blockLoopScheduler.add(key_reminderRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blockLoopScheduler.add(trialsLoopScheduler);
      blockLoopScheduler.add(trialsLoopEnd);
      blockLoopScheduler.add(end_blockRoutineBegin(snapshot));
      blockLoopScheduler.add(end_blockRoutineEachFrame());
      blockLoopScheduler.add(end_blockRoutineEnd());
      blockLoopScheduler.add(endLoopIteration(blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'exp_cond.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(stimulus_presentationRoutineBegin(snapshot));
      trialsLoopScheduler.add(stimulus_presentationRoutineEachFrame());
      trialsLoopScheduler.add(stimulus_presentationRoutineEnd());
      trialsLoopScheduler.add(delayRoutineBegin(snapshot));
      trialsLoopScheduler.add(delayRoutineEachFrame());
      trialsLoopScheduler.add(delayRoutineEnd());
      const trials_cogload_1LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_cogload_1LoopBegin(trials_cogload_1LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_cogload_1LoopScheduler);
      trialsLoopScheduler.add(trials_cogload_1LoopEnd);
      trialsLoopScheduler.add(stimulus_presentation_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(stimulus_presentation_2RoutineEachFrame());
      trialsLoopScheduler.add(stimulus_presentation_2RoutineEnd());
      trialsLoopScheduler.add(delayRoutineBegin(snapshot));
      trialsLoopScheduler.add(delayRoutineEachFrame());
      trialsLoopScheduler.add(delayRoutineEnd());
      const trials_cogload_2LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_cogload_2LoopBegin(trials_cogload_2LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_cogload_2LoopScheduler);
      trialsLoopScheduler.add(trials_cogload_2LoopEnd);
      trialsLoopScheduler.add(stimulus_presentation_3RoutineBegin(snapshot));
      trialsLoopScheduler.add(stimulus_presentation_3RoutineEachFrame());
      trialsLoopScheduler.add(stimulus_presentation_3RoutineEnd());
      trialsLoopScheduler.add(delayRoutineBegin(snapshot));
      trialsLoopScheduler.add(delayRoutineEachFrame());
      trialsLoopScheduler.add(delayRoutineEnd());
      const trials_cogload_3LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_cogload_3LoopBegin(trials_cogload_3LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_cogload_3LoopScheduler);
      trialsLoopScheduler.add(trials_cogload_3LoopEnd);
      trialsLoopScheduler.add(stimulus_presentation_4RoutineBegin(snapshot));
      trialsLoopScheduler.add(stimulus_presentation_4RoutineEachFrame());
      trialsLoopScheduler.add(stimulus_presentation_4RoutineEnd());
      trialsLoopScheduler.add(delayRoutineBegin(snapshot));
      trialsLoopScheduler.add(delayRoutineEachFrame());
      trialsLoopScheduler.add(delayRoutineEnd());
      const trials_cogload_4LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_cogload_4LoopBegin(trials_cogload_4LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_cogload_4LoopScheduler);
      trialsLoopScheduler.add(trials_cogload_4LoopEnd);
      trialsLoopScheduler.add(stimulus_responseRoutineBegin(snapshot));
      trialsLoopScheduler.add(stimulus_responseRoutineEachFrame());
      trialsLoopScheduler.add(stimulus_responseRoutineEnd());
      trialsLoopScheduler.add(mw_probeRoutineBegin(snapshot));
      trialsLoopScheduler.add(mw_probeRoutineEachFrame());
      trialsLoopScheduler.add(mw_probeRoutineEnd());
      trialsLoopScheduler.add(feedback_trialsRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedback_trialsRoutineEachFrame());
      trialsLoopScheduler.add(feedback_trialsRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_cogload_1;
function trials_cogload_1LoopBegin(trials_cogload_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: cognitive_load, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_cogload_1'
    });
    psychoJS.experiment.addLoop(trials_cogload_1); // add the loop to the experiment
    currentLoop = trials_cogload_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_1.forEach(function() {
      const snapshot = trials_cogload_1.getSnapshot();
    
      trials_cogload_1LoopScheduler.add(importConditions(snapshot));
      trials_cogload_1LoopScheduler.add(cog_loadRoutineBegin(snapshot));
      trials_cogload_1LoopScheduler.add(cog_loadRoutineEachFrame());
      trials_cogload_1LoopScheduler.add(cog_loadRoutineEnd());
      trials_cogload_1LoopScheduler.add(endLoopIteration(trials_cogload_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_1LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_1);

  return Scheduler.Event.NEXT;
}


var trials_cogload_2;
function trials_cogload_2LoopBegin(trials_cogload_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: cognitive_load, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_cogload_2'
    });
    psychoJS.experiment.addLoop(trials_cogload_2); // add the loop to the experiment
    currentLoop = trials_cogload_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_2.forEach(function() {
      const snapshot = trials_cogload_2.getSnapshot();
    
      trials_cogload_2LoopScheduler.add(importConditions(snapshot));
      trials_cogload_2LoopScheduler.add(cog_loadRoutineBegin(snapshot));
      trials_cogload_2LoopScheduler.add(cog_loadRoutineEachFrame());
      trials_cogload_2LoopScheduler.add(cog_loadRoutineEnd());
      trials_cogload_2LoopScheduler.add(endLoopIteration(trials_cogload_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_2);

  return Scheduler.Event.NEXT;
}


var trials_cogload_3;
function trials_cogload_3LoopBegin(trials_cogload_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: cognitive_load, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_cogload_3'
    });
    psychoJS.experiment.addLoop(trials_cogload_3); // add the loop to the experiment
    currentLoop = trials_cogload_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_3.forEach(function() {
      const snapshot = trials_cogload_3.getSnapshot();
    
      trials_cogload_3LoopScheduler.add(importConditions(snapshot));
      trials_cogload_3LoopScheduler.add(cog_loadRoutineBegin(snapshot));
      trials_cogload_3LoopScheduler.add(cog_loadRoutineEachFrame());
      trials_cogload_3LoopScheduler.add(cog_loadRoutineEnd());
      trials_cogload_3LoopScheduler.add(endLoopIteration(trials_cogload_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_3);

  return Scheduler.Event.NEXT;
}


var trials_cogload_4;
function trials_cogload_4LoopBegin(trials_cogload_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cogload_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: cognitive_load, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_cogload_4'
    });
    psychoJS.experiment.addLoop(trials_cogload_4); // add the loop to the experiment
    currentLoop = trials_cogload_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_cogload_4.forEach(function() {
      const snapshot = trials_cogload_4.getSnapshot();
    
      trials_cogload_4LoopScheduler.add(importConditions(snapshot));
      trials_cogload_4LoopScheduler.add(cog_loadRoutineBegin(snapshot));
      trials_cogload_4LoopScheduler.add(cog_loadRoutineEachFrame());
      trials_cogload_4LoopScheduler.add(cog_loadRoutineEnd());
      trials_cogload_4LoopScheduler.add(endLoopIteration(trials_cogload_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cogload_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_cogload_4);

  return Scheduler.Event.NEXT;
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blockLoopEnd() {
  psychoJS.experiment.removeLoop(block);

  return Scheduler.Event.NEXT;
}


var trials_maas;
function trials_maasLoopBegin(trials_maasLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_maas = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'maas.xlsx',
      seed: undefined, name: 'trials_maas'
    });
    psychoJS.experiment.addLoop(trials_maas); // add the loop to the experiment
    currentLoop = trials_maas;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_maas.forEach(function() {
      const snapshot = trials_maas.getSnapshot();
    
      trials_maasLoopScheduler.add(importConditions(snapshot));
      trials_maasLoopScheduler.add(mw_questionsRoutineBegin(snapshot));
      trials_maasLoopScheduler.add(mw_questionsRoutineEachFrame());
      trials_maasLoopScheduler.add(mw_questionsRoutineEnd());
      trials_maasLoopScheduler.add(endLoopIteration(trials_maasLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_maasLoopEnd() {
  psychoJS.experiment.removeLoop(trials_maas);

  return Scheduler.Event.NEXT;
}


var practice_presentationComponents;
function practice_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_presentation'-------
    t = 0;
    practice_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(stim_positions);
    util.shuffle(colors);
    util.shuffle(mask_colors);
    
    stim1_2.setFillColor(new util.Color(colors[0]));
    stim1_2.setPos(stim_positions[0]);
    stim1_2.setLineColor(new util.Color(colors[0]));
    mask1.setFillColor(new util.Color(mask_colors[5]));
    mask1.setPos([(stim_positions[0][0] - 0.0125), (stim_positions[0][1] - 0.0125)]);
    mask1.setLineColor(new util.Color(mask_colors[5]));
    mask1_5.setFillColor(new util.Color(mask_colors[6]));
    mask1_5.setPos([(stim_positions[0][0] + 0.0125), (stim_positions[0][1] - 0.0125)]);
    mask1_5.setLineColor(new util.Color(mask_colors[6]));
    mask1_6.setFillColor(new util.Color(mask_colors[7]));
    mask1_6.setPos([(stim_positions[0][0] + 0.0125), (stim_positions[0][1] + 0.0125)]);
    mask1_6.setLineColor(new util.Color(mask_colors[7]));
    mask1_7.setFillColor(new util.Color(mask_colors[8]));
    mask1_7.setPos([(stim_positions[0][0] - 0.0125), (stim_positions[0][1] + 0.0125)]);
    mask1_7.setLineColor(new util.Color(mask_colors[8]));
    // keep track of which components have finished
    practice_presentationComponents = [];
    practice_presentationComponents.push(fixation_2);
    practice_presentationComponents.push(stim1_2);
    practice_presentationComponents.push(mask1);
    practice_presentationComponents.push(mask1_5);
    practice_presentationComponents.push(mask1_6);
    practice_presentationComponents.push(mask1_7);
    
    practice_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practice_presentationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_presentation'-------
    // get current time
    t = practice_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_2* updates
    if (t >= 0.0 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_2.tStart = t;  // (not accounting for frame time here)
      fixation_2.frameNStart = frameN;  // exact frame index
      
      fixation_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fix_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_2.setAutoDraw(false);
    }
    
    // *stim1_2* updates
    if (t >= fix_time && stim1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1_2.tStart = t;  // (not accounting for frame time here)
      stim1_2.frameNStart = frameN;  // exact frame index
      
      stim1_2.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1_2.setAutoDraw(false);
    }
    
    // *mask1* updates
    if (t >= mask_onset && mask1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1.tStart = t;  // (not accounting for frame time here)
      mask1.frameNStart = frameN;  // exact frame index
      
      mask1.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask1.setAutoDraw(false);
    }
    
    // *mask1_5* updates
    if (t >= mask_onset && mask1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_5.tStart = t;  // (not accounting for frame time here)
      mask1_5.frameNStart = frameN;  // exact frame index
      
      mask1_5.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask1_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask1_5.setAutoDraw(false);
    }
    
    // *mask1_6* updates
    if (t >= mask_onset && mask1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_6.tStart = t;  // (not accounting for frame time here)
      mask1_6.frameNStart = frameN;  // exact frame index
      
      mask1_6.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask1_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask1_6.setAutoDraw(false);
    }
    
    // *mask1_7* updates
    if (t >= mask_onset && mask1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_7.tStart = t;  // (not accounting for frame time here)
      mask1_7.frameNStart = frameN;  // exact frame index
      
      mask1_7.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask1_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask1_7.setAutoDraw(false);
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
    practice_presentationComponents.forEach( function(thisComponent) {
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


function practice_presentationRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_presentation'-------
    practice_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practice_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var delayComponents;
function delayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'delay'-------
    t = 0;
    delayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    delayComponents = [];
    delayComponents.push(text_12);
    
    delayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function delayRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'delay'-------
    // get current time
    t = delayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + delay_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    delayComponents.forEach( function(thisComponent) {
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


function delayRoutineEnd() {
  return async function () {
    //------Ending Routine 'delay'-------
    delayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "delay" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_presentation_2Components;
function practice_presentation_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_presentation_2'-------
    t = 0;
    practice_presentation_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim2_3.setFillColor(new util.Color(colors[1]));
    stim2_3.setPos(stim_positions[1]);
    stim2_3.setLineColor(new util.Color(colors[1]));
    mask2_8.setFillColor(new util.Color(mask_colors[5]));
    mask2_8.setPos([(stim_positions[1][0] - 0.0125), (stim_positions[1][1] - 0.0125)]);
    mask2_8.setLineColor(new util.Color(mask_colors[5]));
    mask2_9.setFillColor(new util.Color(mask_colors[6]));
    mask2_9.setPos([(stim_positions[1][0] + 0.0125), (stim_positions[1][1] - 0.0125)]);
    mask2_9.setLineColor(new util.Color(mask_colors[6]));
    mask2_10.setFillColor(new util.Color(mask_colors[7]));
    mask2_10.setPos([(stim_positions[1][0] + 0.0125), (stim_positions[1][1] + 0.0125)]);
    mask2_10.setLineColor(new util.Color(mask_colors[7]));
    mask2_11.setFillColor(new util.Color(mask_colors[8]));
    mask2_11.setPos([(stim_positions[1][0] - 0.0125), (stim_positions[1][1] + 0.0125)]);
    mask2_11.setLineColor(new util.Color(mask_colors[8]));
    util.shuffle(mask_colors);
    
    // keep track of which components have finished
    practice_presentation_2Components = [];
    practice_presentation_2Components.push(stim2_3);
    practice_presentation_2Components.push(mask2_8);
    practice_presentation_2Components.push(mask2_9);
    practice_presentation_2Components.push(mask2_10);
    practice_presentation_2Components.push(mask2_11);
    
    practice_presentation_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_presentation_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_presentation_2'-------
    // get current time
    t = practice_presentation_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim2_3* updates
    if (t >= fix_time && stim2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2_3.tStart = t;  // (not accounting for frame time here)
      stim2_3.frameNStart = frameN;  // exact frame index
      
      stim2_3.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2_3.setAutoDraw(false);
    }
    
    // *mask2_8* updates
    if (t >= mask_onset && mask2_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_8.tStart = t;  // (not accounting for frame time here)
      mask2_8.frameNStart = frameN;  // exact frame index
      
      mask2_8.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask2_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask2_8.setAutoDraw(false);
    }
    
    // *mask2_9* updates
    if (t >= mask_onset && mask2_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_9.tStart = t;  // (not accounting for frame time here)
      mask2_9.frameNStart = frameN;  // exact frame index
      
      mask2_9.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask2_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask2_9.setAutoDraw(false);
    }
    
    // *mask2_10* updates
    if (t >= mask_onset && mask2_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_10.tStart = t;  // (not accounting for frame time here)
      mask2_10.frameNStart = frameN;  // exact frame index
      
      mask2_10.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask2_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask2_10.setAutoDraw(false);
    }
    
    // *mask2_11* updates
    if (t >= mask_onset && mask2_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_11.tStart = t;  // (not accounting for frame time here)
      mask2_11.frameNStart = frameN;  // exact frame index
      
      mask2_11.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask2_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask2_11.setAutoDraw(false);
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
    practice_presentation_2Components.forEach( function(thisComponent) {
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


function practice_presentation_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_presentation_2'-------
    practice_presentation_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practice_presentation_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_presentation_3Components;
function practice_presentation_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_presentation_3'-------
    t = 0;
    practice_presentation_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim3_4.setFillColor(new util.Color(colors[2]));
    stim3_4.setPos(stim_positions[2]);
    stim3_4.setLineColor(new util.Color(colors[2]));
    mask3_12.setFillColor(new util.Color(mask_colors[5]));
    mask3_12.setPos([(stim_positions[2][0] - 0.0125), (stim_positions[2][1] - 0.0125)]);
    mask3_12.setLineColor(new util.Color(mask_colors[5]));
    mask3_13.setFillColor(new util.Color(mask_colors[6]));
    mask3_13.setPos([(stim_positions[2][0] + 0.0125), (stim_positions[2][1] - 0.0125)]);
    mask3_13.setLineColor(new util.Color(mask_colors[6]));
    mask3_14.setFillColor(new util.Color(mask_colors[7]));
    mask3_14.setPos([(stim_positions[2][0] + 0.0125), (stim_positions[2][1] + 0.0125)]);
    mask3_14.setLineColor(new util.Color(mask_colors[7]));
    mask3_15.setFillColor(new util.Color(mask_colors[8]));
    mask3_15.setPos([(stim_positions[2][0] - 0.0125), (stim_positions[2][1] + 0.0125)]);
    mask3_15.setLineColor(new util.Color(mask_colors[8]));
    util.shuffle(mask_colors);
    
    // keep track of which components have finished
    practice_presentation_3Components = [];
    practice_presentation_3Components.push(stim3_4);
    practice_presentation_3Components.push(mask3_12);
    practice_presentation_3Components.push(mask3_13);
    practice_presentation_3Components.push(mask3_14);
    practice_presentation_3Components.push(mask3_15);
    
    practice_presentation_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_presentation_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_presentation_3'-------
    // get current time
    t = practice_presentation_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim3_4* updates
    if (t >= fix_time && stim3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3_4.tStart = t;  // (not accounting for frame time here)
      stim3_4.frameNStart = frameN;  // exact frame index
      
      stim3_4.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3_4.setAutoDraw(false);
    }
    
    // *mask3_12* updates
    if (t >= mask_onset && mask3_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_12.tStart = t;  // (not accounting for frame time here)
      mask3_12.frameNStart = frameN;  // exact frame index
      
      mask3_12.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask3_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask3_12.setAutoDraw(false);
    }
    
    // *mask3_13* updates
    if (t >= mask_onset && mask3_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_13.tStart = t;  // (not accounting for frame time here)
      mask3_13.frameNStart = frameN;  // exact frame index
      
      mask3_13.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask3_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask3_13.setAutoDraw(false);
    }
    
    // *mask3_14* updates
    if (t >= mask_onset && mask3_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_14.tStart = t;  // (not accounting for frame time here)
      mask3_14.frameNStart = frameN;  // exact frame index
      
      mask3_14.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask3_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask3_14.setAutoDraw(false);
    }
    
    // *mask3_15* updates
    if (t >= mask_onset && mask3_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_15.tStart = t;  // (not accounting for frame time here)
      mask3_15.frameNStart = frameN;  // exact frame index
      
      mask3_15.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask3_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask3_15.setAutoDraw(false);
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
    practice_presentation_3Components.forEach( function(thisComponent) {
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


function practice_presentation_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_presentation_3'-------
    practice_presentation_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practice_presentation_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_presentation_4Components;
function practice_presentation_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_presentation_4'-------
    t = 0;
    practice_presentation_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim4_2.setFillColor(new util.Color(colors[3]));
    stim4_2.setPos(stim_positions[3]);
    stim4_2.setLineColor(new util.Color(colors[3]));
    mask4_16.setFillColor(new util.Color(mask_colors[5]));
    mask4_16.setPos([(stim_positions[3][0] - 0.0125), (stim_positions[3][1] - 0.0125)]);
    mask4_16.setLineColor(new util.Color(mask_colors[5]));
    mask4_17.setFillColor(new util.Color(mask_colors[6]));
    mask4_17.setPos([(stim_positions[3][0] + 0.0125), (stim_positions[3][1] - 0.0125)]);
    mask4_17.setLineColor(new util.Color(mask_colors[6]));
    mask4_18.setFillColor(new util.Color(mask_colors[7]));
    mask4_18.setPos([(stim_positions[3][0] + 0.0125), (stim_positions[3][1] + 0.0125)]);
    mask4_18.setLineColor(new util.Color(mask_colors[7]));
    mask4_19.setFillColor(new util.Color(mask_colors[8]));
    mask4_19.setPos([(stim_positions[3][0] - 0.0125), (stim_positions[3][1] + 0.0125)]);
    mask4_19.setLineColor(new util.Color(mask_colors[8]));
    util.shuffle(mask_colors);
    
    // keep track of which components have finished
    practice_presentation_4Components = [];
    practice_presentation_4Components.push(stim4_2);
    practice_presentation_4Components.push(mask4_16);
    practice_presentation_4Components.push(mask4_17);
    practice_presentation_4Components.push(mask4_18);
    practice_presentation_4Components.push(mask4_19);
    
    practice_presentation_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_presentation_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_presentation_4'-------
    // get current time
    t = practice_presentation_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim4_2* updates
    if (t >= fix_time && stim4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4_2.tStart = t;  // (not accounting for frame time here)
      stim4_2.frameNStart = frameN;  // exact frame index
      
      stim4_2.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim4_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim4_2.setAutoDraw(false);
    }
    
    // *mask4_16* updates
    if (t >= mask_onset && mask4_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_16.tStart = t;  // (not accounting for frame time here)
      mask4_16.frameNStart = frameN;  // exact frame index
      
      mask4_16.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask4_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask4_16.setAutoDraw(false);
    }
    
    // *mask4_17* updates
    if (t >= mask_onset && mask4_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_17.tStart = t;  // (not accounting for frame time here)
      mask4_17.frameNStart = frameN;  // exact frame index
      
      mask4_17.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask4_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask4_17.setAutoDraw(false);
    }
    
    // *mask4_18* updates
    if (t >= mask_onset && mask4_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_18.tStart = t;  // (not accounting for frame time here)
      mask4_18.frameNStart = frameN;  // exact frame index
      
      mask4_18.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask4_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask4_18.setAutoDraw(false);
    }
    
    // *mask4_19* updates
    if (t >= mask_onset && mask4_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_19.tStart = t;  // (not accounting for frame time here)
      mask4_19.frameNStart = frameN;  // exact frame index
      
      mask4_19.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask4_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask4_19.setAutoDraw(false);
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
    practice_presentation_4Components.forEach( function(thisComponent) {
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


function practice_presentation_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_presentation_4'-------
    practice_presentation_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practice_presentation_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var resp_position;
var resp_color;
var correct_ans_wm;
var _key_resp_prac_allKeys;
var practice_response_presentationComponents;
function practice_response_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_response_presentation'-------
    t = 0;
    practice_response_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    shuffle(position_selection);
    if ((change_cond === "same")) {
        resp_position = stim_positions[position_selection[0]];
        resp_color = colors[position_selection[0]];
        correct_ans_wm = "s";
    } else {
        resp_position = stim_positions[position_selection[0]];
        resp_color = colors[5];
        correct_ans_wm = "d";
    }
    
    resp1_2.setFillColor(new util.Color(resp_color));
    resp1_2.setPos(resp_position);
    resp1_2.setLineColor(new util.Color(resp_color));
    key_resp_prac.keys = undefined;
    key_resp_prac.rt = undefined;
    _key_resp_prac_allKeys = [];
    // keep track of which components have finished
    practice_response_presentationComponents = [];
    practice_response_presentationComponents.push(resp1_2);
    practice_response_presentationComponents.push(key_resp_prac);
    practice_response_presentationComponents.push(text_14);
    
    practice_response_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_response_presentationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_response_presentation'-------
    // get current time
    t = practice_response_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *resp1_2* updates
    if (t >= 0.0 && resp1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp1_2.tStart = t;  // (not accounting for frame time here)
      resp1_2.frameNStart = frameN;  // exact frame index
      
      resp1_2.setAutoDraw(true);
    }

    
    // *key_resp_prac* updates
    if (t >= 0.0 && key_resp_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_prac.tStart = t;  // (not accounting for frame time here)
      key_resp_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prac.clearEvents(); });
    }

    if (key_resp_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_prac.getKeys({keyList: ['s', 'd'], waitRelease: false});
      _key_resp_prac_allKeys = _key_resp_prac_allKeys.concat(theseKeys);
      if (_key_resp_prac_allKeys.length > 0) {
        key_resp_prac.keys = _key_resp_prac_allKeys[_key_resp_prac_allKeys.length - 1].name;  // just the last key pressed
        key_resp_prac.rt = _key_resp_prac_allKeys[_key_resp_prac_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_prac.keys == correct_ans_wm) {
            key_resp_prac.corr = 1;
        } else {
            key_resp_prac.corr = 0;
        }
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
    practice_response_presentationComponents.forEach( function(thisComponent) {
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


function practice_response_presentationRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_response_presentation'-------
    practice_response_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_prac.keys === undefined) {
      if (['None','none',undefined].includes(correct_ans_wm)) {
         key_resp_prac.corr = 1;  // correct non-response
      } else {
         key_resp_prac.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_prac.corr, level);
    }
    psychoJS.experiment.addData('key_resp_prac.keys', key_resp_prac.keys);
    psychoJS.experiment.addData('key_resp_prac.corr', key_resp_prac.corr);
    if (typeof key_resp_prac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_prac.rt', key_resp_prac.rt);
        routineTimer.reset();
        }
    
    key_resp_prac.stop();
    // the Routine "practice_response_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var feedback_presentationComponents;
function feedback_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_presentation'-------
    t = 0;
    feedback_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((! key_resp_prac.keys)) {
        msg = "Failed to respond";
    } else {
        if ((correct_ans_wm === key_resp_prac.keys)) {
            msg = "Correct! Press SPACE to continue.";
            corr_count = (corr_count + 1);
        } else {
            msg = "Oops! That was wrong. Press SPACE to continue.";
        }
    }
    
    text_3.setText(msg);
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    feedback_presentationComponents = [];
    feedback_presentationComponents.push(text_3);
    feedback_presentationComponents.push(key_resp_6);
    
    feedback_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_presentationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_presentation'-------
    // get current time
    t = feedback_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
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
    feedback_presentationComponents.forEach( function(thisComponent) {
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


function feedback_presentationRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_presentation'-------
    feedback_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_6.stop();
    // the Routine "feedback_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var practice_instructions2Components;
function practice_instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_instructions2'-------
    t = 0;
    practice_instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    practice_instructions2Components = [];
    practice_instructions2Components.push(text_instructions_3);
    practice_instructions2Components.push(key_resp_7);
    
    practice_instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_instructions2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_instructions2'-------
    // get current time
    t = practice_instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_3* updates
    if (t >= 0.0 && text_instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_3.tStart = t;  // (not accounting for frame time here)
      text_instructions_3.frameNStart = frameN;  // exact frame index
      
      text_instructions_3.setAutoDraw(true);
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
    practice_instructions2Components.forEach( function(thisComponent) {
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


function practice_instructions2RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instructions2'-------
    practice_instructions2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_7.stop();
    // the Routine "practice_instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var correct_ans_cogload;
var total_duration;
var cl_stim;
var _key_resp_load_prac_allKeys;
var practice_cog_loadComponents;
function practice_cog_loadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_cog_load'-------
    t = 0;
    practice_cog_loadClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    shuffle(cog_load_stim);
    if ((cognitive_load === 1)) {
        correct_ans_cogload = "NA";
    } else if (((cog_load_stim[0] % 2) === 0)) {
        correct_ans_cogload = "i";
    } else {
        correct_ans_cogload = "o";
    }
    
    if ((cognitive_load === 2)) {
        total_duration = 3;
        cl_stim = cog_load_stim[0];
    } else if ((cognitive_load === 4)) {
        total_duration = 1.5;
        cl_stim = cog_load_stim[0];
    } else {
        total_duration = 6;
        cl_stim = " ";
    }
    text_cogload_2.setText(cl_stim);
    key_resp_load_prac.keys = undefined;
    key_resp_load_prac.rt = undefined;
    _key_resp_load_prac_allKeys = [];
    // keep track of which components have finished
    practice_cog_loadComponents = [];
    practice_cog_loadComponents.push(text_cogload_2);
    practice_cog_loadComponents.push(key_resp_load_prac);
    
    practice_cog_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_cog_loadRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_cog_load'-------
    // get current time
    t = practice_cog_loadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_cogload_2* updates
    if (t >= 0.0 && text_cogload_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_cogload_2.tStart = t;  // (not accounting for frame time here)
      text_cogload_2.frameNStart = frameN;  // exact frame index
      
      text_cogload_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_cogload_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_cogload_2.setAutoDraw(false);
    }
    
    // *key_resp_load_prac* updates
    if (t >= 0.0 && key_resp_load_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_load_prac.tStart = t;  // (not accounting for frame time here)
      key_resp_load_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_load_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_load_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_load_prac.clearEvents(); });
    }

    frameRemains = 0.0 + total_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_load_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_load_prac.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_load_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_load_prac.getKeys({keyList: ['i', 'o'], waitRelease: false});
      _key_resp_load_prac_allKeys = _key_resp_load_prac_allKeys.concat(theseKeys);
      if (_key_resp_load_prac_allKeys.length > 0) {
        key_resp_load_prac.keys = _key_resp_load_prac_allKeys[_key_resp_load_prac_allKeys.length - 1].name;  // just the last key pressed
        key_resp_load_prac.rt = _key_resp_load_prac_allKeys[_key_resp_load_prac_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_load_prac.keys == correct_ans_cogload) {
            key_resp_load_prac.corr = 1;
        } else {
            key_resp_load_prac.corr = 0;
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
    practice_cog_loadComponents.forEach( function(thisComponent) {
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


function practice_cog_loadRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_cog_load'-------
    practice_cog_loadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_load_prac.keys === undefined) {
      if (['None','none',undefined].includes(correct_ans_cogload)) {
         key_resp_load_prac.corr = 1;  // correct non-response
      } else {
         key_resp_load_prac.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_load_prac.corr, level);
    }
    psychoJS.experiment.addData('key_resp_load_prac.keys', key_resp_load_prac.keys);
    psychoJS.experiment.addData('key_resp_load_prac.corr', key_resp_load_prac.corr);
    if (typeof key_resp_load_prac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_load_prac.rt', key_resp_load_prac.rt);
        }
    
    key_resp_load_prac.stop();
    // the Routine "practice_cog_load" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var feedback_cogloadComponents;
function feedback_cogloadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_cogload'-------
    t = 0;
    feedback_cogloadClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((key_resp_load_prac.corr === 1)) {
        msg = "Correct! Press SPACE to continue.";
    } else if ((cognitive_load === 1)) {
        msg = "No number presented. Press SPACE to continue.";
    } else {
        msg = "Oops! That was wrong or you didn't respond. Press SPACE to continue.";
    }
    
    
    text_4.setText(msg);
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    feedback_cogloadComponents = [];
    feedback_cogloadComponents.push(text_4);
    feedback_cogloadComponents.push(key_resp_8);
    
    feedback_cogloadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_cogloadRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_cogload'-------
    // get current time
    t = feedback_cogloadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
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
    feedback_cogloadComponents.forEach( function(thisComponent) {
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


function feedback_cogloadRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_cogload'-------
    feedback_cogloadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_8.stop();
    // the Routine "feedback_cogload" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var practice_instructions3Components;
function practice_instructions3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_instructions3'-------
    t = 0;
    practice_instructions3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    corr_count = 0;
    
    // keep track of which components have finished
    practice_instructions3Components = [];
    practice_instructions3Components.push(text_instructions_4);
    practice_instructions3Components.push(key_resp_9);
    
    practice_instructions3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_instructions3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_instructions3'-------
    // get current time
    t = practice_instructions3Clock.getTime();
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
    practice_instructions3Components.forEach( function(thisComponent) {
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


function practice_instructions3RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_instructions3'-------
    practice_instructions3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_9.stop();
    // the Routine "practice_instructions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimulus_presentation_4Components;
function stimulus_presentation_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stimulus_presentation_4'-------
    t = 0;
    stimulus_presentation_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim4_5.setFillColor(new util.Color(colors[3]));
    stim4_5.setPos(stim_positions[3]);
    stim4_5.setLineColor(new util.Color(colors[3]));
    mask4_12.setFillColor(new util.Color(mask_colors[5]));
    mask4_12.setPos([(stim_positions[3][0] - 0.0125), (stim_positions[3][1] - 0.0125)]);
    mask4_12.setLineColor(new util.Color(mask_colors[5]));
    mask4_13.setFillColor(new util.Color(mask_colors[6]));
    mask4_13.setPos([(stim_positions[3][0] + 0.0125), (stim_positions[3][1] - 0.0125)]);
    mask4_13.setLineColor(new util.Color(mask_colors[6]));
    mask4_14.setFillColor(new util.Color(mask_colors[7]));
    mask4_14.setPos([(stim_positions[3][0] + 0.0125), (stim_positions[3][1] + 0.0125)]);
    mask4_14.setLineColor(new util.Color(mask_colors[7]));
    mask4_15.setFillColor(new util.Color(mask_colors[8]));
    mask4_15.setPos([(stim_positions[3][0] - 0.0125), (stim_positions[3][1] + 0.0125)]);
    mask4_15.setLineColor(new util.Color(mask_colors[8]));
    util.shuffle(mask_colors);
    
    // keep track of which components have finished
    stimulus_presentation_4Components = [];
    stimulus_presentation_4Components.push(stim4_5);
    stimulus_presentation_4Components.push(mask4_12);
    stimulus_presentation_4Components.push(mask4_13);
    stimulus_presentation_4Components.push(mask4_14);
    stimulus_presentation_4Components.push(mask4_15);
    
    stimulus_presentation_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulus_presentation_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stimulus_presentation_4'-------
    // get current time
    t = stimulus_presentation_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim4_5* updates
    if (t >= fix_time && stim4_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4_5.tStart = t;  // (not accounting for frame time here)
      stim4_5.frameNStart = frameN;  // exact frame index
      
      stim4_5.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim4_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim4_5.setAutoDraw(false);
    }
    
    // *mask4_12* updates
    if (t >= mask_onset && mask4_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_12.tStart = t;  // (not accounting for frame time here)
      mask4_12.frameNStart = frameN;  // exact frame index
      
      mask4_12.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask4_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask4_12.setAutoDraw(false);
    }
    
    // *mask4_13* updates
    if (t >= mask_onset && mask4_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_13.tStart = t;  // (not accounting for frame time here)
      mask4_13.frameNStart = frameN;  // exact frame index
      
      mask4_13.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask4_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask4_13.setAutoDraw(false);
    }
    
    // *mask4_14* updates
    if (t >= mask_onset && mask4_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_14.tStart = t;  // (not accounting for frame time here)
      mask4_14.frameNStart = frameN;  // exact frame index
      
      mask4_14.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask4_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask4_14.setAutoDraw(false);
    }
    
    // *mask4_15* updates
    if (t >= mask_onset && mask4_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_15.tStart = t;  // (not accounting for frame time here)
      mask4_15.frameNStart = frameN;  // exact frame index
      
      mask4_15.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask4_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask4_15.setAutoDraw(false);
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
    stimulus_presentation_4Components.forEach( function(thisComponent) {
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


function stimulus_presentation_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'stimulus_presentation_4'-------
    stimulus_presentation_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "stimulus_presentation_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
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
    msg = "You got " + corr_count + " trials correct!";
    
    if ((block_n === 0)) {
        block_message = "You have reached the end of the practice.";
    } else {
        block_message = "You have reached the end of block " + block_n + " of " + block_total;
    }       
    
    text_block_end.setText(block_message);
    text_6.setText(msg);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    end_blockComponents = [];
    end_blockComponents.push(text_block_end);
    end_blockComponents.push(text_6);
    end_blockComponents.push(text_2);
    end_blockComponents.push(key_resp_3);
    
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
    
    // *text_block_end* updates
    if (t >= 0.0 && text_block_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_block_end.tStart = t;  // (not accounting for frame time here)
      text_block_end.frameNStart = frameN;  // exact frame index
      
      text_block_end.setAutoDraw(true);
    }

    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
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
    block_n = (block_n + 1);
    
    key_resp_3.stop();
    // the Routine "end_block" was not non-slip safe, so reset the non-slip timer
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
    block_n = 1;
    trial_n = 0;
    
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_instructions);
    instructionsComponents.push(key_resp);
    
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
    
    instructions_mwComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    instructions_mwComponents.forEach( function(thisComponent) {
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


function instructions_mwRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_mw'-------
    instructions_mwComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    mw_meaningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    mw_meaningComponents.forEach( function(thisComponent) {
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


function mw_meaningRoutineEnd() {
  return async function () {
    //------Ending Routine 'mw_meaning'-------
    mw_meaningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_16.stop();
    // the Routine "mw_meaning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
var key_reminderComponents;
function key_reminderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'key_reminder'-------
    t = 0;
    key_reminderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    corr_count = 0;
    
    // keep track of which components have finished
    key_reminderComponents = [];
    key_reminderComponents.push(text_remind);
    key_reminderComponents.push(key_resp_12);
    
    key_reminderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function key_reminderRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'key_reminder'-------
    // get current time
    t = key_reminderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_remind* updates
    if (t >= 0.0 && text_remind.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_remind.tStart = t;  // (not accounting for frame time here)
      text_remind.frameNStart = frameN;  // exact frame index
      
      text_remind.setAutoDraw(true);
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
    key_reminderComponents.forEach( function(thisComponent) {
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


function key_reminderRoutineEnd() {
  return async function () {
    //------Ending Routine 'key_reminder'-------
    key_reminderComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_12.stop();
    // the Routine "key_reminder" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimulus_presentationComponents;
function stimulus_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stimulus_presentation'-------
    t = 0;
    stimulus_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(stim_positions);
    util.shuffle(colors);
    util.shuffle(mask_colors);
    
    stim1.setFillColor(new util.Color(colors[0]));
    stim1.setPos(stim_positions[0]);
    stim1.setLineColor(new util.Color(colors[0]));
    mask1_1.setFillColor(new util.Color(mask_colors[5]));
    mask1_1.setPos([(stim_positions[0][0] - 0.0125), (stim_positions[0][1] - 0.0125)]);
    mask1_1.setLineColor(new util.Color(mask_colors[5]));
    mask1_2.setFillColor(new util.Color(mask_colors[6]));
    mask1_2.setPos([(stim_positions[0][0] + 0.0125), (stim_positions[0][1] - 0.0125)]);
    mask1_2.setLineColor(new util.Color(mask_colors[6]));
    mask1_3.setFillColor(new util.Color(mask_colors[7]));
    mask1_3.setPos([(stim_positions[0][0] + 0.0125), (stim_positions[0][1] + 0.0125)]);
    mask1_3.setLineColor(new util.Color(mask_colors[7]));
    mask1_4.setFillColor(new util.Color(mask_colors[8]));
    mask1_4.setPos([(stim_positions[0][0] - 0.0125), (stim_positions[0][1] + 0.0125)]);
    mask1_4.setLineColor(new util.Color(mask_colors[8]));
    // keep track of which components have finished
    stimulus_presentationComponents = [];
    stimulus_presentationComponents.push(fixation);
    stimulus_presentationComponents.push(stim1);
    stimulus_presentationComponents.push(mask1_1);
    stimulus_presentationComponents.push(mask1_2);
    stimulus_presentationComponents.push(mask1_3);
    stimulus_presentationComponents.push(mask1_4);
    
    stimulus_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulus_presentationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stimulus_presentation'-------
    // get current time
    t = stimulus_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + fix_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *stim1* updates
    if (t >= fix_time && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1.setAutoDraw(false);
    }
    
    // *mask1_1* updates
    if (t >= mask_onset && mask1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_1.tStart = t;  // (not accounting for frame time here)
      mask1_1.frameNStart = frameN;  // exact frame index
      
      mask1_1.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask1_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask1_1.setAutoDraw(false);
    }
    
    // *mask1_2* updates
    if (t >= mask_onset && mask1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_2.tStart = t;  // (not accounting for frame time here)
      mask1_2.frameNStart = frameN;  // exact frame index
      
      mask1_2.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask1_2.setAutoDraw(false);
    }
    
    // *mask1_3* updates
    if (t >= mask_onset && mask1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_3.tStart = t;  // (not accounting for frame time here)
      mask1_3.frameNStart = frameN;  // exact frame index
      
      mask1_3.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask1_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask1_3.setAutoDraw(false);
    }
    
    // *mask1_4* updates
    if (t >= mask_onset && mask1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_4.tStart = t;  // (not accounting for frame time here)
      mask1_4.frameNStart = frameN;  // exact frame index
      
      mask1_4.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask1_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask1_4.setAutoDraw(false);
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
    stimulus_presentationComponents.forEach( function(thisComponent) {
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


function stimulus_presentationRoutineEnd() {
  return async function () {
    //------Ending Routine 'stimulus_presentation'-------
    stimulus_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "stimulus_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_load_allKeys;
var cog_loadComponents;
function cog_loadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cog_load'-------
    t = 0;
    cog_loadClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    shuffle(cog_load_stim);
    if ((cognitive_load === 1)) {
        correct_ans_cogload = "NA";
    } else if (((cog_load_stim[0] % 2) === 0)) {
        correct_ans_cogload = "i";
    } else {
        correct_ans_cogload = "o";
    }
    
    if ((cognitive_load === 2)) {
        total_duration = 3;
        cl_stim = cog_load_stim[0];
    } else if ((cognitive_load === 4)) {
        total_duration = 1.5;
        cl_stim = cog_load_stim[0];
    } else {
        total_duration = 6;
        cl_stim = " ";
    }
    text_cogload.setText(cl_stim);
    key_resp_load.keys = undefined;
    key_resp_load.rt = undefined;
    _key_resp_load_allKeys = [];
    // keep track of which components have finished
    cog_loadComponents = [];
    cog_loadComponents.push(text_cogload);
    cog_loadComponents.push(key_resp_load);
    
    cog_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function cog_loadRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cog_load'-------
    // get current time
    t = cog_loadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_cogload* updates
    if (t >= 0.0 && text_cogload.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_cogload.tStart = t;  // (not accounting for frame time here)
      text_cogload.frameNStart = frameN;  // exact frame index
      
      text_cogload.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_cogload.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_cogload.setAutoDraw(false);
    }
    
    // *key_resp_load* updates
    if (t >= 0.0 && key_resp_load.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_load.tStart = t;  // (not accounting for frame time here)
      key_resp_load.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_load.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_load.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_load.clearEvents(); });
    }

    frameRemains = 0.0 + total_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_load.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_load.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_load.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_load.getKeys({keyList: ['i', 'o'], waitRelease: false});
      _key_resp_load_allKeys = _key_resp_load_allKeys.concat(theseKeys);
      if (_key_resp_load_allKeys.length > 0) {
        key_resp_load.keys = _key_resp_load_allKeys[_key_resp_load_allKeys.length - 1].name;  // just the last key pressed
        key_resp_load.rt = _key_resp_load_allKeys[_key_resp_load_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_load.keys == correct_ans_cogload) {
            key_resp_load.corr = 1;
        } else {
            key_resp_load.corr = 0;
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
    cog_loadComponents.forEach( function(thisComponent) {
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


function cog_loadRoutineEnd() {
  return async function () {
    //------Ending Routine 'cog_load'-------
    cog_loadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("cogload_presented", cog_load_stim[0]);
    psychoJS.experiment.addData("cogload_condition", cognitive_load);
    
    // was no response the correct answer?!
    if (key_resp_load.keys === undefined) {
      if (['None','none',undefined].includes(correct_ans_cogload)) {
         key_resp_load.corr = 1;  // correct non-response
      } else {
         key_resp_load.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_load.corr, level);
    }
    psychoJS.experiment.addData('key_resp_load.keys', key_resp_load.keys);
    psychoJS.experiment.addData('key_resp_load.corr', key_resp_load.corr);
    if (typeof key_resp_load.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_load.rt', key_resp_load.rt);
        }
    
    key_resp_load.stop();
    // the Routine "cog_load" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimulus_presentation_2Components;
function stimulus_presentation_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stimulus_presentation_2'-------
    t = 0;
    stimulus_presentation_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim2_2.setFillColor(new util.Color(colors[1]));
    stim2_2.setPos(stim_positions[1]);
    stim2_2.setLineColor(new util.Color(colors[1]));
    mask2.setFillColor(new util.Color(mask_colors[5]));
    mask2.setPos([(stim_positions[1][0] - 0.0125), (stim_positions[1][1] - 0.0125)]);
    mask2.setLineColor(new util.Color(mask_colors[5]));
    mask2_5.setFillColor(new util.Color(mask_colors[6]));
    mask2_5.setPos([(stim_positions[1][0] + 0.0125), (stim_positions[1][1] - 0.0125)]);
    mask2_5.setLineColor(new util.Color(mask_colors[6]));
    mask2_6.setFillColor(new util.Color(mask_colors[7]));
    mask2_6.setPos([(stim_positions[1][0] + 0.0125), (stim_positions[1][1] + 0.0125)]);
    mask2_6.setLineColor(new util.Color(mask_colors[7]));
    mask2_7.setFillColor(new util.Color(mask_colors[8]));
    mask2_7.setPos([(stim_positions[1][0] - 0.0125), (stim_positions[1][1] + 0.0125)]);
    mask2_7.setLineColor(new util.Color(mask_colors[8]));
    util.shuffle(mask_colors);
    
    // keep track of which components have finished
    stimulus_presentation_2Components = [];
    stimulus_presentation_2Components.push(stim2_2);
    stimulus_presentation_2Components.push(mask2);
    stimulus_presentation_2Components.push(mask2_5);
    stimulus_presentation_2Components.push(mask2_6);
    stimulus_presentation_2Components.push(mask2_7);
    
    stimulus_presentation_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulus_presentation_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stimulus_presentation_2'-------
    // get current time
    t = stimulus_presentation_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim2_2* updates
    if (t >= fix_time && stim2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2_2.tStart = t;  // (not accounting for frame time here)
      stim2_2.frameNStart = frameN;  // exact frame index
      
      stim2_2.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2_2.setAutoDraw(false);
    }
    
    // *mask2* updates
    if (t >= mask_onset && mask2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2.tStart = t;  // (not accounting for frame time here)
      mask2.frameNStart = frameN;  // exact frame index
      
      mask2.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask2.setAutoDraw(false);
    }
    
    // *mask2_5* updates
    if (t >= mask_onset && mask2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_5.tStart = t;  // (not accounting for frame time here)
      mask2_5.frameNStart = frameN;  // exact frame index
      
      mask2_5.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask2_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask2_5.setAutoDraw(false);
    }
    
    // *mask2_6* updates
    if (t >= mask_onset && mask2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_6.tStart = t;  // (not accounting for frame time here)
      mask2_6.frameNStart = frameN;  // exact frame index
      
      mask2_6.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask2_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask2_6.setAutoDraw(false);
    }
    
    // *mask2_7* updates
    if (t >= mask_onset && mask2_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_7.tStart = t;  // (not accounting for frame time here)
      mask2_7.frameNStart = frameN;  // exact frame index
      
      mask2_7.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask2_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask2_7.setAutoDraw(false);
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
    stimulus_presentation_2Components.forEach( function(thisComponent) {
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


function stimulus_presentation_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'stimulus_presentation_2'-------
    stimulus_presentation_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "stimulus_presentation_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimulus_presentation_3Components;
function stimulus_presentation_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stimulus_presentation_3'-------
    t = 0;
    stimulus_presentation_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim3_3.setFillColor(new util.Color(colors[2]));
    stim3_3.setPos(stim_positions[2]);
    stim3_3.setLineColor(new util.Color(colors[2]));
    mask3_8.setFillColor(new util.Color(mask_colors[5]));
    mask3_8.setPos([(stim_positions[2][0] - 0.0125), (stim_positions[2][1] - 0.0125)]);
    mask3_8.setLineColor(new util.Color(mask_colors[5]));
    mask3_9.setFillColor(new util.Color(mask_colors[6]));
    mask3_9.setPos([(stim_positions[2][0] + 0.0125), (stim_positions[2][1] - 0.0125)]);
    mask3_9.setLineColor(new util.Color(mask_colors[6]));
    mask3_10.setFillColor(new util.Color(mask_colors[7]));
    mask3_10.setPos([(stim_positions[2][0] + 0.0125), (stim_positions[2][1] + 0.0125)]);
    mask3_10.setLineColor(new util.Color(mask_colors[7]));
    mask3_11.setFillColor(new util.Color(mask_colors[8]));
    mask3_11.setPos([(stim_positions[2][0] - 0.0125), (stim_positions[2][1] + 0.0125)]);
    mask3_11.setLineColor(new util.Color(mask_colors[8]));
    util.shuffle(mask_colors);
    
    // keep track of which components have finished
    stimulus_presentation_3Components = [];
    stimulus_presentation_3Components.push(stim3_3);
    stimulus_presentation_3Components.push(mask3_8);
    stimulus_presentation_3Components.push(mask3_9);
    stimulus_presentation_3Components.push(mask3_10);
    stimulus_presentation_3Components.push(mask3_11);
    
    stimulus_presentation_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulus_presentation_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stimulus_presentation_3'-------
    // get current time
    t = stimulus_presentation_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim3_3* updates
    if (t >= fix_time && stim3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3_3.tStart = t;  // (not accounting for frame time here)
      stim3_3.frameNStart = frameN;  // exact frame index
      
      stim3_3.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3_3.setAutoDraw(false);
    }
    
    // *mask3_8* updates
    if (t >= mask_onset && mask3_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_8.tStart = t;  // (not accounting for frame time here)
      mask3_8.frameNStart = frameN;  // exact frame index
      
      mask3_8.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask3_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask3_8.setAutoDraw(false);
    }
    
    // *mask3_9* updates
    if (t >= mask_onset && mask3_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_9.tStart = t;  // (not accounting for frame time here)
      mask3_9.frameNStart = frameN;  // exact frame index
      
      mask3_9.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask3_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask3_9.setAutoDraw(false);
    }
    
    // *mask3_10* updates
    if (t >= mask_onset && mask3_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_10.tStart = t;  // (not accounting for frame time here)
      mask3_10.frameNStart = frameN;  // exact frame index
      
      mask3_10.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask3_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask3_10.setAutoDraw(false);
    }
    
    // *mask3_11* updates
    if (t >= mask_onset && mask3_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_11.tStart = t;  // (not accounting for frame time here)
      mask3_11.frameNStart = frameN;  // exact frame index
      
      mask3_11.setAutoDraw(true);
    }

    frameRemains = mask_onset + mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mask3_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mask3_11.setAutoDraw(false);
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
    stimulus_presentation_3Components.forEach( function(thisComponent) {
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


function stimulus_presentation_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'stimulus_presentation_3'-------
    stimulus_presentation_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "stimulus_presentation_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_stimulus_allKeys;
var stimulus_responseComponents;
function stimulus_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stimulus_response'-------
    t = 0;
    stimulus_responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    shuffle(position_selection);
    if ((change_cond === "same")) {
        resp_position = stim_positions[position_selection[0]];
        resp_color = colors[position_selection[0]];
        correct_ans_wm = "s";
    } else {
        resp_position = stim_positions[position_selection[0]];
        resp_color = colors[5];
        correct_ans_wm = "d";
    }
    
    resp1.setFillColor(new util.Color(resp_color));
    resp1.setPos(resp_position);
    resp1.setLineColor(new util.Color(resp_color));
    key_resp_stimulus.keys = undefined;
    key_resp_stimulus.rt = undefined;
    _key_resp_stimulus_allKeys = [];
    // keep track of which components have finished
    stimulus_responseComponents = [];
    stimulus_responseComponents.push(resp1);
    stimulus_responseComponents.push(key_resp_stimulus);
    stimulus_responseComponents.push(text_15);
    
    stimulus_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulus_responseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stimulus_response'-------
    // get current time
    t = stimulus_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *resp1* updates
    if (t >= 0.0 && resp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp1.tStart = t;  // (not accounting for frame time here)
      resp1.frameNStart = frameN;  // exact frame index
      
      resp1.setAutoDraw(true);
    }

    
    // *key_resp_stimulus* updates
    if (t >= 0.0 && key_resp_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_stimulus.tStart = t;  // (not accounting for frame time here)
      key_resp_stimulus.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_stimulus.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_stimulus.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_stimulus.clearEvents(); });
    }

    if (key_resp_stimulus.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_stimulus.getKeys({keyList: ['s', 'd'], waitRelease: false});
      _key_resp_stimulus_allKeys = _key_resp_stimulus_allKeys.concat(theseKeys);
      if (_key_resp_stimulus_allKeys.length > 0) {
        key_resp_stimulus.keys = _key_resp_stimulus_allKeys[_key_resp_stimulus_allKeys.length - 1].name;  // just the last key pressed
        key_resp_stimulus.rt = _key_resp_stimulus_allKeys[_key_resp_stimulus_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_stimulus.keys == correct_ans_wm) {
            key_resp_stimulus.corr = 1;
        } else {
            key_resp_stimulus.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
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
    stimulus_responseComponents.forEach( function(thisComponent) {
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


function stimulus_responseRoutineEnd() {
  return async function () {
    //------Ending Routine 'stimulus_response'-------
    stimulus_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
     
    // was no response the correct answer?!
    if (key_resp_stimulus.keys === undefined) {
      if (['None','none',undefined].includes(correct_ans_wm)) {
         key_resp_stimulus.corr = 1;  // correct non-response
      } else {
         key_resp_stimulus.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_stimulus.corr, level);
    }
    psychoJS.experiment.addData('key_resp_stimulus.keys', key_resp_stimulus.keys);
    psychoJS.experiment.addData('key_resp_stimulus.corr', key_resp_stimulus.corr);
    if (typeof key_resp_stimulus.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_stimulus.rt', key_resp_stimulus.rt);
        routineTimer.reset();
        }
    
    key_resp_stimulus.stop();
    // the Routine "stimulus_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_mw_allKeys;
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
    key_resp_mw.keys = undefined;
    key_resp_mw.rt = undefined;
    _key_resp_mw_allKeys = [];
    // keep track of which components have finished
    mw_probeComponents = [];
    mw_probeComponents.push(mw_text);
    mw_probeComponents.push(key_resp_mw);
    
    mw_probeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *mw_text* updates
    if (t >= 0.0 && mw_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mw_text.tStart = t;  // (not accounting for frame time here)
      mw_text.frameNStart = frameN;  // exact frame index
      
      mw_text.setAutoDraw(true);
    }

    
    // *key_resp_mw* updates
    if (t >= 0.0 && key_resp_mw.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_mw.tStart = t;  // (not accounting for frame time here)
      key_resp_mw.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_mw.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mw.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mw.clearEvents(); });
    }

    if (key_resp_mw.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_mw.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8'], waitRelease: false});
      _key_resp_mw_allKeys = _key_resp_mw_allKeys.concat(theseKeys);
      if (_key_resp_mw_allKeys.length > 0) {
        key_resp_mw.keys = _key_resp_mw_allKeys[_key_resp_mw_allKeys.length - 1].name;  // just the last key pressed
        key_resp_mw.rt = _key_resp_mw_allKeys[_key_resp_mw_allKeys.length - 1].rt;
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
    mw_probeComponents.forEach( function(thisComponent) {
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


function mw_probeRoutineEnd() {
  return async function () {
    //------Ending Routine 'mw_probe'-------
    mw_probeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_mw.corr, level);
    }
    psychoJS.experiment.addData('key_resp_mw.keys', key_resp_mw.keys);
    if (typeof key_resp_mw.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_mw.rt', key_resp_mw.rt);
        routineTimer.reset();
        }
    
    key_resp_mw.stop();
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("block_n", block_n);
    
    // the Routine "mw_probe" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_17_allKeys;
var feedback_trialsComponents;
function feedback_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_trials'-------
    t = 0;
    feedback_trialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((! key_resp_stimulus.keys)) {
        msg = "Failed to respond";
    } else {
        if ((correct_ans_wm === key_resp_stimulus.keys)) {
            msg = "That trial was correct! Press SPACE to continue.";
        } else {
            msg = "Oops! That trial was incorrect. Press SPACE to continue.";
        }
    }
    if ((key_resp_stimulus.corr === 1)) {
        corr_count = (corr_count + 1);
    } else {
        corr_count = corr_count;
    }
    
    text_13.setText(msg);
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    // keep track of which components have finished
    feedback_trialsComponents = [];
    feedback_trialsComponents.push(text_13);
    feedback_trialsComponents.push(key_resp_17);
    
    feedback_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_trialsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_trials'-------
    // get current time
    t = feedback_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
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
      let theseKeys = key_resp_17.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
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
    feedback_trialsComponents.forEach( function(thisComponent) {
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


function feedback_trialsRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_trials'-------
    feedback_trialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    trial_n += 1;
    
    key_resp_17.stop();
    // the Routine "feedback_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_15_allKeys;
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
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    mw_q_instructComponents = [];
    mw_q_instructComponents.push(text);
    mw_q_instructComponents.push(text_number_2);
    mw_q_instructComponents.push(text_text_2);
    mw_q_instructComponents.push(mw_q_continue_2);
    mw_q_instructComponents.push(key_resp_15);
    
    mw_q_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
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

    
    // *key_resp_15* updates
    if (t >= 0.25 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
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
    mw_q_instructComponents.forEach( function(thisComponent) {
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


function mw_q_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'mw_q_instruct'-------
    mw_q_instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_15.stop();
    // the Routine "mw_q_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_mw_q_allKeys;
var _key_resp_13_allKeys;
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
    key_resp_mw_q.keys = undefined;
    key_resp_mw_q.rt = undefined;
    _key_resp_mw_q_allKeys = [];
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    mw_questionsComponents = [];
    mw_questionsComponents.push(mw_q_text_2);
    mw_questionsComponents.push(text_number);
    mw_questionsComponents.push(text_text);
    mw_questionsComponents.push(mw_q_text);
    mw_questionsComponents.push(key_resp_mw_q);
    mw_questionsComponents.push(key_resp_13);
    mw_questionsComponents.push(mw_q_continue);
    
    mw_questionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var text_mw_q_op;
var mw_q_text_disp;
function mw_questionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'mw_questions'-------
    // get current time
    t = mw_questionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((key_resp_mw_q.keys === undefined)) {
        text_mw_q_op = 0;
        mw_q_text_disp = "Please select a number.";
    } else {
        text_mw_q_op = 1;
        mw_q_text_disp = key_resp_mw_q.keys;
    }
    
    
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

    
    // *mw_q_text* updates
    if (t >= 0.2 && mw_q_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mw_q_text.tStart = t;  // (not accounting for frame time here)
      mw_q_text.frameNStart = frameN;  // exact frame index
      
      mw_q_text.setAutoDraw(true);
    }

    
    if (mw_q_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      mw_q_text.setOpacity(text_mw_q_op, false);
      mw_q_text.setText(mw_q_text_disp, false);
    }
    
    // *key_resp_mw_q* updates
    if (t >= 0.0 && key_resp_mw_q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_mw_q.tStart = t;  // (not accounting for frame time here)
      key_resp_mw_q.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_mw_q.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mw_q.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mw_q.clearEvents(); });
    }

    if (key_resp_mw_q.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_mw_q.getKeys({keyList: ['1', '2', '3', '4', '5', '6'], waitRelease: false});
      _key_resp_mw_q_allKeys = _key_resp_mw_q_allKeys.concat(theseKeys);
      if (_key_resp_mw_q_allKeys.length > 0) {
        key_resp_mw_q.keys = _key_resp_mw_q_allKeys[_key_resp_mw_q_allKeys.length - 1].name;  // just the last key pressed
        key_resp_mw_q.rt = _key_resp_mw_q_allKeys[_key_resp_mw_q_allKeys.length - 1].rt;
      }
    }
    
    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
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
    
    
    // *mw_q_continue* updates
    if (t >= 0.2 && mw_q_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mw_q_continue.tStart = t;  // (not accounting for frame time here)
      mw_q_continue.frameNStart = frameN;  // exact frame index
      
      mw_q_continue.setAutoDraw(true);
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
    mw_questionsComponents.forEach( function(thisComponent) {
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


function mw_questionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'mw_questions'-------
    mw_questionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_mw_q.corr, level);
    }
    psychoJS.experiment.addData('key_resp_mw_q.keys', key_resp_mw_q.keys);
    if (typeof key_resp_mw_q.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_mw_q.rt', key_resp_mw_q.rt);
        }
    
    key_resp_mw_q.stop();
    key_resp_13.stop();
    // the Routine "mw_questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
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
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_end);
    endComponents.push(key_resp_2);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
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
    endComponents.forEach( function(thisComponent) {
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


function endRoutineEnd() {
  return async function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
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
