import type { SkillGroup } from "../types";
import { Section } from "./Section";
import { Tags } from "./Tags";

interface SkillsProps {
  skills: SkillGroup[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" index="03" title="Skills">
      <dl className="skills">
        {skills.map((group) => (
          <div key={group.label} className="skills__group">
            <dt>{group.label}</dt>
            <dd>
              <Tags items={group.items} label={group.label} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
