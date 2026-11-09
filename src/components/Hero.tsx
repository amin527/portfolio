import { Link } from "react-router";
import type { Profile } from "../types";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const contacts = [
    { label: profile.email, href: `mailto:${profile.email}`, external: false, Icon: MailIcon },
    { label: "GitHub", href: profile.githubUrl, external: true, Icon: GitHubIcon },
    ...(profile.linkedinUrl
      ? [{ label: "LinkedIn", href: profile.linkedinUrl, external: true, Icon: LinkedInIcon }]
      : []),
  ];

  return (
    <section className="intro" aria-labelledby="intro-title">
      <h1 id="intro-title" className="intro__name intro__reveal">
        {profile.name}
      </h1>
      <p className="intro__role intro__reveal">{profile.role}</p>
      <p className="intro__bio intro__reveal">{profile.intro}</p>

      <div className="intro__aside intro__reveal">
        <ul className="contact" aria-label="Contact">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <a
                className="contact__link"
                href={contact.href}
                {...(contact.external && { target: "_blank", rel: "noreferrer" })}
              >
                <contact.Icon className="contact__icon" />
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
        <Link className="button intro__cv" to="/cv">
          View full CV <span className="button__arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
