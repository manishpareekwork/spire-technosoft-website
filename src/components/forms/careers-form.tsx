"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Alert } from "@/components/ui/alert";

type CareersFormProps = {
  roles: string[];
};

export function CareersForm({ roles }: CareersFormProps) {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const roleOptions = useMemo(
    () => roles.map((item) => ({ label: item, value: item })),
    [roles]
  );

  useEffect(() => {
    const presetRole = searchParams?.get("role");
    if (presetRole) {
      setRole(presetRole);
    }
  }, [searchParams]);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Please enter your full name.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!role) nextErrors.role = "Select a role of interest.";
    if (!location.trim()) nextErrors.location = "Share your current location.";
    if (!experience.trim()) nextErrors.experience = "Add your years of experience.";
    if (portfolio) {
      try {
        new URL(portfolio);
      } catch {
        nextErrors.portfolio = "Provide a valid portfolio URL.";
      }
    }
    if (!message.trim()) nextErrors.message = "Tell us about your work and what excites you.";
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (honeypot) {
      setStatus("success");
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    console.log({ name, email, role, location, experience, portfolio, message });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setTimeout(() => {
      setName("");
      setEmail("");
      setRole("");
      setLocation("");
      setExperience("");
      setPortfolio("");
      setMessage("");
      setErrors({});
      setStatus("idle");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === "success" && (
        <Alert variant="success">
          Application received. We will respond within 5 business days.
        </Alert>
      )}
      <input
        type="text"
        name="company-website"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-name">Full name</Label>
        <Input
          id="applicant-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "applicant-name-error" : undefined}
        />
        {errors.name && (
          <p id="applicant-name-error" className="text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-email">Email</Label>
        <Input
          id="applicant-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "applicant-email-error" : undefined}
        />
        {errors.email && (
          <p id="applicant-email-error" className="text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-role">Role of interest</Label>
        <Select
          id="applicant-role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          options={[
            { label: "Select a role", value: "", disabled: true },
            ...roleOptions,
            { label: "Other", value: "Other" },
          ]}
          aria-invalid={Boolean(errors.role)}
          aria-describedby={errors.role ? "applicant-role-error" : undefined}
        />
        {errors.role && (
          <p id="applicant-role-error" className="text-xs text-destructive">
            {errors.role}
          </p>
        )}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-location">Current location</Label>
        <Input
          id="applicant-location"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="City, Country"
          aria-invalid={Boolean(errors.location)}
          aria-describedby={errors.location ? "applicant-location-error" : undefined}
        />
        {errors.location && (
          <p id="applicant-location-error" className="text-xs text-destructive">
            {errors.location}
          </p>
        )}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-experience">Years of experience</Label>
        <Input
          id="applicant-experience"
          type="text"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
          placeholder="e.g., 5 years"
          aria-invalid={Boolean(errors.experience)}
          aria-describedby={errors.experience ? "applicant-experience-error" : undefined}
        />
        {errors.experience && (
          <p id="applicant-experience-error" className="text-xs text-destructive">
            {errors.experience}
          </p>
        )}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-portfolio">Portfolio / LinkedIn / GitHub</Label>
        <Input
          id="applicant-portfolio"
          type="url"
          value={portfolio}
          onChange={(event) => setPortfolio(event.target.value)}
          placeholder="https://"
          aria-invalid={Boolean(errors.portfolio)}
          aria-describedby={errors.portfolio ? "applicant-portfolio-error" : undefined}
        />
        {errors.portfolio && (
          <p id="applicant-portfolio-error" className="text-xs text-destructive">
            {errors.portfolio}
          </p>
        )}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="applicant-message">Tell us about your work</Label>
        <Textarea
          id="applicant-message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Share highlights, projects, and what excites you."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "applicant-message-error" : undefined}
        />
        {errors.message && (
          <p id="applicant-message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit application"}
        </Button>
      </div>
    </form>
  );
}
