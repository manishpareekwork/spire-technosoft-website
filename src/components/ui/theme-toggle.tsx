/**
 * @file A theme toggle component to switch between light and dark modes.
 * @module /src/components/theme-toggle.tsx
 */
"use client";

import * as React from "react";
import { Check, Laptop, Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

/**
 * A dropdown component that allows the user to switch between light, dark, and system themes.
 * @returns {React.ReactElement} The rendered theme toggle component.
 */
export function ThemeToggle({
  className,
  variant = "default",
}: {
  className?: string;
  /** Use on the dark glass header so the control stays visible. */
  variant?: "default" | "onDark";
}) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const icon =
    mounted && resolvedTheme === "dark" ? (
      <Moon className="h-[1.1rem] w-[1.1rem]" />
    ) : (
      <Sun className="h-[1.1rem] w-[1.1rem]" />
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "relative shrink-0",
            variant === "onDark" &&
              "border-white/35 bg-white/18 text-white shadow-none backdrop-blur-sm hover:bg-white/28 hover:text-white focus-visible:ring-white/70 focus-visible:ring-offset-[rgb(10,18,33)] dark:border-white/35 dark:bg-white/18 dark:text-white dark:hover:bg-white/28",
            variant === "onDark" && "focus-visible:ring-2 focus-visible:ring-offset-2",
            className
          )}
        >
          {icon}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[11rem] rounded-2xl p-2">
        <DropdownMenuLabel className="px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
          Appearance
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="mt-1 rounded-xl px-3 py-2.5"
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
          {theme === "light" ? <Check className="ml-auto h-4 w-4" /> : null}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="rounded-xl px-3 py-2.5"
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
          {theme === "dark" ? <Check className="ml-auto h-4 w-4" /> : null}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="rounded-xl px-3 py-2.5"
        >
          <Laptop className="mr-2 h-4 w-4" />
          System
          {theme === "system" ? <Check className="ml-auto h-4 w-4" /> : null}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
