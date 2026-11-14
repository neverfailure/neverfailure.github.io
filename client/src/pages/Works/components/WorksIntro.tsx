import { ArrowUpRight, Sparkles, Video } from 'lucide-react';
import {
  BILIBILI_URL,
  CATEGORY_DISTRIBUTION,
  DOUYIN_URL,
  PROFILE_STATS,
} from '@client/src/data/works';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';

const MAX_CATEGORY = Math.max(
  ...CATEGORY_DISTRIBUTION.map((item) => item.count),
);

const WorksIntro = () => {
  return (
    <section className="border-b border-border/60 bg-secondary/30">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-12 sm:px-6 sm:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary">
              Works
            </p>
            <h1 className="font-display text-[30px] leading-tight text-foreground sm:text-[38px]">
              拍过、装过、走过的
            </h1>
            <p className="max-w-[520px] text-sm leading-7 text-foreground/65">
              主要在 B 站更新，抖音同步一些片段。下面是挑出来的十部，标题、播放量和时长都照原样放着。
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col lg:items-stretch">
            <UniversalLink
              to={BILIBILI_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 rounded-xl border border-border/80 bg-card px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Video className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[13px] font-medium text-foreground">
                    B 站
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Never_Failure 的主页
                  </span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </UniversalLink>

            <UniversalLink
              to={DOUYIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 rounded-xl border border-border/80 bg-card px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[13px] font-medium text-foreground">
                    抖音
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    日常片段与随手拍
                  </span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
            </UniversalLink>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-xl border border-border/80 bg-card p-5 sm:grid-cols-[repeat(3,minmax(0,1fr))_1.6fr]">
          {[
            { label: '作品', value: PROFILE_STATS.works, unit: '部' },
            { label: '粉丝', value: PROFILE_STATS.followers, unit: '位' },
            { label: '关注', value: PROFILE_STATS.following, unit: '位' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-0.5">
              <p className="text-[11px] text-muted-foreground">{stat.label}</p>
              <p className="flex items-baseline gap-1">
                <span className="tnum font-display text-2xl text-foreground">
                  {stat.value}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {stat.unit}
                </span>
              </p>
            </div>
          ))}

          <div className="space-y-2 sm:border-l sm:border-border/70 sm:pl-5">
            <p className="text-[11px] text-muted-foreground">作品分类分布</p>
            <div className="space-y-1.5">
              {CATEGORY_DISTRIBUTION.map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <span className="w-10 shrink-0 text-[11px] text-foreground/70">
                    {category.name}
                  </span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <span
                      className="block h-full rounded-full bg-primary/70"
                      style={{
                        width: `${(category.count / MAX_CATEGORY) * 100}%`,
                      }}
                    />
                  </span>
                  <span className="tnum w-5 shrink-0 text-right text-[11px] text-muted-foreground">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksIntro;
