- 本週
	- ![[<% moment(tp.file.title,'YYYY-MM-DD').format("YYYY") %>-W<% moment(tp.file.title, "YYYY-MM-DD").format('WW') %>#📆Week Plan]]
- 前一月、下一月
[[<% tp.date.now("YYYY-MM", "P-1M") %>]] <== This Month ==> [[<% tp.date.now("YYYY-MM", "P+1M") %>]]

- Last week: (From Now) <% tp.date.now("YYYY-MM-DD", -7) %>
- Next week: (From Now) <% tp.date.now("YYYY-MM-DD", 7) %>

- 當月最後一天
	- <% tp.date.now("YYYY-MM")%>-<% moment(tp.date.now("YYYY-MM")).daysInMonth()%>
	- <% tp.date.now("YYYY-MM")+"-"+moment(tp.date.now("YYYY-MM")).daysInMonth()%>

# 參考連結
https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html
