import type { Profile } from "../types";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="top" className="hero">
      <h1 className="hero__title">{profile.name}</h1>
      <p className="hero__role">{profile.role}</p>
      <p className="hero__location">{profile.location}</p>
      <p className="hero__intro">{profile.intro}</p>
      <div className="links">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        {profile.linkedinUrl && (
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </section>
  );
}
