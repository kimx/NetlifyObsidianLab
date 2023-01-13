---
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
type: calendar
headering: 
- "[[<%tp.file.title%>##Accomplishments|✅]] [[<%tp.file.title%>##Gratitude|🙏]]"
- "[[<%tp.file.title%>##Thoughts|🧠]] [[<%tp.file.title%>##Obstacles|🚧]]"
---
### Metadata
- Tags:: #📅/D
- Links:: [[<% moment(tp.file.title,'YYYY-MM-DD').format("YYYY") %>-W<% moment(tp.file.title, "YYYY-MM-DD").add(-1,'days').week() %>]]

<< [[<% moment(tp.file.title,'YYYY-MM-DD').add(-1,'days').format("YYYY-MM-DD") %>]]  | [[<% moment(tp.file.title,'YYYY-MM-DD').add(1,'days').format("YYYY-MM-DD") %>]] >>

# 🌞 Morning Routine
- [ ] 工時/明細表/帳本填寫
- [ ] 完成前一天日誌
- [ ] Email 、 Feedly 文章
- [ ] 整理Notion
- [ ] 決定昨天的工作事項什麼要移過來今天，以及什麼事情要放棄
- [ ] 看一下週、月誌有什麼事情可以今天作
<%* if (tp.date.now("ddd") == "Mon") { %>
- [ ] 建立週筆記
<%* } %>
<%* if (tp.date.now("D") == 1) { %>
- [ ] 建立月筆記
<%* } %>

# 📝To Do's
##  今日事項

##  未完成事項

## 待處理事項
- 今天臨時的記錄，以利明天檢視是否執行。

# 💡Reminder
![[<%tp.date.now("gggg-MM", -1)%>#📆Month Plan]]
![[<% moment(tp.file.title,'YYYY-MM-DD').format("YYYY") %>-W<% moment(tp.file.title, "YYYY-MM-DD").format('WW') %>#📆Week Plan]]
![[<%moment(tp.file.title,'YYYY-MM-DD').add(-1,'days').format("YYYY-MM-DD")%>#未完成事項]]
![[<%moment(tp.file.title,'YYYY-MM-DD').add(-1,'days').format("YYYY-MM-DD")%>#待處理事項]]


# 📑Notes
## Created Today

```dataview
table 
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as 修改時間
, tags, status
FROM ""  and !"20.Calendar"
WHERE created=date(<% moment(tp.file.title,'YYYY-MM-DD').format("YYYY-MM-DD") %>)
```
## Modified Today
```dataview
table 
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as 修改時間
, tags, status
FROM ""  and !"20.Calendar"
WHERE file.mday = date(<% moment(tp.file.title,'YYYY-MM-DD').format("YYYY-MM-DD") %>)
SORT file.mtime DESC
Limit 20
```
<%* if (tp.date.now("ddd") != "Fri" &&　tp.date.now("ddd") != "Sat"　&& tp.date.now("ddd") != "Sun") { %>
# 🌃 Night Routine
- [ ] 通勤學英語20分鐘
- [ ] 日語學習20分鐘
- [ ] 運動20分鐘
- [ ] 打坐20分鐘
<%* } %>

# ☕️Journals
## Gratitude
- 

## Reflection
- Rating::
- Sentence:: 一句話總結今天。
- Story:: 有什麼故事?

## Energies
- Physical:: 
- Mental:: 
- Emotional:: 
## Habit
- Exercise::
- Reading::
- Learning::
- Meditation::
- Game::

## Accomplishments
- 
## Obstacles
- 
## Thoughts
- 

