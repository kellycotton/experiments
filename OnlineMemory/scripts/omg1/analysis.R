# Analysis script for OMG1
# 2/6/23

#Setup-----

# Load packages
library(tidyverse)
library(patchwork)
library(BayesFactor)
# Get code for creating half violin plot for rain cloud plot
source("https://gist.githubusercontent.com/benmarwick/2a1bb0133ff568cbe28d/raw/fb53bd97121f7f9ce947837ef1a4c65a73bffb3f/geom_flat_violin.R")


theme_set(theme_bw())

pal <- c("#00BFB2", "#E9CE2C", "#C64191")

# Read data
alldata_immediate <- read_csv(here::here("data", "output_data", "exp1", "alldata_immediate.csv"))
alldata_delay <- read_csv(here::here("data", "output_data", "exp1", "alldata_delay.csv"))
alldata_go <- read_csv(here::here("data", "output_data", "exp1", "alldata_go.csv"))
alldata_parity <- read_csv(here::here("data", "output_data", "exp1", "alldata_parity.csv"))

# Immediate Recognition Task ----
alldata_immediate %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_wm_corr), sd_acc_pt = sd(key_resp_wm_corr)) %>% 
  ungroup() %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Delayed Recognition Task ----
alldata_delay %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr), sd_acc_pt = sd(key_resp_ltm_corr)) %>% 
  ungroup() %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))

# Parity Task during Immediate Task ----

# Overall performance
alldata_parity %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_parity_corr), sd_acc_pt = sd(key_resp_parity_corr)) %>% 
  ungroup() %>% 
  summarize(mean_acc = mean(mean_acc_pt), sd_acc = sd(mean_acc_pt))


# Plotting ----
# *Plot memory task performance ----
p1 <- alldata_immediate %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_wm_corr)) %>% 
  ggplot(aes(x = 1, y = mean_acc_pt)) +
  geom_flat_violin(position = position_nudge(x = .2, y = 0), alpha = .8, fill = "#00BFB2", color = "#00BFB2") +
  geom_point(position = position_jitter(width = .15), size = 1.5, alpha = 0.6, fill = "#00BFB2", color = "#00BFB2") +
  geom_boxplot(width = .1, outlier.shape = NA, alpha = 0.5, fill = "#00BFB2", color = "#00BFB2") +
  expand_limits(x = 3) +
  scale_x_discrete(expand = c(0.2, 0.2)) +
  scale_y_continuous(expand = c(0.05, 0)) +
  ylab("Working Memory Accuracy") +
  theme(
    legend.position = "none",
    panel.grid.minor = element_blank(),
    axis.title.y = element_blank(),
    strip.text = element_text(size = 15, face = "bold"),
    axis.text = element_text(size = 16, face = "bold"),
    axis.title = element_text(size = 14, face = "bold")
  ) + 
  coord_flip() 

p2 <- alldata_delay %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_ltm_corr), sd_acc_pt = sd(key_resp_ltm_corr)) %>% 
  ggplot(aes(x = 1, y = mean_acc_pt)) +
  geom_flat_violin(position = position_nudge(x = .2, y = 0), alpha = .8, fill = "#E9CE2C", color = "#E9CE2C") +
  geom_point(position = position_jitter(width = .15), size = 1.5, alpha = 0.6, fill = "#E9CE2C", color = "#E9CE2C") +
  geom_boxplot(width = .1, outlier.shape = NA, alpha = 0.5, fill = "#E9CE2C", color = "#E9CE2C") +
  expand_limits(x = 3) +
  scale_x_discrete(expand = c(0.2, 0.2)) +
  scale_y_continuous(expand = c(0.05, 0)) +
  ylab("Delayed Memory Accuracy") +
  theme(
    legend.position = "none",
    panel.grid.minor = element_blank(),
    axis.title.y = element_blank(),
    strip.text = element_text(size = 15, face = "bold"),
    axis.text = element_text(size = 16, face = "bold"),
    axis.title = element_text(size = 14, face = "bold")
  ) + 
  coord_flip() 

p3 <- alldata_parity %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pt = mean(key_resp_parity_corr), sd_acc_pt = sd(key_resp_parity_corr))  %>% 
  ggplot(aes(x = 1, y = mean_acc_pt)) +
  geom_flat_violin(position = position_nudge(x = .2, y = 0), alpha = .8, fill = "#C64191", color = "#C64191") +
  geom_point(position = position_jitter(width = .15), size = 1.5, alpha = 0.6, fill = "#C64191", color = "#C64191") +
  geom_boxplot(width = .1, outlier.shape = NA, alpha = 0.5, fill = "#C64191", color = "#C64191") +
  expand_limits(x = 3) +
  scale_x_discrete(expand = c(0.2, 0.2)) +
  scale_y_continuous(expand = c(0.05, 0)) +
  ylab("Secondary Task Accuracy") +
  theme(
    legend.position = "none",
    panel.grid.minor = element_blank(),
    axis.title.y = element_blank(),
    strip.text = element_text(size = 15, face = "bold"),
    axis.text = element_text(size = 16, face = "bold"),
    axis.title = element_text(size = 14, face = "bold")
  ) + 
  coord_flip() 

p1 + p2 +p3 +
  plot_annotation(tag_levels = "a") &
  theme(
    legend.position = "none",
    panel.grid.minor = element_blank(),
    panel.grid.major.x = element_blank()
  ) 

dat1 <- alldata_immediate %>% 
  group_by(participant) %>% 
  summarize(mean_acc_wm = mean(key_resp_wm_corr), sd_acc_wm = sd(key_resp_wm_corr)) 

dat2 <- alldata_parity %>% 
  group_by(participant) %>% 
  summarize(mean_acc_pj = mean(key_resp_parity_corr), sd_acc_pj = sd(key_resp_parity_corr))

dat3 <- alldata_delay %>% 
  group_by(participant) %>% 
  summarize(mean_acc_delay = mean(key_resp_ltm_corr), sd_acc_delay = sd(key_resp_ltm_corr))

dat <- left_join(dat1, left_join(dat2, dat3))

p1 <- ggplot(dat, aes(x = mean_acc_pj, y = mean_acc_wm)) +
  geom_point() +
  geom_smooth(method= "lm")

p2 <- ggplot(dat, aes(x = mean_acc_pj, y = mean_acc_delay)) +
  geom_point() +
  geom_smooth(method= "lm")

p3 <- ggplot(dat, aes(x = mean_acc_wm, y = mean_acc_delay)) +
  geom_point() +
  geom_smooth(method= "lm")

p1 + p2 +p3 +
  plot_annotation(tag_levels = "a") &
  theme(
    legend.position = "none",
    panel.grid.minor = element_blank(),
    panel.grid.major.x = element_blank()
  ) 

