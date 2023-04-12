# Cleaning script 
# Experiment 2
# 10/03/22

library(tidyverse)

# Initialize dataframes
alldata <- data.frame(matrix(ncol = 17, nrow = 200))
data_wm <- data.frame(matrix(ncol = 10, nrow = 0))
data_parity <- data.frame(matrix(ncol = 11, nrow = 0))
data_maas <- data.frame(matrix(ncol = 4, nrow = 0))
alldata_maas <- data.frame(matrix(ncol = 6, nrow = 0))
alldata_wm <- data.frame(matrix(ncol = 11, nrow = 0))
alldata_parity <- data.frame(matrix(ncol = 5, nrow = 0))

# Rename columns
colnames(alldata) <- c("cognitive_load","change_cond",
                       "participant",
                       "key_resp_stimulus_keys", "key_resp_stimulus_corr", "key_resp_stimulus_rt", 
                       "key_resp_mw_keys", "key_resp_mw_rt",
                       "trial_n", "block_n",
                       "key_resp_load_keys", "key_resp_load_corr", 
                       "cogload_presented",
                       "trials_cogload_1_this_n", "trials_cogload_2_this_n", "trials_cogload_3_this_n", "trials_cogload_4_this_n")

# Cleaning functions
cleaning_data_wm <- function(file) {
  # Working memory trials
  data_wm <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(cognitive_load, change_cond, participant,  
             key_resp_stimulus_keys, key_resp_stimulus_corr, key_resp_stimulus_rt, 
             key_resp_mw_keys, key_resp_mw_rt,
             trial_n, block_n)) %>% 
    # Remove practice trials
    filter(!is.na(key_resp_stimulus_keys)) 
  
  return(data_wm)
}

cleaning_data_pj <- function(file) {
  # Secondary task trials
  data_parity <- data %>% 
    # add block and trial numbers
    fill(block_n, .direction= 'up') %>% 
    fill(trial_n, .direction = 'up') %>% 
    # select only relevant columns for simpler cleaning
    select(c(cognitive_load, change_cond, participant, 
             key_resp_load_keys, key_resp_load_corr, # Some participants are missing RT column key_resp_load_rt, 
             cogload_presented,
             trials_cogload_1_this_n, trials_cogload_2_this_n, trials_cogload_3_this_n, trials_cogload_4_this_n,
             trial_n, block_n)) %>% 
    # Add cog_load condition 
    fill(cognitive_load, .direction = 'up') %>% 
    # Add change condition
    fill(change_cond, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(key_resp_load_corr)) 
  
  return(data_parity)
}

cleaning_data_maas <- function(file) {
  # MAAS data
  # Secondary task trials
  data_maas <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, 
             key_resp_mw_q_keys, question)) %>% 
    filter(!is.na(question))

  return(data_maas)
}

# Get list of data file names
data_files <- list.files(path = here::here( "data", "raw_data", "exp2"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 2000)
  data <- janitor::clean_names(data)
  
  if (! "question" %in% colnames(data)) next # skip files of participants who did not complete experiment

  data_wm <- cleaning_data_wm(data)
  alldata_wm <- rbind(alldata_wm, data_wm)
  
  data_parity <- cleaning_data_pj(data)
  alldata_parity <- rbind(alldata_parity, data_parity)
  
  data_maas <- cleaning_data_maas(data)
  maas_score <- mean(data_maas$key_resp_mw_q_keys)
  
  # Combine data
  joined_data <- inner_join(data_wm, data_parity)
  alldata <- rbind(alldata, joined_data)
  
}


alldata <- filter(alldata, !is.na(participant))

write_csv(alldata, here::here("data", "output_data" ,"alldata_2.csv"))
write_csv(alldata_wm, here::here("data", "output_data" ,"alldata_wm_2.csv"))
write_csv(alldata_parity, here::here("data", "output_data" ,"alldata_parity_2.csv"))
write_csv(alldata_maas, here::here("data", "output_data" ,"alldata_maas_2.csv"))

