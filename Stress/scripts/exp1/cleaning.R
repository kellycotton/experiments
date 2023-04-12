# Analysis script for SM1
# 2/9/23

#Setup-----

# Load packages
library(tidyverse)

# Initialize dataframes
alldata <- data.frame(matrix(ncol = 20, nrow = 200))
alldata_wm <- data.frame(matrix(ncol = 14, nrow = 0))
alldata_parity <- data.frame(matrix(ncol = 14, nrow = 0))
alldata_stai <- data.frame(matrix(ncol = 5, nrow = 0))
alldata_hr <- data.frame(matrix(ncol = 5, nrow = 0))
alldata_demo <- data.frame(matrix(ncol = 8, nrow = 0))
alldata_qs <- data.frame(matrix(ncol = 7, nrow = 0))
alldata_notes <- data.frame(matrix(ncol = 2, nrow = 0))

# Data-----

# Get list of data file names
data_files <- list.files(path = here::here("data", "exp1", "raw_data"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 1109)
  data <- janitor::clean_names(data)
  data_wm <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(delay_1, delay_2, trial_n,
             disp_angle, resp_angle, block_n, item_n, block_this_n,
              stim_presented, err_angle, central_item,
             participant, group)) %>%
    filter(!is.na(block_this_n)) %>%  # remove practice trials
    filter(!is.na(err_angle)) %>%  # only WM responses
    mutate(trial_n = trial_n-4) # count originally started with practice trials, so reset it
  
  alldata_wm <- rbind(alldata_wm, data_wm)
  
  data_parity <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(delay_1, delay_2, trial_n,
             block_n, block_this_n,
             parity_i, parity_resp_keys, parity_resp_corr, parity_resp_rt,
             participant, group)) %>%   
    filter(!is.na(block_this_n)) %>% 
    #filter(!is.na(parity_resp_keys)) %>% 
    mutate(trial_n = trial_n-4) %>% # count originally started with practice trials, so reset it
    mutate(block_n = block_this_n+1) # block n not included in original file, so add it and match it with WM trials
  
  alldata_parity <- rbind(alldata_parity, data_parity)

  stai_1 <- data %>% 
    filter(!is.na(stai_trials_1_this_index)) %>% 
    mutate(results_scored = 
      case_when(
        stai_item %in% c("I am relaxed", "I feel calm", "I feel content") & key_resp_stai_keys == 1 ~ 4,
        stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 2 ~ 3,
        stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 3 ~ 2,
        stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 4 ~ 1,
        stai_item %in% c("I am worried", "I feel upset", "I feel tense") ~ key_resp_stai_keys)
      ) %>% 
    summarise(participant = first(participant),
              group = first(group),
              stai_1 = sum(results_scored))
  
  stai_2 <- data %>% 
    filter(!is.na(stai_trials_2_this_index)) %>% 
    mutate(key_resp_stai_keys = case_when(
      # Clean data based on notes
      participant == 1023 & stai_item == "I feel calm" ~ 4,
      TRUE ~ as.numeric(key_resp_stai_keys)
    )) %>% 
    mutate(results_scored = 
             case_when(
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content") & key_resp_stai_keys == 1 ~ 4,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 2 ~ 3,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 3 ~ 2,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 4 ~ 1,
               stai_item %in% c("I am worried", "I feel upset", "I feel tense") ~ key_resp_stai_keys
    )) %>% 
    summarise(participant = first(participant),
              group = first(group),
              stai_2 = sum(results_scored))
  
  stai_3 <- data %>% 
    filter(!is.na(stai_trials_3_this_index)) %>% 
    mutate(results_scored = 
             case_when(
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content") & key_resp_stai_keys == 1 ~ 4,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 2 ~ 3,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 3 ~ 2,
               stai_item %in% c("I am relaxed", "I feel calm", "I feel content")  & key_resp_stai_keys == 4 ~ 1,
               stai_item %in% c("I am worried", "I feel upset", "I feel tense") ~ key_resp_stai_keys)
    ) %>% 
    summarise(participant = first(participant),
              group = first(group),
              stai_3 = sum(results_scored))
  
  comb_stai = left_join(left_join(stai_1, stai_2), stai_3)
  alldata_stai = rbind(alldata_stai,comb_stai)
  
  data_hr <- data %>% 
    select(c(contains("hr"), participant, group)) %>% 
    filter(!is.na(hr_1_text))
  alldata_hr = rbind(alldata_hr, data_hr)
  
  data_demo <- data %>% 
    select(c(age_resp_text, gender_resp_keys, key_resp_race_keys, 
             hand_resp_keys, color_resp_keys, english_resp_keys,
             participant, group)) %>% 
    fill(everything(), .direction = "downup") %>%
    slice(1) %>% 
    mutate(key_resp_race_keys = ifelse(key_resp_race_keys == "None", NA, key_resp_race_keys))
  alldata_demo = rbind(alldata_demo, data_demo)
  
  data_bai <- data %>% 
    select(c(bai_item, key_resp_bai_keys, participant, group)) %>% 
    filter(!is.na(bai_item)) %>% 
    summarise(bai_score = sum(key_resp_bai_keys), 
              participant = first(participant), 
              group = first(group))
  
  data_dass <- data %>% 
    select(c(dass_item, scale, key_resp_dass_keys, participant, group)) %>% 
    filter(!is.na(dass_item)) %>% 
    group_by(participant, group, scale) %>% 
    summarise(dass_score = sum(key_resp_dass_keys)*2) %>% 
    pivot_wider(id_cols = c(participant, group),
                names_from = scale,
                names_prefix = "dass_score_",
                values_from = dass_score)
  
  data_pss <- data %>% 
    select(c(pss_item, scoring, key_resp_pss_keys, participant, group)) %>% 
    filter(!is.na(pss_item)) %>% 
    mutate(pss_resp = case_when(
      scoring == "-" & key_resp_pss_keys == 4 ~ 0,
      scoring == "-" & key_resp_pss_keys == 3 ~ 1,
      scoring == "-" & key_resp_pss_keys == 2 ~ 2,
      scoring == "-" & key_resp_pss_keys == 1 ~ 3,
      scoring == "-" & key_resp_pss_keys == 0 ~ 4,
      scoring == "+" ~ key_resp_pss_keys,
    )) %>% 
    summarise(pss_score = sum(pss_resp), 
              participant = first(participant), 
              group = first(group))
  
  data_qs <- left_join(left_join(data_bai, data_dass), data_pss)
  alldata_qs <- rbind(alldata_qs, data_qs)
  
  data_notes <- data %>% 
    select(participant, contains("notes")) %>% 
    fill(everything(), .direction = "downup") %>%
    slice(1)   
  alldata_notes <- rbind(alldata_notes, data_notes)
  
  
}

# Clean data based on notes
alldata_stai <- alldata_stai %>% 
  mutate(stai_2 = ifelse(participant %in% c(1004, 1012, 1013), NA, stai_2))

alldata_demo <- alldata_demo %>% 
  mutate(color_resp_keys = ifelse(participant == 1012, 2, color_resp_keys))

alldata_hr <- alldata_hr %>% 
  mutate(hr_1_text = ifelse(participant %in% c(1003), NA, hr_1_text),
         hr_2_text = ifelse(participant %in% c(1003), NA, hr_2_text),
         hr_3_text = ifelse(participant %in% c(1003, 1014, 1053), NA, hr_3_text))

alldata_qs <- alldata_qs %>% 
  mutate(bai_score = ifelse(participant %in% c(1053, 1063, 1064), NA, bai_score),
         dass_score_a = ifelse(participant %in% c(1053, 1063, 1064), NA, dass_score_a),
         dass_score_d = ifelse(participant %in% c(1053, 1063, 1064), NA, dass_score_d),
         dass_score_s = ifelse(participant %in% c(1053, 1063, 1064), NA, dass_score_s),
         pss_score = ifelse(participant %in% c(1053, 1063, 1064), NA, pss_score))

# Did not complete protocol - 1005, 1025, 1073, 1074 

# Write the data to a new file
write_csv(alldata_wm, here::here("data", "exp1", "output_data", "alldata_wm.csv"))
write_csv(alldata_parity, here::here("data", "exp1", "output_data", "alldata_parity.csv"))
write_csv(alldata_stai, here::here("data", "exp1", "output_data", "alldata_stai.csv"))
write_csv(alldata_hr, here::here("data", "exp1", "output_data", "alldata_hr.csv"))
write_csv(alldata_demo, here::here("data", "exp1", "output_data", "alldata_demo.csv"))
write_csv(alldata_qs, here::here("data", "exp1", "output_data", "alldata_qs.csv"))
write_csv(alldata_notes, here::here("data", "exp1", "output_data", "alldata_notes.csv"))


