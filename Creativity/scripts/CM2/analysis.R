# CM2 analysis
#Setup-----

# Load packages
library(tidyverse)
library(patchwork)
library(BayesFactor)

set.seed(123)

theme_set(theme_bw())
pal <- c("#FF8C61", "#985277")

# Read data
alldata <- read_csv(here::here("CM2", "data", "output_data", "alldata_summary.csv"))
alldata_si <- read_csv(here::here("CM2", "data", "output_data", "alldata_si.csv"))
alldata_dr <- read_csv(here::here("CM2", "data", "output_data", "alldata_dr.csv"))
alldata_rat <- read_csv(here::here("CM2", "data", "output_data", "alldata_rat.csv"))
alldata_au <- read_csv(here::here("CM2", "data", "output_data", "alldata_au.csv"))
creative_data <- read_csv(here::here("CM2", "data", "creativity_ratings.csv"))
valid_data <- read_csv(here::here("CM2", "data", "valid_ratings.csv"))
category_data <- read_csv(here::here("CM2", "data", "category_ratings.csv"))
originality_data <- read_csv(here::here("CM2", "data", "original_ratings.csv"))

alldata_dr$confidence <- abs(alldata_dr$confidence)

# Basic demographics----
alldata %>% 
  group_by(Problem_Condition) %>% 
  count()

# Remove poor RAT performers
poor_rat <- alldata %>% filter(RAT_acc == 0) %>% pull(ID) 
alldata_clean <- alldata %>% filter(!ID %in% poor_rat)

# AUT/Math and Creativity Tasks----

# Cleaned creative condition mean and sd
creative_data %>% 
  filter(Valid == 1) %>% 
  group_by(ID, Item) %>% 
  summarize(count = n()) %>% 
  ungroup() %>% 
  summarize(mean = mean(count), sd = sd(count))

# Math condition mean and sd
alldata_au %>% 
  filter(Problem_Condition == "math") %>% 
  mutate(acc = ifelse(textInput_problem == CorrectAnswer_math, 1, 0)) %>% 
  mutate(acc = replace_na(acc, 0)) %>% 
  summarise(mean = mean(acc), sd = sd(acc))

# Remote Associates mean and sd all participants
alldata %>% 
  summarise(mean = mean(RAT_acc), sd = sd(RAT_acc))

# Without poor RAT performers
alldata_clean %>% 
  summarise(mean = mean(RAT_acc), sd = sd(RAT_acc))

# Remote Associates mean and sd by condition
alldata %>% 
  group_by(Problem_Condition) %>% 
  summarise(mean = mean(RAT_acc), sd = sd(RAT_acc))

# T.test for difference on RAT
dat_c <- alldata %>% 
  select(Problem_Condition, RAT_acc) %>% 
  filter(Problem_Condition == "creative")

dat_m <- alldata %>% 
  select(Problem_Condition, RAT_acc) %>% 
  filter(Problem_Condition == "math")

t.test(x = dat_c$RAT_acc, y = dat_m$RAT_acc, paired = FALSE, var.equal=TRUE)
bfRAT = ttestBF(x = dat_c$RAT_acc, y = dat_m$RAT_acc, paired = FALSE)
bfRAT

# Without poor RAT 
dat_c <- alldata_clean %>% 
  select(Problem_Condition, RAT_acc) %>% 
  filter(Problem_Condition == "creative")

dat_m <- alldata_clean %>% 
  select(Problem_Condition, RAT_acc) %>% 
  filter(Problem_Condition == "math")

t.test(x = dat_c$RAT_acc, y = dat_m$RAT_acc, paired = FALSE, var.equal=TRUE)
bfRAT = ttestBF(x = dat_c$RAT_acc, y = dat_m$RAT_acc, paired = FALSE)
bfRAT

# Consolidation Effect----

# Stimulus identification task mean and sd by presentation condition
alldata_si %>% 
  group_by(participant, presentation) %>% 
  summarise(mean_pt = mean(key_resp_si.corr), sd_pt = sd(key_resp_si.corr)) %>% 
  group_by(presentation) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

# T.test for difference on SI task
t.test(x = alldata$SI_acc_before, y = alldata$SI_acc_during, paired = TRUE)
bfSI = ttestBF(x = alldata$SI_acc_before, y = alldata$SI_acc_during, paired = TRUE)
bfSI

# Without poor RAT
alldata_si %>% 
  filter(!participant %in% poor_rat) %>% 
  group_by(participant, presentation) %>% 
  summarise(mean_pt = mean(key_resp_si.corr), sd_pt = sd(key_resp_si.corr)) %>% 
  group_by(presentation) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

t.test(x = alldata_clean$SI_acc_before, y = alldata_clean$SI_acc_during, paired = TRUE)
bfSI = ttestBF(x = alldata_clean$SI_acc_before, y = alldata_clean$SI_acc_during, paired = TRUE)
bfSI
  
# Delayed recognition task mean and sd by presentation condition accuracy
alldata_dr %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_pt = mean(accuracy), sd_pt = sd(accuracy)) %>% 
  group_by(PresentationCondition) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

# T.test for difference on DR task
t.test(x = alldata$DR_acc_before, y = alldata$DR_acc_during, paired = TRUE)
bfDR = ttestBF(x = alldata$DR_acc_before, y = alldata$DR_acc_during, paired = TRUE)
bfDR

# Without poor RAT
alldata_dr %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_pt = mean(accuracy), sd_pt = sd(accuracy)) %>% 
  group_by(PresentationCondition) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

# T.test for difference on DR task
t.test(x = alldata_clean$DR_acc_before, y = alldata_clean$DR_acc_during, paired = TRUE)
bfDR = ttestBF(x = alldata_clean$DR_acc_before, y = alldata_clean$DR_acc_during, paired = TRUE)
bfDR

# Delayed recognition task mean and sd by presentation condition confidence
alldata_dr %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_pt = mean(confidence), sd_pt = sd(confidence)) %>% 
  group_by(PresentationCondition) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

# T.test for difference on DR task
t.test(x = alldata$DR_conf_before, y = alldata$DR_conf_during, paired = TRUE)
bfC = ttestBF(x = alldata$DR_conf_before, y = alldata$DR_conf_during, paired = TRUE)
bfC

# Without poor RAT
alldata_dr %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_pt = mean(confidence), sd_pt = sd(confidence)) %>% 
  group_by(PresentationCondition) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

# T.test for difference on DR task
t.test(x = alldata_clean$DR_conf_before, y = alldata_clean$DR_conf_during, paired = TRUE)
bfC = ttestBF(x = alldata_clean$DR_conf_before, y = alldata_clean$DR_conf_during, paired = TRUE)
bfC

# Plotting

# Accuracy
p1 <- alldata %>% 
  select(c(ID, contains("acc_before"), contains("acc_during"))) %>% 
  pivot_longer(cols = !ID,
               names_to = c("task", "presentation"), 
               names_pattern = "(.*)_acc_(.*)", 
               values_to = "accuracy") %>% 
  group_by(task, presentation, ID) %>% 
  summarise(mean_pt = mean(accuracy)) %>% 
  group_by(task, presentation) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd(mean_pt)/sqrt(n())) %>% 
  ggplot(aes(presentation, mean, shape = task, color = task, group = task)) +
  geom_errorbar(aes(ymin = mean-se, ymax = mean+se), width = .1) +
  geom_line() +
  geom_point(size = 4) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  ) +
  xlab("Presentation Condition") + ylab("Mean Accuracy") +
  scale_x_discrete(labels = c("Before", "Simultaneous"),
                   expand = c(0.1,0.1)) +
  scale_shape_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task") +
  scale_color_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task", 
                       type = pal) +
  coord_cartesian(ylim = c(0.55, 1))

# Confidence
p2 <- alldata %>% 
  select(c(ID, contains("conf_before"), contains("conf_during"))) %>% 
  pivot_longer(cols = !ID,
               names_to = "presentation", 
               names_pattern = "DR_conf_(.*)", 
               values_to = "confidence") %>% 
  group_by(presentation, ID) %>% 
  summarise(mean_pt = mean(confidence)) %>% 
  group_by(presentation) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd(mean_pt)/sqrt(n())) %>% 
  ggplot(aes(presentation, mean)) +
  geom_errorbar(aes(ymin = mean-se, ymax = mean+se), width = .1, color = c("#FF8C61")) +
  geom_line(group = 1, color = c("#FF8C61")) +
  geom_point(size = 4, color = c("#FF8C61")) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  ) +
  xlab("Presentation Condition") + ylab("Mean Confidence") +
  scale_x_discrete(labels = c("Before", "Simultaneous"),
                   expand = c(0.1,0.1)) +
  scale_y_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(25, 75))

(p1 + p2) +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 
  

#ggsave(here::here("CM2", "figures", "plot1.png"), units = "in")

# State Induction Effect----

# Stimulus identification task mean and sd by state induction condition
alldata %>% 
  group_by(Problem_Condition) %>% 
  summarise(mean = mean(SI_acc_mean), sd = sd(SI_acc_mean)) 

# T.test for difference on SI task
data_x <- alldata %>% 
  filter(Problem_Condition == "creative") %>% 
  select(contains("mean"))

data_y <- alldata %>% 
  filter(Problem_Condition == "math") %>% 
  select(contains("mean"))

t.test(x = data_x$SI_acc_mean, y = data_y$SI_acc_mean, paired = FALSE, var.equal=TRUE)
bfSI = ttestBF(x = data_x$SI_acc_mean, y = data_y$SI_acc_mean, paired = FALSE)
bfSI

# Delayed recognition task mean and sd by presentation condition accuracy
alldata %>% 
  group_by(Problem_Condition) %>% 
  summarise(mean = mean(DR_acc_mean), sd = sd(DR_acc_mean)) 

# T.test for difference on DR task
t.test(x = data_x$DR_acc_mean, y = data_y$DR_acc_mean, paired = FALSE, var.equal=TRUE)
bfDR = ttestBF(x = data_x$DR_acc_mean, y = data_y$DR_acc_mean, paired = FALSE)
bfDR

# Delayed recognition task mean and sd by presentation condition confidence
alldata %>% 
  group_by(Problem_Condition) %>% 
  summarise(mean = mean(DR_conf_mean), sd = sd(DR_conf_mean)) 

# T.test for difference on DR task
t.test(x = data_x$DR_conf_mean, y = data_y$DR_conf_mean, paired = FALSE, var.equal=TRUE)
bfC = ttestBF(x = data_x$DR_conf_mean, y = data_y$DR_conf_mean, paired = FALSE)
bfC


# Without poor RAT
data_x <- alldata %>% 
  filter(!ID %in% poor_rat) %>% 
  filter(Problem_Condition == "creative") %>% 
  select(contains("mean"))

data_y <- alldata %>% 
  filter(!ID %in% poor_rat) %>% 
  filter(Problem_Condition == "math") %>% 
  select(contains("mean"))

t.test(x = data_x$SI_acc_mean, y = data_y$SI_acc_mean, paired = FALSE, var.equal=TRUE)
bfSI = ttestBF(x = data_x$SI_acc_mean, y = data_y$SI_acc_mean, paired = FALSE)
bfSI

# T.test for difference on DR task
t.test(x = data_x$DR_acc_mean, y = data_y$DR_acc_mean, paired = FALSE, var.equal=TRUE)
bfDR = ttestBF(x = data_x$DR_acc_mean, y = data_y$DR_acc_mean, paired = FALSE)
bfDR

# T.test for difference on DR task
t.test(x = data_x$DR_conf_mean, y = data_y$DR_conf_mean, paired = FALSE, var.equal=TRUE)
bfC = ttestBF(x = data_x$DR_conf_mean, y = data_y$DR_conf_mean, paired = FALSE)
bfC

# Plotting

# Accuracy
p3 <- alldata %>% 
  select(c(ID, Problem_Condition, contains("acc_mean"))) %>% 
  pivot_longer(cols = !c(ID, Problem_Condition),
               names_to = c("task"), 
               names_pattern = "(.*)_acc_mean", 
               values_to = "accuracy") %>% 
  group_by(task, Problem_Condition) %>% 
  summarise(mean = mean(accuracy), sd = sd(accuracy), se = sd(accuracy)/sqrt(n())) %>% 
  ggplot(aes(Problem_Condition, mean, shape = task, color = task, group = task)) +
  geom_errorbar(aes(ymin = mean-se, ymax = mean+se), width = .1) +
  geom_line() +
  geom_point(size = 4) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  ) +
  xlab("State Induction Condition") + ylab("Mean Accuracy") +
  scale_x_discrete(labels = c("Creative", "Math"),
                   expand = c(0.1,0.1)) +
  scale_shape_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task") +
  scale_color_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task", 
                       type = pal)+
  coord_cartesian(ylim = c(0.55, 1))

# Confidence
p4 <- alldata %>% 
  select(c(ID, Problem_Condition, contains("conf_mean"))) %>% 
  pivot_longer(cols = !c(ID, Problem_Condition),
               names_to = c("task"), 
               names_pattern = "(.*)_conf_mean", 
               values_to = "confidence") %>% 
  group_by(task, Problem_Condition) %>% 
  summarise(mean = mean(confidence), sd = sd(confidence), se = sd(confidence)/sqrt(n())) %>% 
  ggplot(aes(Problem_Condition, mean)) +
  geom_errorbar(aes(ymin = mean-se, ymax = mean+se), width = .1, color = c("#FF8C61")) +
  geom_line(group = 1, color = c("#FF8C61")) +
  geom_point(size = 4, color = c("#FF8C61")) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  ) +
  xlab("State Induction Condition") + ylab("Mean Confidence") +
  scale_x_discrete(labels = c("Creative", "Math"),
                   expand = c(0.1,0.1)) +
  scale_y_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(25, 75))

(p3 + p4) +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 


#ggsave(here::here("CM2", "figures", "plot2.png"), width = 9.5, units = "in")

# Presentation x Problem-Solving Effect----

# Stimulus identification task ANOVA by presentation x problem-solving condition
si_anova <- alldata %>% 
  select(Problem_Condition, SI_acc_before, SI_acc_during) %>% 
  rowid_to_column("ID") %>% 
  pivot_longer(cols = -c("ID","Problem_Condition"),
               names_to = "Presentation",
               names_pattern = "SI_acc_(.*)",
               values_to = "Accuracy") %>% 
  mutate(ID = as.factor(ID),
         Problem_Condition = as.factor(Problem_Condition),
         Presentation = as.factor(Presentation))

SIanova = summary(aov(Accuracy~Presentation*Problem_Condition + Error(ID/Presentation), data=si_anova))
SIanova
SIanova.bf = anovaBF(Accuracy~Presentation * Problem_Condition + ID, data=si_anova, whichRandom='ID', iterations=5000, rscaleFixed=sqrt(2)/2)
SIanova.bf
SIanova.bf[3]/SIanova.bf[2]
SIanova.bf[3]/SIanova.bf[1]
SIanova.bf[3]/SIanova.bf[4]

# Without poor RAT
si_anova <- alldata %>% 
  filter(!ID %in% poor_rat) %>% 
  select(Problem_Condition, SI_acc_before, SI_acc_during) %>% 
  rowid_to_column("ID") %>% 
  pivot_longer(cols = -c("ID","Problem_Condition"),
               names_to = "Presentation",
               names_pattern = "SI_acc_(.*)",
               values_to = "Accuracy") %>% 
  mutate(ID = as.factor(ID),
         Problem_Condition = as.factor(Problem_Condition),
         Presentation = as.factor(Presentation))

SIanova = summary(aov(Accuracy~Presentation*Problem_Condition + Error(ID/Presentation), data=si_anova))
SIanova
SIanova.bf = anovaBF(Accuracy~Presentation * Problem_Condition + ID, data=si_anova, whichRandom='ID', iterations=5000, rscaleFixed=sqrt(2)/2)
SIanova.bf
SIanova.bf[3]/SIanova.bf[2]
SIanova.bf[3]/SIanova.bf[1]
SIanova.bf[3]/SIanova.bf[4]


# Delayed recognition task ANOVA by presentation x problem-solving condition
dr_anova <- alldata %>% 
  select(Problem_Condition, DR_acc_before, DR_acc_during) %>% 
  rowid_to_column("ID") %>% 
  pivot_longer(cols = -c("ID","Problem_Condition"),
               names_to = "Presentation",
               names_pattern = "DR_acc_(.*)",
               values_to = "Accuracy") %>% 
  mutate(ID = as.factor(ID),
         Problem_Condition = as.factor(Problem_Condition),
         Presentation = as.factor(Presentation))

DRanova = summary(aov(Accuracy~Presentation*Problem_Condition + Error(ID/Presentation), data=dr_anova))
DRanova
DRanova.bf = anovaBF(Accuracy~Presentation * Problem_Condition + ID, data=dr_anova, whichRandom='ID', iterations=5000, rscaleFixed=sqrt(2)/2)
DRanova.bf
DRanova.bf[2]/DRanova.bf[3]
DRanova.bf[2]/DRanova.bf[4]

# Without poor RAT
dr_anova <- alldata %>% 
  filter(!ID %in% poor_rat) %>% 
  select(Problem_Condition, DR_acc_before, DR_acc_during) %>% 
  rowid_to_column("ID") %>% 
  pivot_longer(cols = -c("ID","Problem_Condition"),
               names_to = "Presentation",
               names_pattern = "DR_acc_(.*)",
               values_to = "Accuracy") %>% 
  mutate(ID = as.factor(ID),
         Problem_Condition = as.factor(Problem_Condition),
         Presentation = as.factor(Presentation))

DRanova = summary(aov(Accuracy~Presentation*Problem_Condition + Error(ID/Presentation), data=dr_anova))
DRanova
DRanova.bf = anovaBF(Accuracy~Presentation * Problem_Condition + ID, data=dr_anova, whichRandom='ID', iterations=5000, rscaleFixed=sqrt(2)/2)
DRanova.bf
DRanova.bf[2]/DRanova.bf[3]
DRanova.bf[2]/DRanova.bf[4]

# Delayed recognition task confidence ANOVA by presentation x problem-solving condition
dr_anova <- alldata %>% 
  select(Problem_Condition, DR_conf_before, DR_conf_during) %>% 
  rowid_to_column("ID") %>% 
  pivot_longer(cols = -c("ID","Problem_Condition"),
               names_to = "Presentation",
               names_pattern = "DR_conf_(.*)",
               values_to = "Confidence") %>% 
  mutate(ID = as.factor(ID),
         Problem_Condition = as.factor(Problem_Condition),
         Presentation = as.factor(Presentation))

DRCanova = summary(aov(Confidence~Presentation*Problem_Condition + Error(ID/Presentation), data=dr_anova))
DRCanova
DRCanova.bf = anovaBF(Confidence~Presentation * Problem_Condition + ID, data=dr_anova, whichRandom='ID', iterations=5000, rscaleFixed=sqrt(2)/2)
DRCanova.bf
DRCanova.bf[2]/DRCanova.bf[3]
DRCanova.bf[2]/DRCanova.bf[4]

# Without poor RAT
dr_anova <- alldata %>% 
  filter(!ID %in% poor_rat) %>% 
  select(Problem_Condition, DR_conf_before, DR_conf_during) %>% 
  rowid_to_column("ID") %>% 
  pivot_longer(cols = -c("ID","Problem_Condition"),
               names_to = "Presentation",
               names_pattern = "DR_conf_(.*)",
               values_to = "Confidence") %>% 
  mutate(ID = as.factor(ID),
         Problem_Condition = as.factor(Problem_Condition),
         Presentation = as.factor(Presentation))

DRCanova = summary(aov(Confidence~Presentation*Problem_Condition + Error(ID/Presentation), data=dr_anova))
DRCanova
DRCanova.bf = anovaBF(Confidence~Presentation * Problem_Condition + ID, data=dr_anova, whichRandom='ID', iterations=5000, rscaleFixed=sqrt(2)/2)
DRCanova.bf
DRCanova.bf[2]/DRCanova.bf[3]
DRCanova.bf[2]/DRCanova.bf[4]


# Plotting

# SI Accuracy
p5 <- alldata %>% 
  select(c(ID, Problem_Condition, contains("SI_acc_before"), contains("SI_acc_during"))) %>% 
  pivot_longer(cols = !c(ID, Problem_Condition),
               names_to = "presentation", 
               names_pattern = "SI_acc_(.*)", 
               values_to = "accuracy") %>% 
  group_by(Problem_Condition, presentation, ID) %>% 
  summarise(mean_pt = mean(accuracy)) %>% 
  group_by(Problem_Condition, presentation) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd(mean_pt)/sqrt(n())) %>% 
  ggplot(aes(presentation, mean, shape = Problem_Condition, color = Problem_Condition, group = Problem_Condition)) +
  geom_errorbar(aes(ymin = mean-se, ymax = mean+se), width = .1) +
  geom_line() +
  geom_point(size = 4) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  ) +
  xlab("Presentation Condition") + ylab("Mean Accuracy") +
  scale_x_discrete(labels = c("Before", "Simultaneous"),
                   expand = c(0.1,0.1)) +
  scale_shape_discrete(labels = c("Creative", "Math"),
                       guide = guide_legend(reverse = TRUE),
                       name = "State Induction\nCondition",) +
  scale_color_discrete(labels = c("Creative", "Math"),
                       guide = guide_legend(reverse = TRUE),
                       name = "State Induction\nCondition",
                       type = pal) +
  coord_cartesian(ylim = c(0.55, 1))
# DR Accuracy
p6 <- alldata %>% 
  select(c(ID, Problem_Condition, contains("DR_acc_before"), contains("DR_acc_during"))) %>% 
  pivot_longer(cols = !c(ID, Problem_Condition),
               names_to = "presentation", 
               names_pattern = "DR_acc_(.*)", 
               values_to = "accuracy") %>% 
  group_by(Problem_Condition, presentation, ID) %>% 
  summarise(mean_pt = mean(accuracy)) %>% 
  group_by(Problem_Condition, presentation) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd(mean_pt)/sqrt(n())) %>% 
  ggplot(aes(presentation, mean, shape = Problem_Condition, color = Problem_Condition, group = Problem_Condition)) +
  geom_errorbar(aes(ymin = mean-se, ymax = mean+se), width = .1) +
  geom_line() +
  geom_point(size = 4) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  ) +
  xlab("Presentation Condition") + ylab("Mean Accuracy") +
  scale_x_discrete(labels = c("Before", "Simultaneous"),
                   expand = c(0.1,0.1)) +
  scale_shape_discrete(labels = c("Creative", "Math"),
                       guide = guide_legend(reverse = TRUE),
                       name = "State Induction\nCondition",) +
  scale_color_discrete(labels = c("Creative", "Math"),
                       guide = guide_legend(reverse = TRUE),
                       name = "State Induction\nCondition",
                       type = pal) +
  coord_cartesian(ylim = c(0.55, 1))

# Confidence
p7 <- alldata %>% 
  select(c(ID, Problem_Condition, contains("conf_before"), contains("conf_during"))) %>% 
  pivot_longer(cols = !c(ID, Problem_Condition), 
               names_to = "presentation", 
               names_pattern = "DR_conf_(.*)", 
               values_to = "confidence") %>% 
  group_by(presentation, Problem_Condition, ID) %>% 
  summarise(mean_pt = mean(confidence)) %>% 
  group_by(presentation, Problem_Condition) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd(mean_pt)/sqrt(n())) %>% 
  ggplot(aes(presentation, mean, shape = Problem_Condition, color = Problem_Condition, group = Problem_Condition)) +
  geom_errorbar(aes(ymin = mean-se, ymax = mean+se), width = .1) +
  geom_line() +
  geom_point(size = 4) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  ) +
  xlab("Presentation Condition") + ylab("Mean Confidence") +
  scale_x_discrete(labels = c("Before", "Simultaneous"),
                   expand = c(0.1,0.1)) +
  scale_shape_discrete(labels = c("Creative", "Math"),
                       guide = guide_legend(reverse = TRUE),
                       name = "State Induction\nCondition",) +
  scale_color_discrete(labels = c("Creative", "Math"),
                       guide = guide_legend(reverse = TRUE),
                       name = "State Induction\nCondition",
                       type = pal) +
  scale_y_continuous(expand = c(0, 0)) +
  coord_cartesian(ylim = c(25, 75))

p5 + p6 + p7 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 

#ggsave(here::here("CM2", "figures", "plot3.png"), width = 9.5, units = "in")

# Alternate Uses Task Data----

# Interrater reliability 
irr::kappam.fleiss(valid_data %>% select(contains("Rater")))
irr::kappam.fleiss(category_data %>% select(contains("Rater")))
irr::icc(originality_data %>% select(contains("Rater")))

# Subjects in AUT data
au_data <- creative_data %>% 
  group_by(ID, Item) %>%
  summarise(fluency = sum(Valid), flexibility = length(unique(na.omit(Category))), originality = mean(Original, na.rm = TRUE)) %>% 
  summarise(fluency_mean = mean(fluency), flexibility_mean = mean(flexibility), original_mean = mean(originality, na.rm = TRUE)) %>% 
  left_join(., alldata, by = "ID")  %>% 
  filter(fluency_mean > 0)

au_data %>% 
  summarise(mean(fluency_mean), sd(fluency_mean),
            mean(flexibility_mean), sd(flexibility_mean),
            mean(original_mean, na.rm = TRUE), sd(original_mean, na.rm = TRUE))
  
# SI task
cor.test(au_data$SI_acc_mean, au_data$fluency_mean)
correlationBF(au_data$SI_acc_mean, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_acc_mean, au_data$flexibility_mean)
correlationBF(au_data$SI_acc_mean, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_acc_mean, au_data$original_mean)
correlationBF(au_data$SI_acc_mean, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$fluency_mean)
correlationBF(au_data$SI_difference, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$flexibility_mean)
correlationBF(au_data$SI_difference, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$original_mean)
correlationBF(au_data$SI_difference, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

au_p1 <- ggplot(au_data, aes(x = fluency_mean, y = SI_acc_mean)) + 
  geom_point(color = "#FF8C61", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#FF8C61") +
  xlab("Fluency Mean") + ylab("SI Accuracy Mean")

au_p2 <- ggplot(au_data, aes(x = flexibility_mean, y = SI_acc_mean)) +
  geom_point(color = "#CE6A85", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#CE6A85") +
  xlab("Flexbility Mean") + ylab("SI Accuracy Mean") 

au_p3 <- ggplot(au_data, aes(x = original_mean, y = SI_acc_mean)) +
  geom_point(color = "#5C374C", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#5C374C") +
  xlab("Originality Mean") + ylab("SI Accuracy Mean") 

au_p1 + au_p2 + au_p3 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 

#ggsave(here::here("CM2", "figures", "plot4.png"), units = "in")

au_p4 <- ggplot(au_data, aes(x = fluency_mean, y = SI_difference)) + 
  geom_point(color = "#FF8C61", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#FF8C61") +
  xlab("Fluency Mean") + ylab("SI Difference") 

au_p5 <- ggplot(au_data, aes(x = flexibility_mean, y = SI_difference)) +
  geom_point(color = "#CE6A85", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#CE6A85") +
  xlab("Flexibility Mean") + ylab("SI Difference")

au_p6 <- ggplot(au_data, aes(x = original_mean, y = SI_difference)) +
  geom_point(color = "#5C374C", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#5C374C") +
  xlab("Originality Mean") + ylab("SI Difference") 

au_p4 + au_p5 + au_p6 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 

#ggsave(here::here("CM2", "figures", "plot5.png"), units = "in")

# SI task
cor.test(au_data$SI_acc_mean, au_data$fluency_mean)
correlationBF(au_data$SI_acc_mean, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_acc_mean, au_data$flexibility_mean)
correlationBF(au_data$SI_acc_mean, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_acc_mean, au_data$original_mean)
correlationBF(au_data$SI_acc_mean, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$fluency_mean)
correlationBF(au_data$SI_difference, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$flexibility_mean)
correlationBF(au_data$SI_difference, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$original_mean)
correlationBF(au_data$SI_difference, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)


# DR accuracy
cor.test(au_data$DR_acc_mean, au_data$fluency_mean)
correlationBF(au_data$DR_acc_mean, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_acc_mean, au_data$flexibility_mean)
correlationBF(au_data$DR_acc_mean, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_acc_mean, au_data$original_mean)
correlationBF(au_data$DR_acc_mean, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_difference, au_data$fluency_mean)
correlationBF(au_data$DR_difference, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_difference, au_data$flexibility_mean)
correlationBF(au_data$DR_difference, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_difference, au_data$original_mean)
correlationBF(au_data$DR_difference, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

au_p7 <- ggplot(au_data, aes(x = fluency_mean, y = DR_acc_mean)) + 
  geom_point(color = "#FF8C61", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#FF8C61") +
  xlab("Fluency Mean") + ylab("DR Accuracy Mean") 

au_p8 <- ggplot(au_data, aes(x = flexibility_mean, y = DR_acc_mean)) +
  geom_point(color = "#CE6A85", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#CE6A85") +
  xlab("Flexibility Mean") + ylab("DR Accuracy Mean") 

au_p9 <- ggplot(au_data, aes(x = original_mean, y = DR_acc_mean)) +
  geom_point(color = "#5C374C", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#5C374C") +
  xlab("Originality Mean") + ylab("DR Accuracy Mean") 

au_p7 + au_p8 + au_p9 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 

#ggsave(here::here("CM2", "figures", "plot6.png"), units = "in")

au_p10 <- ggplot(au_data, aes(x = fluency_mean, y = DR_difference)) + 
  geom_point(color = "#FF8C61", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#FF8C61") +
  xlab("Fluency Mean") + ylab("DR Difference") 

au_p11 <- ggplot(au_data, aes(x = flexibility_mean, y = DR_difference)) +
  geom_point(color = "#CE6A85", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#CE6A85") +
  xlab("Flexbility Mean") + ylab("DR Difference") 

au_p12 <- ggplot(au_data, aes(x = original_mean, y = DR_difference)) +
  geom_point(color = "#5C374C", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#5C374C") +
  xlab("Originality Mean") + ylab("DR Difference") 

au_p10 + au_p11 + au_p12 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 

#ggsave(here::here("CM2", "figures", "plot7.png"), units = "in")

# DR confidence
cor.test(au_data$DR_conf_mean, au_data$fluency_mean)
correlationBF(au_data$DR_conf_mean, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_mean, au_data$flexibility_mean)
correlationBF(au_data$DR_conf_mean, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_mean, au_data$original_mean)
correlationBF(au_data$DR_conf_mean, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_difference, au_data$fluency_mean)
correlationBF(au_data$DR_conf_difference, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_difference, au_data$flexibility_mean)
correlationBF(au_data$DR_conf_difference, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_difference, au_data$original_mean)
correlationBF(au_data$DR_conf_difference, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

au_p13 <- ggplot(au_data, aes(x = fluency_mean, y = DR_conf_mean)) + 
  geom_point(color = "#FF8C61", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#FF8C61") +
  xlab("Fluency Mean") + ylab("DR Confidence Mean") 

au_p14 <- ggplot(au_data, aes(x = flexibility_mean, y = DR_conf_mean)) +
  geom_point(color = "#CE6A85", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#CE6A85") +
  xlab("Flexibility Mean") + ylab("DR Confidence Mean")

au_p15 <- ggplot(au_data, aes(x = original_mean, y = DR_conf_mean)) +
  geom_point(color = "#5C374C", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#5C374C") +
  xlab("Originality Mean") + ylab("DR Confidence Mean")

au_p13 + au_p14 + au_p15 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 

#ggsave(here::here("CM2", "figures", "plot7.png"), units = "in")

au_p16 <- ggplot(au_data, aes(x = fluency_mean, y = DR_conf_difference)) + 
  geom_point(color = "#FF8C61", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#FF8C61") +
  xlab("Fluency Mean") + ylab("DR Confidence Difference")

au_p17 <- ggplot(au_data, aes(x = flexibility_mean, y = DR_conf_difference)) +
  geom_point(color = "#CE6A85", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#CE6A85") +
  xlab("Flexibility Mean") + ylab("DR Confidence Difference")

au_p18 <- ggplot(au_data, aes(x = original_mean, y = DR_conf_difference)) +
  geom_point(color = "#5C374C", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#5C374C") +
  xlab("Originality Mean") + ylab("DR Confidence Difference")

au_p16 + au_p17 + au_p18 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 

#ggsave(here::here("CM2", "figures", "plot8.png"), units = "in")

# RAT task
cor.test(au_data$RAT_acc, au_data$fluency_mean)
correlationBF(au_data$RAT_acc, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$RAT_acc, au_data$flexibility_mean)
correlationBF(au_data$RAT_acc, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$RAT_acc, au_data$original_mean)
correlationBF(au_data$RAT_acc, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

au_p19 <- ggplot(au_data, aes(x = fluency_mean, y = RAT_acc)) + 
  geom_point(color = "#FF8C61", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#FF8C61") +
  xlab("Fluency Mean") + ylab("RAT Accuracy")

au_p20 <- ggplot(au_data, aes(x = flexibility_mean, y = RAT_acc)) +
  geom_point(color = "#CE6A85", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#CE6A85") +
  xlab("Flexibility Mean") + ylab("RAT Accuracy") 

au_p21 <- ggplot(au_data, aes(x = original_mean, y = RAT_acc)) +
  geom_point(color = "#5C374C", alpha = 0.5) +
  geom_smooth(method = "lm", color = "#5C374C") +
  xlab("Originality Mean") + ylab("RAT Accuracy") 

au_p19 + au_p20 + au_p21 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a") +
  plot_layout(guides = "collect") 

#ggsave(here::here("CM2", "figures", "plot8.png"), units = "in")

# Without poor RAT
au_data <- creative_data %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID, Item) %>%
  summarise(fluency = sum(Valid), flexibility = length(unique(na.omit(Category))), originality = mean(Original, na.rm = TRUE)) %>% 
  summarise(fluency_mean = mean(fluency), flexibility_mean = mean(flexibility), original_mean = mean(originality, na.rm = TRUE)) %>% 
  left_join(., alldata, by = "ID")  %>% 
  filter(fluency_mean > 0)

au_data %>% 
  summarise(mean(fluency_mean), sd(fluency_mean),
            mean(flexibility_mean), sd(flexibility_mean),
            mean(original_mean, na.rm = TRUE), sd(original_mean, na.rm = TRUE))

# SI task
cor.test(au_data$SI_acc_mean, au_data$fluency_mean)
correlationBF(au_data$SI_acc_mean, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_acc_mean, au_data$flexibility_mean)
correlationBF(au_data$SI_acc_mean, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_acc_mean, au_data$original_mean)
correlationBF(au_data$SI_acc_mean, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$fluency_mean)
correlationBF(au_data$SI_difference, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$flexibility_mean)
correlationBF(au_data$SI_difference, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$SI_difference, au_data$original_mean)
correlationBF(au_data$SI_difference, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)


# DR accuracy
cor.test(au_data$DR_acc_mean, au_data$fluency_mean)
correlationBF(au_data$DR_acc_mean, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_acc_mean, au_data$flexibility_mean)
correlationBF(au_data$DR_acc_mean, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_acc_mean, au_data$original_mean)
correlationBF(au_data$DR_acc_mean, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_difference, au_data$fluency_mean)
correlationBF(au_data$DR_difference, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_difference, au_data$flexibility_mean)
correlationBF(au_data$DR_difference, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_difference, au_data$original_mean)
correlationBF(au_data$DR_difference, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

# DR confidence
cor.test(au_data$DR_conf_mean, au_data$fluency_mean)
correlationBF(au_data$DR_conf_mean, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_mean, au_data$flexibility_mean)
correlationBF(au_data$DR_conf_mean, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_mean, au_data$original_mean)
correlationBF(au_data$DR_conf_mean, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_difference, au_data$fluency_mean)
correlationBF(au_data$DR_conf_difference, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_difference, au_data$flexibility_mean)
correlationBF(au_data$DR_conf_difference, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$DR_conf_difference, au_data$original_mean)
correlationBF(au_data$DR_conf_difference, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

# RAT task
cor.test(au_data$RAT_acc, au_data$fluency_mean)
correlationBF(au_data$RAT_acc, au_data$fluency_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$RAT_acc, au_data$flexibility_mean)
correlationBF(au_data$RAT_acc, au_data$flexibility_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

cor.test(au_data$RAT_acc, au_data$original_mean)
correlationBF(au_data$RAT_acc, au_data$original_mean, iterations = 5000, rscaleFixed = sqrt(2)/2)

# Reliability----

# Reliability of SI difference scores 
even <- alldata_si %>% 
  rowid_to_column() %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 == 0) %>% 
  group_by(participant, presentation) %>% 
  summarise(mean_acc = mean(key_resp_si.corr), 
            n = n()) %>% 
  pivot_wider(id_cols = participant,
              names_from = presentation,
              values_from = mean_acc) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

odd <- alldata_si %>% 
  rowid_to_column() %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 != 0) %>% 
  group_by(participant, presentation) %>% 
  summarise(mean_acc = mean(key_resp_si.corr), 
            n = n()) %>% 
  pivot_wider(id_cols = participant,
              names_from = presentation,
              values_from = mean_acc) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

dat <- cbind(even, odd)

psych::alpha(dat)

# Without poor RAT
even <- alldata_si %>% 
  rowid_to_column() %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 == 0) %>% 
  filter(!participant %in% poor_rat) %>% 
  group_by(participant, presentation) %>% 
  summarise(mean_acc = mean(key_resp_si.corr), 
            n = n()) %>% 
  pivot_wider(id_cols = participant,
              names_from = presentation,
              values_from = mean_acc) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

odd <- alldata_si %>% 
  rowid_to_column() %>% 
  filter(!participant %in% poor_rat) %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 != 0) %>% 
  group_by(participant, presentation) %>% 
  summarise(mean_acc = mean(key_resp_si.corr), 
            n = n()) %>% 
  pivot_wider(id_cols = participant,
              names_from = presentation,
              values_from = mean_acc) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

dat <- cbind(even, odd)

psych::alpha(dat)

# Reliability of overall SI accuracy
even <- alldata_si %>% 
  rowid_to_column() %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 == 0) %>% 
  summarise(mean_acc = mean(key_resp_si.corr), 
            n = n()) %>% 
  pull(mean_acc)

odd <- alldata_si %>% 
  rowid_to_column() %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 != 0) %>% 
  summarise(mean_acc = mean(key_resp_si.corr), 
            n = n()) %>% 
  pull(mean_acc)

dat <- cbind(even, odd)

psych::alpha(dat)

# Without poor RAT
even <- alldata_si %>% 
  rowid_to_column() %>% 
  filter(!participant %in% poor_rat) %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 == 0) %>% 
  summarise(mean_acc = mean(key_resp_si.corr), 
            n = n()) %>% 
  pull(mean_acc)

odd <- alldata_si %>% 
  rowid_to_column() %>% 
  filter(!participant %in% poor_rat) %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 != 0) %>% 
  summarise(mean_acc = mean(key_resp_si.corr), 
            n = n()) %>% 
  pull(mean_acc)

dat <- cbind(even, odd)

psych::alpha(dat)

# Reliability of DR difference scores 
even <- alldata_dr %>% 
  rowid_to_column() %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 == 0) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_acc = mean(accuracy), 
            n = n()) %>% 
  pivot_wider(id_cols = ID,
              names_from = PresentationCondition,
              values_from = mean_acc) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

odd <- alldata_dr %>% 
  rowid_to_column() %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 != 0) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_acc = mean(accuracy), 
            n = n()) %>% 
  pivot_wider(id_cols = ID,
              names_from = PresentationCondition,
              values_from = mean_acc) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

dat <- cbind(even, odd)

psych::alpha(dat)

# Without poor RAT
even <- alldata_dr %>% 
  rowid_to_column() %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 == 0) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_acc = mean(accuracy), 
            n = n()) %>% 
  pivot_wider(id_cols = ID,
              names_from = PresentationCondition,
              values_from = mean_acc) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

odd <- alldata_dr %>% 
  rowid_to_column() %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 != 0) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_acc = mean(accuracy), 
            n = n()) %>% 
  pivot_wider(id_cols = ID,
              names_from = PresentationCondition,
              values_from = mean_acc) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

dat <- cbind(even, odd)

psych::alpha(dat)

# Reliability of overall DR accuracy
even <- alldata_dr %>% 
  rowid_to_column() %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 == 0) %>% 
  summarise(mean_acc = mean(accuracy), 
            n = n()) %>% 
  pull(mean_acc)

odd <- alldata_dr %>% 
  rowid_to_column() %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 != 0) %>% 
  summarise(mean_acc = mean(accuracy), 
            n = n()) %>% 
  pull(mean_acc)

dat <- cbind(even, odd)

psych::alpha(dat)

# Without poor RAT
even <- alldata_dr %>% 
  rowid_to_column() %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 == 0) %>% 
  summarise(mean_acc = mean(accuracy), 
            n = n()) %>% 
  pull(mean_acc)

odd <- alldata_dr %>% 
  rowid_to_column() %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 != 0) %>% 
  summarise(mean_acc = mean(accuracy), 
            n = n()) %>% 
  pull(mean_acc)

dat <- cbind(even, odd)

psych::alpha(dat)

# Reliability of DR difference confidence scores 
even <- alldata_dr %>% 
  rowid_to_column() %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 == 0) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_conf = mean(confidence), 
            n = n()) %>% 
  pivot_wider(id_cols = ID,
              names_from = PresentationCondition,
              values_from = mean_conf) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

odd <- alldata_dr %>% 
  rowid_to_column() %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 != 0) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_conf = mean(confidence), 
            n = n()) %>% 
  pivot_wider(id_cols = ID,
              names_from = PresentationCondition,
              values_from = mean_conf) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

dat <- cbind(even, odd)

psych::alpha(dat)

# Without poor RAT
even <- alldata_dr %>% 
  rowid_to_column() %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 == 0) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_conf = mean(confidence), 
            n = n()) %>% 
  pivot_wider(id_cols = ID,
              names_from = PresentationCondition,
              values_from = mean_conf) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

odd <- alldata_dr %>% 
  rowid_to_column() %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 != 0) %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_conf = mean(confidence), 
            n = n()) %>% 
  pivot_wider(id_cols = ID,
              names_from = PresentationCondition,
              values_from = mean_conf) %>% 
  rowwise() %>% 
  mutate(difference = before - during) %>% 
  pull(difference)

dat <- cbind(even, odd)

psych::alpha(dat)

# Reliability of overall DR confidence
even <- alldata_dr %>% 
  rowid_to_column() %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 == 0) %>% 
  summarise(mean_conf = mean(confidence), 
            n = n()) %>% 
  pull(mean_conf)

odd <- alldata_dr %>% 
  rowid_to_column() %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 != 0) %>% 
  summarise(mean_conf = mean(confidence), 
            n = n()) %>% 
  pull(mean_conf)

dat <- cbind(even, odd)

psych::alpha(dat)

# Without poor RAT
even <- alldata_dr %>% 
  rowid_to_column() %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 == 0) %>% 
  summarise(mean_conf = mean(confidence), 
            n = n()) %>% 
  pull(mean_conf)

odd <- alldata_dr %>% 
  rowid_to_column() %>% 
  filter(!ID %in% poor_rat) %>% 
  group_by(ID) %>% 
  filter(rowid %% 2 != 0) %>% 
  summarise(mean_conf = mean(confidence), 
            n = n()) %>% 
  pull(mean_conf)

dat <- cbind(even, odd)

psych::alpha(dat)

# Reliability of RAT scores 
even <- alldata_rat %>% 
  rowid_to_column() %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 == 0) %>% 
  summarise(mean_acc = mean(accuracy_rat), 
            n = n()) %>% 
  pull(mean_acc)

odd <- alldata_rat %>% 
  rowid_to_column() %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 != 0) %>% 
  summarise(mean_acc = mean(accuracy_rat), 
            n = n()) %>% 
  pull(mean_acc)

dat <- cbind(even, odd)

psych::alpha(dat)

# Without poor RAT
even <- alldata_rat %>% 
  rowid_to_column() %>% 
  filter(!participant %in% poor_rat) %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 == 0) %>% 
  summarise(mean_acc = mean(accuracy_rat), 
            n = n()) %>% 
  pull(mean_acc)

odd <- alldata_rat %>% 
  rowid_to_column() %>% 
  filter(!participant %in% poor_rat) %>% 
  group_by(participant) %>% 
  filter(rowid %% 2 != 0) %>% 
  summarise(mean_acc = mean(accuracy_rat), 
            n = n()) %>% 
  pull(mean_acc)

dat <- cbind(even, odd)

psych::alpha(dat)

# REI Data----

rei_dat <- alldata %>% 
  select(c(contains("REI"), RAT_acc, contains("difference"), contains("mean")))

psych::pairs.panels(rei_dat)
psych::corr.test(rei_dat)

