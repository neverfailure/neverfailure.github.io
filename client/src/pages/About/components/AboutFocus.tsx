import type { FC } from 'react';
import SectionCell from '@client/src/components/magazine/SectionCell';

const FOCUS_ITEMS = [
  {
    title: '数码硬件体验',
    desc: '自己装机、折腾路由器、捡老设备把玩。不搞参数评测，更在意「用起来顺不顺手」和「值不值得买回来拆」。',
    keywords: ['装机实录', '网络设备', '老设备收藏'],
  },
  {
    title: '影像与旅行记录',
    desc: '用手机原相机拍月亮、拍城市、拍沿途的江河。不追求最贵的器材，只想把那个瞬间的氛围留下来。',
    keywords: ['手机影像', '城市记录', '旅途影像'],
  },
  {
    title: '日常生活 vlog',
    desc: '下雪天、开学日、年末复盘——平常日子里的片段，剪出来给自己回头看，也愿意分享给愿意听的人。',
    keywords: ['年度影像', '生活碎片', '家乡邵武'],
  },
];

const AboutFocus: FC = () => {
  return (
    <SectionCell index="02" title="我在记录什么">
      <ul className="space-y-4">
        {FOCUS_ITEMS.map((item) => (
          <li
            key={item.title}
            className="border-t border-border/80 pt-3 first:border-t-0 first:pt-0"
          >
            <h3 className="font-display text-[17px] font-bold leading-snug text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-[14.5px] leading-[1.6] text-foreground/75">
              {item.desc}
            </p>
            <p className="eyebrow mt-1.5 text-muted-foreground">
              {item.keywords.join(' · ')}
            </p>
          </li>
        ))}
      </ul>
    </SectionCell>
  );
};

export default AboutFocus;
