/**
 * @file Particle background component using react-tsparticles.
 * @description This is a client-side component responsible for rendering an animated,
 * interactive particle background. It's designed to be placed behind other content.
 * @module /src/components/ui/particle-background.tsx
 */
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
// Import the slim version of tsparticles, which is smaller and sufficient for our needs.
import { loadSlim } from "@tsparticles/slim";

import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

/**
 * A client component that renders an animated particle background.
 * It initializes the particles engine once and renders the Particles component.
 *
 * @returns {React.ReactElement | null} The rendered Particles component or null if not initialized.
 */
export function ParticleBackground({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  // This effect will run once on the client to initialize the particles engine.
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim preset, which contains the necessary features for our particle animation.
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Memoize the options object to prevent unnecessary re-renders.
  const options: ISourceOptions = useMemo(() => {
    // Set particle color based on the current theme
    const particleColor =
      variant === "dark"
        ? "rgba(23, 215, 208, 0.34)"
        : resolvedTheme === "light"
          ? "rgba(10, 42, 88, 0.18)"
          : "rgba(148, 197, 255, 0.25)";

    return {
      background: {
        color: {
          value: "transparent", // The background is handled by the parent's CSS.
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Pushes particles away from the cursor.
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 120,
          enable: true,
          opacity: variant === "dark" ? 0.22 : 0.18,
          width: variant === "dark" ? 0.7 : 0.4,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: variant === "dark" ? 0.45 : 0.25,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: variant === "dark" ? 52 : 40,
        },
        opacity: {
          value: variant === "dark" ? 0.24 : 0.18,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: variant === "dark" ? { min: 1, max: 3.5 } : { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }, [resolvedTheme, variant]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-40",
          className
        )}
      />
    );
  }

  return null;
}
