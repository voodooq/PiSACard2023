# 维基萌抽卡系统Node.js版 v2.x

by 广树 [维基萌](https://www.wikimoe.com/)

使用NodeJs(搭配express-generator+mongoose)+MongoDB+Vue(搭配Vue-cli+Element-ui)

### 介绍

一款由玩家自由DIY卡牌的卡牌收集游戏。

### 特色系统
#### 日常抽卡
![](https://github.com/eeg1412/wikimoeCardByNodeJS/wiki/images/home/2.gif)
#### 玩家DIY自制卡牌
![](https://github.com/eeg1412/wikimoeCardByNodeJS/wiki/images/home/1.gif)
#### 排位对战
![](https://github.com/eeg1412/wikimoeCardByNodeJS/wiki/images/home/3.gif)
#### 商店抽卡
![](https://github.com/eeg1412/wikimoeCardByNodeJS/wiki/images/home/4.gif)
#### 矿场挖矿
![](https://github.com/eeg1412/wikimoeCardByNodeJS/wiki/images/home/5.gif)

### 所有系统

- [x] 日常抽卡
- [x] 每日签到
- [x] 矿场挖矿
- [x] 组建卡牌
- [x] 排位对战
- [x] 卡牌升级
- [x] 等级转换
- [x] 商店抽卡
- [x] 整点猜卡
- [x] 任务系统
- [x] 卡牌自由交易市场
- [x] 卡牌分解
- [x] 卡牌图鉴鉴赏
- [x] 玩家DIY自制卡牌
- [x] Live2D游戏向导
- [x] 矿场神秘碎片商店

### 关于更新

1. 备份【server】目录下除了【node_modules】文件夹的所有目录。
2. 备份数据库。
3. 在[releases](https://github.com/eeg1412/wikimoeCardByNodeJS/releases)下载最新的版本。
4. 除非特殊说明，请不要覆盖【server/config】下的文件以及【server/bin/nodejs.wikimoe.com-chain.pem】和【server/bin/nodejs.wikimoe.com-key.pem】两个文件。
5. 如果遇到无法启动的情况请尝试删除【node_modules】文件夹重新执行【使用方法】中的2-3步。
6. 特殊更新步骤会在版本更新说明中说明，请仔细阅读版本更新说明。

### 使用方法

1. 在[releases](https://github.com/eeg1412/wikimoeCardByNodeJS/releases)下载最新版（记得事先安装MongoDB）。
2. `cd server`切换至服务端。
3. `npm install`下载依赖。
4. 在【server/config/default.js】文件中，确认并填入【网页端口】、【是否开启https】、【https端口】、【站点域名】、【私钥文件路径】、【证书文件路径】、【mongoDB地址】，剩下的配置会在下面安装时设定。
```javascript
let baseConfig = {
	port: 3000,//网页端口
	https:false,//是否开启https,
	sslPort:667,//https端口
	site:'https://127.0.0.1:667',//站点域名
	keyFileSrc:'./bin/nodejs.wikimoe.com-key.pem',//私钥文件路径
	certFileSrc:'./bin/nodejs.wikimoe.com-chain.pem',//证书文件路径
	url: 'mongodb://localhost:27017/wikimoecard',//mongoDB地址
	sessionSecret:'wikimoe',//session加密字符串
	JWTSecret:'wikimoe',//JWT加密字符串
	dailyChance:5,//每日抽卡次数
	smtpHost: '',//邮件发送host
	smtpPort: 465,//邮件发送端口
	smtpAuth: {
		user: '',//用户名
		pass: ''//密码
	},
	robotCheckStar:25,//机器人验证通过后送的神秘碎片
	robotCheckCanGetStar:25,//机器人可疑度低于这个值送神秘碎片
	deminingStarRatio:1,//挖矿获得星星的倍率
	deminingItemRatio:1,//挖矿获得宝石的倍率
	creatCardStar:100,//制卡审核通过后获得的星星
	creatCardWait:20,//单用户最多等待审核的制卡
	useMarketCardCount:30,//集齐多少种卡牌后能在市场交易
	battleRankGetItem:100,//竞技第一名额外获得结缘币的数量
	battleRankGetItemDecay:10,//后面陆续获得结缘币的衰减数量
	donateImgUrl:'',//捐赠图片URL地址
	creatCardExplainUrl:'',//制卡说明图片URL地址
	QQunURL:'',//加群链接
	courseURL:'',//教程链接
	browserTitle:'维基萌抽卡',//浏览器标签标题
	siteTitle:'维基萌抽卡',//网站标题
}
```
5. `npm start`启动服务器。
6. 进入/cardinstall，对网站进行基本配置。
7. /cardadmin为管理员中心。

### 打赏

![敲碗求打赏](https://github.com/eeg1412/wikimoeCardByNodeJS/blob/master/view/static/otherImg/donate.jpg?raw=true)