/************ 
 * Cm1 Test *
 ************/


// store info about the experiment session:
let expName = 'CM1';  // from the Builder filename that created this script
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
const startLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(startLoopBegin(startLoopScheduler));
flowScheduler.add(startLoopScheduler);
flowScheduler.add(startLoopEnd);
flowScheduler.add(instructions_si_practiceRoutineBegin());
flowScheduler.add(instructions_si_practiceRoutineEachFrame());
flowScheduler.add(instructions_si_practiceRoutineEnd());
flowScheduler.add(si_key_positionsRoutineBegin());
flowScheduler.add(si_key_positionsRoutineEachFrame());
flowScheduler.add(si_key_positionsRoutineEnd());
const practice_si_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_si_loopLoopBegin(practice_si_loopLoopScheduler));
flowScheduler.add(practice_si_loopLoopScheduler);
flowScheduler.add(practice_si_loopLoopEnd);
flowScheduler.add(end_practiceRoutineBegin());
flowScheduler.add(end_practiceRoutineEachFrame());
flowScheduler.add(end_practiceRoutineEnd());
const blocks_siLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocks_siLoopBegin(blocks_siLoopScheduler));
flowScheduler.add(blocks_siLoopScheduler);
flowScheduler.add(blocks_siLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
const rat_setup_stimLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(rat_setup_stimLoopBegin(rat_setup_stimLoopScheduler));
flowScheduler.add(rat_setup_stimLoopScheduler);
flowScheduler.add(rat_setup_stimLoopEnd);
flowScheduler.add(instructions_ratRoutineBegin());
flowScheduler.add(instructions_ratRoutineEachFrame());
flowScheduler.add(instructions_ratRoutineEnd());
const trials_ratLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_ratLoopBegin(trials_ratLoopScheduler));
flowScheduler.add(trials_ratLoopScheduler);
flowScheduler.add(trials_ratLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(instructions_ltmRoutineBegin());
flowScheduler.add(instructions_ltmRoutineEachFrame());
flowScheduler.add(instructions_ltmRoutineEnd());
const trial_ltmLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trial_ltmLoopBegin(trial_ltmLoopScheduler));
flowScheduler.add(trial_ltmLoopScheduler);
flowScheduler.add(trial_ltmLoopEnd);
flowScheduler.add(end_expRoutineBegin());
flowScheduler.add(end_expRoutineEachFrame());
flowScheduler.add(end_expRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
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
  psychoJS.setRedirectUrls('https://csi-cuny.sona-systems.com/webstudy_credit.aspx?experiment_id=381&credit_token=76a9f226d05a4070ab552fbc19aa12c1&survey_code="+expInfo[\'participant\']', '');

  return Scheduler.Event.NEXT;
}


var setupClock;
var shuffle;
var words;
var rat_stim;
var key_to_position;
var targetwords;
var i;
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
var endClock;
var end_si_text;
var key_resp;
var gough_scaleClock;
var gough_instructions;
var trait_text;
var key_resp_gough;
var rat_setupClock;
var instructions_ratClock;
var instructions_rat_text;
var key_resp_2;
var rat_testClock;
var rat_text;
var key_resp_rat;
var j;
var text_resp;
var instructions_ltmClock;
var instr_text_ltm;
var instr_resp_ltm;
var recognition_testClock;
var k;
var fixation_ltm;
var distractor;
var target_ltm;
var slider_right;
var slider_left;
var end_expClock;
var end_text;
var key_resp_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  Array.prototype.append = [].push; 
  shuffle = util.shuffle;
  words = [];
  rat_stim = [];
  key_to_position = {"a": 0, "s": 1, "z": 2, "x": 3};
  targetwords = [];
  i = 0;
  
  // Initialize components for Routine "instructions_si_practice"
  instructions_si_practiceClock = new util.Clock();
  instr_text_si = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_si',
    text: 'Press <space> when you are ready to begin the practice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
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
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  target_si_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_si_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  choice1_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice1_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  choice2_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice2_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  choice3_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice3_practice',
    text: '',
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
    text: 'This is the end of the practice trials. \nThe experimental trials are next. \nThese trials are the same as the practice trials, except we are now keeping track of your responses. \n\nThere will be several breaks throughout the experiment, please use them as it will keep you rested and allow you to finish faster than if you skip them. \n\nThere will be a screen letting you know when you have finished this task. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_practice_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_si"
  instructions_siClock = new util.Clock();
  instr_text_si_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_si_2',
    text: 'Remember, press the key <a,s,z,x> that corresponds to the location of the word that matches the center cue word.\n\nPress <space> when you are ready to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_resp_si_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stimulus_identification"
  stimulus_identificationClock = new util.Clock();
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
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  target_si = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_si',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  choice1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  choice2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  choice3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice3',
    text: '',
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
  
  // Initialize components for Routine "gough_scale"
  gough_scaleClock = new util.Clock();
  gough_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'gough_instructions',
    text: "Please indicate which of the following adjectives best describe yourself. \n\nPres <Y> for 'Yes' and <N> for 'No'.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  trait_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trait_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_gough = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rat_setup"
  rat_setupClock = new util.Clock();
  // Initialize components for Routine "instructions_rat"
  instructions_ratClock = new util.Clock();
  instructions_rat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_rat_text',
    text: 'For the next task, you will be presented with three words. \nYou will then find a fourth word that is related to all three.\nYou will type your answer, then press <enter> to see three new words.\nYou will have 30 seconds to complete each problem.\n\nExample: What word is related to these three words?\n\nPAINT DOLL CAT\n\nThe answer is "HOUSE": house paint, dollhouse, and house cat.\n\nPlease press <space> when you are ready to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rat_test"
  rat_testClock = new util.Clock();
  rat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rat_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_rat = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  j = 0;
  
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
  
  // Initialize components for Routine "instructions_ltm"
  instructions_ltmClock = new util.Clock();
  instr_text_ltm = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text_ltm',
    text: 'For this task, we are going to be testing your memory for the words that you saw earlier. \nWe will present two words at the top of the screen. One of these words is a “cue” word from the first task. \nYour job is to decide which word you saw before and tell us how confident you are in your choice. \n\nUse your mouse to indicate which word was previously presented and your level of confidence using the bar.\n\nPress <space> when you are ready to begin.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_resp_ltm = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recognition_test"
  recognition_testClock = new util.Clock();
  k = 0;
  
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
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  target_ltm = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_ltm',
    text: '',
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
    granularity: 0, style: ["RATING", "LABELS_45"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  slider_left = new visual.Slider({
    win: psychoJS.window, name: 'slider_left',
    size: [0.6, 0.05], pos: [(- 0.35), (- 0.25)], units: 'height',
    labels: ["Sure", "Guess"], ticks: [(- 100), 1],
    granularity: 0, style: ["RATING", "LABELS_45"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  // Initialize components for Routine "end_exp"
  end_expClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Thank you for participating!\n\nPress <space> to close the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var start;
var currentLoop;
function startLoopBegin(startLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    start = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli/words_text.xlsx',
      seed: undefined, name: 'start'
    });
    psychoJS.experiment.addLoop(start); // add the loop to the experiment
    currentLoop = start;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    start.forEach(function() {
      const snapshot = start.getSnapshot();
    
      startLoopScheduler.add(importConditions(snapshot));
      startLoopScheduler.add(setupRoutineBegin(snapshot));
      startLoopScheduler.add(setupRoutineEachFrame());
      startLoopScheduler.add(setupRoutineEnd());
      startLoopScheduler.add(endLoopIteration(startLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function startLoopEnd() {
  psychoJS.experiment.removeLoop(start);

  return Scheduler.Event.NEXT;
}


var practice_si_loop;
function practice_si_loopLoopBegin(practice_si_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_si_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli/presentation.xlsx',
      seed: undefined, name: 'practice_si_loop'
    });
    psychoJS.experiment.addLoop(practice_si_loop); // add the loop to the experiment
    currentLoop = practice_si_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_si_loop.forEach(function() {
      const snapshot = practice_si_loop.getSnapshot();
    
      practice_si_loopLoopScheduler.add(importConditions(snapshot));
      practice_si_loopLoopScheduler.add(practice_siRoutineBegin(snapshot));
      practice_si_loopLoopScheduler.add(practice_siRoutineEachFrame());
      practice_si_loopLoopScheduler.add(practice_siRoutineEnd());
      practice_si_loopLoopScheduler.add(endLoopIteration(practice_si_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_si_loopLoopEnd() {
  psychoJS.experiment.removeLoop(practice_si_loop);

  return Scheduler.Event.NEXT;
}


var blocks_si;
function blocks_siLoopBegin(blocks_siLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks_si = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks_si'
    });
    psychoJS.experiment.addLoop(blocks_si); // add the loop to the experiment
    currentLoop = blocks_si;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blocks_si.forEach(function() {
      const snapshot = blocks_si.getSnapshot();
    
      blocks_siLoopScheduler.add(importConditions(snapshot));
      blocks_siLoopScheduler.add(instructions_siRoutineBegin(snapshot));
      blocks_siLoopScheduler.add(instructions_siRoutineEachFrame());
      blocks_siLoopScheduler.add(instructions_siRoutineEnd());
      blocks_siLoopScheduler.add(si_key_positionsRoutineBegin(snapshot));
      blocks_siLoopScheduler.add(si_key_positionsRoutineEachFrame());
      blocks_siLoopScheduler.add(si_key_positionsRoutineEnd());
      const trial_siLoopScheduler = new Scheduler(psychoJS);
      blocks_siLoopScheduler.add(trial_siLoopBegin(trial_siLoopScheduler, snapshot));
      blocks_siLoopScheduler.add(trial_siLoopScheduler);
      blocks_siLoopScheduler.add(trial_siLoopEnd);
      blocks_siLoopScheduler.add(end_block_siRoutineBegin(snapshot));
      blocks_siLoopScheduler.add(end_block_siRoutineEachFrame());
      blocks_siLoopScheduler.add(end_block_siRoutineEnd());
      blocks_siLoopScheduler.add(endLoopIteration(blocks_siLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trial_si;
function trial_siLoopBegin(trial_siLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trial_si = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli/presentation.xlsx',
      seed: undefined, name: 'trial_si'
    });
    psychoJS.experiment.addLoop(trial_si); // add the loop to the experiment
    currentLoop = trial_si;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trial_si.forEach(function() {
      const snapshot = trial_si.getSnapshot();
    
      trial_siLoopScheduler.add(importConditions(snapshot));
      trial_siLoopScheduler.add(stimulus_identificationRoutineBegin(snapshot));
      trial_siLoopScheduler.add(stimulus_identificationRoutineEachFrame());
      trial_siLoopScheduler.add(stimulus_identificationRoutineEnd());
      trial_siLoopScheduler.add(endLoopIteration(trial_siLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trial_siLoopEnd() {
  psychoJS.experiment.removeLoop(trial_si);

  return Scheduler.Event.NEXT;
}


async function blocks_siLoopEnd() {
  psychoJS.experiment.removeLoop(blocks_si);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli/gough_scale.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(gough_scaleRoutineBegin(snapshot));
      trialsLoopScheduler.add(gough_scaleRoutineEachFrame());
      trialsLoopScheduler.add(gough_scaleRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var rat_setup_stim;
function rat_setup_stimLoopBegin(rat_setup_stimLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
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
    rat_setup_stim.forEach(function() {
      const snapshot = rat_setup_stim.getSnapshot();
    
      rat_setup_stimLoopScheduler.add(importConditions(snapshot));
      rat_setup_stimLoopScheduler.add(rat_setupRoutineBegin(snapshot));
      rat_setup_stimLoopScheduler.add(rat_setupRoutineEachFrame());
      rat_setup_stimLoopScheduler.add(rat_setupRoutineEnd());
      rat_setup_stimLoopScheduler.add(endLoopIteration(rat_setup_stimLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function rat_setup_stimLoopEnd() {
  psychoJS.experiment.removeLoop(rat_setup_stim);

  return Scheduler.Event.NEXT;
}


var trials_rat;
function trials_ratLoopBegin(trials_ratLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_rat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_rat'
    });
    psychoJS.experiment.addLoop(trials_rat); // add the loop to the experiment
    currentLoop = trials_rat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_rat.forEach(function() {
      const snapshot = trials_rat.getSnapshot();
    
      trials_ratLoopScheduler.add(importConditions(snapshot));
      trials_ratLoopScheduler.add(rat_testRoutineBegin(snapshot));
      trials_ratLoopScheduler.add(rat_testRoutineEachFrame());
      trials_ratLoopScheduler.add(rat_testRoutineEnd());
      trials_ratLoopScheduler.add(endLoopIteration(trials_ratLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_ratLoopEnd() {
  psychoJS.experiment.removeLoop(trials_rat);

  return Scheduler.Event.NEXT;
}


var trial_ltm;
function trial_ltmLoopBegin(trial_ltmLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
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
    trial_ltm.forEach(function() {
      const snapshot = trial_ltm.getSnapshot();
    
      trial_ltmLoopScheduler.add(importConditions(snapshot));
      trial_ltmLoopScheduler.add(recognition_testRoutineBegin(snapshot));
      trial_ltmLoopScheduler.add(recognition_testRoutineEachFrame());
      trial_ltmLoopScheduler.add(recognition_testRoutineEnd());
      trial_ltmLoopScheduler.add(endLoopIteration(trial_ltmLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trial_ltmLoopEnd() {
  psychoJS.experiment.removeLoop(trial_ltm);

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
    words.append([WordsStimuli]);
    
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


var _instr_resp_si_allKeys;
var instructions_si_practiceComponents;
function instructions_si_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
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
    
    instructions_si_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_si_practiceRoutineEachFrame() {
  return async function () {
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
    instructions_si_practiceComponents.forEach( function(thisComponent) {
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


function instructions_si_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_si_practice'-------
    instructions_si_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    instr_resp_si.stop();
    // the Routine "instructions_si_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_si_space_allKeys;
var si_key_positionsComponents;
function si_key_positionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
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
    
    si_key_positionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function si_key_positionsRoutineEachFrame() {
  return async function () {
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
    si_key_positionsComponents.forEach( function(thisComponent) {
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


function si_key_positionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'si_key_positions'-------
    si_key_positionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_si_space.stop();
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
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_si'-------
    t = 0;
    practice_siClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trialtext = words.slice(i, (i + 4));
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
    
    practice_siComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practice_siRoutineEachFrame() {
  return async function () {
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
    if (fixation_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (target_cue_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (target_si_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (choice1_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (choice2_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (choice3_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (key_resp_si_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    practice_siComponents.forEach( function(thisComponent) {
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


var correct_ans;
function practice_siRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_si'-------
    practice_siComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    i = (i + 4);
    correct_ans = target_si.pos;
    
    key_resp_si_practice.stop();
    // the Routine "practice_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_practice_end_allKeys;
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
    key_resp_practice_end.keys = undefined;
    key_resp_practice_end.rt = undefined;
    _key_resp_practice_end_allKeys = [];
    shuffle(words);
    
    // keep track of which components have finished
    end_practiceComponents = [];
    end_practiceComponents.push(text_end_practice);
    end_practiceComponents.push(key_resp_practice_end);
    
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
    key_resp_practice_end.stop();
    // the Routine "end_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instr_resp_si_2_allKeys;
var instructions_siComponents;
function instructions_siRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
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
    
    instructions_siComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_siRoutineEachFrame() {
  return async function () {
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
    instructions_siComponents.forEach( function(thisComponent) {
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


function instructions_siRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_si'-------
    instructions_siComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    instr_resp_si_2.stop();
    // the Routine "instructions_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_si_allKeys;
var stimulus_identificationComponents;
function stimulus_identificationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stimulus_identification'-------
    t = 0;
    stimulus_identificationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trialtext = words.slice(i, (i + 4));
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
    
    stimulus_identificationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulus_identificationRoutineEachFrame() {
  return async function () {
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
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (target_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (target_si.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (choice1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (choice2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (choice3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (key_resp_si.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    stimulus_identificationComponents.forEach( function(thisComponent) {
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


function stimulus_identificationRoutineEnd() {
  return async function () {
    //------Ending Routine 'stimulus_identification'-------
    stimulus_identificationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    i = (i + 4);
    correct_ans = target_si.pos;
    targetwords.append([target, presentation]);
    
    // was no response the correct answer?!
    if (key_resp_si.keys === undefined) {
      if (['None','none',undefined].includes(position_to_key[target_si.pos])) {
         key_resp_si.corr = 1;  // correct non-response
      } else {
         key_resp_si.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
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
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
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
    
    end_block_siComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_block_siRoutineEachFrame() {
  return async function () {
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
    end_block_siComponents.forEach( function(thisComponent) {
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


function end_block_siRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_block_si'-------
    end_block_siComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_block_si.stop();
    // the Routine "end_block_si" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
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
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_si_text);
    endComponents.push(key_resp);
    
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
    key_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_gough_allKeys;
var gough_scaleComponents;
function gough_scaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gough_scale'-------
    t = 0;
    gough_scaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(600.000000);
    // update component parameters for each repeat
    trait_text.setText(Trait);
    key_resp_gough.keys = undefined;
    key_resp_gough.rt = undefined;
    _key_resp_gough_allKeys = [];
    // keep track of which components have finished
    gough_scaleComponents = [];
    gough_scaleComponents.push(gough_instructions);
    gough_scaleComponents.push(trait_text);
    gough_scaleComponents.push(key_resp_gough);
    
    gough_scaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function gough_scaleRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gough_scale'-------
    // get current time
    t = gough_scaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gough_instructions* updates
    if (t >= 0.0 && gough_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gough_instructions.tStart = t;  // (not accounting for frame time here)
      gough_instructions.frameNStart = frameN;  // exact frame index
      
      gough_instructions.setAutoDraw(true);
    }

    frameRemains = 0.0 + 600 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gough_instructions.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gough_instructions.setAutoDraw(false);
    }
    
    // *trait_text* updates
    if (t >= 0.0 && trait_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trait_text.tStart = t;  // (not accounting for frame time here)
      trait_text.frameNStart = frameN;  // exact frame index
      
      trait_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trait_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trait_text.setAutoDraw(false);
    }
    
    // *key_resp_gough* updates
    if (t >= 0.0 && key_resp_gough.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_gough.tStart = t;  // (not accounting for frame time here)
      key_resp_gough.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_gough.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_gough.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_gough.clearEvents(); });
    }

    frameRemains = 0.0 + 600 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_gough.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_gough.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_gough.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_gough.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_gough_allKeys = _key_resp_gough_allKeys.concat(theseKeys);
      if (_key_resp_gough_allKeys.length > 0) {
        key_resp_gough.keys = _key_resp_gough_allKeys[_key_resp_gough_allKeys.length - 1].name;  // just the last key pressed
        key_resp_gough.rt = _key_resp_gough_allKeys[_key_resp_gough_allKeys.length - 1].rt;
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
    gough_scaleComponents.forEach( function(thisComponent) {
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


function gough_scaleRoutineEnd() {
  return async function () {
    //------Ending Routine 'gough_scale'-------
    gough_scaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_gough.keys', key_resp_gough.keys);
    if (typeof key_resp_gough.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_gough.rt', key_resp_gough.rt);
        routineTimer.reset();
        }
    
    key_resp_gough.stop();
    return Scheduler.Event.NEXT;
  };
}


var rat_setupComponents;
function rat_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
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
    
    rat_setupComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function rat_setupRoutineEachFrame() {
  return async function () {
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
    rat_setupComponents.forEach( function(thisComponent) {
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


function rat_setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'rat_setup'-------
    rat_setupComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "rat_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var instructions_ratComponents;
function instructions_ratRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
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
    
    instructions_ratComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_ratRoutineEachFrame() {
  return async function () {
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
    instructions_ratComponents.forEach( function(thisComponent) {
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


function instructions_ratRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_rat'-------
    instructions_ratComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
    // the Routine "instructions_rat" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_rat_allKeys;
var rat_testComponents;
function rat_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'rat_test'-------
    t = 0;
    rat_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    rat_text.setText(rat_stim[j][0]);
    key_resp_rat.keys = undefined;
    key_resp_rat.rt = undefined;
    _key_resp_rat_allKeys = [];
    // keep track of which components have finished
    rat_testComponents = [];
    rat_testComponents.push(rat_text);
    rat_testComponents.push(key_resp_rat);
    rat_testComponents.push(text_resp);
    
    rat_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var textAdd;
var tempText;
function rat_testRoutineEachFrame() {
  return async function () {
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
    if (rat_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rat_text.setAutoDraw(false);
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
    if (key_resp_rat.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    
    
    
    // *text_resp* updates
    if (t >= 0.0 && text_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_resp.tStart = t;  // (not accounting for frame time here)
      text_resp.frameNStart = frameN;  // exact frame index
      
      text_resp.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    rat_testComponents.forEach( function(thisComponent) {
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


function rat_testRoutineEnd() {
  return async function () {
    //------Ending Routine 'rat_test'-------
    rat_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_rat.keys', key_resp_rat.keys);
    if (typeof key_resp_rat.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_rat.rt', key_resp_rat.rt);
        }
    
    key_resp_rat.stop();
    psychoJS.experiment.addData('textInput', tempText);
    psychoJS.experiment.addData('PresentedItems', rat_stim[j][0]);
    psychoJS.experiment.addData('CorrectAnswer_RAT', rat_stim[j][1]);
    
    j = (j+1);
    return Scheduler.Event.NEXT;
  };
}


var _instr_resp_ltm_allKeys;
var instructions_ltmComponents;
function instructions_ltmRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
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
    
    // keep track of which components have finished
    instructions_ltmComponents = [];
    instructions_ltmComponents.push(instr_text_ltm);
    instructions_ltmComponents.push(instr_resp_ltm);
    
    instructions_ltmComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_ltmRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_ltm'-------
    // get current time
    t = instructions_ltmClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text_ltm* updates
    if (t >= 0.0 && instr_text_ltm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text_ltm.tStart = t;  // (not accounting for frame time here)
      instr_text_ltm.frameNStart = frameN;  // exact frame index
      
      instr_text_ltm.setAutoDraw(true);
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_ltmComponents.forEach( function(thisComponent) {
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


function instructions_ltmRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_ltm'-------
    instructions_ltmComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    instr_resp_ltm.stop();
    // the Routine "instructions_ltm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var recognition_testComponents;
function recognition_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'recognition_test'-------
    t = 0;
    recognition_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    positions = [[(- 0.25), 0], [0.25, 0]];
    shuffle(positions);
    
    distractor.setPos(positions.pop());
    distractor.setText(words.pop());
    target_ltm.setPos(positions.pop());
    target_ltm.setText(targetwords[k][0]);
    slider_right.reset()
    slider_left.reset()
    // keep track of which components have finished
    recognition_testComponents = [];
    recognition_testComponents.push(fixation_ltm);
    recognition_testComponents.push(distractor);
    recognition_testComponents.push(target_ltm);
    recognition_testComponents.push(slider_right);
    recognition_testComponents.push(slider_left);
    
    recognition_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recognition_testRoutineEachFrame() {
  return async function () {
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
    if (fixation_ltm.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (distractor.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    if (target_ltm.status === PsychoJS.Status.STARTED && t >= frameRemains) {
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
    recognition_testComponents.forEach( function(thisComponent) {
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


var distractor_text;
var target_text;
var distractor_pos;
var target_pos;
function recognition_testRoutineEnd() {
  return async function () {
    //------Ending Routine 'recognition_test'-------
    recognition_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    distractor_text = distractor.text;
    target_text = target_ltm.text;
    distractor_pos = distractor.pos;
    target_pos = target_ltm.pos;
    psychoJS.experiment.addData("TargetWord", targetwords[k][0]);
    psychoJS.experiment.addData("TargetTextDisplayed", target_text);
    psychoJS.experiment.addData("DistractorWord", distractor_text);
    psychoJS.experiment.addData("PresentationCondition", targetwords[k][1]);
    psychoJS.experiment.addData('TargetPosition', target_pos)
    psychoJS.experiment.addData('DistractorPosition', distractor_pos)
    
    k = (k + 1);
    
    psychoJS.experiment.addData('slider_right.response', slider_right.getRating());
    psychoJS.experiment.addData('slider_right.rt', slider_right.getRT());
    psychoJS.experiment.addData('slider_left.response', slider_left.getRating());
    psychoJS.experiment.addData('slider_left.rt', slider_left.getRT());
    // the Routine "recognition_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_end_allKeys;
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
    key_resp_end.keys = undefined;
    key_resp_end.rt = undefined;
    _key_resp_end_allKeys = [];
    // keep track of which components have finished
    end_expComponents = [];
    end_expComponents.push(end_text);
    end_expComponents.push(key_resp_end);
    
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
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *key_resp_end* updates
    if (t >= 0.25 && key_resp_end.status === PsychoJS.Status.NOT_STARTED) {
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
    key_resp_end.stop();
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
