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
    title: "AI & Generative AI",
    description: "Copilots, decision agents, and model ops pipelines tuned for regulated industries.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Computer Vision & Edge Intelligence",
    description: "Vision-based automation for inspections, quality, and safety programs.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AR/VR for Training & Safety",
    description: "Immersive experiences that combine real-world telemetry with guided scenarios.",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Smart Healthcare & Predictive Monitoring",
    description: "Connected devices and predictive analytics for wellness and clinical contexts.",
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

export default function InnovationPage(): React.ReactElement {
  return (
    <section className="container space-y-10 py-12 md:py-16">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">
          Innovation Lab
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">
          R&D that explores AI, immersive tech, and intelligent automation
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
          Our lab prototypes AI, AR/VR, IoT, and generative technologies for business impact. We co-build with your teams to move
          from proof-of-concept to production.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {focusAreas.map((area) => (
          <Card
            key={area.title}
            className="overflow-hidden rounded-2xl bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
          >
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
            R&D showcases, accelerator kits, and coached launches that hand over sustainable capabilities.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          {["Exploration sprints", "Engineering toolkits", "Pilot-to-production coaching"].map((item) => (
            <div key={item} className="rounded-xl bg-background/80 p-4 text-sm font-semibold shadow-sm">
              {item}
            </div>
          ))}
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
    </section>
  );
}
