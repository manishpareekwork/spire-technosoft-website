"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type CareersFormProps = {
  roles: string[];
};

export function CareersForm({ roles }: CareersFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("Submitting...");

    console.log({ name, email, role, location, experience, portfolio, message });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("Application received. We will respond within 5 business days.");
    setTimeout(() => {
      setName("");
      setEmail("");
      setRole("");
      setLocation("");
      setExperience("");
      setPortfolio("");
      setMessage("");
      setStatus("");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-name">Full name</Label>
        <Input
          id="applicant-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-email">Email</Label>
        <Input
          id="applicant-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-role">Role of interest</Label>
        <select
          id="applicant-role"
          className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select a role
          </option>
          {roles.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-location">Current location</Label>
        <Input
          id="applicant-location"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="City, Country"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-experience">Years of experience</Label>
        <Input
          id="applicant-experience"
          type="text"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
          placeholder="e.g., 5 years"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-portfolio">Portfolio / LinkedIn / GitHub</Label>
        <Input
          id="applicant-portfolio"
          type="url"
          value={portfolio}
          onChange={(event) => setPortfolio(event.target.value)}
          placeholder="https://"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-message">Tell us about your work</Label>
        <Textarea
          id="applicant-message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Share highlights, projects, and what excites you."
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" disabled={status.includes("Submitting")}
          >
          {status.includes("Submitting") ? "Sending..." : "Submit application"}
        </Button>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </div>
    </form>
  );
}
