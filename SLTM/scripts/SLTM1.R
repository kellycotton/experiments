#Setup-----
#setwd("~/Dropbox/Research/D1/SLTM")

#load packages
library('BayesFactor')
library(ggplot2)
library(plyr)
library(gridExtra)
library(extrafont)
library(patchwork)

#theme_set(theme_bw())
theme_set(theme_light())
#theme_set(theme_gray())

#Reading Data----

SIdata = read.table('Data/allSLTM1.txt',sep='') #Data for first part of experiment (stimulus identification)
LTMdata = read.table('Data/allSLTM1LTM.txt',sep='') #Data for the second part of the experiment (long-term memory)

#Add column names
colnames(SIdata) = c('sub','block','trial','cue','rt','resp_pos','targ_pos','acc')
colnames(LTMdata) = c('sub','block','trial','cue','dec','acc','resp','rt')

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

#Set confidence rating to be absolute value
LTMdata$resp = abs(LTMdata$resp)

#Data Cleaning----

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

#Accuracy
SIfull.dat = as.data.frame.table(tapply(SIdata$acc,list(SIdata$sub,SIdata$cue),mean))
colnames(SIfull.dat) = c('sub','cue','acc')

#RT
SIrt.dat = as.data.frame.table(tapply(SIdata$rt,list(SIdata$sub,SIdata$cue),mean))
colnames(SIrt.dat) = c('sub','cue','rt')
SIfull.dat$rt <- SIrt.dat[,3]

# **Summary SI----
SI.summary <- ddply(SIfull.dat,c("cue"),summarize,N=length(acc),meanACC=mean(acc),sdACC=sd(acc),seACC=sdACC/sqrt(N),
                 meanRT=mean(rt),sdRT=sd(rt),seRT=sdRT/sqrt(N))


#Basic Stats LTM----

#Accuracy
LTMfull.dat = as.data.frame.table(tapply(LTMdata$acc,list(LTMdata$sub,LTMdata$cue),mean))
colnames(LTMfull.dat) = c('sub','cue','acc')

#RT
LTMrt.dat = as.data.frame.table(tapply(LTMdata$rt,list(LTMdata$sub,LTMdata$cue),mean))
colnames(LTMrt.dat) = c('sub','cue','rt')
LTMfull.dat$rt <- LTMrt.dat[,3]

#Confidence
LTMconf.dat = as.data.frame.table(tapply(LTMdata$resp,list(LTMdata$sub,LTMdata$cue),mean))
colnames(LTMconf.dat) = c('sub','cue','resp')
LTMfull.dat$resp <- LTMconf.dat[,3]

# **Summary LTM----
LTM.summary <- ddply(LTMfull.dat,c("cue"),summarize,N=length(acc),meanACC=mean(acc),sdACC=sd(acc),seACC=sdACC/sqrt(N),
                 meanRT = mean(rt),sdRT=sd(rt),seRT=sdRT/sqrt(N),meanCON=mean(resp),sdCON=sd(resp),seCON=sdCON/sqrt(N))


#Stat Tests SI----

#T Tests
t.test(x=SIfull.dat$acc[(SIfull.dat$cue=="before")],y=SIfull.dat$acc[(SIfull.dat$cue=="during")],paired=TRUE)
bfSI = ttestBF(x=SIfull.dat$acc[(SIfull.dat$cue=="before")], y=SIfull.dat$acc[(SIfull.dat$cue=="during")],paired=TRUE)
bfSI


#Stat Tests LTM----
#T Tests
t.test(x=LTMfull.dat$acc[(LTMfull.dat$cue=="before")], y=LTMfull.dat$acc[(LTMfull.dat$cue=="during")],paired=TRUE)
bfLTM = ttestBF(x=LTMfull.dat$acc[(LTMfull.dat$cue=="before")], y=LTMfull.dat$acc[(LTMfull.dat$cue=="during")],paired=TRUE)
bfLTM

#Confidence
t.test(x=LTMfull.dat$resp[(LTMfull.dat$cue=="before")], y=LTMfull.dat$resp[(LTMfull.dat$cue=="during")],paired=TRUE)
bfCI = ttestBF(x=LTMfull.dat$resp[(LTMfull.dat$cue=="before")], y=LTMfull.dat$resp[(LTMfull.dat$cue=="during")],paired=TRUE)
bfCI


#Plotting----

#Open pdf to print
#pdf("SLTM1_plot.pdf")

# **Accuracy----

#SI
png("acc_1.png", units="in", width=6, height=3, res=300)
p1 <-   ggplot(SI.summary, aes(x=cue, y=meanACC,group=1)) + 
        geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.05) +
        geom_line() + geom_point(shape=21,size=2.5,fill="white")+  
        xlab("Presentation Condition") + ylab("Mean Accuracy") + ggtitle("a") +
        theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0)) +
        scale_x_discrete(labels=c("before" = "Before", "during" = "Simlutaneous")) +
        coord_cartesian(ylim = c(.93, 1))
#LTM
p2<-  ggplot(LTM.summary[-c(3),], aes(x=cue, y=meanACC,group=1)) + 
        geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.05) +
        geom_line() + geom_point(shape=21,size=2.5,fill="white")+  
        xlab("Presentation Condition") + ylab("Mean Accuracy") + ggtitle("b") +
        theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0),axis.title.y = element_blank()) +
        scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous","lure"="Lure")) +
        coord_cartesian(ylim = c(.55, .80))
grid.arrange(p1,p2,nrow=1)
dev.off()

#**RT----
  
#SI
png("rt_1.png", units="in", width=6, height=3, res=300)
p3 <-   ggplot(SI.summary, aes(x=cue, y=meanRT,group=1)) + 
  geom_errorbar(aes(ymin=meanRT-seRT, ymax=meanRT+seRT), width=.05) +
  geom_line() + geom_point(shape=21,size=1.75,fill="white")+  
  xlab("Presentation Condition") + ylab("Mean Reaction Time (ms)") + ggtitle("a") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0)) +
  scale_x_discrete(labels=c("before" = "Before", "during" = "Simlutaneous")) + 
  coord_cartesian(ylim = c(1.4, 3.2))
#LTM
p4<-  ggplot(LTM.summary[-c(3),], aes(x=cue, y=meanRT,group=1)) + 
  geom_errorbar(aes(ymin=meanRT-seRT, ymax=meanRT+seRT), width=.05) +
  geom_line() + geom_point(shape=21,size=1.75,fill="white")+  
  xlab("Presentation Condition") + ylab("Mean Reaction Time (ms)") + ggtitle("b") +
  theme(text = element_text(size=12,family="sans"),plot.title = element_text(hjust=0),axis.title.y = element_blank()) +
  scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous","lure"="Lure")) +
coord_cartesian(ylim = c(2.5,4))
grid.arrange(p3,p4,nrow=1)
dev.off()

#**Confidence----
png("conf_1.png", units="in", width=5, height=3, res=300)
print(
  ggplot(LTM.summary[-c(3),], aes(x=cue, y=meanCON,group=1)) + 
        geom_errorbar(aes(ymin=meanCON-seCON, ymax=meanCON+seCON), width=.05) +
        geom_line() + geom_point(shape=21,size=3.5,fill="white")+ 
        xlab("Presentation Condition") + ylab("Mean Confidence Rating") +
        theme(text = element_text(size=12,family="sans")) +
        scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
        coord_cartesian(ylim = c(.5, .75))
)
dev.off()

