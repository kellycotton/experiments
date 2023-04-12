# Cleaning script 
# Experiment 3
# 4/12/23

library(tidyverse)

# Initialize dataframes
data_immediate <- data.frame(matrix(ncol = 10, nrow = 0))
alldata_immediate <- data.frame(matrix(ncol = 11, nrow = 0))

# Cleaning functions
cleaning_data_immediate <- function(file) {
  # Working memory trials
  data_immediate <- data %>% 
    # select only relevant columns for simpler cleaning
    select(c(participant, condition, site,
             trial_n, block_n, 
             trial_type, serial_position_test, test_position,
             key_resp_test_corr, key_resp_test_keys, key_resp_test_rt)) %>% 
    # Remove practice trials
    filter(block_n > 0) %>% 
    filter(!is.na(serial_position_test)) 
  
  return(data_immediate)
}

# Read Data-----

# Get list of data file names
data_files <- list.files(path = here::here("data", "raw_data", "exp3"), pattern="*.csv", full.names=TRUE)

# Load in the data from each file
for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 2300)
  data <- janitor::clean_names(data)
  
  data_immediate <- cleaning_data_immediate(data)
  alldata_immediate <- rbind(alldata_immediate, data_immediate)
  
}


write_csv(alldata_immediate, here::here("data", "output_data", "exp3", "alldata_immediate.csv"))

