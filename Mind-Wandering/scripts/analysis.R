# Analysis script 
# Experiment 1a and 1b, 2
# 10/03/22

#Setup-----

# Load packages
library(tidyverse)
library(patchwork)
library(BayesFactor)

set.seed(123)

theme_set(theme_bw())
pal <- c("#8CBA80", "#658E9C")
pal2 <- c("#405A64", "#658E9C", "#8FADB7", "#8CBA80")

# Read data
alldata_wm_1 <- read_csv(here::here("data", "output_data", "alldata_wm_1.csv"))
alldata_parity_1 <- read_csv(here::here("data", "output_data", "alldata_parity_1.csv"))
alldata_wm_2 <- read_csv(here::here("data", "output_data", "alldata_wm_2.csv"))
alldata_parity_2 <- read_csv(here::here("data", "output_data", "alldata_parity_2.csv"))

bad_trials <- alldata_wm_1 %>% 
  filter(key_resp_stimulus_rt < .3)

alldata_wm_1 <- alldata_wm_1 %>% 
  filter(participant != "22861") %>% 
  anti_join(., bad_trials) %>% 
  rename("trial_n" = "trials_this_n",
         "block_n" = "block_this_n") %>% 
  mutate(exp = ifelse(context == "online", "Online", "In-Person")) %>% 
  select(-c("context")) 

alldata_parity_1 <- alldata_parity_1 %>%
  filter(participant != "22861") %>% 
  anti_join(., bad_trials) %>% 
  rename("trial_n" = "trials_this_n",
         "block_n" = "block_this_n") %>% 
  mutate(exp = ifelse(context == "online", "Online", "In-Person")) %>% 
  select(-c("context")) %>% 
  select(-contains("trials_cogload"))

bad_trials <- alldata_wm_2 %>% 
  filter(key_resp_stimulus_rt < .3)

alldata_wm_2 <- alldata_wm_2 %>% 
  anti_join(., bad_trials) %>% 
  filter(!participant %in% c("111025", "111064")) %>% # participant did exp twice
  filter(!participant %in% c("109129", "109519", "111436", "74245")) # participant reported colorblindness

alldata_parity_2 <- alldata_parity_2 %>% 
  anti_join(., bad_trials) %>% 
  filter(!participant %in% c("111025", "111064")) %>% # participant did exp twice
  filter(!participant %in% c("109129", "109519", "111436", "74245")) %>%  # participant reported colorblindness
  select(-contains("trials_cogload"))


# Experiment 1 ----

# Basic Stats ----

# Number per group
alldata_wm_1 %>% 
  group_by(exp) %>% 
  summarise(count = n_distinct(participant))

# *Working memory accuracy ----
alldata_wm_1 %>% 
  group_by(participant, exp) %>% 
  summarise(mean_acc_pt = mean(key_resp_stimulus_corr)) %>% 
  group_by(exp) %>% 
  summarise(mean_acc = mean(mean_acc_pt), sd = sd(mean_acc_pt))

# Working memory accuracy x experimental context x cognitive load
dat <- alldata_wm_1 %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load),
         exp = as.factor(exp)) %>% 
  group_by(participant, exp, cognitive_load) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) 

summary(aov(mean_acc ~ exp*cognitive_load + Error(participant), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ exp*cognitive_load, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)
sort(anova_bf_acc)[4]/sort(anova_bf_acc)[3]
sort(anova_bf_acc)[4]/sort(anova_bf_acc)[2]

# Follow-up t-tests
one <- dat %>% filter(cognitive_load == "1") %>% pull(mean_acc)
two <- dat %>% filter(cognitive_load == "2") %>% pull(mean_acc)
four <- dat %>% filter(cognitive_load == "4") %>% pull(mean_acc)

t.test(x = one, y = two, paired = TRUE)
ttestBF(x = one, y = two, paired = TRUE)

t.test(x = one, y = four, paired = TRUE)
ttestBF(x = one, y = four, paired = TRUE)

t.test(x = two, y = four, paired = TRUE)
ttestBF(x = two, y = four, paired = TRUE)

# *Mind-wandering by group mean/SD ----
# All responses other than 1 "the task" coded as mind-wandering
dat <- alldata_wm_1 %>% 
  mutate(participant = as.factor(participant),
         exp = as.factor(exp), 
         mind_wander = ifelse(key_resp_mw_keys == 1, 0, 1),
         cognitive_load = as.factor(cognitive_load)) %>% 
  filter(!is.na(mind_wander)) %>% 
  group_by(participant, exp, cognitive_load) %>% 
  summarize(mean_mw = mean(mind_wander)) 

summary(aov(mean_mw ~ exp*cognitive_load + Error(participant), data = dat))
anova_bf_mw = anovaBF(mean_mw ~ exp*cognitive_load, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_mw)
sort(anova_bf_mw)[4]/sort(anova_bf_mw)[3]
sort(anova_bf_mw)[4]/sort(anova_bf_mw)[2]

# *Secondary task performance by group mean/SD ----
dat <- alldata_parity_1 %>% 
  filter(cognitive_load != "1") %>% 
  mutate(participant = as.factor(participant),
         exp = as.factor(exp), 
         cognitive_load = as.factor(cognitive_load)) %>% 
  group_by(participant, exp, cognitive_load) %>% 
  summarize(mean_acc = mean(key_resp_load_corr)) 

summary(aov(mean_acc ~ exp*cognitive_load + Error(participant), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ exp*cognitive_load, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)
sort(anova_bf_acc)[4]/sort(anova_bf_acc)[3]
sort(anova_bf_acc)[4]/sort(anova_bf_acc)[2]

# Plotting ----
# *Working Memory Task Accuracy ----
alldata_wm_1 %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load),
         exp = as.factor(exp)) %>% 
  group_by(participant, exp, cognitive_load) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) %>% 
  ggplot(aes(x = cognitive_load, y = mean_acc, color = exp, shape = exp, group = exp)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  scale_x_discrete(labels = c("0", "2", "4")) +
  scale_color_manual(values = pal, ) +
  labs(x = "Number of Secondary Task Items", y = "Primary Working Memory Task Accuracy", ) +
  #facet_wrap(~exp) +
  theme(
    #legend.position = "none"
    legend.title=element_blank()
  )

ggsave(here::here("figures", "fig1_1.png"), width = 5, units = "in")

# *Mind-Wandering ----
alldata_wm_1 %>% 
  filter(!is.na(key_resp_mw_keys)) %>% # Two participants are missing data for one trial each
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load),
         exp = as.factor(exp),
         mind_wander = ifelse(key_resp_mw_keys != 1, 1, 0)) %>% 
  group_by(participant, exp, cognitive_load) %>% 
  summarize(mean_mw = mean(mind_wander)) %>% 
  ggplot(aes(x = cognitive_load, y = mean_mw, color = exp, shape = exp)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  scale_x_discrete(labels = c("0", "2", "4")) +
  scale_color_manual(values = pal, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Number of Secondary Task Items", y = "Reported Mind-Wandering (Proportion of Trials)", ) +
  theme(
    #legend.position = "none"
    legend.title=element_blank()
  )

ggsave(here::here("figures", "fig1_2.png"), width = 5, units = "in")

# *Secondary Task Accuracy ----
alldata_parity_1 %>% 
  filter(cognitive_load != 1) %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load),
         exp = as.factor(exp)) %>% 
  group_by(participant, exp, cognitive_load) %>% 
  summarize(mean_acc = mean(key_resp_load_corr)) %>% 
  ggplot(aes(x = cognitive_load, y = mean_acc, color = exp, shape = exp)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  scale_x_discrete(labels = c("2", "4")) +
  scale_color_manual(values = pal, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Number of Secondary Task Items", y = "Secondary Task Accuracy", ) +
  theme(
    #legend.position = "none"
    legend.title=element_blank()
  )

ggsave(here::here("figures", "fig1_3.png"), width = 5, units = "in")

# Mind-Wandering Reporting by Category ----
alldata_wm_1 %>% 
  filter(!is.na(key_resp_mw_keys)) %>% 
  group_by(key_resp_mw_keys, exp) %>% 
  summarize(count = n()) %>% 
  group_by(exp) %>% 
  mutate(prop_mw = round(count/sum(count), 3)*100)

# Group by secondary task performance ----
perf_groups <- alldata_parity_1 %>%
  group_by(participant, exp) %>%
  summarize(mean_acc = mean(key_resp_load_corr)) %>%
  mutate(perf_group = ifelse(mean_acc < .5, "low", "high")) %>%
  mutate(perf_group = factor(perf_group, levels = c("low", "high")))

perf_groups %>% 
  group_by(exp, perf_group) %>% 
  count()

perf_groups <- alldata_parity_1 %>%
  group_by(participant, exp) %>%
  summarize(mean_acc = mean(key_resp_load_corr)) %>%
  mutate(perf_group = case_when(
    exp == "Online" & mean_acc == 0 ~ "Online Zero",
    exp == "Online" & mean_acc <= .75 ~ "Online Low",
    exp == "Online" & mean_acc > .75 ~"Online High",
    exp == "In-Person"  ~ "In-Person"
  )) %>% 
  mutate(perf_group = factor(perf_group, levels = c("Online Zero", "Online Low", "Online High", "In-Person")))

perf_groups %>% 
  group_by(exp, perf_group) %>% 
  count()

# Working memory accuracy x experimental context & secondary task performance
dat <- alldata_wm_1 %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         exp = as.factor(exp), 
         cognitive_load = as.factor(cognitive_load),
         perf_group = as.factor(perf_group)) %>% 
  group_by(participant, exp, perf_group) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) 

dat %>% 
  group_by(perf_group) %>% 
  summarize(mean(mean_acc), sd(mean_acc))

online_zero <- dat %>% filter(perf_group == "Online Zero") %>% pull(mean_acc)
online_low <- dat %>% filter(perf_group == "Online Low") %>% pull(mean_acc)
online_high <- dat %>% filter(perf_group == "Online High") %>% pull(mean_acc)
inperson <- dat %>% filter(perf_group == "In-Person") %>% pull(mean_acc)

t.test(x = online_zero, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_zero, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_low, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_low, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = inperson, paired = FALSE, var.equal = TRUE)

# Mind-wandering x experimental context & secondary task performance
dat <- alldata_wm_1 %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         exp = as.factor(exp),
         mind_wander = ifelse(key_resp_mw_keys == 1, 0, 1),
         cognitive_load = as.factor(cognitive_load),
         perf_group = as.factor(perf_group)) %>% 
  filter(!is.na(mind_wander)) %>% 
  group_by(participant, exp, perf_group) %>% 
  summarize(mean_mw = mean(mind_wander)) 

dat %>% 
  group_by(perf_group) %>% 
  summarize(mean(mean_mw), sd(mean_mw))

online_zero <- dat %>% filter(perf_group == "Online Zero") %>% pull(mean_mw)
online_low <- dat %>% filter(perf_group == "Online Low") %>% pull(mean_mw)
online_high <- dat %>% filter(perf_group == "Online High") %>% pull(mean_mw)
inperson <- dat %>% filter(perf_group == "In-Person") %>% pull(mean_mw)

t.test(x = online_zero, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_zero, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_low, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_low, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = inperson, paired = FALSE, var.equal = TRUE)


# *Plotting ----
# Working Memory Task Accuracy 
p1 <- alldata_wm_1 %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         perf_group = as.factor(perf_group),
         cognitive_load = as.factor(cognitive_load),
         exp = as.factor(exp)) %>% 
  group_by(participant, exp, perf_group) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) %>% 
  ggplot(aes(x = perf_group, y = mean_acc, color = perf_group)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  #scale_x_discrete(labels = c("Low", "High")) +
  scale_color_manual(values = pal2, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Secondary Task Performance Group", y = "Primary Working Memory Task Accuracy", ) +
  #facet_wrap(~exp) +
  theme(
    legend.position = "none",
    legend.title=element_blank()
  )

# Mind-wandering 
p2 <- alldata_wm_1 %>% 
  left_join(., perf_groups) %>% 
  filter(!is.na(key_resp_mw_keys)) %>% # Two participants are missing data for one trial each
  mutate(participant = as.factor(participant),
         perf_group = as.factor(perf_group),
         exp = as.factor(exp),
         cognitive_load = as.factor(cognitive_load),
         mind_wander = ifelse(key_resp_mw_keys != 1, 1, 0)) %>% 
  group_by(participant, exp, perf_group) %>% 
  summarize(mean_mw = mean(mind_wander)) %>% 
  ggplot(aes(x = perf_group, y = mean_mw, color = perf_group)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  #scale_x_discrete(labels = c("Low", "High")) +
  scale_color_manual(values = pal2, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Secondary Task Performance Group", y = "Reported Mind-Wandering (Proportion of Trials)", ) +
  theme(
    legend.position = "none",
    legend.title=element_blank()
  )

p1 + p2 +
  #plot_layout(guides = "collect") +
  plot_annotation(tag_levels = "a")

ggsave(here::here("figures", "fig1_4.png"), width = 10, units = "in")


# Experiment 2 ----

# Basic Stats ----

alldata_wm_2 %>% 
  summarise(count = n_distinct(participant))

# *Working memory accuracy ----
alldata_wm_2 %>% 
  summarise(mean_acc = mean(key_resp_stimulus_corr), sd = sd(key_resp_stimulus_corr))

# Working memory accuracy x experimental context x cognitive load
dat <- alldata_wm_2 %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load)) %>% 
  group_by(participant, cognitive_load) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) 

summary(aov(mean_acc ~ cognitive_load + Error(participant), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ cognitive_load, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# *Mind-wandering by group mean/SD ----
# All responses other than 1 "the task" coded as mind-wandering
dat <- alldata_wm_2 %>% 
  mutate(participant = as.factor(participant),
         mind_wander = ifelse(key_resp_mw_keys == 1, 0, 1),
         cognitive_load = as.factor(cognitive_load)) %>% 
  group_by(participant, cognitive_load) %>% 
  summarize(mean_mw = mean(mind_wander)) 

summary(aov(mean_mw ~ cognitive_load + Error(participant), data = dat))
anova_bf_mw = anovaBF(mean_mw ~ cognitive_load, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_mw)

# *Secondary task performance by group mean/SD ----
dat <- alldata_parity_2 %>% 
  filter(cognitive_load != "1") %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load)) %>% 
  group_by(participant, cognitive_load) %>% 
  summarize(mean_acc = mean(key_resp_load_corr)) 

two <- dat %>% filter(cognitive_load == "2") %>% pull(mean_acc)
four <- dat %>% filter(cognitive_load == "4") %>% pull(mean_acc)

t.test(x = two, y = four, paired = TRUE)
ttestBF(x = two, y = four, paired = TRUE)

# Plotting ----
# *Working Memory Task Accuracy ----
p1 <- alldata_wm_2 %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load)) %>% 
  group_by(participant, cognitive_load) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) %>% 
  ggplot(aes(x = cognitive_load, y = mean_acc)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3), 
              color = "#51355A", shape = 15) + 
  stat_summary(geom = "point", fun = "mean", size = 4, 
               position = position_dodge(width = .3), 
               color = "#51355A", shape = 15) +
  stat_summary(geom = "errorbar", width = .2, 
               position = position_dodge(width = .3), color = "#51355A") +
  scale_x_discrete(labels = c("0", "2", "4")) +
  scale_color_manual(values = pal, ) +
  labs(x = "Number of Secondary Task Items", y = "Primary Working Memory Task Accuracy", ) +
  #facet_wrap(~exp) +
  theme(
    #legend.position = "none"
    legend.title=element_blank()
  )

# *Mind-Wandering ----
p2 <- alldata_wm_2 %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load),
         mind_wander = ifelse(key_resp_mw_keys != 1, 1, 0)) %>% 
  group_by(participant, cognitive_load) %>% 
  summarize(mean_mw = mean(mind_wander)) %>% 
  ggplot(aes(x = cognitive_load, y = mean_mw)) +
  geom_jitter(size = 1, alpha = .5, 
              position = position_dodge(width = .3), 
              color = "#51355A", shape = 15) + 
  stat_summary(geom = "point", fun = "mean", size = 4, 
               position = position_dodge(width = .3), 
               color = "#51355A", shape = 15) +
  stat_summary(geom = "errorbar", width = .2, 
               position = position_dodge(width = .3), color = "#51355A") +
  scale_x_discrete(labels = c("0", "2", "4")) +
  scale_color_manual(values = pal, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Number of Secondary Task Items", y = "Reported Mind-Wandering (Proportion of Trials)", ) +
  theme(
    #legend.position = "none"
    legend.title=element_blank()
  )

# *Secondary Task Accuracy ----
p3 <- alldata_parity_2 %>% 
  filter(cognitive_load != 1) %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load)) %>% 
  group_by(participant, cognitive_load) %>% 
  summarize(mean_acc = mean(key_resp_load_corr)) %>% 
  ggplot(aes(x = cognitive_load, y = mean_acc)) +
  geom_jitter(size = 1, alpha = .5, 
              position = position_dodge(width = .3),
              color = "#51355A", shape = 15) + 
  stat_summary(geom = "point", fun = "mean", size = 4,
               position = position_dodge(width = .3),
               color = "#51355A", shape = 15) +
  stat_summary(geom = "errorbar", width = .2, 
               position = position_dodge(width = .3),
               color = "#51355A") +
  scale_x_discrete(labels = c("2", "4")) +
  scale_color_manual(values = pal, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Number of Secondary Task Items", y = "Secondary Task Accuracy", ) +
  theme(
    #legend.position = "none"
    legend.title=element_blank()
  )

p1 + p2 + p3 +
  plot_annotation(tag_levels = "a")

ggsave(here::here("figures", "fig2_1.png"), width = 9, height = 7, units = "in")

# Group by secondary task performance ----
perf_groups <- alldata_parity_2 %>%
  group_by(participant) %>%
  summarize(mean_acc = mean(key_resp_load_corr)) %>%
  mutate(perf_group = case_when(
    mean_acc == 0 ~ "Zero",
    mean_acc <= .75 ~ "Low",
    mean_acc > .75 ~"High"
  )) %>% 
  mutate(perf_group = factor(perf_group, levels = c("Zero", "Low", "High")))

perf_groups %>% 
  group_by(perf_group) %>% 
  count()

# Working memory accuracy x experimental context & secondary task performance
dat <- alldata_wm_2 %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load),
         perf_group = as.factor(perf_group)) %>% 
  group_by(participant, perf_group) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) 

dat %>% 
  group_by(perf_group) %>% 
  summarize(mean(mean_acc), sd(mean_acc))

online_zero <- dat %>% filter(perf_group == "Zero") %>% pull(mean_acc)
online_low <- dat %>% filter(perf_group == "Low") %>% pull(mean_acc)
online_high <- dat %>% filter(perf_group == "High") %>% pull(mean_acc)

t.test(x = online_high, y = online_zero, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = online_zero, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = online_low, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = online_low, paired = FALSE, var.equal = TRUE)

# Mind-wandering x experimental context & secondary task performance
dat <- alldata_wm_2 %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         mind_wander = ifelse(key_resp_mw_keys == 1, 0, 1),
         cognitive_load = as.factor(cognitive_load),
         perf_group = as.factor(perf_group)) %>% 
  filter(!is.na(mind_wander)) %>% 
  group_by(participant, perf_group) %>% 
  summarize(mean_mw = mean(mind_wander)) 

dat %>% 
  group_by(perf_group) %>% 
  summarize(mean(mean_mw), sd(mean_mw))

online_zero <- dat %>% filter(perf_group == "Zero") %>% pull(mean_mw)
online_low <- dat %>% filter(perf_group == "Low") %>% pull(mean_mw)
online_high <- dat %>% filter(perf_group == "High") %>% pull(mean_mw)

t.test(x = online_high, y = online_zero, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = online_zero, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = online_low, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = online_low, paired = FALSE, var.equal = TRUE)


# *Plotting ----
# Working Memory Task Accuracy 
p1 <- alldata_wm_2 %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         perf_group = as.factor(perf_group),
         cognitive_load = as.factor(cognitive_load)) %>% 
  group_by(participant, perf_group) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) %>% 
  ggplot(aes(x = perf_group, y = mean_acc, color = perf_group)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  #scale_x_discrete(labels = c("Low", "High")) +
  scale_color_manual(values = pal2, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Secondary Task Performance Group", y = "Primary Working Memory Task Accuracy", ) +
  #facet_wrap(~exp) +
  theme(
    legend.position = "none",
    legend.title=element_blank()
  )

# Mind-wandering 
p2 <- alldata_wm_2 %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         perf_group = as.factor(perf_group),
         cognitive_load = as.factor(cognitive_load),
         mind_wander = ifelse(key_resp_mw_keys != 1, 1, 0)) %>% 
  group_by(participant, perf_group) %>% 
  summarize(mean_mw = mean(mind_wander)) %>% 
  ggplot(aes(x = perf_group, y = mean_mw, color = perf_group)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  #scale_x_discrete(labels = c("Low", "High")) +
  scale_color_manual(values = pal2, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Secondary Task Performance Group", y = "Reported Mind-Wandering (Proportion of Trials)", ) +
  theme(
    legend.position = "none",
    legend.title=element_blank()
  )

p1 + p2 +
  #plot_layout(guides = "collect") +
  plot_annotation(tag_levels = "a")

ggsave(here::here("figures", "fig2_2.png"), width = 10, units = "in")

# Mind-Wandering Reporting by Category ----
alldata_wm_2 %>% 
  group_by(key_resp_mw_keys) %>% 
  summarize(count = n()) %>% 
  mutate(prop_mw = round(count/sum(count), 3)*100)

# Combined Experiment 1 and 2 ----
# Combine experiments
alldata_wm_1 <- alldata_wm_1 %>% 
  mutate(exp = ifelse(exp == "Online", "1a Online", "1b In-Person"))
alldata_wm_2 <- alldata_wm_2 %>% 
  mutate(exp = "2 Online")

alldata_parity_1 <- alldata_parity_1 %>% 
  mutate(exp = ifelse(exp == "Online", "1a Online", "1b In-Person"))
alldata_parity_2 <- alldata_parity_2 %>% 
  mutate(exp = "2 Online")

wm_combined <- rbind(alldata_wm_1, alldata_wm_2)
parity_combined <- rbind(alldata_parity_1, alldata_parity_2)

# Group by secondary task performance ----
perf_groups <- parity_combined %>%
  group_by(participant, exp) %>%
  summarize(mean_acc = mean(key_resp_load_corr)) %>%
  mutate(perf_group = case_when(
    exp != "1b In-Person" & mean_acc == 0 ~ "Online Zero",
    exp != "1b In-Person" & mean_acc <= .8 ~ "Online Low",
    exp != "1b In-Person" & mean_acc > .8 ~"Online High",
    TRUE ~ "In-Person"
  )) %>% 
  mutate(perf_group = factor(perf_group, levels = c("Online Zero", "Online Low", "Online High", "In-Person")))

perf_groups %>% 
  group_by(perf_group) %>% 
  count()

# Working memory accuracy x experimental context & secondary task performance
dat <- wm_combined %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         cognitive_load = as.factor(cognitive_load),
         perf_group = as.factor(perf_group)) %>% 
  group_by(participant, perf_group) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) 

dat %>% 
  group_by(perf_group) %>% 
  summarize(mean(mean_acc), sd(mean_acc))

online_zero <- dat %>% filter(perf_group == "Online Zero") %>% pull(mean_acc)
online_low <- dat %>% filter(perf_group == "Online Low") %>% pull(mean_acc)
online_high <- dat %>% filter(perf_group == "Online High") %>% pull(mean_acc)
inperson <- dat %>% filter(perf_group == "In-Person") %>% pull(mean_acc)

t.test(x = online_zero, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_zero, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_low, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_low, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = online_zero, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = online_zero, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = online_low, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = online_low, paired = FALSE, var.equal = TRUE)

# Mind-wandering x experimental context & secondary task performance
dat <- wm_combined %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         exp = as.factor(exp),
         mind_wander = ifelse(key_resp_mw_keys == 1, 0, 1),
         cognitive_load = as.factor(cognitive_load),
         perf_group = as.factor(perf_group)) %>% 
  filter(!is.na(mind_wander)) %>% 
  group_by(participant, exp, perf_group) %>% 
  summarize(mean_mw = mean(mind_wander)) 

dat %>% 
  group_by(perf_group) %>% 
  summarize(mean(mean_mw), sd(mean_mw))

online_zero <- dat %>% filter(perf_group == "Online Zero") %>% pull(mean_mw)
online_low <- dat %>% filter(perf_group == "Online Low") %>% pull(mean_mw)
online_high <- dat %>% filter(perf_group == "Online High") %>% pull(mean_mw)
inperson <- dat %>% filter(perf_group == "In-Person") %>% pull(mean_mw)

t.test(x = online_zero, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_zero, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_low, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_low, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = inperson, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = inperson, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = online_zero, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = online_zero, paired = FALSE, var.equal = TRUE)
t.test(x = online_high, y = online_low, paired = FALSE, var.equal = TRUE)
ttestBF(x = online_high, y = online_low, paired = FALSE, var.equal = TRUE)

# *Plotting ----
# Working Memory Task Accuracy 
p1 <- wm_combined %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         perf_group = as.factor(perf_group),
         cognitive_load = as.factor(cognitive_load)) %>% 
  group_by(participant, perf_group) %>% 
  summarize(mean_acc = mean(key_resp_stimulus_corr)) %>% 
  ggplot(aes(x = perf_group, y = mean_acc, color = perf_group)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  #scale_x_discrete(labels = c("Low", "High")) +
  scale_color_manual(values = pal2, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Secondary Task Performance Group", y = "Primary Working Memory Task Accuracy", ) +
  #facet_wrap(~exp) +
  theme(
    legend.position = "none",
    legend.title=element_blank()
  )

# Mind-wandering 
p2 <- wm_combined %>% 
  left_join(., perf_groups) %>% 
  mutate(participant = as.factor(participant),
         perf_group = as.factor(perf_group),
         cognitive_load = as.factor(cognitive_load),
         mind_wander = ifelse(key_resp_mw_keys != 1, 1, 0)) %>% 
  group_by(participant, perf_group) %>% 
  summarize(mean_mw = mean(mind_wander)) %>% 
  ggplot(aes(x = perf_group, y = mean_mw, color = perf_group)) +
  geom_jitter(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 4, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3)) +
  #scale_x_discrete(labels = c("Low", "High")) +
  scale_color_manual(values = pal2, ) +
  #coord_cartesian(ylim = c(.5, 1)) +
  labs(x = "Secondary Task Performance Group", y = "Reported Mind-Wandering (Proportion of Trials)", ) +
  theme(
    legend.position = "none",
    legend.title=element_blank()
  )

p1 + p2 +
  #plot_layout(guides = "collect") +
  plot_annotation(tag_levels = "a")

ggsave(here::here("figures", "fig3_1.png"), width = 10, units = "in")

