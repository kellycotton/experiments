# Analysis script for OMG3
# 4/12/23

#Setup-----

# Load packages
library(tidyverse)

theme_set(theme_bw())

pal <- c("#00BFB2", "#E9CE2C", "#C64191")

# Read data
alldata_immediate <- read_csv(here::here("data", "output_data", "exp2", "alldata_immediate.csv"))

# Accuracy
alldata_immediate %>% 
  mutate(trial_type = as.factor(trial_type), 
         serial_position_test = as.factor(serial_position_test)) %>% 
  mutate(point_color = case_when(
    trial_type == "sp_1_red" & serial_position_test == 0 ~ "red",
    trial_type == "sp_2_red" & serial_position_test == 1 ~ "red",
    trial_type == "sp_3_red" & serial_position_test == 2 ~ "red",
    TRUE ~ "black"
  )) %>% 
  group_by(participant, trial_type, serial_position_test) %>% 
  summarize(mean_acc = mean(key_resp_test_corr), point_color = first(point_color)) %>% 
  ggplot(aes(x = serial_position_test, y = mean_acc, color = point_color)) + 
  geom_jitter(alpha = 0.3, width = .2)+
  stat_summary(geom = "point", size = 4, fun = "mean") +
  stat_summary(geom = "errorbar", width = .1) +
  scale_color_identity() +
  facet_wrap(~trial_type)

# Reaction Time
alldata_immediate %>% 
  filter(key_resp_test_rt > .3 & key_resp_test_rt < 10) %>% 
  mutate(trial_type = as.factor(trial_type), 
         serial_position_test = as.factor(serial_position_test)) %>% 
  mutate(point_color = case_when(
    trial_type == "sp_1_red" & serial_position_test == 0 ~ "red",
    trial_type == "sp_2_red" & serial_position_test == 1 ~ "red",
    trial_type == "sp_3_red" & serial_position_test == 2 ~ "red",
    TRUE ~ "black"
  )) %>% 
  group_by(participant, trial_type, serial_position_test) %>% 
  summarize(mean_rt = mean(key_resp_test_rt), point_color = first(point_color)) %>% 
  ggplot(aes(x = serial_position_test, y = mean_rt, color = point_color)) + 
  geom_jitter(alpha = 0.3, width = .2)+
  stat_summary(geom = "point", size = 4, fun = "mean") +
  stat_summary(geom = "errorbar", width = .1) +
  scale_color_identity() +
  facet_wrap(~trial_type)

