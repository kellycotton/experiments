# CM2 cleaning
#Setup-----

# Load packages
library(plyr)
library(tidyverse)

# Import REI code
rei_code <- read_csv(here::here("resources", "REI.csv"))

# Initialize dataframes
alldata <- data.frame(matrix(ncol = 17, nrow = 200))
alldata_si <- data.frame(matrix(ncol = 5, nrow = 0))
alldata_dr <- data.frame(matrix(ncol = 11, nrow = 0))
alldata_rat <- data.frame(matrix(ncol = 5, nrow = 0))
alldata_au <- data.frame(matrix(ncol = 6, nrow = 0))
alldata_rei <- data.frame(matrix(ncol = 4, nrow = 0))


# Rename columns
colnames(alldata) <- c("ID","ExpVersion", "SI_acc_before","SI_acc_during","SI_rt_before","SI_rt_during",
                       "DR_acc_before","DR_acc_during","DR_rt_before","DR_rt_during",
                       "DR_conf_before","DR_conf_during", 
                       "Problem_Condition", 
                       "REI_experiential_ability", "REI_experiential_engagement", "REI_rational_ability", "REI_rational_engagement")

# Get list of data file names
data_files <- list.files(path = here::here("CM2", "data", "raw_data", "sub_data"), pattern="*.csv", full.names=TRUE)

for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 1109)
  data <- data %>% 
    plyr::rename(replace = c(PresentedItems_math="CorrectAnswer_math"), warn_missing = FALSE)
  data_si <- data %>% 
    select(c(participant, expName, presentation, key_resp_si.corr, key_resp_si.keys, key_resp_si.rt)) %>% 
    filter(!is.na(key_resp_si.corr))
  alldata_si <- rbind(alldata_si,data_si)

  alldata$ID[i] <- data_si$participant[1]
  alldata$ExpVersion[i] <- data_si$expName[1]
  
  alldata$SI_acc_before[i] = mean(subset(data_si$key_resp_si.corr,data_si$presentation=="before"))
  alldata$SI_acc_during[i] = mean(subset(data_si$key_resp_si.corr,data_si$presentation=="during"))
  alldata$SI_rt_before[i] = mean(subset(data_si$key_resp_si.rt,data_si$presentation=="before"), na.rm = TRUE)
  alldata$SI_rt_during[i] = mean(subset(data_si$key_resp_si.rt,data_si$presentation=="during"), na.rm = TRUE)
  
  data_dr <- data %>% 
    select(c(participant, expName, c(TargetWord, TargetTextDisplayed, DistractorWord, PresentationCondition,
                                                   TargetPosition, DistractorPosition, 
                                                   slider_right.response, slider_right.rt, slider_left.response, slider_left.rt))) %>% 
    mutate(slider_right.response = as.numeric(slider_right.response),
           slider_left.response = as.numeric(slider_left.response),
           slider_right.rt = as.numeric(slider_right.rt),
           slider_left.rt = as.numeric(slider_left.rt),
           confidence = coalesce(slider_right.response, slider_left.response),
           confidence_rt = coalesce(slider_right.rt,slider_left.rt),
           TargetPosition = recode(TargetPosition, "[0.25,0]" = "right", "[-0.25,0]" = "left"),
           DistractorPosition = recode(DistractorPosition, "[0.25,0]" = "right", "[-0.25,0]" = "left"),
           choice = ifelse(confidence > 0, "right", "left"),
           accuracy = ifelse(choice==TargetPosition,1,0)
           ) %>% 
    select(-c(slider_right.response, slider_right.rt, slider_left.response, slider_left.rt)) %>% 
  filter(!is.na(accuracy))
  alldata_dr <- rbind(alldata_dr,data_dr)
  
  alldata$DR_acc_before[i] = mean(subset(data_dr$accuracy,data_dr$PresentationCondition=="before"))
  alldata$DR_acc_during[i] = mean(subset(data_dr$accuracy,data_dr$PresentationCondition=="during"))
  alldata$DR_rt_before[i] = mean(subset(data_dr$confidence_rt,data_dr$PresentationCondition=="before"), na.rm = TRUE)
  alldata$DR_rt_during[i]  = mean(subset(data_dr$confidence_rt,data_dr$PresentationCondition=="during"), na.rm = TRUE)
  alldata$DR_conf_before[i] = mean(abs(subset(data_dr$confidence,data_dr$PresentationCondition=="before")), na.rm = TRUE)
  alldata$DR_conf_during[i] = mean(abs(subset(data_dr$confidence,data_dr$PresentationCondition=="during")), na.rm = TRUE)
  
  data_rei <- data %>%  
    select(c(participant, expName, key_resp_rei.keys, key_resp_rei.rt, rei_question)) %>% 
    filter(complete.cases(.)) %>% 
    inner_join(., rei_code) %>% 
    mutate(rating = case_when(
      (scoring == "-" & key_resp_rei.keys == 5) ~ 1, 
      (scoring == "-" & key_resp_rei.keys == 4) ~ 2, 
      (scoring == "-" & key_resp_rei.keys == 2) ~ 4, 
      (scoring == "-" & key_resp_rei.keys == 1) ~ 5, 
      TRUE ~ key_resp_rei.keys
    )) %>% 
    group_by(participant, expName, scale) %>% 
    dplyr::summarise(rei_score = mean(rating)) %>% 
    pivot_wider(names_from = scale,
                values_from = rei_score)
  #alldata_rei <- rbind(alldata_rei, data_rei)
  alldata$REI_experiential_ability[i] <- data_rei$experiential_ability
  alldata$REI_experiential_engagement[i] <- data_rei$experiential_engagement
  alldata$REI_rational_ability[i] <- data_rei$rational_ability
  alldata$REI_rational_engagement[i] <- data_rei$rational_engagement
  
  data_au <- data %>%
    select(c(participant, expName, Problem_Condition, textInput_problem, PresentedItems_au, CorrectAnswer_math)) %>%
    filter(ifelse(Problem_Condition == "creative", complete.cases(.), complete.cases(CorrectAnswer_math)))
  alldata_au <- rbind(alldata_au, data_au)
  
  alldata$Problem_Condition[i] <- data_au$Problem_Condition[1]
  
  data_rat <- data %>%
    select(c("participant","textInput", "PresentedItems", "CorrectAnswer_RAT")) %>%
    filter(!is.na(CorrectAnswer_RAT))

  data_rat <- data_rat %>%
    mutate(textInput = as.character(textInput)) %>% 
    replace_na(list(textInput="")) %>%
    mutate(textInput = ifelse(textInput == "soar", "sore", textInput)) %>%
    mutate(textInput = ifelse(textInput == "horse races", "race", textInput)) %>%
    mutate(textInput = ifelse(textInput == "book shelf", "book", textInput)) %>%
    mutate(textInput = ifelse(textInput == "cat calling", "call", textInput)) %>%
    mutate(textInput = ifelse(textInput == "statio", "station", textInput)) %>%
    mutate(textInput = ifelse(textInput == "sala", "salad", textInput)) %>%
    mutate(textInput = ifelse(textInput == "coffe", "coffee", textInput)) %>%
    mutate(textInput = ifelse(textInput == "poweder", "powder", textInput)) %>%
    mutate(textInput = ifelse(textInput == "banl", "bank", textInput)) %>%
    mutate(textInput = ifelse(textInput == "stright", "straight", textInput)) %>%
    mutate(textInput = ifelse(textInput == "chesse", "cheese", textInput)) %>%
    mutate(textInput = ifelse(textInput == "night watch", "watch", textInput)) %>%
    mutate(textInput = ifelse(textInput == "saop boil", "soap", textInput)) %>%
    mutate(textInput = ifelse(textInput == "keynote", "key", textInput)) %>%
    mutate(textInput = ifelse(textInput == "figur", "figure", textInput)) %>%
    mutate(textInput = ifelse(textInput == "appl", "apple", textInput)) %>%
    mutate(textInput = ifelse(textInput == "flower girl", "girl", textInput)) %>%
    mutate(textInput = ifelse(textInput == "summer camp", "camp", textInput)) %>%
    mutate(textInput = ifelse(textInput == "forrest", "forest", textInput)) %>%
    mutate(textInput = ifelse(textInput == "makr", "mark", textInput)) %>%
    mutate(textInput = ifelse(textInput == "writter", "writer", textInput)) %>%
    mutate(textInput = ifelse(textInput == "ics", "ice", textInput)) %>%
    mutate(textInput = ifelse(textInput == "parties", "party", textInput)) %>%
    mutate(textInput = ifelse(textInput == "tran", "trap", textInput)) %>%
    mutate(textInput = ifelse(textInput == "superstar", "super", textInput)) %>%
    mutate(accuracy_rat = ifelse(textInput==CorrectAnswer_RAT,1,
                                 ifelse(CorrectAnswer_RAT == "school     court" & textInput %in% c("school", "court"), 1, 0)))
  alldata$RAT_acc[i] = sum(data_rat$accuracy_rat)
  alldata_rat <- rbind(alldata_rat,data_rat)
}


colnames(alldata_dr)[1] <- "ID"

alldata <- alldata %>%
  mutate(DR_difference = DR_acc_before - DR_acc_during,
         SI_difference = SI_acc_before - SI_acc_during,
         DR_acc_mean = rowMeans(select(alldata, starts_with("DR_acc")), na.rm = TRUE),
         SI_acc_mean = rowMeans(select(alldata,starts_with("SI_acc")),na.rm = TRUE),
         DR_conf_difference = DR_conf_before - DR_conf_during,
         DR_conf_mean = rowMeans(select(alldata,starts_with("DR_conf")), na.rm = TRUE))

alldata <-alldata[complete.cases(alldata),]
alldata$ID <- as.factor(alldata$ID)
alldata_dr$ID <- as.factor(alldata_dr$ID)

alldata_dr <- alldata_dr %>% 
  filter(DistractorWord != "Hello World")

write_csv(alldata, here::here("CM2", "data", "output_data" ,"alldata_summary.csv"))
write_csv(alldata_dr, here::here("CM2", "data", "output_data" ,"alldata_dr.csv"))
write_csv(alldata_si, here::here("CM2", "data", "output_data" ,"alldata_si.csv"))
write_csv(alldata_au, here::here("CM2", "data", "output_data" ,"alldata_au.csv"))
write_csv(alldata_rat, here::here("CM2", "data", "output_data" ,"alldata_rat.csv"))