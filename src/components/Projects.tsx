import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { ProjectGroup } from "../types";
import { BeforeAfterCard } from "./BeforeAfterCard";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";

/** Runs a DOM update inside a view transition when the browser supports it. */
function withViewTransition(update: () => void) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typeof document.startViewTransition !== "function" || reducedMotion) {
    update();
    return;
  }

  document.startViewTransition(update);
}

interface ProjectsProps {
  group: ProjectGroup;
}

export function Projects({ group }: ProjectsProps) {
  const { id, title, description, link, featured, projects, showcase } = group;
  const allProjects = [...(featured ? [featured] : []), ...projects, ...(showcase ? [showcase] : [])];
  const headingId = `${id}-heading`;
  const dialogRef = useRef<HTMLDialogElement>(null);
  // The card taking part in the open/close animation. Only this card gets a
  // view-transition name, so the other cards stay in the background snapshot
  // instead of being layered on top of the expanding dialog.
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selected = isOpen ? (allProjects.find((p) => p.id === activeId) ?? null) : null;

  const openProject = (id: string) => {
    // Name the clicked card *before* the "old" snapshot is taken.
    flushSync(() => setActiveId(id));

    withViewTransition(() => {
      flushSync(() => setIsOpen(true));
      dialogRef.current?.showModal();
    });
  };

  const closeProject = () => {
    withViewTransition(() => {
      dialogRef.current?.close();
      flushSync(() => setIsOpen(false));
    });
  };

  return (
    <section id={id} className="group" aria-labelledby={headingId}>
      <header className="group__header">
        <h2 id={headingId} className="group__title">
          {title}
        </h2>
        <p className="group__description">{description}</p>
        {link && (
          <div className="links group__link">
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </header>

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isTransitionTarget={project.id === activeId && !isOpen}
            onOpen={() => openProject(project.id)}
          />
        ))}
        {showcase && (
          <BeforeAfterCard
            project={showcase}
            isTransitionTarget={showcase.id === activeId && !isOpen}
            onOpen={() => openProject(showcase.id)}
          />
        )}
      </div>

      <ProjectDialog
        ref={dialogRef}
        project={selected}
        onRequestClose={closeProject}
        // Safety net in case the browser closes the dialog natively.
        onClosed={() => setIsOpen(false)}
      />
    </section>
  );
}
