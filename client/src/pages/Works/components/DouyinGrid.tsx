import type { FC } from 'react';
import { DOUYIN_WORKS } from '@client/src/data/douyinWorks';
import DouyinCard from './DouyinCard';

const DouyinGrid: FC = () => {
  return (
    <section aria-labelledby="douyin-works-title" className="pt-10">
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-foreground pb-3">
        <h2
          id="douyin-works-title"
          className="font-display text-[26px] font-bold leading-none text-foreground"
        >
          抖音 · 最新更新
        </h2>
        <span className="eyebrow text-muted-foreground">
          Douyin · 2026.09 — 11 · {DOUYIN_WORKS.length} notes
        </span>
      </header>

      <p className="mt-3 font-body text-[14px] italic leading-[1.6] text-foreground/75">
        2026 年 9 月底到 11 月初的竖屏碎片，发在抖音那边——封面按各自原始比例摆放，点开即到原片。
      </p>

      <div className="mt-6 columns-1 gap-x-9 sm:columns-2 lg:columns-3">
        {DOUYIN_WORKS.map((work, index) => (
          <DouyinCard key={work.id} work={work} index={index} />
        ))}
      </div>
    </section>
  );
};

export default DouyinGrid;
