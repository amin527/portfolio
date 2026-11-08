import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { profile, projects } from "../data/portfolio";

export function ProjectsPage() {
  return (
    <>
      <Hero profile={profile} />
      <Projects projects={projects} />
    </>
  );
}
