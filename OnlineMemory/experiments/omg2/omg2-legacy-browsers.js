/************* 
 * Omg2 Test *
 *************/


// store info about the experiment session:
let expName = 'omg2';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'condition': 'inperson', 'site': 'msu'};

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
flowScheduler.add(instructions_experimentRoutineBegin());
flowScheduler.add(instructions_experimentRoutineEachFrame());
flowScheduler.add(instructions_experimentRoutineEnd());
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
flowScheduler.add(wm_instructRoutineBegin());
flowScheduler.add(wm_instructRoutineEachFrame());
flowScheduler.add(wm_instructRoutineEnd());
const wm_blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(wm_blockLoopBegin(wm_blockLoopScheduler));
flowScheduler.add(wm_blockLoopScheduler);
flowScheduler.add(wm_blockLoopEnd);
flowScheduler.add(end_taskRoutineBegin());
flowScheduler.add(end_taskRoutineEachFrame());
flowScheduler.add(end_taskRoutineEnd());
flowScheduler.add(instructions_distractRoutineBegin());
flowScheduler.add(instructions_distractRoutineEachFrame());
flowScheduler.add(instructions_distractRoutineEnd());
const trials_distractLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_distractLoopBegin(trials_distractLoopScheduler));
flowScheduler.add(trials_distractLoopScheduler);
flowScheduler.add(trials_distractLoopEnd);
flowScheduler.add(end_taskRoutineBegin());
flowScheduler.add(end_taskRoutineEachFrame());
flowScheduler.add(end_taskRoutineEnd());
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
    {'name': 'object_stim/obj120.jpg', 'path': 'object_stim/obj120.jpg'},
    {'name': 'object_stim/obj25.jpg', 'path': 'object_stim/obj25.jpg'},
    {'name': 'object_stim/obj78.jpg', 'path': 'object_stim/obj78.jpg'},
    {'name': 'object_stim/obj118.jpg', 'path': 'object_stim/obj118.jpg'},
    {'name': 'object_stim/obj170.jpg', 'path': 'object_stim/obj170.jpg'},
    {'name': 'object_stim/obj35.jpg', 'path': 'object_stim/obj35.jpg'},
    {'name': 'object_stim/obj139.jpg', 'path': 'object_stim/obj139.jpg'},
    {'name': 'object_stim/obj194.jpg', 'path': 'object_stim/obj194.jpg'},
    {'name': 'object_stim/obj76.jpg', 'path': 'object_stim/obj76.jpg'},
    {'name': 'object_stim/obj154.jpg', 'path': 'object_stim/obj154.jpg'},
    {'name': 'object_stim/obj189.jpg', 'path': 'object_stim/obj189.jpg'},
    {'name': 'object_stim/obj15.jpg', 'path': 'object_stim/obj15.jpg'},
    {'name': 'object_stim/obj145.jpg', 'path': 'object_stim/obj145.jpg'},
    {'name': 'object_stim/obj172.jpg', 'path': 'object_stim/obj172.jpg'},
    {'name': 'object_stim/obj107.jpg', 'path': 'object_stim/obj107.jpg'},
    {'name': 'object_stim/obj29.jpg', 'path': 'object_stim/obj29.jpg'},
    {'name': 'object_stim/obj153.jpg', 'path': 'object_stim/obj153.jpg'},
    {'name': 'object_stim/obj1.jpg', 'path': 'object_stim/obj1.jpg'},
    {'name': 'object_stim/obj109.jpg', 'path': 'object_stim/obj109.jpg'},
    {'name': 'object_stim/obj99.jpg', 'path': 'object_stim/obj99.jpg'},
    {'name': 'object_stim/obj144.jpg', 'path': 'object_stim/obj144.jpg'},
    {'name': 'object_stim/obj36.jpg', 'path': 'object_stim/obj36.jpg'},
    {'name': 'object_stim/obj44.jpg', 'path': 'object_stim/obj44.jpg'},
    {'name': 'object_stim/obj53.jpg', 'path': 'object_stim/obj53.jpg'},
    {'name': 'object_stim/obj38.jpg', 'path': 'object_stim/obj38.jpg'},
    {'name': 'object_stim/obj166.jpg', 'path': 'object_stim/obj166.jpg'},
    {'name': 'object_stim/obj195.jpg', 'path': 'object_stim/obj195.jpg'},
    {'name': 'object_stim/obj185.jpg', 'path': 'object_stim/obj185.jpg'},
    {'name': 'object_stim/obj95.jpg', 'path': 'object_stim/obj95.jpg'},
    {'name': 'object_stim/obj126.jpg', 'path': 'object_stim/obj126.jpg'},
    {'name': 'object_stim/obj116.jpg', 'path': 'object_stim/obj116.jpg'},
    {'name': 'object_stim/obj165.jpg', 'path': 'object_stim/obj165.jpg'},
    {'name': 'object_stim/obj198.jpg', 'path': 'object_stim/obj198.jpg'},
    {'name': 'object_stim/obj115.jpg', 'path': 'object_stim/obj115.jpg'},
    {'name': 'object_stim/obj75.jpg', 'path': 'object_stim/obj75.jpg'},
    {'name': 'object_stim/obj71.jpg', 'path': 'object_stim/obj71.jpg'},
    {'name': 'object_stim/obj11.jpg', 'path': 'object_stim/obj11.jpg'},
    {'name': 'object_stim/obj83.jpg', 'path': 'object_stim/obj83.jpg'},
    {'name': 'object_stim/obj3.jpg', 'path': 'object_stim/obj3.jpg'},
    {'name': 'object_stim/obj108.jpg', 'path': 'object_stim/obj108.jpg'},
    {'name': 'object_stim/obj31.jpg', 'path': 'object_stim/obj31.jpg'},
    {'name': 'object_stim/obj90.jpg', 'path': 'object_stim/obj90.jpg'},
    {'name': 'object_stim/obj147.jpg', 'path': 'object_stim/obj147.jpg'},
    {'name': 'object_stim/obj164.jpg', 'path': 'object_stim/obj164.jpg'},
    {'name': 'object_stim/obj85.jpg', 'path': 'object_stim/obj85.jpg'},
    {'name': 'object_stim/obj63.jpg', 'path': 'object_stim/obj63.jpg'},
    {'name': 'object_stim/obj163.jpg', 'path': 'object_stim/obj163.jpg'},
    {'name': 'object_stim/obj149.jpg', 'path': 'object_stim/obj149.jpg'},
    {'name': 'object_stim/obj106.jpg', 'path': 'object_stim/obj106.jpg'},
    {'name': 'object_stim/obj58.jpg', 'path': 'object_stim/obj58.jpg'},
    {'name': 'object_stim/obj10.jpg', 'path': 'object_stim/obj10.jpg'},
    {'name': 'object_stim/obj173.jpg', 'path': 'object_stim/obj173.jpg'},
    {'name': 'object_stim/obj14.jpg', 'path': 'object_stim/obj14.jpg'},
    {'name': 'object_stim/obj111.jpg', 'path': 'object_stim/obj111.jpg'},
    {'name': 'object_stim/obj159.jpg', 'path': 'object_stim/obj159.jpg'},
    {'name': 'object_stim/obj100.jpg', 'path': 'object_stim/obj100.jpg'},
    {'name': 'object_stim/obj19.jpg', 'path': 'object_stim/obj19.jpg'},
    {'name': 'object_stim/obj60.jpg', 'path': 'object_stim/obj60.jpg'},
    {'name': 'object_stim/obj132.jpg', 'path': 'object_stim/obj132.jpg'},
    {'name': 'object_stim/obj91.jpg', 'path': 'object_stim/obj91.jpg'},
    {'name': 'object_stim/obj86.jpg', 'path': 'object_stim/obj86.jpg'},
    {'name': 'object_stim/obj160.jpg', 'path': 'object_stim/obj160.jpg'},
    {'name': 'object_stim/obj181.jpg', 'path': 'object_stim/obj181.jpg'},
    {'name': 'object_stim/obj6.jpg', 'path': 'object_stim/obj6.jpg'},
    {'name': 'object_stim/obj22.jpg', 'path': 'object_stim/obj22.jpg'},
    {'name': 'object_stim/obj54.jpg', 'path': 'object_stim/obj54.jpg'},
    {'name': 'object_stim/obj80.jpg', 'path': 'object_stim/obj80.jpg'},
    {'name': 'object_stim/obj82.jpg', 'path': 'object_stim/obj82.jpg'},
    {'name': 'object_stim/obj5.jpg', 'path': 'object_stim/obj5.jpg'},
    {'name': 'object_stim/obj12.jpg', 'path': 'object_stim/obj12.jpg'},
    {'name': 'object_stim/obj74.jpg', 'path': 'object_stim/obj74.jpg'},
    {'name': 'object_stim/obj94.jpg', 'path': 'object_stim/obj94.jpg'},
    {'name': 'object_stim/obj20.jpg', 'path': 'object_stim/obj20.jpg'},
    {'name': 'object_stim/obj43.jpg', 'path': 'object_stim/obj43.jpg'},
    {'name': 'object_stim/obj77.jpg', 'path': 'object_stim/obj77.jpg'},
    {'name': 'object_stim/obj45.jpg', 'path': 'object_stim/obj45.jpg'},
    {'name': 'object_stim/obj125.jpg', 'path': 'object_stim/obj125.jpg'},
    {'name': 'object_stim/obj193.jpg', 'path': 'object_stim/obj193.jpg'},
    {'name': 'object_stim/obj23.jpg', 'path': 'object_stim/obj23.jpg'},
    {'name': 'object_stim/obj133.jpg', 'path': 'object_stim/obj133.jpg'},
    {'name': 'object_stim/obj179.jpg', 'path': 'object_stim/obj179.jpg'},
    {'name': 'object_stim/obj122.jpg', 'path': 'object_stim/obj122.jpg'},
    {'name': 'object_stim/obj128.jpg', 'path': 'object_stim/obj128.jpg'},
    {'name': 'object_stim/obj67.jpg', 'path': 'object_stim/obj67.jpg'},
    {'name': 'object_stim/obj65.jpg', 'path': 'object_stim/obj65.jpg'},
    {'name': 'object_stim/obj34.jpg', 'path': 'object_stim/obj34.jpg'},
    {'name': 'object_stim/obj150.jpg', 'path': 'object_stim/obj150.jpg'},
    {'name': 'object_stim/obj183.jpg', 'path': 'object_stim/obj183.jpg'},
    {'name': 'object_stim/obj123.jpg', 'path': 'object_stim/obj123.jpg'},
    {'name': 'object_stim/obj200.jpg', 'path': 'object_stim/obj200.jpg'},
    {'name': 'object_stim/obj157.jpg', 'path': 'object_stim/obj157.jpg'},
    {'name': 'object_stim/obj33.jpg', 'path': 'object_stim/obj33.jpg'},
    {'name': 'object_stim/obj161.jpg', 'path': 'object_stim/obj161.jpg'},
    {'name': 'object_stim/obj199.jpg', 'path': 'object_stim/obj199.jpg'},
    {'name': 'object_stim/obj72.jpg', 'path': 'object_stim/obj72.jpg'},
    {'name': 'object_stim/obj39.jpg', 'path': 'object_stim/obj39.jpg'},
    {'name': 'object_stim/obj97.jpg', 'path': 'object_stim/obj97.jpg'},
    {'name': 'object_stim/obj0.jpg', 'path': 'object_stim/obj0.jpg'},
    {'name': 'object_stim/obj42.jpg', 'path': 'object_stim/obj42.jpg'},
    {'name': 'object_stim/obj112.jpg', 'path': 'object_stim/obj112.jpg'},
    {'name': 'object_stim/obj56.jpg', 'path': 'object_stim/obj56.jpg'},
    {'name': 'object_stim/obj7.jpg', 'path': 'object_stim/obj7.jpg'},
    {'name': 'object_stim/obj70.jpg', 'path': 'object_stim/obj70.jpg'},
    {'name': 'object_stim/obj2.jpg', 'path': 'object_stim/obj2.jpg'},
    {'name': 'object_stim/obj177.jpg', 'path': 'object_stim/obj177.jpg'},
    {'name': 'object_stim/obj84.jpg', 'path': 'object_stim/obj84.jpg'},
    {'name': 'object_stim/obj130.jpg', 'path': 'object_stim/obj130.jpg'},
    {'name': 'object_stim/obj102.jpg', 'path': 'object_stim/obj102.jpg'},
    {'name': 'object_stim/obj190.jpg', 'path': 'object_stim/obj190.jpg'},
    {'name': 'object_stim/obj59.jpg', 'path': 'object_stim/obj59.jpg'},
    {'name': 'object_stim/obj176.jpg', 'path': 'object_stim/obj176.jpg'},
    {'name': 'object_stim/obj21.jpg', 'path': 'object_stim/obj21.jpg'},
    {'name': 'object_stim/obj148.jpg', 'path': 'object_stim/obj148.jpg'},
    {'name': 'object_stim/obj46.jpg', 'path': 'object_stim/obj46.jpg'},
    {'name': 'object_stim/obj66.jpg', 'path': 'object_stim/obj66.jpg'},
    {'name': 'object_stim/obj138.jpg', 'path': 'object_stim/obj138.jpg'},
    {'name': 'object_stim/obj129.jpg', 'path': 'object_stim/obj129.jpg'},
    {'name': 'object_stim/obj103.jpg', 'path': 'object_stim/obj103.jpg'},
    {'name': 'object_stim/obj32.jpg', 'path': 'object_stim/obj32.jpg'},
    {'name': 'object_stim/obj4.jpg', 'path': 'object_stim/obj4.jpg'},
    {'name': 'object_stim/obj92.jpg', 'path': 'object_stim/obj92.jpg'},
    {'name': 'object_stim/obj18.jpg', 'path': 'object_stim/obj18.jpg'},
    {'name': 'object_stim/obj16.jpg', 'path': 'object_stim/obj16.jpg'},
    {'name': 'object_stim/obj26.jpg', 'path': 'object_stim/obj26.jpg'},
    {'name': 'object_stim/obj55.jpg', 'path': 'object_stim/obj55.jpg'},
    {'name': 'object_stim/obj143.jpg', 'path': 'object_stim/obj143.jpg'},
    {'name': 'object_stim/obj49.jpg', 'path': 'object_stim/obj49.jpg'},
    {'name': 'object_stim/obj64.jpg', 'path': 'object_stim/obj64.jpg'},
    {'name': 'object_stim/obj175.jpg', 'path': 'object_stim/obj175.jpg'},
    {'name': 'object_stim/obj48.jpg', 'path': 'object_stim/obj48.jpg'},
    {'name': 'object_stim/obj124.jpg', 'path': 'object_stim/obj124.jpg'},
    {'name': 'object_stim/obj37.jpg', 'path': 'object_stim/obj37.jpg'},
    {'name': 'object_stim/obj135.jpg', 'path': 'object_stim/obj135.jpg'},
    {'name': 'object_stim/obj197.jpg', 'path': 'object_stim/obj197.jpg'},
    {'name': 'delay_conds.xlsx', 'path': 'delay_conds.xlsx'},
    {'name': 'object_stim/obj140.jpg', 'path': 'object_stim/obj140.jpg'},
    {'name': 'object_stim/obj146.jpg', 'path': 'object_stim/obj146.jpg'},
    {'name': 'object_stim/obj134.jpg', 'path': 'object_stim/obj134.jpg'},
    {'name': 'object_stim/obj89.jpg', 'path': 'object_stim/obj89.jpg'},
    {'name': 'object_stim/obj113.jpg', 'path': 'object_stim/obj113.jpg'},
    {'name': 'object_stim/obj79.jpg', 'path': 'object_stim/obj79.jpg'},
    {'name': 'object_stim/obj121.jpg', 'path': 'object_stim/obj121.jpg'},
    {'name': 'object_stim/obj24.jpg', 'path': 'object_stim/obj24.jpg'},
    {'name': 'object_stim/obj93.jpg', 'path': 'object_stim/obj93.jpg'},
    {'name': 'object_stim/obj182.jpg', 'path': 'object_stim/obj182.jpg'},
    {'name': 'object_stim/obj87.jpg', 'path': 'object_stim/obj87.jpg'},
    {'name': 'object_stim/obj188.jpg', 'path': 'object_stim/obj188.jpg'},
    {'name': 'object_stim/obj192.jpg', 'path': 'object_stim/obj192.jpg'},
    {'name': 'object_stim/obj8.jpg', 'path': 'object_stim/obj8.jpg'},
    {'name': 'object_stim/obj117.jpg', 'path': 'object_stim/obj117.jpg'},
    {'name': 'object_stim/obj9.jpg', 'path': 'object_stim/obj9.jpg'},
    {'name': 'object_stim/obj127.jpg', 'path': 'object_stim/obj127.jpg'},
    {'name': 'object_stim/obj81.jpg', 'path': 'object_stim/obj81.jpg'},
    {'name': 'object_stim/obj105.jpg', 'path': 'object_stim/obj105.jpg'},
    {'name': 'object_stim/obj178.jpg', 'path': 'object_stim/obj178.jpg'},
    {'name': 'object_stim/obj104.jpg', 'path': 'object_stim/obj104.jpg'},
    {'name': 'object_stim/obj52.jpg', 'path': 'object_stim/obj52.jpg'},
    {'name': 'object_stim/obj186.jpg', 'path': 'object_stim/obj186.jpg'},
    {'name': 'object_stim/obj187.jpg', 'path': 'object_stim/obj187.jpg'},
    {'name': 'object_stim/obj28.jpg', 'path': 'object_stim/obj28.jpg'},
    {'name': 'object_stim/obj27.jpg', 'path': 'object_stim/obj27.jpg'},
    {'name': 'object_stim/obj119.jpg', 'path': 'object_stim/obj119.jpg'},
    {'name': 'object_stim/obj61.jpg', 'path': 'object_stim/obj61.jpg'},
    {'name': 'object_stim/obj151.jpg', 'path': 'object_stim/obj151.jpg'},
    {'name': 'object_stim/obj69.jpg', 'path': 'object_stim/obj69.jpg'},
    {'name': 'object_stim/obj191.jpg', 'path': 'object_stim/obj191.jpg'},
    {'name': 'object_stim/obj156.jpg', 'path': 'object_stim/obj156.jpg'},
    {'name': 'object_stim/obj17.jpg', 'path': 'object_stim/obj17.jpg'},
    {'name': 'object_stim/obj174.jpg', 'path': 'object_stim/obj174.jpg'},
    {'name': 'object_stim/obj152.jpg', 'path': 'object_stim/obj152.jpg'},
    {'name': 'object_stim/obj142.jpg', 'path': 'object_stim/obj142.jpg'},
    {'name': 'object_stim/obj41.jpg', 'path': 'object_stim/obj41.jpg'},
    {'name': 'object_stim/obj47.jpg', 'path': 'object_stim/obj47.jpg'},
    {'name': 'object_stim/obj184.jpg', 'path': 'object_stim/obj184.jpg'},
    {'name': 'object_stim/obj168.jpg', 'path': 'object_stim/obj168.jpg'},
    {'name': 'object_stim/obj96.jpg', 'path': 'object_stim/obj96.jpg'},
    {'name': 'object_stim/obj73.jpg', 'path': 'object_stim/obj73.jpg'},
    {'name': 'object_stim/obj57.jpg', 'path': 'object_stim/obj57.jpg'},
    {'name': 'object_stim/obj136.jpg', 'path': 'object_stim/obj136.jpg'},
    {'name': 'object_stim/obj141.jpg', 'path': 'object_stim/obj141.jpg'},
    {'name': 'object_stim/obj40.jpg', 'path': 'object_stim/obj40.jpg'},
    {'name': 'object_stim/obj51.jpg', 'path': 'object_stim/obj51.jpg'},
    {'name': 'object_stim/obj62.jpg', 'path': 'object_stim/obj62.jpg'},
    {'name': 'object_stim/obj162.jpg', 'path': 'object_stim/obj162.jpg'},
    {'name': 'object_stim/obj101.jpg', 'path': 'object_stim/obj101.jpg'},
    {'name': 'object_stim/obj114.jpg', 'path': 'object_stim/obj114.jpg'},
    {'name': 'object_stim/obj155.jpg', 'path': 'object_stim/obj155.jpg'},
    {'name': 'object_stim/obj98.jpg', 'path': 'object_stim/obj98.jpg'},
    {'name': 'object_stim/obj137.jpg', 'path': 'object_stim/obj137.jpg'},
    {'name': 'object_stim/obj30.jpg', 'path': 'object_stim/obj30.jpg'},
    {'name': 'object_stim/obj196.jpg', 'path': 'object_stim/obj196.jpg'},
    {'name': 'object_stim/obj169.jpg', 'path': 'object_stim/obj169.jpg'},
    {'name': 'object_stim/obj13.jpg', 'path': 'object_stim/obj13.jpg'},
    {'name': 'object_stim/obj50.jpg', 'path': 'object_stim/obj50.jpg'},
    {'name': 'object_stim/obj131.jpg', 'path': 'object_stim/obj131.jpg'},
    {'name': 'object_stim/obj110.jpg', 'path': 'object_stim/obj110.jpg'},
    {'name': 'object_stim/obj167.jpg', 'path': 'object_stim/obj167.jpg'},
    {'name': 'object_stim/obj88.jpg', 'path': 'object_stim/obj88.jpg'},
    {'name': 'distract_conditions.xlsx', 'path': 'distract_conditions.xlsx'},
    {'name': 'object_stim/obj180.jpg', 'path': 'object_stim/obj180.jpg'},
    {'name': 'object_stim/obj171.jpg', 'path': 'object_stim/obj171.jpg'},
    {'name': 'object_stim/obj68.jpg', 'path': 'object_stim/obj68.jpg'},
    {'name': 'object_stim/obj158.jpg', 'path': 'object_stim/obj158.jpg'}
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


var setupClock;
var instructions_experimentClock;
var text_22;
var key_resp_12;
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
var wm_instructClock;
var text_63;
var key_resp_21;
var remindClock;
var text_18;
var key_resp_9;
var end_blockClock;
var msg;
var block_message;
var text_block_end;
var text_19;
var key_resp_8;
var end_taskClock;
var text_20;
var key_resp_10;
var instructions_distractClock;
var text_23;
var key_resp_2;
var distractor_trialClock;
var polygon;
var key_resp_distract;
var distractor_feedbackClock;
var text_7;
var text_8;
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
var text_6;
var endClock;
var text_33;
var key_resp_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
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
  
  // Initialize components for Routine "instructions_1"
  instructions_1Clock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: "Let's practice the first task. For this task, you will see several colored objects. Your job is to remember to color of these objects. \n\nFirst, a small cross will appear in the center of the screen. This is your warning that the objects are coming and that you should pay attention. If you direct your eyes to the center of the screen you will see the objects better as they flash on the screen very quickly.\n\nAfter you have seen the objects, you will be asked to report the color of each object you saw previously. Like before, you will use the mouse to adjust the color of the object until it is the same color as you remember seeing earlier.\n\nPlease only click the mouse when you are ready to submit your response. You will repeat this procedure for all three objects.\n\nPress SPACE to begin the practice.",
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
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  wm_color_4 = new visual.Polygon({
    win: psychoJS.window, name: 'wm_color_4', 
    edges: 100, size:[0.15, 0.15],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -2, interpolate: true,
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
    opacity: 1.0, depth: -4, interpolate: true,
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
    opacity: 1.0, depth: -6, interpolate: true,
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
    opacity: 1.0, depth: -4, interpolate: true,
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
    opacity: 1.0, depth: -5, interpolate: true,
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
    opacity: 1.0, depth: -9, interpolate: true,
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
    opacity: 1.0, depth: -3, interpolate: true,
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
    opacity: 1.0, depth: -5, interpolate: true,
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
    opacity: 1.0, depth: -7, interpolate: true,
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
    opacity: 1.0, depth: -4, interpolate: true,
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
  
  // Initialize components for Routine "wm_instruct"
  wm_instructClock = new util.Clock();
  text_63 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_63',
    text: 'Now, you are going to do the real task. Remember, your job is to remember the color of these objects. \n\nLike before, you will do the even/odd task after seeing the objects. Remember, press A if the number is even and S if the number is odd.\n\nBoth tasks are important. Please try to respond as quickly and accurately as possible.\n\nPress SPACE to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  // Initialize components for Routine "instructions_distract"
  instructions_distractClock = new util.Clock();
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: "Now it's time for another task.\n\nDuring this task, you will see black square appear in the center of the screen. As soon as you see the black square appear, press SPACE as quickly as possible.\n\nAfter each trial, we'll tell you how quickly you responded.\n\nPress SPACE to begin.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "distractor_trial"
  distractor_trialClock = new util.Clock();
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  key_resp_distract = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "distractor_feedback"
  distractor_feedbackClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'You responded in:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
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
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: 'You have reached the end of the experiment!\n\nThank you so much for your participation.\n\nAfter this screen, you will exit the experiment.\n\nPress SPACE to finish.',
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
var block_total;
var wm_trial_total;
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
    original_imgs = Array(200).fill("");
    fix_time = 0.5;
    stim_array_time = 0.75;
    parity_time = 1.2;
    image_size = [0.05, 0.05];
    block_n = 1;
    trial_n = 1;
    block_total = 4;
    wm_trial_total = 4;
    memory_items = [];
    points_total = 0;
    i = 1;
    k = 1;
    for (var k, _pj_c = 0, _pj_a = range(200), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        k = _pj_a[_pj_c];
        original_imgs[k] = ('object_stim/obj' + k.toString() + '.jpg');
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
    
    util.shuffle(original_imgs);
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
    console.log("ending")
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
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


var practice_1;
var currentLoop;
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


var wm_block;
function wm_blockLoopBegin(wm_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    wm_block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: block_total, method: TrialHandler.Method.RANDOM,
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


var trials_distract;
function trials_distractLoopBegin(trials_distractLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_distract = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 8, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'distract_conditions.xlsx',
      seed: undefined, name: 'trials_distract'
    });
    psychoJS.experiment.addLoop(trials_distract); // add the loop to the experiment
    currentLoop = trials_distract;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_distract.forEach(function() {
      const snapshot = trials_distract.getSnapshot();
    
      trials_distractLoopScheduler.add(importConditions(snapshot));
      trials_distractLoopScheduler.add(distractor_trialRoutineBegin(snapshot));
      trials_distractLoopScheduler.add(distractor_trialRoutineEachFrame());
      trials_distractLoopScheduler.add(distractor_trialRoutineEnd());
      trials_distractLoopScheduler.add(distractor_feedbackRoutineBegin(snapshot));
      trials_distractLoopScheduler.add(distractor_feedbackRoutineEachFrame());
      trials_distractLoopScheduler.add(distractor_feedbackRoutineEnd());
      trials_distractLoopScheduler.add(endLoopIteration(trials_distractLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_distractLoopEnd() {
  psychoJS.experiment.removeLoop(trials_distract);

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


var trial_angles;
var trial_positions;
var err_total;
var stim_files;
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
    
    stim_presented_wm_1 = stim_files[0].split("object_stim/")[1].split(".jpg")[0];
    stim_presented_wm_2 = stim_files[1].split("object_stim/")[1].split(".jpg")[0];
    stim_presented_wm_3 = stim_files[2].split("object_stim/")[1].split(".jpg")[0];
    
    
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
    
    if (wm_color_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_4.setOpacity(0.5, false);
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
    
    if (wm_color_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_5.setOpacity(0.5, false);
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
    
    if (wm_color_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_6.setOpacity(0.5, false);
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


var gotValidClick;
var stim_presented;
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
    mouse_resp_4.getPos();
    stim_presented = stim_files[j].split("object_stim/")[1].split(".jpg")[0];
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
function practice_response_memoryRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_response_memory'-------
    // get current time
    t = practice_response_memoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_resp_4* updates
    if (t >= 0.0 && mouse_resp_4.status === PsychoJS.Status.NOT_STARTED) {
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
    if (t >= (fix_time + 0.25) && wm_color_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color_10.tStart = t;  // (not accounting for frame time here)
      wm_color_10.frameNStart = frameN;  // exact frame index
      
      wm_color_10.setAutoDraw(true);
    }

    
    if (wm_color_10.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_10.setFillColor(new util.Color(color_rgb), false);
      wm_color_10.setOpacity(0.5, false);
      wm_color_10.setLineColor(new util.Color(color_rgb), false);
    }
    
    // *dot_resp1_8* updates
    if (t >= (fix_time + 0.25) && dot_resp1_8.status === PsychoJS.Status.NOT_STARTED) {
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


var _mouseXYs;
var err_angle;
var points;
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

    
    if (wm_color_11.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_11.setOpacity(0.5, false);
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

    
    if (wm_color_12.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_12.setOpacity(0.5, false);
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
    
    stim_presented_wm_1 = stim_files[0].split("object_stim/")[1].split(".jpg")[0];
    stim_presented_wm_2 = stim_files[1].split("object_stim/")[1].split(".jpg")[0];
    stim_presented_wm_3 = stim_files[2].split("object_stim/")[1].split(".jpg")[0];
    
    
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
    
    if (wm_color_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_1.setOpacity(0.5, false);
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
    
    if (wm_color_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_2.setOpacity(0.5, false);
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
    
    if (wm_color_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color_3.setOpacity(0.5, false);
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
    mouse_resp.getPos();
    stim_presented = stim_files[j].split("object_stim/")[1].split(".jpg")[0];
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
    if (t >= 0.0 && mouse_resp.status === PsychoJS.Status.NOT_STARTED) {
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
    if (t >= (fix_time + 0.25) && wm_color.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wm_color.tStart = t;  // (not accounting for frame time here)
      wm_color.frameNStart = frameN;  // exact frame index
      
      wm_color.setAutoDraw(true);
    }

    
    if (wm_color.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wm_color.setFillColor(new util.Color(color_rgb), false);
      wm_color.setOpacity(0.5, false);
      wm_color.setLineColor(new util.Color(color_rgb), false);
    }
    
    // *dot_resp1* updates
    if (t >= (fix_time + 0.25) && dot_resp1.status === PsychoJS.Status.NOT_STARTED) {
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


var central_item;
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
    psychoJS.experiment.addData("points", memory_points);
    psychoJS.experiment.addData("central_item", central_item);
    psychoJS.window.mouseVisible = false;
    memory_items.push([stim_files[j], trial_angles[j], central_item, delay_1]);
    
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
    block_message = "You have reached the end of block " + block_n + " of " + block_total;  
    
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


var _key_resp_2_allKeys;
var instructions_distractComponents;
function instructions_distractRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_distract'-------
    t = 0;
    instructions_distractClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    instructions_distractComponents = [];
    instructions_distractComponents.push(text_23);
    instructions_distractComponents.push(key_resp_2);
    
    instructions_distractComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_distractRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_distract'-------
    // get current time
    t = instructions_distractClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
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
    instructions_distractComponents.forEach( function(thisComponent) {
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


function instructions_distractRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_distract'-------
    instructions_distractComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
    // the Routine "instructions_distract" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_distract_allKeys;
var distractor_trialComponents;
function distractor_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'distractor_trial'-------
    t = 0;
    distractor_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_distract.keys = undefined;
    key_resp_distract.rt = undefined;
    _key_resp_distract_allKeys = [];
    // keep track of which components have finished
    distractor_trialComponents = [];
    distractor_trialComponents.push(polygon);
    distractor_trialComponents.push(key_resp_distract);
    
    distractor_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function distractor_trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'distractor_trial'-------
    // get current time
    t = distractor_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= distract_onset && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = distract_onset + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    // *key_resp_distract* updates
    if (t >= distract_onset && key_resp_distract.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_distract.tStart = t;  // (not accounting for frame time here)
      key_resp_distract.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_distract.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_distract.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_distract.clearEvents(); });
    }

    frameRemains = distract_onset + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_distract.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_distract.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_distract.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_distract.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_distract_allKeys = _key_resp_distract_allKeys.concat(theseKeys);
      if (_key_resp_distract_allKeys.length > 0) {
        key_resp_distract.keys = _key_resp_distract_allKeys[_key_resp_distract_allKeys.length - 1].name;  // just the last key pressed
        key_resp_distract.rt = _key_resp_distract_allKeys[_key_resp_distract_allKeys.length - 1].rt;
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
    distractor_trialComponents.forEach( function(thisComponent) {
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


function distractor_trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'distractor_trial'-------
    distractor_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_distract.corr, level);
    }
    psychoJS.experiment.addData('key_resp_distract.keys', key_resp_distract.keys);
    if (typeof key_resp_distract.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_distract.rt', key_resp_distract.rt);
        routineTimer.reset();
        }
    
    key_resp_distract.stop();
    // the Routine "distractor_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var distractor_feedback;
var distractor_feedbackComponents;
function distractor_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'distractor_feedback'-------
    t = 0;
    distractor_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    distractor_feedback = "You didn't respond in time.";
    if ((typeof(key_resp_distract.rt) === "number")) {
        distractor_feedback = (Math.round((key_resp_distract.rt * 1000)).toString() + " milliseconds!");
    }
    
    text_8.setText(distractor_feedback);
    // keep track of which components have finished
    distractor_feedbackComponents = [];
    distractor_feedbackComponents.push(text_7);
    distractor_feedbackComponents.push(text_8);
    
    distractor_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function distractor_feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'distractor_feedback'-------
    // get current time
    t = distractor_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
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
    distractor_feedbackComponents.forEach( function(thisComponent) {
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


function distractor_feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'distractor_feedback'-------
    distractor_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    mouse_resp_ltm.getPos();
    
    err_total = 0;
    document.body.style.cursor='auto';
    
    
    //stim_presented = "object_stim/obj0.jpg"
    trial_n = i;
    console.log(memory_items)
    //stim_presented = memory_items[i][0].split('object_stim/')[1].split('.jpg')[0]
    stim_presented_ltm = memory_items[i][0]
    
    
    original_color = HSVtoRGB(memory_items[i][1]/360)
    
    
    circle_resp_11.setSize(circle_size);
    ltm_stim_response.setImage(stim_presented_ltm);
    dot_resp1_11.setSize(dot_size);
    text_6.setText(("Current score: " + points.toString()));
    // keep track of which components have finished
    ltm_response_memoryComponents = [];
    ltm_response_memoryComponents.push(mouse_resp_ltm);
    ltm_response_memoryComponents.push(circle_resp_11);
    ltm_response_memoryComponents.push(ltm_stim_response);
    ltm_response_memoryComponents.push(ltm_color_response);
    ltm_response_memoryComponents.push(dot_resp1_11);
    ltm_response_memoryComponents.push(fixation_4);
    ltm_response_memoryComponents.push(text_6);
    
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
    if (t >= 0.0 && mouse_resp_ltm.status === PsychoJS.Status.NOT_STARTED) {
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
    endComponents.push(text_33);
    endComponents.push(key_resp_end);
    
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
