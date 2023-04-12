/************ 
 * Sm2 Test *
 ************/


// store info about the experiment session:
let expName = 'SM2';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'


var s;
var v;
var i;
var f;
var p;
var q;
var t;
function HSVtoRGB(h) {
    var r, g, b, i, f, p, q, t;
    s = 1;
    v = 1;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [r, g, b]
   // return {
        //r: Math.round(r * 255),
        //g: Math.round(g * 255),
        //b: Math.round(b * 255)
       // };
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
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
const formula_setup_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(formula_setup_loopLoopBegin(formula_setup_loopLoopScheduler));
flowScheduler.add(formula_setup_loopLoopScheduler);
flowScheduler.add(formula_setup_loopLoopEnd);
flowScheduler.add(instructions_experimentRoutineBegin());
flowScheduler.add(instructions_experimentRoutineEachFrame());
flowScheduler.add(instructions_experimentRoutineEnd());
flowScheduler.add(instructions_perception_practiceRoutineBegin());
flowScheduler.add(instructions_perception_practiceRoutineEachFrame());
flowScheduler.add(instructions_perception_practiceRoutineEnd());
const trials_perception_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_perception_practiceLoopBegin(trials_perception_practiceLoopScheduler));
flowScheduler.add(trials_perception_practiceLoopScheduler);
flowScheduler.add(trials_perception_practiceLoopEnd);
flowScheduler.add(instructions_1RoutineBegin());
flowScheduler.add(instructions_1RoutineEachFrame());
flowScheduler.add(instructions_1RoutineEnd());
const practice_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_1LoopBegin(practice_1LoopScheduler));
flowScheduler.add(practice_1LoopScheduler);
flowScheduler.add(practice_1LoopEnd);
flowScheduler.add(instructions_2RoutineBegin());
flowScheduler.add(instructions_2RoutineEachFrame());
flowScheduler.add(instructions_2RoutineEnd());
const practice_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_2LoopBegin(practice_2LoopScheduler));
flowScheduler.add(practice_2LoopScheduler);
flowScheduler.add(practice_2LoopEnd);
flowScheduler.add(instructions_3RoutineBegin());
flowScheduler.add(instructions_3RoutineEachFrame());
flowScheduler.add(instructions_3RoutineEnd());
const practice_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_3LoopBegin(practice_3LoopScheduler));
flowScheduler.add(practice_3LoopScheduler);
flowScheduler.add(practice_3LoopEnd);
flowScheduler.add(instructions_4RoutineBegin());
flowScheduler.add(instructions_4RoutineEachFrame());
flowScheduler.add(instructions_4RoutineEnd());
const practice_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_4LoopBegin(practice_4LoopScheduler));
flowScheduler.add(practice_4LoopScheduler);
flowScheduler.add(practice_4LoopEnd);
flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const trials_outer_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_outer_loopLoopBegin(trials_outer_loopLoopScheduler));
flowScheduler.add(trials_outer_loopLoopScheduler);
flowScheduler.add(trials_outer_loopLoopEnd);
flowScheduler.add(question_instructRoutineBegin());
flowScheduler.add(question_instructRoutineEachFrame());
flowScheduler.add(question_instructRoutineEnd());
flowScheduler.add(age_qRoutineBegin());
flowScheduler.add(age_qRoutineEachFrame());
flowScheduler.add(age_qRoutineEnd());
flowScheduler.add(gender_qRoutineBegin());
flowScheduler.add(gender_qRoutineEachFrame());
flowScheduler.add(gender_qRoutineEnd());
flowScheduler.add(race_qRoutineBegin());
flowScheduler.add(race_qRoutineEachFrame());
flowScheduler.add(race_qRoutineEnd());
flowScheduler.add(hand_qRoutineBegin());
flowScheduler.add(hand_qRoutineEachFrame());
flowScheduler.add(hand_qRoutineEnd());
flowScheduler.add(color_qRoutineBegin());
flowScheduler.add(color_qRoutineEachFrame());
flowScheduler.add(color_qRoutineEnd());
flowScheduler.add(english_qRoutineBegin());
flowScheduler.add(english_qRoutineEachFrame());
flowScheduler.add(english_qRoutineEnd());
flowScheduler.add(dass_instructRoutineBegin());
flowScheduler.add(dass_instructRoutineEachFrame());
flowScheduler.add(dass_instructRoutineEnd());
const trials_dassLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_dassLoopBegin(trials_dassLoopScheduler));
flowScheduler.add(trials_dassLoopScheduler);
flowScheduler.add(trials_dassLoopEnd);
flowScheduler.add(instructions_ltmRoutineBegin());
flowScheduler.add(instructions_ltmRoutineEachFrame());
flowScheduler.add(instructions_ltmRoutineEnd());
const trials_ltmLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_ltmLoopBegin(trials_ltmLoopScheduler));
flowScheduler.add(trials_ltmLoopScheduler);
flowScheduler.add(trials_ltmLoopEnd);
flowScheduler.add(end_taskRoutineBegin());
flowScheduler.add(end_taskRoutineEachFrame());
flowScheduler.add(end_taskRoutineEnd());
flowScheduler.add(stai_instructRoutineBegin());
flowScheduler.add(stai_instructRoutineEachFrame());
flowScheduler.add(stai_instructRoutineEnd());
const stai_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(stai_4LoopBegin(stai_4LoopScheduler));
flowScheduler.add(stai_4LoopScheduler);
flowScheduler.add(stai_4LoopEnd);
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
    {'name': 'object_stim/obj151.png', 'path': 'object_stim/obj151.png'},
    {'name': 'object_stim/obj92.png', 'path': 'object_stim/obj92.png'},
    {'name': 'object_stim/obj138.png', 'path': 'object_stim/obj138.png'},
    {'name': 'feedback_5.png', 'path': 'feedback_5.png'},
    {'name': 'object_stim/obj126.png', 'path': 'object_stim/obj126.png'},
    {'name': 'object_stim/obj6.png', 'path': 'object_stim/obj6.png'},
    {'name': 'object_stim/obj174.png', 'path': 'object_stim/obj174.png'},
    {'name': 'object_stim/obj4.png', 'path': 'object_stim/obj4.png'},
    {'name': 'object_stim/obj208.png', 'path': 'object_stim/obj208.png'},
    {'name': 'object_stim/obj63.png', 'path': 'object_stim/obj63.png'},
    {'name': 'object_stim/obj160.png', 'path': 'object_stim/obj160.png'},
    {'name': 'object_stim/obj110.png', 'path': 'object_stim/obj110.png'},
    {'name': 'object_stim/obj162.png', 'path': 'object_stim/obj162.png'},
    {'name': 'object_stim/obj202.png', 'path': 'object_stim/obj202.png'},
    {'name': 'object_stim/obj96.png', 'path': 'object_stim/obj96.png'},
    {'name': 'object_stim/obj235.png', 'path': 'object_stim/obj235.png'},
    {'name': 'object_stim/obj146.png', 'path': 'object_stim/obj146.png'},
    {'name': 'object_stim/obj7.png', 'path': 'object_stim/obj7.png'},
    {'name': 'object_stim/obj185.png', 'path': 'object_stim/obj185.png'},
    {'name': 'object_stim/obj85.png', 'path': 'object_stim/obj85.png'},
    {'name': 'object_stim/obj225.png', 'path': 'object_stim/obj225.png'},
    {'name': 'object_stim/obj72.png', 'path': 'object_stim/obj72.png'},
    {'name': 'object_stim/obj155.png', 'path': 'object_stim/obj155.png'},
    {'name': 'object_stim/obj15.png', 'path': 'object_stim/obj15.png'},
    {'name': 'object_stim/obj153.png', 'path': 'object_stim/obj153.png'},
    {'name': 'object_stim/obj227.png', 'path': 'object_stim/obj227.png'},
    {'name': 'object_stim/obj190.png', 'path': 'object_stim/obj190.png'},
    {'name': 'object_stim/obj244.png', 'path': 'object_stim/obj244.png'},
    {'name': 'object_stim/obj95.png', 'path': 'object_stim/obj95.png'},
    {'name': 'object_stim/obj245.png', 'path': 'object_stim/obj245.png'},
    {'name': 'object_stim/obj0.png', 'path': 'object_stim/obj0.png'},
    {'name': 'object_stim/obj219.png', 'path': 'object_stim/obj219.png'},
    {'name': 'object_stim/obj125.png', 'path': 'object_stim/obj125.png'},
    {'name': 'object_stim/obj248.png', 'path': 'object_stim/obj248.png'},
    {'name': 'object_stim/obj97.png', 'path': 'object_stim/obj97.png'},
    {'name': 'object_stim/obj46.png', 'path': 'object_stim/obj46.png'},
    {'name': 'dass_qs.xlsx', 'path': 'dass_qs.xlsx'},
    {'name': 'object_stim/obj143.png', 'path': 'object_stim/obj143.png'},
    {'name': 'object_stim/obj73.png', 'path': 'object_stim/obj73.png'},
    {'name': 'object_stim/obj181.png', 'path': 'object_stim/obj181.png'},
    {'name': 'object_stim/obj52.png', 'path': 'object_stim/obj52.png'},
    {'name': 'object_stim/obj114.png', 'path': 'object_stim/obj114.png'},
    {'name': 'object_stim/obj26.png', 'path': 'object_stim/obj26.png'},
    {'name': 'object_stim/obj221.png', 'path': 'object_stim/obj221.png'},
    {'name': 'object_stim/obj169.png', 'path': 'object_stim/obj169.png'},
    {'name': 'object_stim/obj40.png', 'path': 'object_stim/obj40.png'},
    {'name': 'object_stim/obj50.png', 'path': 'object_stim/obj50.png'},
    {'name': 'object_stim/obj29.png', 'path': 'object_stim/obj29.png'},
    {'name': 'object_stim/obj238.png', 'path': 'object_stim/obj238.png'},
    {'name': 'object_stim/obj216.png', 'path': 'object_stim/obj216.png'},
    {'name': 'object_stim/obj212.png', 'path': 'object_stim/obj212.png'},
    {'name': 'object_stim/obj242.png', 'path': 'object_stim/obj242.png'},
    {'name': 'object_stim/obj243.png', 'path': 'object_stim/obj243.png'},
    {'name': 'object_stim/obj111.png', 'path': 'object_stim/obj111.png'},
    {'name': 'object_stim/obj106.png', 'path': 'object_stim/obj106.png'},
    {'name': 'object_stim/obj69.png', 'path': 'object_stim/obj69.png'},
    {'name': 'object_stim/obj61.png', 'path': 'object_stim/obj61.png'},
    {'name': 'feedback_4.png', 'path': 'feedback_4.png'},
    {'name': 'object_stim/obj76.png', 'path': 'object_stim/obj76.png'},
    {'name': 'feedback_bar.png', 'path': 'feedback_bar.png'},
    {'name': 'object_stim/obj54.png', 'path': 'object_stim/obj54.png'},
    {'name': 'object_stim/obj28.png', 'path': 'object_stim/obj28.png'},
    {'name': 'object_stim/obj204.png', 'path': 'object_stim/obj204.png'},
    {'name': 'object_stim/obj177.png', 'path': 'object_stim/obj177.png'},
    {'name': 'object_stim/obj23.png', 'path': 'object_stim/obj23.png'},
    {'name': 'object_stim/obj33.png', 'path': 'object_stim/obj33.png'},
    {'name': 'object_stim/obj133.png', 'path': 'object_stim/obj133.png'},
    {'name': 'feedback_3.png', 'path': 'feedback_3.png'},
    {'name': 'object_stim/obj230.png', 'path': 'object_stim/obj230.png'},
    {'name': 'object_stim/obj184.png', 'path': 'object_stim/obj184.png'},
    {'name': 'object_stim/obj170.png', 'path': 'object_stim/obj170.png'},
    {'name': 'object_stim/obj65.png', 'path': 'object_stim/obj65.png'},
    {'name': 'object_stim/obj180.png', 'path': 'object_stim/obj180.png'},
    {'name': 'object_stim/obj136.png', 'path': 'object_stim/obj136.png'},
    {'name': 'object_stim/obj197.png', 'path': 'object_stim/obj197.png'},
    {'name': 'object_stim/obj154.png', 'path': 'object_stim/obj154.png'},
    {'name': 'object_stim/obj36.png', 'path': 'object_stim/obj36.png'},
    {'name': 'object_stim/obj18.png', 'path': 'object_stim/obj18.png'},
    {'name': 'object_stim/obj118.png', 'path': 'object_stim/obj118.png'},
    {'name': 'object_stim/obj115.png', 'path': 'object_stim/obj115.png'},
    {'name': 'conditions_D.xlsx', 'path': 'conditions_D.xlsx'},
    {'name': 'object_stim/obj206.png', 'path': 'object_stim/obj206.png'},
    {'name': 'object_stim/obj112.png', 'path': 'object_stim/obj112.png'},
    {'name': 'object_stim/obj156.png', 'path': 'object_stim/obj156.png'},
    {'name': 'object_stim/obj12.png', 'path': 'object_stim/obj12.png'},
    {'name': 'object_stim/obj148.png', 'path': 'object_stim/obj148.png'},
    {'name': 'object_stim/obj42.png', 'path': 'object_stim/obj42.png'},
    {'name': 'object_stim/obj217.png', 'path': 'object_stim/obj217.png'},
    {'name': 'object_stim/obj57.png', 'path': 'object_stim/obj57.png'},
    {'name': 'object_stim/obj24.png', 'path': 'object_stim/obj24.png'},
    {'name': 'object_stim/obj93.png', 'path': 'object_stim/obj93.png'},
    {'name': 'object_stim/obj122.png', 'path': 'object_stim/obj122.png'},
    {'name': 'object_stim/obj77.png', 'path': 'object_stim/obj77.png'},
    {'name': 'object_stim/obj226.png', 'path': 'object_stim/obj226.png'},
    {'name': 'object_stim/obj241.png', 'path': 'object_stim/obj241.png'},
    {'name': 'object_stim/obj128.png', 'path': 'object_stim/obj128.png'},
    {'name': 'object_stim/obj68.png', 'path': 'object_stim/obj68.png'},
    {'name': 'object_stim/obj35.png', 'path': 'object_stim/obj35.png'},
    {'name': 'object_stim/obj5.png', 'path': 'object_stim/obj5.png'},
    {'name': 'object_stim/obj171.png', 'path': 'object_stim/obj171.png'},
    {'name': 'object_stim/obj59.png', 'path': 'object_stim/obj59.png'},
    {'name': 'object_stim/obj231.png', 'path': 'object_stim/obj231.png'},
    {'name': 'object_stim/obj89.png', 'path': 'object_stim/obj89.png'},
    {'name': 'object_stim/obj87.png', 'path': 'object_stim/obj87.png'},
    {'name': 'object_stim/obj149.png', 'path': 'object_stim/obj149.png'},
    {'name': 'object_stim/obj20.png', 'path': 'object_stim/obj20.png'},
    {'name': 'object_stim/obj13.png', 'path': 'object_stim/obj13.png'},
    {'name': 'object_stim/obj81.png', 'path': 'object_stim/obj81.png'},
    {'name': 'object_stim/obj179.png', 'path': 'object_stim/obj179.png'},
    {'name': 'object_stim/obj165.png', 'path': 'object_stim/obj165.png'},
    {'name': 'object_stim/obj90.png', 'path': 'object_stim/obj90.png'},
    {'name': 'object_stim/obj135.png', 'path': 'object_stim/obj135.png'},
    {'name': 'object_stim/obj100.png', 'path': 'object_stim/obj100.png'},
    {'name': 'object_stim/obj55.png', 'path': 'object_stim/obj55.png'},
    {'name': 'object_stim/obj3.png', 'path': 'object_stim/obj3.png'},
    {'name': 'object_stim/obj8.png', 'path': 'object_stim/obj8.png'},
    {'name': 'object_stim/obj113.png', 'path': 'object_stim/obj113.png'},
    {'name': 'object_stim/obj215.png', 'path': 'object_stim/obj215.png'},
    {'name': 'object_stim/obj17.png', 'path': 'object_stim/obj17.png'},
    {'name': 'object_stim/obj139.png', 'path': 'object_stim/obj139.png'},
    {'name': 'object_stim/obj80.png', 'path': 'object_stim/obj80.png'},
    {'name': 'object_stim/obj173.png', 'path': 'object_stim/obj173.png'},
    {'name': 'object_stim/obj94.png', 'path': 'object_stim/obj94.png'},
    {'name': 'object_stim/obj99.png', 'path': 'object_stim/obj99.png'},
    {'name': 'object_stim/obj67.png', 'path': 'object_stim/obj67.png'},
    {'name': 'object_stim/obj129.png', 'path': 'object_stim/obj129.png'},
    {'name': 'object_stim/obj131.png', 'path': 'object_stim/obj131.png'},
    {'name': 'conditions_C.xlsx', 'path': 'conditions_C.xlsx'},
    {'name': 'object_stim/obj152.png', 'path': 'object_stim/obj152.png'},
    {'name': 'conditions_B.xlsx', 'path': 'conditions_B.xlsx'},
    {'name': 'object_stim/obj213.png', 'path': 'object_stim/obj213.png'},
    {'name': 'object_stim/obj150.png', 'path': 'object_stim/obj150.png'},
    {'name': 'object_stim/obj119.png', 'path': 'object_stim/obj119.png'},
    {'name': 'object_stim/obj88.png', 'path': 'object_stim/obj88.png'},
    {'name': 'object_stim/obj157.png', 'path': 'object_stim/obj157.png'},
    {'name': 'object_stim/obj189.png', 'path': 'object_stim/obj189.png'},
    {'name': 'object_stim/obj229.png', 'path': 'object_stim/obj229.png'},
    {'name': 'object_stim/obj109.png', 'path': 'object_stim/obj109.png'},
    {'name': 'object_stim/obj191.png', 'path': 'object_stim/obj191.png'},
    {'name': 'object_stim/obj120.png', 'path': 'object_stim/obj120.png'},
    {'name': 'object_stim/obj188.png', 'path': 'object_stim/obj188.png'},
    {'name': 'object_stim/obj130.png', 'path': 'object_stim/obj130.png'},
    {'name': 'object_stim/obj107.png', 'path': 'object_stim/obj107.png'},
    {'name': 'object_stim/obj193.png', 'path': 'object_stim/obj193.png'},
    {'name': 'object_stim/obj218.png', 'path': 'object_stim/obj218.png'},
    {'name': 'object_stim/obj134.png', 'path': 'object_stim/obj134.png'},
    {'name': 'object_stim/obj246.png', 'path': 'object_stim/obj246.png'},
    {'name': 'feedback_1.png', 'path': 'feedback_1.png'},
    {'name': 'object_stim/obj84.png', 'path': 'object_stim/obj84.png'},
    {'name': 'object_stim/obj70.png', 'path': 'object_stim/obj70.png'},
    {'name': 'feedback_2.png', 'path': 'feedback_2.png'},
    {'name': 'object_stim/obj198.png', 'path': 'object_stim/obj198.png'},
    {'name': 'object_stim/obj82.png', 'path': 'object_stim/obj82.png'},
    {'name': 'object_stim/obj53.png', 'path': 'object_stim/obj53.png'},
    {'name': 'object_stim/obj41.png', 'path': 'object_stim/obj41.png'},
    {'name': 'object_stim/obj51.png', 'path': 'object_stim/obj51.png'},
    {'name': 'object_stim/obj47.png', 'path': 'object_stim/obj47.png'},
    {'name': 'object_stim/obj222.png', 'path': 'object_stim/obj222.png'},
    {'name': 'object_stim/obj132.png', 'path': 'object_stim/obj132.png'},
    {'name': 'object_stim/obj38.png', 'path': 'object_stim/obj38.png'},
    {'name': 'object_stim/obj249.png', 'path': 'object_stim/obj249.png'},
    {'name': 'object_stim/obj34.png', 'path': 'object_stim/obj34.png'},
    {'name': 'object_stim/obj214.png', 'path': 'object_stim/obj214.png'},
    {'name': 'object_stim/obj14.png', 'path': 'object_stim/obj14.png'},
    {'name': 'object_stim/obj166.png', 'path': 'object_stim/obj166.png'},
    {'name': 'object_stim/obj172.png', 'path': 'object_stim/obj172.png'},
    {'name': 'object_stim/obj186.png', 'path': 'object_stim/obj186.png'},
    {'name': 'object_stim/obj142.png', 'path': 'object_stim/obj142.png'},
    {'name': 'object_stim/obj58.png', 'path': 'object_stim/obj58.png'},
    {'name': 'object_stim/obj239.png', 'path': 'object_stim/obj239.png'},
    {'name': 'object_stim/obj11.png', 'path': 'object_stim/obj11.png'},
    {'name': 'object_stim/obj10.png', 'path': 'object_stim/obj10.png'},
    {'name': 'object_stim/obj224.png', 'path': 'object_stim/obj224.png'},
    {'name': 'conditions_A.xlsx', 'path': 'conditions_A.xlsx'},
    {'name': 'object_stim/obj117.png', 'path': 'object_stim/obj117.png'},
    {'name': 'object_stim/obj187.png', 'path': 'object_stim/obj187.png'},
    {'name': 'object_stim/obj209.png', 'path': 'object_stim/obj209.png'},
    {'name': 'object_stim/obj44.png', 'path': 'object_stim/obj44.png'},
    {'name': 'object_stim/obj223.png', 'path': 'object_stim/obj223.png'},
    {'name': 'object_stim/obj86.png', 'path': 'object_stim/obj86.png'},
    {'name': 'object_stim/obj48.png', 'path': 'object_stim/obj48.png'},
    {'name': 'object_stim/obj200.png', 'path': 'object_stim/obj200.png'},
    {'name': 'object_stim/obj247.png', 'path': 'object_stim/obj247.png'},
    {'name': 'object_stim/obj195.png', 'path': 'object_stim/obj195.png'},
    {'name': 'object_stim/obj183.png', 'path': 'object_stim/obj183.png'},
    {'name': 'object_stim/obj236.png', 'path': 'object_stim/obj236.png'},
    {'name': 'object_stim/obj210.png', 'path': 'object_stim/obj210.png'},
    {'name': 'object_stim/obj102.png', 'path': 'object_stim/obj102.png'},
    {'name': 'object_stim/obj64.png', 'path': 'object_stim/obj64.png'},
    {'name': 'object_stim/obj25.png', 'path': 'object_stim/obj25.png'},
    {'name': 'object_stim/obj199.png', 'path': 'object_stim/obj199.png'},
    {'name': 'object_stim/obj137.png', 'path': 'object_stim/obj137.png'},
    {'name': 'object_stim/obj250.png', 'path': 'object_stim/obj250.png'},
    {'name': 'object_stim/obj105.png', 'path': 'object_stim/obj105.png'},
    {'name': 'object_stim/obj121.png', 'path': 'object_stim/obj121.png'},
    {'name': 'object_stim/obj66.png', 'path': 'object_stim/obj66.png'},
    {'name': 'object_stim/obj161.png', 'path': 'object_stim/obj161.png'},
    {'name': 'object_stim/obj74.png', 'path': 'object_stim/obj74.png'},
    {'name': 'object_stim/obj108.png', 'path': 'object_stim/obj108.png'},
    {'name': 'object_stim/obj49.png', 'path': 'object_stim/obj49.png'},
    {'name': 'object_stim/obj164.png', 'path': 'object_stim/obj164.png'},
    {'name': 'object_stim/obj21.png', 'path': 'object_stim/obj21.png'},
    {'name': 'delay_conds.xlsx', 'path': 'delay_conds.xlsx'},
    {'name': 'object_stim/obj220.png', 'path': 'object_stim/obj220.png'},
    {'name': 'object_stim/obj196.png', 'path': 'object_stim/obj196.png'},
    {'name': 'object_stim/obj98.png', 'path': 'object_stim/obj98.png'},
    {'name': 'object_stim/obj251.png', 'path': 'object_stim/obj251.png'},
    {'name': 'object_stim/obj103.png', 'path': 'object_stim/obj103.png'},
    {'name': 'object_stim/obj30.png', 'path': 'object_stim/obj30.png'},
    {'name': 'object_stim/obj147.png', 'path': 'object_stim/obj147.png'},
    {'name': 'selected_formulas.csv', 'path': 'selected_formulas.csv'},
    {'name': 'object_stim/obj232.png', 'path': 'object_stim/obj232.png'},
    {'name': 'object_stim/obj37.png', 'path': 'object_stim/obj37.png'},
    {'name': 'object_stim/obj207.png', 'path': 'object_stim/obj207.png'},
    {'name': 'stai_qs.xlsx', 'path': 'stai_qs.xlsx'},
    {'name': 'object_stim/obj116.png', 'path': 'object_stim/obj116.png'},
    {'name': 'object_stim/obj158.png', 'path': 'object_stim/obj158.png'},
    {'name': 'object_stim/obj79.png', 'path': 'object_stim/obj79.png'},
    {'name': 'object_stim/obj203.png', 'path': 'object_stim/obj203.png'},
    {'name': 'object_stim/obj194.png', 'path': 'object_stim/obj194.png'},
    {'name': 'object_stim/obj175.png', 'path': 'object_stim/obj175.png'},
    {'name': 'object_stim/obj123.png', 'path': 'object_stim/obj123.png'},
    {'name': 'object_stim/obj19.png', 'path': 'object_stim/obj19.png'},
    {'name': 'object_stim/obj78.png', 'path': 'object_stim/obj78.png'},
    {'name': 'object_stim/obj233.png', 'path': 'object_stim/obj233.png'},
    {'name': 'object_stim/obj62.png', 'path': 'object_stim/obj62.png'},
    {'name': 'object_stim/obj16.png', 'path': 'object_stim/obj16.png'},
    {'name': 'object_stim/obj71.png', 'path': 'object_stim/obj71.png'},
    {'name': 'object_stim/obj163.png', 'path': 'object_stim/obj163.png'},
    {'name': 'object_stim/obj228.png', 'path': 'object_stim/obj228.png'},
    {'name': 'object_stim/obj39.png', 'path': 'object_stim/obj39.png'},
    {'name': 'object_stim/obj182.png', 'path': 'object_stim/obj182.png'},
    {'name': 'object_stim/obj159.png', 'path': 'object_stim/obj159.png'},
    {'name': 'object_stim/obj75.png', 'path': 'object_stim/obj75.png'},
    {'name': 'object_stim/obj167.png', 'path': 'object_stim/obj167.png'},
    {'name': 'object_stim/obj127.png', 'path': 'object_stim/obj127.png'},
    {'name': 'object_stim/obj192.png', 'path': 'object_stim/obj192.png'},
    {'name': 'object_stim/obj145.png', 'path': 'object_stim/obj145.png'},
    {'name': 'object_stim/obj31.png', 'path': 'object_stim/obj31.png'},
    {'name': 'object_stim/obj60.png', 'path': 'object_stim/obj60.png'},
    {'name': 'object_stim/obj140.png', 'path': 'object_stim/obj140.png'},
    {'name': 'object_stim/obj237.png', 'path': 'object_stim/obj237.png'},
    {'name': 'object_stim/obj45.png', 'path': 'object_stim/obj45.png'},
    {'name': 'object_stim/obj9.png', 'path': 'object_stim/obj9.png'},
    {'name': 'object_stim/obj1.png', 'path': 'object_stim/obj1.png'},
    {'name': 'object_stim/obj141.png', 'path': 'object_stim/obj141.png'},
    {'name': 'object_stim/obj205.png', 'path': 'object_stim/obj205.png'},
    {'name': 'object_stim/obj234.png', 'path': 'object_stim/obj234.png'},
    {'name': 'object_stim/obj101.png', 'path': 'object_stim/obj101.png'},
    {'name': 'object_stim/obj176.png', 'path': 'object_stim/obj176.png'},
    {'name': 'object_stim/obj144.png', 'path': 'object_stim/obj144.png'},
    {'name': 'object_stim/obj2.png', 'path': 'object_stim/obj2.png'},
    {'name': 'object_stim/obj104.png', 'path': 'object_stim/obj104.png'},
    {'name': 'object_stim/obj83.png', 'path': 'object_stim/obj83.png'},
    {'name': 'object_stim/obj168.png', 'path': 'object_stim/obj168.png'},
    {'name': 'object_stim/obj211.png', 'path': 'object_stim/obj211.png'},
    {'name': 'object_stim/obj124.png', 'path': 'object_stim/obj124.png'},
    {'name': 'object_stim/obj91.png', 'path': 'object_stim/obj91.png'},
    {'name': 'object_stim/obj56.png', 'path': 'object_stim/obj56.png'},
    {'name': 'object_stim/obj240.png', 'path': 'object_stim/obj240.png'},
    {'name': 'object_stim/obj201.png', 'path': 'object_stim/obj201.png'},
    {'name': 'object_stim/obj43.png', 'path': 'object_stim/obj43.png'},
    {'name': 'object_stim/obj22.png', 'path': 'object_stim/obj22.png'},
    {'name': 'object_stim/obj32.png', 'path': 'object_stim/obj32.png'},
    {'name': 'object_stim/obj27.png', 'path': 'object_stim/obj27.png'},
    {'name': 'object_stim/obj178.png', 'path': 'object_stim/obj178.png'}
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
  psychoJS.setRedirectUrls(('https://gccuny.az1.qualtrics.com/jfe/form/SV_801AxGYy81BpkLs?participant=' + expInfo['participant']), '');

  return Scheduler.Event.NEXT;
}


var setupClock;
var group;
var conditions_file;
var formula_loadClock;
var level_1_probs;
var level_2_probs;
var level_3_probs;
var level_4_probs;
var level_5_probs;
var instructions_experimentClock;
var text_22;
var key_resp_12;
var instructions_perception_practiceClock;
var text_23;
var key_resp_13;
var response_perception_practiceClock;
var mouse_resp_perc_2;
var perception_stim_presented_2;
var perception_color_2;
var circle_resp_12;
var perception_stim_response_2;
var perception_color_response_2;
var dot_resp1_12;
var fixation_5;
var perception_practice_feedbackClock;
var feedback_msg_perception;
var text_44;
var key_resp_25;
var instructions_1Clock;
var text_11;
var key_resp_4;
var practice_memory_array_1Clock;
var stim1_2;
var wm_color_4;
var stim2_2;
var wm_color_5;
var stim3_2;
var wm_color_6;
var fixation_2;
var practice_response_memoryClock;
var mouse_resp_4;
var score;
var circle_resp_8;
var image_6;
var wm_color_10;
var dot_resp1_8;
var practice_feedbackClock;
var text_26;
var key_resp_17;
var circle_resp_9;
var stim1_4;
var wm_color_11;
var dot_resp1_9;
var circle_resp_10;
var stim1_5;
var wm_color_12;
var dot_resp1_10;
var text_27;
var text_28;
var instructions_2Clock;
var text_12;
var key_resp_5;
var practice_parity1Clock;
var parity_nums;
var text_5;
var parity_resp_2;
var practice_parity_feedbackClock;
var text_10;
var text_9;
var key_resp_3;
var instructions_3Clock;
var text_13;
var key_resp_6;
var delay1Clock;
var fixation_delay1;
var delay2Clock;
var fixation_delay2;
var instructions_4Clock;
var text_25;
var key_resp_16;
var memory_arrayClock;
var circle_focus_item;
var stim1;
var wm_color_1;
var stim2;
var wm_color_2;
var stim3;
var wm_color_3;
var fixation;
var parityClock;
var parity_points;
var parity_points_total;
var text;
var parity_resp;
var response_memoryClock;
var mouse_resp;
var points_total;
var circle_resp;
var image_1;
var wm_color;
var dot_resp1;
var feedbackClock;
var circle_focus_item_2;
var text_3;
var key_resp;
var text_2;
var text_4;
var text_16;
var text_17;
var text_113;
var text_103;
var text_15;
var practice_endClock;
var text_14;
var key_resp_7;
var stai_instructClock;
var text_117;
var key_resp_20;
var staiClock;
var text_52;
var text_53;
var text_54;
var text_55;
var text_56;
var text_57;
var text_58;
var text_59;
var text_60;
var key_resp_stai;
var stress_instruct_1Clock;
var text_8;
var key_resp_18;
var stress_instruct_2Clock;
var text_29;
var key_resp_19;
var feedback_bar_practice;
var stress_taskClock;
var current_level;
var m;
var current_feedback;
var current_stress_score;
var trial_counter;
var stress_i;
var stress_time;
var text_7;
var stress_key_resp;
var image_2;
var text_32;
var stress_breakClock;
var stress_block;
var text_31;
var key_resp_14;
var end_taskClock;
var text_20;
var key_resp_10;
var instructions_perceptionClock;
var text_43;
var key_resp_24;
var remindClock;
var text_18;
var key_resp_9;
var response_perceptionClock;
var mouse_resp_perc;
var perception_stim_presented;
var perception_color;
var circle_resp_7;
var perception_stim_response;
var perception_color_response;
var dot_resp1_7;
var fixation_3;
var end_blockClock;
var msg;
var block_message;
var text_block_end;
var text_19;
var key_resp_8;
var wm_instructClock;
var text_63;
var key_resp_21;
var question_instructClock;
var text_24;
var key_resp_2;
var age_qClock;
var text_61;
var age_resp;
var text_89;
var key_resp_15;
var gender_qClock;
var text_83;
var text_84;
var text_90;
var text_85;
var text_91;
var text_86;
var text_92;
var text_87;
var text_93;
var gender_resp;
var race_qClock;
var text_62;
var text_64;
var text_74;
var text_65;
var text_75;
var text_66;
var text_76;
var text_67;
var text_77;
var text_68;
var text_78;
var text_69;
var text_79;
var text_70;
var text_80;
var text_71;
var text_81;
var text_72;
var text_82;
var key_resp_race;
var key_resp_23;
var text_73;
var hand_qClock;
var text_94;
var text_97;
var text_98;
var text_99;
var text_100;
var hand_resp;
var color_qClock;
var text_95;
var text_101;
var text_102;
var text_104;
var text_105;
var color_resp;
var english_qClock;
var text_96;
var text_107;
var text_108;
var text_109;
var text_110;
var english_resp;
var dass_instructClock;
var text_115;
var key_resp_22;
var dassClock;
var text_30;
var text_34;
var text_35;
var text_36;
var text_37;
var text_38;
var text_39;
var text_40;
var text_41;
var key_resp_dass;
var text_42;
var instructions_ltmClock;
var text_21;
var key_resp_11;
var ltm_response_memoryClock;
var mouse_resp_ltm;
var circle_resp_11;
var ltm_stim_response;
var ltm_color_response;
var dot_resp1_11;
var fixation_4;
var endClock;
var text_33;
var key_resp_calc;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 4)
  group = ""
  
  if ((rndInt === 1)) {
      group = "B";
      conditions_file = "conditions_B.xlsx"
  } else {
      if ((rndInt === 2)) {
          group = "B";
          conditions_file = "conditions_B.xlsx"
      } else {
          if ((rndInt === 3)) {
              group = "B";
              conditions_file = "conditions_B.xlsx"
          } else {
              if ((rndInt === 4)) {
                  group = "B";
                  conditions_file = "conditions_B.xlsx"
              }
          }
      }
  }
  
  // Initialize components for Routine "formula_load"
  formula_loadClock = new util.Clock();
  level_1_probs = [];
  level_2_probs = [];
  level_3_probs = [];
  level_4_probs = [];
  level_5_probs = [];
  
  // Initialize components for Routine "instructions_experiment"
  instructions_experimentClock = new util.Clock();
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'Welcome to the experiment! \n\nDuring this experiment, you will complete several different tasks. You will first practice the tasks before starting the experimental trials.\n\nPlease read all instructions carefully throughout the experiment.\n\nPress SPACE to continue.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_perception_practice"
  instructions_perception_practiceClock = new util.Clock();
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: "Let's do the first practice task. \n\nFirst, a small cross will appear in the center of the screen. This is your warning that the objects are coming and that you should pay attention. \n\nYou will then see two objects on the screen. One object will be colored and one will be gray. The gray object will appear in the center of a ring. As you move the mouse, the color of the gray object will change. You will use the mouse to adjust the color of the object until it is the same color the colored object. \n\nPlease only click the mouse when you are ready to submit your response. You will repeat this procedure several times.\n\n\nPress SPACE to begin the practice.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "response_perception_practice"
  response_perception_practiceClock = new util.Clock();
  mouse_resp_perc_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_perc_2.mouseClock = new util.Clock();
  perception_stim_presented_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'perception_stim_presented_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.25), 0], size : [0.1, 0.1],
    color : new util.Color([0.0, 0.0, 0.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  perception_color_2 = new visual.Polygon({
    win: psychoJS.window, name: 'perception_color_2', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [(- 0.25), 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -3, interpolate: true,
  });
  
  circle_resp_12 = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_resp_12', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0.25, 0],
    lineWidth: 10.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  perception_stim_response_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'perception_stim_response_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.25, 0], size : [0.1, 0.1],
    color : new util.Color([0.0, 0.0, 0.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  perception_color_response_2 = new visual.Polygon({
    win: psychoJS.window, name: 'perception_color_response_2', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0.25, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -6, interpolate: true,
  });
  
  dot_resp1_12 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot_resp1_12', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([0.0039, 0.0039, 0.0039]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  fixation_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_5', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  // Initialize components for Routine "perception_practice_feedback"
  perception_practice_feedbackClock = new util.Clock();
  feedback_msg_perception = "";
  
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_25 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_1"
  instructions_1Clock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: "Let's practice another task. For this task, you will see several colored objects. Your job is to remember to color of these objects. \n\nFirst, a small cross will appear in the center of the screen. This is your warning that the objects are coming and that you should pay attention. If you direct your eyes to the center of the screen you will see the objects better as they flash on the screen very quickly.\n\nAfter you have seen the objects, you will be asked to report the color of each object you saw previously. Like before, you will use the mouse to adjust the color of the object until it is the same color as you remember seeing earlier.\n\nPlease only click the mouse when you are ready to submit your response. You will repeat this procedure for all three objects.\n\nPress SPACE to begin the practice.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_memory_array_1"
  practice_memory_array_1Clock = new util.Clock();
  stim1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  wm_color_4 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_4', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -2, interpolate: true,
  });
  
  stim2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  wm_color_5 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_5', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -4, interpolate: true,
  });
  
  stim3_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  wm_color_6 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_6', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -6, interpolate: true,
  });
  
  fixation_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "practice_response_memory"
  practice_response_memoryClock = new util.Clock();
  mouse_resp_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_4.mouseClock = new util.Clock();
  score = [0, 0, 0];
  
  circle_resp_8 = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_resp_8', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 10.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  wm_color_10 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_10', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -4, interpolate: true,
  });
  
  dot_resp1_8 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot_resp1_8', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([0.0039, 0.0039, 0.0039]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "practice_feedback"
  practice_feedbackClock = new util.Clock();
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  circle_resp_9 = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_resp_9', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 10.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  stim1_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  wm_color_11 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_11', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -5, interpolate: true,
  });
  
  dot_resp1_9 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot_resp1_9', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([0.0039, 0.0039, 0.0039]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  circle_resp_10 = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_resp_10', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 10.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  stim1_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  wm_color_12 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_12', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -9, interpolate: true,
  });
  
  dot_resp1_10 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot_resp1_10', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([0.0039, 0.0039, 0.0039]),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: 'Original Color:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.25), 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'Your Response:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.25, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "instructions_2"
  instructions_2Clock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: "Great, let's do some more practice!\n\nDuring this task, you will see a number in the center of the screen. Your job is to decide if the number is even or odd. \n\nPress 'A' if the number is even and 'S' if the number is odd.\n\nPress SPACE to begin the practice.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_parity1"
  practice_parity1Clock = new util.Clock();
  parity_nums = [1, 2, 3, 4, 5, 6, 7, 8];
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  parity_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_parity_feedback"
  practice_parity_feedbackClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_3"
  instructions_3Clock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: "Now, we are going to combine tasks. \n\nDuring the next part of the practice, you will do both tasks that you just practiced. First, you will see the colored objects. Then you will see the numbers and indicate if they are even or odd. Finally, you will report the color of each object using the mouse.\n\nRemember, press 'A' if the number is even and 'S' if the number is odd.\n\nPress SPACE to begin the practice.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "delay1"
  delay1Clock = new util.Clock();
  fixation_delay1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_delay1', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "delay2"
  delay2Clock = new util.Clock();
  fixation_delay2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_delay2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "instructions_4"
  instructions_4Clock = new util.Clock();
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: "Now, you will practice a few trials that will be exactly like the real trials. Everything will be the same as what you just practiced, except these trials will be faster and you will no longer receive feedback showing the original color compared to your response color. \n\nAdditionally, you can now earn points! For each object color that you remember correctly, you will receive points. You will receive more points the closer your response is to the original color.  You will see a gray circle around one of the objects when they are first presented. If you remember this item correctly, you will receive bonus points!\n\nYou will also receive points for the even/odd task. The more that you answer correctly, the more points you will receive.\n\nRemember, press 'A' if the number is even and 'S' if the number is odd. Keep your fingers on these keys so you are ready when the numbers appear.\n\nBoth tasks are important. Please try to respond as quickly and accurately as possible. \n\nPress SPACE when you are ready to begin.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "memory_array"
  memory_arrayClock = new util.Clock();
  circle_focus_item = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_focus_item', 
    edges: 75, size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 10.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  wm_color_1 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_1', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -3, interpolate: true,
  });
  
  stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  wm_color_2 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_2', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -5, interpolate: true,
  });
  
  stim3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  wm_color_3 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_3', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -7, interpolate: true,
  });
  
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  // Initialize components for Routine "parity"
  parityClock = new util.Clock();
  parity_nums = [1, 2, 3, 4, 5, 6, 7, 8];
  parity_points = 0;
  parity_points_total = 0;
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  parity_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "response_memory"
  response_memoryClock = new util.Clock();
  mouse_resp = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp.mouseClock = new util.Clock();
  score = [0,0,0]
  points_total = 0
  
  circle_resp = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_resp', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 10.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  wm_color = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -4, interpolate: true,
  });
  
  dot_resp1 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot_resp1', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([0.0039, 0.0039, 0.0039]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  circle_focus_item_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_focus_item_2', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 10.0, lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Current score:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_113 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_113',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_103 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_103',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Great, you have finished the practice trials!\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stai_instruct"
  stai_instructClock = new util.Clock();
  text_117 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_117',
    text: 'A number of statements which people have used to describe themselves are given below. Read each statement and then select the appropriate number key to indicate how you feel right now, that is, at this moment. There are no right or wrong answers. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stai"
  staiClock = new util.Clock();
  text_52 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_52',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_53 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_53',
    text: 'Not at all',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_54 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_54',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_55 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_55',
    text: 'A little',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_56 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_56',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_57 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_57',
    text: 'Somewhat',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_58 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_58',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_59 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_59',
    text: 'Very much so',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_60 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_60',
    text: '4',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  key_resp_stai = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stress_instruct_1"
  stress_instruct_1Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: "Welcome to the next part of the experiment. During this part, you will be presented with math problems that you will need to solve. You will use the numbers at the top of your keyboard to indicate your response.\n\nFor example, you might see problems like this:\n\n7 - 4\n\nThe answer is 3, so you should press the 3 key.\n\n9 * 2 / 3 * 1\n\nThe answer is 6, so you should press the 6 key.\n\nYou will try to solve as many problems as possible before your time is up.\n\nYou will earn a point for every problem you answer correctly. You will also lose a point for every problem you answer incorrectly, or if you don't submit an answer.\n\nPlease solve the problems in your head as quickly and accurately as possible. Please do not use a calculator.\n\nPress SPACE to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stress_instruct_2"
  stress_instruct_2Clock = new util.Clock();
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: "Many other people have completed this experiment and we are studying how your performance compares to everyone else. While you're completing this task, you will see how your performance compares to the other people who have completed this task.\n\nDuring the task, you will see this bar at the top of the screen, showing your performance compared to everyone else. You should try to do as well as possible and remain in the green as much as possible. \n\nPress SPACE to continue. ",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  feedback_bar_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_bar_practice', units : undefined, 
    image : 'feedback_bar.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "stress_task"
  stress_taskClock = new util.Clock();
  current_level = 1;
  m = 0;
  current_feedback = "feedback_bar.png";
  current_stress_score = 0;
  trial_counter = 1;
  stress_i = 1;
  stress_time = 5;
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  stress_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: '= ?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "stress_break"
  stress_breakClock = new util.Clock();
  stress_block = 1;
  
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_task"
  end_taskClock = new util.Clock();
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: "You have finished this part of the experiment. \n\nPress SPACE when you're ready to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_perception"
  instructions_perceptionClock = new util.Clock();
  text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_43',
    text: 'Now, you are going to do the task that you practiced earlier with the two objects, one colored object and one gray object. \n\nYour job is to use the mouse adjust the color of the gray object until it matches the color of the colored object. \n\nAfter you submit your response, you will do the even/odd task that you practiced earlier. Remember press A if the number is even and S if the number is odd.\n\nBoth tasks are important. Please try to respond as quickly and accurately as possible.\n\nPress SPACE to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_24 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "remind"
  remindClock = new util.Clock();
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: "Remember, press 'A' if even, 'S' if odd.\n\nPress SPACE to begin.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "response_perception"
  response_perceptionClock = new util.Clock();
  mouse_resp_perc = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_perc.mouseClock = new util.Clock();
  perception_stim_presented = new visual.ImageStim({
    win : psychoJS.window,
    name : 'perception_stim_presented', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.25), 0], size : [0.1, 0.1],
    color : new util.Color([0.0, 0.0, 0.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  perception_color = new visual.Polygon({
    win: psychoJS.window, name: 'perception_color', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [(- 0.25), 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -3, interpolate: true,
  });
  
  circle_resp_7 = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_resp_7', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0.25, 0],
    lineWidth: 10.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  perception_stim_response = new visual.ImageStim({
    win : psychoJS.window,
    name : 'perception_stim_response', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.25, 0], size : [0.1, 0.1],
    color : new util.Color([0.0, 0.0, 0.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  perception_color_response = new visual.Polygon({
    win: psychoJS.window, name: 'perception_color_response', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0.25, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 0.5, depth: -6, interpolate: true,
  });
  
  dot_resp1_7 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot_resp1_7', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([0.0039, 0.0039, 0.0039]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  fixation_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_3', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -8, interpolate: true,
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
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'Please take a short break.\n\nPress SPACE when you are ready to begin again.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "wm_instruct"
  wm_instructClock = new util.Clock();
  text_63 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_63',
    text: 'Now, you are going to do the task with several colored objects. Your job is to remember the color of these objects. \n\nLike before, you will do the even/odd task after seeing the objects. Remember, press A if the number is even and S if the number is odd.\n\nBoth tasks are important. Please try to respond as quickly and accurately as possible.\n\nPress SPACE to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "question_instruct"
  question_instructClock = new util.Clock();
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'Next, we have a few questions about you.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "age_q"
  age_qClock = new util.Clock();
  text_61 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_61',
    text: 'Enter your age:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  age_resp = new visual.TextBox({
    win: psychoJS.window,
    name: 'age_resp',
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
  
  text_89 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_89',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "gender_q"
  gender_qClock = new util.Clock();
  text_83 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_83',
    text: 'What is your gender identity?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_84 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_84',
    text: 'Man',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_90 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_90',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_85 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_85',
    text: 'Woman',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_91 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_91',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_86 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_86',
    text: 'Another gender \nidentity ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_92 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_92',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_87 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_87',
    text: 'I prefer not \nto respond',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_93 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_93',
    text: '4',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  gender_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "race_q"
  race_qClock = new util.Clock();
  text_62 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_62',
    text: 'What is your race/ethnicity? (Select all that apply) ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_64 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_64',
    text: 'White',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_74 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_74',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_65 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_65',
    text: 'Black or African \nAmerican',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_75 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_75',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_66 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_66',
    text: 'Hispanic, Latino, \nor Spanish Origin',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_76 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_76',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_67 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_67',
    text: 'Asian',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.05, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_77 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_77',
    text: '4',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.05, 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_68 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_68',
    text: 'Native American \nor Alaskan Native',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.25, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_78 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_78',
    text: '5',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.25, 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  text_69 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_69',
    text: 'Hawaiian Native \nor Pacific Islander',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.55, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  text_79 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_79',
    text: '6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.55, 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  text_70 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_70',
    text: 'More than one',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  text_80 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_80',
    text: '7',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.125)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  text_71 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_71',
    text: 'Other',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  text_81 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_81',
    text: '8',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.125)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -16.0 
  });
  
  text_72 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_72',
    text: 'I prefer not to respond',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -17.0 
  });
  
  text_82 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_82',
    text: '9',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.125)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -18.0 
  });
  
  key_resp_race = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_23 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_73 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_73',
    text: 'Press SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -21.0 
  });
  
  // Initialize components for Routine "hand_q"
  hand_qClock = new util.Clock();
  text_94 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_94',
    text: 'Which hand do you use to brush your teeth?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_97 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_97',
    text: 'Left',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_98 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_98',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_99 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_99',
    text: 'Right',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  hand_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "color_q"
  color_qClock = new util.Clock();
  text_95 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_95',
    text: 'Are you color-blind?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_101 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_101',
    text: 'Yes',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_102 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_102',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_104 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_104',
    text: 'No',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_105 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_105',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  color_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "english_q"
  english_qClock = new util.Clock();
  text_96 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_96',
    text: 'Did you learn to speak English by age 5?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_107 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_107',
    text: 'Yes',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_108 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_108',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_109 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_109',
    text: 'No',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_110 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_110',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, 0.075], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  english_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "dass_instruct"
  dass_instructClock = new util.Clock();
  text_115 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_115',
    text: 'Please read each statement and press a number key 0, 1, 2, or 3 which indicates how much the statement applied to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "dass"
  dassClock = new util.Clock();
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_34',
    text: 'Did not apply \nto me at all\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_35',
    text: '0',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.45), (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_36',
    text: 'Applied to me in \nsome degree, or \nsome of the time',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_37',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_38',
    text: 'Applied to me a \nconsiderable degree \nor a good part of time',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_39',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_40',
    text: 'Applied to me very much \nor most of the time\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_41',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.45, (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  key_resp_dass = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_42',
    text: 'Please read each statement and press a number key 0, 1, 2, or 3 which indicates how much the statement applied to you over the past week. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "instructions_ltm"
  instructions_ltmClock = new util.Clock();
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'Now, we are going to do another memory test. During this part of the experiment, you will first be presented with a single object in the center of the screen. You previously saw this object during an earlier part of the experiment. Like before, your job is to use the mouse to adjust the color of the object until it matches what you saw earlier. You will do this for all of the earlier objects.\n\nPress SPACE when you are ready to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ltm_response_memory"
  ltm_response_memoryClock = new util.Clock();
  mouse_resp_ltm = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_resp_ltm.mouseClock = new util.Clock();
  circle_resp_11 = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_resp_11', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 10.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  ltm_stim_response = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ltm_stim_response', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  ltm_color_response = new visual.Polygon({
    win: psychoJS.window, name: 'ltm_color_response', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  dot_resp1_11 = new visual.Polygon ({
    win: psychoJS.window, name: 'dot_resp1_11', 
    edges: 75, size:[1.0, 1.0],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([0.0039, 0.0039, 0.0039]),
    fillColor: new util.Color([0.0039, 0.0039, 0.0039]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  fixation_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_4', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: 'You have reached the end of the experiment!\n\nThank you so much for your participation.\n\nAfter this screen, you will exit the experiment and be told a little more about the experiment. \n\nFirst, during the math portion of the experiment, did you use a calculator at all? This will not affect your compensation, but we would like to know.\n\nPress Y if you did use a calculator and N if you did not use a calculator.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_calc = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var frameN;
var continueRoutine;
var range;
var positions;
var circle_size;
var dot_size;
var angles;
var dot_pos_resp;
var original_imgs;
var fix_time;
var stim_array_time;
var parity_time;
var image_size;
var block_n;
var trial_n;
var trials_stress_nreps;
var block_stress_nreps;
var block_total;
var wm_trial_total;
var perception_trial_total;
var memory_items;
var k;
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
    
            // add-on: list(s: string): string[]
            function list(s) {
                // if s is a string, we return a list of its characters
                if (typeof s === 'string')
                    return s.split('');
                else
                    // otherwise we return s:
                    return s;
            }
    range = function (size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    }    
    
    //import * as re from 're';
    //var angles, block_n, block_total, circle_size, dot_pos_resp, dot_size, fix_time, i, image_size, k, memory_items, original_imgs, parity_time, points_total, positions, stim_array_time, trial_n, trial_total;
    positions = [[(- 0.25), 0], [(- 0.25), 0.25], [0, 0.25], [0.25, 0.25], [0.25, 0], [0.25, (- 0.25)], [0, (- 0.25)], [(- 0.25), (- 0.25)]];
    circle_size = [0.2, 0.2];
    dot_size = [0.05, 0.05];
    angles = Array.from({length: 360}, (_, i) => i + 1)
    dot_pos_resp = [0, 0];
    //original_imgs = Array(540).fill("");
    original_imgs = Array(250).fill("");
    fix_time = 0.5;
    stim_array_time = 0.75;
    parity_time = 1.2;
    image_size = [0.05, 0.05];
    block_n = 1;
    trial_n = 1;
    trials_stress_nreps = 60; 
    block_stress_nreps = 2;
    block_total = 1;
    wm_trial_total = 10;
    perception_trial_total = 10;
    memory_items = [];
    points_total = 0;
    i = 0;
    k = 0;
    for (var k, _pj_c = 0, _pj_a = range(251), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        k = _pj_a[_pj_c];
        original_imgs[k] = ('object_stim/obj' + k.toString() + '.png');
    }
    
    function scalar_to_rgb(scalar) {
        var color_list;
        color_list = colorsys.hsv_to_rgb(scalar, 1, 1);
        color_list = function () {
        var _pj_a = [], _pj_b = color_list;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var element = _pj_b[_pj_c];
            _pj_a.push((element * 255));
        }
        return _pj_a;
    }
    .call(this);
        return color_list;
    }
    util.shuffle(original_imgs)
    
    console.log(original_imgs)
    document.body.style.cursor='none';
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
    psychoJS.experiment.addData("group", group);
    
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var formula_setup_loop;
var currentLoop;
function formula_setup_loopLoopBegin(formula_setup_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    formula_setup_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'selected_formulas.csv',
      seed: undefined, name: 'formula_setup_loop'
    });
    psychoJS.experiment.addLoop(formula_setup_loop); // add the loop to the experiment
    currentLoop = formula_setup_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    formula_setup_loop.forEach(function() {
      const snapshot = formula_setup_loop.getSnapshot();
    
      formula_setup_loopLoopScheduler.add(importConditions(snapshot));
      formula_setup_loopLoopScheduler.add(formula_loadRoutineBegin(snapshot));
      formula_setup_loopLoopScheduler.add(formula_loadRoutineEachFrame());
      formula_setup_loopLoopScheduler.add(formula_loadRoutineEnd());
      formula_setup_loopLoopScheduler.add(endLoopIteration(formula_setup_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function formula_setup_loopLoopEnd() {
  psychoJS.experiment.removeLoop(formula_setup_loop);

  return Scheduler.Event.NEXT;
}


var trials_perception_practice;
function trials_perception_practiceLoopBegin(trials_perception_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_perception_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_perception_practice'
    });
    psychoJS.experiment.addLoop(trials_perception_practice); // add the loop to the experiment
    currentLoop = trials_perception_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_perception_practice.forEach(function() {
      const snapshot = trials_perception_practice.getSnapshot();
    
      trials_perception_practiceLoopScheduler.add(importConditions(snapshot));
      trials_perception_practiceLoopScheduler.add(response_perception_practiceRoutineBegin(snapshot));
      trials_perception_practiceLoopScheduler.add(response_perception_practiceRoutineEachFrame());
      trials_perception_practiceLoopScheduler.add(response_perception_practiceRoutineEnd());
      trials_perception_practiceLoopScheduler.add(perception_practice_feedbackRoutineBegin(snapshot));
      trials_perception_practiceLoopScheduler.add(perception_practice_feedbackRoutineEachFrame());
      trials_perception_practiceLoopScheduler.add(perception_practice_feedbackRoutineEnd());
      trials_perception_practiceLoopScheduler.add(endLoopIteration(trials_perception_practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_perception_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(trials_perception_practice);

  return Scheduler.Event.NEXT;
}


var practice_1;
function practice_1LoopBegin(practice_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_1'
    });
    psychoJS.experiment.addLoop(practice_1); // add the loop to the experiment
    currentLoop = practice_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_1.forEach(function() {
      const snapshot = practice_1.getSnapshot();
    
      practice_1LoopScheduler.add(importConditions(snapshot));
      practice_1LoopScheduler.add(practice_memory_array_1RoutineBegin(snapshot));
      practice_1LoopScheduler.add(practice_memory_array_1RoutineEachFrame());
      practice_1LoopScheduler.add(practice_memory_array_1RoutineEnd());
      const practice_response_memory1LoopScheduler = new Scheduler(psychoJS);
      practice_1LoopScheduler.add(practice_response_memory1LoopBegin(practice_response_memory1LoopScheduler, snapshot));
      practice_1LoopScheduler.add(practice_response_memory1LoopScheduler);
      practice_1LoopScheduler.add(practice_response_memory1LoopEnd);
      practice_1LoopScheduler.add(endLoopIteration(practice_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var practice_response_memory1;
function practice_response_memory1LoopBegin(practice_response_memory1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_response_memory1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_response_memory1'
    });
    psychoJS.experiment.addLoop(practice_response_memory1); // add the loop to the experiment
    currentLoop = practice_response_memory1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_response_memory1.forEach(function() {
      const snapshot = practice_response_memory1.getSnapshot();
    
      practice_response_memory1LoopScheduler.add(importConditions(snapshot));
      practice_response_memory1LoopScheduler.add(practice_response_memoryRoutineBegin(snapshot));
      practice_response_memory1LoopScheduler.add(practice_response_memoryRoutineEachFrame());
      practice_response_memory1LoopScheduler.add(practice_response_memoryRoutineEnd());
      practice_response_memory1LoopScheduler.add(practice_feedbackRoutineBegin(snapshot));
      practice_response_memory1LoopScheduler.add(practice_feedbackRoutineEachFrame());
      practice_response_memory1LoopScheduler.add(practice_feedbackRoutineEnd());
      practice_response_memory1LoopScheduler.add(endLoopIteration(practice_response_memory1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_response_memory1LoopEnd() {
  psychoJS.experiment.removeLoop(practice_response_memory1);

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
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_2'
    });
    psychoJS.experiment.addLoop(practice_2); // add the loop to the experiment
    currentLoop = practice_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_2.forEach(function() {
      const snapshot = practice_2.getSnapshot();
    
      practice_2LoopScheduler.add(importConditions(snapshot));
      practice_2LoopScheduler.add(practice_parity1RoutineBegin(snapshot));
      practice_2LoopScheduler.add(practice_parity1RoutineEachFrame());
      practice_2LoopScheduler.add(practice_parity1RoutineEnd());
      practice_2LoopScheduler.add(practice_parity_feedbackRoutineBegin(snapshot));
      practice_2LoopScheduler.add(practice_parity_feedbackRoutineEachFrame());
      practice_2LoopScheduler.add(practice_parity_feedbackRoutineEnd());
      practice_2LoopScheduler.add(endLoopIteration(practice_2LoopScheduler, snapshot));
    });
    
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
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'delay_conds.xlsx',
      seed: undefined, name: 'practice_3'
    });
    psychoJS.experiment.addLoop(practice_3); // add the loop to the experiment
    currentLoop = practice_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_3.forEach(function() {
      const snapshot = practice_3.getSnapshot();
    
      practice_3LoopScheduler.add(importConditions(snapshot));
      practice_3LoopScheduler.add(practice_memory_array_1RoutineBegin(snapshot));
      practice_3LoopScheduler.add(practice_memory_array_1RoutineEachFrame());
      practice_3LoopScheduler.add(practice_memory_array_1RoutineEnd());
      practice_3LoopScheduler.add(delay1RoutineBegin(snapshot));
      practice_3LoopScheduler.add(delay1RoutineEachFrame());
      practice_3LoopScheduler.add(delay1RoutineEnd());
      const practice_parity_2LoopScheduler = new Scheduler(psychoJS);
      practice_3LoopScheduler.add(practice_parity_2LoopBegin(practice_parity_2LoopScheduler, snapshot));
      practice_3LoopScheduler.add(practice_parity_2LoopScheduler);
      practice_3LoopScheduler.add(practice_parity_2LoopEnd);
      practice_3LoopScheduler.add(delay2RoutineBegin(snapshot));
      practice_3LoopScheduler.add(delay2RoutineEachFrame());
      practice_3LoopScheduler.add(delay2RoutineEnd());
      const practice_response_memory2LoopScheduler = new Scheduler(psychoJS);
      practice_3LoopScheduler.add(practice_response_memory2LoopBegin(practice_response_memory2LoopScheduler, snapshot));
      practice_3LoopScheduler.add(practice_response_memory2LoopScheduler);
      practice_3LoopScheduler.add(practice_response_memory2LoopEnd);
      practice_3LoopScheduler.add(endLoopIteration(practice_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var practice_parity_2;
function practice_parity_2LoopBegin(practice_parity_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_parity_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_parity_2'
    });
    psychoJS.experiment.addLoop(practice_parity_2); // add the loop to the experiment
    currentLoop = practice_parity_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_parity_2.forEach(function() {
      const snapshot = practice_parity_2.getSnapshot();
    
      practice_parity_2LoopScheduler.add(importConditions(snapshot));
      practice_parity_2LoopScheduler.add(practice_parity1RoutineBegin(snapshot));
      practice_parity_2LoopScheduler.add(practice_parity1RoutineEachFrame());
      practice_parity_2LoopScheduler.add(practice_parity1RoutineEnd());
      practice_parity_2LoopScheduler.add(endLoopIteration(practice_parity_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_parity_2LoopEnd() {
  psychoJS.experiment.removeLoop(practice_parity_2);

  return Scheduler.Event.NEXT;
}


var practice_response_memory2;
function practice_response_memory2LoopBegin(practice_response_memory2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_response_memory2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_response_memory2'
    });
    psychoJS.experiment.addLoop(practice_response_memory2); // add the loop to the experiment
    currentLoop = practice_response_memory2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_response_memory2.forEach(function() {
      const snapshot = practice_response_memory2.getSnapshot();
    
      practice_response_memory2LoopScheduler.add(importConditions(snapshot));
      practice_response_memory2LoopScheduler.add(practice_response_memoryRoutineBegin(snapshot));
      practice_response_memory2LoopScheduler.add(practice_response_memoryRoutineEachFrame());
      practice_response_memory2LoopScheduler.add(practice_response_memoryRoutineEnd());
      practice_response_memory2LoopScheduler.add(practice_feedbackRoutineBegin(snapshot));
      practice_response_memory2LoopScheduler.add(practice_feedbackRoutineEachFrame());
      practice_response_memory2LoopScheduler.add(practice_feedbackRoutineEnd());
      practice_response_memory2LoopScheduler.add(endLoopIteration(practice_response_memory2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_response_memory2LoopEnd() {
  psychoJS.experiment.removeLoop(practice_response_memory2);

  return Scheduler.Event.NEXT;
}


async function practice_3LoopEnd() {
  psychoJS.experiment.removeLoop(practice_3);

  return Scheduler.Event.NEXT;
}


var practice_4;
function practice_4LoopBegin(practice_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'delay_conds.xlsx',
      seed: undefined, name: 'practice_4'
    });
    psychoJS.experiment.addLoop(practice_4); // add the loop to the experiment
    currentLoop = practice_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_4.forEach(function() {
      const snapshot = practice_4.getSnapshot();
    
      practice_4LoopScheduler.add(importConditions(snapshot));
      practice_4LoopScheduler.add(memory_arrayRoutineBegin(snapshot));
      practice_4LoopScheduler.add(memory_arrayRoutineEachFrame());
      practice_4LoopScheduler.add(memory_arrayRoutineEnd());
      practice_4LoopScheduler.add(delay1RoutineBegin(snapshot));
      practice_4LoopScheduler.add(delay1RoutineEachFrame());
      practice_4LoopScheduler.add(delay1RoutineEnd());
      const practice_parity_3LoopScheduler = new Scheduler(psychoJS);
      practice_4LoopScheduler.add(practice_parity_3LoopBegin(practice_parity_3LoopScheduler, snapshot));
      practice_4LoopScheduler.add(practice_parity_3LoopScheduler);
      practice_4LoopScheduler.add(practice_parity_3LoopEnd);
      practice_4LoopScheduler.add(delay2RoutineBegin(snapshot));
      practice_4LoopScheduler.add(delay2RoutineEachFrame());
      practice_4LoopScheduler.add(delay2RoutineEnd());
      const practice_response_memory_3LoopScheduler = new Scheduler(psychoJS);
      practice_4LoopScheduler.add(practice_response_memory_3LoopBegin(practice_response_memory_3LoopScheduler, snapshot));
      practice_4LoopScheduler.add(practice_response_memory_3LoopScheduler);
      practice_4LoopScheduler.add(practice_response_memory_3LoopEnd);
      practice_4LoopScheduler.add(feedbackRoutineBegin(snapshot));
      practice_4LoopScheduler.add(feedbackRoutineEachFrame());
      practice_4LoopScheduler.add(feedbackRoutineEnd());
      practice_4LoopScheduler.add(endLoopIteration(practice_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var practice_parity_3;
function practice_parity_3LoopBegin(practice_parity_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_parity_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_parity_3'
    });
    psychoJS.experiment.addLoop(practice_parity_3); // add the loop to the experiment
    currentLoop = practice_parity_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_parity_3.forEach(function() {
      const snapshot = practice_parity_3.getSnapshot();
    
      practice_parity_3LoopScheduler.add(importConditions(snapshot));
      practice_parity_3LoopScheduler.add(parityRoutineBegin(snapshot));
      practice_parity_3LoopScheduler.add(parityRoutineEachFrame());
      practice_parity_3LoopScheduler.add(parityRoutineEnd());
      practice_parity_3LoopScheduler.add(endLoopIteration(practice_parity_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_parity_3LoopEnd() {
  psychoJS.experiment.removeLoop(practice_parity_3);

  return Scheduler.Event.NEXT;
}


var practice_response_memory_3;
function practice_response_memory_3LoopBegin(practice_response_memory_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_response_memory_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_response_memory_3'
    });
    psychoJS.experiment.addLoop(practice_response_memory_3); // add the loop to the experiment
    currentLoop = practice_response_memory_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_response_memory_3.forEach(function() {
      const snapshot = practice_response_memory_3.getSnapshot();
    
      practice_response_memory_3LoopScheduler.add(importConditions(snapshot));
      practice_response_memory_3LoopScheduler.add(response_memoryRoutineBegin(snapshot));
      practice_response_memory_3LoopScheduler.add(response_memoryRoutineEachFrame());
      practice_response_memory_3LoopScheduler.add(response_memoryRoutineEnd());
      practice_response_memory_3LoopScheduler.add(endLoopIteration(practice_response_memory_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_response_memory_3LoopEnd() {
  psychoJS.experiment.removeLoop(practice_response_memory_3);

  return Scheduler.Event.NEXT;
}


async function practice_4LoopEnd() {
  psychoJS.experiment.removeLoop(practice_4);

  return Scheduler.Event.NEXT;
}


var trials_outer_loop;
function trials_outer_loopLoopBegin(trials_outer_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_outer_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_file,
      seed: undefined, name: 'trials_outer_loop'
    });
    psychoJS.experiment.addLoop(trials_outer_loop); // add the loop to the experiment
    currentLoop = trials_outer_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_outer_loop.forEach(function() {
      const snapshot = trials_outer_loop.getSnapshot();
    
      trials_outer_loopLoopScheduler.add(importConditions(snapshot));
      const trials_5LoopScheduler = new Scheduler(psychoJS);
      trials_outer_loopLoopScheduler.add(trials_5LoopBegin(trials_5LoopScheduler, snapshot));
      trials_outer_loopLoopScheduler.add(trials_5LoopScheduler);
      trials_outer_loopLoopScheduler.add(trials_5LoopEnd);
      const trials_6LoopScheduler = new Scheduler(psychoJS);
      trials_outer_loopLoopScheduler.add(trials_6LoopBegin(trials_6LoopScheduler, snapshot));
      trials_outer_loopLoopScheduler.add(trials_6LoopScheduler);
      trials_outer_loopLoopScheduler.add(trials_6LoopEnd);
      const trials_7LoopScheduler = new Scheduler(psychoJS);
      trials_outer_loopLoopScheduler.add(trials_7LoopBegin(trials_7LoopScheduler, snapshot));
      trials_outer_loopLoopScheduler.add(trials_7LoopScheduler);
      trials_outer_loopLoopScheduler.add(trials_7LoopEnd);
      const trials_8LoopScheduler = new Scheduler(psychoJS);
      trials_outer_loopLoopScheduler.add(trials_8LoopBegin(trials_8LoopScheduler, snapshot));
      trials_outer_loopLoopScheduler.add(trials_8LoopScheduler);
      trials_outer_loopLoopScheduler.add(trials_8LoopEnd);
      trials_outer_loopLoopScheduler.add(endLoopIteration(trials_outer_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: stress_1_n, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_5.forEach(function() {
      const snapshot = trials_5.getSnapshot();
    
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(stai_instructRoutineBegin(snapshot));
      trials_5LoopScheduler.add(stai_instructRoutineEachFrame());
      trials_5LoopScheduler.add(stai_instructRoutineEnd());
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      trials_5LoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      trials_5LoopScheduler.add(trials_2LoopScheduler);
      trials_5LoopScheduler.add(trials_2LoopEnd);
      trials_5LoopScheduler.add(stress_instruct_1RoutineBegin(snapshot));
      trials_5LoopScheduler.add(stress_instruct_1RoutineEachFrame());
      trials_5LoopScheduler.add(stress_instruct_1RoutineEnd());
      trials_5LoopScheduler.add(stress_instruct_2RoutineBegin(snapshot));
      trials_5LoopScheduler.add(stress_instruct_2RoutineEachFrame());
      trials_5LoopScheduler.add(stress_instruct_2RoutineEnd());
      const stress_blockLoopScheduler = new Scheduler(psychoJS);
      trials_5LoopScheduler.add(stress_blockLoopBegin(stress_blockLoopScheduler, snapshot));
      trials_5LoopScheduler.add(stress_blockLoopScheduler);
      trials_5LoopScheduler.add(stress_blockLoopEnd);
      trials_5LoopScheduler.add(stai_instructRoutineBegin(snapshot));
      trials_5LoopScheduler.add(stai_instructRoutineEachFrame());
      trials_5LoopScheduler.add(stai_instructRoutineEnd());
      const stai_2LoopScheduler = new Scheduler(psychoJS);
      trials_5LoopScheduler.add(stai_2LoopBegin(stai_2LoopScheduler, snapshot));
      trials_5LoopScheduler.add(stai_2LoopScheduler);
      trials_5LoopScheduler.add(stai_2LoopEnd);
      trials_5LoopScheduler.add(end_taskRoutineBegin(snapshot));
      trials_5LoopScheduler.add(end_taskRoutineEachFrame());
      trials_5LoopScheduler.add(end_taskRoutineEnd());
      trials_5LoopScheduler.add(endLoopIteration(trials_5LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stai_qs.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      const snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(staiRoutineBegin(snapshot));
      trials_2LoopScheduler.add(staiRoutineEachFrame());
      trials_2LoopScheduler.add(staiRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


function stress_blockLoopBegin(stress_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stress_block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'stress_block'
    });
    psychoJS.experiment.addLoop(stress_block); // add the loop to the experiment
    currentLoop = stress_block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    stress_block.forEach(function() {
      const snapshot = stress_block.getSnapshot();
    
      stress_blockLoopScheduler.add(importConditions(snapshot));
      const stress_trialsLoopScheduler = new Scheduler(psychoJS);
      stress_blockLoopScheduler.add(stress_trialsLoopBegin(stress_trialsLoopScheduler, snapshot));
      stress_blockLoopScheduler.add(stress_trialsLoopScheduler);
      stress_blockLoopScheduler.add(stress_trialsLoopEnd);
      stress_blockLoopScheduler.add(stress_breakRoutineBegin(snapshot));
      stress_blockLoopScheduler.add(stress_breakRoutineEachFrame());
      stress_blockLoopScheduler.add(stress_breakRoutineEnd());
      stress_blockLoopScheduler.add(endLoopIteration(stress_blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var stress_trials;
function stress_trialsLoopBegin(stress_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stress_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 30, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'stress_trials'
    });
    psychoJS.experiment.addLoop(stress_trials); // add the loop to the experiment
    currentLoop = stress_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    stress_trials.forEach(function() {
      const snapshot = stress_trials.getSnapshot();
    
      stress_trialsLoopScheduler.add(importConditions(snapshot));
      stress_trialsLoopScheduler.add(stress_taskRoutineBegin(snapshot));
      stress_trialsLoopScheduler.add(stress_taskRoutineEachFrame());
      stress_trialsLoopScheduler.add(stress_taskRoutineEnd());
      stress_trialsLoopScheduler.add(endLoopIteration(stress_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function stress_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(stress_trials);

  return Scheduler.Event.NEXT;
}


async function stress_blockLoopEnd() {
  psychoJS.experiment.removeLoop(stress_block);

  return Scheduler.Event.NEXT;
}


var stai_2;
function stai_2LoopBegin(stai_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stai_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stai_qs.xlsx',
      seed: undefined, name: 'stai_2'
    });
    psychoJS.experiment.addLoop(stai_2); // add the loop to the experiment
    currentLoop = stai_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    stai_2.forEach(function() {
      const snapshot = stai_2.getSnapshot();
    
      stai_2LoopScheduler.add(importConditions(snapshot));
      stai_2LoopScheduler.add(staiRoutineBegin(snapshot));
      stai_2LoopScheduler.add(staiRoutineEachFrame());
      stai_2LoopScheduler.add(staiRoutineEnd());
      stai_2LoopScheduler.add(endLoopIteration(stai_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function stai_2LoopEnd() {
  psychoJS.experiment.removeLoop(stai_2);

  return Scheduler.Event.NEXT;
}


async function trials_5LoopEnd() {
  psychoJS.experiment.removeLoop(trials_5);

  return Scheduler.Event.NEXT;
}


var trials_6;
function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: perception_n, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_6.forEach(function() {
      const snapshot = trials_6.getSnapshot();
    
      trials_6LoopScheduler.add(importConditions(snapshot));
      trials_6LoopScheduler.add(instructions_perceptionRoutineBegin(snapshot));
      trials_6LoopScheduler.add(instructions_perceptionRoutineEachFrame());
      trials_6LoopScheduler.add(instructions_perceptionRoutineEnd());
      const perception_blockLoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(perception_blockLoopBegin(perception_blockLoopScheduler, snapshot));
      trials_6LoopScheduler.add(perception_blockLoopScheduler);
      trials_6LoopScheduler.add(perception_blockLoopEnd);
      trials_6LoopScheduler.add(end_taskRoutineBegin(snapshot));
      trials_6LoopScheduler.add(end_taskRoutineEachFrame());
      trials_6LoopScheduler.add(end_taskRoutineEnd());
      trials_6LoopScheduler.add(endLoopIteration(trials_6LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var perception_block;
function perception_blockLoopBegin(perception_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    perception_block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'perception_block'
    });
    psychoJS.experiment.addLoop(perception_block); // add the loop to the experiment
    currentLoop = perception_block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    perception_block.forEach(function() {
      const snapshot = perception_block.getSnapshot();
    
      perception_blockLoopScheduler.add(importConditions(snapshot));
      perception_blockLoopScheduler.add(remindRoutineBegin(snapshot));
      perception_blockLoopScheduler.add(remindRoutineEachFrame());
      perception_blockLoopScheduler.add(remindRoutineEnd());
      const perception_trialsLoopScheduler = new Scheduler(psychoJS);
      perception_blockLoopScheduler.add(perception_trialsLoopBegin(perception_trialsLoopScheduler, snapshot));
      perception_blockLoopScheduler.add(perception_trialsLoopScheduler);
      perception_blockLoopScheduler.add(perception_trialsLoopEnd);
      perception_blockLoopScheduler.add(end_blockRoutineBegin(snapshot));
      perception_blockLoopScheduler.add(end_blockRoutineEachFrame());
      perception_blockLoopScheduler.add(end_blockRoutineEnd());
      perception_blockLoopScheduler.add(endLoopIteration(perception_blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var perception_trials;
function perception_trialsLoopBegin(perception_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    perception_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: perception_trial_total, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'delay_conds.xlsx',
      seed: undefined, name: 'perception_trials'
    });
    psychoJS.experiment.addLoop(perception_trials); // add the loop to the experiment
    currentLoop = perception_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    perception_trials.forEach(function() {
      const snapshot = perception_trials.getSnapshot();
    
      perception_trialsLoopScheduler.add(importConditions(snapshot));
      perception_trialsLoopScheduler.add(response_perceptionRoutineBegin(snapshot));
      perception_trialsLoopScheduler.add(response_perceptionRoutineEachFrame());
      perception_trialsLoopScheduler.add(response_perceptionRoutineEnd());
      perception_trialsLoopScheduler.add(delay1RoutineBegin(snapshot));
      perception_trialsLoopScheduler.add(delay1RoutineEachFrame());
      perception_trialsLoopScheduler.add(delay1RoutineEnd());
      const parity_perception_trialsLoopScheduler = new Scheduler(psychoJS);
      perception_trialsLoopScheduler.add(parity_perception_trialsLoopBegin(parity_perception_trialsLoopScheduler, snapshot));
      perception_trialsLoopScheduler.add(parity_perception_trialsLoopScheduler);
      perception_trialsLoopScheduler.add(parity_perception_trialsLoopEnd);
      perception_trialsLoopScheduler.add(delay2RoutineBegin(snapshot));
      perception_trialsLoopScheduler.add(delay2RoutineEachFrame());
      perception_trialsLoopScheduler.add(delay2RoutineEnd());
      perception_trialsLoopScheduler.add(endLoopIteration(perception_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var parity_perception_trials;
function parity_perception_trialsLoopBegin(parity_perception_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    parity_perception_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'parity_perception_trials'
    });
    psychoJS.experiment.addLoop(parity_perception_trials); // add the loop to the experiment
    currentLoop = parity_perception_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    parity_perception_trials.forEach(function() {
      const snapshot = parity_perception_trials.getSnapshot();
    
      parity_perception_trialsLoopScheduler.add(importConditions(snapshot));
      parity_perception_trialsLoopScheduler.add(parityRoutineBegin(snapshot));
      parity_perception_trialsLoopScheduler.add(parityRoutineEachFrame());
      parity_perception_trialsLoopScheduler.add(parityRoutineEnd());
      parity_perception_trialsLoopScheduler.add(endLoopIteration(parity_perception_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function parity_perception_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(parity_perception_trials);

  return Scheduler.Event.NEXT;
}


async function perception_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(perception_trials);

  return Scheduler.Event.NEXT;
}


async function perception_blockLoopEnd() {
  psychoJS.experiment.removeLoop(perception_block);

  return Scheduler.Event.NEXT;
}


async function trials_6LoopEnd() {
  psychoJS.experiment.removeLoop(trials_6);

  return Scheduler.Event.NEXT;
}


var trials_7;
function trials_7LoopBegin(trials_7LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_7 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: wm_n, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_7'
    });
    psychoJS.experiment.addLoop(trials_7); // add the loop to the experiment
    currentLoop = trials_7;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_7.forEach(function() {
      const snapshot = trials_7.getSnapshot();
    
      trials_7LoopScheduler.add(importConditions(snapshot));
      trials_7LoopScheduler.add(wm_instructRoutineBegin(snapshot));
      trials_7LoopScheduler.add(wm_instructRoutineEachFrame());
      trials_7LoopScheduler.add(wm_instructRoutineEnd());
      const wm_blockLoopScheduler = new Scheduler(psychoJS);
      trials_7LoopScheduler.add(wm_blockLoopBegin(wm_blockLoopScheduler, snapshot));
      trials_7LoopScheduler.add(wm_blockLoopScheduler);
      trials_7LoopScheduler.add(wm_blockLoopEnd);
      trials_7LoopScheduler.add(end_taskRoutineBegin(snapshot));
      trials_7LoopScheduler.add(end_taskRoutineEachFrame());
      trials_7LoopScheduler.add(end_taskRoutineEnd());
      trials_7LoopScheduler.add(endLoopIteration(trials_7LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var wm_block;
function wm_blockLoopBegin(wm_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    wm_block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'wm_block'
    });
    psychoJS.experiment.addLoop(wm_block); // add the loop to the experiment
    currentLoop = wm_block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    wm_block.forEach(function() {
      const snapshot = wm_block.getSnapshot();
    
      wm_blockLoopScheduler.add(importConditions(snapshot));
      wm_blockLoopScheduler.add(remindRoutineBegin(snapshot));
      wm_blockLoopScheduler.add(remindRoutineEachFrame());
      wm_blockLoopScheduler.add(remindRoutineEnd());
      const wm_trialsLoopScheduler = new Scheduler(psychoJS);
      wm_blockLoopScheduler.add(wm_trialsLoopBegin(wm_trialsLoopScheduler, snapshot));
      wm_blockLoopScheduler.add(wm_trialsLoopScheduler);
      wm_blockLoopScheduler.add(wm_trialsLoopEnd);
      wm_blockLoopScheduler.add(end_blockRoutineBegin(snapshot));
      wm_blockLoopScheduler.add(end_blockRoutineEachFrame());
      wm_blockLoopScheduler.add(end_blockRoutineEnd());
      wm_blockLoopScheduler.add(endLoopIteration(wm_blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var wm_trials;
function wm_trialsLoopBegin(wm_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    wm_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: wm_trial_total, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'delay_conds.xlsx',
      seed: undefined, name: 'wm_trials'
    });
    psychoJS.experiment.addLoop(wm_trials); // add the loop to the experiment
    currentLoop = wm_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    wm_trials.forEach(function() {
      const snapshot = wm_trials.getSnapshot();
    
      wm_trialsLoopScheduler.add(importConditions(snapshot));
      wm_trialsLoopScheduler.add(memory_arrayRoutineBegin(snapshot));
      wm_trialsLoopScheduler.add(memory_arrayRoutineEachFrame());
      wm_trialsLoopScheduler.add(memory_arrayRoutineEnd());
      wm_trialsLoopScheduler.add(delay1RoutineBegin(snapshot));
      wm_trialsLoopScheduler.add(delay1RoutineEachFrame());
      wm_trialsLoopScheduler.add(delay1RoutineEnd());
      const parity_trialsLoopScheduler = new Scheduler(psychoJS);
      wm_trialsLoopScheduler.add(parity_trialsLoopBegin(parity_trialsLoopScheduler, snapshot));
      wm_trialsLoopScheduler.add(parity_trialsLoopScheduler);
      wm_trialsLoopScheduler.add(parity_trialsLoopEnd);
      wm_trialsLoopScheduler.add(delay2RoutineBegin(snapshot));
      wm_trialsLoopScheduler.add(delay2RoutineEachFrame());
      wm_trialsLoopScheduler.add(delay2RoutineEnd());
      const memory_trialsLoopScheduler = new Scheduler(psychoJS);
      wm_trialsLoopScheduler.add(memory_trialsLoopBegin(memory_trialsLoopScheduler, snapshot));
      wm_trialsLoopScheduler.add(memory_trialsLoopScheduler);
      wm_trialsLoopScheduler.add(memory_trialsLoopEnd);
      wm_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      wm_trialsLoopScheduler.add(feedbackRoutineEachFrame());
      wm_trialsLoopScheduler.add(feedbackRoutineEnd());
      wm_trialsLoopScheduler.add(endLoopIteration(wm_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var parity_trials;
function parity_trialsLoopBegin(parity_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    parity_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'parity_trials'
    });
    psychoJS.experiment.addLoop(parity_trials); // add the loop to the experiment
    currentLoop = parity_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    parity_trials.forEach(function() {
      const snapshot = parity_trials.getSnapshot();
    
      parity_trialsLoopScheduler.add(importConditions(snapshot));
      parity_trialsLoopScheduler.add(parityRoutineBegin(snapshot));
      parity_trialsLoopScheduler.add(parityRoutineEachFrame());
      parity_trialsLoopScheduler.add(parityRoutineEnd());
      parity_trialsLoopScheduler.add(endLoopIteration(parity_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function parity_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(parity_trials);

  return Scheduler.Event.NEXT;
}


var memory_trials;
function memory_trialsLoopBegin(memory_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    memory_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'memory_trials'
    });
    psychoJS.experiment.addLoop(memory_trials); // add the loop to the experiment
    currentLoop = memory_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    memory_trials.forEach(function() {
      const snapshot = memory_trials.getSnapshot();
    
      memory_trialsLoopScheduler.add(importConditions(snapshot));
      memory_trialsLoopScheduler.add(response_memoryRoutineBegin(snapshot));
      memory_trialsLoopScheduler.add(response_memoryRoutineEachFrame());
      memory_trialsLoopScheduler.add(response_memoryRoutineEnd());
      memory_trialsLoopScheduler.add(endLoopIteration(memory_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function memory_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(memory_trials);

  return Scheduler.Event.NEXT;
}


async function wm_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(wm_trials);

  return Scheduler.Event.NEXT;
}


async function wm_blockLoopEnd() {
  psychoJS.experiment.removeLoop(wm_block);

  return Scheduler.Event.NEXT;
}


async function trials_7LoopEnd() {
  psychoJS.experiment.removeLoop(trials_7);

  return Scheduler.Event.NEXT;
}


var trials_8;
function trials_8LoopBegin(trials_8LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_8 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: stress_2_n, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_8'
    });
    psychoJS.experiment.addLoop(trials_8); // add the loop to the experiment
    currentLoop = trials_8;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_8.forEach(function() {
      const snapshot = trials_8.getSnapshot();
    
      trials_8LoopScheduler.add(importConditions(snapshot));
      trials_8LoopScheduler.add(stai_instructRoutineBegin(snapshot));
      trials_8LoopScheduler.add(stai_instructRoutineEachFrame());
      trials_8LoopScheduler.add(stai_instructRoutineEnd());
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      trials_8LoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      trials_8LoopScheduler.add(trials_4LoopScheduler);
      trials_8LoopScheduler.add(trials_4LoopEnd);
      trials_8LoopScheduler.add(stress_instruct_1RoutineBegin(snapshot));
      trials_8LoopScheduler.add(stress_instruct_1RoutineEachFrame());
      trials_8LoopScheduler.add(stress_instruct_1RoutineEnd());
      trials_8LoopScheduler.add(stress_instruct_2RoutineBegin(snapshot));
      trials_8LoopScheduler.add(stress_instruct_2RoutineEachFrame());
      trials_8LoopScheduler.add(stress_instruct_2RoutineEnd());
      const trials_9LoopScheduler = new Scheduler(psychoJS);
      trials_8LoopScheduler.add(trials_9LoopBegin(trials_9LoopScheduler, snapshot));
      trials_8LoopScheduler.add(trials_9LoopScheduler);
      trials_8LoopScheduler.add(trials_9LoopEnd);
      trials_8LoopScheduler.add(stai_instructRoutineBegin(snapshot));
      trials_8LoopScheduler.add(stai_instructRoutineEachFrame());
      trials_8LoopScheduler.add(stai_instructRoutineEnd());
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      trials_8LoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      trials_8LoopScheduler.add(trials_3LoopScheduler);
      trials_8LoopScheduler.add(trials_3LoopEnd);
      trials_8LoopScheduler.add(end_taskRoutineBegin(snapshot));
      trials_8LoopScheduler.add(end_taskRoutineEachFrame());
      trials_8LoopScheduler.add(end_taskRoutineEnd());
      trials_8LoopScheduler.add(endLoopIteration(trials_8LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stai_qs.xlsx',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      const snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(staiRoutineBegin(snapshot));
      trials_4LoopScheduler.add(staiRoutineEachFrame());
      trials_4LoopScheduler.add(staiRoutineEnd());
      trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


var trials_9;
function trials_9LoopBegin(trials_9LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_9 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_9'
    });
    psychoJS.experiment.addLoop(trials_9); // add the loop to the experiment
    currentLoop = trials_9;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_9.forEach(function() {
      const snapshot = trials_9.getSnapshot();
    
      trials_9LoopScheduler.add(importConditions(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      trials_9LoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      trials_9LoopScheduler.add(trialsLoopScheduler);
      trials_9LoopScheduler.add(trialsLoopEnd);
      trials_9LoopScheduler.add(stress_breakRoutineBegin(snapshot));
      trials_9LoopScheduler.add(stress_breakRoutineEachFrame());
      trials_9LoopScheduler.add(stress_breakRoutineEnd());
      trials_9LoopScheduler.add(endLoopIteration(trials_9LoopScheduler, snapshot));
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
      nReps: 30, method: TrialHandler.Method.RANDOM,
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
      trialsLoopScheduler.add(stress_taskRoutineBegin(snapshot));
      trialsLoopScheduler.add(stress_taskRoutineEachFrame());
      trialsLoopScheduler.add(stress_taskRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function trials_9LoopEnd() {
  psychoJS.experiment.removeLoop(trials_9);

  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stai_qs.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      const snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(staiRoutineBegin(snapshot));
      trials_3LoopScheduler.add(staiRoutineEachFrame());
      trials_3LoopScheduler.add(staiRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


async function trials_8LoopEnd() {
  psychoJS.experiment.removeLoop(trials_8);

  return Scheduler.Event.NEXT;
}


async function trials_outer_loopLoopEnd() {
  psychoJS.experiment.removeLoop(trials_outer_loop);

  return Scheduler.Event.NEXT;
}


var trials_dass;
function trials_dassLoopBegin(trials_dassLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_dass = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'dass_qs.xlsx',
      seed: undefined, name: 'trials_dass'
    });
    psychoJS.experiment.addLoop(trials_dass); // add the loop to the experiment
    currentLoop = trials_dass;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_dass.forEach(function() {
      const snapshot = trials_dass.getSnapshot();
    
      trials_dassLoopScheduler.add(importConditions(snapshot));
      trials_dassLoopScheduler.add(dassRoutineBegin(snapshot));
      trials_dassLoopScheduler.add(dassRoutineEachFrame());
      trials_dassLoopScheduler.add(dassRoutineEnd());
      trials_dassLoopScheduler.add(endLoopIteration(trials_dassLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_dassLoopEnd() {
  psychoJS.experiment.removeLoop(trials_dass);

  return Scheduler.Event.NEXT;
}


var trials_ltm;
function trials_ltmLoopBegin(trials_ltmLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_ltm = new TrialHandler({
      psychoJS: psychoJS,
      nReps: ltm_trials_nreps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_ltm'
    });
    psychoJS.experiment.addLoop(trials_ltm); // add the loop to the experiment
    currentLoop = trials_ltm;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_ltm.forEach(function() {
      const snapshot = trials_ltm.getSnapshot();
    
      trials_ltmLoopScheduler.add(importConditions(snapshot));
      trials_ltmLoopScheduler.add(ltm_response_memoryRoutineBegin(snapshot));
      trials_ltmLoopScheduler.add(ltm_response_memoryRoutineEachFrame());
      trials_ltmLoopScheduler.add(ltm_response_memoryRoutineEnd());
      trials_ltmLoopScheduler.add(endLoopIteration(trials_ltmLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_ltmLoopEnd() {
  psychoJS.experiment.removeLoop(trials_ltm);

  return Scheduler.Event.NEXT;
}


var stai_4;
function stai_4LoopBegin(stai_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stai_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stai_qs.xlsx',
      seed: undefined, name: 'stai_4'
    });
    psychoJS.experiment.addLoop(stai_4); // add the loop to the experiment
    currentLoop = stai_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    stai_4.forEach(function() {
      const snapshot = stai_4.getSnapshot();
    
      stai_4LoopScheduler.add(importConditions(snapshot));
      stai_4LoopScheduler.add(staiRoutineBegin(snapshot));
      stai_4LoopScheduler.add(staiRoutineEachFrame());
      stai_4LoopScheduler.add(staiRoutineEnd());
      stai_4LoopScheduler.add(endLoopIteration(stai_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function stai_4LoopEnd() {
  psychoJS.experiment.removeLoop(stai_4);

  return Scheduler.Event.NEXT;
}


var formula_loadComponents;
function formula_loadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'formula_load'-------
    t = 0;
    formula_loadClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((cond === "first_level")) {
        console.log("first level okay");
        level_1_probs.push([formula, answer]);
    } else {
        if ((cond === "second_level")) {
            level_2_probs.push([formula, answer]);
        } else {
            if ((cond === "third_level")) {
                level_3_probs.push([formula, answer]);
            } else {
                if ((cond === "fourth_level")) {
                    level_4_probs.push([formula, answer]);
                } else {
                    if ((cond === "fifth_level")) {
                        level_5_probs.push([formula, answer]);
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    formula_loadComponents = [];
    
    formula_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function formula_loadRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'formula_load'-------
    // get current time
    t = formula_loadClock.getTime();
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
    formula_loadComponents.forEach( function(thisComponent) {
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


function formula_loadRoutineEnd() {
  return async function () {
    //------Ending Routine 'formula_load'-------
    formula_loadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "formula_load" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
var instructions_experimentComponents;
function instructions_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_experiment'-------
    t = 0;
    instructions_experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    instructions_experimentComponents = [];
    instructions_experimentComponents.push(text_22);
    instructions_experimentComponents.push(key_resp_12);
    
    instructions_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_experimentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_experiment'-------
    // get current time
    t = instructions_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }

    
    // *key_resp_12* updates
    if (t >= 5 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
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
    instructions_experimentComponents.forEach( function(thisComponent) {
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


function instructions_experimentRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_experiment'-------
    instructions_experimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_12.stop();
    // the Routine "instructions_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_13_allKeys;
var instructions_perception_practiceComponents;
function instructions_perception_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_perception_practice'-------
    t = 0;
    instructions_perception_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    instructions_perception_practiceComponents = [];
    instructions_perception_practiceComponents.push(text_23);
    instructions_perception_practiceComponents.push(key_resp_13);
    
    instructions_perception_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_perception_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_perception_practice'-------
    // get current time
    t = instructions_perception_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }

    
    // *key_resp_13* updates
    if (t >= 5 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
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
    instructions_perception_practiceComponents.forEach( function(thisComponent) {
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


function instructions_perception_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_perception_practice'-------
    instructions_perception_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_13.stop();
    // the Routine "instructions_perception_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var trial_angles;
var err_total;
var stim;
var stim_files;
var color_presented;
var stim_presented;
var response_perception_practiceComponents;
function response_perception_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'response_perception_practice'-------
    t = 0;
    response_perception_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp_perc_2
    gotValidClick = false; // until a click is received
    util.shuffle(angles);
    trial_angles = angles[0];
    err_total = 0;
    
    stim = original_imgs[i];
    
    stim_files = [original_imgs[i]];
    color_presented = HSVtoRGB(trial_angles / 360);
    
    stim_presented = stim_files[0];
    document.body.style.cursor='auto';
    
    
    
    perception_stim_presented_2.setImage(stim_presented);
    perception_color_2.setFillColor(new util.Color(color_presented));
    perception_color_2.setLineColor(new util.Color(color_presented));
    circle_resp_12.setSize(circle_size);
    perception_stim_response_2.setImage(stim_presented);
    dot_resp1_12.setSize(dot_size);
    // keep track of which components have finished
    response_perception_practiceComponents = [];
    response_perception_practiceComponents.push(mouse_resp_perc_2);
    response_perception_practiceComponents.push(perception_stim_presented_2);
    response_perception_practiceComponents.push(perception_color_2);
    response_perception_practiceComponents.push(circle_resp_12);
    response_perception_practiceComponents.push(perception_stim_response_2);
    response_perception_practiceComponents.push(perception_color_response_2);
    response_perception_practiceComponents.push(dot_resp1_12);
    response_perception_practiceComponents.push(fixation_5);
    
    response_perception_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var mouse_x;
var mouse_y;
var adj_x;
var adj_y;
var r;
var current_pos;
var cterm;
var theta;
var curr_angle;
var color_rgb;
function response_perception_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'response_perception_practice'-------
    // get current time
    t = response_perception_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_resp_perc_2* updates
    if (t >= (fix_time + 0.1) && mouse_resp_perc_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_perc_2.tStart = t;  // (not accounting for frame time here)
      mouse_resp_perc_2.frameNStart = frameN;  // exact frame index
      
      mouse_resp_perc_2.status = PsychoJS.Status.STARTED;
      mouse_resp_perc_2.mouseClock.reset();
      prevButtonState = mouse_resp_perc_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_resp_perc_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_perc_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    mouse_x = mouse_resp_perc_2.getPos()[0];
    mouse_y = mouse_resp_perc_2.getPos()[1];
    adj_x = 0.25;
    adj_y = 0;
    //mouse_x = (mouse_x - (adj_x * 2));
    //mouse_y = (mouse_y - (adj_y * 2));
    mouse_x = (mouse_x - adj_x);
    mouse_y = (mouse_y - adj_y);
    //r = sqrt(mouse_x**2 + mouse_y**2)
    r = math.norm([mouse_x,mouse_y])
    current_pos = [mouse_x, mouse_y];
    cterm = [0, (- 50)];
    if ((r === 0)) {
        theta = 0;
    } else {
        if ((r !== 0)) {
            theta = Math.acos((math.dot(current_pos, cterm) / (r * (- 50))));
        }
    }
    if ((mouse_x < 0)) {
        theta = ((2 * pi) - theta);
    }
    curr_angle = Math.round((theta * (180 / pi)));
    dot_pos_resp = [(0.25 + ((circle_size[0] / 2) * Math.sin(theta))), (0 + ((circle_size[0] / 2) * Math.cos(theta)))];
    color_rgb = HSVtoRGB((curr_angle / 360));
    
    
    
    
    // *perception_stim_presented_2* updates
    if (t >= fix_time && perception_stim_presented_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perception_stim_presented_2.tStart = t;  // (not accounting for frame time here)
      perception_stim_presented_2.frameNStart = frameN;  // exact frame index
      
      perception_stim_presented_2.setAutoDraw(true);
    }

    
    // *perception_color_2* updates
    if (t >= fix_time && perception_color_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perception_color_2.tStart = t;  // (not accounting for frame time here)
      perception_color_2.frameNStart = frameN;  // exact frame index
      
      perception_color_2.setAutoDraw(true);
    }

    
    // *circle_resp_12* updates
    if (t >= fix_time && circle_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_resp_12.tStart = t;  // (not accounting for frame time here)
      circle_resp_12.frameNStart = frameN;  // exact frame index
      
      circle_resp_12.setAutoDraw(true);
    }

    
    // *perception_stim_response_2* updates
    if (t >= fix_time && perception_stim_response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perception_stim_response_2.tStart = t;  // (not accounting for frame time here)
      perception_stim_response_2.frameNStart = frameN;  // exact frame index
      
      perception_stim_response_2.setAutoDraw(true);
    }

    
    // *perception_color_response_2* updates
    if (t >= (fix_time + 0.1) && perception_color_response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perception_color_response_2.tStart = t;  // (not accounting for frame time here)
      perception_color_response_2.frameNStart = frameN;  // exact frame index
      
      perception_color_response_2.setAutoDraw(true);
    }

    
    if (perception_color_response_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      perception_color_response_2.setFillColor(new util.Color(color_rgb), false);
      perception_color_response_2.setLineColor(new util.Color(color_rgb), false);
    }
    
    // *dot_resp1_12* updates
    if (t >= (fix_time + 0.1) && dot_resp1_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp1_12.tStart = t;  // (not accounting for frame time here)
      dot_resp1_12.frameNStart = frameN;  // exact frame index
      
      dot_resp1_12.setAutoDraw(true);
    }

    
    if (dot_resp1_12.status === PsychoJS.Status.STARTED){ // only update if being drawn
      dot_resp1_12.setPos(dot_pos_resp, false);
    }
    
    // *fixation_5* updates
    if (t >= 0.0 && fixation_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_5.tStart = t;  // (not accounting for frame time here)
      fixation_5.frameNStart = frameN;  // exact frame index
      
      fixation_5.setAutoDraw(true);
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
    response_perception_practiceComponents.forEach( function(thisComponent) {
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


var _mouseXYs;
var err_angle;
function response_perception_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'response_perception_practice'-------
    response_perception_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_resp_perc_2.getPos();
    _mouseButtons = mouse_resp_perc_2.getPressed();
    psychoJS.experiment.addData('mouse_resp_perc_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_resp_perc_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_resp_perc_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_resp_perc_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_resp_perc_2.rightButton', _mouseButtons[2]);
    
    err_angle = (((trial_angles - curr_angle) + 360) % 360);
    if ((err_angle > 180)) {
        err_angle = (360 - err_angle);
    }
    
    
    i = (i + 1);
    
    // the Routine "response_perception_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_25_allKeys;
var perception_practice_feedbackComponents;
function perception_practice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'perception_practice_feedback'-------
    t = 0;
    perception_practice_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    feedback_msg_perception = (("Your response was " + err_angle.toString()) + " degrees different from the actual color.\nPress SPACE to continue.");
    
    text_44.setText(feedback_msg_perception);
    key_resp_25.keys = undefined;
    key_resp_25.rt = undefined;
    _key_resp_25_allKeys = [];
    // keep track of which components have finished
    perception_practice_feedbackComponents = [];
    perception_practice_feedbackComponents.push(text_44);
    perception_practice_feedbackComponents.push(key_resp_25);
    
    perception_practice_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function perception_practice_feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'perception_practice_feedback'-------
    // get current time
    t = perception_practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_44* updates
    if (t >= 0.0 && text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_44.tStart = t;  // (not accounting for frame time here)
      text_44.frameNStart = frameN;  // exact frame index
      
      text_44.setAutoDraw(true);
    }

    
    // *key_resp_25* updates
    if (t >= 0.0 && key_resp_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_25.tStart = t;  // (not accounting for frame time here)
      key_resp_25.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_25.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_25.clearEvents(); });
    }

    if (key_resp_25.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_25.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_25_allKeys = _key_resp_25_allKeys.concat(theseKeys);
      if (_key_resp_25_allKeys.length > 0) {
        key_resp_25.keys = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].name;  // just the last key pressed
        key_resp_25.rt = _key_resp_25_allKeys[_key_resp_25_allKeys.length - 1].rt;
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
    perception_practice_feedbackComponents.forEach( function(thisComponent) {
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


function perception_practice_feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'perception_practice_feedback'-------
    perception_practice_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_25.stop();
    // the Routine "perception_practice_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var instructions_1Components;
function instructions_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_1'-------
    t = 0;
    instructions_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    document.body.style.cursor='none';
    // keep track of which components have finished
    instructions_1Components = [];
    instructions_1Components.push(text_11);
    instructions_1Components.push(key_resp_4);
    
    instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_1'-------
    // get current time
    t = instructions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 5 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
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
    instructions_1Components.forEach( function(thisComponent) {
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


function instructions_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_1'-------
    instructions_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_4.stop();
    // the Routine "instructions_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_positions;
var stim_presented_wm_1;
var stim_presented_wm_2;
var stim_presented_wm_3;
var color_presented_wm;
var practice_memory_array_1Components;
function practice_memory_array_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_memory_array_1'-------
    t = 0;
    practice_memory_array_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(angles);
    util.shuffle(positions);
    trial_angles = [angles[0], angles[1], angles[2]];
    trial_positions = [positions[0], positions[1], positions[2]];
    
    err_total = 0;
    
    stim_files = [original_imgs[i], original_imgs[(i + 1)], original_imgs[(i + 2)]];
    //stim_files = ["object_stim/obj0.jpg", "object_stim/obj1.jpg", "object_stim/obj2.jpg"]
    
    stim_presented_wm_1 = stim_files[0].split("object_stim/")[1].split(".png")[0];
    stim_presented_wm_2 = stim_files[1].split("object_stim/")[1].split(".png")[0];
    stim_presented_wm_3 = stim_files[2].split("object_stim/")[1].split(".png")[0];
    
    
    color_presented_wm = [HSVtoRGB(trial_angles[0] / 360), HSVtoRGB(trial_angles[1] / 360), HSVtoRGB(trial_angles[2] / 360)];
    
    
    stim1_2.setPos(trial_positions[0]);
    stim1_2.setImage(stim_files[0]);
    wm_color_4.setFillColor(new util.Color(color_presented_wm[0]));
    wm_color_4.setPos(trial_positions[0]);
    wm_color_4.setLineColor(new util.Color(color_presented_wm[0]));
    stim2_2.setPos(trial_positions[1]);
    stim2_2.setImage(stim_files[1]);
    wm_color_5.setFillColor(new util.Color(color_presented_wm[1]));
    wm_color_5.setPos(trial_positions[1]);
    wm_color_5.setLineColor(new util.Color(color_presented_wm[1]));
    stim3_2.setPos(trial_positions[2]);
    stim3_2.setImage(stim_files[2]);
    wm_color_6.setFillColor(new util.Color(color_presented_wm[2]));
    wm_color_6.setPos(trial_positions[2]);
    wm_color_6.setLineColor(new util.Color(color_presented_wm[2]));
    // keep track of which components have finished
    practice_memory_array_1Components = [];
    practice_memory_array_1Components.push(stim1_2);
    practice_memory_array_1Components.push(wm_color_4);
    practice_memory_array_1Components.push(stim2_2);
    practice_memory_array_1Components.push(wm_color_5);
    practice_memory_array_1Components.push(stim3_2);
    practice_memory_array_1Components.push(wm_color_6);
    practice_memory_array_1Components.push(fixation_2);
    
    practice_memory_array_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practice_memory_array_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_memory_array_1'-------
    // get current time
    t = practice_memory_array_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim1_2* updates
    if (t >= fix_time && stim1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1_2.tStart = t;  // (not accounting for frame time here)
      stim1_2.frameNStart = frameN;  // exact frame index
      
      stim1_2.setAutoDraw(true);
    }

    frameRemains = fix_time + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1_2.setAutoDraw(false);
    }
    
    // *wm_color_4* updates
    if (t >= fix_time && wm_color_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_4.tStart = t;  // (not accounting for frame time here)
      wm_color_4.frameNStart = frameN;  // exact frame index
      
      wm_color_4.setAutoDraw(true);
    }

    frameRemains = fix_time + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wm_color_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wm_color_4.setAutoDraw(false);
    }
    
    // *stim2_2* updates
    if (t >= fix_time && stim2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2_2.tStart = t;  // (not accounting for frame time here)
      stim2_2.frameNStart = frameN;  // exact frame index
      
      stim2_2.setAutoDraw(true);
    }

    frameRemains = fix_time + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2_2.setAutoDraw(false);
    }
    
    // *wm_color_5* updates
    if (t >= fix_time && wm_color_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_5.tStart = t;  // (not accounting for frame time here)
      wm_color_5.frameNStart = frameN;  // exact frame index
      
      wm_color_5.setAutoDraw(true);
    }

    frameRemains = fix_time + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wm_color_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wm_color_5.setAutoDraw(false);
    }
    
    // *stim3_2* updates
    if (t >= fix_time && stim3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3_2.tStart = t;  // (not accounting for frame time here)
      stim3_2.frameNStart = frameN;  // exact frame index
      
      stim3_2.setAutoDraw(true);
    }

    frameRemains = fix_time + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3_2.setAutoDraw(false);
    }
    
    // *wm_color_6* updates
    if (t >= fix_time && wm_color_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_6.tStart = t;  // (not accounting for frame time here)
      wm_color_6.frameNStart = frameN;  // exact frame index
      
      wm_color_6.setAutoDraw(true);
    }

    frameRemains = fix_time + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wm_color_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wm_color_6.setAutoDraw(false);
    }
    
    // *fixation_2* updates
    if (t >= 0.0 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_2.tStart = t;  // (not accounting for frame time here)
      fixation_2.frameNStart = frameN;  // exact frame index
      
      fixation_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + (fix_time + 1.5) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_2.setAutoDraw(false);
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
    practice_memory_array_1Components.forEach( function(thisComponent) {
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


var j;
var parity_i;
function practice_memory_array_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_memory_array_1'-------
    practice_memory_array_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    j = 0;
    parity_i = 0;
    util.shuffle(parity_nums);
    
    // the Routine "practice_memory_array_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var item_n;
var practice_response_memoryComponents;
function practice_response_memoryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_response_memory'-------
    t = 0;
    practice_response_memoryClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp_4
    gotValidClick = false; // until a click is received
    stim_presented = stim_files[j]
    item_n = j;
    document.body.style.cursor='auto';
    
    
    
    circle_resp_8.setPos(trial_positions[j]);
    circle_resp_8.setSize(circle_size);
    image_6.setPos(trial_positions[j]);
    image_6.setImage(stim_files[j]);
    wm_color_10.setPos(trial_positions[j]);
    dot_resp1_8.setSize(dot_size);
    // keep track of which components have finished
    practice_response_memoryComponents = [];
    practice_response_memoryComponents.push(mouse_resp_4);
    practice_response_memoryComponents.push(circle_resp_8);
    practice_response_memoryComponents.push(image_6);
    practice_response_memoryComponents.push(wm_color_10);
    practice_response_memoryComponents.push(dot_resp1_8);
    
    practice_response_memoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_response_memoryRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_response_memory'-------
    // get current time
    t = practice_response_memoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_resp_4* updates
    if (t >= (fix_time + 0.1) && mouse_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_4.tStart = t;  // (not accounting for frame time here)
      mouse_resp_4.frameNStart = frameN;  // exact frame index
      
      mouse_resp_4.status = PsychoJS.Status.STARTED;
      mouse_resp_4.mouseClock.reset();
      prevButtonState = mouse_resp_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_resp_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    mouse_x = mouse_resp_4.getPos()[0];
    mouse_y = mouse_resp_4.getPos()[1];
    adj_x = trial_positions[j][0];
    adj_y = trial_positions[j][1];
    //mouse_x = (mouse_x - (adj_x * 2));
    //mouse_y = (mouse_y - (adj_y * 2));
    mouse_x = (mouse_x - adj_x);
    mouse_y = (mouse_y - adj_y);
    r = math.norm([mouse_x,mouse_y])
    current_pos = [mouse_x, mouse_y];
    cterm = [0, (- 50)];
    if ((r === 0)) {
        theta = 0;
    } else {
        if ((r !== 0)) {
            theta = Math.acos((math.dot(current_pos, cterm) / (r * (- 50))));
        }
    }
    if ((mouse_x < 0)) {
        theta = ((2 * pi) - theta);
    }
    curr_angle = Math.round((theta * (180 / pi)));
    dot_pos_resp = [(trial_positions[j][0] + ((circle_size[0] / 2) * Math.sin(theta))), (trial_positions[j][1] + ((circle_size[0] / 2) * Math.cos(theta)))];
    color_rgb = HSVtoRGB((curr_angle / 360));
    
    
    // *circle_resp_8* updates
    if (t >= 0.0 && circle_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_resp_8.tStart = t;  // (not accounting for frame time here)
      circle_resp_8.frameNStart = frameN;  // exact frame index
      
      circle_resp_8.setAutoDraw(true);
    }

    
    // *image_6* updates
    if (t >= 0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }

    
    // *wm_color_10* updates
    if (t >= (fix_time + 0.1) && wm_color_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_10.tStart = t;  // (not accounting for frame time here)
      wm_color_10.frameNStart = frameN;  // exact frame index
      
      wm_color_10.setAutoDraw(true);
    }

    
    if (wm_color_10.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_10.setFillColor(new util.Color(color_rgb), false);
      wm_color_10.setLineColor(new util.Color(color_rgb), false);
    }
    
    // *dot_resp1_8* updates
    if (t >= (fix_time + 0.1) && dot_resp1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp1_8.tStart = t;  // (not accounting for frame time here)
      dot_resp1_8.frameNStart = frameN;  // exact frame index
      
      dot_resp1_8.setAutoDraw(true);
    }

    
    if (dot_resp1_8.status === PsychoJS.Status.STARTED){ // only update if being drawn
      dot_resp1_8.setPos(dot_pos_resp, false);
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
    practice_response_memoryComponents.forEach( function(thisComponent) {
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


var points;
var central_item;
function practice_response_memoryRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_response_memory'-------
    practice_response_memoryComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_resp_4.getPos();
    _mouseButtons = mouse_resp_4.getPressed();
    psychoJS.experiment.addData('mouse_resp_4.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_resp_4.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_resp_4.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_resp_4.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_resp_4.rightButton', _mouseButtons[2]);
    
    err_angle = (((trial_angles[j] - curr_angle) + 360) % 360);
    if ((err_angle > 180)) {
        err_angle = (360 - err_angle);
    }
    if ((err_angle === 0)) {
        points = 15;
    } else {
        if ((err_angle <= 5)) {
            points = 10;
        } else {
            if ((err_angle <= 10)) {
                points = 5;
            } else {
                if ((err_angle <= 30)) {
                    points = 2;
                } else {
                    points = 0;
                }
            }
        }
    }
    if ((focus_item === j)) {
        points = (points * 2);
        central_item = 1;
    } else {
        central_item = 0;
    }
    points_total = (points_total + points);
    score[j] = points;
    
    psychoJS.window.mouseVisible = false;
    
    
    
    // the Routine "practice_response_memory" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var original_dot_pos;
var response_dot_pos;
var _key_resp_17_allKeys;
var practice_feedbackComponents;
function practice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_feedback'-------
    t = 0;
    practice_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    
    original_dot_pos = [(-.25 + ((circle_size[0] / 2) * Math.sin(trial_angles[j]*(pi/180)))), 
        (0 + ((circle_size[0] / 2) * Math.cos(trial_angles[j]*(pi/180))))] 
        
    response_dot_pos = [(.25 + ((circle_size[0] / 2) * Math.sin(curr_angle*(pi/180)))), 
        (0 + ((circle_size[0] / 2) * Math.cos(curr_angle*(pi/180))))] 
    document.body.style.cursor='none';
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    circle_resp_9.setPos([(- 0.25), 0]);
    circle_resp_9.setSize(circle_size);
    stim1_4.setPos([(- 0.25), 0]);
    stim1_4.setImage(stim_files[j]);
    wm_color_11.setFillColor(new util.Color(color_presented_wm[j]));
    wm_color_11.setPos([(- 0.25), 0]);
    wm_color_11.setLineColor(new util.Color(color_presented_wm[j]));
    dot_resp1_9.setPos(original_dot_pos);
    dot_resp1_9.setSize(dot_size);
    circle_resp_10.setPos([0.25, 0]);
    circle_resp_10.setSize(circle_size);
    stim1_5.setPos([0.25, 0]);
    stim1_5.setImage(stim_files[j]);
    wm_color_12.setFillColor(new util.Color(color_rgb));
    wm_color_12.setPos([0.25, 0]);
    wm_color_12.setLineColor(new util.Color(color_rgb));
    dot_resp1_10.setPos(response_dot_pos);
    dot_resp1_10.setSize(dot_size);
    // keep track of which components have finished
    practice_feedbackComponents = [];
    practice_feedbackComponents.push(text_26);
    practice_feedbackComponents.push(key_resp_17);
    practice_feedbackComponents.push(circle_resp_9);
    practice_feedbackComponents.push(stim1_4);
    practice_feedbackComponents.push(wm_color_11);
    practice_feedbackComponents.push(dot_resp1_9);
    practice_feedbackComponents.push(circle_resp_10);
    practice_feedbackComponents.push(stim1_5);
    practice_feedbackComponents.push(wm_color_12);
    practice_feedbackComponents.push(dot_resp1_10);
    practice_feedbackComponents.push(text_27);
    practice_feedbackComponents.push(text_28);
    
    practice_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_feedback'-------
    // get current time
    t = practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_26* updates
    if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
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
    
    
    // *circle_resp_9* updates
    if (t >= 0.0 && circle_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_resp_9.tStart = t;  // (not accounting for frame time here)
      circle_resp_9.frameNStart = frameN;  // exact frame index
      
      circle_resp_9.setAutoDraw(true);
    }

    
    // *stim1_4* updates
    if (t >= 0 && stim1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1_4.tStart = t;  // (not accounting for frame time here)
      stim1_4.frameNStart = frameN;  // exact frame index
      
      stim1_4.setAutoDraw(true);
    }

    
    // *wm_color_11* updates
    if (t >= 0 && wm_color_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_11.tStart = t;  // (not accounting for frame time here)
      wm_color_11.frameNStart = frameN;  // exact frame index
      
      wm_color_11.setAutoDraw(true);
    }

    
    // *dot_resp1_9* updates
    if (t >= 0 && dot_resp1_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp1_9.tStart = t;  // (not accounting for frame time here)
      dot_resp1_9.frameNStart = frameN;  // exact frame index
      
      dot_resp1_9.setAutoDraw(true);
    }

    
    // *circle_resp_10* updates
    if (t >= 0.0 && circle_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_resp_10.tStart = t;  // (not accounting for frame time here)
      circle_resp_10.frameNStart = frameN;  // exact frame index
      
      circle_resp_10.setAutoDraw(true);
    }

    
    // *stim1_5* updates
    if (t >= 0 && stim1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1_5.tStart = t;  // (not accounting for frame time here)
      stim1_5.frameNStart = frameN;  // exact frame index
      
      stim1_5.setAutoDraw(true);
    }

    
    // *wm_color_12* updates
    if (t >= 0 && wm_color_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_12.tStart = t;  // (not accounting for frame time here)
      wm_color_12.frameNStart = frameN;  // exact frame index
      
      wm_color_12.setAutoDraw(true);
    }

    
    // *dot_resp1_10* updates
    if (t >= 0 && dot_resp1_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp1_10.tStart = t;  // (not accounting for frame time here)
      dot_resp1_10.frameNStart = frameN;  // exact frame index
      
      dot_resp1_10.setAutoDraw(true);
    }

    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }

    
    // *text_28* updates
    if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
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
    practice_feedbackComponents.forEach( function(thisComponent) {
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


function practice_feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_feedback'-------
    practice_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    i = i+3
    j = j+1
    key_resp_17.stop();
    // the Routine "practice_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var instructions_2Components;
function instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_2'-------
    t = 0;
    instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    instructions_2Components = [];
    instructions_2Components.push(text_12);
    instructions_2Components.push(key_resp_5);
    
    instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_2'-------
    // get current time
    t = instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 5 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
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
    instructions_2Components.forEach( function(thisComponent) {
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


function instructions_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_2'-------
    instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_5.stop();
    // the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var num_presented;
var corr_ans_parity;
var _parity_resp_2_allKeys;
var practice_parity1Components;
function practice_parity1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_parity1'-------
    t = 0;
    practice_parity1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    num_presented = parity_nums[parity_i];
    if (((num_presented % 2) === 0)) {
        corr_ans_parity = "a";
    } else {
        corr_ans_parity = "s";
    }
    
    text_5.setText(num_presented);
    parity_resp_2.keys = undefined;
    parity_resp_2.rt = undefined;
    _parity_resp_2_allKeys = [];
    // keep track of which components have finished
    practice_parity1Components = [];
    practice_parity1Components.push(text_5);
    practice_parity1Components.push(parity_resp_2);
    
    practice_parity1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_parity1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_parity1'-------
    // get current time
    t = practice_parity1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + parity_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    // *parity_resp_2* updates
    if (t >= 0.0 && parity_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      parity_resp_2.tStart = t;  // (not accounting for frame time here)
      parity_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { parity_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { parity_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { parity_resp_2.clearEvents(); });
    }

    frameRemains = 0.0 + parity_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (parity_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      parity_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (parity_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = parity_resp_2.getKeys({keyList: ['a', 's'], waitRelease: false});
      _parity_resp_2_allKeys = _parity_resp_2_allKeys.concat(theseKeys);
      if (_parity_resp_2_allKeys.length > 0) {
        parity_resp_2.keys = _parity_resp_2_allKeys[_parity_resp_2_allKeys.length - 1].name;  // just the last key pressed
        parity_resp_2.rt = _parity_resp_2_allKeys[_parity_resp_2_allKeys.length - 1].rt;
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
    practice_parity1Components.forEach( function(thisComponent) {
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


function practice_parity1RoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_parity1'-------
    practice_parity1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    parity_i = (parity_i + 1);
    if ((corr_ans_parity === parity_resp_2.keys)) {
        msg = "Correct!";
    } else {
        if ((parity_resp_2.keys === [])) {
            msg = "No key pressed.\n\nRemember press 'A' if even and 'S' if odd.";
        } else {
            msg = "Incorrect\n\nRemember press 'A' if even and 'S' if odd.";
        }
    }
    
    parity_resp_2.stop();
    // the Routine "practice_parity1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var practice_parity_feedbackComponents;
function practice_parity_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_parity_feedback'-------
    t = 0;
    practice_parity_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_9.setText(msg);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    practice_parity_feedbackComponents = [];
    practice_parity_feedbackComponents.push(text_10);
    practice_parity_feedbackComponents.push(text_9);
    practice_parity_feedbackComponents.push(key_resp_3);
    
    practice_parity_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_parity_feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_parity_feedback'-------
    // get current time
    t = practice_parity_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
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
    practice_parity_feedbackComponents.forEach( function(thisComponent) {
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


function practice_parity_feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_parity_feedback'-------
    practice_parity_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_3.stop();
    // the Routine "practice_parity_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var instructions_3Components;
function instructions_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_3'-------
    t = 0;
    instructions_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    instructions_3Components = [];
    instructions_3Components.push(text_13);
    instructions_3Components.push(key_resp_6);
    
    instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_3'-------
    // get current time
    t = instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 5 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
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
    instructions_3Components.forEach( function(thisComponent) {
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


function instructions_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_3'-------
    instructions_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_6.stop();
    // the Routine "instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var delay1Components;
function delay1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'delay1'-------
    t = 0;
    delay1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    delay1Components = [];
    delay1Components.push(fixation_delay1);
    
    delay1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function delay1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'delay1'-------
    // get current time
    t = delay1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_delay1* updates
    if (t >= 0.0 && fixation_delay1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_delay1.tStart = t;  // (not accounting for frame time here)
      fixation_delay1.frameNStart = frameN;  // exact frame index
      
      fixation_delay1.setAutoDraw(true);
    }

    frameRemains = 0.0 + delay_1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_delay1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_delay1.setAutoDraw(false);
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
    delay1Components.forEach( function(thisComponent) {
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


function delay1RoutineEnd() {
  return async function () {
    //------Ending Routine 'delay1'-------
    delay1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "delay1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var delay2Components;
function delay2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'delay2'-------
    t = 0;
    delay2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    delay2Components = [];
    delay2Components.push(fixation_delay2);
    
    delay2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function delay2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'delay2'-------
    // get current time
    t = delay2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_delay2* updates
    if (t >= 0.0 && fixation_delay2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_delay2.tStart = t;  // (not accounting for frame time here)
      fixation_delay2.frameNStart = frameN;  // exact frame index
      
      fixation_delay2.setAutoDraw(true);
    }

    frameRemains = 0.0 + delay_2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_delay2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_delay2.setAutoDraw(false);
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
    delay2Components.forEach( function(thisComponent) {
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


function delay2RoutineEnd() {
  return async function () {
    //------Ending Routine 'delay2'-------
    delay2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "delay2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_16_allKeys;
var instructions_4Components;
function instructions_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_4'-------
    t = 0;
    instructions_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    points_total = 0;
    
    // keep track of which components have finished
    instructions_4Components = [];
    instructions_4Components.push(text_25);
    instructions_4Components.push(key_resp_16);
    
    instructions_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_4'-------
    // get current time
    t = instructions_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }

    
    // *key_resp_16* updates
    if (t >= 5 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
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
    instructions_4Components.forEach( function(thisComponent) {
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


function instructions_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_4'-------
    instructions_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_16.stop();
    // the Routine "instructions_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var memory_points;
var block_type;
var color_presented_wm_1;
var color_presented_wm_2;
var color_presented_wm_3;
var focus_item;
var memory_arrayComponents;
function memory_arrayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'memory_array'-------
    t = 0;
    memory_arrayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(angles);
    util.shuffle(positions);
    trial_angles = [angles[0], angles[1], angles[2]];
    trial_positions = [positions[0], positions[1], positions[2]];
    err_total = 0;
    parity_points = 0;
    memory_points = 0;
    stim_files = [original_imgs[i], original_imgs[(i + 1)], original_imgs[(i + 2)]];
    //stim_files = ["object_stim/obj0.jpg", "object_stim/obj1.jpg", "object_stim/obj2.jpg"]
    
    block_type = "working_memory"
    
    stim_presented_wm_1 = stim_files[0]
    stim_presented_wm_2 = stim_files[1]
    stim_presented_wm_3 = stim_files[2]
    
    
    color_presented_wm_1 = HSVtoRGB(trial_angles[0] / 360);
    color_presented_wm_2 = HSVtoRGB(trial_angles[1] / 360);
    color_presented_wm_3 = HSVtoRGB(trial_angles[2] / 360);
    
    focus_item = util.randint(0, 3);
    psychoJS.window.mouseVisible = false;
    
    
    circle_focus_item.setPos(positions[focus_item]);
    stim1.setPos(trial_positions[0]);
    stim1.setImage(stim_files[0]);
    wm_color_1.setFillColor(new util.Color(color_presented_wm_1));
    wm_color_1.setPos(trial_positions[0]);
    wm_color_1.setLineColor(new util.Color(color_presented_wm_1));
    stim2.setPos(trial_positions[1]);
    stim2.setImage(stim_files[1]);
    wm_color_2.setFillColor(new util.Color(color_presented_wm_2));
    wm_color_2.setPos(trial_positions[1]);
    wm_color_2.setLineColor(new util.Color(color_presented_wm_2));
    stim3.setPos(trial_positions[2]);
    stim3.setImage(stim_files[2]);
    wm_color_3.setFillColor(new util.Color(color_presented_wm_3));
    wm_color_3.setPos(trial_positions[2]);
    wm_color_3.setLineColor(new util.Color(color_presented_wm_3));
    // keep track of which components have finished
    memory_arrayComponents = [];
    memory_arrayComponents.push(circle_focus_item);
    memory_arrayComponents.push(stim1);
    memory_arrayComponents.push(wm_color_1);
    memory_arrayComponents.push(stim2);
    memory_arrayComponents.push(wm_color_2);
    memory_arrayComponents.push(stim3);
    memory_arrayComponents.push(wm_color_3);
    memory_arrayComponents.push(fixation);
    
    memory_arrayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function memory_arrayRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'memory_array'-------
    // get current time
    t = memory_arrayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *circle_focus_item* updates
    if (t >= fix_time && circle_focus_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_focus_item.tStart = t;  // (not accounting for frame time here)
      circle_focus_item.frameNStart = frameN;  // exact frame index
      
      circle_focus_item.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_array_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (circle_focus_item.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      circle_focus_item.setAutoDraw(false);
    }
    
    // *stim1* updates
    if (t >= fix_time && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_array_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1.setAutoDraw(false);
    }
    
    // *wm_color_1* updates
    if (t >= fix_time && wm_color_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_1.tStart = t;  // (not accounting for frame time here)
      wm_color_1.frameNStart = frameN;  // exact frame index
      
      wm_color_1.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_array_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wm_color_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wm_color_1.setAutoDraw(false);
    }
    
    // *stim2* updates
    if (t >= fix_time && stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2.tStart = t;  // (not accounting for frame time here)
      stim2.frameNStart = frameN;  // exact frame index
      
      stim2.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_array_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2.setAutoDraw(false);
    }
    
    // *wm_color_2* updates
    if (t >= fix_time && wm_color_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_2.tStart = t;  // (not accounting for frame time here)
      wm_color_2.frameNStart = frameN;  // exact frame index
      
      wm_color_2.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_array_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wm_color_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wm_color_2.setAutoDraw(false);
    }
    
    // *stim3* updates
    if (t >= fix_time && stim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3.tStart = t;  // (not accounting for frame time here)
      stim3.frameNStart = frameN;  // exact frame index
      
      stim3.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_array_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3.setAutoDraw(false);
    }
    
    // *wm_color_3* updates
    if (t >= fix_time && wm_color_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_3.tStart = t;  // (not accounting for frame time here)
      wm_color_3.frameNStart = frameN;  // exact frame index
      
      wm_color_3.setAutoDraw(true);
    }

    frameRemains = fix_time + stim_array_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wm_color_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wm_color_3.setAutoDraw(false);
    }
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + (fix_time + stim_array_time) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
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
    memory_arrayComponents.forEach( function(thisComponent) {
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


function memory_arrayRoutineEnd() {
  return async function () {
    //------Ending Routine 'memory_array'-------
    memory_arrayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    j = 0;
    parity_i = 0;
    util.shuffle(parity_nums);
    
    // the Routine "memory_array" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _parity_resp_allKeys;
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
    num_presented = parity_nums[parity_i];
    if (((num_presented % 2) === 0)) {
        corr_ans_parity = "a";
    } else {
        corr_ans_parity = "s";
    }
    
    text.setText(num_presented);
    parity_resp.keys = undefined;
    parity_resp.rt = undefined;
    _parity_resp_allKeys = [];
    // keep track of which components have finished
    parityComponents = [];
    parityComponents.push(text);
    parityComponents.push(parity_resp);
    
    parityComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + parity_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *parity_resp* updates
    if (t >= 0.0 && parity_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      parity_resp.tStart = t;  // (not accounting for frame time here)
      parity_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { parity_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { parity_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { parity_resp.clearEvents(); });
    }

    frameRemains = 0.0 + parity_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (parity_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      parity_resp.status = PsychoJS.Status.FINISHED;
  }

    if (parity_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = parity_resp.getKeys({keyList: ['a', 's'], waitRelease: false});
      _parity_resp_allKeys = _parity_resp_allKeys.concat(theseKeys);
      if (_parity_resp_allKeys.length > 0) {
        parity_resp.keys = _parity_resp_allKeys[_parity_resp_allKeys.length - 1].name;  // just the last key pressed
        parity_resp.rt = _parity_resp_allKeys[_parity_resp_allKeys.length - 1].rt;
        // was this correct?
        if (parity_resp.keys == corr_ans_parity) {
            parity_resp.corr = 1;
        } else {
            parity_resp.corr = 0;
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
    parityComponents.forEach( function(thisComponent) {
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


var parity_points_trial;
function parityRoutineEnd() {
  return async function () {
    //------Ending Routine 'parity'-------
    parityComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    parity_i = (parity_i + 1);
    psychoJS.experiment.addData("parity_i", parity_i);
    psychoJS.experiment.addData("num_presented", num_presented);
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("block_n", block_n);
    psychoJS.experiment.addData("block_type", block_type);
    if ((corr_ans_parity === parity_resp.keys)) {
        parity_points_trial = 1;
    } else {
        parity_points_trial = 0;
    }
    parity_points = (parity_points + parity_points_trial);
    parity_points_total = (parity_points_total + parity_points);
    
    // was no response the correct answer?!
    if (parity_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans_parity)) {
         parity_resp.corr = 1;  // correct non-response
      } else {
         parity_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(parity_resp.corr, level);
    }
    psychoJS.experiment.addData('parity_resp.keys', parity_resp.keys);
    psychoJS.experiment.addData('parity_resp.corr', parity_resp.corr);
    if (typeof parity_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('parity_resp.rt', parity_resp.rt);
        }
    
    parity_resp.stop();
    // the Routine "parity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var response_memoryComponents;
function response_memoryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'response_memory'-------
    t = 0;
    response_memoryClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp
    gotValidClick = false; // until a click is received
    stim_presented = stim_files[j]
    item_n = j;
    document.body.style.cursor='auto';
    
    
    
    circle_resp.setPos(trial_positions[j]);
    circle_resp.setSize(circle_size);
    image_1.setPos(trial_positions[j]);
    image_1.setImage(stim_files[j]);
    wm_color.setPos(trial_positions[j]);
    dot_resp1.setSize(dot_size);
    // keep track of which components have finished
    response_memoryComponents = [];
    response_memoryComponents.push(mouse_resp);
    response_memoryComponents.push(circle_resp);
    response_memoryComponents.push(image_1);
    response_memoryComponents.push(wm_color);
    response_memoryComponents.push(dot_resp1);
    
    response_memoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_memoryRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'response_memory'-------
    // get current time
    t = response_memoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_resp* updates
    if (t >= (fix_time + 0.1) && mouse_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp.tStart = t;  // (not accounting for frame time here)
      mouse_resp.frameNStart = frameN;  // exact frame index
      
      mouse_resp.status = PsychoJS.Status.STARTED;
      mouse_resp.mouseClock.reset();
      prevButtonState = mouse_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    mouse_x = mouse_resp.getPos()[0];
    mouse_y = mouse_resp.getPos()[1];
    adj_x = trial_positions[j][0];
    adj_y = trial_positions[j][1];
    //mouse_x = (mouse_x - (adj_x * 2));
    //mouse_y = (mouse_y - (adj_y * 2));
    mouse_x = (mouse_x - adj_x);
    mouse_y = (mouse_y - adj_y);
    r = math.norm([mouse_x,mouse_y])
    current_pos = [mouse_x, mouse_y];
    cterm = [0, (- 50)];
    if ((r === 0)) {
        theta = 0;
    } else {
        if ((r !== 0)) {
            theta = Math.acos((math.dot(current_pos, cterm) / (r * (- 50))));
        }
    }
    if ((mouse_x < 0)) {
        theta = ((2 * pi) - theta);
    }
    curr_angle = Math.round((theta * (180 / pi)));
    dot_pos_resp = [(trial_positions[j][0] + ((circle_size[0] / 2) * Math.sin(theta))), (trial_positions[j][1] + ((circle_size[0] / 2) * Math.cos(theta)))];
    color_rgb = HSVtoRGB((curr_angle / 360));
    
    
    // *circle_resp* updates
    if (t >= 0.0 && circle_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_resp.tStart = t;  // (not accounting for frame time here)
      circle_resp.frameNStart = frameN;  // exact frame index
      
      circle_resp.setAutoDraw(true);
    }

    
    // *image_1* updates
    if (t >= 0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }

    
    // *wm_color* updates
    if (t >= (fix_time + 0.1) && wm_color.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color.tStart = t;  // (not accounting for frame time here)
      wm_color.frameNStart = frameN;  // exact frame index
      
      wm_color.setAutoDraw(true);
    }

    
    if (wm_color.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color.setFillColor(new util.Color(color_rgb), false);
      wm_color.setLineColor(new util.Color(color_rgb), false);
    }
    
    // *dot_resp1* updates
    if (t >= (fix_time + 0.1) && dot_resp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp1.tStart = t;  // (not accounting for frame time here)
      dot_resp1.frameNStart = frameN;  // exact frame index
      
      dot_resp1.setAutoDraw(true);
    }

    
    if (dot_resp1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      dot_resp1.setPos(dot_pos_resp, false);
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
    response_memoryComponents.forEach( function(thisComponent) {
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


function response_memoryRoutineEnd() {
  return async function () {
    //------Ending Routine 'response_memory'-------
    response_memoryComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_resp.getPos();
    _mouseButtons = mouse_resp.getPressed();
    psychoJS.experiment.addData('mouse_resp.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_resp.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_resp.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_resp.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_resp.rightButton', _mouseButtons[2]);
    psychoJS.experiment.addData("disp_angle", trial_angles[j]);
    psychoJS.experiment.addData("resp_angle", curr_angle);
    psychoJS.experiment.addData("block_n", block_n);
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("item_n", item_n);
    psychoJS.experiment.addData("focus_item", focus_item);
    psychoJS.experiment.addData("stim_presented", stim_presented);
    psychoJS.experiment.addData("stim_file", stim_files[j]);
    psychoJS.experiment.addData("block_type", "working_memory");
    
    err_angle = (((trial_angles[j] - curr_angle) + 360) % 360);
    if ((err_angle > 180)) {
        err_angle = (360 - err_angle);
    }
    psychoJS.experiment.addData("err_angle", err_angle);
    if ((curr_angle === 0)) {
        memory_points = 0;
    } else {
        if ((err_angle <= 90)) {
            memory_points = (20 - Math.round((err_angle / 10)));
        } else {
            memory_points = 0;
        }
    }
    if ((focus_item === j)) {
        memory_points = (memory_points * 2);
        central_item = 1;
    } else {
        central_item = 0;
    }
    points_total = (points_total + memory_points);
    score[j] = memory_points;
    psychoJS.experiment.addData("points", points);
    psychoJS.experiment.addData("central_item", central_item);
    psychoJS.window.mouseVisible = false;
    memory_items.push([stim_files[j], trial_angles[j], central_item, delay_1, "working_memory"]);
    
    j = (j + 1);
    
    
    // the Routine "response_memory" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var new_position_y;
var new_position;
var _key_resp_allKeys;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    points_total = (points_total + parity_points);
    new_position_y = (trial_positions[focus_item][1] - 0.05);
    new_position = [trial_positions[focus_item][0], new_position_y];
    document.body.style.cursor='none';
    
    
    circle_focus_item_2.setPos(trial_positions[focus_item]);
    circle_focus_item_2.setSize(circle_size);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    text_2.setText(points_total);
    text_16.setPos(trial_positions[0]);
    text_16.setText(("Item 1:\n" + score[0].toString()));
    text_17.setPos(trial_positions[1]);
    text_17.setText(("Item 2:\n" + score[1].toString()));
    text_113.setText(("Even/odd score: " + parity_points.toString()));
    text_103.setPos(new_position);
    text_103.setText('Bonus!');
    text_15.setPos(trial_positions[2]);
    text_15.setText(("Item 3:\n" + score[2].toString()));
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(circle_focus_item_2);
    feedbackComponents.push(text_3);
    feedbackComponents.push(key_resp);
    feedbackComponents.push(text_2);
    feedbackComponents.push(text_4);
    feedbackComponents.push(text_16);
    feedbackComponents.push(text_17);
    feedbackComponents.push(text_113);
    feedbackComponents.push(text_103);
    feedbackComponents.push(text_15);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *circle_focus_item_2* updates
    if (t >= 0 && circle_focus_item_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_focus_item_2.tStart = t;  // (not accounting for frame time here)
      circle_focus_item_2.frameNStart = frameN;  // exact frame index
      
      circle_focus_item_2.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
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
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }

    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    
    // *text_113* updates
    if (t >= 0.0 && text_113.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_113.tStart = t;  // (not accounting for frame time here)
      text_113.frameNStart = frameN;  // exact frame index
      
      text_113.setAutoDraw(true);
    }

    
    // *text_103* updates
    if (t >= 0.0 && text_103.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_103.tStart = t;  // (not accounting for frame time here)
      text_103.frameNStart = frameN;  // exact frame index
      
      text_103.setAutoDraw(true);
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
    feedbackComponents.forEach( function(thisComponent) {
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


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    i = (i + 3);
    trial_n = (trial_n + 1);
    parity_points = 0;
    
    key_resp.stop();
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
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
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    points_total = 0;
    memory_items = [];
    
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(text_14);
    practice_endComponents.push(key_resp_7);
    
    practice_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_endComponents.forEach( function(thisComponent) {
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


function practice_endRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_end'-------
    practice_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_7.stop();
    // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_20_allKeys;
var stai_instructComponents;
function stai_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stai_instruct'-------
    t = 0;
    stai_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_20.keys = undefined;
    key_resp_20.rt = undefined;
    _key_resp_20_allKeys = [];
    // keep track of which components have finished
    stai_instructComponents = [];
    stai_instructComponents.push(text_117);
    stai_instructComponents.push(key_resp_20);
    
    stai_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stai_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stai_instruct'-------
    // get current time
    t = stai_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_117* updates
    if (t >= 0.0 && text_117.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_117.tStart = t;  // (not accounting for frame time here)
      text_117.frameNStart = frameN;  // exact frame index
      
      text_117.setAutoDraw(true);
    }

    
    // *key_resp_20* updates
    if (t >= 5 && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
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
    stai_instructComponents.forEach( function(thisComponent) {
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


function stai_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'stai_instruct'-------
    stai_instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_20.stop();
    // the Routine "stai_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_stai_allKeys;
var staiComponents;
function staiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stai'-------
    t = 0;
    staiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_52.setText(STAI_item);
    key_resp_stai.keys = undefined;
    key_resp_stai.rt = undefined;
    _key_resp_stai_allKeys = [];
    // keep track of which components have finished
    staiComponents = [];
    staiComponents.push(text_52);
    staiComponents.push(text_53);
    staiComponents.push(text_54);
    staiComponents.push(text_55);
    staiComponents.push(text_56);
    staiComponents.push(text_57);
    staiComponents.push(text_58);
    staiComponents.push(text_59);
    staiComponents.push(text_60);
    staiComponents.push(key_resp_stai);
    
    staiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function staiRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stai'-------
    // get current time
    t = staiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_52* updates
    if (t >= 0.0 && text_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_52.tStart = t;  // (not accounting for frame time here)
      text_52.frameNStart = frameN;  // exact frame index
      
      text_52.setAutoDraw(true);
    }

    
    // *text_53* updates
    if (t >= 0.0 && text_53.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_53.tStart = t;  // (not accounting for frame time here)
      text_53.frameNStart = frameN;  // exact frame index
      
      text_53.setAutoDraw(true);
    }

    
    // *text_54* updates
    if (t >= 0.0 && text_54.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_54.tStart = t;  // (not accounting for frame time here)
      text_54.frameNStart = frameN;  // exact frame index
      
      text_54.setAutoDraw(true);
    }

    
    // *text_55* updates
    if (t >= 0.0 && text_55.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_55.tStart = t;  // (not accounting for frame time here)
      text_55.frameNStart = frameN;  // exact frame index
      
      text_55.setAutoDraw(true);
    }

    
    // *text_56* updates
    if (t >= 0.0 && text_56.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_56.tStart = t;  // (not accounting for frame time here)
      text_56.frameNStart = frameN;  // exact frame index
      
      text_56.setAutoDraw(true);
    }

    
    // *text_57* updates
    if (t >= 0.0 && text_57.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_57.tStart = t;  // (not accounting for frame time here)
      text_57.frameNStart = frameN;  // exact frame index
      
      text_57.setAutoDraw(true);
    }

    
    // *text_58* updates
    if (t >= 0.0 && text_58.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_58.tStart = t;  // (not accounting for frame time here)
      text_58.frameNStart = frameN;  // exact frame index
      
      text_58.setAutoDraw(true);
    }

    
    // *text_59* updates
    if (t >= 0.0 && text_59.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_59.tStart = t;  // (not accounting for frame time here)
      text_59.frameNStart = frameN;  // exact frame index
      
      text_59.setAutoDraw(true);
    }

    
    // *text_60* updates
    if (t >= 0.0 && text_60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_60.tStart = t;  // (not accounting for frame time here)
      text_60.frameNStart = frameN;  // exact frame index
      
      text_60.setAutoDraw(true);
    }

    
    // *key_resp_stai* updates
    if (t >= 0.0 && key_resp_stai.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_stai.tStart = t;  // (not accounting for frame time here)
      key_resp_stai.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_stai.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_stai.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_stai.clearEvents(); });
    }

    if (key_resp_stai.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_stai.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_resp_stai_allKeys = _key_resp_stai_allKeys.concat(theseKeys);
      if (_key_resp_stai_allKeys.length > 0) {
        key_resp_stai.keys = _key_resp_stai_allKeys[_key_resp_stai_allKeys.length - 1].name;  // just the last key pressed
        key_resp_stai.rt = _key_resp_stai_allKeys[_key_resp_stai_allKeys.length - 1].rt;
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
    staiComponents.forEach( function(thisComponent) {
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


function staiRoutineEnd() {
  return async function () {
    //------Ending Routine 'stai'-------
    staiComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_stai.corr, level);
    }
    psychoJS.experiment.addData('key_resp_stai.keys', key_resp_stai.keys);
    if (typeof key_resp_stai.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_stai.rt', key_resp_stai.rt);
        routineTimer.reset();
        }
    
    key_resp_stai.stop();
    // the Routine "stai" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_18_allKeys;
var stress_instruct_1Components;
function stress_instruct_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stress_instruct_1'-------
    t = 0;
    stress_instruct_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    // keep track of which components have finished
    stress_instruct_1Components = [];
    stress_instruct_1Components.push(text_8);
    stress_instruct_1Components.push(key_resp_18);
    
    stress_instruct_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stress_instruct_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stress_instruct_1'-------
    // get current time
    t = stress_instruct_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *key_resp_18* updates
    if (t >= 5 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
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
    stress_instruct_1Components.forEach( function(thisComponent) {
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


function stress_instruct_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'stress_instruct_1'-------
    stress_instruct_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_18.stop();
    // the Routine "stress_instruct_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_19_allKeys;
var stress_instruct_2Components;
function stress_instruct_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stress_instruct_2'-------
    t = 0;
    stress_instruct_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_19.keys = undefined;
    key_resp_19.rt = undefined;
    _key_resp_19_allKeys = [];
    // keep track of which components have finished
    stress_instruct_2Components = [];
    stress_instruct_2Components.push(text_29);
    stress_instruct_2Components.push(key_resp_19);
    stress_instruct_2Components.push(feedback_bar_practice);
    
    stress_instruct_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stress_instruct_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stress_instruct_2'-------
    // get current time
    t = stress_instruct_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_29* updates
    if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }

    
    // *key_resp_19* updates
    if (t >= 5 && key_resp_19.status === PsychoJS.Status.NOT_STARTED) {
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
    
    
    // *feedback_bar_practice* updates
    if (t >= 0.0 && feedback_bar_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_bar_practice.tStart = t;  // (not accounting for frame time here)
      feedback_bar_practice.frameNStart = frameN;  // exact frame index
      
      feedback_bar_practice.setAutoDraw(true);
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
    stress_instruct_2Components.forEach( function(thisComponent) {
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


function stress_instruct_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'stress_instruct_2'-------
    stress_instruct_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_19.stop();
    // the Routine "stress_instruct_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var display_equation;
var correct_answer;
var _stress_key_resp_allKeys;
var stress_taskComponents;
function stress_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stress_task'-------
    t = 0;
    stress_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    util.shuffle(level_1_probs);
    util.shuffle(level_2_probs);
    util.shuffle(level_3_probs);
    util.shuffle(level_4_probs);
    util.shuffle(level_5_probs);
    if ((current_level === 1)) {
        display_equation = level_1_probs[m][0];
        correct_answer = level_1_probs[m][1];
    }
    if ((current_level === 2)) {
        display_equation = level_2_probs[m][0];
        correct_answer = level_2_probs[m][1];
    }
    if ((current_level === 3)) {
        display_equation = level_3_probs[m][0];
        correct_answer = level_3_probs[m][1];
    }
    if ((current_level === 4)) {
        display_equation = level_4_probs[m][0];
        correct_answer = level_4_probs[m][1];
        stress_time = 5;
    }
    if ((current_level === 5)) {
        display_equation = level_5_probs[m][0];
        correct_answer = level_5_probs[m][1];
    }
    if ((stress_i === 36)) {
        display_equation = "Please try a little harder!";
        stress_i = 0;
    }
    
    text_7.setText(display_equation);
    stress_key_resp.keys = undefined;
    stress_key_resp.rt = undefined;
    _stress_key_resp_allKeys = [];
    image_2.setImage(current_feedback);
    // keep track of which components have finished
    stress_taskComponents = [];
    stress_taskComponents.push(text_7);
    stress_taskComponents.push(stress_key_resp);
    stress_taskComponents.push(image_2);
    stress_taskComponents.push(text_32);
    
    stress_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stress_taskRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stress_task'-------
    // get current time
    t = stress_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + stress_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // *stress_key_resp* updates
    if (t >= 0 && stress_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stress_key_resp.tStart = t;  // (not accounting for frame time here)
      stress_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stress_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stress_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stress_key_resp.clearEvents(); });
    }

    frameRemains = 0 + stress_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stress_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stress_key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (stress_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = stress_key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], waitRelease: false});
      _stress_key_resp_allKeys = _stress_key_resp_allKeys.concat(theseKeys);
      if (_stress_key_resp_allKeys.length > 0) {
        stress_key_resp.keys = _stress_key_resp_allKeys[_stress_key_resp_allKeys.length - 1].name;  // just the last key pressed
        stress_key_resp.rt = _stress_key_resp_allKeys[_stress_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (stress_key_resp.keys == correct_answer) {
            stress_key_resp.corr = 1;
        } else {
            stress_key_resp.corr = 0;
        }
      }
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + stress_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }

    frameRemains = 0.0 + stress_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_32.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_32.setAutoDraw(false);
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
    stress_taskComponents.forEach( function(thisComponent) {
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


var current_perf;
function stress_taskRoutineEnd() {
  return async function () {
    //------Ending Routine 'stress_task'-------
    stress_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    current_stress_score += stress_key_resp.corr;
    if (((trial_counter % 5) === 0)) {
        current_perf = (current_stress_score / trial_counter);
        if ((current_perf >= 1)) {
            current_level += 1;
            current_feedback = "feedback_2.png";
        } else {
            if ((current_perf >= 0.8)) {
                current_level += 1;
                current_feedback = "feedback_1.png";
            } else {
                if ((current_perf >= 0.6)) {
                    current_level += 1;
                    current_feedback = "feedback_3.png";
                } else {
                    if ((current_perf >= 0.4)) {
                        current_level -= 1;
                        current_feedback = "feedback_4.png";
                    } else {
                        if ((current_perf >= 0.2)) {
                            current_level -= 1;
                            current_feedback = "feedback_5.png";
                        }
                    }
                }
            }
        }
        if ((current_level < 1)) {
            current_level = 1;
        }
        if ((current_level > 5)) {
            current_level = 5;
            stress_time -= 0.5;
        }
        if ((stress_time < 1)) {
            stress_time = 1;
        }
        trial_counter = 1;
        current_stress_score = 0;
    }
    if ((m >= 42)) {
        m = 0;
    }
    m += 1;
    trial_counter += 1;
    stress_i += 1;
    
    // was no response the correct answer?!
    if (stress_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer)) {
         stress_key_resp.corr = 1;  // correct non-response
      } else {
         stress_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(stress_key_resp.corr, level);
    }
    psychoJS.experiment.addData('stress_key_resp.keys', stress_key_resp.keys);
    psychoJS.experiment.addData('stress_key_resp.corr', stress_key_resp.corr);
    if (typeof stress_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stress_key_resp.rt', stress_key_resp.rt);
        }
    
    stress_key_resp.stop();
    // the Routine "stress_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stress_break;
var _key_resp_14_allKeys;
var stress_breakComponents;
function stress_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stress_break'-------
    t = 0;
    stress_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    if ((stress_block === 2)) {
        stress_break = "You have reached the end of this task. Press SPACE to continue.";
    } else {
        stress_break = "If you would like to take a break, please do so now. \nThe task will begin again in 30 seconds.\n\nIf you would like to skip the break, press SPACE to continue.";
    }
    
    text_31.setText(stress_break);
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // keep track of which components have finished
    stress_breakComponents = [];
    stress_breakComponents.push(text_31);
    stress_breakComponents.push(key_resp_14);
    
    stress_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stress_breakRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stress_break'-------
    // get current time
    t = stress_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_31* updates
    if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_31.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_31.setAutoDraw(false);
    }
    
    // *key_resp_14* updates
    if (t >= 0.0 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_14.status = PsychoJS.Status.FINISHED;
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
    stress_breakComponents.forEach( function(thisComponent) {
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


function stress_breakRoutineEnd() {
  return async function () {
    //------Ending Routine 'stress_break'-------
    stress_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    stress_block += 1;
    m = 0;
    
    key_resp_14.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var end_taskComponents;
function end_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_task'-------
    t = 0;
    end_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    end_taskComponents = [];
    end_taskComponents.push(text_20);
    end_taskComponents.push(key_resp_10);
    
    end_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_taskRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_task'-------
    // get current time
    t = end_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
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
    end_taskComponents.forEach( function(thisComponent) {
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


function end_taskRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_task'-------
    end_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_10.stop();
    // the Routine "end_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_24_allKeys;
var instructions_perceptionComponents;
function instructions_perceptionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_perception'-------
    t = 0;
    instructions_perceptionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_24.keys = undefined;
    key_resp_24.rt = undefined;
    _key_resp_24_allKeys = [];
    block_n = 1;
    trial_n = 1;
    
    // keep track of which components have finished
    instructions_perceptionComponents = [];
    instructions_perceptionComponents.push(text_43);
    instructions_perceptionComponents.push(key_resp_24);
    
    instructions_perceptionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_perceptionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_perception'-------
    // get current time
    t = instructions_perceptionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_43* updates
    if (t >= 0.0 && text_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_43.tStart = t;  // (not accounting for frame time here)
      text_43.frameNStart = frameN;  // exact frame index
      
      text_43.setAutoDraw(true);
    }

    
    // *key_resp_24* updates
    if (t >= 5 && key_resp_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_24.tStart = t;  // (not accounting for frame time here)
      key_resp_24.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_24.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_24.clearEvents(); });
    }

    if (key_resp_24.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_24.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_24_allKeys = _key_resp_24_allKeys.concat(theseKeys);
      if (_key_resp_24_allKeys.length > 0) {
        key_resp_24.keys = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].name;  // just the last key pressed
        key_resp_24.rt = _key_resp_24_allKeys[_key_resp_24_allKeys.length - 1].rt;
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
    instructions_perceptionComponents.forEach( function(thisComponent) {
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


function instructions_perceptionRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_perception'-------
    instructions_perceptionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_24.stop();
    // the Routine "instructions_perception" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var remindComponents;
function remindRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'remind'-------
    t = 0;
    remindClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    psychoJS.window.mouseVisible = false;
    
    // keep track of which components have finished
    remindComponents = [];
    remindComponents.push(text_18);
    remindComponents.push(key_resp_9);
    
    remindComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function remindRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'remind'-------
    // get current time
    t = remindClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
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
    remindComponents.forEach( function(thisComponent) {
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


function remindRoutineEnd() {
  return async function () {
    //------Ending Routine 'remind'-------
    remindComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_9.stop();
    // the Routine "remind" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stim_presented_perception;
var response_perceptionComponents;
function response_perceptionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'response_perception'-------
    t = 0;
    response_perceptionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp_perc
    gotValidClick = false; // until a click is received
    mouse_resp_perc.getPos();
    util.shuffle(angles);
    trial_angles = [angles[0]];
    err_total = 0;
    
    stim = original_imgs[i];
    
    stim_files = [original_imgs[i]];
    color_presented = HSVtoRGB(trial_angles[0] / 360);
    stim_presented_perception = stim_files[0]
    
    stim_presented = stim_files[0]
    block_type = "perception"
    //stim_presented = "object_stim/obj0.jpg"
    //trial_n = i;
    document.body.style.cursor='auto';
    
    
    perception_stim_presented.setImage(stim_presented);
    perception_color.setFillColor(new util.Color(color_presented));
    perception_color.setLineColor(new util.Color(color_presented));
    circle_resp_7.setSize(circle_size);
    perception_stim_response.setImage(stim_presented);
    dot_resp1_7.setSize(dot_size);
    // keep track of which components have finished
    response_perceptionComponents = [];
    response_perceptionComponents.push(mouse_resp_perc);
    response_perceptionComponents.push(perception_stim_presented);
    response_perceptionComponents.push(perception_color);
    response_perceptionComponents.push(circle_resp_7);
    response_perceptionComponents.push(perception_stim_response);
    response_perceptionComponents.push(perception_color_response);
    response_perceptionComponents.push(dot_resp1_7);
    response_perceptionComponents.push(fixation_3);
    
    response_perceptionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function response_perceptionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'response_perception'-------
    // get current time
    t = response_perceptionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_resp_perc* updates
    if (t >= (fix_time + 0.1) && mouse_resp_perc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_perc.tStart = t;  // (not accounting for frame time here)
      mouse_resp_perc.frameNStart = frameN;  // exact frame index
      
      mouse_resp_perc.status = PsychoJS.Status.STARTED;
      mouse_resp_perc.mouseClock.reset();
      prevButtonState = mouse_resp_perc.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_resp_perc.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_perc.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    mouse_x = mouse_resp_perc.getPos()[0];
    mouse_y = mouse_resp_perc.getPos()[1];
    adj_x = 0.25;
    adj_y = 0;
    //mouse_x = (mouse_x - (adj_x * 2));
    //mouse_y = (mouse_y - (adj_y * 2));
    mouse_x = (mouse_x - adj_x);
    mouse_y = (mouse_y - adj_y);
    //r = sqrt(mouse_x**2 + mouse_y**2)
    r = math.norm([mouse_x,mouse_y])
    current_pos = [mouse_x, mouse_y];
    cterm = [0, (- 50)];
    if ((r === 0)) {
        theta = 0;
    } else {
        if ((r !== 0)) {
            theta = Math.acos((math.dot(current_pos, cterm) / (r * (- 50))));
        }
    }
    if ((mouse_x < 0)) {
        theta = ((2 * pi) - theta);
    }
    curr_angle = Math.round((theta * (180 / pi)));
    dot_pos_resp = [(0.25 + ((circle_size[0] / 2) * Math.sin(theta))), (0 + ((circle_size[0] / 2) * Math.cos(theta)))];
    color_rgb = HSVtoRGB((curr_angle / 360));
    
    
    
    
    // *perception_stim_presented* updates
    if (t >= fix_time && perception_stim_presented.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perception_stim_presented.tStart = t;  // (not accounting for frame time here)
      perception_stim_presented.frameNStart = frameN;  // exact frame index
      
      perception_stim_presented.setAutoDraw(true);
    }

    
    // *perception_color* updates
    if (t >= fix_time && perception_color.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perception_color.tStart = t;  // (not accounting for frame time here)
      perception_color.frameNStart = frameN;  // exact frame index
      
      perception_color.setAutoDraw(true);
    }

    
    // *circle_resp_7* updates
    if (t >= fix_time && circle_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_resp_7.tStart = t;  // (not accounting for frame time here)
      circle_resp_7.frameNStart = frameN;  // exact frame index
      
      circle_resp_7.setAutoDraw(true);
    }

    
    // *perception_stim_response* updates
    if (t >= fix_time && perception_stim_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perception_stim_response.tStart = t;  // (not accounting for frame time here)
      perception_stim_response.frameNStart = frameN;  // exact frame index
      
      perception_stim_response.setAutoDraw(true);
    }

    
    // *perception_color_response* updates
    if (t >= (fix_time + 0.1) && perception_color_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perception_color_response.tStart = t;  // (not accounting for frame time here)
      perception_color_response.frameNStart = frameN;  // exact frame index
      
      perception_color_response.setAutoDraw(true);
    }

    
    if (perception_color_response.status === PsychoJS.Status.STARTED){ // only update if being drawn
      perception_color_response.setFillColor(new util.Color(color_rgb), false);
      perception_color_response.setLineColor(new util.Color(color_rgb), false);
    }
    
    // *dot_resp1_7* updates
    if (t >= (fix_time + 0.1) && dot_resp1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp1_7.tStart = t;  // (not accounting for frame time here)
      dot_resp1_7.frameNStart = frameN;  // exact frame index
      
      dot_resp1_7.setAutoDraw(true);
    }

    
    if (dot_resp1_7.status === PsychoJS.Status.STARTED){ // only update if being drawn
      dot_resp1_7.setPos(dot_pos_resp, false);
    }
    
    // *fixation_3* updates
    if (t >= 0.0 && fixation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_3.tStart = t;  // (not accounting for frame time here)
      fixation_3.frameNStart = frameN;  // exact frame index
      
      fixation_3.setAutoDraw(true);
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
    response_perceptionComponents.forEach( function(thisComponent) {
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


function response_perceptionRoutineEnd() {
  return async function () {
    //------Ending Routine 'response_perception'-------
    response_perceptionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_resp_perc.getPos();
    _mouseButtons = mouse_resp_perc.getPressed();
    psychoJS.experiment.addData('mouse_resp_perc.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_resp_perc.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_resp_perc.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_resp_perc.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_resp_perc.rightButton', _mouseButtons[2]);
    psychoJS.experiment.addData("disp_angle", trial_angles[0]);
    psychoJS.experiment.addData("resp_angle", curr_angle);
    psychoJS.experiment.addData("block_n", block_n);
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("stim_presented", stim_presented);
    psychoJS.experiment.addData("stim_file", stim_files[0]);
    psychoJS.experiment.addData("block_type", "perception");
    
    err_angle = (((trial_angles[0] - curr_angle) + 360) % 360);
    if ((err_angle > 180)) {
        err_angle = (360 - err_angle);
    }
    psychoJS.experiment.addData("err_angle", err_angle);
    if ((err_angle === 0)) {
        points = 15;
    } else {
        if ((err_angle <= 5)) {
            points = 10;
        } else {
            if ((err_angle <= 10)) {
                points = 5;
            } else {
                if ((err_angle <= 30)) {
                    points = 2;
                } else {
                    points = 0;
                }
            }
        }
    }
    points_total = (points_total + points);
    psychoJS.experiment.addData("points", points);
    memory_items.push([stim_files[0], trial_angles[0], 0, delay_1, "perception"]);
    i = (i + 1);
    trial_n = (trial_n + 1);
    parity_i = 0;
    util.shuffle(parity_nums);
    
    // the Routine "response_perception" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
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
    block_message = "You have reached the end of block " + block_n + " of " + 2;  
    
    text_block_end.setText(block_message);
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    end_blockComponents = [];
    end_blockComponents.push(text_block_end);
    end_blockComponents.push(text_19);
    end_blockComponents.push(key_resp_8);
    
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

    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
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
    
    key_resp_8.stop();
    // the Routine "end_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_21_allKeys;
var wm_instructComponents;
function wm_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'wm_instruct'-------
    t = 0;
    wm_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_21.keys = undefined;
    key_resp_21.rt = undefined;
    _key_resp_21_allKeys = [];
    block_n = 1;
    trial_n = 1;
    
    // keep track of which components have finished
    wm_instructComponents = [];
    wm_instructComponents.push(text_63);
    wm_instructComponents.push(key_resp_21);
    
    wm_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function wm_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'wm_instruct'-------
    // get current time
    t = wm_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_63* updates
    if (t >= 0.0 && text_63.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_63.tStart = t;  // (not accounting for frame time here)
      text_63.frameNStart = frameN;  // exact frame index
      
      text_63.setAutoDraw(true);
    }

    
    // *key_resp_21* updates
    if (t >= 5 && key_resp_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_21.tStart = t;  // (not accounting for frame time here)
      key_resp_21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.clearEvents(); });
    }

    if (key_resp_21.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_21.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_21_allKeys = _key_resp_21_allKeys.concat(theseKeys);
      if (_key_resp_21_allKeys.length > 0) {
        key_resp_21.keys = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].name;  // just the last key pressed
        key_resp_21.rt = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].rt;
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
    wm_instructComponents.forEach( function(thisComponent) {
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


function wm_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'wm_instruct'-------
    wm_instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_21.stop();
    // the Routine "wm_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var question_instructComponents;
function question_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'question_instruct'-------
    t = 0;
    question_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    question_instructComponents = [];
    question_instructComponents.push(text_24);
    question_instructComponents.push(key_resp_2);
    
    question_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function question_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'question_instruct'-------
    // get current time
    t = question_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
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
    question_instructComponents.forEach( function(thisComponent) {
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


function question_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'question_instruct'-------
    question_instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
    // the Routine "question_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_15_allKeys;
var age_qComponents;
function age_qRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'age_q'-------
    t = 0;
    age_qClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    age_resp.setText('');
    age_resp.refresh();
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    age_qComponents = [];
    age_qComponents.push(text_61);
    age_qComponents.push(age_resp);
    age_qComponents.push(text_89);
    age_qComponents.push(key_resp_15);
    
    age_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function age_qRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'age_q'-------
    // get current time
    t = age_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_61* updates
    if (t >= 0.0 && text_61.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_61.tStart = t;  // (not accounting for frame time here)
      text_61.frameNStart = frameN;  // exact frame index
      
      text_61.setAutoDraw(true);
    }

    
    // *age_resp* updates
    if (t >= 0.0 && age_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_resp.tStart = t;  // (not accounting for frame time here)
      age_resp.frameNStart = frameN;  // exact frame index
      
      age_resp.setAutoDraw(true);
    }

    
    // *text_89* updates
    if (t >= 0.0 && text_89.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_89.tStart = t;  // (not accounting for frame time here)
      text_89.frameNStart = frameN;  // exact frame index
      
      text_89.setAutoDraw(true);
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
    age_qComponents.forEach( function(thisComponent) {
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


function age_qRoutineEnd() {
  return async function () {
    //------Ending Routine 'age_q'-------
    age_qComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('age_resp.text',age_resp.text)
    key_resp_15.stop();
    // the Routine "age_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _gender_resp_allKeys;
var gender_qComponents;
function gender_qRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gender_q'-------
    t = 0;
    gender_qClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    gender_resp.keys = undefined;
    gender_resp.rt = undefined;
    _gender_resp_allKeys = [];
    // keep track of which components have finished
    gender_qComponents = [];
    gender_qComponents.push(text_83);
    gender_qComponents.push(text_84);
    gender_qComponents.push(text_90);
    gender_qComponents.push(text_85);
    gender_qComponents.push(text_91);
    gender_qComponents.push(text_86);
    gender_qComponents.push(text_92);
    gender_qComponents.push(text_87);
    gender_qComponents.push(text_93);
    gender_qComponents.push(gender_resp);
    
    gender_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function gender_qRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gender_q'-------
    // get current time
    t = gender_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_83* updates
    if (t >= 0.0 && text_83.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_83.tStart = t;  // (not accounting for frame time here)
      text_83.frameNStart = frameN;  // exact frame index
      
      text_83.setAutoDraw(true);
    }

    
    // *text_84* updates
    if (t >= 0.0 && text_84.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_84.tStart = t;  // (not accounting for frame time here)
      text_84.frameNStart = frameN;  // exact frame index
      
      text_84.setAutoDraw(true);
    }

    
    // *text_90* updates
    if (t >= 0.0 && text_90.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_90.tStart = t;  // (not accounting for frame time here)
      text_90.frameNStart = frameN;  // exact frame index
      
      text_90.setAutoDraw(true);
    }

    
    // *text_85* updates
    if (t >= 0.0 && text_85.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_85.tStart = t;  // (not accounting for frame time here)
      text_85.frameNStart = frameN;  // exact frame index
      
      text_85.setAutoDraw(true);
    }

    
    // *text_91* updates
    if (t >= 0.0 && text_91.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_91.tStart = t;  // (not accounting for frame time here)
      text_91.frameNStart = frameN;  // exact frame index
      
      text_91.setAutoDraw(true);
    }

    
    // *text_86* updates
    if (t >= 0.0 && text_86.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_86.tStart = t;  // (not accounting for frame time here)
      text_86.frameNStart = frameN;  // exact frame index
      
      text_86.setAutoDraw(true);
    }

    
    // *text_92* updates
    if (t >= 0.0 && text_92.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_92.tStart = t;  // (not accounting for frame time here)
      text_92.frameNStart = frameN;  // exact frame index
      
      text_92.setAutoDraw(true);
    }

    
    // *text_87* updates
    if (t >= 0.0 && text_87.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_87.tStart = t;  // (not accounting for frame time here)
      text_87.frameNStart = frameN;  // exact frame index
      
      text_87.setAutoDraw(true);
    }

    
    // *text_93* updates
    if (t >= 0.0 && text_93.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_93.tStart = t;  // (not accounting for frame time here)
      text_93.frameNStart = frameN;  // exact frame index
      
      text_93.setAutoDraw(true);
    }

    
    // *gender_resp* updates
    if (t >= 0.0 && gender_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_resp.tStart = t;  // (not accounting for frame time here)
      gender_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { gender_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { gender_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { gender_resp.clearEvents(); });
    }

    if (gender_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = gender_resp.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _gender_resp_allKeys = _gender_resp_allKeys.concat(theseKeys);
      if (_gender_resp_allKeys.length > 0) {
        gender_resp.keys = _gender_resp_allKeys[_gender_resp_allKeys.length - 1].name;  // just the last key pressed
        gender_resp.rt = _gender_resp_allKeys[_gender_resp_allKeys.length - 1].rt;
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
    gender_qComponents.forEach( function(thisComponent) {
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


function gender_qRoutineEnd() {
  return async function () {
    //------Ending Routine 'gender_q'-------
    gender_qComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(gender_resp.corr, level);
    }
    psychoJS.experiment.addData('gender_resp.keys', gender_resp.keys);
    if (typeof gender_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('gender_resp.rt', gender_resp.rt);
        routineTimer.reset();
        }
    
    gender_resp.stop();
    // the Routine "gender_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_race_allKeys;
var _key_resp_23_allKeys;
var race_qComponents;
function race_qRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'race_q'-------
    t = 0;
    race_qClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_race.keys = undefined;
    key_resp_race.rt = undefined;
    _key_resp_race_allKeys = [];
    key_resp_23.keys = undefined;
    key_resp_23.rt = undefined;
    _key_resp_23_allKeys = [];
    // keep track of which components have finished
    race_qComponents = [];
    race_qComponents.push(text_62);
    race_qComponents.push(text_64);
    race_qComponents.push(text_74);
    race_qComponents.push(text_65);
    race_qComponents.push(text_75);
    race_qComponents.push(text_66);
    race_qComponents.push(text_76);
    race_qComponents.push(text_67);
    race_qComponents.push(text_77);
    race_qComponents.push(text_68);
    race_qComponents.push(text_78);
    race_qComponents.push(text_69);
    race_qComponents.push(text_79);
    race_qComponents.push(text_70);
    race_qComponents.push(text_80);
    race_qComponents.push(text_71);
    race_qComponents.push(text_81);
    race_qComponents.push(text_72);
    race_qComponents.push(text_82);
    race_qComponents.push(key_resp_race);
    race_qComponents.push(key_resp_23);
    race_qComponents.push(text_73);
    
    race_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function race_qRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'race_q'-------
    // get current time
    t = race_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_62* updates
    if (t >= 0.0 && text_62.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_62.tStart = t;  // (not accounting for frame time here)
      text_62.frameNStart = frameN;  // exact frame index
      
      text_62.setAutoDraw(true);
    }

    
    // *text_64* updates
    if (t >= 0.0 && text_64.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_64.tStart = t;  // (not accounting for frame time here)
      text_64.frameNStart = frameN;  // exact frame index
      
      text_64.setAutoDraw(true);
    }

    
    // *text_74* updates
    if (t >= 0.0 && text_74.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_74.tStart = t;  // (not accounting for frame time here)
      text_74.frameNStart = frameN;  // exact frame index
      
      text_74.setAutoDraw(true);
    }

    
    // *text_65* updates
    if (t >= 0.0 && text_65.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_65.tStart = t;  // (not accounting for frame time here)
      text_65.frameNStart = frameN;  // exact frame index
      
      text_65.setAutoDraw(true);
    }

    
    // *text_75* updates
    if (t >= 0.0 && text_75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_75.tStart = t;  // (not accounting for frame time here)
      text_75.frameNStart = frameN;  // exact frame index
      
      text_75.setAutoDraw(true);
    }

    
    // *text_66* updates
    if (t >= 0.0 && text_66.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_66.tStart = t;  // (not accounting for frame time here)
      text_66.frameNStart = frameN;  // exact frame index
      
      text_66.setAutoDraw(true);
    }

    
    // *text_76* updates
    if (t >= 0.0 && text_76.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_76.tStart = t;  // (not accounting for frame time here)
      text_76.frameNStart = frameN;  // exact frame index
      
      text_76.setAutoDraw(true);
    }

    
    // *text_67* updates
    if (t >= 0.0 && text_67.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_67.tStart = t;  // (not accounting for frame time here)
      text_67.frameNStart = frameN;  // exact frame index
      
      text_67.setAutoDraw(true);
    }

    
    // *text_77* updates
    if (t >= 0.0 && text_77.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_77.tStart = t;  // (not accounting for frame time here)
      text_77.frameNStart = frameN;  // exact frame index
      
      text_77.setAutoDraw(true);
    }

    
    // *text_68* updates
    if (t >= 0.0 && text_68.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_68.tStart = t;  // (not accounting for frame time here)
      text_68.frameNStart = frameN;  // exact frame index
      
      text_68.setAutoDraw(true);
    }

    
    // *text_78* updates
    if (t >= 0.0 && text_78.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_78.tStart = t;  // (not accounting for frame time here)
      text_78.frameNStart = frameN;  // exact frame index
      
      text_78.setAutoDraw(true);
    }

    
    // *text_69* updates
    if (t >= 0.0 && text_69.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_69.tStart = t;  // (not accounting for frame time here)
      text_69.frameNStart = frameN;  // exact frame index
      
      text_69.setAutoDraw(true);
    }

    
    // *text_79* updates
    if (t >= 0.0 && text_79.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_79.tStart = t;  // (not accounting for frame time here)
      text_79.frameNStart = frameN;  // exact frame index
      
      text_79.setAutoDraw(true);
    }

    
    // *text_70* updates
    if (t >= 0.0 && text_70.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_70.tStart = t;  // (not accounting for frame time here)
      text_70.frameNStart = frameN;  // exact frame index
      
      text_70.setAutoDraw(true);
    }

    
    // *text_80* updates
    if (t >= 0.0 && text_80.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_80.tStart = t;  // (not accounting for frame time here)
      text_80.frameNStart = frameN;  // exact frame index
      
      text_80.setAutoDraw(true);
    }

    
    // *text_71* updates
    if (t >= 0.0 && text_71.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_71.tStart = t;  // (not accounting for frame time here)
      text_71.frameNStart = frameN;  // exact frame index
      
      text_71.setAutoDraw(true);
    }

    
    // *text_81* updates
    if (t >= 0.0 && text_81.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_81.tStart = t;  // (not accounting for frame time here)
      text_81.frameNStart = frameN;  // exact frame index
      
      text_81.setAutoDraw(true);
    }

    
    // *text_72* updates
    if (t >= 0.0 && text_72.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_72.tStart = t;  // (not accounting for frame time here)
      text_72.frameNStart = frameN;  // exact frame index
      
      text_72.setAutoDraw(true);
    }

    
    // *text_82* updates
    if (t >= 0.0 && text_82.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_82.tStart = t;  // (not accounting for frame time here)
      text_82.frameNStart = frameN;  // exact frame index
      
      text_82.setAutoDraw(true);
    }

    
    // *key_resp_race* updates
    if (t >= 0.0 && key_resp_race.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_race.tStart = t;  // (not accounting for frame time here)
      key_resp_race.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_race.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_race.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_race.clearEvents(); });
    }

    if (key_resp_race.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_race.getKeys({keyList: ['1', '2', '3', '4', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_race_allKeys = _key_resp_race_allKeys.concat(theseKeys);
      if (_key_resp_race_allKeys.length > 0) {
        key_resp_race.keys = _key_resp_race_allKeys.map((key) => key.name);  // storing all keys
        key_resp_race.rt = _key_resp_race_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *key_resp_23* updates
    if (t >= 0.0 && key_resp_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_23.tStart = t;  // (not accounting for frame time here)
      key_resp_23.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_23.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_23.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_23.clearEvents(); });
    }

    if (key_resp_23.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_23.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_23_allKeys = _key_resp_23_allKeys.concat(theseKeys);
      if (_key_resp_23_allKeys.length > 0) {
        key_resp_23.keys = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].name;  // just the last key pressed
        key_resp_23.rt = _key_resp_23_allKeys[_key_resp_23_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_73* updates
    if (t >= 0.0 && text_73.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_73.tStart = t;  // (not accounting for frame time here)
      text_73.frameNStart = frameN;  // exact frame index
      
      text_73.setAutoDraw(true);
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
    race_qComponents.forEach( function(thisComponent) {
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


function race_qRoutineEnd() {
  return async function () {
    //------Ending Routine 'race_q'-------
    race_qComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_race.corr, level);
    }
    psychoJS.experiment.addData('key_resp_race.keys', key_resp_race.keys);
    if (typeof key_resp_race.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_race.rt', key_resp_race.rt);
        }
    
    key_resp_race.stop();
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_23.corr, level);
    }
    psychoJS.experiment.addData('key_resp_23.keys', key_resp_23.keys);
    if (typeof key_resp_23.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_23.rt', key_resp_23.rt);
        routineTimer.reset();
        }
    
    key_resp_23.stop();
    // the Routine "race_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _hand_resp_allKeys;
var hand_qComponents;
function hand_qRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'hand_q'-------
    t = 0;
    hand_qClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    hand_resp.keys = undefined;
    hand_resp.rt = undefined;
    _hand_resp_allKeys = [];
    // keep track of which components have finished
    hand_qComponents = [];
    hand_qComponents.push(text_94);
    hand_qComponents.push(text_97);
    hand_qComponents.push(text_98);
    hand_qComponents.push(text_99);
    hand_qComponents.push(text_100);
    hand_qComponents.push(hand_resp);
    
    hand_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function hand_qRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'hand_q'-------
    // get current time
    t = hand_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_94* updates
    if (t >= 0.0 && text_94.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_94.tStart = t;  // (not accounting for frame time here)
      text_94.frameNStart = frameN;  // exact frame index
      
      text_94.setAutoDraw(true);
    }

    
    // *text_97* updates
    if (t >= 0.0 && text_97.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_97.tStart = t;  // (not accounting for frame time here)
      text_97.frameNStart = frameN;  // exact frame index
      
      text_97.setAutoDraw(true);
    }

    
    // *text_98* updates
    if (t >= 0.0 && text_98.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_98.tStart = t;  // (not accounting for frame time here)
      text_98.frameNStart = frameN;  // exact frame index
      
      text_98.setAutoDraw(true);
    }

    
    // *text_99* updates
    if (t >= 0.0 && text_99.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_99.tStart = t;  // (not accounting for frame time here)
      text_99.frameNStart = frameN;  // exact frame index
      
      text_99.setAutoDraw(true);
    }

    
    // *text_100* updates
    if (t >= 0.0 && text_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100.tStart = t;  // (not accounting for frame time here)
      text_100.frameNStart = frameN;  // exact frame index
      
      text_100.setAutoDraw(true);
    }

    
    // *hand_resp* updates
    if (t >= 0.0 && hand_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hand_resp.tStart = t;  // (not accounting for frame time here)
      hand_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { hand_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { hand_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { hand_resp.clearEvents(); });
    }

    if (hand_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = hand_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _hand_resp_allKeys = _hand_resp_allKeys.concat(theseKeys);
      if (_hand_resp_allKeys.length > 0) {
        hand_resp.keys = _hand_resp_allKeys[_hand_resp_allKeys.length - 1].name;  // just the last key pressed
        hand_resp.rt = _hand_resp_allKeys[_hand_resp_allKeys.length - 1].rt;
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
    hand_qComponents.forEach( function(thisComponent) {
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


function hand_qRoutineEnd() {
  return async function () {
    //------Ending Routine 'hand_q'-------
    hand_qComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(hand_resp.corr, level);
    }
    psychoJS.experiment.addData('hand_resp.keys', hand_resp.keys);
    if (typeof hand_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('hand_resp.rt', hand_resp.rt);
        routineTimer.reset();
        }
    
    hand_resp.stop();
    // the Routine "hand_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _color_resp_allKeys;
var color_qComponents;
function color_qRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'color_q'-------
    t = 0;
    color_qClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    color_resp.keys = undefined;
    color_resp.rt = undefined;
    _color_resp_allKeys = [];
    // keep track of which components have finished
    color_qComponents = [];
    color_qComponents.push(text_95);
    color_qComponents.push(text_101);
    color_qComponents.push(text_102);
    color_qComponents.push(text_104);
    color_qComponents.push(text_105);
    color_qComponents.push(color_resp);
    
    color_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function color_qRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'color_q'-------
    // get current time
    t = color_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_95* updates
    if (t >= 0.0 && text_95.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_95.tStart = t;  // (not accounting for frame time here)
      text_95.frameNStart = frameN;  // exact frame index
      
      text_95.setAutoDraw(true);
    }

    
    // *text_101* updates
    if (t >= 0.0 && text_101.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_101.tStart = t;  // (not accounting for frame time here)
      text_101.frameNStart = frameN;  // exact frame index
      
      text_101.setAutoDraw(true);
    }

    
    // *text_102* updates
    if (t >= 0.0 && text_102.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_102.tStart = t;  // (not accounting for frame time here)
      text_102.frameNStart = frameN;  // exact frame index
      
      text_102.setAutoDraw(true);
    }

    
    // *text_104* updates
    if (t >= 0.0 && text_104.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_104.tStart = t;  // (not accounting for frame time here)
      text_104.frameNStart = frameN;  // exact frame index
      
      text_104.setAutoDraw(true);
    }

    
    // *text_105* updates
    if (t >= 0.0 && text_105.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_105.tStart = t;  // (not accounting for frame time here)
      text_105.frameNStart = frameN;  // exact frame index
      
      text_105.setAutoDraw(true);
    }

    
    // *color_resp* updates
    if (t >= 0.0 && color_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      color_resp.tStart = t;  // (not accounting for frame time here)
      color_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { color_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { color_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { color_resp.clearEvents(); });
    }

    if (color_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = color_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _color_resp_allKeys = _color_resp_allKeys.concat(theseKeys);
      if (_color_resp_allKeys.length > 0) {
        color_resp.keys = _color_resp_allKeys[_color_resp_allKeys.length - 1].name;  // just the last key pressed
        color_resp.rt = _color_resp_allKeys[_color_resp_allKeys.length - 1].rt;
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
    color_qComponents.forEach( function(thisComponent) {
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


function color_qRoutineEnd() {
  return async function () {
    //------Ending Routine 'color_q'-------
    color_qComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(color_resp.corr, level);
    }
    psychoJS.experiment.addData('color_resp.keys', color_resp.keys);
    if (typeof color_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('color_resp.rt', color_resp.rt);
        routineTimer.reset();
        }
    
    color_resp.stop();
    // the Routine "color_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _english_resp_allKeys;
var english_qComponents;
function english_qRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'english_q'-------
    t = 0;
    english_qClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    english_resp.keys = undefined;
    english_resp.rt = undefined;
    _english_resp_allKeys = [];
    // keep track of which components have finished
    english_qComponents = [];
    english_qComponents.push(text_96);
    english_qComponents.push(text_107);
    english_qComponents.push(text_108);
    english_qComponents.push(text_109);
    english_qComponents.push(text_110);
    english_qComponents.push(english_resp);
    
    english_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function english_qRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'english_q'-------
    // get current time
    t = english_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_96* updates
    if (t >= 0.0 && text_96.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_96.tStart = t;  // (not accounting for frame time here)
      text_96.frameNStart = frameN;  // exact frame index
      
      text_96.setAutoDraw(true);
    }

    
    // *text_107* updates
    if (t >= 0.0 && text_107.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_107.tStart = t;  // (not accounting for frame time here)
      text_107.frameNStart = frameN;  // exact frame index
      
      text_107.setAutoDraw(true);
    }

    
    // *text_108* updates
    if (t >= 0.0 && text_108.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_108.tStart = t;  // (not accounting for frame time here)
      text_108.frameNStart = frameN;  // exact frame index
      
      text_108.setAutoDraw(true);
    }

    
    // *text_109* updates
    if (t >= 0.0 && text_109.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_109.tStart = t;  // (not accounting for frame time here)
      text_109.frameNStart = frameN;  // exact frame index
      
      text_109.setAutoDraw(true);
    }

    
    // *text_110* updates
    if (t >= 0.0 && text_110.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_110.tStart = t;  // (not accounting for frame time here)
      text_110.frameNStart = frameN;  // exact frame index
      
      text_110.setAutoDraw(true);
    }

    
    // *english_resp* updates
    if (t >= 0.0 && english_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      english_resp.tStart = t;  // (not accounting for frame time here)
      english_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { english_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { english_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { english_resp.clearEvents(); });
    }

    if (english_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = english_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _english_resp_allKeys = _english_resp_allKeys.concat(theseKeys);
      if (_english_resp_allKeys.length > 0) {
        english_resp.keys = _english_resp_allKeys[_english_resp_allKeys.length - 1].name;  // just the last key pressed
        english_resp.rt = _english_resp_allKeys[_english_resp_allKeys.length - 1].rt;
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
    english_qComponents.forEach( function(thisComponent) {
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


function english_qRoutineEnd() {
  return async function () {
    //------Ending Routine 'english_q'-------
    english_qComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(english_resp.corr, level);
    }
    psychoJS.experiment.addData('english_resp.keys', english_resp.keys);
    if (typeof english_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('english_resp.rt', english_resp.rt);
        routineTimer.reset();
        }
    
    english_resp.stop();
    // the Routine "english_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_22_allKeys;
var dass_instructComponents;
function dass_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'dass_instruct'-------
    t = 0;
    dass_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_22.keys = undefined;
    key_resp_22.rt = undefined;
    _key_resp_22_allKeys = [];
    // keep track of which components have finished
    dass_instructComponents = [];
    dass_instructComponents.push(text_115);
    dass_instructComponents.push(key_resp_22);
    
    dass_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function dass_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'dass_instruct'-------
    // get current time
    t = dass_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_115* updates
    if (t >= 0.0 && text_115.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_115.tStart = t;  // (not accounting for frame time here)
      text_115.frameNStart = frameN;  // exact frame index
      
      text_115.setAutoDraw(true);
    }

    
    // *key_resp_22* updates
    if (t >= 0.0 && key_resp_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_22.tStart = t;  // (not accounting for frame time here)
      key_resp_22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_22.clearEvents(); });
    }

    if (key_resp_22.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_22.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_22_allKeys = _key_resp_22_allKeys.concat(theseKeys);
      if (_key_resp_22_allKeys.length > 0) {
        key_resp_22.keys = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].name;  // just the last key pressed
        key_resp_22.rt = _key_resp_22_allKeys[_key_resp_22_allKeys.length - 1].rt;
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
    dass_instructComponents.forEach( function(thisComponent) {
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


function dass_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'dass_instruct'-------
    dass_instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_22.stop();
    // the Routine "dass_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_dass_allKeys;
var dassComponents;
function dassRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'dass'-------
    t = 0;
    dassClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_30.setText(DASS_item);
    key_resp_dass.keys = undefined;
    key_resp_dass.rt = undefined;
    _key_resp_dass_allKeys = [];
    // keep track of which components have finished
    dassComponents = [];
    dassComponents.push(text_30);
    dassComponents.push(text_34);
    dassComponents.push(text_35);
    dassComponents.push(text_36);
    dassComponents.push(text_37);
    dassComponents.push(text_38);
    dassComponents.push(text_39);
    dassComponents.push(text_40);
    dassComponents.push(text_41);
    dassComponents.push(key_resp_dass);
    dassComponents.push(text_42);
    
    dassComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function dassRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'dass'-------
    // get current time
    t = dassClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_30* updates
    if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }

    
    // *text_34* updates
    if (t >= 0.0 && text_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_34.tStart = t;  // (not accounting for frame time here)
      text_34.frameNStart = frameN;  // exact frame index
      
      text_34.setAutoDraw(true);
    }

    
    // *text_35* updates
    if (t >= 0.0 && text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_35.tStart = t;  // (not accounting for frame time here)
      text_35.frameNStart = frameN;  // exact frame index
      
      text_35.setAutoDraw(true);
    }

    
    // *text_36* updates
    if (t >= 0.0 && text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_36.tStart = t;  // (not accounting for frame time here)
      text_36.frameNStart = frameN;  // exact frame index
      
      text_36.setAutoDraw(true);
    }

    
    // *text_37* updates
    if (t >= 0.0 && text_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_37.tStart = t;  // (not accounting for frame time here)
      text_37.frameNStart = frameN;  // exact frame index
      
      text_37.setAutoDraw(true);
    }

    
    // *text_38* updates
    if (t >= 0.0 && text_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_38.tStart = t;  // (not accounting for frame time here)
      text_38.frameNStart = frameN;  // exact frame index
      
      text_38.setAutoDraw(true);
    }

    
    // *text_39* updates
    if (t >= 0.0 && text_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_39.tStart = t;  // (not accounting for frame time here)
      text_39.frameNStart = frameN;  // exact frame index
      
      text_39.setAutoDraw(true);
    }

    
    // *text_40* updates
    if (t >= 0.0 && text_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_40.tStart = t;  // (not accounting for frame time here)
      text_40.frameNStart = frameN;  // exact frame index
      
      text_40.setAutoDraw(true);
    }

    
    // *text_41* updates
    if (t >= 0.0 && text_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_41.tStart = t;  // (not accounting for frame time here)
      text_41.frameNStart = frameN;  // exact frame index
      
      text_41.setAutoDraw(true);
    }

    
    // *key_resp_dass* updates
    if (t >= 0.0 && key_resp_dass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_dass.tStart = t;  // (not accounting for frame time here)
      key_resp_dass.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_dass.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dass.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dass.clearEvents(); });
    }

    if (key_resp_dass.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_dass.getKeys({keyList: ['0', '1', '2', '3'], waitRelease: false});
      _key_resp_dass_allKeys = _key_resp_dass_allKeys.concat(theseKeys);
      if (_key_resp_dass_allKeys.length > 0) {
        key_resp_dass.keys = _key_resp_dass_allKeys[_key_resp_dass_allKeys.length - 1].name;  // just the last key pressed
        key_resp_dass.rt = _key_resp_dass_allKeys[_key_resp_dass_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_42* updates
    if (t >= 0.0 && text_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_42.tStart = t;  // (not accounting for frame time here)
      text_42.frameNStart = frameN;  // exact frame index
      
      text_42.setAutoDraw(true);
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
    dassComponents.forEach( function(thisComponent) {
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


function dassRoutineEnd() {
  return async function () {
    //------Ending Routine 'dass'-------
    dassComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_dass.corr, level);
    }
    psychoJS.experiment.addData('key_resp_dass.keys', key_resp_dass.keys);
    if (typeof key_resp_dass.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_dass.rt', key_resp_dass.rt);
        routineTimer.reset();
        }
    
    key_resp_dass.stop();
    // the Routine "dass" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ltm_trials_nreps;
var _key_resp_11_allKeys;
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
    util.shuffle(memory_items);
    i = 0;
    ltm_trials_nreps = memory_items.length;
    
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    instructions_ltmComponents = [];
    instructions_ltmComponents.push(text_21);
    instructions_ltmComponents.push(key_resp_11);
    
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
    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }

    
    // *key_resp_11* updates
    if (t >= 5 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
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
    key_resp_11.stop();
    // the Routine "instructions_ltm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stim_presented_ltm;
var original_color;
var ltm_response_memoryComponents;
function ltm_response_memoryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ltm_response_memory'-------
    t = 0;
    ltm_response_memoryClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_resp_ltm
    gotValidClick = false; // until a click is received
    
    err_total = 0;
    document.body.style.cursor='auto';
    
    
    //stim_presented = "object_stim/obj0.jpg"
    trial_n = i;
    
    //stim_presented = memory_items[i][0].split('object_stim/')[1].split('.jpg')[0]
    stim_presented_ltm = memory_items[i][0]
    
    
    original_color = HSVtoRGB(memory_items[i][1]/360)
    
    
    circle_resp_11.setSize(circle_size);
    ltm_stim_response.setImage(stim_presented_ltm);
    dot_resp1_11.setSize(dot_size);
    // keep track of which components have finished
    ltm_response_memoryComponents = [];
    ltm_response_memoryComponents.push(mouse_resp_ltm);
    ltm_response_memoryComponents.push(circle_resp_11);
    ltm_response_memoryComponents.push(ltm_stim_response);
    ltm_response_memoryComponents.push(ltm_color_response);
    ltm_response_memoryComponents.push(dot_resp1_11);
    ltm_response_memoryComponents.push(fixation_4);
    
    ltm_response_memoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ltm_response_memoryRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ltm_response_memory'-------
    // get current time
    t = ltm_response_memoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_resp_ltm* updates
    if (t >= (fix_time + 0.25) && mouse_resp_ltm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_resp_ltm.tStart = t;  // (not accounting for frame time here)
      mouse_resp_ltm.frameNStart = frameN;  // exact frame index
      
      mouse_resp_ltm.status = PsychoJS.Status.STARTED;
      mouse_resp_ltm.mouseClock.reset();
      prevButtonState = mouse_resp_ltm.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_resp_ltm.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_resp_ltm.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    mouse_x = mouse_resp_ltm.getPos()[0];
    mouse_y = mouse_resp_ltm.getPos()[1];
    adj_x = 0;
    adj_y = 0;
    //mouse_x = (mouse_x - (adj_x * 2));
    //mouse_y = (mouse_y - (adj_y * 2));
    mouse_x = (mouse_x - adj_x);
    mouse_y = (mouse_y - adj_y);
    //r = sqrt(mouse_x**2 + mouse_y**2)
    r = math.norm([mouse_x,mouse_y])
    current_pos = [mouse_x, mouse_y];
    cterm = [0, (- 50)];
    if ((r === 0)) {
        theta = 0;
    } else {
        if ((r !== 0)) {
            theta = Math.acos((math.dot(current_pos, cterm) / (r * (- 50))));
        }
    }
    if ((mouse_x < 0)) {
        theta = ((2 * pi) - theta);
    }
    curr_angle = Math.round((theta * (180 / pi)));
    dot_pos_resp = [(0 + ((circle_size[0] / 2) * Math.sin(theta))), (0 + ((circle_size[0] / 2) * Math.cos(theta)))];
    color_rgb = HSVtoRGB((curr_angle / 360));
    
    
    
    
    // *circle_resp_11* updates
    if (t >= fix_time && circle_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_resp_11.tStart = t;  // (not accounting for frame time here)
      circle_resp_11.frameNStart = frameN;  // exact frame index
      
      circle_resp_11.setAutoDraw(true);
    }

    
    // *ltm_stim_response* updates
    if (t >= fix_time && ltm_stim_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ltm_stim_response.tStart = t;  // (not accounting for frame time here)
      ltm_stim_response.frameNStart = frameN;  // exact frame index
      
      ltm_stim_response.setAutoDraw(true);
    }

    
    // *ltm_color_response* updates
    if (t >= (fix_time + 0.25) && ltm_color_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ltm_color_response.tStart = t;  // (not accounting for frame time here)
      ltm_color_response.frameNStart = frameN;  // exact frame index
      
      ltm_color_response.setAutoDraw(true);
    }

    
    if (ltm_color_response.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ltm_color_response.setFillColor(new util.Color(color_rgb), false);
      ltm_color_response.setOpacity(0.5, false);
      ltm_color_response.setLineColor(new util.Color(color_rgb), false);
    }
    
    // *dot_resp1_11* updates
    if (t >= (fix_time + 0.25) && dot_resp1_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp1_11.tStart = t;  // (not accounting for frame time here)
      dot_resp1_11.frameNStart = frameN;  // exact frame index
      
      dot_resp1_11.setAutoDraw(true);
    }

    
    if (dot_resp1_11.status === PsychoJS.Status.STARTED){ // only update if being drawn
      dot_resp1_11.setPos(dot_pos_resp, false);
    }
    
    // *fixation_4* updates
    if (t >= 0.0 && fixation_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_4.tStart = t;  // (not accounting for frame time here)
      fixation_4.frameNStart = frameN;  // exact frame index
      
      fixation_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + fix_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_4.setAutoDraw(false);
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
    ltm_response_memoryComponents.forEach( function(thisComponent) {
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


function ltm_response_memoryRoutineEnd() {
  return async function () {
    //------Ending Routine 'ltm_response_memory'-------
    ltm_response_memoryComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_resp_ltm.getPos();
    _mouseButtons = mouse_resp_ltm.getPressed();
    psychoJS.experiment.addData('mouse_resp_ltm.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_resp_ltm.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_resp_ltm.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_resp_ltm.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_resp_ltm.rightButton', _mouseButtons[2]);
    psychoJS.experiment.addData("disp_angle_ltm", memory_items[i][1]);
    psychoJS.experiment.addData("resp_angle_ltm", curr_angle);
    psychoJS.experiment.addData("trial_n", trial_n);
    psychoJS.experiment.addData("focus_item", memory_items[i][2]);
    psychoJS.experiment.addData("stim_presented_ltm", stim_presented_ltm);
    psychoJS.experiment.addData("stim_file", memory_items[i][0]);
    psychoJS.experiment.addData("delay_1", memory_items[i][3]);
    psychoJS.experiment.addData("presented_block_type", memory_items[i][4]);
    err_angle = (((memory_items[i][1] - curr_angle) + 360) % 360);
    if ((err_angle > 180)) {
        err_angle = (360 - err_angle);
    }
    psychoJS.experiment.addData("err_angle_ltm", err_angle);
    if ((err_angle === 0)) {
        points = 15;
    } else {
        if ((err_angle <= 5)) {
            points = 10;
        } else {
            if ((err_angle <= 10)) {
                points = 5;
            } else {
                if ((err_angle <= 30)) {
                    points = 2;
                } else {
                    points = 0;
                }
            }
        }
    }
    points_total = (points_total + points);
    psychoJS.experiment.addData("points", points);
    psychoJS.experiment.addData("central_item", memory_items[i][2]);
    psychoJS.window.mouseVisible = false;
    i = (i + 1);
    
    // the Routine "ltm_response_memory" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_calc_allKeys;
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
    key_resp_calc.keys = undefined;
    key_resp_calc.rt = undefined;
    _key_resp_calc_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_33);
    endComponents.push(key_resp_calc);
    
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
    
    // *text_33* updates
    if (t >= 0.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }

    
    // *key_resp_calc* updates
    if (t >= 0.0 && key_resp_calc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_calc.tStart = t;  // (not accounting for frame time here)
      key_resp_calc.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_calc.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_calc.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_calc.clearEvents(); });
    }

    if (key_resp_calc.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_calc.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_calc_allKeys = _key_resp_calc_allKeys.concat(theseKeys);
      if (_key_resp_calc_allKeys.length > 0) {
        key_resp_calc.keys = _key_resp_calc_allKeys[_key_resp_calc_allKeys.length - 1].name;  // just the last key pressed
        key_resp_calc.rt = _key_resp_calc_allKeys[_key_resp_calc_allKeys.length - 1].rt;
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
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_calc.corr, level);
    }
    psychoJS.experiment.addData('key_resp_calc.keys', key_resp_calc.keys);
    if (typeof key_resp_calc.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_calc.rt', key_resp_calc.rt);
        routineTimer.reset();
        }
    
    key_resp_calc.stop();
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
