import type { FC, ReactNode } from 'react';
import EditorialHead from '@client/src/components/magazine/EditorialHead';
import { PROFILE_STATS } from '@client/src/data/works';

const WORKS_META = ['B 站 · 抖音', `共 ${PROFILE_STATS.works} 部作品`, '精选 10 部 · 点击跳转原片'];

const WorksHero: FC = () => {
  const headline: ReactNode = (
    <>
      拍过的 <span className="strike">碎片段</span>
      <span className="accent-word">画面</span>
    </>
  );

  const deck: ReactNode = (
    <>
      装机、月亮、长江、武汉、路由器、年度 vlog…… 这十部是播放量较高、
      也最能代表我的片子。完整片单在 <b>B 站</b>，竖屏生活碎片在 <b>抖音</b>。
    </>
  );

  return (
    <section aria-labelledby="works-title">
      <EditorialHead
        issue="WORKS · NO. 02"
        headline={headline}
        deck={deck}
        meta={WORKS_META}
      />
    </section>
  );
};

export default WorksHero;
