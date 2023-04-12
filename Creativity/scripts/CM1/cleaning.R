# CM1 cleaning
#Setup-----

# Load packages
library(plyr)
library(tidyverse)

# Import Gough answers
gough_code <- read_csv(here::here("resources", "Gough_Code.csv"))

# Initialize dataframes
alldata <- data.frame(matrix(ncol = 13, nrow = 500))
alldata_si <- data.frame(matrix(ncol = 5, nrow = 0))
alldata_dr <- data.frame(matrix(ncol = 11, nrow = 0))
alldata_rat <- data.frame(matrix(ncol = 5, nrow = 0))

colnames(alldata) <- c("ID","SI_acc_before","SI_acc_during","SI_rt_before","SI_rt_during",
                       "DR_acc_before","DR_acc_during","DR_rt_before","DR_rt_during",
                       "DR_conf_before","DR_conf_during","GPS_score","RAT_acc")

data_files <- list.files(path = here::here("CM1", "data", "raw_data"), pattern="*.csv", full.names=TRUE)

for (i in 1:length(data_files)) {
  data <- read_csv(data_files[i], guess_max = 5000)
  data$participant = i
  data_si <- data %>% 
    select(c(participant, presentation, key_resp_si.corr, key_resp_si.keys, key_resp_si.rt)) %>% 
    filter(!is.na(key_resp_si.corr))
  alldata_si <- rbind(alldata_si,data_si)
  
  alldata$ID[i] <- data_si$participant[1]
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
  alldata$DR_conf_before[i] = mean(abs(subset(data_dr$confidence,data_dr$PresentationCondition=="before")))
  alldata$DR_conf_during[i] = mean(abs(subset(data_dr$confidence,data_dr$PresentationCondition=="during")))
  
  data_gough <- data %>%
    select(c(contains("gough"), Trait)) %>% 
    inner_join(gough_code, by="Trait") %>%
    mutate(points = ifelse(key_resp_gough.keys == "y",Score,0))
  
  alldata$GPS_score[i] = sum(data_gough$points)
  
  data_rat <- data %>% 
    select(c(participant, textInput, PresentedItems, CorrectAnswer_RAT)) %>% 
    filter(!is.na(CorrectAnswer_RAT)) 
  data_rat$textInput <- as.character(data_rat$textInput)
  data_rat$CorrectAnswer_RAT <- as.character(data_rat$CorrectAnswer_RAT)
  data_rat <- data_rat %>%
    replace_na(list(textInput="")) %>%
    mutate(textInput = ifelse(textInput == "sugasr", "sugar", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "hony", "honey", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "based", "base", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "rac", "race", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "candke", "candle", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "safetypin", "pin", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "girl scout", "girl", textInput)) %>%
    mutate(textInput = ifelse(textInput == "figure skate", "figure", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "caot", "coat", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "faur", "fair", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "horserace", "race", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "streetapostrophe", "street", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "after shake", "after", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "showe", "shower", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "honeycomb", "honey", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "cheesecake", "cheese", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "shopping cart", "cart", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "gas maskl", "gas", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "sleeping bag", "bag", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "forrest", "forest", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "oney", "honey", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "dinning table", "table", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "soao", "soap", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "girl slash", "girl", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "sope", "soap", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "gols", "gold", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "oin", "pin", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "icecream", "ice", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "superstar", "super", textInput)) %>% 
    mutate(textInput = ifelse(textInput == "e shower", "shower", textInput)) %>% 
    mutate(accuracy_rat = ifelse(textInput==CorrectAnswer_RAT,1,                                 
                                 ifelse(CorrectAnswer_RAT == "school     court" & textInput %in% c("school", "court"), 1, 0)))
  alldata$RAT_acc[i] = sum(data_rat$accuracy_rat)
  alldata_rat <- rbind(alldata_rat,data_rat)
}

colnames(alldata_dr)[1] <- "ID"

alldata <- alldata %>%
  mutate(DR_difference = DR_acc_before - DR_acc_during) %>%
  mutate(SI_difference = SI_acc_before - SI_acc_during) %>%
  mutate(DR_acc_mean = rowMeans(select(alldata,starts_with("DR_acc")),na.rm = TRUE)) %>%
  mutate(SI_acc_mean = rowMeans(select(alldata,starts_with("SI_acc")),na.rm = TRUE)) %>%
  mutate(RAT_score = ifelse(RAT_acc > 7, "high", "low")) %>%
  mutate(DR_conf_difference = DR_conf_before - DR_conf_during) %>%
  mutate(DR_conf_mean = rowMeans(select(alldata,starts_with("DR_conf")),na.rm = TRUE))

alldata <-alldata %>% filter(!is.na(ID))
alldata$ID <- as.factor(alldata$ID)
alldata_dr$ID <- as.factor(alldata_dr$ID)

write_csv(alldata, here::here("CM1", "data", "output_data" ,"alldata_summary.csv"))
write_csv(alldata_dr, here::here("CM1", "data", "output_data" ,"alldata_dr.csv"))
write_csv(alldata_rat, here::here("CM1", "data", "output_data" ,"alldata_rat.csv"))
write_csv(alldata_si, here::here("CM1", "data", "output_data" ,"alldata_si.csv"))

