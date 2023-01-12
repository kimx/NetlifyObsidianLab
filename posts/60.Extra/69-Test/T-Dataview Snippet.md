---
created: 2022-12-29
updated: 2022-12-29
---
## DataViewJs Test
```dataviewjs
function test (){
alert('test');
}

```


## Robin Brita
- Brita:: 2023-11-11
``` dataview
table dateformat(Brita,"yyyy-MM-dd")  as Brita

where Brita !=null
```

## 找出該筆記的task
```dataview
task
where file.name="2022-12-28"
```

## Weekly Recap
```dataview
table Rating as ⭐ ,Sentence,Story,headering as ✍
FROM "20.Calendar/21.DailyNotes"
where created>=date(2022-12-25) 
and created <=date(2022-12-31)
```

###測試Metadata Yaml

```dataview
table status
from ""
where status ="#🌱"
```


```dataview
table status
from ""
where noteType ="#status/🌱"
```




### 找出最近一周內新增或修改的筆記
```dataview
table dateformat(file.ctime, "yyyy-MM-dd HH:mm") as 建檔時間,
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as 修改時間
  ,dateformat(created,"yyyy-MM-dd") as created
from ""
where file.mtime>=date(2022-10-03) 
  and !contains(file.name, "template-") 
  and !contains(file.name, "!query-")
  and !contains(file.name, "202")
sort file.mtime desc
```
### 找出 tag名稱，本年內新增或修改的筆記
```dataview
table dateformat(file.ctime, "yyyy-MM-dd HH:mm") as 建檔時間,
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as 修改時間
from #🌱 
where file.mtime>=date(2022-01-01) 
  and !contains(file.name, "template-") 
  and !contains(file.name, "!query-")
  and !contains(file.name, "202")
sort file.mtime desc
```

## Calendar
```dataview
CALENDAR file.ctime
from "200.Calendar/01.Daily Notes"
```

--- Calendar by created
```dataview
CALENDAR date(created)
FROM "20.Calendar/21.DailyNotes"
where date(created) >=date(2022-12-01) 
and date(created) <=date(2022-12-31) 
```
