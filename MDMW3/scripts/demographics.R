# Demographic script for MDMW3.1
# 12/12/22

#Setup-----

# Load packages
library(tidyverse)
library(gtsummary)

theme_gtsummary_journal(journal = "jama")

# Read data
demographics <- read_csv(here::here("MDMW3", "data", "output_data", "alldata_demo.csv"))
colnames(demographics) <- c("participant", "Age", "Gender", "Race_Ethnicity", "Handedness", "Colorblindness", "Vision", "Native_Language")

table_demo <- demographics %>% 
  select(!participant) %>% 
  mutate(Race_Ethnicity = ifelse(grepl(",", Race_Ethnicity), "More than one", Race_Ethnicity)) %>% 
  tbl_summary(
    statistic = list(all_continuous() ~ "{mean} ({min}-{max})",
                     all_categorical() ~ "{n} ({p}%)"),
    digits = all_continuous() ~ 1,
    sort = list(everything() ~ "frequency"),
    label = c(Race_Ethnicity ~ "Race/Ethnicity", Native_Language ~ "Learned English Before Age 5")
  ) %>% 
  modify_header(label ~ "") %>%
  modify_spanning_header(label ~ "**Demographics**") %>% 
  bold_labels() %>% 
  as_gt()


gt::gtsave(table_demo, here::here("MDMW3", "figures","demographics.png"))
