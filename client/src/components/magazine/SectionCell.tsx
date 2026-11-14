import type { FC, ReactNode } from 'react';
import { cn } from '@client/src/lib/utils';

interface SectionCellProps {
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const SectionCell: FC<SectionCellProps> = ({
  index,
  title,
  children,
  className,
}) => {
  return (
    <section className={cn('border-b border-border pb-7 pt-7', className)}>
      <p className="eyebrow mb-2 flex items-center gap-2 text-primary">
        <span aria-hidden="true" className="h-px w-5 bg-primary/60" />
        {index}
      </p>
      <h2 className="font-display text-[22px] font-bold leading-tight tracking-[-0.005em] text-foreground">
        {title}
      </h2>
      <div className="mt-3 font-body text-[15px] leading-[1.7] text-foreground/85">
        {children}
      </div>
    </section>
  );
};

export default SectionCell;
