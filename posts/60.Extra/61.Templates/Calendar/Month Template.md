---
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
type: calendar
---
### Metadata
- Tags:: #📅/M
- Links:: [[<%tp.date.now("gggg", -1)%>]]

[[<% tp.date.now("YYYY-MM", "P-1M") %>]] <== This Month ==> [[<% tp.date.now("YYYY-MM", "P+1M") %>]]

# 📆上月未完成

# 📆Month Plan

# 📆Month Plan Done
- 

# 🍁Recap
## Weeks
```dataview
table Rating as ⭐ ,Sentence,Story
FROM "20.Calendar/22.WeeklyNotes"
where created>=date(<%tp.date.now("gggg-MM")%>-01) 
and created <=date(<% tp.date.now("YYYY-MM")+"-"+moment(tp.date.now("YYYY-MM")).daysInMonth()%>)
sort created
```
## Notes Created Month
```dataview
CALENDAR date(created)
from ""
where created >=date(<%tp.date.now("gggg-MM")%>-01) 
and created <=date(<% tp.date.now("YYYY-MM")+"-"+moment(tp.date.now("YYYY-MM")).daysInMonth()%>) 
```

```dataview
table dateformat(file.ctime, "yyyy-MM-dd HH:mm") as 建檔時間,
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as 修改時間
, tags, status,type
FROM ""  and !"20.Calendar"
where created>=date(<%tp.date.now("gggg-MM")%>-01) 
and created <=date(<% tp.date.now("YYYY-MM")+"-"+moment(tp.date.now("YYYY-MM")).daysInMonth()%>)
sort file.ctime
```

## Habit
```dataview
TABLE WITHOUT ID
  file.link as Date,
  choice(Exercise >= 15, "✅", "❌") as Exercise,
  choice(Reading > 15, "✅", "❌") as Reading,
  choice(Learning >= 15, "✅", "❌") as Learning,
  choice(Meditation >= 10, "✅", "❌") as Meditation,
  choice(Game <= 10, "✅", "❌") as Game
FROM "20.Calendar/21.DailyNotes"
where created>=date(<%tp.date.now("gggg-MM")%>-01) 
and created <=date(<% tp.date.now("YYYY-MM")+"-"+moment(tp.date.now("YYYY-MM")).daysInMonth()%>)
sort created
```

## Key Metrics
``` tracker
searchType: dvField
searchTarget: Physical, Mental, Emotional
folder: 20.Calendar/21.DailyNotes
startDate: <%tp.date.now("gggg-MM")%>-01
endDate: <% tp.date.now("YYYY-MM")+"-"+moment(tp.date.now("YYYY-MM")).daysInMonth()%>
line:
	title: Energy
	yMax: 10
	yAxisLabel: Phys (R) / Ment (B) / Emot (Y)
	lineColor: red, blue ,green
```
# 💗Reflection
- Rating::
- Sentence::  
- Story:: 
