import Link from "next/link";
import { 
  ArrowRight, 
  ClipboardCheck, 
  Heart, 
  Package, 
  Cpu,
  Factory,
  Sparkles,
  Building2,
  TrendingUp,
  CheckCircle2,
  Layers,
  Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialProofBand } from "@/components/sections/social-proof";
import { ResourceDownloads } from "@/components/sections/resource-downloads";
import { differentiators } from "@/data/differentiators";
import { industryProfiles } from "@/data/industries";
import { solutionDetails } from "@/data/solutions";

const solutionIcons = {
  "audit": ClipboardCheck,
  "healthcare": Heart,
  "supply-chain": Package,
  "industrial-iot": Cpu,
};

const industryIcons = {
  "manufacturing": Factory,
  "healthcare": Heart,
  "retail-fmcg": Building2,
  "energy": Sparkles,
  "finance": TrendingUp,
};

export const metadata = {
  title: "Solutions | Spire Technosoft",
  description: "Modular platforms built for regulated environments. Explore our expertise in audit, healthcare, supply chain, and industrial IoT.",
};

export default function SolutionsPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center border-none shadow-none bg-transparent">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
              <Layers className="h-4 w-4 text-primary" />
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Expertise</p>
            </div>
            <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl leading-tight">
              Modular platforms built for <span className="text-secondary">regulated industries</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
              Platform Pods, Experience Ops, and Intelligence Built-in sit at the core of every engagement. Each solution area delivers
              secure, measurable outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {differentiators.map((item) => (
                <span 
                  key={item.title} 
                  className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary border border-primary/10 shadow-sm"
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Areas */}
      <section className="container animate-softFade py-10">
        <div className="space-y-24">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-extrabold md:text-6xl text-secondary">Solution Portfolios</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">End-to-end platforms designed for enterprise complexity and regulatory rigor.</p>
          </div>
          
          <div className="space-y-32">
            {solutionDetails.map((solution, index) => {
              const Icon = solutionIcons[solution.slug as keyof typeof solutionIcons] || Network;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={solution.slug} 
                  className="group relative"
                >
                  <div className={`grid gap-16 lg:grid-cols-2 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Visual Section */}
                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="interactive-card relative aspect-video flex flex-col items-center justify-center gap-8 rounded-[2rem] bg-white p-12 overflow-hidden border-primary/5 shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 text-primary/5">
                          <Network className="w-48 h-48 rotate-12" />
                        </div>
                        
                        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <Icon className="h-10 w-10" />
                        </div>
                        
                        <div className="relative z-10 grid sm:grid-cols-2 gap-4 w-full">
                          {solution.successMetrics.slice(0, 4).map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-primary/5 rounded-xl p-4 border border-primary/10">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                              <span className="text-sm font-bold text-foreground/80">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`space-y-8 ${!isEven ? 'lg:order-1' : ''} text-left`}>
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {solution.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-4xl font-bold md:text-5xl group-hover:text-primary transition-colors duration-300">
                          {solution.title}
                        </h3>
                        <p className="text-2xl font-semibold text-secondary leading-relaxed">
                          {solution.summary}
                        </p>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {solution.intro}
                      </p>

                      <div className="pt-4">
                        <Button asChild size="lg" className="h-16 rounded-full bg-primary text-white hover:text-white px-10 text-lg font-bold group/btn border-none shadow-xl hover:bg-secondary">
                          <Link href={`/solutions/${solution.slug}`} className="flex items-center">
                            Explore Solution Portfolio
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Specialization */}
      <section className="container animate-softFade py-32">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 border border-primary/10">
              <Building2 className="h-4 w-4 text-primary" />
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Cross-Industry</p>
            </div>
            <h2 className="text-4xl font-extrabold md:text-6xl text-secondary">Industry Nuance</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Regulatory context, mission-critical programs, and relevant proof points for executive stakeholders.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryProfiles.map((industry) => {
              const IndustryIcon = industryIcons[industry.slug as keyof typeof industryIcons] || Building2;
              
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="interactive-card group block space-y-8 p-10 bg-white shadow-xl hover:shadow-2xl text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <IndustryIcon className="h-8 w-8" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-primary/40 group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-foreground">{industry.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{industry.summary}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-20 bg-primary/5 border-y border-primary/10">
        <SocialProofBand
          title="Enterprise credibility"
          description="Repeatable results across audit, healthcare, supply chain, and industrial programs."
          variant="compact"
        />
      </section>

      <section className="container py-20 pb-32">
        <ResourceDownloads
          title="Shareable sales assets"
          description="Download the one-pager, Platform Pods overview, and Innovation Lab brochure to support internal alignment."
        />
      </section>
    </div>
  );
}
