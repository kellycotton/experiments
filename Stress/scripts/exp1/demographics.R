# Demographic script for SM1
# 2/9/23

#Setup-----

# Load packages
library(tidyverse)
library(gtsummary)

theme_gtsummary_journal(journal = "jama")

# Read data
demographics <- read_csv(here::here("data", "exp1", "output_data", "alldata_demo.csv"))
colnames(demographics) <- c("Age", "Gender", "Race_Ethnicity", "Handedness", "Colorblindness", "Native_Language", "Participant", "Group")

demographics$Race_Ethnicity <- gsub("[[:punct:]]", "", demographics$Race_Ethnicity)
demographics$Race_Ethnicity <- sapply(demographics$Race_Ethnicity, function(x) paste(unique(unlist(str_split(x," "))), collapse = ", "))

questions <- read_csv(here::here("data", "exp1", "output_data", "alldata_qs.csv"))
colnames(questions) <- c("BAI Score", "Participant", "Group", "DASS Score (Anxiety)", "DASS Score (Depression)", "DASS Score (Stress)", "PSS Score")

# Demographics Table ----
table_demo <- demographics %>% 
  select(c(Age, Gender, Race_Ethnicity)) %>% 
  mutate(Gender = case_when(
    Gender == 1 ~ "Men",
    Gender == 2 ~ "Women",
    Gender == 3 ~ "Other", 
    Gender == 4 ~ "Unknown"
  ),
  Age = as.numeric(Age),
  Race_Ethnicity = case_when(
    str_detect(Race_Ethnicity, ",") ~ "More than one",
    Race_Ethnicity == 1 ~ "White",
    Race_Ethnicity == 2 ~ "Black or African American",
    Race_Ethnicity == 3 ~ "Hispanic, Latino, or Spanish Origin",
    Race_Ethnicity == 4 ~ "Asian",
    Race_Ethnicity == 5 ~ "Native American or Alaskan Native",
    Race_Ethnicity == 6 ~ "Hawaiian Native or Pacific Islander",
    Race_Ethnicity == 7 ~ "More than one",
    Race_Ethnicity == 8 ~ "Other",
    Race_Ethnicity == 9 | is.na(Race_Ethnicity) | Race_Ethnicity == "NA" ~ "Unknown"
  )) %>% 
  tbl_summary(
    statistic = list(all_continuous() ~ "{mean} ({min}-{max})",
                     all_categorical() ~ "{n} ({p}%)"),
    digits = all_continuous() ~ 0,
    sort = list(everything() ~ "frequency"),
    label = c(Race_Ethnicity ~ "Race/Ethnicity")
  ) %>% 
  modify_header(label ~ "") %>%
  modify_spanning_header(label ~ "**Demographics**") %>% 
  bold_labels() %>% 
  as_gt()

gt::gtsave(table_demo, here::here("figures","demographics_1.png"))

# Questionnaire Table ----
table_qs <- questions %>% 
  select(-c(Participant)) %>% 
  mutate(Group = case_when(
    Group == 1 ~ "High Stress",
    Group == 2 ~ "Low Stress",
    Group == 3 ~ "No Stress"
  )) %>% 
  mutate(Group = factor(Group, levels = c("No Stress", "Low Stress", "High Stress"))) %>% 
  tbl_summary(
    by = Group,
    statistic = list(all_continuous() ~ "{mean} ({sd})",
                     all_categorical() ~ "{n} ({p}%)"),
    digits = all_continuous() ~ 1,
    sort = list(everything() ~ "frequency"),
    #label = c(Race_Ethnicity ~ "Race/Ethnicity")
  ) %>% 
  modify_header(label ~ "") %>%
  #modify_spanning_header(label ~ "**Demographics**") %>% 
  bold_labels() %>% 
  as_gt()

gt::gtsave(table_qs, here::here("figures","questions_1.png"))

