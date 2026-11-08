import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { businessProjects, profile, projects } from "../data/portfolio";

export function ProjectsPage() {
  return (
    <>
      <Hero profile={profile} />
      <div className="project-sections">
        <Projects id="projects" index="01" title="Personal Projects" projects={projects} />
        <Projects id="527studios" index="02" title="527Studios Limited" projects={businessProjects} />
      </div>
    </>
  );
}
