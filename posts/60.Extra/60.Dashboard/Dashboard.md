# ✅ 任務清單
  ## 🗓️本日待辦
```tasks
path does not include 60.Extra
not done
heading does not include 🌞 Morning Routine
due today
sort by description
```

## 🗓️過期待辦
```tasks
not done
path does not include 60.Extra

heading does not include 🌞 Morning Routine
due before today
sort by due
```

## 🗓️本週待辦
```tasks
not done
path does not include 60.Extra
heading does not include 🌞 Morning Routine
due after today
due before in 1 week
sort by due
```

## 🗓️未排程
```tasks
not done
no due date
path does not include 60.Extra
heading does not include 🌞 Morning Routine
heading does not include 🌃 Night Routine
sort by path
limit 20
```

# 🗒 未完成的筆記
```dataview
table 
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as 修改時間
, tags, status ,type
FROM ""  
and !"60.Extra"
and !"20.Calendar"
and !"40.MOC"
where status !="🟩"
sort file.ctime
```

# 📊儲存庫資訊
- 📈 States
	-  File Count: `$=dv.pages().length`
	-  Obsidian: `$=dv.pages('#obsidian').length`
	-  AutoHotkey: `$=dv.pages('#autohotkey').length`
	-  Tool: `$=dataview.pages('#tool').length`
	-  Calendar Notes: `$=dv.pages('"200.Calendar"').length`
## 💎 Obsidian相關
- 🔖 Obsidian參考網頁
	- [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)
	- [Admonition](https://github.com/valentine195/obsidian-admonition)
	- [Advanced URI](https://vinzent03.github.io/obsidian-advanced-uri/)
- ⚙️ Obsidian快速設定
	- [Apperance](obsidian://advanced-uri?settingid=appearance)
	- [Hotkeys](obsidian://advanced-uri?settingid=hotkeys)
	- [Plugins](obsidian://advanced-uri?settingid=community_plugins)
	- [QuickAdd](obsidian://advanced-uri?settingid=quickadd)
	- [Style Settings](obsidian://advanced-uri?settingid=obsidian-style-settings)
- 📝 Obsidian常用筆記
	- [[C-我的Obsidian筆記使用方式]]
	- [[C-我的Obsidian標籤及狀態]]
	- [[C-我的Obsidian快捷鍵]]

# 📃常用網頁
- Corex - QAS
	- [Jenkins](http://ci-qas.bud4.net/)
	- [ERP Dev](https://dev.bud4.net/)
	- [ERP QAS Admin](https://qas.bud4.net/)
	- [ERP QAS Corex](http://corex.bud4.net/)
- Corex - PRD
	-  [Jenkins](http://ci.bud4.net:8088/)
	- [Ninja](https://app.ninjarmm.com/)
	- [ERP PRD 1001 Admin](http://m1-prd-admin.bud4.net/)
	- [ERP PRD Corex Admin](http://m1-prd-corex-admin.bud4.net/)