import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CareersForm } from "@/components/forms/careers-form";

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
    location: "India (Gurugram/Pune) • Hybrid",
    experience: "3-6 years",
    timeline: "Rolling hiring, 4-6 week process",
  },
  {
    title: "Mobile Developer (React Native / Flutter)",
    description: "Craft performant mobile experiences, native integrations, and store deployments.",
    location: "India (Remote) • Hybrid options",
    experience: "2-5 years",
    timeline: "Rolling hiring, 4-6 week process",
  },
  {
    title: "Product Designer (UX/UI)",
    description: "Translate research into human-centered journeys, prototypes, and design systems.",
    location: "India (Gurugram) • Hybrid",
    experience: "4-8 years",
    timeline: "Hiring for next cohort in 6-8 weeks",
  },
  {
    title: "DevOps Engineer (AWS, CI/CD)",
    description: "Build resilient cloud infrastructure, IaC pipelines, and observability practices.",
    location: "India (Remote) • Hybrid options",
    experience: "4-7 years",
    timeline: "Rolling hiring, 4-6 week process",
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

const applyChecklist = [
  "Resume or portfolio link (PDF or URL)",
  "LinkedIn or GitHub profile",
  "Current location and notice period",
  "Role of interest and experience band",
];

export default function CareersPage(): React.ReactElement {
  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Careers</p>
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

        <Card className="bg-card">
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
              <Card key={role.title} className="bg-card">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Location:</span> {role.location}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Experience:</span> {role.experience}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Timeline:</span> {role.timeline}
                  </p>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Don&apos;t see your role?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Tell us how you can contribute: {" "}
                <a href="mailto:careers@spiretechnosoft.com" className="text-primary underline">
                  careers@spiretechnosoft.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-card">
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

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/30">
          <CardHeader>
            <CardTitle>Hiring Process</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {hiringProcess.map((step, index) => (
              <div key={step} className="interactive-card bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">Step {index + 1}</p>
                <p className="text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="space-y-3 px-6 py-6">
            <p className="text-base font-semibold text-primary">Employee Story</p>
            <p className="text-lg font-medium text-foreground">&quot;{employeeStory.quote}&quot;</p>
            <p className="text-sm text-muted-foreground">{employeeStory.name}</p>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[3fr,2fr]">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Apply to Spire</CardTitle>
            </CardHeader>
            <CardContent>
              <CareersForm roles={roles.map((role) => role.title)} />
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>What to include</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="space-y-2">
                {applyChecklist.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                Prefer email? Send your details to {" "}
                <a href="mailto:careers@spiretechnosoft.com?subject=Apply%20%40%20Spire" className="text-primary underline">
                  careers@spiretechnosoft.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/30">
          <CardContent className="space-y-4 px-6 py-6 text-center">
            <p className="text-lg font-semibold">Let&apos;s build something impactful together.</p>
            <p className="text-sm text-muted-foreground">
              Send your portfolio or GitHub links to {" "}
              <a href="mailto:careers@spiretechnosoft.com" className="font-medium text-primary underline">
                careers@spiretechnosoft.com
              </a>{" "}
              with the subject &quot;Apply @ Spire&quot;.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:careers@spiretechnosoft.com?subject=Apply%20%40%20Spire">Apply Now</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
