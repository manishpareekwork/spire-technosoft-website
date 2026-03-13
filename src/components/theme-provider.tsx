/**
 * @file Theme provider component that wraps the application and provides theme context.
 * @module /src/components/theme-provider.tsx
 */
"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

export type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: "class" | `data-${string}`;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  storageKey?: string;
  disableTransitionOnChange?: boolean;
};

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function disableTransitions() {
  const style = document.createElement("style");
  style.appendChild(
    document.createTextNode("*{transition:none!important;animation:none!important}")
  );
  document.head.appendChild(style);

  return () => {
    window.getComputedStyle(document.body);
    requestAnimationFrame(() => {
      document.head.removeChild(style);
    });
  };
}

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);

  if (context) {
    return context;
  }

  return {
    theme: "light",
    resolvedTheme: "light",
    setTheme: () => {},
  };
}

/**
 * A client component that wraps the application and provides theme context.
 * @param {ThemeProviderProps} props - The props for the theme provider.
 * @returns {React.ReactElement} The rendered theme provider.
 */
export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme",
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = React.useState<ResolvedTheme>("light");

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    if (isTheme(storedTheme)) {
      setTheme(storedTheme);
    }
  }, [storageKey]);

  React.useEffect(() => {
    if (!enableSystem) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    updateSystemTheme();
    mediaQuery.addEventListener("change", updateSystemTheme);

    return () => mediaQuery.removeEventListener("change", updateSystemTheme);
  }, [enableSystem]);

  const resolvedTheme =
    theme === "system" ? (enableSystem ? systemTheme : getSystemTheme()) : theme;

  React.useEffect(() => {
    const cleanup = disableTransitionOnChange ? disableTransitions() : undefined;
    const root = document.documentElement;

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      if (resolvedTheme === "dark") {
        root.classList.add("dark");
      }
    } else {
      root.setAttribute(attribute, resolvedTheme);
    }

    window.localStorage.setItem(storageKey, theme);

    return cleanup;
  }, [attribute, disableTransitionOnChange, resolvedTheme, storageKey, theme]);

  const value = React.useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [resolvedTheme, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
