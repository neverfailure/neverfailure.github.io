import type { FC } from 'react';
import { WORKS } from '@client/src/data/works';
import WorkCard from './WorkCard';

const WorksGrid: FC = () => {
  return (
    <section
      aria-labelledby="works-selected-title"
      className="pt-10"
    >
      <header className="flex items-baseline justify-between border-b border-foreground pb-3">
        <h2
          id="works-selected-title"
          className="font-display text-[26px] font-bold leading-none text-foreground"
        >
          B 站 · 精选作品
        </h2>
        <span className="eyebrow text-muted-foreground">
          Selected · {WORKS.length} pieces
        </span>
      </header>

      <ul className="grid grid-cols-1 gap-x-12 gap-y-0 pt-3 md:grid-cols-2">
        {WORKS.map((work, index) => (
          <li key={work.id}>
            <WorkCard work={work} index={index} />
          </li>
        ))}
      </ul>

      <aside className="mt-8 border border-foreground/30 bg-secondary/60 px-5 py-4">
        <p className="font-body text-[14px] italic leading-[1.5] text-foreground/80">
          B 站一共 <span className="font-display font-bold not-italic text-foreground">
            {WORKS.length}
          </span>{' '}
          部里，挑出了这十部——播放量不算最高的那批，但每一部都有故事。
          剩下的都在 B 站主页，欢迎去逛。
        </p>
        <p className="font-kai mt-2 text-[14px] text-muted-foreground">
          — Never_Failure · 编者注
        </p>
      </aside>
    </section>
  );
};

export default WorksGrid;
