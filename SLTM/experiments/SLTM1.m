%%%%%%
%INFO%
%%%%%%
%Kelly Cotton 2/14/2019

%SLTM1: Surprise Long Term Memory 
%This is a serial presentation task, with a surprise long-term memory test.
%Participants will first complete a stimulus identification task, followed 
%by a 5-10 minute distractor task. Participants will then complete a 2-alternative 
%forced choice memory test in which they indicate their confidence level for an answer.

%This code creates two text files that contain the participant response data. 
%The first file will be from the stimulus identification task.

%Output Key for subject data file: 
%Subj.Number | Block Number |  Trial Number | Cue Condition | Response RT | Response Position | Target Position | Accuracy

%Cue condition=1 corresponds to cue presented before stimuli
%Cue condition=2 corresponds to cue presented simlutaneously with stimuli

%The presentations positions are:
%    4       2
%    3       1

%%The second file (which will be denoted with LTM in the filename) contains response
%information for the long-term memory task.

%Output key for LTM subject data file:
%Subj. Number | Block Number | Trial Number | Cue Condition | Decision | Accuracy | Response | Response Reaction Time

%Cue conditions: 1 (before), 2 (simultaneous), 0 (lure trial - two distractors)

%Response indicates their level of confidence, from -1 to 1. 
%Larger numbers indicate a stronger confidence rating and the negative/positive sign 
%indicates which word they chose (see Decision)

%Decision indicates their choice of word, the left word is 1 and the right word is 2

%%%%%%%%%%%%%%%%%%%
%Initial Processes%
%%%%%%%%%%%%%%%%%%%

%Define screen to use
screenNumber=max(Screen('Screens'));
[window,sRect]=Screen('OpenWindow',screenNumber);
%Screen location measures
[xc,yc]=RectCenter(sRect);
xres=sRect(3);
yres=sRect(4);
%Colors
white=WhiteIndex(window);
black=BlackIndex(window);
grey=[181,181,181]; %Grey background
%Text Attributes
Screen('TextSize',window,30);

%%%%%%%%%%%%%%%%%%%%%%%%%%
%Experiment Start Screens%
%%%%%%%%%%%%%%%%%%%%%%%%%%

%NoCursor
HideCursor;

%Experiment Name Check 
expName="SLTM1";
checkText=['This is ', expName, '.\n Experimenter, Press <space> if this is the correct experment \n or <Esc> if this is not correct.\n'];
DrawFormattedText(window, checkText, 'center', 'center');
Screen('Flip', window);
checkKeycode=0; 
while(sum(checkKeycode==[KbName('esc'),KbName('space')])<1)
  [rTime,checkKey]=KbWait();
checkKeycode=find(checkKey);
endwhile
if checkKeycode==KbName('esc')
  quit();
endif
WaitSecs(.2);

%Create Participant Data File
%Checks for existing results files (except for subject number >999)

subNo=1;
fileNo=num2str(subNo);
while(length(fileNo)<3)
  fileNo=strcat("0",fileNo);
endwhile
datafilename=strcat(expName,".",fileNo,".dat"); %Name of file to write to
while(fopen(datafilename,'rt')~=-1)
  subNo=subNo+1;
  fileNo=num2str(subNo);
  while(length(fileNo)<3)
    fileNo=strcat("0",fileNo);
  endwhile
  datafilename=strcat(expName,".",fileNo,".dat"); %Name of file to write to
endwhile
datafilepointer=fopen(datafilename,'wt'); %Open ASCII file for writing

%Collect Demographic information
%demographics(window,sRect,expName,subNo) 
HideCursor;

%Pause before Experiment Starts
myText=['Please wait for experimenter'];
DrawFormattedText(window,myText,'center','center');
Screen('Flip',window);
KbWait();
WaitSecs(.2);


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%Start of Experiment-Specific Code%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

%Restrict Input
RestrictKeysForKbCheck([KbName('control'),KbName('alt'),KbName('esc'),KbName('space'),KbName('a'),KbName('s'),KbName('z'),KbName('x')]);


%%%%%%%%%%%%%%%%%%
%Static Variables%
%%%%%%%%%%%%%%%%%%

%Event Durations
%Timing is multiplied by the reciprocal of the refresh rate, log.ifi, so 60=1s on standard 60Hz monitor
%-.5 is to trigger the event just before the next screen refresh
FixDur=.5-.008;
CueDur=1.5-.008;

%Lists of words to be presented
Wordlist=fopen('Words.txt','r'); %Open the text file 
Wordlist=textscan(Wordlist,'%s'); %Reads the data from the file into a cell array
Wordlist=cell2mat(Wordlist); %Convert cell array into matrix
targetwords={}; %Create an array to fill with the words used to be later used in the long term memory test
usedWords=[]; %Create an array to fill with the words that were used because they will later be removed

%Randomize words 
Wordlist=Shuffle(Wordlist);

%These will be the lure words (incorrect answers) for the long-term memory test
Distractorlist=fopen('Distractors.txt','r'); %Open the text file 
Distractorlist=textscan(Distractorlist,'%s'); %Reads the data from the file into a cell array
Distractorlist=cell2mat(Distractorlist); %Convert cell array into matrix

%Location coordinates for the Confidence Rating Scale
%xc and yc are the x and y coordinates of the center of the screen
x1=xc-450;      
x4=xc-17;
x5=xc+17;
x8=xc+450;
y1=yc*8/5;   
y2=yc*8/5+13;
y3=yc*8/5+17;
y4=yc*8/5+30;

%Rating scale labels
rate1=['Sure'];
rate4=['Guess'];
rate5=['Guess'];
rate8=['Sure'];

%Create Response Collection Vectors
LTMRespOn=0;
LTMrTime=0;
LTMrt=0;
LTMresp=0;

%Other static variables



%%%%%%%%%%%%%
%Block Setup%
%%%%%%%%%%%%%


%Number of experimental blocks
b=6;

%Initiate block loop
for i=0:b;  
  %Number of trials per block
  %Block 0 is practice block
  if (i==0)
    n=5;
  else
    n=10;
  endif

  %Instruction screen
  instructText=['You will see a series of words presented on the screen. \nThere will be a word in the center that is your cue. \nPress the key <a,s,z,x> that corresponds to the location of the word that matches the cue.\n Press <space> when you are ready.'];
  Screen('FillRect',window,grey);
  DrawFormattedText(window,instructText,'center','center');
  Screen('Flip',window);
  WaitSecs(1); 
  keyIsDown=0;
  while (keyIsDown==0);
    [keyIsDown,rt3,keyRef]=KbCheck();
    WaitSecs(.001);
  endwhile
  WaitSecs(.3);
  
  %Restrict Input, no spacebar to avoiding rushing through trials
  RestrictKeysForKbCheck([KbName('control'),KbName('alt'),KbName('esc'),KbName('a'),KbName('s'),KbName('z'),KbName('x')]);

  %Initiate Trial Looop
  for t=1:n;
    
    %Determine cue condition, this will change each trial
    cuecond=randi(2);
    
    %Choose the target word from the longer list
    %At the end of each trial, the word is removed from the list of possible words
    %so there are no repeats. The next trial will use the next word on the list, etc.
    targText=Wordlist(1);
    
    %Add target word and cue condition to running list
    %These will be needed for the second half of the experiment and the analysis
    if (i>0)
      targetwords=[targetwords;targText,cuecond];
    endif
    
    %Create word list for presentation 
    newWords=[targText;Wordlist(2);Wordlist(3);Wordlist(4)]; %Creates array of the target word and three other words from the list
    arrayNums=[1:4]; %Number of different positions: top left, top right, bottom left, bottom right; 1 will always be the target word
    arrayNums=Shuffle(arrayNums); %Shuffle positions
    
 
    %%%%%%%%%%%%%%%%
    %Trial Sequence%
    %%%%%%%%%%%%%%%%   
    
    %Fixation Cross
    Screen('FillRect',window,black);
    fixDraw(window,white,xc,yc,20);
    FixOn=Screen('Flip',window);
    
    %Stimuli presentation
    if (cuecond==1) %Display cue before stimuli
      %Display cue first
      Screen('FillRect',window,black);
      DrawFormattedText(window,char(targText),'center','center',white);
      CueOn=Screen('Flip',window,FixOn+FixDur);
    
      %Item Presentation
      Screen('FillRect',window,black);
      DrawFormattedText(window,char(newWords(arrayNums(1))),xc+xres/4,yc+yres/4,white);
      DrawFormattedText(window,char(newWords(arrayNums(2))),xc+xres/4,yc-yres/4,white);
      DrawFormattedText(window,char(newWords(arrayNums(3))),xc-xres/4,yc+yres/4,white);
      DrawFormattedText(window,char(newWords(arrayNums(4))),xc-xres/4,yc-yres/4,white);
      Screen('Flip',window,CueOn+CueDur);
    else %Display cue and stimuli simultaneously
    
      %Blank screen display
      Screen('FillRect',window,black);
      CueOn=Screen('Flip',window,FixOn+FixDur);
      
      Screen('FillRect',window,black);
      DrawFormattedText(window,char(targText),'center','center',white);
      DrawFormattedText(window,char(newWords(arrayNums(1))),xc+xres/4,yc+yres/4,white);
      DrawFormattedText(window,char(newWords(arrayNums(2))),xc+xres/4,yc-yres/4,white);
      DrawFormattedText(window,char(newWords(arrayNums(3))),xc-xres/4,yc+yres/4,white);
      DrawFormattedText(window,char(newWords(arrayNums(4))),xc-xres/4,yc-yres/4,white);
      Screen('Flip',window,CueOn+CueDur);
    endif
    %Collect Response: key pressed and time
    curTime=GetSecs; %Current time, used for RT calculation
    keyIsDown=0;
    while (keyIsDown==0);
      [keyIsDown,respTime,keycode]=KbCheck(); 
      WaitSecs(.001);
    endwhile
    
    %RT calculation
    respRT=respTime-curTime;

    %Create output
    if KbName('x')==find(keycode)
      resp=1; %bottom right
    elseif KbName('s')==find(keycode)
      resp=2; %top right
    elseif KbName('z')==find(keycode)
      resp=3; %top left
    elseif KbName('a')==find(keycode)
      resp=4; %top right
    else
      resp=find(keycode); %if they press any other key
    endif
    
    %Check accuracy of response
    actualPos=find(arrayNums==1); %Location of target displayed
    if(resp==actualPos)
      acc=1;
    else
      acc=0;
    endif    
    %%%%%%%%%%%%%%%%%%%%%%%%%
    %End of Trial Processing%
    %%%%%%%%%%%%%%%%%%%%%%%%%
  
  %Only Record Data for Experimental Trials
  if (i>0)
    %Print data to participant text file
    fprintf(datafilepointer,'%02d %02d %02d %02d %f %02d %02d %02d\n',subNo,i,t,cuecond,respRT,resp,actualPos,acc);
    fflush(datafilepointer);
    
    %Wait to continue
    keyIsDown=0;
    while (keyIsDown==0); 
      [keyIsDown,rt3,keyRef]=KbCheck();
      WaitSecs(.001);
     endwhile
     WaitSecs(.3);
   else
    %Wait to continue
    keyIsDown=0;
    while (keyIsDown==0); 
      [keyIsDown,rt3,keyRef]=KbCheck();
      WaitSecs(.001);
     endwhile
     WaitSecs(.3);
  endif
  %Create an array of words that were presented
  usedWords=[usedWords;Wordlist(1:4)];
  
  %Remove the words from the longer list so there are no repeats
  Wordlist(1:4)=[];
 endfor
  %%%%%%%%%%%%%%%%%%%%%%%%%
  %End of Block Processing%
  %%%%%%%%%%%%%%%%%%%%%%%%%
  
  %Able to use spacebar again
  RestrictKeysForKbCheck([KbName('control'),KbName('alt'),KbName('esc'),KbName('space'),KbName('a'),KbName('s'),KbName('z'),KbName('x')]);
  
  %End of block screen
  if(i>0) %experimental blocks
    bnumText=num2str(i);
    bText=num2str(b);
    bEndText=['This is the end of block ',bnumText,' of ',bText,'.\nPlease take a short break to move around and rest your eyes. \nPress <space> when you are ready to continue.'];
    Screen('FillRect',window,grey);
    DrawFormattedText(window,bEndText,'center','center',black);
    Screen('Flip',window);
   else %practice block
    bEndText=['This is the end of the practice.\n Please tell your experimenter that you have reached this point.\n If you have any questions, please ask your experimenter now.'];
    Screen('FillRect',window,grey);
    DrawFormattedText(window,bEndText,'center','center',black);
    Screen('Flip',window);
  endif
  WaitSecs(1); %Pause to prevent accidental skipping
  keyIsDown=0;
  while (keyIsDown==0);
    [keyIsDown,rt3,keyRef]=KbCheck();
    WaitSecs(.001);
   endwhile
   WaitSecs(.3);
 
%End of Block Loop
endfor

waitText=['You have reach the end of this task. Please tell your experimenter.'];
Screen('FillRect',window,grey);
DrawFormattedText(window,waitText,'center','center',black);
Screen('Flip',window);
checkKeycode=0;
while(sum(checkKeycode==KbName('l'))<1)
  [rTime,checkKey]=KbWait();
  checkKeycode=find(checkKey);
endwhile

fclose(datafilepointer);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%Long-term Memory test processes%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%This should be started approximately 10 minutes after the stimulus identification task
%Open a new file to record responses
LTMdatafilename=strcat(expName,"LTM.",fileNo,".dat"); %Name of file
LTMdatafilepointer=fopen(LTMdatafilename,'wt'); %Open file for writing

cuewordlist=targetwords; %Cue words will be the target words from earlier in the experiment
%cuewordlist will contain both the word and the cue condition from earlier

%Randomize the words
cuewordlist=Shuffle(cuewordlist,2);
Distractorlist=Shuffle(Distractorlist);

%Grab cue conditions
cueconditions=cell2mat(cuewordlist(:,2));

%Cuewordlist is now just the words
cuewordlist=cuewordlist(:,1);

%%%%%%%%%%%%%
%Block Setup%
%%%%%%%%%%%%%

LTMb=1; %Only 1 block for this experiment
%Initiate block loop

for LTMi=1:LTMb;
  LTMn=b*n; %Number of trials equal number of block * trials from earlier
  
  lureN=.2*LTMn; %20% of trials will be lure trials - both will be distractors

  %Instruction screen
  instructText=['You will see two words on the screen. One of the words was previously displayed. \nBelow the words you''ll see a confidence bar ranging from ''Guess'' to ''Sure'' for each word.\nUse your mouse to indicate which word you saw and your level of confidence using the bar.']
  Screen('FillRect',window,grey);
  DrawFormattedText(window,instructText,'center','center');
  Screen('Flip',window);
  WaitSecs(1);
  keyIsDown=0;
  while(keyIsDown==0)
    [keyIsDown,rt3,keyRef]=KbCheck();
    WaitSecs(.001);
  endwhile
  WaitSecs(.3);
  
  %Initiate trial loop
  for LTMt=1:LTMn+lureN
    
    %%%%%%%%%%%%%%%%
    %Trial Sequence%
    %%%%%%%%%%%%%%%%
    
    %Choose real or lure trial
    trialtype=rand;
    if(trialtype<=.2)
      newWords=[Distractorlist(1);Distractorlist(2)]; %Lure trials, should be 20% of the trials
    else
      newWords=[cuewordlist(1);Distractorlist(1)]; %Real trials
    endif

    %Randomize the positions
    arrayNums=[1:2]; %Number of different positions; 1 will always be the target word
    arrayNums=Shuffle(arrayNums); %Shuffle positions
  
    %Fixation Cross
    Screen('FillRect',window,black);
    fixDraw(window,white,xc,yc,20);
    FixOn=Screen('Flip',window);
    
    %Reset cursor, put in center of screen
    ShowCursor('Arrow');
    
    %Response presentation screen for response time calculation
    Screen('FillRect',window,black);
    LTMRespOn=Screen('Flip',window,FixOn+FixDur);
    
    %Response Collection Confidence bar
    SetMouse(xc,y1+15);
    buttons=0;
    while (sum(buttons)==0)
      Screen('TextSize',window,14);
      Screen('FrameRect',window,white,[x1,y2,x4,y3],1);  %Draw scale x-axis
      Screen('FrameRect',window,white,[x5,y2,x8,y3],1);
      Screen('Drawline',window,white,x1,y1,x1,y4);       %Draw whiskers
      Screen('Drawline',window,white,x4,y1,x4,y4);
      Screen('Drawline',window,white,x5,y1,x5,y4);
      Screen('Drawline',window,white,x8,y1,x8,y4);
      DrawFormattedText(window,char(newWords(arrayNums(1))),xc-xres/4,'center',white); %Display words
      DrawFormattedText(window,char(newWords(arrayNums(2))),xc+xres/4,'center',white);
      DrawFormattedText(window,rate1,x1-25,y4,white);    %Write Labels
      DrawFormattedText(window,rate4,x4-26,y4,white);
      DrawFormattedText(window,rate5,x5-11,y4,white);
      DrawFormattedText(window,rate8,x8-25,y4,white);
      [x,y,buttons]=GetMouse(window);  %Get the x,y coordinate of the mouse (which we set above)
      if x>x8
          SetMouse(x8,y1+15);
          x=x8;
      endif
      if x<x1
          SetMouse(x1,y1+15);
          x=x1;
      endif
      Screen('FillRect',window,white,[x-5,y1+5,x+5,y4-5]); %Draw the response box around it
      Screen('Drawline',window,black,x,y1+5,x,y4-5);
      LTMrTime=Screen('Flip',window);
      if(sum([x>x8,x<x1,(x>x4 & x<x5)])>0) %Ignore Responses which are out of bounds
          buttons=0;
      endif
      WaitSecs(.001);
    endwhile
    %%%%%%%%%%%%%%%%%%%%%%%%%
    %End of trial processing%
    %%%%%%%%%%%%%%%%%%%%%%%%%
    
    %Convert the x-coordinate response to a number between -1 and 1
    %Binary coding of left or right response 
    if(x<=x4)
      LTMresp=(x-x4-1)/(x4-x1+1);
      dec=1;  % respond left word
    elseif(x>=x5)
      LTMresp=(x-x5+1)/(x8-x5+1);
      dec=2;  % respond right word
    endif
    
    %Check accuracy of response
    LTMactualPos=find(arrayNums==1); %Location of target displayed
    if(dec==LTMactualPos)
      LTMacc=1;
    else
      LTMacc=0;
    endif  
    
    %Compute RT
    LTMrespRT=LTMrTime-LTMRespOn;
    
    %Find cue condition from previous experiment
    if(trialtype<=.2)
      LTMcuecond=0;
      LTMacc=0;
    else
      LTMcuecond=cueconditions(1);
    endif
    
    %Write data to participant file 
    fprintf(LTMdatafilepointer,'%02d %02d %02d %02d %02d %02d %f %f\n',subNo,LTMi,LTMt,LTMcuecond,dec,LTMacc,LTMresp,LTMrespRT);
    fflush(LTMdatafilepointer);
    
    %Wait to contine
    keyIsDown=0;
    while (keyIsDown==0);
      [keyIsDown,rt3,keyRef]=KbCheck();
      WaitSecs(.001);
    endwhile
    WaitSecs(.3);    
  
  %Remove the words that have already been tested so there are no repeats
  if(trialtype>.2)
    cuewordlist(1)=[];
    cueconditions(1)=[];
  endif
  Distractorlist(1)=[];
  endfor
  
  %%%%%%%%%%%%%%%%%%%%%%%%%
  %End of block processing%
  %%%%%%%%%%%%%%%%%%%%%%%%%
  
  %No end of block text for this experiment
endfor

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%End of Experiment Processing%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


%Release Input
RestrictKeysForKbCheck([]);

%Wait for 'space' key press to end experiment.
Screen('TextSize',window,30);
myText=['All done! Please tell your experimenter'];
DrawFormattedText(window,myText,'center','center');
Screen('Flip',window);
WaitSecs(.2);
checkKeycode=0;
while(sum(checkKeycode==KbName('space'))<1)
  [rTime,checkKey]=KbWait();
  checkKeycode=find(checkKey);
endwhile



%Experiment Close Routines
fclose(LTMdatafilepointer);
Screen('Close',window);