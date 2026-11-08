import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  isTransitionTarget: boolean;
  onOpen: () => void;
}

export function ProjectCard({ project, isTransitionTarget, onOpen }: ProjectCardProps) {
  // Only the card morphing to/from the dialog is named; while the dialog is
  // open it owns these names, so the card must not have them.
  const cardName = isTransitionTarget ? `project-${project.id}` : undefined;
  const imageName = isTransitionTarget ? `project-image-${project.id}` : undefined;

  return (
    <article className="card" style={{ viewTransitionName: cardName }}>
      <div className="card__media">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          style={{ viewTransitionName: imageName }}
        />
      </div>

      <div className="card__body">
        <h3 className="card__title">
          <button type="button" className="card__open" onClick={onOpen} aria-haspopup="dialog">
            {project.title}
          </button>
        </h3>
        <p className="card__tagline">{project.tagline}</p>
        <p className="card__stack">
          <span className="visually-hidden">Tech stack: </span>
          {project.stack.join(" · ")}
        </p>

        <div className="links card__links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          )}
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Source code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
