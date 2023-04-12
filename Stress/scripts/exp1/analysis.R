# Analysis script for SM1
# 2/9/23

#Setup-----

# Load packages
library(tidyverse)
library(BayesFactor)

set.seed(123)

theme_set(theme_minimal())
pal <- c("#204B57", "#8A716A", "#125E8A", "#197BBD", "#C2B8B2")

# Read data
alldata_wm <- read_csv(here::here("data", "exp1", "output_data", "alldata_wm.csv"))
alldata_parity <- read_csv(here::here("data", "exp1", "output_data", "alldata_parity.csv"))
alldata_stai <- read_csv(here::here("data", "exp1", "output_data", "alldata_stai.csv"))
alldata_hr <- read_csv(here::here("data", "exp1", "output_data", "alldata_hr.csv"))
alldata_qs <- read_csv(here::here("data", "exp1", "output_data", "alldata_qs.csv"))

# Participants/group
alldata_wm %>% 
  group_by(group) %>% 
  summarize(n = n()/(3*96))

# Bad trials
bad <- alldata_wm %>% 
  filter(resp_angle == 0)

(length(bad$trial_n)/length(alldata_wm$trial_n))*100

# Working Memory Recall Error----

# *Group x Item ----
dat <- alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         central_item = as.factor(central_item), 
         block_n = as.factor(block_n)) %>%
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  group_by(group, central_item, participant) %>% 
  summarize(mean_acc = mean(err_angle)) 

alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         central_item = as.factor(central_item), 
         block_n = as.factor(block_n)) %>%
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  group_by(group, central_item, participant) %>% 
  summarize(mean_acc = mean(err_angle)) %>% 
  ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  #stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Condition", y = "Response Error (°)") +
  #scale_x_discrete(labels = c("Peripheral Items", "Central Items")) +
  scale_color_manual(values = pal, guide = "none") +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central"))+
  scale_y_continuous(limits = c(0, 115)) +
  #facet_wrap(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_1.png"))

summary(aov(mean_acc ~ central_item*group, data = dat))
anova_bf_acc = anovaBF(mean_acc ~ central_item*group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# *Group x Delay ----
dat <- alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         delay_1 = recode_factor(delay_1,
                                 `0` = "0", `0.4` = "400", `0.8` = "800", `1.2` = "1200")) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  group_by(participant, group, delay_1) %>%
  summarize(mean_acc = mean(err_angle))

alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         delay_1 = as.factor(delay_1), 
         block_n = as.factor(block_n)) %>%
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  group_by(group, delay_1, participant) %>% 
  summarize(mean_acc = mean(err_angle)) %>% 
  ggplot(aes(x = delay_1, y = mean_acc, color = group, group = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "", y = "Response Error (°)") +
  scale_x_discrete(name = "Delay (ms)", labels = c("0", "400", "800", "1200")) +
  scale_color_manual(values = pal, name = "Stress Condition") +
  scale_y_continuous(limits = c(0, 115)) +
  facet_wrap(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_2.png"))

summary(aov(mean_acc ~ delay_1*group + Error(participant/delay_1), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ delay_1*group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# Parity Judgment Response Time ----

dat <- alldata_parity %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         parity_resp_rt = parity_resp_rt * 1000,
         parity_i = as.factor(parity_i), 
         delay_1 = as.factor(delay_1)) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  filter(!is.na(parity_i)) %>% 
  group_by(group, delay_1, parity_i, participant) %>% 
  summarize(mean_rt_pt = mean(parity_resp_rt, na.rm = TRUE)) 
  
bad_pts <- dat %>% filter(is.na(mean_rt_pt)) %>% pull(participant)
dat <- dat %>% filter(!participant %in% bad_pts)

# *Item 1 ----
alldata_parity %>% 
  filter(parity_i == 1) %>% 
  filter(!participant %in% bad_pts) %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         parity_resp_rt = parity_resp_rt * 1000,
         parity_i = as.factor(parity_i), 
         delay_1 = as.factor(delay_1)) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  group_by(group, delay_1, parity_i, participant) %>% 
  summarize(mean_rt = mean(parity_resp_rt, na.rm = TRUE)) %>% 
  ggplot(aes(x = delay_1, y = mean_rt, color = group, group = group)) +
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Delay Condition (ms)", y = "Reponse Time (ms)") +
  scale_color_manual(values = pal, name = "Stress Condition") +
  scale_x_discrete(labels = c("0", "400", "800", "1200")) +
  scale_y_continuous(limits = c(400, 1200)) +
  facet_grid(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_3.png"))

summary(aov(mean_rt_pt ~ delay_1*group*parity_i + Error(participant), data = dat))
anova_bf_rt = anovaBF(mean_rt_pt ~ delay_1*group*parity_i, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
anova_bf_rt

# Item 1
summary(aov(mean_rt_pt ~ delay_1*group + Error(participant), data = dat %>% filter(parity_i == 1)))
anova_bf_rt = anovaBF(mean_rt_pt ~ delay_1*group, data = dat %>% filter(parity_i == 1), whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_rt)
sort(anova_bf_rt)[4]/sort(anova_bf_rt)[3]
sort(anova_bf_rt)[4]/sort(anova_bf_rt)[2]

# *Item 2 ----
alldata_parity %>% 
  filter(parity_i == 2) %>% 
  filter(!participant %in% bad_pts) %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         parity_resp_rt = parity_resp_rt * 1000,
         parity_i = as.factor(parity_i), 
         delay_1 = as.factor(delay_1)) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  group_by(group, delay_1, parity_i, participant) %>% 
  summarize(mean_rt = mean(parity_resp_rt, na.rm = TRUE)) %>% 
  ggplot(aes(x = delay_1, y = mean_rt, color = group, group = group)) +
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Delay Condition (ms)", y = "Reponse Time (ms)") +
  scale_color_manual(values = pal, name = "Stress Condition") +
  scale_x_discrete(labels = c("0", "400", "800", "1200")) +
  scale_y_continuous(limits = c(400, 1200)) +
  facet_grid(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_4.png"))

# Item 2
summary(aov(mean_rt_pt ~ delay_1*group + Error(participant), data = dat %>% filter(parity_i == 2)))
anova_bf_rt = anovaBF(mean_rt_pt ~ delay_1*group, data = dat %>% filter(parity_i == 2), whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_rt)
sort(anova_bf_rt)[4]/sort(anova_bf_rt)[3]
sort(anova_bf_rt)[4]/sort(anova_bf_rt)[2]
sort(anova_bf_rt)[4]/sort(anova_bf_rt)[1]


nostress_2_no <- dat %>% filter(group == "No Stress"  & parity_i == 2) %>% pull(mean_rt_pt)
lowstress_2_no <- dat %>% filter(group == "Low Stress" & parity_i == 2) %>% pull(mean_rt_pt)
highstress_2_no <- dat %>% filter(group == "High Stress" & parity_i == 2) %>% pull(mean_rt_pt)

t.test(x = nostress_2_no, y = lowstress_2_no, var.equal = T)
ttestBF(x = nostress_2_no, y = lowstress_2_no)

t.test(x = nostress_2_no, y = highstress_2_no, var.equal = T)
ttestBF(x = nostress_2_no, y = highstress_2_no)

t.test(x = highstress_2_no, y = lowstress_2_no, var.equal = T)
ttestBF(x = highstress_2_no, y = lowstress_2_no)

# *Item 3 ----
alldata_parity %>% 
  filter(parity_i == 3) %>% 
  filter(!participant %in% bad_pts) %>%
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         parity_resp_rt = parity_resp_rt * 1000,
         parity_i = as.factor(parity_i), 
         delay_1 = as.factor(delay_1)) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  group_by(group, delay_1, parity_i, participant) %>% 
  summarize(mean_rt = mean(parity_resp_rt, na.rm = TRUE)) %>% 
  ggplot(aes(x = delay_1, y = mean_rt, color = group, group = group)) +
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Delay Condition (ms)", y = "Reponse Time (ms)") +
  scale_color_manual(values = pal, name = "Stress Condition") +
  scale_x_discrete(labels = c("0", "400", "800", "1200")) +
  scale_y_continuous(limits = c(400, 1200)) +
  facet_grid(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_5.png"))

summary(aov(mean_rt_pt ~ delay_1*group + Error(participant), data = dat %>% filter(parity_i == 3)))
anova_bf_rt = anovaBF(mean_rt_pt ~ delay_1*group, data = dat %>% filter(parity_i == 3), whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_rt)
sort(anova_bf_rt)[4]/sort(anova_bf_rt)[3]
sort(anova_bf_rt)[4]/sort(anova_bf_rt)[1]

# Stress response ----

# *STAI----
alldata_stai %>% 
  filter(is.na(stai_2)) 

alldata_stai %>% 
  filter(complete.cases(stai_2)) %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress")) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  pivot_longer(!c(participant, group),
               names_to = "time_point",
               names_pattern = "stai_(.)",
               values_to = "stai_measure") %>% 
  filter(time_point != 3) %>% 
  group_by(group, time_point) %>% 
  summarize(mean(stai_measure), sd(stai_measure))

dat <- alldata_stai %>% 
  filter(complete.cases(stai_2)) %>%
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress")) %>% 
  pivot_longer(!c(participant, group),
               names_to = "time_point",
               names_pattern = "stai_(.)",
               values_to = "stai_measure") %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress")),
         time_point = as.factor(time_point)) %>% 
  filter(time_point == 1)

summary(aov(stai_measure ~ group, data = dat))
anova_bf = anovaBF(stai_measure ~ group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

dat <- alldata_stai %>% 
  filter(complete.cases(stai_2)) %>%
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress")) %>% 
  pivot_longer(!c(participant, group),
               names_to = "time_point",
               names_pattern = "stai_(.)",
               values_to = "stai_measure") %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress")),
         time_point = as.factor(time_point))

high_2 = dat %>% filter(time_point == 2 & group == "High Stress") %>% pull(stai_measure)
low_2 = dat %>% filter(time_point == 2 & group == "Low Stress") %>% pull(stai_measure)
no_2 = dat %>% filter(time_point == 2 & group == "No Stress") %>% pull(stai_measure)

t.test(high_2, low_2, var.equal = T)
ttestBF(high_2, low_2)

t.test(high_2, no_2, var.equal = T)
ttestBF(high_2, no_2)

t.test(low_2, no_2, var.equal = T)
ttestBF(low_2, no_2)

alldata_stai %>% 
  filter(complete.cases(stai_2)) %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress")) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  pivot_longer(!c(participant, group),
               names_to = "time_point",
               names_pattern = "stai_(.)",
               values_to = "stai_measure") %>% 
  filter(time_point != 3) %>% 
  ggplot(aes(x = time_point, y = stai_measure, color = group, group = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  scale_color_manual(values = pal, name = "Stress Condition") +
  #scale_x_discrete(labels = c("Before", "After")) +
  labs(x = "Measurement Timepoint", y = "STAI Score") +
  #facet_wrap(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 
ggsave(here::here("figures", "fig1_6.png"))


# *Heart Rate----
alldata_hr %>% 
  filter(is.na(hr_2_text)) 

alldata_hr %>% 
  filter(is.na(hr_1_text)) 

alldata_hr %>% 
  filter(complete.cases(hr_2_text, hr_1_text)) %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress")) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress")),
         hr_1_text = as.double(hr_1_text),
         hr_2_text = as.double(hr_2_text)) %>% 
  pivot_longer(!c(participant, group),
               names_to = "time_point",
               names_pattern = "hr_(.)_text",
               values_to = "hr_measure") %>% 
  filter(time_point != 3) %>% 
  group_by(group, time_point) %>% 
  summarize(mean(hr_measure, na.rm = T), sd(hr_measure, na.rm = T))

dat <- alldata_hr %>% 
  filter(complete.cases(hr_2_text, hr_1_text)) %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress")) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress")),
         hr_1_text = as.double(hr_1_text),
         hr_2_text = as.double(hr_2_text)) %>% 
  pivot_longer(!c(participant, group),
               names_to = "time_point",
               names_pattern = "hr_(.)_text",
               values_to = "hr_measure") %>% 
  mutate(time_point = as.factor(time_point)) %>% 
  filter(time_point == "1")

summary(aov(hr_measure ~ group, data = dat))
anova_bf = anovaBF(hr_measure ~ group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

dat <- alldata_hr %>% 
  filter(complete.cases(hr_2_text, hr_1_text)) %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress")) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress")),
         hr_1_text = as.double(hr_1_text),
         hr_2_text = as.double(hr_2_text)) %>% 
  pivot_longer(!c(participant, group),
               names_to = "time_point",
               names_pattern = "hr_(.)_text",
               values_to = "hr_measure") %>% 
  mutate(time_point = as.factor(time_point)) %>% 
  filter(time_point == "2")

summary(aov(hr_measure ~ group, data = dat))
anova_bf = anovaBF(hr_measure ~ group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)


alldata_hr %>% 
  filter(complete.cases(hr_2_text, hr_1_text)) %>% 
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         hr_1_text = as.double(hr_1_text),
         hr_2_text = as.double(hr_2_text)) %>% 
  pivot_longer(!c(participant, group),
               names_to = "time_point",
               names_pattern = "hr_(.)_text",
               values_to = "hr_measure") %>% 
  filter(time_point != 3) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress")), 
         time_point = as.factor(time_point)) %>% 
  ggplot(aes(x = time_point, y = hr_measure, color = group, group = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  scale_color_manual(values = pal, name = "Stress Condition") +
  #scale_x_discrete(labels = c("Before", "After")) +
  labs(x = "Measurement Timepoint", y = "Heart Rate (BPM)") +
  #facet_wrap(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 
ggsave(here::here("figures", "fig1_7.png"))


# By stress response ----
stai_dat <- alldata_stai %>% 
  filter(complete.cases(stai_2)) %>%
  rowwise() %>% 
  mutate(stai_difference = stai_2 - stai_1)

stai_dat %>% 
  ungroup() %>% 
  summarize(median(stai_difference)) # 3

quantile(stai_dat$stai_difference)

# *Group x Item ----
dat <- alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  left_join(., stai_dat) %>% 
  mutate(group = ifelse(stai_difference >= 3, "High", "Low"),
         group = factor(group, levels = c("Low", "High")),
         central_item = as.factor(central_item), 
         block_n = as.factor(block_n)) %>%
  filter(!is.na(group)) %>% 
  group_by(group, central_item, participant) %>% 
  summarize(mean_acc = mean(err_angle)) 

ggplot(dat, aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  #stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Response", y = "Response Error (°)") +
  #scale_x_discrete(labels = c("Peripheral Items", "Central Items")) +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central"))+
  scale_color_manual(values = pal, guide = "none") +
  scale_y_continuous(limits = c(0, 115)) +
  #facet_wrap(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_8.png"))

summary(aov(mean_acc ~ central_item*group, data = dat))
anova_bf_acc = anovaBF(mean_acc ~ central_item*group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# *Group x Delay ----
dat <- alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  left_join(., stai_dat) %>% 
  mutate(group = ifelse(stai_difference >= 3, "High", "Low"),
         group = factor(group, levels = c("Low", "High")),
         delay_1 = recode_factor(delay_1,
                                 `0` = "0", `0.4` = "400", `0.8` = "800", `1.2` = "1200")) %>% 
  filter(!is.na(group)) %>% 
  group_by(participant, group, delay_1) %>%
  summarize(mean_acc = mean(err_angle))

alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  left_join(., stai_dat) %>% 
  mutate(group = ifelse(stai_difference >= 3, "High", "Low"),
         group = factor(group, levels = c("Low", "High")),
         delay_1 = as.factor(delay_1), 
         block_n = as.factor(block_n)) %>%
  group_by(group, delay_1, participant) %>% 
  filter(!is.na(group)) %>% 
  summarize(mean_acc = mean(err_angle)) %>% 
  ggplot(aes(x = delay_1, y = mean_acc, color = group, group = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "", y = "Response Error (°)") +
  scale_x_discrete(name = "Delay (ms)", labels = c("0", "400", "800", "1200")) +
  scale_color_manual(values = pal, name = "Stress Response") +
  scale_y_continuous(limits = c(0, 115)) +
  facet_wrap(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_9.png"))

summary(aov(mean_acc ~ delay_1*group + Error(participant), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ delay_1*group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# By stress response ----

alldata_qs %>% 
  filter(complete.cases(bai_score)) %>% 
  summarize(median(bai_score)) # 14

# *Group x Item ----
dat <- alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  left_join(., alldata_qs) %>% 
  filter(complete.cases(bai_score)) %>% 
  mutate(anxiety_group = ifelse(bai_score >= 14, "High", "Low"),
         anxiety_group = factor(anxiety_group, levels = c("Low", "High")),
         central_item = as.factor(central_item),
         group= as.factor(group)) %>%
  filter(!is.na(anxiety_group)) %>% 
  group_by(anxiety_group, participant, group) %>% 
  summarize(mean_acc = mean(err_angle)) 

ggplot(dat, aes(x = anxiety_group, y = mean_acc, color = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  #stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Anxiety", y = "Response Error (°)") +
  #scale_x_discrete(labels = c("Peripheral Items", "Central Items")) +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central"))+
  scale_color_manual(values = pal) +
  scale_y_continuous(limits = c(0, 115)) +
  facet_wrap(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_8.png"))

summary(aov(mean_acc ~ central_item*group, data = dat))
anova_bf_acc = anovaBF(mean_acc ~ central_item*group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# *Group x Delay ----
dat <- alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  left_join(., alldata_qs) %>% 
  filter(complete.cases(bai_score)) %>% 
  mutate(anxiety_group = ifelse(bai_score >= 14, "High", "Low"),
         anxiety_group = factor(anxiety_group, levels = c("Low", "High")),
         delay_1 = recode_factor(delay_1,
                                 `0` = "0", `0.4` = "400", `0.8` = "800", `1.2` = "1200"),
         group= as.factor(group)) %>%
  filter(!is.na(anxiety_group)) %>% 
  group_by(participant, anxiety_group, group, delay_1) %>%
  summarize(mean_acc = mean(err_angle))


ggplot(dat, aes(x = delay_1, y = mean_acc, color = anxiety_group, group = anxiety_group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "", y = "Response Error (°)") +
  scale_x_discrete(name = "Delay (ms)", labels = c("0", "400", "800", "1200")) +
  scale_color_manual(values = pal) +
  scale_y_continuous(limits = c(0, 115)) +
  facet_wrap(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig1_9.png"))

summary(aov(mean_acc ~ delay_1*group + Error(participant), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ delay_1*group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

dat <- alldata_parity %>% 
  left_join(., alldata_qs) %>% 
  filter(complete.cases(bai_score)) %>% 
  mutate(anxiety_group = ifelse(bai_score >= 14, "High", "Low"),
         anxiety_group = factor(anxiety_group, levels = c("Low", "High")),
         delay_1 = recode_factor(delay_1,
                                 `0` = "0", `0.4` = "400", `0.8` = "800", `1.2` = "1200"),
         group= as.factor(group)) %>%
  mutate(group = recode_factor(group, 
                               `1` = "High Stress", `2` = "Low Stress", `3` = "No Stress"),
         parity_resp_rt = parity_resp_rt * 1000,
         parity_i = as.factor(parity_i)) %>% 
  mutate(group = factor(group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  filter(!is.na(parity_i)) %>% 
  group_by(group, delay_1, anxiety_group, parity_i, participant) %>% 
  summarize(mean_rt = mean(parity_resp_rt, na.rm = TRUE)) %>% 
  filter(group != "Low Stress")

bad_pts <- dat %>% filter(is.na(mean_rt)) %>% pull(participant)
dat <- dat %>% filter(!participant %in% bad_pts)

# *Item 1 ----

ggplot(dat, aes(x = delay_1, y = mean_rt, color = anxiety_group, group = anxiety_group)) +
  #geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "line", fun = "mean", size = 1, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Delay Condition (ms)", y = "Reponse Time (ms)") +
  scale_color_manual(values = pal) +
  scale_x_discrete(labels = c("0", "400", "800", "1200")) +
  scale_y_continuous(limits = c(400, 1200)) +
  facet_grid(~group) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

