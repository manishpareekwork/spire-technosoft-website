import * as React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva("inline-flex items-center gap-2 font-semibold transition-colors", {
  variants: {
    variant: {
      default: "text-primary hover:text-secondary",
      subtle: "text-foreground/80 hover:text-foreground",
      ghost: "text-muted-foreground hover:text-foreground",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type LinkProps = NextLinkProps &
  VariantProps<typeof linkVariants> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    external?: boolean;
  };

export function Link({ className, variant, size, external, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(linkVariants({ variant, size }), className)}
      rel={external ? "noreferrer" : props.rel}
      target={external ? "_blank" : props.target}
      {...props}
    />
  );
}

export { linkVariants };
