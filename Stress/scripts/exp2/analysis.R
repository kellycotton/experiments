# Analysis script for SM2
# 2/13/23

#Setup-----

# Load packages
library(tidyverse)
library(BayesFactor)
library(patchwork)

set.seed(123)

theme_set(theme_minimal())
pal <- c("#204B57", "#8A716A", "#125E8A", "#197BBD", "#C2B8B2")

# Note:
# Group A = Stress, perception, wm
# Group B = Stress, wm, perception
# Group C = Perception, wm, stress
# Group D = WM, perception, stress


# Read data
alldata_wm <- read_csv(here::here("data", "exp2", "output_data", "alldata_wm.csv"))
alldata_parity <- read_csv(here::here("data", "exp2", "output_data", "alldata_parity.csv"))
alldata_delay <- read_csv(here::here("data", "exp2", "output_data", "alldata_delay.csv"))
alldata_stai <- read_csv(here::here("data", "exp2", "output_data", "alldata_stai.csv"))
alldata_dass <- read_csv(here::here("data", "exp2", "output_data", "alldata_dass.csv"))

alldata_wm <- alldata_wm %>% 
  filter(participant != "633d34b975714d7d4000a5bf") # 1 pt is really inaccurate for perception trial

alldata_parity <- alldata_parity %>% 
  filter(participant != "633d34b975714d7d4000a5bf") # 1 pt is really inaccurate for perception trial

alldata_delay <- alldata_delay %>% 
  filter(participant != "633d34b975714d7d4000a5bf") # 1 pt is really inaccurate for perception trial

alldata_stai <- alldata_stai %>% 
  filter(participant != "633d34b975714d7d4000a5bf") # 1 pt is really inaccurate for perception trial

alldata_dass <- alldata_dass %>% 
  filter(participant != "633d34b975714d7d4000a5bf") # 1 pt is really inaccurate for perception trial

# # Participants/group
alldata_wm %>%
  group_by(group) %>%
  summarize(n = n()/160)

# Bad trials
bad <- alldata_wm %>% 
  filter(resp_angle == 0)

(length(bad$trial_n)/length(alldata_wm$trial_n))*100

alldata_wm %>% 
  filter(is.na(disp_angle)) %>% 
  group_by(group, participant) %>% 
  count() %>% 
  group_by(group) %>% 
  count()

# Stress Response ----
alldata_stai %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After")) %>% 
  group_by(group, stai_measure) %>% 
  summarize(mean(stai_score), sd(stai_score))

dat <- alldata_stai %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         stai_measure = as.factor(stai_measure)) %>% 
  filter(stai_measure != 3)

ggplot(dat, aes(x = stai_measure, y = stai_score, color = group, group = group)) +
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "line", position = position_dodge(width = .3), size = 1) +
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Measurement Timepoint", y = "STAI Score") +
  #scale_x_discrete(labels = c("No Delay (0 ms)", "Long Delay (2400 ms)")) +
  scale_color_manual(values = pal, name = "Stress Condition", labels = c("Before", "After")) +
  #scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig2_4.png"))

summary(aov(stai_score ~ group*stai_measure, data = dat))
anova_bf = anovaBF(stai_score ~ group*stai_measure, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[2]

# DASS Score ----

alldata_dass %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After")) %>% 
  group_by(group) %>% 
  summarize(mean_a = mean(dass_score_a), sd_a = sd(dass_score_a),
            mean_d = mean(dass_score_d), sd_d = sd(dass_score_d),
            mean_s = mean(dass_score_s), sd_s = sd(dass_score_s))

dat <- 
  alldata_dass %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After")) 

summary(aov(dass_score_a ~ group, data = dat))
anova_bf = anovaBF(dass_score_a ~ group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

summary(aov(dass_score_d ~ group, data = dat))
anova_bf = anovaBF(dass_score_d ~ group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

summary(aov(dass_score_s ~ group, data = dat))
anova_bf = anovaBF(dass_score_s ~ group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)


# Missing data ----
# Participants missing perception trial data
missing_pts <- c("59a3af455fd74b0001abf9bf", "5d6f332829c25100188a4a27", 
                 "5fa935b3d330fa0429da624a", "5fec06ae197628d566cdc782", 
                 "603ee4c2bd61ee1a08fd6a8a", "6078b85e024d1d094113c3aa", 
                 "612469aab25fc8fbecfd8d2d", "6303fb5b692c378ba1d010f9", 
                 "638618fa9af1295309751c0c", "63b71f634cf71687250f50ac",
                 "61247ee84ff762aca1dc7473")

# Immediate Test ----
dat <- alldata_wm %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  filter(!is.na(err_angle)) %>% # Missing data for 11 pts
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         block_type = as.factor(block_type)) %>% 
  group_by(group, block_type, participant) %>% 
  summarize(mean_acc = mean(err_angle)) 

p1 <- ggplot(dat, aes(x = block_type, y = mean_acc, color = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Trial Type", y = "Response Error (°)") +
  scale_x_discrete(labels = c("Perception", "Working Memory")) +
  scale_y_continuous(limits = c(0, 115)) +
  scale_color_manual(values = pal, name = "Stress Condition") +
  ggtitle("Immediate Test") +
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

dat %>% 
  group_by(group, block_type) %>% 
  summarize(mean(mean_acc), sd(mean_acc))

summary(aov(mean_acc ~ group*block_type, data = dat))
anova_bf = anovaBF(mean_acc ~ group*block_type, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[2]


# Delayed Test ----
dat <- alldata_delay %>% 
  filter(resp_angle_ltm > 0) %>% # Trials in which the participant did not submit an answer
  filter(!is.na(err_angle_ltm)) %>% # Missing data for 10 pts
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         presented_block_type = as.factor(presented_block_type)) %>% 
  group_by(group, presented_block_type, participant) %>% 
  summarize(mean_acc = mean(err_angle_ltm))

p2 <- ggplot(dat, aes(x = presented_block_type, y = mean_acc, color = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Trial Type", y = "Response Error (°)") +
  scale_x_discrete(labels = c("Perception", "Working Memory")) +
  scale_y_continuous(limits = c(0, 115)) +
  scale_color_manual(values = pal, name = "Stress Condition") +
  ggtitle("Delayed Test") +
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


p1 + p2 +
  plot_annotation(tag_levels = "a") +
  plot_layout(guides = "collect")

ggsave(here::here("figures", "fig2_1.png"), height = 7, width = 11, units = "in")

dat %>% 
  group_by(group, presented_block_type) %>% 
  summarize(mean(mean_acc), sd(mean_acc))

summary(aov(mean_acc ~ group*presented_block_type, data = dat))
anova_bf = anovaBF(mean_acc ~ group*presented_block_type, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)


# WM Only Trials ----
# Immediate Test
dat <- alldata_wm %>% 
  filter(block_type == "working_memory") %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  filter(!is.na(err_angle)) %>% # Missing data for 10 pts
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         central_item = as.factor(central_item), 
         delay_1 = recode_factor(delay_1,
                                 `0` = "No Delay", `2.4` = "Long Delay")) %>% 
  group_by(group, participant, central_item, delay_1) %>% 
  summarize(mean_acc = mean(err_angle)) 

dat %>% 
  group_by(group, central_item, delay_1) %>% 
  summarize(mean(mean_acc), sd(mean_acc)) 

dat_1 <- dat %>% 
  filter(delay_1 == "No Delay")

summary(aov(mean_acc ~ group*central_item, data = dat_1))
anova_bf = anovaBF(mean_acc ~ group*central_item, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[1]

dat_1 <- dat %>% 
  filter(delay_1 == "Long Delay")

summary(aov(mean_acc ~ group*central_item, data = dat_1))
anova_bf = anovaBF(mean_acc ~ group*central_item, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

p1 <- dat %>% 
  filter(delay_1 == "No Delay") %>% 
  ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Condition", y = "Recall Error (°)") +
  scale_color_manual(values = pal, guide = "none") +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
  scale_y_continuous(limits = c(0, 115)) +
  ggtitle("Immediate Test - No Delay") +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 
  
p2 <- dat %>% 
    filter(delay_1 == "Long Delay") %>% 
    ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
    geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
    stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
    stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
    labs(x = "Stress Condition", y = "Recall Error (°)") +
    #scale_x_discrete(labels = c("No Delay (0 ms)", "Long Delay (2400 ms)")) +
    scale_color_manual(values = pal, guide = "none") +
    scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
    scale_y_continuous(limits = c(0, 115)) +
    ggtitle("Immediate Test - Long Delay") +
    theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 
p1 + p2 +
  plot_annotation(tag_levels = "a") +
  plot_layout(guides = "collect")
  
ggsave(here::here("figures", "fig2_2.png"), height = 7, width = 11, units = "in")

# Delayed Test
dat <- alldata_delay %>% 
  filter(presented_block_type == "working_memory") %>% 
  filter(resp_angle_ltm > 0) %>% # Trials in which the participant did not submit an answer
  filter(!is.na(err_angle_ltm)) %>% # Missing data for 10 pts
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         central_item = as.factor(central_item), 
         delay_1 = recode_factor(delay_1,
                                 `0` = "No Delay", `2.4` = "Long Delay")) %>% 
  group_by(group, participant, central_item, delay_1) %>% 
  summarize(mean_acc = mean(err_angle_ltm)) 

dat %>% 
  group_by(group, central_item, delay_1) %>% 
  summarize(mean(mean_acc), sd(mean_acc)) 

dat_1 <- dat %>% 
  filter(delay_1 == "No Delay")

summary(aov(mean_acc ~ group*central_item, data = dat_1))
anova_bf = anovaBF(mean_acc ~ group*central_item, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

dat_1 <- dat %>% 
  filter(delay_1 == "Long Delay")

summary(aov(mean_acc ~ group*central_item, data = dat_1))
anova_bf = anovaBF(mean_acc ~ group*central_item, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

p1 <- dat %>% 
  filter(delay_1 == "No Delay") %>% 
  ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Condition", y = "Recall Error (°)") +
  #scale_x_discrete(labels = c("No Delay (0 ms)", "Long Delay (2400 ms)")) +
  scale_color_manual(values = pal, guide = "none") +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
  scale_y_continuous(limits = c(0, 115)) +
  ggtitle("Delayed Test - No Delay") +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

p2 <- dat %>% 
  filter(delay_1 == "Long Delay") %>% 
  ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Condition", y = "Recall Error (°)") +
  #scale_x_discrete(labels = c("No Delay (0 ms)", "Long Delay (2400 ms)")) +
  scale_color_manual(values = pal, guide = "none") +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
  scale_y_continuous(limits = c(0, 115)) +
  ggtitle("Delayed Test - Long Delay") +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 
p1 + p2 +
  plot_annotation(tag_levels = "a") +
  plot_layout(guides = "collect")

ggsave(here::here("figures", "fig2_3.png"), height = 7, width = 11, units = "in")


# Secondary Task ----

# Reaction Time
dat <- alldata_parity %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         delay_1 = as.factor(delay_1),
         parity_i = as.factor(parity_i),
         parity_i = recode_factor(parity_i, 
                                  `1` = "Secondary Task Item 1", `2` = "Secondary Task Item 2", `3` = "Secondary Task Item 3"),
         block_type = as.factor(block_type)) %>%
  group_by(delay_1, block_type, participant, parity_i) %>% 
  summarize(mean_rt = mean(parity_resp_rt, na.rm = T)*1000)

bad_pts <- dat %>% filter(is.na(mean_rt)) %>% pull(participant)
dat <- dat %>% filter(!participant %in% bad_pts)

ggplot(dat, aes(x = delay_1, y = mean_rt, color = block_type, shape = block_type, group = block_type)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "line", fun = "mean", position = position_dodge(width = .3), size = 1) +
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "", y = "Reaction Time (ms)") +
  scale_x_discrete(labels = c("No Delay", "Long Delay")) +
  scale_y_continuous(limits = c(400, 1200)) +
  scale_color_manual(values = pal[3:4], name = "Trial Type", labels = c("Perception", "Working Memory")) +
  scale_shape(name = "Trial Type", labels = c("Perception", "Working Memory")) +
  #ggtitle("Immediate Test") +
  facet_grid(~parity_i) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig2_5.png"), height = 7, width = 11, units = "in")

perception_1_no <- dat %>% filter(block_type == "perception" & delay_1 == 0 & parity_i == "Secondary Task Item 1") %>% pull(mean_rt)
wm_1_no <- dat %>% filter(block_type == "working_memory" & delay_1 == 0 & parity_i == "Secondary Task Item 1") %>% pull(mean_rt)

perception_1_long <- dat %>% filter(block_type == "perception" & delay_1 == 2.4 & parity_i == "Secondary Task Item 1") %>% pull(mean_rt)
wm_1_long <- dat %>% filter(block_type == "working_memory" & delay_1 == 2.4 & parity_i == "Secondary Task Item 1") %>% pull(mean_rt)

t.test(x = perception_1_no, y = wm_1_no, paired = T)
ttestBF(x = perception_1_no, y = wm_1_no, paired = T)

t.test(x = perception_1_long, y = wm_1_long, paired = T)
ttestBF(x = perception_1_long, y = wm_1_long, paired = T)

perception_2_no <- dat %>% filter(block_type == "perception" & delay_1 == 0 & parity_i == "Secondary Task Item 2") %>% pull(mean_rt)
wm_2_no <- dat %>% filter(block_type == "working_memory" & delay_1 == 0 & parity_i == "Secondary Task Item 2") %>% pull(mean_rt)

perception_2_long <- dat %>% filter(block_type == "perception" & delay_1 == 2.4 & parity_i == "Secondary Task Item 2") %>% pull(mean_rt)
wm_2_long <- dat %>% filter(block_type == "working_memory" & delay_1 == 2.4 & parity_i == "Secondary Task Item 2") %>% pull(mean_rt)

t.test(x = perception_2_no, y = wm_2_no, paired = T)
ttestBF(x = perception_2_no, y = wm_2_no, paired = T)

t.test(x = perception_2_long, y = wm_2_long, paired = T)
ttestBF(x = perception_2_long, y = wm_2_long, paired = T)

perception_3_no <- dat %>% filter(block_type == "perception" & delay_1 == 0 & parity_i == "Secondary Task Item 3") %>% pull(mean_rt)
wm_3_no <- dat %>% filter(block_type == "working_memory" & delay_1 == 0 & parity_i == "Secondary Task Item 3") %>% pull(mean_rt)

perception_3_long <- dat %>% filter(block_type == "perception" & delay_1 == 2.4 & parity_i == "Secondary Task Item 3") %>% pull(mean_rt)
wm_3_long <- dat %>% filter(block_type == "working_memory" & delay_1 == 2.4 & parity_i == "Secondary Task Item 3") %>% pull(mean_rt)

t.test(x = perception_3_no, y = wm_3_no, paired = T)
ttestBF(x = perception_3_no, y = wm_3_no, paired = T)

t.test(x = perception_3_long, y = wm_3_long, paired = T)
ttestBF(x = perception_3_long, y = wm_3_long, paired = T)


# Accuracy

dat <- alldata_parity %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         delay_1 = as.factor(delay_1),
         parity_i = as.factor(parity_i),
         parity_i = recode_factor(parity_i, 
                                  `1` = "Secondary Item 1", `2` = "Secondary Item 2", `3` = "Secondary Item 3"),
         block_type = as.factor(block_type)) %>%
  group_by(delay_1, block_type, participant, parity_i) %>% 
  summarize(mean_acc = mean(parity_resp_corr))

ggplot(dat, aes(x = delay_1, y = mean_acc, color = block_type, shape = block_type, group = block_type)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "line", fun = "mean", position = position_dodge(width = .3), size = 1) +
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "", y = "Reaction Time (ms)") +
  scale_x_discrete(labels = c("No Delay", "Long Delay")) +
  #scale_y_continuous(limits = c(400, 1200)) +
  scale_color_manual(values = pal[3:4], name = "Trial Type", labels = c("Perception", "Working Memory")) +
  scale_shape(name = "Trial Type", labels = c("Perception", "Working Memory")) +
  #ggtitle("Immediate Test") +
  facet_grid(~parity_i) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

#ggsave(here::here("figures", "fig2_7.png"), height = 7, width = 11, units = "in")

perception_1_no <- dat %>% filter(block_type == "perception" & delay_1 == 0 & parity_i == "Secondary Item 1") %>% pull(mean_acc)
wm_1_no <- dat %>% filter(block_type == "working_memory" & delay_1 == 0 & parity_i == "Secondary Item 1") %>% pull(mean_acc)

perception_1_long <- dat %>% filter(block_type == "perception" & delay_1 == 2.4 & parity_i == "Secondary Item 1") %>% pull(mean_acc)
wm_1_long <- dat %>% filter(block_type == "working_memory" & delay_1 == 2.4 & parity_i == "Secondary Item 1") %>% pull(mean_acc)

t.test(x = perception_1_no, y = wm_1_no, paired = T)
ttestBF(x = perception_1_no, y = wm_1_no, paired = T)

t.test(x = perception_1_long, y = wm_1_long, paired = T)
ttestBF(x = perception_1_long, y = wm_1_long, paired = T)

perception_2_no <- dat %>% filter(block_type == "perception" & delay_1 == 0 & parity_i == "Secondary Item 2") %>% pull(mean_acc)
wm_2_no <- dat %>% filter(block_type == "working_memory" & delay_1 == 0 & parity_i == "Secondary Item 2") %>% pull(mean_acc)

perception_2_long <- dat %>% filter(block_type == "perception" & delay_1 == 2.4 & parity_i == "Secondary Item 2") %>% pull(mean_acc)
wm_2_long <- dat %>% filter(block_type == "working_memory" & delay_1 == 2.4 & parity_i == "Secondary Item 2") %>% pull(mean_acc)

t.test(x = perception_2_no, y = wm_2_no, paired = T)
ttestBF(x = perception_2_no, y = wm_2_no, paired = T)

t.test(x = perception_2_long, y = wm_2_long, paired = T)
ttestBF(x = perception_2_long, y = wm_2_long, paired = T)

perception_3_no <- dat %>% filter(block_type == "perception" & delay_1 == 0 & parity_i == "Secondary Item 3") %>% pull(mean_acc)
wm_3_no <- dat %>% filter(block_type == "working_memory" & delay_1 == 0 & parity_i == "Secondary Item 3") %>% pull(mean_acc)

perception_3_long <- dat %>% filter(block_type == "perception" & delay_1 == 2.4 & parity_i == "Secondary Item 3") %>% pull(mean_acc)
wm_3_long <- dat %>% filter(block_type == "working_memory" & delay_1 == 2.4 & parity_i == "Secondary Item 3") %>% pull(mean_acc)

t.test(x = perception_3_no, y = wm_3_no, paired = T)
ttestBF(x = perception_3_no, y = wm_3_no, paired = T)

t.test(x = perception_3_long, y = wm_3_long, paired = T)
ttestBF(x = perception_3_long, y = wm_3_long, paired = T)

# Comparing Stress Groups ----

# Reaction Time
dat <- alldata_parity %>% 
  filter(!participant %in% bad_pts) %>% 
  filter(parity_i == 1) %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         delay_1 = as.factor(delay_1),
         delay_1 = recode_factor(delay_1,
                                 "0" = "No Delay", "2.4" = "Long Delay"),
         parity_i = as.factor(parity_i),
         parity_i = recode_factor(parity_i, 
                                  `1` = "Secondary Item 1", `2` = "Secondary Item 2", `3` = "Secondary Item 3"),
         block_type = as.factor(block_type)) %>%
  group_by(delay_1, block_type, participant, group) %>% 
  summarize(mean_rt = mean(parity_resp_rt, na.rm = T)*1000)

ggplot(dat, aes(x = block_type, y = mean_rt, color = group, shape = group, group = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  #stat_summary(geom = "line", fun = "mean", position = position_dodge(width = .3), size = 1) +
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Trial Type", y = "Reaction Time (ms)") +
  scale_x_discrete(labels = c("Perception", "Working Memory")) +
  scale_y_continuous(limits = c(400, 1200)) +
  scale_color_manual(values = pal, name = "Stress Condition") +
  scale_shape( name = "Stress Condition") +
  ggtitle("Secondary Task Item 1") +
  facet_grid(~delay_1) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig2_6.png"), height = 7, width = 11, units = "in")

dat_1 <- dat %>% 
  filter(delay_1 == "No Delay")

summary(aov(mean_rt ~ group*block_type, data = dat_1))
anova_bf = anovaBF(mean_rt ~ group*block_type, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[2]

dat_1 <- dat %>% 
  filter(delay_1 == "Long Delay")

summary(aov(mean_rt ~ group*block_type, data = dat_1))
anova_bf = anovaBF(mean_rt ~ group*block_type, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

# By Stress Response rather than group----

stai_dat <- alldata_stai %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After")) %>% 
  pivot_wider(.,
              id_cols = c(participant, group),
              names_from = stai_measure,
              names_prefix = "stai_measure_",
              values_from = stai_score
  ) %>% 
  filter(group == "Before") %>% 
  rowwise() %>% 
  mutate(stai_difference = stai_measure_2 - stai_measure_1)

stai_dat %>% 
  ungroup() %>% 
  summarize(median(stai_difference)) # 3.5

dat <- alldata_wm %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After")) %>% 
  filter(group == "Before") %>% 
  left_join(., stai_dat) %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  filter(!is.na(err_angle)) %>% # Missing data for 10 pts
  mutate(group = as.factor(ifelse(stai_difference <= 3.5, "Low", "High")),
           block_type = as.factor(block_type)) %>% 
  group_by(group, block_type, participant) %>% 
  summarize(mean_acc = mean(err_angle))

p1 <- ggplot(dat, aes(x = block_type, y = mean_acc, color = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Trial Type", y = "Recall Error (°)") +
  scale_x_discrete(labels = c("Perception", "Working Memory")) +
  scale_y_continuous(limits = c(0, 115)) +
  scale_color_manual(values = pal, name = "Stress Response") +
  ggtitle("Immediate Test") +
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

dat %>% 
  group_by(group, block_type) %>% 
  summarize(mean(mean_acc), sd(mean_acc))

summary(aov(mean_acc ~ group*block_type, data = dat))
anova_bf = anovaBF(mean_acc ~ group*block_type, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[2]


dat <- alldata_delay %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After")) %>% 
  filter(group == "Before") %>% 
  filter(resp_angle_ltm > 0) %>% # Trials in which the participant did not submit an answer
  filter(!is.na(err_angle_ltm)) %>% # Missing data for 10 pts
  left_join(., stai_dat) %>% 
  mutate(group = as.factor(ifelse(stai_difference <= 3.5, "Low", "High")),
         presented_block_type = as.factor(presented_block_type)) %>% 
  group_by(group, presented_block_type, participant) %>% 
  summarize(mean_acc = mean(err_angle_ltm)) 

p2 <- ggplot(dat, aes(x = presented_block_type, y = mean_acc, color = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Trial Type", y = "Recall Error (°)") +
  scale_x_discrete(labels = c("Perception", "Working Memory")) +
  scale_y_continuous(limits = c(0, 115)) +
  scale_color_manual(values = pal, name = "Stress Response") +
  ggtitle("Delayed Test") +
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


p1 + p2 +
  plot_annotation(tag_levels = "a") +
  plot_layout(guides = "collect")

ggsave(here::here("figures", "fig2_8.png"), height = 7, width = 11, units = "in")

dat %>% 
  group_by(group, presented_block_type) %>% 
  summarize(mean(mean_acc), sd(mean_acc))

summary(aov(mean_acc ~ group*presented_block_type, data = dat))
anova_bf = anovaBF(mean_acc ~ group*presented_block_type, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[2]

# WM Only Trials ----
# Immediate Test
dat <- alldata_wm %>% 
  filter(block_type == "working_memory") %>% 
  filter(resp_angle > 0) %>% # Trials in which the participant did not submit an answer
  filter(!is.na(err_angle)) %>% # Missing data for 10 pts
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         central_item = as.factor(central_item), 
         delay_1 = recode_factor(delay_1,
                                 `0` = "No Delay", `2.4` = "Long Delay")) %>% 
  filter(group == "Before") %>% 
  left_join(., stai_dat) %>% 
  mutate(group = as.factor(ifelse(stai_difference <= 3.5, "Low", "High")))%>% 
  group_by(group, participant, central_item, delay_1) %>% 
  summarize(mean_acc = mean(err_angle)) 

dat %>% 
  group_by(group, central_item, delay_1) %>% 
  summarize(mean(mean_acc), sd(mean_acc)) 

dat_1 <- dat %>% 
  filter(delay_1 == "No Delay")

summary(aov(mean_acc ~ group*central_item, data = dat_1))
anova_bf = anovaBF(mean_acc ~ group*central_item, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)


dat_1 <- dat %>% 
  filter(delay_1 == "Long Delay")

summary(aov(mean_acc ~ group*central_item, data = dat_1))
anova_bf = anovaBF(mean_acc ~ group*central_item, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

p1 <- dat %>% 
  filter(delay_1 == "No Delay") %>% 
  ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Response", y = "Recall Error (°)") +
  scale_color_manual(values = pal, guide = "none") +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
  scale_y_continuous(limits = c(0, 115)) +
  ggtitle("Immediate Test - No Delay") +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

p2 <- dat %>% 
  filter(delay_1 == "Long Delay") %>% 
  ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Response", y = "Recall Error (°)") +
  #scale_x_discrete(labels = c("No Delay (0 ms)", "Long Delay (2400 ms)")) +
  scale_color_manual(values = pal, guide = "none") +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
  scale_y_continuous(limits = c(0, 115)) +
  ggtitle("Immediate Test - Long Delay") +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 
p1 + p2 +
  plot_annotation(tag_levels = "a") +
  plot_layout(guides = "collect")

ggsave(here::here("figures", "fig2_11.png"), height = 7, width = 11, units = "in")

# Delayed Test
dat <- alldata_delay %>% 
  filter(presented_block_type == "working_memory") %>% 
  filter(resp_angle_ltm > 0) %>% # Trials in which the participant did not submit an answer
  filter(!is.na(err_angle_ltm)) %>% # Missing data for 10 pts
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         central_item = as.factor(central_item), 
         delay_1 = recode_factor(delay_1,
                                 `0` = "No Delay", `2.4` = "Long Delay")) %>% 
  filter(group == "Before") %>% 
  left_join(., stai_dat) %>% 
  mutate(group = as.factor(ifelse(stai_difference <= 3.5, "Low", "High"))) %>% 
  group_by(group, participant, central_item, delay_1) %>% 
  summarize(mean_acc = mean(err_angle_ltm)) 

dat %>% 
  group_by(group, central_item, delay_1) %>% 
  summarize(mean(mean_acc), sd(mean_acc)) 

dat_1 <- dat %>% 
  filter(delay_1 == "No Delay")

summary(aov(mean_acc ~ group*central_item, data = dat_1))
anova_bf = anovaBF(mean_acc ~ group*central_item, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)


dat_1 <- dat %>% 
  filter(delay_1 == "Long Delay")

summary(aov(mean_acc ~ group*central_item, data = dat_1))
anova_bf = anovaBF(mean_acc ~ group*central_item, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

p1 <- dat %>% 
  filter(delay_1 == "No Delay") %>% 
  ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Response", y = "Recall Error (°)") +
  #scale_x_discrete(labels = c("No Delay (0 ms)", "Long Delay (2400 ms)")) +
  scale_color_manual(values = pal, guide = "none") +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
  scale_y_continuous(limits = c(0, 115)) +
  ggtitle("Delayed Test - No Delay") +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

p2 <- dat %>% 
  filter(delay_1 == "Long Delay") %>% 
  ggplot(aes(x = group, y = mean_acc, color = group, shape = central_item)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Stress Response", y = "Recall Error (°)") +
  #scale_x_discrete(labels = c("No Delay (0 ms)", "Long Delay (2400 ms)")) +
  scale_color_manual(values = pal, guide = "none") +
  scale_shape_discrete(name = "Item Type", labels = c("Peripheral", "Central")) +
  scale_y_continuous(limits = c(0, 115)) +
  ggtitle("Delayed Test - Long Delay") +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 
p1 + p2 +
  plot_annotation(tag_levels = "a") +
  plot_layout(guides = "collect")

ggsave(here::here("figures", "fig2_12.png"), height = 7, width = 11, units = "in")


# Secondary Task ----

# Reaction Time
dat <- alldata_parity %>% 
  filter(!participant %in% bad_pts) %>% 
  filter(parity_i == 1) %>% 
  mutate(group = recode_factor(group, 
                               "A" = "Before", "B" = "Before", "C" = "After", "D" = "After"),
         delay_1 = as.factor(delay_1),
         delay_1 = recode_factor(delay_1,
                                 "0" = "No Delay", "2.4" = "Long Delay"),
         parity_i = as.factor(parity_i),
         parity_i = recode_factor(parity_i, 
                                  `1` = "Secondary Item 1", `2` = "Secondary Item 2", `3` = "Secondary Item 3"),
         block_type = as.factor(block_type)) %>%
  filter(group == "Before") %>% 
  left_join(., stai_dat) %>% 
  mutate(group = as.factor(ifelse(stai_difference <= 3.5, "Low", "High"))) %>% 
  group_by(delay_1, block_type, participant, group) %>% 
  summarize(mean_rt = mean(parity_resp_rt, na.rm = T)*1000)

ggplot(dat, aes(x = block_type, y = mean_rt, color = group, shape = group, group = group)) + 
  geom_point(size = 1, alpha = .5, position = position_dodge(width = .3)) + 
  #stat_summary(geom = "line", fun = "mean", position = position_dodge(width = .3), size = 1) +
  stat_summary(geom = "point", fun = "mean", size = 3, position = position_dodge(width = .3)) +
  stat_summary(geom = "errorbar", width = .2, position = position_dodge(width = .3), size = 1) +
  labs(x = "Trial Type", y = "Reaction Time (ms)") +
  scale_x_discrete(labels = c("Perception", "Working Memory")) +
  scale_y_continuous(limits = c(400, 1200)) +
  scale_color_manual(values = pal, name = "Stress Response") +
  scale_shape( name = "Stress Response") +
  ggtitle("Secondary Task Item 1") +
  facet_grid(~delay_1) +
  theme(
    #legend.title = element_blank(),
    #axis.title = element_text(size = 40),
    #axis.text.y = element_text(size = 35),
    #axis.text.x = element_text(face = "bold", size = 35, vjust = 2),
    axis.ticks.x = element_blank(),
    panel.grid.major.x = element_blank(),
    #legend.text = element_text(size = 35),
  ) 

ggsave(here::here("figures", "fig2_13.png"), height = 7, width = 11, units = "in")

dat_1 <- dat %>% 
  filter(delay_1 == "No Delay")

summary(aov(mean_rt ~ group*block_type, data = dat_1))
anova_bf = anovaBF(mean_rt ~ group*block_type, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[2]

dat_1 <- dat %>% 
  filter(delay_1 == "Long Delay")

summary(aov(mean_rt ~ group*block_type, data = dat_1))
anova_bf = anovaBF(mean_rt ~ group*block_type, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[1]
