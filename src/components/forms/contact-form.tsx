/**
 * @file A client-side contact form component.
 * @module /src/components/forms/contact-form.tsx
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    // In a real application, you would send the data to a server API endpoint.
    // For now, we'll just log it and simulate a network request.
    console.log({ name, email, organization, inquiryType, projectType, message });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("Your message has been sent!");
    // Clear form after a delay
    setTimeout(() => {
      setName("");
      setEmail("");
      setOrganization("");
      setInquiryType("");
      setProjectType("");
      setMessage("");
      setStatus("");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="organization">Organization</Label>
        <Input
          type="text"
          id="organization"
          placeholder="Company or Team"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="inquiryType">Inquiry Type</Label>
        <select
          id="inquiryType"
          className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select an option
          </option>
          <option value="New Project">New Project / Discovery</option>
          <option value="Partnership">Partnership / Alliance</option>
          <option value="Hiring">Hiring / Careers</option>
          <option value="Vendor">Vendor / Procurement</option>
          <option value="Media">Media / Press</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="projectType">Project Type</Label>
        <select
          id="projectType"
          className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select an option
          </option>
          <option value="Audit & Compliance">Audit &amp; Compliance Platforms</option>
          <option value="Healthcare & Wellness">Healthcare &amp; Wellness</option>
          <option value="Supply Chain / Industrial">Supply Chain / Industrial</option>
          <option value="Innovation Lab Sprint">Innovation Lab Sprint</option>
          <option value="Product Strategy / Other">Product Strategy / Other</option>
        </select>
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          placeholder="Let me know how I can help!"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" disabled={status.includes("Submitting")}>
          {status.includes("Submitting") ? "Sending..." : "Send Message"}
        </Button>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </div>
    </form>
  );
}
