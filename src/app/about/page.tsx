import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const missionImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80";
const mapImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80";

const missionStatement =
  "To engineer digital systems that create tangible business growth through innovation, intelligence, and collaboration.";

const visionStatement =
  "To become the trusted global partner in transforming businesses with technology that connects people, data, and purpose.";

const values = [
  {
    name: "Integrity",
    description: "We build trust through transparency, accountability, and delivery excellence.",
  },
  {
    name: "Innovation with Purpose",
    description: "Every idea ladders up to measurable outcomes for our clients and their users.",
  },
  {
    name: "Empathy",
    description: "Human-centered products are shaped by inclusive research and collaboration.",
  },
  {
    name: "Sustainability",
    description: "We design scalable systems with long-term maintainability and responsible operations.",
  },
  {
    name: "Excellence",
    description: "We measure success in outcomes, not effort—tracking metrics at every milestone.",
  },
];

const timeline = [
  { year: "2016", milestone: "Founded with a mission to simplify complex enterprise technology programs." },
  { year: "2018", milestone: "Delivered the first large-scale audit platform operating across five countries." },
  { year: "2020", milestone: "Expanded into healthcare, wellness, and AI-driven mobile ecosystems." },
  { year: "2022", milestone: "Established our Innovation Lab focusing on AR/VR, generative AI, and IoT accelerators." },
  { year: "2024", milestone: "Rebranded with a sharper global focus and expanded vertical expertise." },
];

const leadershipTeam = [
  {
    name: "Manish Pareek",
    title: "Founder & Managing Director",
    experience: "18+ years in enterprise platforms",
    focus: "Audit automation, supply-chain quality, and product strategy",
    programs: "Global audit suites, compliance dashboards, and delivery playbooks",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ananya Deshmukh",
    title: "VP, Product & Experience",
    experience: "15+ years in healthcare and wellness",
    focus: "Patient journeys, caregiver workflows, and design systems",
    programs: "Wellness super apps, cognitive care platforms, UX governance",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rahul Iyer",
    title: "VP, Engineering & Cloud",
    experience: "16+ years in cloud and IoT",
    focus: "Industrial telemetry, DevOps, and security architecture",
    programs: "IoT reliability dashboards, data platforms, automation toolkits",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

const globalLocations = [
  { city: "Gurugram", region: "India (HQ)" },
  { city: "Pune", region: "India (Engineering Hub)" },
  { city: "London", region: "United Kingdom" },
  { city: "New York", region: "United States" },
  { city: "Singapore", region: "APAC" },
];

const deliveryModel = [
  "Daily overlap windows across IST, GMT, and ET for real-time collaboration.",
  "Weekly rituals: sprint planning, design critiques, and release readiness reviews.",
  "Always-on documentation with shared roadmaps, decision logs, and KPI dashboards.",
  "Dedicated client success lead for escalation, governance, and stakeholder updates.",
];

const whySpire = [
  "Proven delivery record across 25+ enterprise-scale projects with regulatory rigor.",
  "Modular architecture and reusable component frameworks accelerating timelines.",
  "Cross-functional teams merging design, engineering, product, and DevOps capabilities.",
  "Continuous improvement through analytics loops and outcome-driven governance.",
];

const testimonial = {
  quote:
    "Spire guided us from a fragmented roadmap to a unified platform release. Their pods brought structure, and the governance model kept every stakeholder aligned.",
  author: "Chief Product Officer, Global Retail Program (anonymised)",
};

export default function AboutPage() {
  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-12">
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Who We Are</p>
            <h1 className="text-3xl font-bold md:text-5xl">Product partners turning technology into measurable impact</h1>
            <p className="text-muted-foreground md:text-lg">
              Spire Technosoft is a global digital engineering company specializing in AI, cloud, and mobility. We help businesses
              accelerate transformation through scalable, human-centric products shaped by measurable outcomes.
            </p>
          </div>
          <div
            className="min-h-[260px] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,152,121,0.1), rgba(0,0,0,0.65)), url(${missionImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{missionStatement}</CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{visionStatement}</CardContent>
          </Card>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Values</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.name}>
                <p className="text-base font-semibold">{value.name}</p>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Company Timeline</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {timeline.map((entry) => (
              <Card key={entry.year} className="bg-card">
                <CardContent className="space-y-2 px-6 py-4">
                  <p className="text-xs uppercase tracking-wide text-secondary">{entry.year}</p>
                  <p className="text-sm text-muted-foreground">{entry.milestone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Leadership Snapshot</h2>
            <p className="text-muted-foreground">
              Leadership stays close to the work, co-authoring architecture reviews, journey maps, and transformation playbooks with our
              clients.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {leadershipTeam.map((leader) => (
              <Card key={leader.name} className="flex flex-col overflow-hidden bg-card">
                <div
                  className="h-48 w-full"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.65)), url(${leader.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <CardContent className="space-y-3 px-6 py-5">
                  <div>
                    <p className="text-lg font-semibold">{leader.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary">{leader.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{leader.experience}</p>
                  <p className="text-sm text-muted-foreground">Focus: {leader.focus}</p>
                  <p className="text-sm text-muted-foreground">Notable programs: {leader.programs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr,3fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Global Presence</h2>
            <p className="text-muted-foreground">
              Delivery hubs across India, the UK, the US, and APAC support follow-the-sun collaboration with executive visibility.
            </p>
            <div className="space-y-2">
              {globalLocations.map((location) => (
                <div key={`${location.city}-${location.region}`} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>
                    {location.city} — {location.region}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-sm font-semibold text-primary">How global delivery works</p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {deliveryModel.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="min-h-[260px] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,152,121,0.25), rgba(43,43,43,0.65)), url(${mapImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[3fr,2fr]">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Why Choose Spire Technosoft?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {whySpire.map((reason) => (
                <div key={reason} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{reason}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/30">
            <CardContent className="space-y-3 px-6 py-8">
              <p className="text-base font-semibold text-primary">Client Voice</p>
              <p className="text-lg font-medium leading-relaxed text-foreground">&quot;{testimonial.quote}&quot;</p>
              <p className="text-sm text-muted-foreground">{testimonial.author}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
