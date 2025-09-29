import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Spire Technosoft
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From Vision to Value: Expert-Led Digital Solutions.
        </p>
        <div className="mt-8">
          <Button>Schedule a Consultation</Button>
        </div>
      </div>
    </main>
  );
}
