import Link from "next/link";
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

export const metadata = {
  title: "Careers | Spire Technosoft",
  description: "Work with innovators who engineer impact. Join our delivery pods and help scale digital systems for global enterprises.",
};

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
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center border-none shadow-none bg-transparent">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
              <Users className="h-4 w-4 text-primary" />
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                Careers
              </p>
            </div>
            <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl leading-tight text-foreground">
              Engineering <span className="text-secondary">Impact Together</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed font-medium">
              Innovation is collective. We believe in open dialogue, continuous learning, and empowering every team
              member to shape technology that matters for global enterprises.
            </p>
            <div className="flex justify-center pt-8">
              <Button asChild size="lg" className="h-16 rounded-full bg-primary text-white hover:text-white px-12 text-lg font-bold group shadow-2xl hover:bg-secondary border-none">
                <Link href="#apply" className="flex items-center gap-3">
                  Applied for a Role <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">
            {cultureHighlights.map((item, index) => (
              <div 
                key={item.text} 
                className="interactive-card p-10 group text-left shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="text-lg font-bold text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="container animate-softFade py-20">
        <div className="space-y-16 text-left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-primary border border-primary/10">
              <Sparkles className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Opportunities</span>
            </div>
            <h2 className="text-4xl font-extrabold md:text-7xl text-secondary tracking-tight">Active Pod Roles</h2>
            <p className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed">
              We're looking for specialists who think in systems and deliver with empathy across regulated industries.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {roles.map((role) => (
              <div 
                key={role.title} 
                className="interactive-card p-10 space-y-8 group shadow-xl bg-white border border-primary/5"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-tight">{role.title}</h3>
                    <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed font-semibold">{role.description}</p>
                </div>
                <div className="flex flex-wrap gap-6 pt-2">
                  <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary/60">
                    <MapPin className="h-4 w-4 text-primary" />
                    {role.location}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary/60">
                    <Briefcase className="h-4 w-4 text-primary" />
                    {role.experience}
                  </div>
                </div>
              </div>
            ))}
            <div className="interactive-card bg-primary p-12 flex flex-col justify-center items-center text-center space-y-8 rounded-[3rem] shadow-2xl">
              <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center shadow-inner">
                <Coffee className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold text-white">Speculative Hire?</h3>
                <p className="text-white/80 text-lg font-medium">Tell us how you can contribute. We're always looking for exceptional talent.</p>
              </div>
              <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-12 text-lg font-bold hover:bg-white/95 border-none shadow-xl">
                <a href="mailto:careers@spiretechnosoft.com">Email Talent Pod</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="container animate-softFade py-20">
        <div className="bg-white border border-primary/5 rounded-[3rem] p-12 lg:p-24 space-y-20 overflow-hidden shadow-3xl text-center">
          <div className="relative z-10 space-y-6">
             <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-primary border border-primary/10">
              <Workflow className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Rhythm</span>
            </div>
            <h2 className="text-4xl font-extrabold md:text-7xl text-secondary">The Hiring Roadmap</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
              Our process is designed to be collaborative, transparent, and respectful of your time.
            </p>
          </div>

          <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4 pt-10">
            {hiringProcess.map((step, index) => (
              <div key={step.title} className="space-y-8 group text-left">
                <div className="relative">
                  <div className="h-24 w-24 rounded-3xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <step.icon className="h-12 w-12" />
                  </div>
                  <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-white border border-primary/10 flex items-center justify-center font-black text-primary text-sm shadow-sm">
                    0{index + 1}
                  </div>
                </div>
                <div className="space-y-3">
                   <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                   <p className="text-base text-muted-foreground leading-relaxed font-semibold">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Growth */}
      <section className="container animate-softFade py-20">
        <div className="grid gap-20 lg:grid-cols-2 items-center text-left">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold md:text-7xl text-secondary">Fueling Impact</h2>
              <p className="text-muted-foreground text-xl font-medium leading-relaxed max-w-xl">
                We invest in your development as much as our products.
              </p>
            </div>
            <div className="grid gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex gap-6 p-8 rounded-[2.5rem] bg-white border border-primary/5 hover:border-primary/20 hover:bg-primary group shadow-lg transition-all">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all shadow-sm shrink-0">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <p className="text-xl font-bold leading-tight self-center text-foreground group-hover:text-white transition-colors">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="interactive-card p-12 space-y-10 shadow-3xl bg-white border border-primary/5 rounded-[3rem]">
              <div className="space-y-8">
                <Quote className="h-16 w-16 text-primary opacity-10" />
                <p className="text-3xl font-medium leading-relaxed italic text-foreground/80">
                  "{employeeStory.quote}"
                </p>
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary shadow-md" />
                  <div>
                    <p className="font-bold text-2xl text-foreground">{employeeStory.name}</p>
                    <p className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">{employeeStory.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form Section */}
      <section id="apply" className="container animate-softFade py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr,1fr] items-start text-left">
          <div className="interactive-card p-12 space-y-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] bg-white border border-primary/5">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-secondary">Join the Pod</h2>
              <p className="text-xl text-muted-foreground font-semibold">Ready to co-create high-stakes enterprise systems?</p>
            </div>
            <CareersForm roles={roles.map((role) => role.title)} />
          </div>

          <div className="space-y-10">
            <div className="interactive-card bg-primary/5 p-10 space-y-8 border border-primary/10 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground">Intake Readiness</h3>
              <div className="space-y-6">
                {[
                  "Portfolio link (PDF or URL)",
                  "LinkedIn / GitHub Profile",
                  "Location & Notice Period",
                  "Role & Experience Band"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 opacity-40" />
                    <span className="text-lg font-semibold text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="interactive-card p-10 space-y-6 bg-white shadow-xl border border-primary/5">
              <div className="flex items-center gap-4 text-primary">
                <Mail className="h-7 w-7" />
                <h3 className="text-xl font-bold">Talent Pipeline</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
                Send your details directly to our talent pod at{' '}
                <a href="mailto:careers@spiretechnosoft.com" className="font-black text-primary underline underline-offset-8">
                  careers@spiretechnosoft.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container animate-softFade pb-40">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-24 text-center text-white shadow-2xl shadow-primary/20">
          <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold md:text-7xl">Engineer Impact Together</h2>
            <p className="text-2xl text-white/80 font-medium">We deliver across regulated programs with high-accountability delivery pods.</p>
            <div className="flex justify-center pt-8">
              <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-16 text-xl font-bold group shadow-2xl hover:bg-white/95 border-none">
                <a href="mailto:careers@spiretechnosoft.com?subject=Apply%20%40%20Spire" className="flex items-center gap-3">
                  Start Your Journey <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
