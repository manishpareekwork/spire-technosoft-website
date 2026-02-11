import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CareersForm } from "@/components/forms/careers-form";
import { 
  Sparkles, 
  Users, 
  MapPin, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  Lightbulb, 
  Globe, 
  Heart, 
  GraduationCap, 
  Mail,
  ArrowRight,
  UserPlus,
  Workflow,
  Zap,
  Coffee,
  Quote
} from "lucide-react";

const cultureHighlights = [
  { text: "Hybrid work model with global collaboration rituals.", icon: Globe },
  { text: "Learning culture—mentorship, hackathons, and R&D sprints.", icon: GraduationCap },
  { text: "Equal opportunity hiring with inclusive leadership.", icon: Users },
  { text: "Focus on well-being and flexible schedules.", icon: Heart },
];

const roles = [
  {
    title: "Full Stack Developer (React + Node)",
    description: "Ship enterprise-grade web platforms with TypeScript, GraphQL, and CI/CD automation.",
    location: "Gurugram/Pune • Hybrid",
    experience: "3-6 years",
    timeline: "Rolling hiring",
  },
  {
    title: "Mobile Developer (React Native / Flutter)",
    description: "Craft performant mobile experiences, native integrations, and store deployments.",
    location: "India (Remote) • Hybrid",
    experience: "2-5 years",
    timeline: "Rolling hiring",
  },
  {
    title: "Product Designer (UX/UI)",
    description: "Translate research into human-centered journeys and high-fidelity design systems.",
    location: "Gurugram • Hybrid",
    experience: "4-8 years",
    timeline: "Hiring for next cohort",
  },
  {
    title: "DevOps Engineer (AWS, CI/CD)",
    description: "Build resilient cloud infrastructure, IaC pipelines, and observability practices.",
    location: "India (Remote) • Hybrid",
    experience: "4-7 years",
    timeline: "Rolling hiring",
  },
];

const benefits = [
  { text: "Transparent growth tracks with quarterly coaching.", icon: Briefcase },
  { text: "Learning stipend for courses and conferences.", icon: GraduationCap },
  { text: "Wellness allowance plus hybrid flexibility.", icon: Heart },
  { text: "Work across healthcare, energy, and finance.", icon: Sparkles },
];

const hiringProcess = [
  { title: "Discovery", text: "Intro chat covering interests, values, and learning goals.", icon: Lightbulb },
  { title: "Technical", text: "Portfolio or code walkthrough with senior peers.", icon: Workflow },
  { title: "Challenge", text: "Collaborative design jam or architecture review session.", icon: Zap },
  { title: "Alignment", text: "Leadership connect to align on growth, impact, and offers.", icon: UserPlus },
];

const employeeStory = {
  quote: "I get to co-create with product leaders every week. The freedom to ship meaningful work keeps me inspired.",
  name: "Product Designer",
  area: "Wellness Programs",
};

export default function CareersPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16 text-center">
          <div className="relative">
            {/* Background elements */}
            <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-60 pulse-glow" />
            <div className="absolute top-0 right-1/4 h-56 w-56 rounded-full bg-secondary/15 blur-3xl opacity-50 pulse-glow" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
                <Users className="h-4 w-4 text-primary" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary font-[var(--font-poppins)]">
                  Careers
                </p>
              </div>
              <h1 className="text-4xl font-extrabold md:text-6xl lg:text-7xl leading-tight">
                Work with innovators who <span className="text-gradient-elegant">engineer impact</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                Innovation is collective. We believe in open dialogue, continuous learning, and empowering every team
                member to shape technology that matters.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-4">
            {cultureHighlights.map((item, index) => (
              <div 
                key={item.text} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-8 group transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-5xl text-gradient-elegant inline-block">Global Opportunities</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                We're looking for specialists who think in systems and deliver with empathy.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((role, index) => (
              <div 
                key={role.title} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-8 space-y-6 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{role.title}</h3>
                    <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60">
                    <MapPin className="h-4 w-4 text-secondary" />
                    {role.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60">
                    <Briefcase className="h-4 w-4 text-accent" />
                    {role.experience}
                  </div>
                </div>
              </div>
            ))}
            <div className="interactive-card bg-slate-900 text-white p-8 flex flex-col justify-center items-center text-center space-y-6">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Don't see your role?</h3>
                <p className="text-white/60 text-sm">Tell us how you can contribute. We're always looking for talent.</p>
              </div>
              <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                <a href="mailto:careers@spiretechnosoft.com">Email Talent Pod</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20 space-y-16 overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none">
            <Workflow className="w-96 h-96" />
          </div>
          
          <div className="relative z-10 text-center space-y-4">
            <h2 className="text-3xl font-bold md:text-5xl">The Hiring Roadmap</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our process is designed to be collaborative, transparent, and respectful of your time.
            </p>
          </div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {hiringProcess.map((step, index) => (
              <div key={step.title} className="space-y-6 group">
                <div className="relative">
                  <div className="h-20 w-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <step.icon className="h-10 w-10 text-primary group-hover:text-white" />
                  </div>
                  {index < hiringProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-24 w-full h-px border-t border-dashed border-white/20" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-widest text-primary">0{index + 1}</span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Growth */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell grid gap-12 lg:grid-cols-2 py-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-5xl">Growth that fuels impact</h2>
              <p className="text-muted-foreground text-lg">
                We invest in your development as much as our products.
              </p>
            </div>
            <div className="grid gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex gap-4 p-6 rounded-[2rem] bg-background/50 border border-primary/5 hover:bg-white transition-colors group">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-bold leading-tight self-center">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel p-10 space-y-8 border-primary/10 h-full flex flex-col justify-center">
              <div className="space-y-6">
                <Quote className="h-12 w-12 text-primary opacity-20" />
                <p className="text-2xl font-medium leading-relaxed italic text-foreground/80">
                  "{employeeStory.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div>
                    <p className="font-bold text-lg">{employeeStory.name}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{employeeStory.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form Section */}
      <section id="apply" className="snap-section container animate-softFade">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.5fr,1fr] py-16 items-start">
          <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Apply to Spire</h2>
              <p className="text-muted-foreground">Join a pod and start building the future.</p>
            </div>
            <CareersForm roles={roles.map((role) => role.title)} />
          </div>

          <div className="space-y-8">
            <div className="interactive-card bg-gradient-to-br from-primary/5 to-secondary/10 p-8 space-y-6">
              <h3 className="text-xl font-bold">What to include</h3>
              <div className="space-y-4">
                {[
                  "Portfolio link (PDF or URL)",
                  "LinkedIn / GitHub Profile",
                  "Location & Notice Period",
                  "Role & Experience Band"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel p-8 space-y-4 border-white/20">
              <div className="flex items-center gap-3 text-primary">
                <Mail className="h-5 w-5" />
                <h3 className="font-bold">Prefer Email?</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Send your details directly to our talent pod at{' '}
                <a href="mailto:careers@spiretechnosoft.com" className="font-black text-primary underline underline-offset-4">
                  careers@spiretechnosoft.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="snap-section container animate-softFade pb-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-primary via-secondary to-accent px-8 py-20 text-center text-white shadow-2xl shadow-primary/20">
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold md:text-6xl">Let's build something impactful together</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 h-14 text-lg font-bold group">
                <a href="mailto:careers@spiretechnosoft.com?subject=Apply%20%40%20Spire" className="flex items-center gap-2">
                  Apply Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          {/* Decorative Orbs */}
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl opacity-50" />
        </div>
      </section>
    </div>
  );
}

