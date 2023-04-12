#Setup-----
#setwd("~/Dropbox/Research/D1/SLTM")

#load packages
library('BayesFactor')
library(tidyverse)
library(plyr)
library(gridExtra)
library(extrafont)
library(patchwork)

theme_set(theme_light())
#theme_set(theme_bw())
#theme_set(theme_gray())

#Reading Data----

SIdata = read.table('Data/allSLTM4.txt',sep='') #Data for first part of experiment (stimulus identification)
LTMdata = read.table('Data/allSLTM4LTM.txt',sep='') #Data for the second part of the experiment (long-term memory)

#Add column names
colnames(SIdata) = c('sub','block','trial','cue','word','rt','resp_pos','targ_pos','acc')
colnames(LTMdata) = c('sub','block','trial','cue','word','dec','acc','resp','rt')

#Make subject numbers factor
SIdata$sub = as.factor(SIdata$sub)
N = length(levels(SIdata$sub))
LTMdata$sub = as.factor(LTMdata$sub)

#Rename cues from 1s and 0s to actual name
SIdata$cue[SIdata$cue==1] = 'before'
SIdata$cue[SIdata$cue==2] = 'during'
LTMdata$cue[LTMdata$cue==1] = 'before'
LTMdata$cue[LTMdata$cue==2] = 'during'
LTMdata$cue[LTMdata$cue==0] = 'lure'

SIdata$word[SIdata$word==1] = 'word'
SIdata$word[SIdata$word==2] = 'nonword'
LTMdata$word[LTMdata$word==1] = 'word'
LTMdata$word[LTMdata$word==2] = 'nonword'
LTMdata$word[LTMdata$word==0] = 'lure'

#Set confidence rating to be absolute value
LTMdata$resp = abs(LTMdata$resp)

#Data Cleaning----

#Manually remove 2 participants that did not complete both tasks
SIdata=SIdata[(SIdata$sub!=11),]
SIdata=SIdata[(SIdata$sub!=14),]

#Remove outliers using boxplot (1.5xIQR)
boxplot(SIdata$rt)
IQRSI = IQR(SIdata$rt)
OutVals = boxplot(SIdata$rt,plot=FALSE)$out
SIdata = SIdata[!(SIdata$rt %in% OutVals),]
boxplot(SIdata$rt)

boxplot(LTMdata$rt)
IQRLTM = IQR(LTMdata$rt)
OutVals = boxplot(LTMdata$rt, plot=FALSE)$out
LTMdata = LTMdata[!(LTMdata$rt %in%OutVals),]
boxplot(LTMdata$rt)

#Reformat data
LTMdata$sub = factor(LTMdata$sub)
SIdata$sub = factor(SIdata$sub)
N = length(levels(LTMdata$sub))
levels(LTMdata$sub) = 1:N
N = length(levels(SIdata$sub))
levels(SIdata$sub) = 1:N


#Basic Stats SI----

#By Cue Type

#Accuracy
SIcue.dat = as.data.frame.table(tapply(SIdata$acc,list(SIdata$sub,SIdata$cue),mean))
colnames(SIcue.dat) = c('sub','cue','acc')

#RT
SIcuert.dat = as.data.frame.table(tapply(SIdata$rt,list(SIdata$sub,SIdata$cue),mean))
colnames(SIcuert.dat) = c('sub','cue','rt')
SIcue.dat$rt <- SIcuert.dat[,3]

#**Summary SI Cue----
SIcue.summary <- ddply(SIcue.dat,c("cue"),summarize,N=length(acc),meanACC=mean(acc),sdACC=sd(acc),seACC=sdACC/sqrt(N),
                 meanRT=mean(rt),sdRT=sd(rt),seRT=sdRT/sqrt(N))

#By Stimulus Type

#Accuracy
SIword.dat = as.data.frame.table(tapply(SIdata$acc,list(SIdata$sub,SIdata$word),mean))
colnames(SIword.dat) = c('sub','word','acc')

#RT
SIwordrt.dat = as.data.frame.table(tapply(SIdata$rt,list(SIdata$sub,SIdata$word),mean))
colnames(SIwordrt.dat) = c('sub','word','rt')
SIword.dat$rt <- SIwordrt.dat[,3]

#**Summary SI Stimulus----
SIword.summary <- ddply(SIword.dat,c("word"),summarize,N=length(acc),meanACC=mean(acc),sdACC=sd(acc),seACC=sdACC/sqrt(N),
                 meanRT=mean(rt),sdRT=sd(rt),seRT=sdRT/sqrt(N))

#By Cue Type x Stimulus Type

#Accuracy
SIfull.dat = as.data.frame.table(tapply(SIdata$acc,list(SIdata$sub,SIdata$cue,SIdata$word),mean))
colnames(SIfull.dat) = c('sub','cue','word','acc')

#RT
SIrt.dat = as.data.frame.table(tapply(SIdata$rt,list(SIdata$sub,SIdata$cue,SIdata$word),mean))
colnames(SIrt.dat) = c('sub','cue','word','rt')
SIfull.dat$rt <- SIrt.dat[,4]

#**Summary SI Cue x Stimulus----
SIfull.summary <- ddply(SIfull.dat,c("cue","word"),summarize,N=length(acc),meanACC=mean(acc),sdACC=sd(acc),seACC=sdACC/sqrt(N),
                 meanRT=mean(rt),sdRT=sd(rt),seRT=sdRT/sqrt(N))


#Basic Stats LTM----

#By Cue Type

#Accuracy
LTMcue.dat = as.data.frame.table(tapply(LTMdata$acc,list(LTMdata$sub,LTMdata$cue),mean,na.rm=TRUE))
colnames(LTMcue.dat) = c('sub','cue','acc')

#RT
LTMcuert.dat = as.data.frame.table(tapply(as.numeric(LTMdata$rt),list(LTMdata$sub,LTMdata$cue),mean,na.rm=TRUE))
colnames(LTMcuert.dat) = c('sub','cue','rt')
LTMcue.dat$rt<-(LTMcuert.dat[,3])

#Confidence
LTMcueconf.dat = as.data.frame.table(tapply(LTMdata$resp,list(LTMdata$sub,LTMdata$cue),mean,na.rm=TRUE))
colnames(LTMcueconf.dat) = c('sub','cue','resp')
LTMcue.dat$resp <- LTMcueconf.dat[,3]

#Remove combinations that don't exist (i.e., word x lure, etc.)
LTMcue.dat = LTMcue.dat[complete.cases(LTMcue.dat),]

#**Summary LTM Cue----
LTMcue.summary <- ddply(LTMcue.dat,c("cue"),summarize,N=length(acc),meanACC=mean(acc),sdACC=sd(acc),seACC=sdACC/sqrt(N),
                 meanRT=mean(rt),sdRT=sd(rt),seRT=sdRT/sqrt(N),meanCON=mean(resp),sdCON=sd(resp),seCON=sdCON/sqrt(N))

#By Stimulus Type

#Accuracy
LTMword.dat = as.data.frame.table(tapply(LTMdata$acc,list(LTMdata$sub,LTMdata$word),mean,na.rm=TRUE))
colnames(LTMword.dat) = c('sub','word','acc')

#RT
LTMwordrt.dat = as.data.frame.table(tapply(as.numeric(LTMdata$rt),list(LTMdata$sub,LTMdata$word),mean,na.rm=TRUE))
colnames(LTMwordrt.dat) = c('sub','word','rt')
LTMword.dat$rt <- (LTMwordrt.dat[,3])

#Confidence
LTMwordconf.dat = as.data.frame.table(tapply(LTMdata$resp,list(LTMdata$sub,LTMdata$word),mean,na.rm=TRUE))
colnames(LTMwordconf.dat) = c('sub','word','resp')
LTMword.dat$resp <- LTMwordconf.dat[,3]

#Remove combinations that don't exist (i.e., word x lure, etc.)
LTMword.dat = LTMword.dat[complete.cases(LTMword.dat),]

#**Summary LTM Stimulus----
LTMword.summary <- ddply(LTMword.dat,c("word"),summarize,N=length(acc),meanACC=mean(acc),sdACC=sd(acc),seACC=sdACC/sqrt(N),
                 meanRT=mean(rt),sdRT=sd(rt),seRT=sdRT/sqrt(N),meanCON=mean(resp),sdCON=sd(resp),seCON=sdCON/sqrt(N))

#By Cue Type x Stimulus Type

#Accuracy
LTMfull.dat = as.data.frame.table(tapply(LTMdata$acc,list(LTMdata$sub,LTMdata$cue,LTMdata$word),mean,na.rm=TRUE))
colnames(LTMfull.dat) = c('sub','cue','word','acc')

#RT
LTMrt.dat = as.data.frame.table(tapply(as.numeric(LTMdata$rt),list(LTMdata$sub,LTMdata$cue,LTMdata$word),mean,na.rm=TRUE))
colnames(LTMrt.dat) = c('sub','cue','word','rt')
LTMfull.dat$rt<-(LTMrt.dat[,4])

#Confidence
LTMconf.dat = as.data.frame.table(tapply(LTMdata$resp,list(LTMdata$sub,LTMdata$cue,LTMdata$word),mean,na.rm=TRUE))
colnames(LTMconf.dat) = c('sub','cue','word','resp')
LTMfull.dat$resp <- LTMconf.dat[,4]

#Remove combinations that don't exist (i.e., word x lure, etc.)
LTMfull.dat = LTMfull.dat[complete.cases(LTMfull.dat),]

#**Summary LTM Cue x Stimulus----
LTMfull.summary <- ddply(LTMfull.dat,c("cue","word"),summarize,N=length(acc),meanACC=mean(acc),sdACC=sd(acc),seACC=sdACC/sqrt(N),
                 meanRT=mean(rt),sdRT=sd(rt),seRT=sdRT/sqrt(N),meanCON=mean(resp),sdCON=sd(resp),seCON=sdCON/sqrt(N))


#Stat Tests SI----

#T Tests
t.test(x=SIcue.dat$acc[(SIcue.dat$cue=="before")], y=SIcue.dat$acc[(SIcue.dat$cue=="during")],paired=TRUE)
bfSIcue = ttestBF(x=SIcue.dat$acc[(SIcue.dat$cue=="before")], y=SIcue.dat$acc[(SIcue.dat$cue=="during")],paired=TRUE)
bfSIcue

bfSIword = ttestBF(x=SIword.dat$acc[(SIword.dat$word=="word")], y=SIword.dat$acc[(SIword.dat$word=="nonword")],paired=TRUE)
bfSIword

#ANOVA
SI.anova = summary(aov(acc~cue+word+Error(sub/(cue+word)),data=SIfull.dat))
SI.anova
SI.anova2 = summary(aov(acc~(cue*word)+Error(sub/(cue*word)),data=SIfull.dat))
SI.anova2
SI.bf = anovaBF(acc~cue+sub+word, dat=SIfull.dat, whichRandom='sub', iterations=5000, rscaleFixed=sqrt(2)/2)
sort(SI.bf)
SI.bf[4]/SI.bf[3]


#Stat Tests LTM----

#ANOVA 
LTM.anova = summary(aov(acc~cue+word+Error(sub/(cue+word)), data=LTMfull.dat[(LTMfull.dat$cue!="lure"),]))
LTM.anova
LTM.bf = anovaBF(acc~cue+word+sub, dat=LTMfull.dat[(LTMfull.dat$cue!="lure"),], whichRandom='sub', iterations=5000, rscaleFixed=sqrt(2)/2)
sort(LTM.bf)
LTM.bf[4]/LTM.bf[3]

#Confidence

CON.anova = summary(aov(resp~cue+word(sub/(cue+word)), data=LTMfull.dat[(LTMfull.dat$cue!="lure"),]))
CON.anova
CON.bf = anovaBF(resp~cue+word+sub, dat=LTMfull.dat[(LTMfull.dat$cue!="lure"),], whichRandom='sub', iterations=5000, rscaleFixed=sqrt(2)/2)
sort(CON.bf)
CON.bf[4]/CON.bf[3]


#Plotting----

#Open pdf to print
#pdf("SLTM4_plots.pdf")

## **Accuracy----
#SI Cue x Stimulus

#SI
png("acc_3.png", units="in", width=6, height=3, res=300)
p1 <-   ggplot(SIfull.summary, aes(x=cue, y=meanACC,group=word,shape=word,linetype=word,color=word)) + 
  geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.05,linetype="solid") +
  geom_line() + geom_point(size=2.5)+ 
  xlab("Presentation Condition") + ylab("Mean Accuracy") +
  ggtitle("a") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0),legend.position = "none") +
  scale_x_discrete(labels=c("before" = "Before", "during" = "Simlutaneous")) +
  scale_color_grey(start=0.5, end=0) +
  coord_cartesian(ylim = c(.92, 1))

#LTM
p2<-  ggplot(LTMfull.summary[-c(5),], aes(x=cue, y=meanACC,group=word,shape=word,linetype=word,color=word)) + 
  geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.05,linetype="solid") +
  geom_line() + geom_point(size=2.5)+ 
  xlab("Presentation Condition") + ylab("Mean Accuracy") + ggtitle("b") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0),axis.title.y = element_blank(),legend.position = c(.75,.8)) +
  scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous","lure"="Lure")) +
  coord_cartesian(ylim = c(.55, .80)) +
  scale_linetype_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
  scale_shape_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
  scale_color_grey(start=0.5, end=0,name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) 
grid.arrange(p1,p2,nrow=1)
dev.off()

# **RT----

#SI
png("rt_3.png", units="in", width=6, height=3, res=300)
p3 <-     ggplot(SIfull.summary[-c(5),], aes(x=cue, y=meanRT,linetype=word,group=word,color=word,shape=word)) +
  geom_errorbar(aes(ymin=meanRT-seRT, ymax=meanRT+seRT), width=.05,linetype="solid") +
  geom_line() + geom_point(size=2.5,fill="white")+ 
  theme(plot.title = element_text(hjust=0.5)) +
  xlab("Presentation Condition") + ylab("Mean Reaction Time (ms)") + ggtitle("a") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0),legend.position = "none") +
  scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous","lure"="Lure")) +
  scale_color_grey(start=0.5, end=0) +
  coord_cartesian(ylim = c(1.4, 3.2))
#LTM
p4<-    ggplot(LTMfull.summary[-c(5),], aes(x=cue, y=meanRT,linetype=word,group=word,shape=word,color=word)) +
  geom_errorbar(aes(ymin=meanRT-seRT, ymax=meanRT+seRT), width=.05,linetype="solid") +
  geom_line() + geom_point(size=2.5)+  
  theme(plot.title = element_text(hjust=0.5)) +
  xlab("Presentation Condition") + ylab("Mean Reaction Time (ms)") + ggtitle("b") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0),axis.title.y = element_blank(),legend.position = c(.75,.8)) +
  scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous","lure"="Lure")) +
  scale_linetype_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
  scale_shape_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
  scale_color_grey(start=0.5, end=0,name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
  coord_cartesian(ylim = c(2.0, 4))
grid.arrange(p3,p4,nrow=1)
dev.off()

#**Confidence----

#LTM Cue x Stimulus
png("conf_3.png", units="in", width=6, height=3, res=300)
print(
  ggplot(LTMfull.summary[-c(5),], aes(x=cue, y=meanCON,group=word,linetype=word,shape=word,color=word)) +
    geom_errorbar(aes(ymin=meanCON-seCON, ymax=meanCON+seCON), width=.05,linetype="solid") +
    geom_line() + geom_point(size=3.5) + 
    theme(plot.title = element_text(face = "bold",hjust=0.5)) +
    xlab("Presentation Condition") + ylab("Mean Confidence Rating") +
    theme(text = element_text(size=18,family="sans")) +
    theme(text = element_text(size=12,family="sans"),legend.position = c(.8,.8)) +
    scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous","lure"="Lure")) +
    scale_shape_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    scale_linetype_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    scale_color_grey(start=0.5, end=0,name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    coord_cartesian(ylim = c(.5, .75))
)
dev.off()

#SI
png("acc_word.png", units="in", width=6, height=3, res=300)
p1 <-   ggplot(SIword.summary, aes(x=word, y=meanACC,group=1)) + 
  geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.05) +
  geom_line() + geom_point(shape=21,size=1.75,fill="white")+  
  xlab("Stimuli Type") + ylab("Mean Accuracy") + ggtitle("a") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0)) +
  scale_x_discrete(labels=c("word" = "Word", "nonword" = "Nonword")) +
  coord_cartesian(ylim = c(.93, 1))
#LTM
p2<-  ggplot(LTMword.summary[-c(1),], aes(x=word, y=meanACC,group=1)) + 
  geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.05) +
  geom_line() + geom_point(shape=21,size=1.75,fill="white")+  
  xlab(" Stimuli Type") + ylab("Mean Accuracy") + ggtitle("b") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0),axis.title.y = element_blank()) +
  scale_x_discrete(labels=c("word" = "Word", "nonword" = "Nonword")) +
  coord_cartesian(ylim = c(.55, .80))
grid.arrange(p1,p2,nrow=1)
dev.off()

#**RT----

#SI
png("rt_word.png", units="in", width=6, height=3, res=300)
p3 <-   ggplot(SIword.summary, aes(x=word, y=meanRT,group=1)) + 
  geom_errorbar(aes(ymin=meanRT-seRT, ymax=meanRT+seRT), width=.05) +
  geom_line() + geom_point(shape=21,size=1.75,fill="white")+  
  xlab("Stimuli Type") + ylab("Mean Reaction Time (ms)") + ggtitle("a") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0)) +
  scale_x_discrete(labels=c("word" = "Word", "nonword" = "Nonword")) + 
  coord_cartesian(ylim = c(1.4, 3.2))
#LTM
p4<-  ggplot(LTMword.summary[-c(1),], aes(x=word, y=meanRT,group=1)) + 
  geom_errorbar(aes(ymin=meanRT-seRT, ymax=meanRT+seRT), width=.05) +
  geom_line() + geom_point(shape=21,size=1.75,fill="white")+  
  xlab("Stimuli Type") + ylab("Mean Reaction Time (ms)") + ggtitle("b") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0),axis.title.y = element_blank()) +
  scale_x_discrete(labels=c("word" = "Word", "nonword" = "Nonword")) +
  coord_cartesian(ylim = c(1.4, 3.2))
grid.arrange(p3,p4,nrow=1)
dev.off()
