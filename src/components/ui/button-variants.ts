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
          "border border-transparent bg-white/72 text-foreground shadow-[inset_0_0_0_1px_hsla(var(--border),0.2),0_18px_40px_-30px_rgba(9,26,45,0.18)] backdrop-blur hover:-translate-y-0.5 hover:bg-white/88 hover:shadow-[inset_0_0_0_1px_hsla(var(--primary),0.12),0_24px_52px_-30px_rgba(9,26,45,0.22)] dark:bg-surface/78 dark:text-foreground dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.28),0_18px_40px_-30px_rgba(0,0,0,0.34)]",
        ghost:
          "text-foreground hover:bg-surface/80",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        link: "rounded-none px-0 text-secondary underline-offset-4 hover:text-primary hover:underline transition-colors shadow-none",
      },
      size: {
        default: "h-11 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 px-6 text-[0.92rem] has-[>svg]:px-5",
        xl: "h-14 px-7 text-[0.96rem] has-[>svg]:px-6 md:h-12",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)
