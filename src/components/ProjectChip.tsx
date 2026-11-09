import type { Project } from "../types";

interface ProjectChipProps {
  project: Project;
  isTransitionTarget: boolean;
  onOpen: () => void;
}

/** A quiet text button that opens a project's dialog, used for a group's featured project. */
export function ProjectChip({ project, isTransitionTarget, onOpen }: ProjectChipProps) {
  // Same naming rule as ProjectCard: only named while morphing to/from the dialog.
  const chipName = isTransitionTarget ? `project-${project.id}` : undefined;

  return (
    <button
      type="button"
      className="chip"
      onClick={onOpen}
      aria-haspopup="dialog"
      style={{ viewTransitionName: chipName }}
    >
      <span className="chip__title">{project.title}</span>
      <svg className="chip__icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
        <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
}
