---
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
type: calendar
---
### Metadata
- Tags:: #📅/W
- Links:: [[<%tp.date.now("gggg-MM", -1)%>]]

[[<%tp.date.now("YYYY-[W]ww", -8)%>]] <== This Week ==> [[<%tp.date.now("YYYY-[W]ww", 6)%>]]
# 📆上週未完成

# 📆Week Plan

# 📆Week Plan Done
- 週計劃完成的移入這裡，日計畫只是參考週，該不該在日列工作。

# 🍁Recap
## Weeks
```dataview
table Rating as ⭐ ,Sentence,Story,headering as ✍
FROM "20.Calendar/21.DailyNotes"
where created>=date(<%tp.date.now("gggg-MM-DD", -1)%>) 
and created <=date(<%tp.date.now("gggg-MM-DD", 6)%>)
sort created
```
## Notes Created Week

```dataview
table 
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as 修改時間
, tags, status,type
FROM ""  and !"20.Calendar"
where created>=date(<%tp.date.now("gggg-MM-DD", -1)%>) 
and created <=date(<%tp.date.now("gggg-MM-DD", 6)%>)
sort file.ctime
```

## Key Metrics
``` tracker
searchType: dvField
searchTarget: Physical, Mental, Emotional
folder: 20.Calendar/21.DailyNotes
startDate: <%tp.date.now("gggg-MM-DD", -1)%>
endDate: <%tp.date.now("gggg-MM-DD", 7)%>
line:
	title: Energy
	yMax: 10
	yAxisLabel: Phys (R) / Ment (B) / Emot (Y)
	lineColor: red, blue ,green
```
# 💗Reflection
- Rating::
- Sentence:: 一句話總結本週。
- Story:: 有什麼故事?
