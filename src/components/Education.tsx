import type { Qualification } from "../types";
import { Section } from "./Section";

interface EducationProps {
  qualifications: Qualification[];
}

export function Education({ qualifications }: EducationProps) {
  return (
    <Section id="education" index="04" title="Education">
      <ol className="timeline timeline--compact">
        {qualifications.map((q) => (
          <li key={`${q.institution}-${q.award}`} className="timeline__item">
            <div className="timeline__head">
              <h3 className="timeline__title">{q.award}</h3>
              {q.period && <p className="timeline__period">{q.period}</p>}
            </div>
            {q.institution && <p className="timeline__org">{q.institution}</p>}
            {q.details && <p className="timeline__details">{q.details}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}
