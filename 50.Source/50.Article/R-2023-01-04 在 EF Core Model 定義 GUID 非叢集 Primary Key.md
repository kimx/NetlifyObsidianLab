---
aliases: []
created: 2023-01-04
updated: 2023-01-04
type: article
status: 🟩
---
### Metadata
- Title:: 在 EF Core Model 定義 GUID 非叢集 Primary Key
- URL:: https://blog.darkthread.net/blog/efcore-guid-nonclustered-pk/
- Tags:: #📥️/📰️ 
- Topics:: [[EfCore]]
- Author:: [[@Blackthread]]
- Publish Date:: 2023-01-04

# Highlights & Notes
- 為避免索引破碎引發效能災難，我慣用的解法是<span style="background:#fdbfff">另設自動跳號欄位當叢集索引</span>
- PK 之外增設 SeqNo INT，以 IDENTITY(1,1) 設定自動跳號 FlowId 為 GUID 是 MiniFlow 資料表的 Primary Key，但設定時加註 NONCLUSTERED 指定為非叢集索引 利用 CREATE CLUSTERED INDEX 將 SeqNo 建為叢集索引
- 使用 Code First 也能達成期望的自動跳號叢集索引 + GUID Primary Key 設定

# 自己的話
- Primary Key 用GUID，可以確保資料移植及分散式資料庫設定。
	- 設定非叢集，不會被效能拖挎
- SeqNo 使用自動跳號，設定叢集只是<span style="background:#fdbfff">純為排序及索引效能而生</span>，在欄位沒有任何意義使用。