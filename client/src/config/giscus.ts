export interface GiscusConfig {
  /**
   * data-repo：GitHub 仓库，格式 owner/repo。
   * 用途：指定评论数据（GitHub Discussions）存放的仓库。
   * 获取：giscus.app 配置页选中仓库后，复制代码里的 data-repo。
   */
  repo: string;
  /**
   * data-repo-id：仓库 ID（形如 R_kgDOxxxx）。
   * 用途：giscus 精确定位仓库，避免仓库改名后失配。
   * 获取：giscus.app 配置页代码里的 data-repo-id。
   */
  repoId: string;
  /**
   * data-category：Discussion 分类名。
   * 用途：指定新建 discussion 落到哪个分类，该分类必须已开启。
   * 获取：giscus.app 配置页「Discussion 分类」下拉中选择。
   */
  category: string;
  /**
   * data-category-id：Discussion 分类 ID（形如 DIC_kwDOxxxx）。
   * 用途：精确锁定分类，不随分类改名失效。
   * 获取：giscus.app 配置页代码里的 data-category-id。
   */
  categoryId: string;
  /**
   * data-mapping：页面与 discussion 的映射方式。
   * 可选值：pathname（按路径）/ url（按完整 URL）/ title（按标题）/
   *        og:title / specific（指定固定 discussion）/ number（指定编号）。
   * 本站用 pathname，一个页面路径对应一条 discussion。
   */
  mapping: string;
  /**
   * data-strict：是否严格按标题匹配映射。
   * 可选值："0" 否（推荐）/ "1" 是。开启后只允许标题完全一致的 discussion。
   */
  strict: '0' | '1';
  /**
   * data-reactions-enabled：是否显示 emoji 反应。
   * 可选值："0" 隐藏 / "1" 显示。
   */
  reactionsEnabled: '0' | '1';
  /**
   * data-emit-metadata：是否通过 iframe 向父页面发送 discussion 元数据。
   * 可选值："0" 不发送 / "1" 发送（需要父页面监听 message 事件才有用）。
   */
  emitMetadata: '0' | '1';
  /**
   * data-input-position：评论输入框相对评论列表的位置。
   * 可选值：top（置顶）/ bottom（置底）。
   */
  inputPosition: 'top' | 'bottom';
  /**
   * data-theme：评论区主题。
   * 可选值：light / dark / dark_dimmed / preferred_color_scheme（跟随系统）/
   *        以及 giscus.app 上提供的自定义主题 URL。
   * 本站按站主指定使用 preferred_color_scheme。
   */
  theme: string;
  /**
   * data-lang：giscus 界面语言，如 zh-CN / en。
   */
  lang: string;
  /**
   * crossorigin：注入脚本的 crossorigin 属性。
   * 用途：以 CORS 方式加载 giscus 脚本，便于 iframe 正常通信。
   */
  crossorigin: string;
}

export const GISCUS_CONFIG: GiscusConfig = {
  repo: 'neverfailure/neverfailure.github.io',
  repoId: 'R_kgDOVt1t5w',
  category: 'Announcements',
  categoryId: 'DIC_kwDOVt1t584DLFzE',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  theme: 'light',
  lang: 'zh-CN',
  crossorigin: 'anonymous',
};

export function isGiscusConfigReady(config: GiscusConfig): boolean {
  return Boolean(
    config.repo &&
      config.repoId &&
      config.category &&
      config.categoryId &&
      config.mapping,
  );
}
