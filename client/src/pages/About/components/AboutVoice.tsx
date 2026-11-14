import type { FC } from 'react';
import SectionCell from '@client/src/components/magazine/SectionCell';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { ArrowUpRight } from 'lucide-react';
import { BILIBILI_SIGNATURE, BILIBILI_URL, DOUYIN_URL } from '@client/src/data/works';

const PLATFORM_LINKS = [
  { label: 'B 站主页', href: BILIBILI_URL, desc: '50 部作品 · 持续更新' },
  { label: '抖音主页', href: DOUYIN_URL, desc: '生活片段 · 竖屏记录' },
  { label: '全部作品', href: '/works', internal: true, desc: '精选 10 部 · 点击跳转' },
];

const AboutVoice: FC = () => {
  return (
    <SectionCell index="04" title="做内容的态度">
      <blockquote className="quote-bar">
        {BILIBILI_SIGNATURE}
      </blockquote>

      <ul className="mt-5 divide-y divide-border/80 border-y border-border/80">
        {PLATFORM_LINKS.map((link) => {
          const content = (
            <span className="flex items-center justify-between gap-3 py-2.5">
              <span className="flex flex-col">
                <span className="font-display text-[16px] font-bold leading-none text-foreground">
                  {link.label}
                </span>
                <span className="mt-1 font-[family-name:var(--font-hei)] text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                  {link.desc}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </span>
          );
          return (
            <li key={link.label} className="group">
              {link.internal ? (
                <a
                  href={link.href}
                  className="block transition-colors hover:text-primary"
                >
                  {content}
                </a>
              ) : (
                <UniversalLink
                  to={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-primary"
                >
                  {content}
                </UniversalLink>
              )}
            </li>
          );
        })}
      </ul>
    </SectionCell>
  );
};

export default AboutVoice;
