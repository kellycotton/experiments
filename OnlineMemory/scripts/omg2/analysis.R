# Analysis script for OMG2
# 2/11/23

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
alldata_immediate <- read_csv(here::here("data", "output_data", "exp2", "alldata_immediate.csv"))
alldata_delay <- read_csv(here::here("data", "output_data", "exp2", "alldata_delay.csv"))
alldata_parity <- read_csv(here::here("data", "output_data", "exp2", "alldata_parity.csv"))

# Immediate
alldata_immediate %>% 
  mutate(delay_1 = as.factor(delay_1)) %>% 
  group_by(participant, delay_1) %>% 
  summarize(mean_err = mean(err_angle)) %>% 
  ggplot(aes(x = delay_1, y = mean_err)) + 
  geom_point(alpha = 0.5)+
  stat_summary(geom = "point", size = 3, fun = "mean") +
  stat_summary(geom = "errorbar", width = .3)

# Delayed
alldata_delay %>% 
  mutate(delay_1 = as.factor(delay_1)) %>% 
  group_by(participant, delay_1) %>% 
  summarize(mean_err = mean(err_angle_ltm)) %>% 
  ggplot(aes(x = delay_1, y = mean_err)) + 
  geom_point(alpha = 0.5)+
  stat_summary(geom = "point", size = 3, fun = "mean") +
  stat_summary(geom = "errorbar", width = .3)

# Parity
alldata_parity %>% 
  mutate(delay_1 = as.factor(delay_1)) %>% 
  group_by(participant, delay_1) %>% 
  summarize(mean_acc = mean(parity_resp_corr)) %>% 
  ggplot(aes(x = delay_1, y = mean_acc)) + 
  geom_point(alpha = 0.5)+
  stat_summary(geom = "point", size = 3, fun = "mean") +
  stat_summary(geom = "errorbar", width = .3)

alldata_parity %>% 
  mutate(delay_1 = as.factor(delay_1)) %>% 
  group_by(participant, delay_1) %>% 
  summarize(mean_rt = mean(parity_resp_rt, na.rm = T)) %>% 
  ggplot(aes(x = delay_1, y = mean_rt)) + 
  geom_point(alpha = 0.5)+
  stat_summary(geom = "point", size = 3, fun = "mean") +
  stat_summary(geom = "errorbar", width = .3)


alldata_immediate %>% 
  summarize(mean_err = mean(err_angle)) 
alldata_delay %>% 
  summarize(mean_err = mean(err_angle_ltm)) 
alldata_parity %>% 
  summarize(mean_acc = mean(parity_resp_corr)) 

alldata_delay %>% 
  group_by(participant) %>% 
  count()
