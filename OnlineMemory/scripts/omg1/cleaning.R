# Cleaning script 
# Experiment 1
# 2/6/23

library(tidyverse)

# Initialize dataframes
alldata <- data.frame(matrix(ncol = 16, nrow = 0))
data_immediate <- data.frame(matrix(ncol = 10, nrow = 0))
data_parity <- data.frame(matrix(ncol = 11, nrow = 0))
data_go <- data.frame(matrix(ncol = 11, nrow = 0))
data_delay <- data.frame(matrix(ncol = 10, nrow = 0))
data_maas <- data.frame(matrix(ncol = 4, nrow = 0))
data_demo <- data.frame(matrix(ncol = 9, nrow = 0))
alldata_maas <- data.frame(matrix(ncol = 6, nrow = 0))
alldata_immediate <- data.frame(matrix(ncol = 11, nrow = 0))
alldata_delay <- data.frame(matrix(ncol = 11, nrow = 0))
alldata_parity <- data.frame(matrix(ncol = 5, nrow = 0))
alldata_go <- data.frame(matrix(ncol = 5, nrow = 0))

# Cleaning functions
cleaning_data_immediate <- function(file) {
  # Working memory trials
  data_immediate <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, condition, site,
             trial_n, block_n, 
             presented_word, presented_serial_position, 
             target_position, lure_word,
             key_resp_wm_corr, key_resp_wm_keys, key_resp_wm_rt,
             key_resp_mw_probe_keys, key_resp_mw_probe_rt
             )) %>% 
    # Add block numbers
    fill(key_resp_mw_probe_keys, .direction = 'up') %>% 
    fill(key_resp_mw_probe_rt, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(key_resp_wm_keys)) 
  
  return(data_immediate)
}

cleaning_data_pj <- function(file) {
  # Secondary task trials
  data_parity <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, condition, site,
             trial_n, block_n, 
             parity_n, parity_stim,
             key_resp_parity_keys, key_resp_parity_corr, key_resp_parity_rt,
             key_resp_mw_probe_keys, key_resp_mw_probe_rt)) %>% 
    # Add MW 
    fill(key_resp_mw_probe_keys, .direction = 'up') %>% 
    fill(key_resp_mw_probe_rt, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(key_resp_parity_corr)) 
  
  return(data_parity)
}

cleaning_data_go_nogo <- function(file) {
  # Secondary task trials
  data_go <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, condition, site,
             trials_nogo_this_trial_n,
             trial_type, stim_color,
             key_resp_distract_keys, key_resp_distract_corr
    )) %>% 
    # Remove extra trials
    filter(!is.na(trial_type)) 

}

cleaning_data_delay <- function(file) {
  # Delayed memory trials
  data_delay <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, condition, site, 
             trial_n_ltm,
             presented_word, presented_serial_position,
             presented_trial_n, 
             target_position, lure_word,
             key_resp_ltm_keys, key_resp_ltm_corr, key_resp_ltm_rt
    )) %>% 
    # Remove extra trials
    filter(!is.na(key_resp_ltm_corr)) %>% 
    mutate(presented_word = tolower(gsub("[[:punct:]]", "", presented_word)))
  
  return(data_delay)
}

# Read Data-----

# Get list of data file names
data_files <- list.files(path = here::here("data", "raw_data", "exp1"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 2300)
  data <- janitor::clean_names(data)

  data_immediate <- cleaning_data_immediate(data)
  alldata_immediate <- rbind(alldata_immediate, data_immediate)
  
  data_parity <- cleaning_data_pj(data)
  alldata_parity <- rbind(alldata_parity, data_parity)
  
  data_go <- cleaning_data_go_nogo(data)
  alldata_go <- rbind(alldata_go, data_go)
  
  data_delay <- cleaning_data_delay(data)
  alldata_delay <- rbind(alldata_delay, data_delay)
  
  # Combine data
  joined_data <- inner_join(data_immediate, data_parity)
  alldata <- rbind(alldata, joined_data)
  
}


write_csv(alldata, here::here("data", "output_data", "exp1", "alldata.csv"))
write_csv(alldata_immediate, here::here("data", "output_data", "exp1", "alldata_immediate.csv"))
write_csv(alldata_delay, here::here("data", "output_data", "exp1", "alldata_delay.csv"))
write_csv(alldata_go, here::here("data", "output_data", "exp1", "alldata_go.csv"))
write_csv(alldata_parity, here::here("data", "output_data", "exp1", "alldata_parity.csv"))

