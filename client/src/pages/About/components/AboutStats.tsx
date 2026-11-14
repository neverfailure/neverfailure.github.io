import type { FC } from 'react';
import SectionCell from '@client/src/components/magazine/SectionCell';
import { CATEGORY_DISTRIBUTION, PROFILE_STATS } from '@client/src/data/works';

const STATS = [
  { label: 'B 站作品', value: PROFILE_STATS.works, unit: '部', accent: false },
  { label: '粉丝', value: PROFILE_STATS.followers, unit: '位', accent: true },
  { label: '关注', value: PROFILE_STATS.following, unit: '位', accent: false },
];

const MAX_BAR = 30;

const AboutStats: FC = () => {
  return (
    <SectionCell index="03" title="数据一览">
      <div className="grid grid-cols-3 gap-3 border-b border-border/80 pb-5">
        {STATS.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className="eyebrow text-muted-foreground">{item.label}</span>
            <span
              className={[
                'mt-1 font-display text-[28px] font-bold leading-none',
                item.accent ? 'text-primary' : 'text-foreground',
              ].join(' ')}
            >
              <span className="tnum">{item.value}</span>
              <span className="ml-1 text-[13px] font-normal text-muted-foreground">
                {item.unit}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2.5">
        <p className="eyebrow text-muted-foreground">作品分类分布</p>
        {CATEGORY_DISTRIBUTION.map((cat) => {
          const width = (cat.count / MAX_BAR) * 100;
          return (
            <div
              key={cat.name}
              className="flex items-center gap-3 text-[13.5px]"
            >
              <span className="w-16 shrink-0 text-foreground/80">
                {cat.name}
              </span>
              <span className="relative h-[3px] flex-1 bg-border">
                <span
                  className="absolute left-0 top-0 h-full bg-foreground"
                  style={{ width: `${width}%` }}
                />
              </span>
              <span className="tnum w-9 shrink-0 text-right text-[12px] text-muted-foreground">
                {cat.count}
              </span>
            </div>
          );
        })}
      </div>
    </SectionCell>
  );
};

export default AboutStats;
