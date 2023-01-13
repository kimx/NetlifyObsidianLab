---
aliases: [""]
created: 2023-01-03
updated: 2023-01-03
status: 🟩
---
### Metadata
- Tags:: #⚙ 

## 文獻筆記中，是否有需要轉成Card的筆記。
📥
 ```dataview
 table  dateformat(created,"yyyy-MM-dd") as created,card

 from "50.Source" 
 and !"60.Extra"
 where card=false 
 sort file.ctime asc
```

## 卡片筆記中，等待成為🌲的筆記
### 🌱️
 ```dataview
 table  
dateformat(created,"yyyy-MM-dd") as created
 from "30.Cards" 
 and !"60.Extra"
 where contains(tags,"#🗂️/🌱️")
 sort file.ctime asc
```
^be3c0a

### 🌞️
 ```dataview
 table dateformat(created,"yyyy-MM-dd") as created
  from "30.Cards"
  and !"60.Extra"
 where contains(tags,"#🗂️/🌞")
 sort file.ctime asc
```
^be3c0b




