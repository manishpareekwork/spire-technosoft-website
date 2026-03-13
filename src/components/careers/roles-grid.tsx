"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";

import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type RoleCard = {
  id: string;
  title: string;
  description: string;
  location: string;
  mode: string;
  experience: string;
  timeline: string;
  responsibilities: readonly string[];
};

type RolesGridProps = {
  roles: ReadonlyArray<RoleCard>;
};

export function RolesGrid({ roles }: RolesGridProps) {
  const [activeRole, setActiveRole] = useState<RoleCard | null>(null);
  const pathname = usePathname();

  const basePath = useMemo(() => pathname || "/careers", [pathname]);

  return (
    <>
      <div className="space-y-2">
        {roles.map((role) => (
          <article
            key={role.id}
            className="grid gap-6 border-t border-border/55 py-6 lg:grid-cols-[0.42fr,0.34fr,0.24fr]"
          >
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{role.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 icon-accent" />
                  {role.location}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 icon-accent" />
                  {role.mode}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 icon-accent" />
                  {role.experience}
                </span>
              </div>
              <div className="space-y-2">
                {role.responsibilities.slice(0, 2).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:justify-self-end">
              <Badge variant="soft">{role.timeline}</Badge>
              <div className="flex flex-col gap-3">
                <Button asChild size="lg">
                  <Link href={`${basePath}?role=${encodeURIComponent(role.title)}#apply`}>
                    Apply for this role
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setActiveRole(role)}
                  className="justify-between"
                  aria-label={`View details for ${role.title}`}
                >
                  See role details
                  <ArrowRight className="h-4 w-4 icon-accent" />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Drawer
        open={Boolean(activeRole)}
        onClose={() => setActiveRole(null)}
        side="right"
        title={activeRole?.title}
        description={activeRole?.description}
      >
        {activeRole ? (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 icon-accent" />
                {activeRole.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 icon-accent" />
                {activeRole.mode}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 icon-accent" />
                {activeRole.experience}
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Key responsibilities</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {activeRole.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg">
                <Link href={`${basePath}?role=${encodeURIComponent(activeRole.title)}#apply`}>
                  Apply now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:careers@spiretechnosoft.com">Email talent team</a>
              </Button>
            </div>
          </div>
        ) : null}
      </Drawer>
    </>
  );
}
