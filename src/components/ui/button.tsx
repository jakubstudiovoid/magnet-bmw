import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium tracking-wide transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-bg hover:bg-fg/90 focus-visible:outline-accent",
        accent:
          "bg-accent text-accent-fg hover:bg-accent/90 focus-visible:outline-fg",
        outline:
          "bg-transparent text-fg shadow-border hover:bg-fg/6 hover:shadow-border-hover",
        ghost: "bg-transparent text-fg hover:bg-fg/6",
      },
      size: {
        sm: "h-10 gap-2 rounded-md px-4 text-sm",
        md: "h-12 gap-2 rounded-lg px-5 text-sm",
        lg: "h-14 gap-2.5 rounded-lg px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
