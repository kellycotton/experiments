#Setup-----

# Load packages
library(plyr)
library(tidyverse)
library(gtsummary)

theme_gtsummary_journal(journal = "jama")

# Read data
# Note: participant numbers in this file do not necessarily match experiment participant numbers
demographics <- read_csv(here::here("CM1", "data", "demographics1.csv"))
colnames(demographics) <- c("Age", "Gender", "Race_Ethnicity", "Handedness", "Colorblindness", "Native_Language", "Participant")

mt <- demographics %>% filter(Participant < 1000)
ug <- demographics %>% filter(Participant > 1000)

table_demo <- mt %>% 
  select(!Participant) %>% 
  mutate(Race_Ethnicity = ifelse(Race_Ethnicity == "White,Asian", "More than one", Race_Ethnicity)) %>% 
  mutate(Race_Ethnicity = ifelse(Race_Ethnicity == "White,Hispanic or Latino", "More than one", Race_Ethnicity)) %>% 
  tbl_summary(
    statistic = list(all_continuous() ~ "{mean} ({min}-{max})",
                     all_categorical() ~ "{n} ({p}%)"),
    digits = all_continuous() ~ 0,
    sort = list(everything() ~ "frequency"),
    label = c(Race_Ethnicity ~ "Race/Ethnicity", Native_Language ~ "Learned English Before Age 5")
  ) %>% 
  modify_header(label ~ "") %>%
  modify_spanning_header(label ~ "**Demographics**") %>% 
  bold_labels() %>% 
  as_gt()

gt::gtsave(table_demo, here::here("CM1", "figures","demographics_mt.png"))

table_demo <- ug %>% 
  select(!Participant) %>% 
  mutate(Race_Ethnicity = ifelse(Race_Ethnicity == "White,Asian", "More than one", Race_Ethnicity)) %>% 
  mutate(Race_Ethnicity = ifelse(Race_Ethnicity == "White,Hispanic or Latino", "More than one", Race_Ethnicity)) %>% 
  tbl_summary(
    statistic = list(all_continuous() ~ "{mean} ({min}-{max})",
                     all_categorical() ~ "{n} ({p}%)"),
    digits = all_continuous() ~ 0,
    sort = list(everything() ~ "frequency"),
    label = c(Race_Ethnicity ~ "Race/Ethnicity", Native_Language ~ "Learned English Before Age 5")
  ) %>% 
  modify_header(label ~ "") %>%
  modify_spanning_header(label ~ "**Demographics**") %>% 
  bold_labels() %>% 
  as_gt()

gt::gtsave(table_demo, here::here("CM1", "figures","demographics_ug.png"))


