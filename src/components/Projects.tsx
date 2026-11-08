import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";
import { Section } from "./Section";

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
  id: string;
  index: string;
  title: string;
  projects: Project[];
}

export function Projects({ id, index, title, projects }: ProjectsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // The card taking part in the open/close animation. Only this card gets a
  // view-transition name, so the other cards stay in the background snapshot
  // instead of being layered on top of the expanding dialog.
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selected = isOpen ? (projects.find((p) => p.id === activeId) ?? null) : null;

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
    <Section id={id} index={index} title={title}>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isTransitionTarget={project.id === activeId && !isOpen}
            onOpen={() => openProject(project.id)}
          />
        ))}
      </div>

      <ProjectDialog
        ref={dialogRef}
        project={selected}
        onRequestClose={closeProject}
        // Safety net in case the browser closes the dialog natively.
        onClosed={() => setIsOpen(false)}
      />
    </Section>
  );
}
