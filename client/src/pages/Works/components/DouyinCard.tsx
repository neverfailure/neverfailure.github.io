import type { FC } from 'react';
import { Clock, Heart, MessageCircle, Bookmark } from 'lucide-react';
import type { DouyinWorkItem } from '@client/src/data/douyinWorks';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { Image } from '@client/src/components/ui/image';

interface DouyinCardProps {
  work: DouyinWorkItem;
  index: number;
}

function formatDate(value: string): string {
  return value.replace(/-/g, '.');
}

const DouyinCard: FC<DouyinCardProps> = ({ work, index }) => {
  const hasMetaRow = work.duration || work.comments || work.collects;

  return (
    <article
      className="rise mb-8 break-inside-avoid"
      style={{ animationDelay: `${Math.min(index, 7) * 40}ms` }}
    >
      <UniversalLink
        to={work.url}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        <div className="relative border border-foreground/30 bg-background">
          <Image
            src={work.cover}
            alt={`${work.title} 封面`}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="block h-auto w-full"
          />
          {work.duration ? (
            <span className="tnum absolute bottom-2 right-2 inline-flex items-center gap-1 border border-foreground/40 bg-foreground px-1 py-0.5 text-[10px] text-background">
              <Clock className="h-2.5 w-2.5" aria-hidden="true" />
              {work.duration}
            </span>
          ) : null}
        </div>

        <div className="mt-3 flex items-center justify-between font-[family-name:var(--font-hei)] text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="tnum">{formatDate(work.publishedAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Heart className="h-3 w-3 text-primary" aria-hidden="true" />
            <span className="tnum">{work.likes}</span>
          </span>
        </div>

        {hasMetaRow ? (
          <div className="mt-1 flex items-center gap-3 font-[family-name:var(--font-hei)] text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
            {work.comments !== undefined ? (
              <span className="inline-flex items-center gap-1">
                <MessageCircle
                  className="h-3 w-3 text-foreground/60"
                  aria-hidden="true"
                />
                <span className="tnum">{work.comments}</span>
              </span>
            ) : null}
            {work.collects !== undefined ? (
              <span className="inline-flex items-center gap-1">
                <Bookmark
                  className="h-3 w-3 text-foreground/60"
                  aria-hidden="true"
                />
                <span className="tnum">{work.collects}</span>
              </span>
            ) : null}
          </div>
        ) : null}

        <h3 className="mt-1.5 font-display text-[17px] font-bold leading-[1.35] text-foreground transition-colors group-hover:text-primary">
          {work.title}
        </h3>

        {work.caption ? (
          <p className="mt-1.5 font-body text-[13px] leading-[1.65] text-foreground/70">
            {work.caption}
          </p>
        ) : null}

        {work.tags.length > 0 ? (
          <p className="mt-2 font-[family-name:var(--font-hei)] text-[11px] leading-[1.6] text-muted-foreground">
            {work.tags.join(' ')}
          </p>
        ) : null}

        <p className="mt-2 inline-flex items-center gap-1 font-[family-name:var(--font-hei)] text-[10.5px] uppercase tracking-[0.16em] text-foreground transition-colors group-hover:text-primary">
          <span>抖音 · 原片</span>
          <span aria-hidden="true">→</span>
        </p>
      </UniversalLink>
    </article>
  );
};

export default DouyinCard;
