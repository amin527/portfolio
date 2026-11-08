import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <header className="section__header">
        <span className="section__index">{index}</span>
        <h2 id={headingId} className="section__title">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
