# Cleaning script 
# Experiment 2
# 2/1/23

library(tidyverse)

# Initialize dataframes
alldata <- data.frame(matrix(ncol = 16, nrow = 0))
data_immediate <- data.frame(matrix(ncol = 10, nrow = 0))
data_parity <- data.frame(matrix(ncol = 11, nrow = 0))
#data_distract <- data.frame(matrix(ncol = 11, nrow = 0))
data_delay <- data.frame(matrix(ncol = 10, nrow = 0))
alldata_immediate <- data.frame(matrix(ncol = 11, nrow = 0))
alldata_delay <- data.frame(matrix(ncol = 11, nrow = 0))
alldata_parity <- data.frame(matrix(ncol = 5, nrow = 0))
#alldata_distract <- data.frame(matrix(ncol = 5, nrow = 0))

# Cleaning functions
cleaning_data_immediate <- function(file) {
  # Working memory trials
  data_immediate <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, condition, site,
             trial_n, block_n, 
             delay_1, stim_presented, focus_item, central_item,
             disp_angle, resp_angle, err_angle
    )) %>% 
    # Add blocks
    fill(block_n, .direction = 'up') %>% 
    fill(delay_1, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(trial_n)) %>% 
    filter(!is.na(stim_presented)) %>% 
    filter(row_number() > 9)
  
  return(data_immediate)
}

cleaning_data_pj <- function(file) {
  # Secondary task trials
  data_parity <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, condition, site,
             trial_n, block_n, 
             delay_1, parity_i, num_presented,
             parity_resp_keys, parity_resp_corr, parity_resp_rt)) %>% 
    # Add block and delay 
    fill(block_n, .direction = 'up') %>% 
    fill(delay_1, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(parity_resp_corr))%>% 
    filter(row_number() > 9)
  
  return(data_parity)
}

# cleaning_data_distract <- function(file) {
#   # Secondary task trials
#   data_distract <- data %>% 
#     # select only relevant columns for simpler cleaning
#     select(c(participant, condition, site,
#              trials_nogo_this_trial_n,
#              delay_1, distract_onset,
#              key_resp_distract_keys, key_resp_distract_corr
#     )) %>% 
#     # Remove extra trials
#     filter(!is.na(trial_type)) 
#   return(data_distract)
# }

cleaning_data_delay <- function(file) {
  # Delayed memory trials
  data_delay <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, condition, site, 
             trial_n,
             stim_file, focus_item, delay_1,
             disp_angle_ltm, resp_angle_ltm, err_angle_ltm
    )) %>% 
    # Remove extra trials
    filter(!is.na(disp_angle_ltm)) 
  
  return(data_delay)
}

# Read Data-----

# Get list of data file names
data_files <- list.files(path = here::here("data", "raw_data", "exp2"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 2300)
  data <- janitor::clean_names(data)
  
  data_immediate <- cleaning_data_immediate(data)
  alldata_immediate <- rbind(alldata_immediate, data_immediate)
  
  data_parity <- cleaning_data_pj(data)
  alldata_parity <- rbind(alldata_parity, data_parity)
  
  #data_go <- cleaning_data_go_nogo(data)
  #alldata_go <- rbind(alldata_go, data_go)
  
  data_delay <- cleaning_data_delay(data)
  alldata_delay <- rbind(alldata_delay, data_delay)
  
  # Combine data
  joined_data <- inner_join(data_immediate, data_parity)
  alldata <- rbind(alldata, joined_data)
  
}


write_csv(alldata, here::here("data", "output_data", "exp2", "alldata.csv"))
write_csv(alldata_immediate, here::here("data", "output_data", "exp2", "alldata_immediate.csv"))
write_csv(alldata_delay, here::here("data", "output_data", "exp2", "alldata_delay.csv"))
#write_csv(alldata_go, here::here("data", "output_data", "exp1", "alldata_go.csv"))
write_csv(alldata_parity, here::here("data", "output_data", "exp2", "alldata_parity.csv"))

