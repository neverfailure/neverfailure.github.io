# 项目记忆

## giscus iframe 慢加载被误判为加载失败

- 现象：giscus 评论区已正常渲染（评论数、输入框都在），页面同时显示「评论区没能加载出来」的失败提示
- 根因：用固定 8s 定时器 + `querySelector('iframe.giscus-frame')` 判断成功，giscus 首次拉 GitHub token 常超过该阈值，超时即置失败态
- 修复：改为以 giscus 自身 `postMessage`（`{ giscus: {...} }`，含 `error` 字段表示真失败）判定状态；仅当既无 iframe 又未收到任何消息时才在超时后提示失败，提示出现后收到成功消息可清除

## 站点内容边界

- 留言数据由 GitHub Discussions（giscus）承载，本站不再有留言表与留言接口；`guestbook_message` 表仅留数据不再读写
- 站主头像 `client/src/assets/avatar.jpg` 为外部图床图片的本地副本，顶栏与首页底部展示区共用，必须保持 1:1 比例
