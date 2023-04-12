# Analysis script for SM2
# 2/13/23

#Setup-----

# Load packages
library(tidyverse)

# Initialize dataframes
alldata <- data.frame(matrix(ncol = 20, nrow = 200))
alldata_wm <- data.frame(matrix(ncol = 14, nrow = 0))
alldata_parity <- data.frame(matrix(ncol = 14, nrow = 0))
alldata_delay <- data.frame(matrix(ncol = 14, nrow = 0))
alldata_stai <- data.frame(matrix(ncol = 5, nrow = 0))
alldata_demo <- data.frame(matrix(ncol = 8, nrow = 0))
alldata_dass <- data.frame(matrix(ncol = 7, nrow = 0))

# Data-----

# Get list of data file names
data_files <- list.files(path = here::here("data", "exp2", "raw_data"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 1109)
  data <- janitor::clean_names(data)
  data_wm <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(delay_1, trial_n,
             disp_angle, resp_angle, block_n, item_n,
             stim_presented, err_angle, central_item,
             participant, group, block_type,
             perception_trials_this_n, perception_block_this_n,
             wm_trials_this_n, wm_block_this_n
             )) %>%
    fill(perception_trials_this_n, .direction = 'up') %>% 
    fill(perception_block_this_n, .direction = 'up') %>% 
    fill(wm_trials_this_n, .direction = 'up') %>% 
    fill(wm_block_this_n, .direction = 'up') %>% 
    fill(group, .direction = 'down') %>% 
    fill(delay_1, .direction = 'up') %>% 
    filter(!is.na(stim_presented))  %>% 
    mutate(trial_n = ifelse(block_type == "perception", perception_trials_this_n+(20*perception_block_this_n), wm_trials_this_n+(20*wm_block_this_n))) %>%  # error in trial number for perception trials only
    filter(row_number() > 6)  # remove practice trials

  alldata_wm <- rbind(alldata_wm, data_wm)
  
  data_parity <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(delay_1, trial_n,
             block_n,
             parity_i, parity_resp_keys, parity_resp_corr, parity_resp_rt,
             participant, group, block_type, 
             perception_trials_this_n, perception_block_this_n,
             wm_trials_this_n, wm_block_this_n
             )) %>%   
    fill(perception_trials_this_n, .direction = 'up') %>% 
    fill(perception_block_this_n, .direction = 'up') %>% 
    fill(wm_trials_this_n, .direction = 'up') %>% 
    fill(wm_block_this_n, .direction = 'up') %>% 
    fill(group, .direction = 'down') %>% 
    fill(delay_1, .direction = 'up') %>% 
    filter(!is.na(parity_i)) %>% 
    mutate(trial_n = ifelse(block_type == "perception", perception_trials_this_n+(20*perception_block_this_n), wm_trials_this_n+(20*wm_block_this_n))) %>%  # error in trial number for perception trials only
    filter(row_number() > 6)  # remove practice trials
  
  alldata_parity <- rbind(alldata_parity, data_parity)
  
  data_delay <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(delay_1, trial_n,
             disp_angle_ltm, resp_angle_ltm, 
             stim_presented_ltm, err_angle_ltm, central_item,
             participant, group, presented_block_type)) %>%
    fill(group, .direction = 'down') %>% 
    filter(!is.na(stim_presented_ltm))  # remove practice trials
  
  alldata_delay <- rbind(alldata_delay, data_delay)
  
  data_stai <- data %>% 
    fill(group, .direction = 'down') %>% 
    # select only relevant columns for simpler cleaning
    select(c(
             participant, group, 
             stai_item, key_resp_stai_keys)) %>% 
    filter(!is.na(key_resp_stai_keys)) %>%  # remove extra trials
    mutate(stai_measure = ifelse(row_number() <= 6, 1, ifelse(row_number() <= 12, 2, 3))) %>% 
    mutate(results_scored = 
             case_when(
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content") & key_resp_stai_keys == 1 ~ 4,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 2 ~ 3,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 3 ~ 2,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 4 ~ 1,
               stai_item %in% c("I am worried", "I feel upset", "I feel tense") ~ key_resp_stai_keys
             )) %>% 
    group_by(participant, group, stai_measure) %>% 
    summarise(stai_score = sum(results_scored))
  
  alldata_stai <- rbind(alldata_stai, data_stai)
  
  data_dass <- data %>%     
    fill(group, .direction = 'down') %>% 
    select(c(dass_item, scale, key_resp_dass_keys, participant, group)) %>% 
    filter(!is.na(dass_item)) %>% 
    group_by(participant, group, scale) %>% 
    summarise(dass_score = sum(key_resp_dass_keys)*2) %>% 
    pivot_wider(id_cols = c(participant, group),
                names_from = scale,
                names_prefix = "dass_score_",
                values_from = dass_score)
  
  alldata_dass <- rbind(alldata_dass, data_dass)
  
}


# Write the data to a new file
write_csv(alldata_wm, here::here("data", "exp2", "output_data", "alldata_wm.csv"))
write_csv(alldata_parity, here::here("data", "exp2", "output_data", "alldata_parity.csv"))
write_csv(alldata_delay, here::here("data", "exp2", "output_data", "alldata_delay.csv"))
write_csv(alldata_stai, here::here("data", "exp2", "output_data", "alldata_stai.csv"))
write_csv(alldata_dass, here::here("data", "exp2", "output_data", "alldata_dass.csv"))

#write_csv(alldata_demo, here::here("data", "exp2", "output_data", "alldata_demo.csv"))


