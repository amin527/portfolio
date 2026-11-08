import type { Achievement, Role } from "../types";
import { Section } from "./Section";
import { Tags } from "./Tags";

function AchievementItem({ achievement }: { achievement: Achievement }) {
  if (!achievement.heading) {
    return <li className="timeline__bullet">{achievement.text}</li>;
  }

  return (
    <li className="product">
      <p className="product__heading">{achievement.heading}</p>
      {achievement.text && <p>{achievement.text}</p>}
      {achievement.features && (
        <>
          <p className="product__label">Noteworthy Features</p>
          <ul className="product__features">
            {achievement.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

interface ExperienceProps {
  roles: Role[];
}

export function Experience({ roles }: ExperienceProps) {
  return (
    <Section id="experience" index="02" title="Professional Background">
      <ol className="timeline">
        {roles.map((role) => (
          <li key={`${role.organisation}-${role.period}`} className="timeline__item">
            <div className="timeline__head">
              <h3 className="timeline__title">{role.title}</h3>
              <p className="timeline__period">{role.period}</p>
            </div>
            <p className="timeline__org">
              {role.organisationUrl ? (
                <a href={role.organisationUrl} target="_blank" rel="noreferrer">
                  {role.organisation}
                </a>
              ) : (
                role.organisation
              )}
            </p>
            {role.stack && <Tags items={role.stack} label="Tech stack" />}
            {role.summary && <p className="timeline__summary">{role.summary}</p>}
            <ul className="timeline__list">
              {role.achievements.map((achievement) => (
                <AchievementItem
                  key={achievement.heading ?? achievement.text}
                  achievement={achievement}
                />
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
