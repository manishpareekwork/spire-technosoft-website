/**
 * @file Theme provider component that wraps the application and provides theme context.
 * @module /src/components/theme-provider.tsx
 */
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

/**
 * A client component that wraps the application and provides theme context using next-themes.
 * @param {ThemeProviderProps} props - The props for the theme provider.
 * @returns {React.ReactElement} The rendered theme provider.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
