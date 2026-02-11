/**
 * @file A client-side contact form component.
 * @module /src/components/forms/contact-form.tsx
 */
"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Alert } from "@/components/ui/alert";

const inquiryOptions = [
  { label: "New Project / Discovery", value: "New Project" },
  { label: "Partnership / Alliance", value: "Partnership" },
  { label: "Hiring / Careers", value: "Hiring" },
  { label: "Vendor / Procurement", value: "Vendor" },
  { label: "Media / Press", value: "Media" },
  { label: "Other", value: "Other" },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [partnershipType, setPartnershipType] = useState("");
  const [roleInterest, setRoleInterest] = useState("");
  const [vendorCategory, setVendorCategory] = useState("");
  const [mediaOutlet, setMediaOutlet] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setProjectType("");
    setTimeline("");
    setBudget("");
    setPartnershipType("");
    setRoleInterest("");
    setVendorCategory("");
    setMediaOutlet("");
    setTopic("");
    setErrors((prev) => {
      const next = { ...prev };
      delete next.projectType;
      delete next.timeline;
      delete next.budget;
      delete next.partnershipType;
      delete next.roleInterest;
      delete next.vendorCategory;
      delete next.mediaOutlet;
      delete next.topic;
      return next;
    });
  }, [inquiryType]);

  const projectTypeOptions = useMemo(
    () => [
      { label: "Audit & Compliance Platforms", value: "Audit & Compliance" },
      { label: "Healthcare & Wellness", value: "Healthcare & Wellness" },
      { label: "Supply Chain / Industrial", value: "Supply Chain / Industrial" },
      { label: "Innovation Lab Sprint", value: "Innovation Lab Sprint" },
      { label: "Product Strategy / Other", value: "Product Strategy / Other" },
    ],
    []
  );

  const timelineOptions = [
    { label: "0-3 months", value: "0-3 months" },
    { label: "3-6 months", value: "3-6 months" },
    { label: "6-12 months", value: "6-12 months" },
    { label: "12+ months", value: "12+ months" },
  ];

  const budgetOptions = [
    { label: "<$50k", value: "<50k" },
    { label: "$50k-$150k", value: "50k-150k" },
    { label: "$150k-$500k", value: "150k-500k" },
    { label: "$500k+", value: "500k+" },
  ];

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!inquiryType) nextErrors.inquiryType = "Select an inquiry type.";
    if (!message.trim()) nextErrors.message = "Tell us about your roadmap.";

    if (inquiryType === "New Project") {
      if (!projectType) nextErrors.projectType = "Select a project type.";
      if (!timeline) nextErrors.timeline = "Select a timeline.";
      if (!budget) nextErrors.budget = "Select a budget range.";
    }
    if (inquiryType === "Partnership" && !partnershipType) {
      nextErrors.partnershipType = "Select a partnership type.";
    }
    if (inquiryType === "Hiring" && !roleInterest) {
      nextErrors.roleInterest = "Share the role you are interested in.";
    }
    if (inquiryType === "Vendor" && !vendorCategory) {
      nextErrors.vendorCategory = "Select a service category.";
    }
    if (inquiryType === "Media" && !mediaOutlet) {
      nextErrors.mediaOutlet = "Share your outlet or publication.";
    }
    if (inquiryType === "Other" && !topic) {
      nextErrors.topic = "Tell us what this is about.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setStatus("success");
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    console.log({
      name,
      email,
      organization,
      inquiryType,
      projectType,
      timeline,
      budget,
      partnershipType,
      roleInterest,
      vendorCategory,
      mediaOutlet,
      topic,
      message,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setTimeout(() => {
      setName("");
      setEmail("");
      setOrganization("");
      setInquiryType("");
      setProjectType("");
      setTimeline("");
      setBudget("");
      setPartnershipType("");
      setRoleInterest("");
      setVendorCategory("");
      setMediaOutlet("");
      setTopic("");
      setMessage("");
      setErrors({});
      setStatus("idle");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6" noValidate>
      {status === "success" && (
        <Alert variant="success">Thank you. We will respond within 24 hours.</Alert>
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
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="organization">Organization</Label>
        <Input
          type="text"
          id="organization"
          placeholder="Company or team"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="inquiryType">Inquiry Type</Label>
        <Select
          id="inquiryType"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          options={[{ label: "Select an option", value: "", disabled: true }, ...inquiryOptions]}
          aria-invalid={Boolean(errors.inquiryType)}
          aria-describedby={errors.inquiryType ? "inquiry-type-error" : undefined}
        />
        {errors.inquiryType && (
          <p id="inquiry-type-error" className="text-xs text-destructive">
            {errors.inquiryType}
          </p>
        )}
      </div>

      {inquiryType === "New Project" && (
        <>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="projectType">Project Type</Label>
            <Select
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              options={[{ label: "Select a project type", value: "", disabled: true }, ...projectTypeOptions]}
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={errors.projectType ? "project-type-error" : undefined}
            />
            {errors.projectType && (
              <p id="project-type-error" className="text-xs text-destructive">
                {errors.projectType}
              </p>
            )}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="timeline">Timeline</Label>
            <Select
              id="timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              options={[{ label: "Select a timeline", value: "", disabled: true }, ...timelineOptions]}
              aria-invalid={Boolean(errors.timeline)}
              aria-describedby={errors.timeline ? "timeline-error" : undefined}
            />
            {errors.timeline && (
              <p id="timeline-error" className="text-xs text-destructive">
                {errors.timeline}
              </p>
            )}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="budget">Budget Range</Label>
            <Select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              options={[{ label: "Select a budget", value: "", disabled: true }, ...budgetOptions]}
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={errors.budget ? "budget-error" : undefined}
            />
            {errors.budget && (
              <p id="budget-error" className="text-xs text-destructive">
                {errors.budget}
              </p>
            )}
          </div>
        </>
      )}

      {inquiryType === "Partnership" && (
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="partnershipType">Partnership Type</Label>
          <Select
            id="partnershipType"
            value={partnershipType}
            onChange={(e) => setPartnershipType(e.target.value)}
            options={[
              { label: "Select a partnership type", value: "", disabled: true },
              { label: "Alliance / Co-sell", value: "Alliance" },
              { label: "Delivery partner", value: "Delivery" },
              { label: "Technology partner", value: "Technology" },
            ]}
            aria-invalid={Boolean(errors.partnershipType)}
            aria-describedby={errors.partnershipType ? "partnership-type-error" : undefined}
          />
          {errors.partnershipType && (
            <p id="partnership-type-error" className="text-xs text-destructive">
              {errors.partnershipType}
            </p>
          )}
        </div>
      )}

      {inquiryType === "Hiring" && (
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="roleInterest">Role of Interest</Label>
          <Input
            id="roleInterest"
            type="text"
            value={roleInterest}
            onChange={(e) => setRoleInterest(e.target.value)}
            placeholder="Role or specialization"
            aria-invalid={Boolean(errors.roleInterest)}
            aria-describedby={errors.roleInterest ? "role-interest-error" : undefined}
          />
          {errors.roleInterest && (
            <p id="role-interest-error" className="text-xs text-destructive">
              {errors.roleInterest}
            </p>
          )}
        </div>
      )}

      {inquiryType === "Vendor" && (
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="vendorCategory">Service Category</Label>
          <Input
            id="vendorCategory"
            type="text"
            value={vendorCategory}
            onChange={(e) => setVendorCategory(e.target.value)}
            placeholder="Security, staffing, tooling, etc."
            aria-invalid={Boolean(errors.vendorCategory)}
            aria-describedby={errors.vendorCategory ? "vendor-category-error" : undefined}
          />
          {errors.vendorCategory && (
            <p id="vendor-category-error" className="text-xs text-destructive">
              {errors.vendorCategory}
            </p>
          )}
        </div>
      )}

      {inquiryType === "Media" && (
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="mediaOutlet">Media Outlet</Label>
          <Input
            id="mediaOutlet"
            type="text"
            value={mediaOutlet}
            onChange={(e) => setMediaOutlet(e.target.value)}
            placeholder="Publication / outlet"
            aria-invalid={Boolean(errors.mediaOutlet)}
            aria-describedby={errors.mediaOutlet ? "media-outlet-error" : undefined}
          />
          {errors.mediaOutlet && (
            <p id="media-outlet-error" className="text-xs text-destructive">
              {errors.mediaOutlet}
            </p>
          )}
        </div>
      )}

      {inquiryType === "Other" && (
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="topic">Topic</Label>
          <Input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Tell us what this is about"
            aria-invalid={Boolean(errors.topic)}
            aria-describedby={errors.topic ? "topic-error" : undefined}
          />
          {errors.topic && (
            <p id="topic-error" className="text-xs text-destructive">
              {errors.topic}
            </p>
          )}
        </div>
      )}

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          placeholder="Share your goals, timelines, and constraints."
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
