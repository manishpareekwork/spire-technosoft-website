import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  Leaf, 
  Trophy, 
  Calendar,
  Briefcase,
  Quote,
  ArrowRight,
  Zap,
  Globe,
  Compass,
  Award,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About | Spire Technosoft",
  description: "Product partners turning technology into measurable impact through innovation, intelligence, and collaboration.",
};

const values = [
  {
    name: "Integrity",
    icon: ShieldCheck,
    description: "Transparency and accountability are the foundations of our delivery excellence.",
    color: "primary",
    theme: "from-primary/20 via-primary/5 to-transparent"
  },
  {
    name: "Innovation",
    icon: Lightbulb,
    description: "Every idea ladders up to measurable outcomes for clients and their users.",
    color: "secondary",
    theme: "from-secondary/20 via-secondary/5 to-transparent"
  },
  {
    name: "Empathy",
    icon: Users,
    description: "Human-centered products shaped by inclusive research and collaboration.",
    color: "accent",
    theme: "from-accent/20 via-accent/5 to-transparent"
  },
  {
    name: "Sustainability",
    icon: Leaf,
    description: "We design for long-term maintainability and responsible digital operations.",
    color: "info",
    theme: "from-info/20 via-info/5 to-transparent"
  },
  {
    name: "Excellence",
    icon: Trophy,
    description: "We measure success in outcomes, tracking metrics at every milestone.",
    color: "success",
    theme: "from-success/20 via-success/5 to-transparent"
  },
];

const timeline = [
  { year: "2016", milestone: "Founded to simplify enterprise technology programs.", icon: Compass },
  { year: "2018", milestone: "Delivered first five-country global audit platform.", icon: Globe },
  { year: "2020", milestone: "Expanded into AI-driven healthcare and wellness.", icon: Zap },
  { year: "2022", milestone: "Established our Lab for AR/VR and IoT accelerators.", icon: Lightbulb },
  { year: "2024", milestone: "Rebranded with sharper focus on global intelligence.", icon: Sparkles },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell w-full space-y-16 py-16 text-center">
          <div className="relative">
            {/* Atmospheric Backgrounds */}
            <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-60 pulse-glow" />
            <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-secondary/15 blur-3xl opacity-50 pulse-glow" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
                <Users className="h-4 w-4 text-primary" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary font-[var(--font-poppins)]">Who We Are</p>
              </div>
              <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl leading-tight">
                Product partners for <span className="text-gradient-elegant">measurable impact</span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
                Spire Technosoft is a global digital engineering company helping businesses accelerate 
                transformation through scalable, human-centric intelligence.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            <div className="interactive-card bg-slate-900 text-white p-10 space-y-6 lg:col-span-1 text-left relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Target className="w-48 h-48" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-all shadow-lg">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  To engineer digital systems that create tangible business growth through innovation, intelligence, and collaboration.
                </p>
              </div>
            </div>
            
            <div className="interactive-card bg-primary text-white p-10 space-y-6 lg:col-span-2 text-left relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Eye className="w-64 h-64" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-all shadow-lg">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                  To become the trusted global partner in transforming businesses with technology that connects people, data, and purpose. We measure success in the value we unlock for humanity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="snap-section container animate-softFade py-20">
        <div className="section-shell space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-extrabold md:text-6xl text-gradient-elegant inline-block">Values that guide our delivery</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground whitespace-pre-wrap">
              Our principles are the architectural foundations of every platform we build.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div 
                key={value.name} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-10 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 space-y-6">
                  <div className={`h-14 w-14 rounded-2xl bg-${value.color}/10 flex items-center justify-center text-${value.color} group-hover:bg-${value.color} group-hover:text-white transition-all duration-300 shadow-lg`}>
                    <value.icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{value.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="snap-section container animate-softFade py-20">
        <div className="section-shell space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 border border-accent/20">
                <Calendar className="h-4 w-4 text-accent" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-accent font-[var(--font-poppins)]">Our History</p>
              </div>
              <h2 className="text-4xl font-extrabold md:text-6xl leading-tight">Evolution of Spire</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed lg:pb-2">
              From a niche consultancy to a global engineering partner, our journey is defined by enterprise trust and delivery excellence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5 pt-8">
            {timeline.map((entry, index) => (
              <div key={entry.year} className="interactive-card bg-white/95 dark:bg-card/40 p-10 group space-y-8 h-full border-white/20">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-all shadow-lg">
                  <entry.icon className="h-7 w-7" />
                </div>
                <div className="space-y-4">
                  <p className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors">{entry.year}</p>
                  <p className="text-sm font-semibold leading-relaxed text-foreground/80">{entry.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Trust */}
      <section className="snap-section container animate-softFade py-20">
        <div className="section-shell grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold md:text-5xl">Leadership Snapshot</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leadership stays close to the work, co-authoring architecture reviews, journey maps, and transformation playbooks with our clients.
              </p>
            </div>
            
            <div className="interactive-card bg-gradient-to-br from-slate-900 to-black p-10 space-y-8 text-white group relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(var(--primary),0.1),_transparent_40%)]" />
               <div className="relative z-10 flex items-center gap-8">
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/10 group-hover:border-primary transition-all">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Manish Pareek</h3>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mt-1">Founder & Managing Director</p>
                </div>
              </div>
              <div className="relative z-10 grid gap-6 text-sm text-white/60 pt-6 border-t border-white/10">
                <div className="flex gap-4"><Briefcase className="h-5 w-5 text-primary shrink-0" /> 18+ years in enterprise platforms</div>
                <div className="flex gap-4 text-left"><Target className="h-5 w-5 text-secondary shrink-0" /> Focus: Audit automation, product strategy, and regulatory growth</div>
                <div className="flex gap-4 text-left"><Trophy className="h-5 w-5 text-accent shrink-0" /> Programs: Global audit suites, healthcare systems, and delivery governance</div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8 relative overflow-hidden group">
              <h2 className="text-2xl font-extrabold md:text-3xl">Why Partners Choose Spire?</h2>
              <div className="space-y-6 pt-4">
                {[
                  "Proven record across 25+ enterprise-scale projects with regulatory rigor.",
                  "Modular architecture frameworks accelerating timeline by up to 40%.",
                  "Cross-functional Pods merging design, engineering, and product expertise.",
                  "Outcome-driven governance tied directly to your business KPIs."
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <p className="text-base text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-10 rounded-[40px] bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-2xl overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-white/10 pointer-events-none group-hover:scale-110 transition-transform">
                  <Quote className="w-48 h-48" />
               </div>
               <div className="relative z-10 space-y-8">
                  <p className="text-2xl font-medium italic leading-relaxed">
                    "Spire guided us from a fragmented roadmap to a unified platform release. Their pods brought structure, and the governance model kept every stakeholder aligned."
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest">CPO, Global Retail Program</p>
                      <p className="text-xs text-white/50">Enterprise Transformation Partner</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="snap-section container animate-softFade pb-20">
        <div className="relative overflow-hidden rounded-[40px] bg-slate-900 px-8 py-20 text-center text-white shadow-2xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(var(--primary),0.1),_transparent_40%)]" />
           <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.5em] text-white/50">Partner with Us</p>
                <h2 className="text-4xl font-extrabold md:text-6xl">Ready to Start Your Transformation?</h2>
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Discuss your business challenges and explore how our tailored solutions can drive measurable growth and innovation.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-12 text-lg font-bold group shadow-2xl hover:bg-white/95">
                  <Link href="/contact" className="flex items-center gap-2">
                    Book a Strategy Session <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                 <Button asChild variant="outline" size="lg" className="h-16 rounded-full border-white/30 text-white px-12 text-lg font-bold hover:bg-white/10">
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}


