/**
 * @file Particle background component using react-tsparticles.
 * @description This is a client-side component responsible for rendering an animated,
 * interactive particle background. It's designed to be placed behind other content.
 * @module /src/components/ui/particle-background.tsx
 */
"use client";

import { useEffect, useMemo, useState } from "react";
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
  const options: ISourceOptions = useMemo(
    () => ({
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
          value: "#ffffff", // White particles.
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2, // Faint links between particles.
          width: 1,
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
          value: 80, // Number of particles.
        },
        opacity: {
          value: 0.2, // Faint particles.
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // Small particles of varying sizes.
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 -z-10" // Positioned behind all other content.
      />
    );
  }

  return null;
}
