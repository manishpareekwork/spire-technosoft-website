import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background font-[var(--font-inter)]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-glow",
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-glow",
        accent:
          "bg-accent text-white shadow-soft hover:-translate-y-0.5 hover:bg-accent/92 hover:shadow-[0_22px_55px_-28px_rgba(255,114,58,0.58)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-secondary/92 hover:shadow-soft",
        outline:
          "border border-border/70 bg-white/55 text-foreground shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white/80 hover:shadow-soft dark:bg-surface/70",
        ghost:
          "text-foreground hover:bg-surface/80",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        link: "rounded-none px-0 text-secondary underline-offset-4 hover:text-primary hover:underline transition-colors shadow-none",
      },
      size: {
        default: "h-11 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-[3.25rem] px-7 text-[0.95rem] has-[>svg]:px-6",
        xl: "h-[3.75rem] px-9 text-base has-[>svg]:px-8",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)
