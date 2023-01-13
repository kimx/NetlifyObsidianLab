---
created: 2023-01-05
updated: 2023-01-05
status: 🟩
type: issue
publish: true
---

### Metadata
- Tags:: #✅/🟩 #💝
- Topics:: [[Webex]] [[Software]] [[Ssl]] [[Notion]]

# 問題
-  加入會議出現SSL憑證錯誤，進入後，看不到主持人的畫面。
	- ![upgit_20230105_1672899775.png|400](https://raw.githubusercontent.com/kimx/ObsidianAssets/master/2023/01/upgit_20230105_1672899775.png)


# 原因
- 到[webex help](https://help.webex.com/en-us/article/WBX000027232/Error:-Cannot-Connect-to-Audio-or-Video,-While-Joining-Audio-or-Video-in-theMeeting)及論壇找到的解答，都是跟Root CA有關。
- 檢查電腦憑證後，發現help提及的CA有二個 **IdenTrust Commercial Root CA 1**
	- ![upgit_20230105_1672900723.png](https://raw.githubusercontent.com/kimx/ObsidianAssets/master/2023/01/upgit_20230105_1672900723.png)

	- 點進其中一個的圖示已呈現"不合法" (上圖<font color="#ff0000">紅色框</font>)
	- ![upgit_20230105_1672900572.png](https://raw.githubusercontent.com/kimx/ObsidianAssets/master/2023/01/upgit_20230105_1672900572.png)

- 另一個是合法的。
	- ![upgit_20230105_1672900608.png](https://raw.githubusercontent.com/kimx/ObsidianAssets/master/2023/01/upgit_20230105_1672900608.png)


# 解決方式
- 將不合法的那個CA刪除，重開機就回復正常了。

# 其他/參考
- https://help.webex.com/en-us/article/WBX000027232/Error:-Cannot-Connect-to-Audio-or-Video,-While-Joining-Audio-or-Video-in-theMeeting
- https://community.cisco.com/t5/webex-meetings-and-webex-app/webex-client-can-t-connect-to-audio-or-video-due-to-ssl/m-p/4080758