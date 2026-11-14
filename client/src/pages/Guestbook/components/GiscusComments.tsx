import { useEffect, useRef, useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { GISCUS_CONFIG, isGiscusConfigReady } from '@client/src/config/giscus';

const GISCUS_ORIGIN = 'https://giscus.app';
const GISCUS_SCRIPT = `${GISCUS_ORIGIN}/client.js`;
const LOAD_TIMEOUT_MS = 15000;

interface GiscusMessagePayload {
  giscus?: {
    error?: string;
    discussion?: { id?: string };
    resizeHeight?: number;
  };
}

const GiscusComments = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!isGiscusConfigReady(GISCUS_CONFIG)) return;

    const container = containerRef.current;
    if (!container) return;

    let timer: number | null = null;
    let injected = false;
    let receivedMessage = false;

    const clearTimer = () => {
      if (timer) {
        window.clearTimeout(timer);
        timer = null;
      }
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== GISCUS_ORIGIN) return;
      const payload = event.data as GiscusMessagePayload | null;
      if (!payload?.giscus) return;

      receivedMessage = true;

      if (payload.giscus.error) {
        clearTimer();
        setLoading(false);
        setFailed(true);
        return;
      }

      clearTimer();
      setLoading(false);
      setFailed(false);
    };

    const injectScript = () => {
      if (injected) return;
      injected = true;
      setLoading(true);
      setFailed(false);

      const script = document.createElement('script');
      script.src = GISCUS_SCRIPT;
      script.async = true;
      script.crossOrigin = GISCUS_CONFIG.crossorigin;
      script.setAttribute('data-repo', GISCUS_CONFIG.repo);
      script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
      script.setAttribute('data-category', GISCUS_CONFIG.category);
      script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
      script.setAttribute('data-mapping', GISCUS_CONFIG.mapping);
      script.setAttribute('data-strict', GISCUS_CONFIG.strict);
      script.setAttribute(
        'data-reactions-enabled',
        GISCUS_CONFIG.reactionsEnabled,
      );
      script.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata);
      script.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition);
      script.setAttribute('data-theme', GISCUS_CONFIG.theme);
      script.setAttribute('data-lang', GISCUS_CONFIG.lang);

      script.addEventListener(
        'error',
        () => {
          clearTimer();
          setLoading(false);
          setFailed(true);
        },
        { once: true },
      );

      window.addEventListener('message', handleMessage);

      timer = window.setTimeout(() => {
        if (!container.querySelector('iframe') && !receivedMessage) {
          setFailed(true);
        }
        setLoading(false);
      }, LOAD_TIMEOUT_MS);

      container.appendChild(script);
    };

    if (typeof IntersectionObserver === 'undefined') {
      injectScript();
      return () => {
        clearTimer();
        window.removeEventListener('message', handleMessage);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            injectScript();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '300px 0px' },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      clearTimer();
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  if (!isGiscusConfigReady(GISCUS_CONFIG)) {
    return (
      <aside
        aria-label="giscus 未配置提示"
        className="border border-border bg-card p-5"
      >
        <h3 className="font-display text-[18px] font-bold leading-tight text-foreground">
          留言板暂未启用
        </h3>
        <p className="mt-2 font-body text-[14.5px] leading-[1.65] text-foreground/75">
          本站留言由 GitHub Discussions 承载，通过 giscus 接入。请先到 giscus
          配置页生成参数，再把
          <code className="mx-1 bg-secondary px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            repo / repoId / category / categoryId / mapping
          </code>
          等字段填到
          <code className="mx-1 bg-secondary px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            client/src/config/giscus.ts
          </code>
          的 <code className="font-mono text-[12px]">GISCUS_CONFIG</code> 中。
        </p>
        <p className="mt-3 font-[family-name:var(--font-hei)] text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          前往
          <UniversalLink
            to={GISCUS_ORIGIN}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-2 hover:text-foreground"
          >
            giscus.app
          </UniversalLink>
          · 配置生成 → 复制 → 粘贴
        </p>
      </aside>
    );
  }

  return (
    <section aria-label="留言评论区" className="border border-foreground/80 bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-foreground px-5 py-3">
        <span className="eyebrow text-foreground">
          留言板 · GitHub Discussions
        </span>
        <span className="font-[family-name:var(--font-hei)] text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
          留言需用 GitHub 账号登录
        </span>
      </div>

      <p className="border-b border-border bg-secondary/50 px-5 py-3 font-kai text-[14.5px] leading-[1.65] text-foreground/75">
        下方评论区由 giscus 提供，留言会作为 discussion 保存在
        <span className="mx-1 font-mono text-[12px] text-foreground">
          {GISCUS_CONFIG.repo}
        </span>
        仓库里。发表评论、点赞反应都需要先用 GitHub 账号登录；不登录也能正常浏览全部留言。
      </p>

      <div
        ref={containerRef}
        className="min-h-[240px] px-4 py-4 sm:px-5"
        data-ai-section-type="card-list"
      />

      {loading ? (
        <div className="flex items-center justify-center gap-2 px-5 pb-5 font-[family-name:var(--font-hei)] text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
          正在加载评论…
        </div>
      ) : null}

      {failed ? (
        <div className="flex items-start gap-3 border-t border-border px-5 py-4">
          <AlertCircle
            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div className="font-body text-[13.5px] leading-[1.55] text-foreground/75">
            <p className="font-bold text-foreground">评论区没能加载出来</p>
            <p className="mt-1">
              常见原因有三种：仓库没有开启 Discussions、仓库没安装 giscus
              应用，或当前网络无法访问 giscus.app。
            </p>
            <p className="mt-1">
              请在 GitHub 仓库
              <span className="mx-1 font-mono text-[12px] text-foreground">
                {GISCUS_CONFIG.repo}
              </span>
              的 Settings 中开启
              <span className="mx-1 font-mono text-[12px] text-foreground">
                Discussions
              </span>
              功能，并确认
              <UniversalLink
                to="https://github.com/apps/giscus"
                target="_blank"
                rel="noreferrer"
                className="mx-1 text-primary underline underline-offset-2 hover:text-foreground"
              >
                giscus GitHub App
              </UniversalLink>
              已授权到该仓库；网络受限时可稍后刷新重试。
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default GiscusComments;
