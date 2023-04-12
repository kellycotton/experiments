# Analysis script for MDMW3.1
# 12/1/22

#Setup-----

# Load packages
library(tidyverse)
library(patchwork)
library(BayesFactor)

theme_set(theme_bw())

pal <- c("#00BFB2", "#E9CE2C", "#C64191")

# Read data
alldata_immediate <- read_csv(here::here("MDMW3", "data", "output_data", "alldata_immediate_clean.csv"))
alldata_delay <- read_csv(here::here("MDMW3", "data", "output_data", "alldata_delay.csv"))
alldata_go <- read_csv(here::here("MDMW3", "data", "output_data", "alldata_go.csv"))
alldata_parity <- read_csv(here::here("MDMW3", "data", "output_data", "alldata_parity.csv"))
alldata_maas <- read_csv(here::here("MDMW3", "data", "output_data", "alldata_maas.csv"))

# Recode immediate data accuracy with manually cleaned data
alldata_immediate <- alldata_immediate %>% 
  mutate(immediate_accuracy = ifelse(immediate_test_resp_text == word_presented, 1, 0),
         immediate_accuracy = ifelse(is.na(immediate_test_resp_text), 0, immediate_accuracy)) %>% 
  mutate(block_type = factor(block_type, levels = c("simple", "complex", "slow")))

alldata_delay <- alldata_delay %>% 
  mutate(presented_block_type = factor(presented_block_type, levels = c("simple", "complex", "slow")))

# Immediate Serial Recall Task ----
alldata_immediate %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy), sd_acc_pt = sd(immediate_accuracy)) %>% 
  ungroup() %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

alldata_immediate %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy), sd_acc_pt = sd(immediate_accuracy)) %>% 
  group_by(block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

dat <- alldata_immediate %>% 
  mutate(block_type = as.factor(block_type)) %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc = mean(immediate_accuracy)) 

summary(aov(mean_acc ~block_type + Error(participant), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

simple <- dat %>% filter(block_type == "simple") %>% pull(mean_acc)
complex <- dat %>% filter(block_type == "complex") %>% pull(mean_acc)
slow <- dat %>% filter(block_type == "slow") %>% pull(mean_acc)

t.test(x = simple, y = complex)
ttestBF(x = simple, y = complex)
t.test(x = complex, y = slow)
ttestBF(x = complex, y = slow)
t.test(x = simple, y = slow)
ttestBF(x = simple, y = slow)


# Free Recall Scoring ----
free_acc <- alldata_immediate %>% 
  group_by(participant, trial_n, block_n) %>% 
  summarize(trial_words = paste0(word_presented, collapse = ", ")) %>% 
  right_join(., alldata_immediate, by = c("participant", "trial_n", "block_n")) %>% 
  rowwise() %>% 
  mutate(free_accuracy = ifelse(grepl(immediate_test_resp_text, trial_words), 1, 0),
         free_accuracy = ifelse(is.na(immediate_test_resp_text), 0, free_accuracy))

free_acc %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(free_accuracy), sd_acc_pt = sd(free_accuracy)) %>% 
  ungroup() %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

free_acc %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc_pt = mean(free_accuracy), sd_acc_pt = sd(free_accuracy)) %>% 
  group_by(block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

dat <- free_acc %>% 
  mutate(block_type = as.factor(block_type)) %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc = mean(free_accuracy)) 

summary(aov(mean_acc ~block_type + Error(participant), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

simple <- dat %>% filter(block_type == "simple") %>% pull(mean_acc)
complex <- dat %>% filter(block_type == "complex") %>% pull(mean_acc)
slow <- dat %>% filter(block_type == "slow") %>% pull(mean_acc)

t.test(x = simple, y = complex)
ttestBF(x = simple, y = complex)
t.test(x = complex, y = slow)
ttestBF(x = complex, y = slow)
t.test(x = simple, y = slow)
ttestBF(x = simple, y = slow)

# Delayed Task ----
alldata_delay %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr), sd_acc_pt = sd(key_resp_ltm_corr)) %>% 
  ungroup() %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

alldata_delay %>% 
  group_by(participant, presented_block_type) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr), sd_acc_pt = sd(key_resp_ltm_corr)) %>% 
  group_by(presented_block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

dat <- alldata_delay %>% 
  mutate(presented_block_type = as.factor(presented_block_type)) %>% 
  group_by(participant, presented_block_type) %>% 
  summarize(mean_acc = mean(key_resp_ltm_corr)) 

summary(aov(mean_acc ~presented_block_type + Error(participant), data = dat))
anova_bf_acc = anovaBF(mean_acc ~ presented_block_type, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# *Plot memory task performance ----
p1 <- alldata_immediate %>% 
  group_by(block_type, participant) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy)) %>% 
  ggplot(aes(x = block_type, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.3),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.3),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal) +
  scale_color_manual(values = pal) +
  scale_shape_manual(values = c(21, 24, 22)) +
  scale_x_discrete(labels = c("Simple", "Complex", "Slow")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Block Type", y = "Immediate Serial Recall Accuracy") 

p2 <- free_acc %>% 
  group_by(block_type, participant) %>% 
  summarize(mean_acc_pt = mean(free_accuracy)) %>% 
  ggplot(aes(x = block_type, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.3),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.3),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal) +
  scale_color_manual(values = pal) +
  scale_shape_manual(values = c(21, 24, 22)) +
  scale_x_discrete(labels = c("Simple", "Complex", "Slow")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Block Type", y = "Immediate Free Recall Accuracy")

p3 <- alldata_delay %>% 
  group_by(presented_block_type, participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr)) %>% 
  ggplot(aes(x = presented_block_type, y = mean_acc_pt, shape = presented_block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.3),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.3),
               aes(fill = presented_block_type), color = "black") +
  scale_fill_manual(values = pal) +
  scale_color_manual(values = pal) +
  scale_shape_manual(values = c(21, 24, 22)) +
  scale_x_discrete(labels = c("Simple", "Complex", "Slow")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Block Type", y = "Delayed Recognition Accuracy")

p1 + p2 +p3 +
  plot_annotation(tag_levels = "a") &
  theme(
    legend.position = "none",
    panel.grid.minor = element_blank(),
    panel.grid.major.x = element_blank()
  ) 

ggsave(here::here("MDMW3", "figures", "fig1.png"), width = 10, height = 7, units = "in", dpi = 300)

# Parity Task during Immediate Task ----

# Overall performance
alldata_parity %>% 
  filter(block_type == "complex") %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_parity_corr), sd_acc_pt = sd(key_resp_parity_corr)) %>% 
  ungroup() %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Omissions
alldata_parity %>% 
  filter(block_type == "complex") %>% 
  filter(is.na(key_resp_parity_keys)) %>% 
  count()

alldata_parity %>% 
  filter(block_type == "complex") %>% 
  filter(key_resp_parity_corr == 0) %>% 
  count()

# Poor performance
poor_pts <- alldata_parity %>% 
  filter(block_type == "complex") %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_parity_corr), sd_acc_pt = sd(key_resp_parity_corr)) %>% 
  filter(mean_acc_pt <= .8) %>% 
  pull(participant)

length(poor_pts)

# Non-responders
zero_pts <- alldata_parity %>% 
  filter(block_type == "complex") %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_parity_corr), sd_acc_pt = sd(key_resp_parity_corr)) %>% 
  filter(mean_acc_pt == 0) %>% 
  pull(participant)

length(zero_pts)

# Immediate recall performance ----

# High participants
alldata_immediate %>% 
  filter(!participant %in% poor_pts) %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy), sd_acc_pt = sd(immediate_accuracy)) %>% 
  group_by(block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

free_acc %>% 
  filter(!participant %in% poor_pts) %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc_pt = mean(free_accuracy), sd_acc_pt = sd(free_accuracy)) %>% 
  group_by(block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Low Participants
alldata_immediate %>% 
  filter(participant %in% poor_pts) %>% 
  filter(!participant %in% zero_pts) %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy), sd_acc_pt = sd(immediate_accuracy)) %>% 
  group_by(block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

free_acc %>% 
  filter(participant %in% poor_pts) %>% 
  filter(!participant %in% zero_pts) %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc_pt = mean(free_accuracy), sd_acc_pt = sd(free_accuracy)) %>% 
  group_by(block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Zero Participants
alldata_immediate %>% 
  filter(participant %in% zero_pts) %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy), sd_acc_pt = sd(immediate_accuracy)) %>% 
  group_by(block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

free_acc %>% 
  filter(participant %in% zero_pts) %>% 
  group_by(participant, block_type) %>% 
  summarize(mean_acc_pt = mean(free_accuracy), sd_acc_pt = sd(free_accuracy)) %>% 
  group_by(block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

dat <- alldata_immediate %>% 
  mutate(perform_group = as.factor(ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high")))) %>% 
  group_by(participant, block_type, perform_group) %>% 
  summarize(mean_acc = mean(immediate_accuracy)) 

high_simple <- dat %>% filter(perform_group == "high" & block_type == "simple") %>% pull(mean_acc)
high_complex <- dat %>% filter(perform_group == "high" & block_type == "complex") %>% pull(mean_acc)

low_simple  <- dat %>% filter(perform_group == "low" & block_type == "simple") %>% pull(mean_acc)
low_complex <- dat %>% filter(perform_group == "low" & block_type == "complex") %>% pull(mean_acc)

zero_simple  <- dat %>% filter(perform_group == "zero" & block_type == "simple") %>% pull(mean_acc)
zero_complex <- dat %>% filter(perform_group == "zero" & block_type == "complex") %>% pull(mean_acc)

t.test(x = high_simple, y = high_complex, paired = TRUE)
ttestBF(x = high_simple, y = high_complex, paired = TRUE)

t.test(x = low_simple, y = low_complex, paired = TRUE)
ttestBF(x = low_simple, y = low_complex, paired = TRUE)

t.test(x = zero_simple, y = zero_complex, paired = TRUE)
ttestBF(x = zero_simple, y = zero_complex, paired = TRUE)

dat <- free_acc %>% 
  mutate(perform_group = as.factor(ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high")))) %>% 
  group_by(participant, block_type, perform_group) %>% 
  summarize(mean_acc = mean(free_accuracy)) 

high_simple <- dat %>% filter(perform_group == "high" & block_type == "simple") %>% pull(mean_acc)
high_complex <- dat %>% filter(perform_group == "high" & block_type == "complex") %>% pull(mean_acc)

low_simple  <- dat %>% filter(perform_group == "low" & block_type == "simple") %>% pull(mean_acc)
low_complex <- dat %>% filter(perform_group == "low" & block_type == "complex") %>% pull(mean_acc)

zero_simple  <- dat %>% filter(perform_group == "zero" & block_type == "simple") %>% pull(mean_acc)
zero_complex <- dat %>% filter(perform_group == "zero" & block_type == "complex") %>% pull(mean_acc)

t.test(x = high_simple, y = high_complex, paired = TRUE)
ttestBF(x = high_simple, y = high_complex, paired = TRUE)

t.test(x = low_simple, y = low_complex, paired = TRUE)
ttestBF(x = low_simple, y = low_complex, paired = TRUE)

t.test(x = zero_simple, y = zero_complex, paired = TRUE)
ttestBF(x = zero_simple, y = zero_complex, paired = TRUE)

# Delayed recognition performance ----

# High participants
alldata_delay %>% 
  filter(!participant %in% poor_pts) %>% 
  group_by(participant, presented_block_type) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr), sd_acc_pt = sd(key_resp_ltm_corr)) %>% 
  group_by(presented_block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Low Participants
alldata_delay %>% 
  filter(participant %in% poor_pts) %>% 
  filter(!participant %in% zero_pts) %>% 
  group_by(participant, presented_block_type) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr), sd_acc_pt = sd(key_resp_ltm_corr)) %>% 
  group_by(presented_block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Zero Participants
alldata_delay %>% 
  filter(participant %in% zero_pts) %>% 
  group_by(participant, presented_block_type) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr), sd_acc_pt = sd(key_resp_ltm_corr)) %>% 
  group_by(presented_block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

dat <- alldata_delay %>% 
  mutate(perform_group = as.factor(ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high")))) %>% 
  group_by(participant, presented_block_type, perform_group) %>% 
  summarize(mean_acc = mean(key_resp_ltm_corr)) 

high_simple <- dat %>% filter(perform_group == "high" & presented_block_type == "simple") %>% pull(mean_acc)
high_complex <- dat %>% filter(perform_group == "high" & presented_block_type == "complex") %>% pull(mean_acc)

low_simple  <- dat %>% filter(perform_group == "low" & presented_block_type == "simple") %>% pull(mean_acc)
low_complex <- dat %>% filter(perform_group == "low" & presented_block_type == "complex") %>% pull(mean_acc)

zero_simple  <- dat %>% filter(perform_group == "zero" & presented_block_type == "simple") %>% pull(mean_acc)
zero_complex <- dat %>% filter(perform_group == "zero" & presented_block_type == "complex") %>% pull(mean_acc)

t.test(x = high_simple, y = high_complex, paired = TRUE)
ttestBF(x = high_simple, y = high_complex, paired = TRUE)

t.test(x = low_simple, y = low_complex, paired = TRUE)
ttestBF(x = low_simple, y = low_complex, paired = TRUE)

t.test(x = zero_simple, y = zero_complex, paired = TRUE)
ttestBF(x = zero_simple, y = zero_complex, paired = TRUE)

# *Plot memory task performance x groups ----
p4 <- alldata_immediate %>% 
  mutate(perform_group = as.factor(ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high")))) %>% 
  group_by(block_type, participant, perform_group) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy)) %>% 
  ggplot(aes(x = perform_group, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal, name = "Block Type",
                    labels = c("Simple", "Complex", "Slow")) +
  scale_color_manual(values = pal, name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_x_discrete(labels = c("High", "Low", "Zero")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Secondary Task Performance", y = "Immediate Serial Recall Accuracy") +
  theme(
    legend.position = "none"
  ) 

p5 <- free_acc %>% 
  mutate(perform_group = as.factor(ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high")))) %>% 
  group_by(block_type, participant, perform_group) %>% 
  mutate(perform_group = factor(perform_group, levels = c("high", "low", "zero"))) %>% 
  summarize(mean_acc_pt = mean(free_accuracy)) %>% 
  ggplot(aes(x = perform_group, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal, name = "Block Type",
                    labels = c("Simple", "Complex", "Slow")) +
  scale_color_manual(values = pal, name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_x_discrete(labels = c("High", "Low", "Zero")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Secondary Task Performance", y = "Immediate Free Recall Accuracy") +
  theme(
    legend.position = "none"
  ) 

p6 <- alldata_delay %>% 
  mutate(perform_group = as.factor(ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high")))) %>% 
  group_by(presented_block_type, participant, perform_group) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr)) %>% 
  ggplot(aes(x = perform_group, y = mean_acc_pt, shape = presented_block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = presented_block_type), color = "black") +
  scale_fill_manual(values = pal, name = "Block Type",
                    labels = c("Simple", "Complex", "Slow")) +
  scale_color_manual(values = pal, name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_x_discrete(labels = c("High", "Low", "Zero")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Secondary Task Performance", y = "Delayed Recognition Accuracy") +
  theme(
    panel.grid.minor = element_blank(),
    panel.grid.major.x = element_blank()
  )

p4 + p5 + p6 &
  plot_layout(guides = "collect") &
  plot_annotation(tag_levels = "a") &
  theme(
    panel.grid.minor = element_blank(),
    panel.grid.major.x = element_blank()
  )
  
ggsave(here::here("MDMW3", "figures", "fig3.png"), width = 10, height = 7, units = "in", dpi = 300)

# Proportion Mind-Wandering ----
alldata_immediate %>% 
  group_by(block_type, key_resp_mw_probe_keys) %>% 
  mutate(key_resp_mw_probe_keys = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code, for now just make it equivalent to option 5
  summarize(count = n()) %>% 
  mutate(prop_mw = round(count/sum(count), 3)*100)

# Simple and slow span "word task" vs. anything else
dat <- alldata_immediate %>% 
  group_by(participant, trial_n, block_type) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys), block_type = first(block_type)) %>% 
  mutate(mw_resp = as.factor(mw_resp)) %>% 
  group_by(participant, block_type, mw_resp, .drop=FALSE) %>% 
  summarize(N = n()) %>%  
  group_by(participant, block_type) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%  # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = factor(perform_group, levels = c("high", "low", "zero"))) %>% 
  filter(block_type %in% c("simple", "slow")) %>% 
  filter(mw_resp == 1)

summary(aov(prop_mw ~ block_type*perform_group + Error(participant), data = dat))
anova_bf_acc = anovaBF(prop_mw ~ block_type*perform_group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)
sort(anova_bf_acc)[4]/sort(anova_bf_acc)[3]
sort(anova_bf_acc)[4]/sort(anova_bf_acc)[1]

dat %>% 
  group_by(perform_group, block_type) %>% 
  summarize(mean = mean(prop_mw), sd = sd(prop_mw))

# Complex span "both tasks" 
dat <- alldata_immediate %>% 
  filter(block_type == "complex") %>% 
  group_by(participant, trial_n) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys), block_type = first(block_type)) %>% 
  mutate(mw_resp = as.factor(mw_resp)) %>% 
  group_by(participant, mw_resp, .drop=FALSE) %>% 
  summarize(N = n()) %>%  
  group_by(participant) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%   # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  filter(mw_resp == "3") %>% 
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = as.factor(perform_group))

summary(aov(prop_mw ~ perform_group + Error(participant), data = dat))
anovaBF(prop_mw ~ perform_group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)

dat %>% 
  group_by(perform_group) %>% 
  summarize(mean = mean(prop_mw), sd = sd(prop_mw))

# Complex span "number task" 
dat <- alldata_immediate %>% 
  filter(block_type == "complex") %>% 
  group_by(participant, trial_n) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys), block_type = first(block_type)) %>% 
  mutate(mw_resp = as.factor(mw_resp)) %>% 
  group_by(participant, mw_resp, .drop=FALSE) %>% 
  summarize(N = n()) %>%  
  group_by(participant) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%   # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  filter(mw_resp == "1") %>% 
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = as.factor(perform_group))

summary(aov(prop_mw ~ perform_group + Error(participant), data = dat))
anovaBF(prop_mw ~ perform_group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)

dat %>% 
  group_by(perform_group) %>% 
  summarize(mean = mean(prop_mw), sd = sd(prop_mw))

# Complex span "number task" 
dat <- alldata_immediate %>% 
  filter(block_type == "complex") %>% 
  group_by(participant, trial_n) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys), block_type = first(block_type)) %>% 
  mutate(mw_resp = as.factor(mw_resp)) %>% 
  group_by(participant, mw_resp, .drop=FALSE) %>% 
  summarize(N = n()) %>%  
  group_by(participant) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%   # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  filter(mw_resp == "2") %>% 
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = as.factor(perform_group))

summary(aov(prop_mw ~ perform_group + Error(participant), data = dat))
anovaBF(prop_mw ~ perform_group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)

dat %>% 
  group_by(perform_group) %>% 
  summarize(mean = mean(prop_mw), sd = sd(prop_mw))

# All spans "task experience"
dat <- alldata_immediate %>% 
  group_by(participant, trial_n, block_type) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys), block_type = first(block_type)) %>% 
  mutate(mw_resp = as.factor(mw_resp)) %>% 
  group_by(participant, block_type, mw_resp, .drop=FALSE) %>% 
  summarize(N = n()) %>%  
  group_by(participant, block_type) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%  # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = factor(perform_group, levels = c("high", "low", "zero"))) %>% 
  filter(block_type %in% c("simple", "slow")) %>% 
  filter(mw_resp == 4)

summary(aov(prop_mw ~ block_type*perform_group + Error(participant), data = dat))
anova_bf = anovaBF(prop_mw ~ block_type*perform_group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)

dat %>% 
  group_by(perform_group) %>% 
  summarize(mean = mean(prop_mw), sd = sd(prop_mw))

# All spans "task experience"
dat <- alldata_immediate %>% 
  group_by(participant, trial_n, block_type) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys), block_type = first(block_type)) %>% 
  mutate(mw_resp = as.factor(ifelse(mw_resp == 6, 5, mw_resp))) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp, .drop=FALSE) %>% 
  summarize(N = n()) %>%  
  group_by(participant, block_type) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%  # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = factor(perform_group, levels = c("high", "low", "zero"))) %>% 
  filter(block_type %in% c("simple", "slow")) %>% 
  filter(mw_resp == 5)

summary(aov(prop_mw ~ block_type*perform_group + Error(participant), data = dat))
anova_bf = anovaBF(prop_mw ~ block_type*perform_group, data = dat, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf)
sort(anova_bf)[4]/sort(anova_bf)[3]
sort(anova_bf)[4]/sort(anova_bf)[1]

dat %>% 
  group_by(perform_group) %>% 
  summarize(mean = mean(prop_mw), sd = sd(prop_mw))

# Mind-Wandering and Accuracy ----

# *Serial recall ----

alldata_immediate %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy)) %>% 
  group_by(mw_resp, block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Accuracy only for "the word task"
dat_1 <- alldata_immediate %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(immediate_accuracy)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 1)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_1))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# Complex span only, word vs. both tasks
dat_2 <- alldata_immediate %>% 
  filter(block_type == "complex") %>% 
  mutate(mw_resp = key_resp_mw_probe_keys) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(immediate_accuracy)) %>% 
  filter(mw_resp %in% c(1, 3))

word <- dat_2 %>% filter(mw_resp == 1) %>% pull(mean_acc)
both <- dat_2 %>% filter(mw_resp == 3) %>% pull(mean_acc)

t.test(x = word, y = both)
ttestBF(x = word, y = both)

# Complex only, word vs. number
dat_3 <- alldata_immediate %>% 
  filter(block_type == "complex") %>% 
  mutate(mw_resp = key_resp_mw_probe_keys) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(immediate_accuracy)) %>% 
  filter(mw_resp %in% c(1, 2))

number <- dat_3 %>% filter(mw_resp == 2) %>% pull(mean_acc)
word <- dat_3 %>% filter(mw_resp == 1) %>% pull(mean_acc)

t.test(x = number, y = word)
ttestBF(x = number, y = word)

# Accuracy only for "task experience"
dat_4 <- alldata_immediate %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(immediate_accuracy)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 4)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_4))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_4, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# Accuracy only for "something else"
dat_5 <- alldata_immediate %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(immediate_accuracy)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 5)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_5))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_5, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# All block types, any other option vs. something else
dat_6 <- alldata_immediate %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys %in% c(5,6), 5, 1)) %>% # Error in experiment code
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, mw_resp) %>% 
  summarize(mean_acc = mean(immediate_accuracy))

something_else <- dat_6 %>% filter(mw_resp == 5) %>% pull(mean_acc)
other <- dat_6 %>% filter(mw_resp == 1) %>% pull(mean_acc)

t.test(x = something_else, y = other)
ttestBF(x = something_else, y = other)

# *Free accuracy ----

# Accuracy only for "the word task"
free_acc %>% 
  group_by(participant, block_type, key_resp_mw_probe_keys) %>% 
  mutate(key_resp_mw_probe_keys = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  summarize(mean_acc_pt = mean(free_accuracy)) %>% 
  group_by(key_resp_mw_probe_keys, block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

dat_1 <- free_acc %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(free_accuracy)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 1)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_1))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# Complex span only, word vs. both tasks
dat_2 <- free_acc %>% 
  filter(block_type == "complex") %>% 
  mutate(mw_resp = key_resp_mw_probe_keys) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(free_accuracy)) %>% 
  filter(mw_resp %in% c(1, 3))

word <- dat_2 %>% filter(mw_resp == 1) %>% pull(mean_acc)
both <- dat_2 %>% filter(mw_resp == 3) %>% pull(mean_acc)

t.test(x = word, y = both)
ttestBF(x = word, y = both)

# Complex only, word vs. number
dat_3 <- free_acc %>% 
  filter(block_type == "complex") %>% 
  mutate(mw_resp = key_resp_mw_probe_keys) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(free_accuracy)) %>% 
  filter(mw_resp %in% c(1, 2))

number <- dat_3 %>% filter(mw_resp == 2) %>% pull(mean_acc)
word <- dat_3 %>% filter(mw_resp == 1) %>% pull(mean_acc)

t.test(x = number, y = word)
ttestBF(x = number, y = word)

# Accuracy only for "task experience"
dat_4 <- free_acc %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(free_accuracy)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 4)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_4))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_4, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# Accuracy only for "something else"
dat_5 <- free_acc %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(free_accuracy)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 5)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_5))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_5, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# All block types, any other option vs. something else
dat_6 <- free_acc %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys %in% c(5,6), 5, 1)) %>% # Error in experiment code
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, mw_resp) %>% 
  summarize(mean_acc = mean(free_accuracy))

something_else <- dat_6 %>% filter(mw_resp == 5) %>% pull(mean_acc)
other <- dat_6 %>% filter(mw_resp == 1) %>% pull(mean_acc)

t.test(x = something_else, y = other)
ttestBF(x = something_else, y = other)

# *Plot mind-wandering x accuracy ----
p7 <- alldata_immediate %>% 
  group_by(participant, block_type, key_resp_mw_probe_keys) %>% 
  mutate(key_resp_mw_probe_keys = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  summarize(mean_acc_pt = mean(immediate_accuracy)) %>% 
  ggplot(aes(x = key_resp_mw_probe_keys, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal, name = "Block Type",
                    labels = c("Simple", "Complex", "Slow")) +
  scale_color_manual(values = pal, name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_x_discrete(limits = c("Word task", "Number task", "Both tasks", "Task\nexperience", "Something\nelse")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Thought Probe Response", y = "Immediate Serial Recall Accuracy") +
  theme(
    legend.position = "none"
  )

p8 <- free_acc %>% 
  group_by(participant, block_type, key_resp_mw_probe_keys) %>% 
  mutate(key_resp_mw_probe_keys = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  summarize(mean_acc_pt = mean(free_accuracy)) %>% 
  ggplot(aes(x = key_resp_mw_probe_keys, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal, name = "Block Type",
                    labels = c("Simple", "Complex", "Slow")) +
  scale_color_manual(values = pal, name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_x_discrete(limits = c("Word task", "Number task", "Both tasks", "Task\nexperience", "Something\nelse")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Thought Probe Response", y = "Immediate Free Recall Accuracy") +
  theme(
    legend.position = "none"
  )

# *Delayed accuracy ----
dat <- right_join(alldata_immediate, alldata_delay, by = c("participant", "word_presented" = "presented_word"))

dat %>% 
  group_by(participant, block_type, key_resp_mw_probe_keys) %>% 
  mutate(key_resp_mw_probe_keys = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  summarize(mean_acc_pt = mean(key_resp_ltm_corr)) %>% 
  group_by(key_resp_mw_probe_keys, block_type) %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Accuracy only for "the word task"
dat_1 <- dat %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(key_resp_ltm_corr)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 1)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_1))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_1, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# Complex span only, word vs. both tasks
dat_2 <- dat %>% 
  filter(block_type == "complex") %>% 
  mutate(mw_resp = key_resp_mw_probe_keys) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(key_resp_ltm_corr)) %>% 
  filter(mw_resp %in% c(1, 3))

word <- dat_2 %>% filter(mw_resp == 1) %>% pull(mean_acc)
both <- dat_2 %>% filter(mw_resp == 3) %>% pull(mean_acc)

t.test(x = word, y = both)
ttestBF(x = word, y = both)

# Complex only, word vs. number
dat_3 <- dat %>% 
  filter(block_type == "complex") %>% 
  mutate(mw_resp = key_resp_mw_probe_keys) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(key_resp_ltm_corr)) %>% 
  filter(mw_resp %in% c(1, 2))

number <- dat_3 %>% filter(mw_resp == 2) %>% pull(mean_acc)
word <- dat_3 %>% filter(mw_resp == 1) %>% pull(mean_acc)

t.test(x = number, y = word)
ttestBF(x = number, y = word)

# Accuracy only for "task experience"
dat_4 <- dat %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(key_resp_ltm_corr)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 4)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_4))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_4, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# Accuracy only for "something else"
dat_5 <- dat %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  group_by(participant, block_type, mw_resp) %>% 
  summarize(mean_acc = mean(key_resp_ltm_corr)) %>% 
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  filter(mw_resp == 5)

summary(aov(mean_acc ~ block_type + Error(participant), data = dat_5))
anova_bf_acc = anovaBF(mean_acc ~ block_type, data = dat_5, whichRandom = 'participant', iterations = 5000, rscaleFixed = sqrt(2)/2)
sort(anova_bf_acc)

# All block types, any other option vs. something else
dat_6 <- dat %>% 
  mutate(mw_resp = ifelse(key_resp_mw_probe_keys %in% c(5,6), 5, 1)) %>% # Error in experiment code
  mutate(mw_resp = as.factor(mw_resp), block_type = as.factor(block_type)) %>% 
  group_by(participant, mw_resp) %>% 
  summarize(mean_acc = mean(key_resp_ltm_corr))

something_else <- dat_6 %>% filter(mw_resp == 5) %>% pull(mean_acc)
other <- dat_6 %>% filter(mw_resp == 1) %>% pull(mean_acc)

t.test(x = something_else, y = other)
ttestBF(x = something_else, y = other)

p9 <- dat %>% 
  group_by(participant, block_type, key_resp_mw_probe_keys) %>% 
  mutate(key_resp_mw_probe_keys = ifelse(key_resp_mw_probe_keys == 6, 5, key_resp_mw_probe_keys)) %>% # Error in experiment code
  summarize(mean_acc_pt = mean(key_resp_ltm_corr)) %>% 
  ggplot(aes(x = key_resp_mw_probe_keys, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal, name = "Block Type",
                    labels = c("Simple", "Complex", "Slow")) +
  scale_color_manual(values = pal, name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Block Type",
                     labels = c("Simple", "Complex", "Slow")) +
  scale_x_discrete(limits = c("Word task", "Number task", "Both tasks", "Task\nexperience", "Something\nelse")) +
  coord_cartesian(ylim = c(0.5, 1)) +
  labs(x = "Thought Probe Response", y = "Delayed Recognition Accuracy") 

p7 + p8 + p9 &
  plot_annotation(tag_levels = "a") &
  theme(
    panel.grid.minor = element_blank(),
    panel.grid.major.x = element_blank()
  )

ggsave(here::here("MDMW3", "figures", "fig4.png"), width = 14, height = 8, units = "in", dpi = 300)

# * Plot mind-wandering response frequency ----

dat <- alldata_immediate %>% 
  filter(block_type == "simple") %>% 
  group_by(participant, trial_n) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys)) %>% 
  group_by(participant, mw_resp,.drop=FALSE) %>% 
  mutate(mw_resp = as.factor(ifelse(mw_resp == 6, 5, mw_resp))) %>% # Error in experiment code
  summarize(N = n()) %>%  
  group_by(participant) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%  # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = factor(perform_group, levels = c("high", "low", "zero")),
         mw_resp = factor(mw_resp, levels = c("1", "2", "3", "4", "5")))

dat %>% 
  group_by(mw_resp, perform_group) %>% 
  summarise(mean_mw = mean(prop_mw), sd = sd(prop_mw))

p10 <- dat %>% 
  ggplot(aes(x = mw_resp, y = prop_mw, shape = perform_group)) +
  geom_jitter(aes(color = perform_group),
              size = 1, alpha = 0.3, position = position_dodge2(width =.5)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = perform_group), color = "black") +
  scale_fill_manual(values = pal, name = "Secondary Task\nPerformance",
                    labels = c("High", "Low", "Zero")) +
  scale_color_manual(values = pal, name = "Secondary Task\nPerformance",
                     labels = c("High", "Low", "Zero")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Secondary Task\nPerformance",
                     labels = c("High", "Low", "Zero")) +
  scale_x_discrete(labels = c("Word task", "Number task", "Both tasks", "Task\nexperience", "Something\nelse")) +
  scale_y_continuous(labels = scales::percent) +
  labs(x = "Thought Probe Response", y = "Percent of Responses") +
  ggtitle("Simple Span") +
  theme(
    legend.position = "none"
  )

dat <- alldata_immediate %>% 
  filter(block_type == "complex") %>% 
  group_by(participant, trial_n) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys)) %>% 
  group_by(participant, mw_resp,.drop=FALSE) %>% 
  mutate(mw_resp = as.factor(ifelse(mw_resp == 6, 5, mw_resp))) %>% # Error in experiment code
  summarize(N = n()) %>%  
  group_by(participant) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%  # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = factor(perform_group, levels = c("high", "low", "zero")),
         mw_resp = factor(mw_resp, levels = c("1", "2", "3", "4", "5"))) 

dat %>% 
  group_by(mw_resp, perform_group) %>% 
  summarise(mean_mw = mean(prop_mw), sd = sd(prop_mw))

p11 <- dat %>% 
  ggplot(aes(x = mw_resp, y = prop_mw, shape = perform_group)) +
  geom_jitter(aes(color = perform_group),
              size = 1, alpha = 0.3, position = position_dodge2(width =.5)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = perform_group), color = "black") +
  scale_fill_manual(values = pal, name = "Secondary Task\nPerformance",
                    labels = c("High", "Low", "Zero")) +
  scale_color_manual(values = pal, name = "Secondary Task\nPerformance",
                     labels = c("High", "Low", "Zero")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Secondary Task\nPerformance",
                     labels = c("High", "Low", "Zero")) +
  scale_x_discrete(labels = c("Word task", "Number task", "Both tasks", "Task\nexperience", "Something\nelse")) +
  scale_y_continuous(labels = scales::percent) +
  labs(x = "Thought Probe Response", y = "Percent of Responses") +
  ggtitle("Complex Span") +
  theme(
    legend.position = "none"
  )

dat <- alldata_immediate %>% 
  filter(block_type == "slow") %>% 
  group_by(participant, trial_n) %>% 
  summarise(mw_resp = first(key_resp_mw_probe_keys)) %>% 
  group_by(participant, mw_resp,.drop=FALSE) %>% 
  mutate(mw_resp = as.factor(ifelse(mw_resp == 6, 5, mw_resp))) %>% # Error in experiment code
  summarize(N = n()) %>%  
  group_by(participant) %>% 
  mutate(prop_mw = round(N/14, 3)) %>%  # should be able to do some other way instead of hardcoding denominator but not sure how w/o NaN errors
  mutate(perform_group = ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high"))) %>% 
  mutate(perform_group = factor(perform_group, levels = c("high", "low", "zero")),
         mw_resp = factor(mw_resp, levels = c("1", "2", "3", "4", "5"))) 

dat %>% 
  group_by(mw_resp, perform_group) %>% 
  summarise(mean_mw = mean(prop_mw), sd = sd(prop_mw))

p12 <- dat %>% 
  ggplot(aes(x = mw_resp, y = prop_mw, shape = perform_group)) +
  geom_jitter(aes(color = perform_group),
              size = 1, alpha = 0.3, position = position_dodge2(width =.5)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.7),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.7),
               aes(fill = perform_group), color = "black") +
  scale_fill_manual(values = pal, name = "Secondary Task\nPerformance",
                    labels = c("High", "Low", "Zero")) +
  scale_color_manual(values = pal, name = "Secondary Task\nPerformance",
                     labels = c("High", "Low", "Zero")) +
  scale_shape_manual(values = c(21, 24, 22), name = "Secondary Task\nPerformance",
                     labels = c("High", "Low", "Zero")) +
  scale_x_discrete(labels = c("Word task", "Number task", "Both tasks", "Task\nexperience", "Something\nelse")) +
  scale_y_continuous(labels = scales::percent) +
  labs(x = "Thought Probe Response", y = "Percent of Responses") +
  ggtitle("Slow Span") +
  theme(
  )

p10 + p11 + p12 &
  plot_layout(guides = "collect") &
  plot_annotation(tag_levels = "a") &
  theme(
    panel.grid.minor = element_blank(),
    panel.grid.major.x = element_blank()
  )

ggsave(here::here("MDMW3", "figures", "fig5.png"), width = 14, height = 8, units = "in", dpi = 300)


# MAAS data ----
dat <- alldata_maas %>% 
  mutate(perform_group = as.factor(ifelse(participant %in% zero_pts, "zero", ifelse(participant %in% poor_pts, "low", "high")))) %>% 
  group_by(participant, perform_group) %>% 
  summarize(maas_score = mean(slider_maas_response))

dat %>% 
  group_by(perform_group) %>% 
  filter(is.na(maas_score)) %>% 
  count()

dat %>% 
  ungroup() %>% 
  filter(!is.na(maas_score)) %>% 
  summarize(mean_mass = mean(maas_score), sd_maas = sd(maas_score))

dat %>% 
  filter(!is.na(maas_score)) %>% 
  group_by(perform_group) %>% 
  summarize(mean_mass = mean(maas_score), sd_maas = sd(maas_score))

# Serial position effect ----
# Not included in paper
p1 <- alldata_immediate %>% 
  group_by(block_type, participant, serial_position) %>% 
  summarize(mean_acc_pt = mean(immediate_accuracy)) %>% 
  ggplot(aes(x = serial_position, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.3),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.3),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal) +
  scale_color_manual(values = pal) +
  scale_shape_manual(values = c(21, 24, 22)) +
  coord_cartesian(ylim = c(0.5, 1)) +
  facet_wrap(~block_type) +
  labs(x = "Serial Position", y = "Immediate Serial Recall Accuracy") +
  theme(
    legend.position = "none"
  )


p2 <- free_acc %>% 
  group_by(block_type, participant, serial_position) %>% 
  summarize(mean_acc_pt = mean(free_accuracy)) %>% 
  ggplot(aes(x = serial_position, y = mean_acc_pt, shape = block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.3),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.3),
               aes(fill = block_type), color = "black") +
  scale_fill_manual(values = pal) +
  scale_color_manual(values = pal) +
  scale_shape_manual(values = c(21, 24, 22)) +
  coord_cartesian(ylim = c(0.5, 1)) +
  facet_wrap(~block_type) +
  labs(x = "Serial Position", y = "Immediate Free Recall Accuracy") +
  theme(
    legend.position = "none"
  )

p3 <- alldata_delay %>% 
  group_by(presented_block_type, participant, presented_serial_position) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr)) %>% 
  ggplot(aes(x = presented_serial_position, y = mean_acc_pt, shape = presented_block_type)) +
  stat_summary(geom = "errorbar", 
               width = .2, position = position_dodge(width =.3),
               color = "black") +
  stat_summary(geom = "point", fun = "mean", 
               size = 4, position = position_dodge(width =.3),
               aes(fill = presented_block_type), color = "black") +
  scale_fill_manual(values = pal) +
  scale_color_manual(values = pal) +
  scale_shape_manual(values = c(21, 24, 22)) +
  coord_cartesian(ylim = c(0.5, 1)) +
  facet_wrap(~presented_block_type) +
  labs(x = "Serial Position", y = "Delayed Recognition Accuracy")

p1 / p2 / p3 &
  plot_layout(guides = "collect")


# Distractor task ----
alldata_go %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_distract_corr), sd_acc_pt = sd(key_resp_distract_corr)) %>% 
  ungroup() %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))
