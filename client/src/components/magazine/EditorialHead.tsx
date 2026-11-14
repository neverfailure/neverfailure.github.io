import type { FC, ReactNode } from 'react';

interface EditorialHeadProps {
  issue: string;
  headline: ReactNode;
  deck: ReactNode;
  meta?: string[];
}

const EditorialHead: FC<EditorialHeadProps> = ({
  issue,
  headline,
  deck,
  meta,
}) => {
  return (
    <header className="rise">
      <p className="eyebrow flex items-center gap-2 text-primary">
        <span aria-hidden="true" className="h-px w-5 bg-primary/60" />
        {issue}
      </p>

      <h1 className="headline mt-4 text-foreground">{headline}</h1>

      <p className="deck mt-5 text-foreground/80">{deck}</p>

      {meta && meta.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-[family-name:var(--font-hei)] text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
          {meta.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <div aria-hidden="true" className="rule-accent mt-4" />
    </header>
  );
};

export default EditorialHead;
