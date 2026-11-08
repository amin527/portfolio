import { About } from "../components/About";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { profile, qualifications, roles } from "../data/portfolio";

export function AboutPage() {
  return (
    <div className="split-page">
      <header className="page-header">
        <h1 className="page-header__title">About</h1>
      </header>
      <About profile={profile} />
      <Experience roles={roles} />
      <Skills skills={profile.skills} />
      <Education qualifications={qualifications} />
    </div>
  );
}
