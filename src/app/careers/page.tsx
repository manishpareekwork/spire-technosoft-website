import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cultureHighlights = [
  "Hybrid work model with global collaboration rituals and India-based build weeks.",
  "Learning culture—mentorship, hackathons, internal R&D sprints, and sponsored certifications.",
  "Equal opportunity hiring with diversity-focused panels and inclusive leadership.",
  "Focus on well-being with mental-health support, flexible schedules, and purposeful work.",
];

const roles = [
  {
    title: "Full Stack Developer (React + Node)",
    description: "Ship enterprise-grade web platforms with TypeScript, GraphQL, and CI/CD automation.",
  },
  {
    title: "Mobile Developer (React Native / Flutter)",
    description: "Craft performant mobile experiences, native integrations, and store deployments.",
  },
  {
    title: "Product Designer (UX/UI)",
    description: "Translate research into human-centered journeys, prototypes, and design systems.",
  },
  {
    title: "DevOps Engineer (AWS, CI/CD)",
    description: "Build resilient cloud infrastructure, IaC pipelines, and observability practices.",
  },
];

const benefits = [
  "Transparent growth tracks with quarterly feedback and coaching.",
  "Learning stipend for books, courses, and conferences.",
  "Wellness allowance plus hybrid workplace flexibility.",
  "Opportunity to work across industries—healthcare, energy, finance, retail.",
];

const hiringProcess = [
  "Intro chat covering interests, values, and learning goals.",
  "Portfolio or code walkthrough with senior peers.",
  "Collaborative challenge (design jam, architecture review, or pairing session).",
  "Leadership connect to align on growth, impact, and offer details.",
];

const employeeStory = {
  quote:
    "I get to co-create with product and engineering leaders every week. The trust, mentorship, and freedom to ship meaningful work keep me inspired.",
  name: "Product Designer, Wellness Programs",
};

export default function CareersPage(): React.ReactElement {
  return (
    <section className="container animate-softFade space-y-10 py-12 md:py-16">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">
          Careers
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">Work with innovators who engineer impact</h1>
        <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
          At Spire Technosoft, innovation is collective. We believe in open dialogue, continuous learning, and empowering every team
          member to shape technology that matters.
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
        <div className="grid gap-4 md:grid-cols-2">
          {roles.map((role) => (
            <Card key={role.title} className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
              <CardHeader>
                <CardTitle className="text-lg">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{role.description}</CardContent>
            </Card>
          ))}
          <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
            <CardHeader>
              <CardTitle>Don&apos;t see your role?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Tell us how you can contribute:{" "}
              <a href="mailto:contact@spiretechnosoft.com" className="text-primary underline">
                contact@spiretechnosoft.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
        <CardHeader>
          <CardTitle>Benefits & Growth</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{benefit}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-primary/10 to-secondary/30 shadow-[0_20px_35px_rgba(0,0,0,0.12)]">
        <CardHeader>
          <CardTitle>Hiring Process</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {hiringProcess.map((step, index) => (
            <div key={step} className="rounded-xl bg-background/70 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">Step {index + 1}</p>
              <p className="text-sm text-muted-foreground">{step}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
        <CardContent className="space-y-3 px-6 py-6">
          <p className="text-base font-semibold text-primary">Employee Story</p>
          <p className="text-lg font-medium text-foreground">
            “{employeeStory.quote}”
          </p>
          <p className="text-sm text-muted-foreground">{employeeStory.name}</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-primary/10 to-secondary/30 shadow-[0_20px_35px_rgba(0,0,0,0.12)]">
        <CardContent className="space-y-4 px-6 py-6 text-center">
          <p className="text-lg font-semibold">Let&apos;s build something impactful together.</p>
          <p className="text-sm text-muted-foreground">
            Send your portfolio or GitHub links to{" "}
            <a href="mailto:contact@spiretechnosoft.com" className="font-medium text-primary underline">
              contact@spiretechnosoft.com
            </a>{" "}
            with the subject “Apply @ Spire”.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:contact@spiretechnosoft.com?subject=Apply%20%40%20Spire">Apply Now</a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
