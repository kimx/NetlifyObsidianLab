---
aliases: []
created: 2023-01-09
updated: 2023-01-09
type: article
status: 🟩
publish: false
card: 
---
### Metadata
- Title:: 窮人的DevOps
- URL:: https://drive.google.com/file/d/1zlIVCQymHXz8WzQs2o0KqH0Rwgsfh6yb/view
- Tags:: #📥️/📰️ 
- Topics:: [[DevOps]] [[@Robin]]
- Author:: [[@小朱]]
- Publish Date:: 2022-11-15

# Highlights & Notes
- Robin主要提到小朱如何使用Gitlab來做CI/CD
- Ragic: 工單管理，Trigger Gitlab
- Gitlab : 使用CI/CD
- 安裝軟體
	- Ubuntu Linux (Free)
	- Gitlab CE 社群版 (Free)
	- Gitlab CI Runner (Free)
- 訊息平台: Rabbit MQ CE (Free)
# 自己的話
- 小朱將原始檔控制放在自架的gitlab上，要多花一些功夫保存好資料。
- 在有限的資源，運用各Free資源，搭建CI/CD系統。
- Gitlab安裝在Unbuntu ，Runner(其他OS ,Windows)，接收CI分發，執行建置發行。
- Gitlab不支援Windows，本以為透過Docker也可以，但根據[別人的踩雷](https://medium.com/@jyunminghuang/windows%E7%92%B0%E5%A2%83%E4%B8%8B%E5%AE%89%E8%A3%9Dgitlab%E7%9A%84%E5%BF%83%E5%BE%97-%E4%B8%8D%E6%98%AF%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8-6156dd515e74)，雖然可以運行，但資料保存又是另一門功夫，建議最好是以原生Unbuntu來安裝。
	- 後記: 另一篇在docker可行方案 [在 Ubuntu 上使用 Docker 架設 GitLab Server](https://wizigo.tw/gitlab_docker_install/)
