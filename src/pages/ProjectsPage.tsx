import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { profile, projectGroups } from "../data/portfolio";

export function ProjectsPage() {
  return (
    <>
      <Hero profile={profile} />
      <div className="groups">
        {projectGroups.map((group) => (
          <Projects key={group.id} group={group} />
        ))}
      </div>
    </>
  );
}
