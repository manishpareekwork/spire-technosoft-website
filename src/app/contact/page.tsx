import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SocialProofBand } from "@/components/sections/social-proof";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe
} from "lucide-react";

export const metadata = {
  title: "Contact | Spire Technosoft",
  description: "Let's discuss how we can engineer growth together. Book a discovery call or send us a brief.",
};

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/spire-technosoft", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const nextSteps = [
  {
    title: "Initial Alignment",
    detail: "We confirm scope, gather context, and align on stakeholders within 24 hours.",
    icon: Sparkles
  },
  {
    title: "Discovery Workshop",
    detail: "Co-create outcomes, delivery plan, and a success metric baseline.",
    icon: Zap
  },
  {
    title: "Pod Kickoff",
    detail: "Finalize scope, budgets, and launch a Platform Pod within 2 weeks.",
    icon: Layers
  },
];

const contactPoints = [
  { label: "Email", value: "contact@spiretechnosoft.com", href: "mailto:contact@spiretechnosoft.com", icon: Mail },
  { label: "Phone", value: "+91 99100 70933", href: "tel:+919910070933", icon: Phone },
  { label: "Headquarters", value: "India | Global Delivery Presence", href: "#", icon: MapPin },
];

export default function ContactPage() {
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
                <Mail className="h-4 w-4 text-primary" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary font-[var(--font-poppins)]">
                  Connect
                </p>
              </div>
              <h1 className="text-4xl font-extrabold md:text-6xl lg:text-7xl leading-tight">
                Let&apos;s engineer <span className="text-gradient-elegant">growth together</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                Platform Pods, Experience Ops, and Intelligence Built-in keep every engagement modular, outcome-led, and accountable. 
                Share your roadmap or early idea and we will respond with next steps.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold group shadow-xl shadow-primary/20">
                  <a href="https://calendly.com/spire-technosoft/discovery" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    Book Discovery Session <Calendar className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 pt-4">
            {nextSteps.map((step, index) => (
              <div 
                key={step.title} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-8 space-y-4 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-black text-muted-foreground/30">STEP 0{index + 1}</span>
                </div>
                <div className="text-left space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr,1.2fr] py-16 items-start">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold md:text-4xl">Direct Engagement</h2>
              <div className="grid gap-4">
                {contactPoints.map((point) => (
                  <a 
                    key={point.label} 
                    href={point.href}
                    className="interactive-card p-6 flex items-center gap-6 group hover:translate-x-2 transition-transform"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <point.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{point.label}</p>
                      <p className="text-lg font-bold group-hover:text-primary transition-colors">{point.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-panel p-10 space-y-8 border-white/20">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-lg"
                      title={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-secondary" />
                  <p className="text-sm font-bold">Secure Data Handling</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Your roadmap and technical details are secure and handled under strict confidentiality from the first interaction."
                </p>
              </div>
            </div>
          </div>

          <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8 shadow-2xl shadow-primary/5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-secondary border border-secondary/20 mb-2">
                <Globe className="h-3.5 w-3.5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Intake</span>
              </div>
              <h2 className="text-3xl font-bold">Send us a brief</h2>
              <p className="text-muted-foreground">Select an inquiry type to route your request to the right pod.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-12">
        <SocialProofBand
          title="Trusted partners"
          description="Proof of outcomes across regulated programs, global delivery pods, and innovation sprints."
          variant="compact"
        />
      </section>

      {/* CTA Footer */}
      <section className="snap-section container animate-softFade pb-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-8 py-16 text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-white/40">Immediate Route</p>
            <h2 className="text-3xl font-bold md:text-5xl">Prefer a faster route?</h2>
            <p className="text-lg text-white/70">Skip the form and jump straight into a discovery session with our architects.</p>
            <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 h-14 px-12 text-lg font-bold group">
              <a href="https://calendly.com/spire-technosoft/discovery" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                Book on Calendly <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

