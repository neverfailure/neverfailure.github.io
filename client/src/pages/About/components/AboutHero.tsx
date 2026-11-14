import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EditorialHead from '@client/src/components/magazine/EditorialHead';

const HERO_META = ['福建农林大学 · 人工智能', '福建南平邵武 → 福州', '数码硬件 · 影像旅行 · 生活 vlog'];

const AboutHero: FC = () => {
  const headline: ReactNode = (
    <>
      一个<span className="strike">完美</span>的
      <span className="accent-word">记录者</span>
    </>
  );

  const deck: ReactNode = (
    <>
      你好，我是 <b>Never_Failure</b>，朋友们习惯叫我 Failure。
      课上写代码，课下拆机箱、拧路由器外壳、拿着手机到处拍月亮和江——
      这个站是我放作品和碎碎念的地方。
    </>
  );

  return (
    <section aria-labelledby="about-title">
      <EditorialHead
        issue="ABOUT · NO. 01"
        headline={headline}
        deck={deck}
        meta={HERO_META}
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 border border-foreground px-4 py-2 font-[family-name:var(--font-hei)] text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          看我的作品
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        <Link
          to="/guestbook"
          className="inline-flex items-center gap-2 border border-border px-4 py-2 font-[family-name:var(--font-hei)] text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        >
          去留言板
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
