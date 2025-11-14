/**
 * @file Particle background component using react-tsparticles.
 * @description This is a client-side component responsible for rendering an animated,
 * interactive particle background. It's designed to be placed behind other content.
 * @module /src/components/ui/particle-background.tsx
 */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// Import the slim version of tsparticles, which is smaller and sufficient for our needs.
import { loadSlim } from "@tsparticles/slim";

/**
 * A client component that renders an animated particle background.
 * It initializes the particles engine once and renders the Particles component.
 *
 * @returns {React.ReactElement | null} The rendered Particles component or null if not initialized.
 */
export function ParticleBackground() {
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

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded", container);
  };

  // Memoize the options object to prevent unnecessary re-renders.
  const options: ISourceOptions = useMemo(() => {
    // Set particle color based on the current theme
    const particleColor =
      resolvedTheme === "light" ? "rgba(0,77,50,0.35)" : "rgba(193,237,221,0.4)"; // Softer blend for background

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
          distance: 140,
          enable: true,
          opacity: 0.25,
          width: 0.8,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 0.5, // Slow, subtle movement.
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60, // Number of particles.
        },
        opacity: {
          value: 0.25,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 }, // Slightly larger particles improve readability.
        },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="pointer-events-none absolute inset-0 -z-40" // Positioned behind all other content.
      />
    );
  }

  return null;
}
