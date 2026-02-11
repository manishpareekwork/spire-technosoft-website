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
  responsibilities: string[];
};

type RolesGridProps = {
  roles: RoleCard[];
};

export function RolesGrid({ roles }: RolesGridProps) {
  const [activeRole, setActiveRole] = useState<RoleCard | null>(null);
  const pathname = usePathname();

  const basePath = useMemo(() => pathname || "/careers", [pathname]);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {roles.map((role) => (
          <div key={role.id} className="surface-card rounded-3xl p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{role.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveRole(role)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
                aria-label={`View details for ${role.title}`}
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {role.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                {role.mode}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {role.experience}
              </span>
            </div>
            <div className="mt-4">
              <Badge variant="soft">{role.timeline}</Badge>
            </div>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href={`${basePath}?role=${encodeURIComponent(role.title)}#apply`}>
                  Apply for this role
                </Link>
              </Button>
            </div>
          </div>
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
                <MapPin className="h-4 w-4 text-primary" />
                {activeRole.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                {activeRole.mode}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
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
                <a href="mailto:careers@spiretechnosoft.com">Email talent pod</a>
              </Button>
            </div>
          </div>
        ) : null}
      </Drawer>
    </>
  );
}
