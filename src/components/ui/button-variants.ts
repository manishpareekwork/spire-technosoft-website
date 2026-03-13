import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background font-[var(--font-inter)]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:translate-y-[-2px] hover:shadow-float hover:bg-primary/90",
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:translate-y-[-2px] hover:shadow-float hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/90 hover:shadow-glow",
        outline:
          "border-transparent text-foreground bg-surface/50 backdrop-blur hover:bg-surface-2 shadow-sm hover:shadow-md",
        ghost:
          "text-foreground hover:bg-muted/70",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        link: "text-secondary underline-offset-4 hover:text-accent hover:underline transition-colors",
      },
      size: {
        default: "h-11 px-6 py-2.5 has-[>svg]:px-5",
        sm: "h-9 rounded-lg gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-14 rounded-lg px-8 has-[>svg]:px-6 text-base shadow-sm",
        xl: "h-16 rounded-lg px-10 text-lg shadow-md",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)
