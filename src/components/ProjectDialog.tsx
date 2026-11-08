import { useId, type MouseEvent, type Ref, type SyntheticEvent } from "react";
import type { Project } from "../types";

interface ProjectDialogProps {
  project: Project | null;
  ref: Ref<HTMLDialogElement>;
  onRequestClose: () => void;
  onClosed: () => void;
}

export function ProjectDialog({ project, ref, onRequestClose, onClosed }: ProjectDialogProps) {
  // Unique per dialog, since each projects section renders its own.
  const titleId = useId();

  // Esc: stop the instant native close so we can animate it ourselves.
  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onRequestClose();
  };

  // A click directly on the <dialog> element (not its content) is a backdrop click.
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onRequestClose();
  };

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby={titleId}
      onCancel={handleCancel}
      onClose={onClosed}
      onClick={handleClick}
      style={{ viewTransitionName: project ? `project-${project.id}` : undefined }}
    >
      {project && (
        <div className="modal__content">
          <button type="button" className="modal__close" onClick={onRequestClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="modal__media">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1280}
              height={800}
              style={{ viewTransitionName: `project-image-${project.id}` }}
            />
          </div>

          <div className="modal__body">
            <h2 id={titleId} className="modal__title">
              {project.title}
            </h2>
            <p className="card__tagline">{project.tagline}</p>

            <p className="modal__description">{project.description}</p>

            <h3 className="modal__subheading">Highlights</h3>
            <ul className="modal__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <h3 className="modal__subheading">Tech stack</h3>
            <p className="modal__stack">{project.stack.join(" · ")}</p>

            <div className="links modal__links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  {project.liveLabel ?? "Live demo"} <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  Source code <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
