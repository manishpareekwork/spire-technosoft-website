import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cultureHighlights = [
  "Flat hierarchy with direct access to design, product, and engineering leadership",
  "Hybrid collaboration—remote flexibility plus in-person build weeks in India hubs",
  "Learning culture with mentorship, certifications, and open-source contributions",
  "Impact-driven squads that see products through research, build, and optimization",
];

const roles = [
  "Product Designers",
  "React / Node Engineers",
  "Flutter / React Native Developers",
  "Cloud & DevOps Engineers",
  "Data / AI Specialists",
];

export default function CareersPage(): React.ReactElement {
  return (
    <section className="container space-y-10 py-12 md:py-16">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">
          Careers
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">Join a team that blends innovation and empathy</h1>
        <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
          We design, build, and scale products that matter. Bring your curiosity, craft, and care—we will match it with meaningful
          missions and mentorship.
        </p>
      </div>

      <div
        className="rounded-3xl"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,152,121,0.45), rgba(43,43,43,0.65)), url(https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "260px",
        }}
      />

      <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
        <CardHeader>
          <CardTitle>Life at Spire</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {cultureHighlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>{highlight}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Open Roles</h2>
        <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
          <CardContent className="flex flex-wrap gap-3 px-6 py-5">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
              >
                {role}
              </span>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-primary/10 to-secondary/30 shadow-[0_20px_35px_rgba(0,0,0,0.12)]">
        <CardContent className="space-y-4 px-6 py-6 text-center">
          <p className="text-lg font-semibold">Let&apos;s build something impactful together.</p>
          <p className="text-sm text-muted-foreground">
            Send your portfolio or GitHub links to{" "}
            <a href="mailto:info@spiretechnosoft.com" className="font-medium text-primary underline">
              info@spiretechnosoft.com
            </a>{" "}
            with the subject “Apply @ Spire”.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:info@spiretechnosoft.com?subject=Apply%20%40%20Spire">Apply Now</a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
