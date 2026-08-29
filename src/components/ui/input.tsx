import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-lg bg-elevated px-4 text-base text-fg shadow-border outline-none placeholder:text-subtle",
        "transition-[box-shadow] duration-150",
        "hover:shadow-border-hover focus:ring-2 focus:ring-accent",
        className,
      )}
      {...props}
    />
  );
}
