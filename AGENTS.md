# 个人网站 - Never_Failure

## 应用概览
个人作品集网站，展示站主 Never_Failure 的自我介绍、B站/抖音作品，以及基于 giscus 的留言板。

## 技术架构
- 前端：React + Tailwind，展示型三页结构（关于我 / 作品 / 留言板）
- 后端：NestJS 仅保留平台必需模块，站点自身不再依赖数据库
- 静态内容：自我介绍与作品数据前端维护（`client/src/data/works.ts`）

### 留言板（giscus）
- 留言由 GitHub Discussions 承载，本站不再建表、不写后端接口
- 配置集中在 `client/src/config/giscus.ts`（`GISCUS_CONFIG`）：repo / repoId / category / categoryId / mapping / theme / lang / crossorigin 等，每项带用途注释
- 目标仓库 `neverfailure/neverfailure.github.io`，分类 `Announcements`，映射 `pathname`
- 主题按站主指定使用 `preferred_color_scheme`（跟随系统），不在代码中改成其他值
- 历史遗留表 `guestbook_message` 已无代码引用，仅保留数据，不再读写

## 设计规范

### 场景约束
- 产品定位：访客了解 Never_Failure、看他的作品、在 GitHub 上留言；像一版周日副刊的整页随笔，长文、克制、字体驱动
- 应用类型：展示型页面；作品集 + 个人介绍 + 评论，内容与视觉优先，信息密度低
- 使用者与场合：分享链接访问，桌面与手机都要好看
- 视觉主角：超大衬线标题 + 作品封面
- 页面结构：报头（日期栏 + 导航）+ 三页切换；每页 = 眉标 → 大标题 → 斜体导语 → 锈红短分隔条 → 2 列编号栏目 → 页脚
- 用户风格原话：将网页修改为「新闻刊页」风格；要做的美观一点
- 应用身份：不展示平台应用名，站主昵称 Never_Failure 作为品牌识别

### 视觉方向：新闻刊页（magazine-poster）

| 项 | 取值 | 用途 |
|---|---|---|
| paper | `#f3eee2` → `hsl(42 41% 92%)` | 页面报纸底色 |
| ink | `#1f1c17` → `hsl(37 15% 11%)` | 文字、标题、发丝主线、删除线 |
| muted | `#6e6a5d` → `hsl(46 8% 40%)` | 日期栏、眉标、页脚元信息 |
| rule | `#d3cdbe` → `hsl(42 19% 79%)` | 浅分隔线、栏目底线、提示板描边 |
| accent（唯一暖色） | `#b85a3a` → `hsl(15 52% 47%)` | 见下方「accent 白名单」 |
| tint | `#ece5d3` → `hsl(43 40% 88%)` | 引用条底、导语胶囊、强调块 |
| 字体 | 标题宋体 Songti SC / STSong / SimSun / Source Han Serif SC / Noto Serif SC / serif；正文同宋体；元信息无衬线 PingFang SC / Microsoft YaHei / Hiragino Sans GB / 微软雅黑 / Heiti SC / sans-serif；手写点缀楷体 Kaiti SC / STKaiti / KaiTi / 楷体 / Kaiti TC / serif；数字等宽 ui-monospace / SF Mono / Menlo / Consolas / monospace | 全系统字体栈，不依赖外部 CDN |
| 字号 | 标题 `clamp(40px, 7vw, 96px)` / 栏目小标题 22px / 导语 18px / 正文 15px / mono 元信息 10.5px / 引用 12px | |
| 圆角 | 仅导语强调胶囊 2px，其余一律直角 | |
| 阴影 | 全站禁止 box-shadow | 深度只用发丝线与 tint 色块 |
| 图标线宽 | 1.5px，且仅用于链接箭头等必要处 | |
| 点睛样式 | 超大标题内「一处删除线词 + 一处斜体锈红词」；页脚 PRO TIP 提示板 | 报纸整版随笔的标志 |
| 动效 | 入场 rise 上浮淡入 0.4s；悬停仅改描边/文字色，不做上浮与阴影 | 克制、印刷感 |
| 配图风格 | 作品封面原样使用；头像为站主真实照片 | |

**accent 白名单（只允许出现在这 7 处）**：①标题斜体词 ②导语 mono 强调胶囊或描边 ③80px×3px 短分隔条 ④栏目编号 ⑤引用条左竖边 ⑥图表唯一序列色 ⑦每组 KPI 最多 1 处核心数值。
**明确禁止**：accent 作大面积背景、正文色、表格/列表涨幅全染色、CTA 按钮底色、导航选中态（导航选中用 ink 加粗 + ink 下划线）。

**硬规则**
- 每个页面标题恰好 1 个 `.strike`（line-through，3px，ink）与恰好 1 个 `.accent-word`（italic，700，accent）
- mono 只用于日期栏、眉标、编号、引用条、badge、数字，正文与导语永远衬线
- 背景 = paper + 低透明网点噪声（1px 点 / 16px 平铺 / ink 5%）
- 无投影、无圆角卡片、无浮层

### 间距
- 内容最大宽度 1180px；桌面 padding 36px 56px 48px，≤900px 收到 24px 24px 32px
- 栏目网格：2 列，列间距 56px，行间距 28px；每栏 28px 上内边距 + 1px rule 底线
- 引语条 padding 10px 12px；导语 max-width 78ch，正文 max-width 46ch
- 元素间距统一用 gap/space-*，不用 margin 堆叠

### 页面实现约束
- 颜色只用 `tailwind-theme.css` 变量与 `index.css` 排版类，禁止写死色值
- 标题用 `.headline` + `.font-display`；导语用 `.deck`；引用条用 `.quote-bar`；眉标用 `.eyebrow`
- 数字统一 `.tnum`（IBM Plex Mono）
- 作品封面用 16:9 容器 + `object-cover`，不裁掉主体
- 移动端 375px 下无横向滚动，栏目网格塌为单列并恢复底线
- 页脚三栏：PRO TIP 板 / 弹性留白 / 平台链接与版权

### 配图清单
- 站立封面：`client/src/assets/works/` 10 张作品封面
- 站主头像：`client/src/assets/avatar.jpg`（940×940，由站主提供的图片下载到本地，顶栏小圆图与关于页底部头像区共用，展示时保持原始 1:1 比例不拉伸）
