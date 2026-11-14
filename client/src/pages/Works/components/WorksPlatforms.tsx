import type { FC } from 'react';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { ArrowUpRight } from 'lucide-react';
import { BILIBILI_URL, DOUYIN_URL } from '@client/src/data/works';

const PLATFORMS = [
  {
    label: 'B 站',
    href: BILIBILI_URL,
    desc: '主阵地 · 完整长片 · 50 部作品',
    note: 'Space 1090404099',
  },
  {
    label: '抖音',
    href: DOUYIN_URL,
    desc: '生活侧记 · 竖屏碎片 · 日常记录',
    note: '@Never_Failure',
  },
];

const WorksPlatforms: FC = () => {
  return (
    <section
      aria-label="平台入口"
      className="border-b border-foreground/80 bg-secondary/50"
    >
      <div className="mx-auto grid w-full max-w-[1180px] divide-x divide-foreground/20 px-6 py-4 sm:grid-cols-2 sm:px-14">
        {PLATFORMS.map((platform) => (
          <UniversalLink
            key={platform.label}
            to={platform.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 px-0 py-2 transition-colors first:pb-2 first:pt-0 last:pb-0 last:pt-2 hover:text-primary sm:first:pr-6 sm:last:pl-6"
          >
            <div className="flex flex-col">
              <span className="font-display text-[20px] font-bold leading-none text-foreground">
                {platform.label}
              </span>
              <span className="mt-1.5 font-[family-name:var(--font-hei)] text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                {platform.desc}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <ArrowUpRight
                className="h-4 w-4 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="eyebrow text-muted-foreground">
                {platform.note}
              </span>
            </div>
          </UniversalLink>
        ))}
      </div>
    </section>
  );
};

export default WorksPlatforms;
