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
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center border-none shadow-none bg-transparent">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
              <Mail className="h-4 w-4 text-primary" />
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                Connect
              </p>
            </div>
            <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl leading-tight">
              Let&apos;s engineer <span className="text-secondary">growth together</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
              Platform Pods and Experience Ops keep every engagement outcome-led. 
              Share your roadmap and we will respond with a strategic plan.
            </p>
            <div className="flex justify-center pt-8">
              <Button asChild size="lg" className="h-16 rounded-full bg-primary text-white hover:text-white px-12 text-lg font-bold group shadow-2xl hover:bg-secondary border-none">
                <a href="https://calendly.com/spire-technosoft/discovery" target="_blank" rel="noreferrer" className="flex items-center gap-3">
                  Book Discovery Session <Calendar className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 pt-12">
            {nextSteps.map((step, index) => (
              <div 
                key={step.title} 
                className="interactive-card p-8 group text-left shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Step 0{index + 1}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-semibold">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="container animate-softFade py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.3fr] items-start text-left">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-secondary tracking-tight">Direct Access</h2>
              <div className="grid gap-6">
                {contactPoints.map((point) => (
                  <a 
                    key={point.label} 
                    href={point.href}
                    className="interactive-card p-8 flex items-center gap-8 shadow-lg hover:translate-x-4 transition-all"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <point.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{point.label}</p>
                      <p className="text-xl font-bold text-foreground">{point.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="interactive-card bg-white p-10 space-y-10 shadow-2xl border border-primary/5">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Global Presence</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all border border-primary/10 shadow-sm"
                      title={link.label}
                    >
                      <link.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-primary/10 space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <p className="text-lg font-bold">Secure Intake Process</p>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed font-semibold">
                  "Your roadmap and technical details are secure and handled under strict confidentiality from the first interaction."
                </p>
              </div>
            </div>
          </div>

          <div className="interactive-card bg-white p-12 space-y-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] border border-primary/5">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-primary border border-primary/10 mb-2">
                <Globe className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Intake</span>
              </div>
              <h2 className="text-4xl font-extrabold text-secondary">Initiate a Workshop</h2>
              <p className="text-lg text-muted-foreground font-semibold">Select an inquiry type to route your request to the right pod.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-20 pb-40">
        <SocialProofBand
          title="Trusted partners"
          description="Proof of outcomes across regulated programs, global delivery pods, and innovation sprints."
          variant="compact"
        />
      </section>

      {/* CTA Footer */}
      <section className="container animate-softFade pb-40">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-24 text-center text-white shadow-2xl shadow-primary/20">
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold md:text-7xl">Prefer a faster route?</h2>
            <p className="text-2xl text-white/80 font-medium">Skip the form and jump straight into a discovery session with our architects.</p>
            <div className="flex justify-center pt-8">
              <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-16 text-xl font-bold group shadow-2xl hover:bg-white/95 border-none">
                <a href="https://calendly.com/spire-technosoft/discovery" target="_blank" rel="noreferrer" className="flex items-center gap-3">
                  Book on Calendly <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
