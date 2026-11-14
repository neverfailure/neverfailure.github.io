import type { FC } from 'react';
import SectionCell from '@client/src/components/magazine/SectionCell';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { ArrowUpRight } from 'lucide-react';
import { BILIBILI_SIGNATURE, BILIBILI_URL, DOUYIN_URL } from '@client/src/data/works';

const LINKS = [
  { label: 'B 站主页', href: BILIBILI_URL, desc: '完整片单 · 长片为主' },
  { label: '抖音主页', href: DOUYIN_URL, desc: '生活碎片 · 竖屏记录' },
];

const WorksAbout: FC = () => {
  return (
    <SectionCell index="02" title="关于创作">
      <blockquote className="quote-bar">
        {BILIBILI_SIGNATURE}
      </blockquote>

      <ul className="mt-5 divide-y divide-border/80 border-y border-border/80">
        {LINKS.map((link) => (
          <li key={link.label} className="group">
            <UniversalLink
              to={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 py-2.5 transition-colors hover:text-primary"
            >
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
            </UniversalLink>
          </li>
        ))}
      </ul>
    </SectionCell>
  );
};

export default WorksAbout;
