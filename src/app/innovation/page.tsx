import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const focusAreas = [
  {
    title: "Artificial Intelligence & Data Science",
    description:
      "Predictive analytics, anomaly detection, and recommendation engines deployed responsibly across regulated industries.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AR/VR & Visualization",
    description:
      "Immersive training, monitoring, and decision aides combining real-world telemetry with spatial computing.",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "IoT & Edge Intelligence",
    description:
      "Connected sensors, low-latency edge processing, and data visualization for field operations and smart infrastructure.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Generative AI & Automation",
    description:
      "Intelligent automation for workflows, documentation, and customer engagement with human-in-the-loop guardrails.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
];

const recentInnovations = [
  {
    title: "Vision-based quality inspection",
    description: "Edge models classifying surface defects and anomalies, streaming insights to supervisors.",
  },
  {
    title: "AI chat agent for frontline teams",
    description: "Secure assistant answering SOP questions and triaging incidents in factories and stores.",
  },
  {
    title: "Jet108 faCTS personalization engine",
    description: "Adaptive workout and wellness recommendations powered by biometric and behavioral signals.",
  },
];

const processSteps = [
  { title: "Discover", description: "Identify real-world pain points and define success metrics with stakeholders." },
  { title: "Prototype", description: "Rapidly design and build proof-of-concepts using accelerators and reusable kits." },
  { title: "Validate", description: "Measure outcomes with pilot users and calibrate models, UX, and operating models." },
  { title: "Scale", description: "Transition to production-grade systems with observability, security, and rollout playbooks." },
];

const innovationHighlight = {
  title: "Predictive Audit Assistant",
  summary:
    "AI-driven anomaly detection that flags non-compliance before audit submission, saving hundreds of review hours annually.",
  impact: [
    "Trained on historical findings, regulations, and contextual metadata.",
    "Surfaced risk scores directly within inspector UX, guiding corrective actions.",
    "Reduced manual review loops by 35% for early adopters.",
  ],
  link: "/portfolio",
};

const thinkingPieces = [
  {
    title: "Designing Responsible Copilots for Regulated Industries",
    label: "Thought Leadership",
  },
  {
    title: "From Field Telemetry to Predictive Dashboards in 12 Weeks",
    label: "Playbook",
  },
  {
    title: "AR/VR Proof-of-Concept Checklist for Industrial Operators",
    label: "Guide",
  },
];

export default function InnovationPage(): React.ReactElement {
  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">Innovation Lab</p>
          <h1 className="text-3xl font-bold md:text-5xl">Where ideas evolve into intelligent products</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            Our lab prototypes AI, AR/VR, IoT, and generative technologies for business impact. We co-build with your teams to move
            from proof-of-concept to production.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area) => (
            <Card key={area.title} className="overflow-hidden rounded-2xl bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.65)), url(${area.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/30 shadow-[0_20px_35px_rgba(0,0,0,0.1)]">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl">How we collaborate</CardTitle>
            <CardDescription className="text-base text-foreground/80">
              Discovery workshops, accelerator kits, and coached launches that hand over sustainable capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-xl bg-background/80 p-4 text-left shadow-sm">
                <p className="text-sm font-semibold">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
          <CardHeader>
            <CardTitle>{innovationHighlight.title}</CardTitle>
            <CardDescription>{innovationHighlight.summary}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            {innovationHighlight.impact.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
            <a href={innovationHighlight.link} className="text-sm font-semibold text-primary underline">
              Explore related case studies
            </a>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Recent Innovations</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recentInnovations.map((item) => (
              <Card key={item.title} className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant="secondary">Lab</Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Thinking &amp; Playbooks</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {thinkingPieces.map((piece) => (
              <Card key={piece.title} className="bg-card shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                <CardHeader>
                  <Badge variant="outline" className="w-fit text-xs uppercase tracking-widest">
                    {piece.label}
                  </Badge>
                  <CardTitle className="text-lg">{piece.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
