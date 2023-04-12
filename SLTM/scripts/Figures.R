library(ggplot2)
library(extrafont)
library(gridExtra)
library(wesanderson)
SImeans = as.data.frame(SI.summary[(1:2),(1:5)])
names(SImeans) <- c("cue","N","acc","sdACC","seACC")

tiff("SIacc_2.tiff", units="in", width=5, height=5, res=300)
print(
  ggplot(SIfull.dat, aes(x=cue, y=acc,group=1)) +
    #geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1) +
    #geom_line() + geom_point(shape=21,size=5,fill="white") +
    geom_point(shape=21,size=2,fill="steelblue",alpha=.3) +
    geom_errorbar(data=SImeans, aes(ymin=acc-seACC, ymax=acc+seACC), width=.075) +
    geom_line(data=SImeans) +
    geom_point(data=SImeans, shape=21, size = 3, fill="blue4") +
    xlab("Presentation Condition") + ylab("Mean Accuracy") +
    scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
    theme(text = element_text(size=18,family="serif")) +
    coord_cartesian(ylim = c(.85, 1))
)
dev.off()

SImeans = as.data.frame(SIfull.summary[,(1:6)])
names(SImeans) <- c("cue","word","N","acc","sdACC","seACC")

tiff("SIacc_3.tiff", units="in", width=5, height=5, res=300)
print(
  ggplot(SIfull.dat, aes(x=cue, y=acc,group=word,color=word)) +
    #geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1) +
    #geom_line() + geom_point(shape=21,size=5,fill="white") +
    geom_point(shape=21,size=2,fill="steelblue",alpha=.3) +
    geom_errorbar(data=SImeans, aes(ymin=acc-seACC, ymax=acc+seACC), width=.1) +
    geom_line(data=SImeans) +
    geom_point(data=SImeans, shape=21, size = 4, fill="blue4") +
    xlab("Presentation Condition") + ylab("Mean Accuracy") +
    scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
    scale_colour_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    scale_shape_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    theme(text = element_text(size=18,family="serif"),legend.position = "none") +
    coord_cartesian(ylim = c(.85, 1))
)
dev.off()
means = as.data.frame(LTM.summary[(1:2),(1:5)])
names(means) <- c("cue","N","acc","sdACC","seACC")

tiff("LTMacc_2.tiff", units="in", width=5, height=5, res=300)
print(
  ggplot(LTMfull.dat[(LTMfull.dat$cue!="lure"),], aes(x=cue, y=acc,group=1)) +
    #geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1) +
    #geom_line() + geom_point(shape=21,size=5,fill="white") +
    geom_point(shape=21,size=2,fill="steelblue",alpha=.3) +
    geom_errorbar(data=means, aes(ymin=acc-seACC, ymax=acc+seACC), width=.1) +
    geom_line(data=means) +
    geom_point(data=means, shape=21, size = 4, fill="blue4") +
    xlab("Presentation Condition") + ylab("Mean Accuracy") +
    scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
    theme(text = element_text(size=18,family="serif")) +
    coord_cartesian(ylim = c(.38, 1))
)
dev.off()

means = as.data.frame(LTMfull.summary[(1:4),(1:6)])
names(means) <- c("cue","word","N","acc","sdACC","seACC")
tiff("LTMacc_3.tiff", units="in", width=5, height=5, res=300)
print(
  ggplot(LTMfull.dat[(LTMfull.dat$cue!="lure"),], aes(x=cue, y=acc,color=word,group=word)) +
    #geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1) +
    #geom_line() + geom_point(shape=21,size=5,fill="white") +
    geom_point(shape=21,size=2,fill="steelblue",alpha=.3) +
    geom_errorbar(data=means, aes(ymin=acc-seACC, ymax=acc+seACC), width=.1) +
    geom_line(data=means) +
    geom_point(data=means, shape=21, size = 5, fill="blue4") +
    xlab("Presentation Condition") + ylab("Mean Accuracy") +
    scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
    scale_colour_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    scale_shape_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    theme(text = element_text(size=18,family="serif"),legend.position = "none") +
    coord_cartesian(ylim = c(.38, 1))
)
dev.off()

CImeans = as.data.frame(LTM.summary[(1:2),-(3:8)])
names(CImeans) <- c("cue","N","resp","sdRESP","seRESP")

tiff("SIconf_2.tiff", units="in", width=5, height=5, res=300)
print(
  ggplot(LTMfull.dat[(LTMfull.dat$cue!="lure"),], aes(x=cue, y=resp,group=1)) +
    #geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1) +
    #geom_line() + geom_point(shape=21,size=5,fill="white") +
    geom_point(shape=21,size=2,fill="steelblue",alpha=.3) +
    geom_errorbar(data=CImeans, aes(ymin=resp-seRESP, ymax=resp+seRESP), width=.1) +
    geom_line(data=CImeans) +
    geom_point(data=CImeans, shape=21, size = 4, fill="blue4") +
    xlab("Presentation Condition") + ylab("Mean Confidence") +
    scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
    theme(text = element_text(size=18,family="serif")) +
    coord_cartesian(ylim = c(0.1, 1))
)
dev.off()

CImeans = as.data.frame(LTMfull.summary[(1:4),-(3:9)])
names(CImeans) <- c("cue","word","resp","sdRESP","seRESP")
tiff("LTMconf_3.tiff", units="in", width=7, height=5, res=300)
print(
  ggplot(LTMfull.dat[(LTMfull.dat$cue!="lure"),], aes(x=cue, y=resp,color=word,group=word)) +
    #geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1) +
    #geom_line() + geom_point(shape=21,size=5,fill="white") +
    geom_point(shape=21,size=2,fill="steelblue",alpha=.3) +
    geom_errorbar(data=CImeans, aes(ymin=resp-seRESP, ymax=resp+seRESP), width=.1) +
    geom_line(data=CImeans) +
    geom_point(data=CImeans, shape=21, size = 5, fill="blue4") +
    xlab("Presentation Condition") + ylab("Mean Confidence") +
    scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
    scale_colour_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    scale_shape_discrete(name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
    theme(text = element_text(size=18,family="serif")) +
    coord_cartesian(ylim = c(.1, 1))
)
dev.off()


SI.summary1$exp <- "1"
SI.summary$exp <- "2"
SI.summary2 <- rbind(SI.summary,SI.summary1)
LTM.summary1$exp <- "1"
LTM.summary$exp <- "2"
LTM.summary2 <- rbind(LTM.summary,LTM.summary1)
my_colors <- wesanderson::wes_palette("Darjeeling1")[c(4:5)] 


tiff("acc.tiff", units="in", width=8,height=3.5,res=300)

p1 <-  ggplot(SI.summary2, aes(x=cue, y=meanACC,group=exp,color=exp)) + 
    geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1,size=1) +
    geom_line(size=1.75) + geom_point(shape=21,size=2.5,fill="white") + 
    ggtitle("Stimulus Identification") +
    theme(plot.title = element_text(face = "bold",hjust=0.5),legend.position = "none") +
    xlab("Cue Type") + ylab("Mean Accuracy") +
    theme(text = element_text(size=18,family="sans")) +
    scale_x_discrete(labels=c("before" = "Before", "during" = "During")) +
    scale_colour_discrete(name  ="Experiment") +
    coord_cartesian(ylim = c(.93, 1)) +
    scale_color_manual(values=my_colors)
p2<- ggplot(LTM.summary2[(LTM.summary2$cue!="lure"),], aes(x=cue, y=meanACC,group=exp,color=exp)) + 
    geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1,size=1) +
    geom_line(size=1.75) + geom_point(shape=21,size=2.5,fill="white")+ 
    ggtitle("Delayed Recognition") + 
    theme(plot.title = element_text(face = "bold",hjust=0.5),legend.position = "none") +
    xlab("Cue Type") +
    theme(text = element_text(size=18,family="sans"),axis.title.y = element_blank()) +
    scale_x_discrete(labels=c("before" = "Before", "during" = "During")) +
    scale_colour_discrete(name  ="Experiment") +
    coord_cartesian(ylim = c(.55, .80)) +
    scale_color_manual(values=my_colors)

grid.arrange(p1,p2,nrow=1)
dev.off()

tiff("LTMacc.tiff", units="in", width=7, height=5, res=300)
print(
  ggplot(LTM.summary2[(LTM.summary2$cue!="lure"),], aes(x=cue, y=meanACC,group=exp,color=exp)) + 
    geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1) +
    geom_line() + geom_point(shape=21,size=2.5,fill="white")+ 
    ggtitle("Delayed Recognition") + 
    theme(plot.title = element_text(face = "bold",hjust=0.5)) +
    xlab("Cue Type") + ylab("Mean Accuracy") +
    theme(text = element_text(size=18,family="sans")) +
    scale_x_discrete(labels=c("before" = "Before", "during" = "During")) +
    scale_colour_discrete(name  ="Experiment") +
    coord_cartesian(ylim = c(.55, .80))
)
dev.off()

tiff("LTMconf.tiff", units="in", width=7, height=5, res=300)
print(
  ggplot(LTM.summary2[(LTM.summary2$cue!="lure"),], aes(x=cue, y=meanCON,group=exp,color=exp)) + 
    geom_errorbar(aes(ymin=meanCON-seCON, ymax=meanCON+seCON), width=.1) +
    geom_line() + geom_point(shape=21,size=2.5,fill="white")+ #ggtitle("Long-term Recognition Experiment 1") + 
    xlab("Cue Type") + ylab("Mean Confidence Rating") +
    theme(text = element_text(size=18,family="serif")) +
    scale_x_discrete(labels=c("before" = "Before", "during" = "During")) +
    scale_colour_discrete(name  ="Experiment") +
    coord_cartesian(ylim = c(.5, .75))
)
dev.off()

tiff("exp3.tiff", units="in", width=8,height=3.5,res=300)

p3 <- ggplot(SIfull.summary, aes(x=cue, y=meanACC,colour=word,group=word)) +
      geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1,size=1) +
      geom_line(size=1.75) + geom_point(shape=21,size=2.5,fill="white") + 
      theme(plot.title = element_text(face = "bold",hjust=0.5),legend.position = "none") +
      xlab("Presentation Condition") + ylab("Mean Accuracy") +
      theme(text = element_text(size=18,family="serif")) +
      scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
      scale_colour_discrete(name  ="Experiment") +
      coord_cartesian(ylim = c(.93, 1)) +
      scale_color_manual(values=my_colors)

p4 <- ggplot(LTMfull.summary[-c(5),], aes(x=cue, y=meanACC,colour=word,group=word)) +
  geom_errorbar(aes(ymin=meanACC-seACC, ymax=meanACC+seACC), width=.1,size=1) +
  geom_line(size=1.75) + geom_point(shape=21,size=2.5,fill="white")+ 
  theme(plot.title = element_text(face = "bold",hjust=0.5)) +
  xlab("Presentation Condition") +
  theme(text = element_text(size=18,family="serif"),axis.title.y = element_blank()) +
  guides(color = guide_legend(override.aes = list(size = 1))) +
  scale_x_discrete(labels=c("before" = "Before", "during" = "Simultaneous")) +
  coord_cartesian(ylim = c(.55, .80)) +
  scale_color_manual(values=my_colors,name  ="Stimuli Type",breaks=c("nonword", "word"), labels=c("Nonword", "Word")) +
  theme(legend.title = element_text(size = 13), 
        legend.text = element_text(size = 13))
grid.arrange(p3,p4,nrow=1)
dev.off()





