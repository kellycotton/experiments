# CM1 analysis
#Setup-----

# Load packages
library(tidyverse)
library(patchwork)
library(BayesFactor)

set.seed(123)

theme_set(theme_bw())
pal <- c("#FF8C61", "#985277", "#7CB4B8", "#F9E784")

# Read data
alldata <- read_csv(here::here("CM1", "data", "output_data", "alldata_summary.csv"))
alldata_si <- read_csv(here::here("CM1", "data", "output_data", "alldata_si.csv"))
alldata_dr <- read_csv(here::here("CM1", "data", "output_data", "alldata_dr.csv"))
alldata_rat <- read_csv(here::here("CM1", "data", "output_data", "alldata_rat.csv"))

alldata_dr$confidence <- abs(alldata_dr$confidence)

# Creativity Tasks----

# Remote Associates mean and sd all participants
alldata %>% 
  summarise(mean = mean(RAT_acc), sd = sd(RAT_acc))

# Remove poor RAT performers
poor_rat <- alldata %>% filter(RAT_acc == 0) %>% pull(ID) 
alldata_clean <- alldata %>% filter(!ID %in% poor_rat)

# Gough Score
alldata %>% 
  summarise(mean = mean(GPS_score), sd = sd(GPS_score))

cor(alldata$RAT_acc, alldata$GPS_score)
correlationBF(alldata$RAT_acc, alldata$GPS_score,rscaleFixed=sqrt(2)/2)

# Remove poor RAT performers
cor(alldata_clean$RAT_acc, alldata_clean$GPS_score)
correlationBF(alldata_clean$RAT_acc, alldata_clean$GPS_score,rscaleFixed=sqrt(2)/2)

# Consolidation Effect----

# Stimulus identification task mean and sd by presentation condition
alldata_si %>% 
  group_by(participant, presentation) %>% 
  summarise(mean_pt = mean(key_resp_si.corr), sd_pt = sd(key_resp_si.corr)) %>% 
  group_by(presentation) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

# T.test for difference on SI task
t.test(x = alldata$SI_acc_before, y = alldata$SI_acc_during, paired = TRUE)
bfSI = ttestBF(x = alldata$SI_acc_before, y = alldata$SI_acc_during, paired = TRUE, rscaleFixed=sqrt(2)/2)
bfSI

# Remove poor RAT performers
# T.test for difference on SI task
t.test(x = alldata_clean$SI_acc_before, y = alldata_clean$SI_acc_during, paired = TRUE)
bfSI = ttestBF(x = alldata_clean$SI_acc_before, y = alldata_clean$SI_acc_during, paired = TRUE, rscaleFixed=sqrt(2)/2)
bfSI

# Delayed recognition task mean and sd by presentation condition accuracy
alldata_dr %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_pt = mean(accuracy), sd_pt = sd(accuracy)) %>% 
  group_by(PresentationCondition) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

# T.test for difference on DR task
t.test(x = alldata$DR_acc_before, y = alldata$DR_acc_during, paired = TRUE)
bfDR = ttestBF(x = alldata$DR_acc_before, y = alldata$DR_acc_during, paired = TRUE, rscaleFixed=sqrt(2)/2)
bfDR

# Remove poor RAT performers
# T.test for difference on DR task
t.test(x = alldata_clean$DR_acc_before, y = alldata_clean$DR_acc_during, paired = TRUE)
bfDR = ttestBF(x = alldata_clean$DR_acc_before, y = alldata_clean$DR_acc_during, paired = TRUE, rscaleFixed=sqrt(2)/2)
bfDR

# Delayed recognition task mean and sd by presentation condition confidence
alldata_dr %>% 
  group_by(ID, PresentationCondition) %>% 
  summarise(mean_pt = mean(confidence), sd_pt = sd(confidence)) %>% 
  group_by(PresentationCondition) %>% 
  summarise(mean = mean(mean_pt), sd = sd(mean_pt), se = sd/sqrt(n()))

# T.test for difference on DR task
t.test(x = alldata$DR_conf_before, y = alldata$DR_conf_during, paired = TRUE)
bfC = ttestBF(x = alldata$DR_conf_before, y = alldata$DR_conf_during, paired = TRUE, rscaleFixed=sqrt(2)/2)
bfC

# Remove poor RAT performers
# T.test for difference on DR task
t.test(x = alldata_clean$DR_conf_before, y = alldata_clean$DR_conf_during, paired = TRUE)
bfC = ttestBF(x = alldata_clean$DR_conf_before, y = alldata_clean$DR_conf_during, paired = TRUE, rscaleFixed=sqrt(2)/2)
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


#ggsave(here::here("CM1", "figures", "plot1.png"), units = "in")

# Creativity x Consolidation ----

# SI overall accuracy
cor(alldata$SI_acc_mean,alldata$RAT_acc)
correlationBF(alldata$SI_acc_mean,alldata$RAT_acc, rscaleFixed=sqrt(2)/2)

# Remove poor RAT performers
cor(alldata_clean$SI_acc_mean,alldata_clean$RAT_acc)
correlationBF(alldata_clean$SI_acc_mean,alldata_clean$RAT_acc, rscaleFixed=sqrt(2)/2)

# DR overall accuracy
cor(alldata$DR_acc_mean,alldata$RAT_acc)
correlationBF(alldata$DR_acc_mean,alldata$RAT_acc, rscaleFixed=sqrt(2)/2)

# Remove poor RAT performers
cor(alldata_clean$DR_acc_mean,alldata_clean$RAT_acc)
correlationBF(alldata_clean$DR_acc_mean,alldata_clean$RAT_acc, rscaleFixed=sqrt(2)/2)

# DR overall confidence
cor(alldata$DR_conf_mean,alldata$RAT_acc)
correlationBF(alldata$DR_conf_mean,alldata$RAT_acc, rscaleFixed=sqrt(2)/2)

# Remove poor RAT performers
cor(alldata_clean$DR_conf_mean,alldata_clean$RAT_acc)
correlationBF(alldata_clean$DR_conf_mean,alldata_clean$RAT_acc, rscaleFixed=sqrt(2)/2)

# Mean accuracy difference vs. RAT
p3 <- alldata %>% 
  select(ID, SI_acc_mean, DR_acc_mean, RAT_acc) %>% 
  pivot_longer(cols = !c(ID, RAT_acc),
               names_to = "task", 
               names_pattern = "(.*)_acc_mean", 
               values_to = "accuracy") %>%
  ggplot(aes(RAT_acc, accuracy, group = task, fill = task, color = task, shape = task)) + 
  geom_point() +
  geom_smooth(method = "lm", alpha = 0.25) +
  xlab("Remote Associates Test Score") + ylab("Mean Accuracy") +
  scale_shape_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task") +
  scale_color_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task", 
                       type = pal) +
  scale_fill_manual(values = pal, 
                    labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                    name = "Task", 
                    guide = guide_legend(reverse = TRUE)) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  )

# Mean confidence difference vs. RAT
p4 <- alldata %>% 
  select(ID, DR_conf_mean, RAT_acc) %>% 
  pivot_longer(cols = !c(ID, RAT_acc),
               names_to = "task", 
               names_pattern = "(.*)_mean", 
               values_to = "confidence") %>%
  ggplot(aes(RAT_acc, confidence, group = task, fill = task, color = task, shape = task)) + 
  geom_point() +
  geom_smooth(method = "lm", alpha = 0.25) +
  xlab("Remote Associates Test Score") + ylab("Mean Confidence") +
  scale_shape_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task") +
  scale_color_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task", 
                       type = pal) +
  scale_fill_manual(values = pal, 
                    labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                    name = "Task", 
                    guide = guide_legend(reverse = TRUE)) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.position = "none"
  )

p3 + p4 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a"
  ) +
  plot_layout(guides = "collect")

#ggsave(here::here("CM1", "figures", "plot2.png"))

# SI accuracy difference
cor(alldata$SI_difference,alldata$RAT_acc)
correlationBF(alldata$SI_difference,alldata$RAT_acc, rscaleFixed=sqrt(2)/2)

# Remove poor RAT performers
cor(alldata_clean$SI_difference,alldata_clean$RAT_acc)
correlationBF(alldata_clean$SI_difference,alldata_clean$RAT_acc, rscaleFixed=sqrt(2)/2)

# DR accuracy difference
cor(alldata$DR_difference,alldata$RAT_acc)
correlationBF(alldata$DR_difference,alldata$RAT_acc, rscaleFixed=sqrt(2)/2)

# Remove poor RAT performers
cor(alldata_clean$DR_difference,alldata_clean$RAT_acc)
correlationBF(alldata_clean$DR_difference,alldata_clean$RAT_acc, rscaleFixed=sqrt(2)/2)

# DR confidence difference
cor(alldata$DR_conf_difference,alldata$RAT_acc)
correlationBF(alldata$DR_conf_difference,alldata$RAT_acc, rscaleFixed=sqrt(2)/2)

# Remove poor RAT performers
cor(alldata_clean$DR_conf_difference,alldata_clean$RAT_acc)
correlationBF(alldata_clean$DR_conf_difference,alldata_clean$RAT_acc, rscaleFixed=sqrt(2)/2)

# Mean accuracy difference vs. RAT
p5 <- alldata %>% 
  select(ID, SI_difference, DR_difference, RAT_acc) %>% 
  pivot_longer(cols = !c(ID, RAT_acc),
               names_to = "task", 
               names_pattern = "(.*)_difference", 
               values_to = "difference") %>%
  ggplot(aes(RAT_acc, difference, group = task, fill = task, color = task, shape = task)) + 
  geom_point() +
  geom_smooth(method = "lm", alpha = 0.25) +
  xlab("Remote Associates Test Score") + ylab("Accuracy Difference") +
  scale_shape_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task") +
  scale_color_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task", 
                       type = pal) +
  scale_fill_manual(values = pal, 
                    labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                    name = "Task", 
                    guide = guide_legend(reverse = TRUE)) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.title.align = 0.5
  )

# Mean confidence difference vs. RAT
p6 <- alldata %>% 
  select(ID, DR_conf_difference, RAT_acc) %>% 
  pivot_longer(cols = !c(ID, RAT_acc),
               names_to = "task", 
               names_pattern = "(.*)_difference", 
               values_to = "difference") %>%
  ggplot(aes(RAT_acc, difference, group = task, fill = task, color = task, shape = task)) + 
  geom_point() +
  geom_smooth(method = "lm", alpha = 0.25) +
  xlab("Remote Associates Test Score") + ylab("Confidence Difference") +
  scale_shape_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task") +
  scale_color_discrete(labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                       guide = guide_legend(reverse = TRUE),
                       name = "Task", 
                       type = pal) +
  scale_fill_manual(values = pal, 
                    labels = c("Delayed \nRecognition", "Stimulus \nIdentification"),
                    name = "Task", 
                    guide = guide_legend(reverse = TRUE)) +
  theme(
    panel.grid.minor.x = element_blank(), 
    panel.grid.minor.y = element_blank(),
    legend.position = "none"
  )

p5 + p6 +
  plot_annotation(
    theme = theme(plot.caption = element_text(hjust = 0)),
    tag_levels = "a"
  ) +
  plot_layout(guides = "collect")

#ggsave(here::here("CM1", "figures", "plot3.png"))

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
