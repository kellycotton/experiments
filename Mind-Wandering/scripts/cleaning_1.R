# Cleaning script 
# Experiment 1a and 1b
# 10/03/22

library(tidyverse)

# Initialize dataframes
alldata <- data.frame(matrix(ncol = 15, nrow = 200))
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
                       "trials_this_n", "block_this_n", "context",
                       "key_resp_load_keys", "key_resp_load_corr", 
                       "cogload_presented",
                       "trials_cogload_this_n")

# Cleaning functions
cleaning_data_wm <- function(file, exp_context) {
  # Working memory trials
  data_wm <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(cognitive_load, change_cond, participant,  
             key_resp_stimulus_keys, key_resp_stimulus_corr, key_resp_stimulus_rt, 
             key_resp_mw_keys, key_resp_mw_rt,
             trials_this_n, block_this_n)) %>% 
    # Add block numbers
    fill(block_this_n, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(key_resp_stimulus_keys)) 
  
  data_wm$context <- exp_context
  
  return(data_wm)
}

cleaning_data_pj <- function(file, exp_context) {
  # Secondary task trials
  data_parity <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(cognitive_load, change_cond, participant, 
             key_resp_load_keys, key_resp_load_corr, # Some participants are missing RT column key_resp_load_rt, 
             cogload_presented,
             trials_cogload_this_n, trials_this_n, block_this_n)) %>% 
    # Add block numbers
    fill(block_this_n, .direction = 'up') %>% 
    # Add trial numbers
    fill(trials_this_n, .direction = 'up') %>% 
    # Add block numbers
    fill(block_this_n, .direction = 'up') %>% 
    # Add trial numbers
    fill(trials_this_n, .direction = 'up') %>% 
    # Add cog_load condition 
    fill(cognitive_load, .direction = 'up') %>% 
    # Add change condition
    fill(change_cond, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(key_resp_load_corr)) 
  
  data_parity$context <- exp_context
  
  return(data_parity)
}

cleaning_data_maas <- function(file, exp_context) {
  # MAAS data
  # Secondary task trials
  data_maas <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, 
             key_resp_mw_q_keys, question)) %>% 
    filter(!is.na(question))
  data_maas$context <- exp_context
  
  return(data_maas)
}

# Online Data-----

# Get list of data file names
data_files <- list.files(path = here::here( "data", "raw_data", "online"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 1109)
  data <- janitor::clean_names(data)
  data$participant <- i
  
  data_wm <- cleaning_data_wm(data, "online")
  alldata_wm <- rbind(alldata_wm, data_wm)
  
  data_parity <- cleaning_data_pj(data, "online")
  alldata_parity <- rbind(alldata_parity, data_parity)
  
  data_maas <- cleaning_data_maas(data, "online")

  # Combine data
  joined_data <- inner_join(data_wm, data_parity, by = c("participant", "cognitive_load", "change_cond", "trials_this_n", "block_this_n", "context"))
  alldata <- rbind(alldata, joined_data)

}

# In-Person Data-----

# Get list of data file names
data_files <- list.files(path = here::here("data", "raw_data", "inperson"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 1109)
  data <- janitor::clean_names(data)
  data$participant <- i+300
  
  data_wm <- cleaning_data_wm(data, "inperson")
  alldata_wm <- rbind(alldata_wm, data_wm)
  
  data_parity <- cleaning_data_pj(data, "inperson")
  alldata_parity <- rbind(alldata_parity, data_parity)
  
  data_maas <- cleaning_data_maas(data, "inperson")
  alldata_maas <- rbind(alldata_maas, data_maas)

  # Combine data
  joined_data <- inner_join(data_wm, data_parity, by = c("participant", "cognitive_load", "change_cond", "trials_this_n", "block_this_n", "context"))
  alldata <- rbind(alldata, joined_data)
  
}

alldata <- filter(alldata, !is.na(participant))
alldata_maas <- alldata_maas %>% 
  mutate(key_resp_mw_q_keys = ifelse(key_resp_mw_q_keys == "None", NA, key_resp_mw_q_keys))

write_csv(alldata, here::here("data", "output_data" ,"alldata_1.csv"))
write_csv(alldata_wm, here::here("data", "output_data" ,"alldata_wm_1.csv"))
write_csv(alldata_parity, here::here("data", "output_data" ,"alldata_parity_1.csv"))
write_csv(alldata_maas, here::here( "data", "output_data" ,"alldata_maas_1.csv"))

