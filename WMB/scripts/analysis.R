library(tidyverse)

df_1 <- read_csv(here::here("data_1-3", "combined_1-3.csv")) 
df_2 <- read_csv(here::here("data_2-5", "combined_2-5.csv")) 

df_1 <- df_1 %>% 
  filter(!is.na(experiment_trials.thisRepN)) %>% 
  filter(participant != "participant") %>% 
  select(c("key_resp.corr", "key_resp.rt", "stimuli_block", "stimuli_change", "setsize", "date")) %>% 
  mutate(probe = "Single Probe")

df_2 <- df_2 %>% 
  filter(!is.na(experiment_trials.thisRepN)) %>% 
  filter(participant != "participant") %>% 
  select(c("key_resp.corr", "key_resp.rt", "stimuli_block", "stimuli_change", "setsize", "date")) %>% 
  mutate(probe = "Whole Array")

df <- rbind(df_1, df_2)

df$key_resp.corr <- as.numeric(as.character(df$key_resp.corr))
df$key_resp.rt <- as.numeric(as.character(df$key_resp.rt))

# Add subject ID numbers back in
df$sub <- df %>% 
  group_by(date) %>% 
  group_indices(date) 

df <- select(df, -date)

trial_count <- df %>% 
  group_by(sub) %>% 
  count()

df_new <- df %>% 
  rename(acc = key_resp.corr,
         rt = key_resp.rt,
         cond = stimuli_block,
         ss = setsize,
         sub = sub, 
         probe = probe,
         stim = stimuli_change) %>% 
  mutate(cond = ifelse(cond == "shape_or_color" & stim == "shape", "color_or_shape_shape", 
                       ifelse(cond == "shape_or_color" & stim == "color", "color_or_shape_color",
                              ifelse(cond == "shape_or_color" & stim == "none", "color_or_shape_same", cond))))  
df_new$cond <- factor(df_new$cond, levels = c("color", "shape", "color_or_shape_color", "color_or_shape_shape", "color_or_shape_same", "shape_and_color"))
#df_new$cond <- factor(df_new$cond, levels = c("color", "shape", "shape_or_color", "shape_and_color"))

df_new <- filter(df_new, (rt >= .300 & rt <= 3.500)) 

df_new %>% 
  group_by(sub, cond, ss, probe) %>% 
  summarise(mean_acc = mean(acc)) %>% 
  ggplot(aes(x = cond, y = mean_acc, shape = cond)) +
  geom_jitter(position=position_jitter(0.25), alpha=.5) +
  stat_summary(fun.data = mean_se, geom = "errorbar", color = "black", width=.5) +
  stat_summary(fun = mean, geom = "point", color = "red", shape = 19, size = 2) +
  stat_summary(fun = median, geom = "point", color = "blue", shape = 4, size = 3) +
  facet_grid(rows = vars(probe), cols = vars(ss), scales = "free") +
  geom_hline(yintercept = .5, color = "red") +
  coord_cartesian(ylim = c(0,1)) +
  scale_color_grey() +
  scale_x_discrete(labels = c("Color Only", "Shape Only", "Either\nColor", "Either\nShape", "Either\nSame", "Binding \nColor & Shape")) +
  #scale_x_discrete(labels = c("Color Only", "Shape Only", "Either", "Binding \nColor & Shape")) +
  theme_classic() +
  theme(legend.position="none",
        panel.border = element_rect("black", fill = NA)) +
  labs(caption = "bars are se; blue x=mdn; red circle=mean") +
  ylab("Mean Accuracy") + xlab("Condition") +
  ggtitle("WMB RT Filtered")

ggsave(here::here("plot_filtered.png"), width = 9, units = "in")
