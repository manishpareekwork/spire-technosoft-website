import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Cpu, Code, Cloud, Bot } from "lucide-react";

const services = [
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "IT & Digital Transformation Consulting",
    description:
      "I partner with businesses to identify critical pain points and architect robust, scalable technology roadmaps. From feasibility studies to presales strategy, I provide the blueprint for your digital success.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom Application Development",
    description:
      "Leveraging modern frameworks like Next.js, React, and Flutter, I build bespoke web and mobile applications tailored to your unique business needs, focusing on performance, scalability, and user experience.",
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Cloud Architecture & DevOps",
    description:
      "I design and implement secure and efficient cloud infrastructure on Azure, AWS, and GCP. This includes setting up CI/CD pipelines, ensuring your applications are deployed and managed seamlessly.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI & Business Process Automation",
    description:
      "I integrate advanced AI and Generative AI solutions to automate workflows and enhance decision-making. From intelligent chatbots to vision-based processing, I help you unlock new levels of operational efficiency.",
  },
];

export default function ServicesPage() {
  return (
    <section className="container py-12 md:py-16">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          What I Offer
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
          A blend of strategic consulting and hands-on development to transform
          your business challenges into technology-driven solutions.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardDescription className="px-6 pb-6">
              {service.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
