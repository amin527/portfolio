import type { Profile } from "../types";

const currentYear = new Date().getFullYear();

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <h2 className="site-footer__title">Get in touch</h2>
        <div className="links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          {profile.linkedinUrl && (
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <p className="site-footer__copy">
          © {currentYear} {profile.name}
        </p>
      </div>
    </footer>
  );
}
