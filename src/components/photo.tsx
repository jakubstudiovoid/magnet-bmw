import type { SyntheticEvent } from "react";

type PhotoProps = {
  name: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fit?: "cover" | "natural";
  objectPosition?: string;
};

function blockMedia(event: SyntheticEvent) {
  event.preventDefault();
}

export function Photo({
  name,
  width,
  height,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 768px) 80vw, 100vw",
  fit = "cover",
  objectPosition,
}: PhotoProps) {
  return (
    <span className={className ? `photo ${className}` : "photo"} data-fit={fit} onContextMenu={blockMedia}>
      <img
        src={`/images/${name}.webp`}
        srcSet={`/images/${name}-800.webp 800w, /images/${name}.webp ${width}w`}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        className="photo-img"
        style={objectPosition ? { objectPosition } : undefined}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        draggable={false}
        onDragStart={blockMedia}
      />
    </span>
  );
}
