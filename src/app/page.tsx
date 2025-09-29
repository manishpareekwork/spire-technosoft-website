import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex-1">
      <section className="container flex h-full flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
            From Vision to Value: <br />
            Expert-Led Digital Solutions.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Leveraging 17+ years of experience to architect and build technology
            that solves real business problems.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">Schedule a Consultation</Button>
            <Button size="lg" variant="outline">
              View My Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
