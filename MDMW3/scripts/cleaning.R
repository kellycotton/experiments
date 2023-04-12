# Cleaning script for MDMW3.1
# 12/1/22

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
alldata_demo <- data.frame(matrix(ncol = 9, nrow = 0))


colnames(alldata) <- c("participant", "site", "block_type", "word_presented", "serial_position", "trial_n", "block_n",
                       "serial_position_resp", "immediate_test_resp_text", "key_resp_mw_probe_keys", "immediate_accuracy", 
                       "parity_n", "parity_stim", "key_resp_parity_keys", "key_resp_parity_corr", "maas_score")

# Cleaning functions
cleaning_data_immediate <- function(file) {
  # Immediate memory trials
  data_immediate <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, site, 
             block_type,
             word_presented, serial_position,
             trial_n, block_n,
             serial_position_resp, immediate_test_resp_text,
             key_resp_mw_probe_keys)) %>% 
    # Add MW 
    fill(key_resp_mw_probe_keys, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(serial_position) | !is.na(serial_position_resp)) %>% 
    mutate(serial_position = lag(serial_position, n = 4),
           word_presented = lag(word_presented, n = 4)) %>% 
    drop_na(serial_position) %>% 
    mutate(word_presented = str_squish(tolower(gsub("[[:punct:]]", "", word_presented))),
           immediate_test_resp_text = str_squish(tolower(gsub("[[:punct:]]", "", immediate_test_resp_text))),
           immediate_accuracy = ifelse(immediate_test_resp_text == word_presented, 1, 0))

  return(data_immediate)
}

cleaning_data_pj <- function(file) {
  # Secondary task trials
  data_parity <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, site, 
             block_type,
             trial_n, block_n,
             parity_n, parity_stim,
             key_resp_parity_keys, key_resp_parity_corr,
             key_resp_mw_probe_keys)) %>% 
    # Add MW 
    fill(key_resp_mw_probe_keys, .direction = 'up') %>% 
    # Remove practice trials
    filter(!is.na(key_resp_parity_corr)) 
  
  return(data_parity)
}

cleaning_data_go_nogo <- function(file) {
  # Secondary task trials
  data_go <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, site, 
             trials_nogo_this_trial_n,
             trial_type, stim_color,
             key_resp_distract_keys, key_resp_distract_corr#, key_resp_distract_rt # some files don't have this column?
             )) %>% 
    # Remove extra trials
    filter(!is.na(trial_type)) 
  
  return(data_go)
}

# Cleaning functions
cleaning_data_delay <- function(file) {
  # Delayed memory trials
  data_delay <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, site, 
             trial_n_ltm,
             presented_word, presented_serial_position,
             presented_trial_n, presented_block_type,
             target_position, lure_word,
             key_resp_ltm_keys, key_resp_ltm_corr, key_resp_ltm_rt
             )) %>% 
    # Remove extra trials
    filter(!is.na(key_resp_ltm_corr)) %>% 
    mutate(presented_word = tolower(gsub("[[:punct:]]", "", presented_word)))
  
  return(data_delay)
}

cleaning_data_maas <- function(file) {
  # MAAS data
  data_maas <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, 
             slider_maas_response, question)) %>% 
    filter(!is.na(question))

  return(data_maas)
}

cleaning_data_demo <- function(file) {
  data_demo <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(id, age, gender, ethnicity, ethnicity2, 
             handedness, color_blind, vision, native_speaker,
             )) %>% 
    filter(!row_number() %in% c(1,2))
  return(data_demo)
}

# Get list of data file names
data_files <- list.files(path = here::here("MDMW3", "data", "raw_data"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 5000)
  data <- janitor::clean_names(data)

  data_immediate <- cleaning_data_immediate(data)
  alldata_immediate <- rbind(alldata_immediate, data_immediate)
  
  data_parity <- cleaning_data_pj(data)
  alldata_parity <- rbind(alldata_parity, data_parity)
  
  data_go <- cleaning_data_go_nogo(data)
  alldata_go <- rbind(alldata_go, data_go)
  
  data_delay <- cleaning_data_delay(data)
  alldata_delay <- rbind(alldata_delay, data_delay)
  
  data_maas <- cleaning_data_maas(data)
  if (sum(is.na(data_maas$slider_maas_response)) > 0) {
    maas_score <- "NA"
  } else{
    maas_score <- mean(data_maas$slider_maas_response)
  }
  alldata_maas <- rbind(alldata_maas, data_maas)
  
  # Combine data
  joined_data <- inner_join(data_immediate, data_parity, by = c("participant", "trial_n", "block_n", "block_type", 
                                                                "key_resp_mw_probe_keys", "site"))
  joined_data$maas_score <- maas_score
  alldata <- rbind(alldata, joined_data)

}

# Demographic cleaning
# Get list of data file names
data_files <- list.files(path = here::here("MDMW3", "data", "raw_data", "demographics"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 5000)
  data <- janitor::clean_names(data)
  
  data_demo <- cleaning_data_demo(data) 
  alldata_demo <- rbind(alldata_demo, data_demo) %>% 
    group_by(id) %>%
    summarize(across(everything(), ~ .[!is.na(.) & nzchar(trimws(.))][1] )) %>% 
    filter(age != "test")
}

write_csv(alldata, here::here("MDMW3", "data", "output_data", "alldata.csv"))
write_csv(alldata_immediate, here::here("MDMW3", "data", "output_data", "alldata_immediate.csv"))
write_csv(alldata_delay, here::here("MDMW3", "data", "output_data", "alldata_delay.csv"))
write_csv(alldata_go, here::here("MDMW3", "data", "output_data", "alldata_go.csv"))
write_csv(alldata_parity, here::here("MDMW3", "data", "output_data", "alldata_parity.csv"))
write_csv(alldata_maas, here::here("MDMW3", "data", "output_data", "alldata_maas.csv"))
write_csv(alldata_demo, here::here("MDMW3", "data", "output_data", "alldata_demo.csv"))


