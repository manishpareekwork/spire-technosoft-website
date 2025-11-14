import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const missionImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80";
const leadershipImage = "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80";
const mapImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80";

const values = [
  "Integrity",
  "Innovation with Purpose",
  "Empathy",
  "Sustainability",
  "Excellence",
];

export default function AboutPage() {
  return (
    <section className="container space-y-12 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">
            Who We Are
          </p>
          <h1 className="text-3xl font-bold md:text-5xl">
            Product partners turning technology into measurable impact
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Spire Technosoft is a product engineering and consulting studio that bridges design, engineering, and intelligence for
            enterprise scale. We work with teams that need compliant, human-centered digital systems built with speed and rigor.
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
        <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.07)]">
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Empower businesses with intelligent, secure, and scalable solutions that connect innovation with human experience.
          </CardContent>
        </Card>
        <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.07)]">
          <CardHeader>
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Become a trusted innovation partner driving digital modernization for enterprises around the globe.
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.07)]">
        <CardHeader>
          <CardTitle>Values</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {values.map((value) => (
            <span
              key={value}
              className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
            >
              {value}
            </span>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Leadership Snapshot</h2>
          <p className="text-muted-foreground">
            Founded by senior architects and technologists with 15+ years of global experience across AI, cloud, and mobile
            ecosystems. We pair architecture-first thinking with hands-on delivery leadership.
          </p>
        </div>
        <div
          className="min-h-[260px] rounded-3xl"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.65)), url(${leadershipImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr,3fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Global Presence</h2>
          <p className="text-muted-foreground">
            Offices and delivery footprints across India, UK, US, and APAC, supporting distributed teams with follow-the-sun
            collaboration.
          </p>
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
    </section>
  );
}
