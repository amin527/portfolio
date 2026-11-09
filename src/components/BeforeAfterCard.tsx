import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import type { BeforeAfterProject } from "../types";

interface BeforeAfterCardProps {
  project: BeforeAfterProject;
  isTransitionTarget: boolean;
  onOpen: () => void;
}

const KEY_STEP = 5;

function clamp(value: number) {
  return Math.min(100, Math.max(0, value));
}

/**
 * Project card with a before/after comparison.
 * Only the divider line is draggable (pointer or arrow keys); clicking anywhere
 * else on the card opens the project dialog, like the other cards.
 */
export function BeforeAfterCard({ project, isTransitionTarget, onOpen }: BeforeAfterCardProps) {
  const [position, setPosition] = useState(50);
  const mediaRef = useRef<HTMLDivElement>(null);

  // Same naming as ProjectCard so the card morphs into the dialog.
  const cardName = isTransitionTarget ? `project-${project.id}` : undefined;
  const imageName = isTransitionTarget ? `project-image-${project.id}` : undefined;

  const moveTo = (clientX: number) => {
    const rect = mediaRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(Math.round(clamp(((clientX - rect.left) / rect.width) * 100)));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    // Keep receiving moves even when the pointer leaves the thin handle.
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) moveTo(event.clientX);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const next: Record<string, number> = {
      ArrowLeft: position - KEY_STEP,
      ArrowDown: position - KEY_STEP,
      ArrowRight: position + KEY_STEP,
      ArrowUp: position + KEY_STEP,
      Home: 0,
      End: 100,
    };
    if (!(event.key in next)) return;
    event.preventDefault();
    setPosition(clamp(next[event.key]));
  };

  return (
    <article className="card compare" style={{ viewTransitionName: cardName }}>
      <div
        ref={mediaRef}
        className="card__media compare__media"
        style={{ "--pos": `${position}%` } as CSSProperties}
      >
        <img
          className="compare__img"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          style={{ viewTransitionName: imageName }}
        />
        {/* The "before" image sits on top and is clipped to the left of the handle. */}
        <img
          className="compare__img compare__img--before"
          src={project.beforeImage}
          alt={project.beforeImageAlt}
          loading="lazy"
          decoding="async"
        />

        <span className="compare__tag compare__tag--before" aria-hidden="true">
          Before
        </span>
        <span className="compare__tag compare__tag--after" aria-hidden="true">
          After
        </span>

        <div
          className="compare__handle"
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison"
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={position}
          aria-valuetext={`${position}% before`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="card__body">
        <h3 className="card__title">
          <button type="button" className="card__open" onClick={onOpen} aria-haspopup="dialog">
            {project.title}
          </button>
        </h3>
        <p className="card__tagline">{project.tagline}</p>
      </div>
    </article>
  );
}
