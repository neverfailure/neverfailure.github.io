import type { FC } from 'react';
import { Clock, Play } from 'lucide-react';
import type { WorkItem } from '@client/src/data/works';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { Image } from '@client/src/components/ui/image';

interface WorkCardProps {
  work: WorkItem;
  index: number;
}

const WorkCard: FC<WorkCardProps> = ({ work, index }) => {
  return (
    <article
      className="rise group border-b border-border pb-6 first:pt-0"
      style={{ animationDelay: `${Math.min(index, 9) * 30}ms` }}
    >
      <UniversalLink
        to={work.url}
        target="_blank"
        rel="noreferrer"
        className="block transition-colors"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative w-full shrink-0 overflow-hidden border border-foreground/30 bg-secondary sm:w-[240px]">
            <div className="relative aspect-video w-full">
              <Image
                src={work.cover}
                alt={`${work.title} 封面`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 240px"
              />
            </div>
            <span className="tnum absolute bottom-2 right-2 inline-flex items-center gap-1 border border-foreground/40 bg-foreground px-1 py-0.5 text-[10px] text-background">
              <Clock className="h-2.5 w-2.5" aria-hidden="true" />
              {work.duration}
            </span>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <p className="eyebrow mb-1.5 text-primary">
                {String(index + 1).padStart(2, '0')} / {String(10).padStart(2, '0')}
              </p>
              <h3 className="font-display text-[18.5px] font-bold leading-[1.3] text-foreground transition-colors group-hover:text-primary">
                {work.title}
              </h3>
            </div>
            <div className="mt-3 flex items-center justify-between font-[family-name:var(--font-hei)] text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Play className="h-3 w-3 text-primary" aria-hidden="true" />
                <span className="tnum">
                  {work.views.toLocaleString('zh-CN')}
                </span>
                <span className="uppercase tracking-[0.12em]">views</span>
              </span>
              <span className="inline-flex items-center gap-1 transition-colors group-hover:text-primary">
                <span className="uppercase tracking-[0.16em]">观看</span>
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </div>
      </UniversalLink>
    </article>
  );
};

export default WorkCard;
