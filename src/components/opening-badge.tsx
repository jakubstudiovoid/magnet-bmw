import { useEffect, useState } from "react";
import { getOpeningState, type OpeningState } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function OpeningBadge({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<OpeningState | null>(null);

  useEffect(() => {
    const tick = () => setState(getOpeningState());
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  if (!state) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-bg/75 px-3 py-1.5 text-xs tracking-wide text-muted shadow-border backdrop-blur-sm",
          className,
        )}
      >
        Po–Pá 9:00–17:00
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-bg/75 px-3 py-1.5 text-xs tracking-wide text-fg shadow-border backdrop-blur-sm",
        className,
      )}
      aria-live="polite"
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          state.open ? "bg-accent open-dot" : "bg-muted",
        )}
        aria-hidden
      />
      <span className="font-medium">{state.status}</span>
      {compact ? null : <span className="text-muted">{state.detail}</span>}
    </div>
  );
}
