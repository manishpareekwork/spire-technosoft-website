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
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    // In a real application, you would send the data to a server API endpoint.
    // For now, we'll just log it and simulate a network request.
    console.log({ name, email, message });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("Your message has been sent!");
    // Clear form after a delay
    setTimeout(() => {
      setName("");
      setEmail("");
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
