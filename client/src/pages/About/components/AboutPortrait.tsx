import type { FC } from 'react';
import { Image } from '@client/src/components/ui/image';
import avatarUrl from '@client/src/assets/avatar.jpg';

const AboutPortrait: FC = () => {
  return (
    <section
      className="mt-14 border-t border-foreground pt-8"
      aria-labelledby="portrait-title"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="portrait-title"
          className="eyebrow flex items-center gap-2 text-primary"
        >
          <span aria-hidden="true" className="h-px w-5 bg-primary/60" />
          05 / 封面人物
        </h2>
        <span className="eyebrow text-muted-foreground">
          Never_Failure · 拍摄于福州
        </span>
      </div>

      <div
        aria-hidden="true"
        className="portrait-gradient mt-5 flex items-end justify-center px-6 py-10 sm:px-12 sm:py-14"
      >
        <figure className="w-full max-w-[420px]">
          <Image
            src={avatarUrl}
            alt="Never_Failure 的头像照片"
            width={420}
            sizes="(max-width: 640px) 80vw, 420px"
            className="h-auto w-full border border-foreground/70"
          />
          <figcaption className="mt-3 flex items-center justify-between font-[family-name:var(--font-hei)] text-[10.5px] uppercase tracking-[0.18em] text-foreground/70">
            <span>邵武 · 福州</span>
            <span className="tnum">940 × 940</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutPortrait;
