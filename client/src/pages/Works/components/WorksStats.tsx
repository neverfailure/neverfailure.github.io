import type { FC } from 'react';
import {
  CATEGORY_DISTRIBUTION,
  PROFILE_STATS,
} from '@client/src/data/works';
import { DOUYIN_STATS } from '@client/src/data/douyinWorks';
import SectionCell from '@client/src/components/magazine/SectionCell';

interface StatItem {
  label: string;
  value: number;
  unit: string;
  accent: boolean;
}

const BILIBILI_STATS: StatItem[] = [
  { label: 'B 站作品', value: PROFILE_STATS.works, unit: '部', accent: false },
  { label: '粉丝', value: PROFILE_STATS.followers, unit: '位', accent: true },
  { label: '关注', value: PROFILE_STATS.following, unit: '位', accent: false },
];

const DOUYIN_ITEMS: StatItem[] = [
  { label: '抖音作品', value: DOUYIN_STATS.works, unit: '部', accent: false },
  { label: '粉丝', value: DOUYIN_STATS.followers, unit: '位', accent: false },
  { label: '获赞', value: DOUYIN_STATS.likes, unit: '次', accent: true },
];

interface StatsRowProps {
  title: string;
  items: StatItem[];
}

const StatsRow: FC<StatsRowProps> = ({ title, items }) => {
  return (
    <div>
      <p className="eyebrow mb-2 text-muted-foreground">{title}</p>
      <div className="grid grid-cols-3 gap-3">
        {items.map((item: StatItem) => (
          <div key={item.label} className="flex flex-col">
            <span className="eyebrow text-muted-foreground">{item.label}</span>
            <span
              className={[
                'mt-1 font-display text-[26px] font-bold leading-none',
                item.accent ? 'text-primary' : 'text-foreground',
              ].join(' ')}
            >
              <span className="tnum">{item.value}</span>
              <span className="ml-1 text-[12px] font-normal text-muted-foreground">
                {item.unit}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorksStats: FC = () => {
  const maxBar = Math.max(
    ...CATEGORY_DISTRIBUTION.map((item) => item.count),
    30,
  );

  return (
    <SectionCell index="01" title="数字与分布">
      <div className="space-y-4 border-b border-border/80 pb-5">
        <StatsRow title="B 站" items={BILIBILI_STATS} />
        <div className="border-t border-border/60 pt-4">
          <StatsRow title="抖音" items={DOUYIN_ITEMS} />
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        <p className="eyebrow text-muted-foreground">作品分类分布</p>
        {CATEGORY_DISTRIBUTION.map((cat) => {
          const width = (cat.count / maxBar) * 100;
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

export default WorksStats;
