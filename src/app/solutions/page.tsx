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

// Icon mapping for each solution
const solutionIcons = {
  "audit": ClipboardCheck,
  "healthcare": Heart,
  "supply-chain": Package,
  "industrial-iot": Cpu,
};

// Industry icon mapping
const industryIcons = {
  "manufacturing": Factory,
  "healthcare": Heart,
  "retail-fmcg": Building2,
  "energy": Sparkles,
  "finance": TrendingUp,
};

export default function SolutionsPage(): React.ReactElement {
  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-24">
        {/* Hero Section */}
        <div className="space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
            <Layers className="h-4 w-4 text-primary" />
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary font-[var(--font-poppins)]">Expertise</p>
          </div>
          <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl leading-tight">
            Modular platforms built for <span className="text-gradient-elegant">regulated environments</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Platform Pods, Experience Ops, and Intelligence Built-in sit at the core of every engagement. Each solution area delivers
            secure, measurable outcomes in 2-6-12 week increments.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {differentiators.map((item, index) => (
              <span 
                key={item.title} 
                className="rounded-full bg-white/80 dark:bg-gray-800/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary border border-primary/10 shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>

        {/* Solution Areas */}
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Solution Areas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">End-to-end platforms designed for enterprise complexity and regulatory rigor.</p>
          </div>
          
          <div className="space-y-20">
            {solutionDetails.map((solution, index) => {
              const Icon = solutionIcons[solution.slug as keyof typeof solutionIcons];
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={solution.slug} 
                  className="group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`grid gap-12 lg:grid-cols-[1fr,1.2fr] ${!isEven ? 'lg:grid-cols-[1.2fr,1fr]' : ''} items-center`}>
                    {/* Visual Section */}
                    <div className={`order-1 ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative">
                        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
                        
                        <div className="interactive-card relative aspect-square max-w-[400px] mx-auto flex flex-col items-center justify-center gap-6 rounded-3xl bg-white/95 dark:bg-gray-900/90 p-12 overflow-hidden">
                          <div className="absolute top-0 left-0 p-6 text-primary/5">
                            <Network className="w-32 h-32 rotate-12" />
                          </div>
                          
                          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                            <Icon className="h-12 w-12 text-white" />
                          </div>
                          
                          <div className="relative z-10 space-y-4 w-full">
                            {solution.successMetrics.slice(0, 2).map((metric, idx) => (
                              <div key={idx} className="flex items-center gap-3 bg-primary/5 rounded-xl p-3 border border-primary/10">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm font-bold text-foreground/80">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`order-2 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="space-y-4">
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
                        <h3 className="text-3xl font-bold md:text-4xl group-hover:text-primary transition-colors duration-300">
                          {solution.title}
                        </h3>
                        <p className="text-xl font-medium text-muted-foreground leading-relaxed">
                          {solution.summary}
                        </p>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {solution.intro}
                      </p>

                      <Button asChild size="lg" className="group/btn rounded-full px-8">
                        <Link href={`/solutions/${solution.slug}`}>
                          Explore Solution
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {index < solutionDetails.length - 1 && (
                    <div className="mt-20 h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Industry Focus Section */}
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 border border-accent/20">
              <Building2 className="h-4 w-4 text-accent" />
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent font-[var(--font-poppins)]">Cross-Industry</p>
            </div>
            <h2 className="text-3xl font-bold md:text-5xl">Industry Specialization</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Regulatory context, mission-critical programs, and relevant proof points for executive stakeholders.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industryProfiles.map((industry, index) => {
              const IndustryIcon = industryIcons[industry.slug as keyof typeof industryIcons] || Building2;
              
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="interactive-card group block space-y-6 rounded-3xl bg-white/95 dark:bg-card/40 p-8 transition-all hover:bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-sm border border-primary/5 transition-colors group-hover:from-primary group-hover:to-secondary">
                      <IndustryIcon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{industry.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{industry.summary}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-12">
          <SocialProofBand
            title="Enterprise credibility"
            description="Repeatable results across audit, healthcare, supply chain, and industrial programs."
            variant="compact"
          />

          <ResourceDownloads
            title="Shareable sales assets"
            description="Download the one-pager, Platform Pods overview, and Innovation Lab brochure to support internal alignment."
          />
        </div>
      </div>
    </section>
  );
}

