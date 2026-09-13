"use client";

import { useState, FormEvent } from "react";

export default function CollaboratorForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    researchArea: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "collaborator", ...form }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      setForm({ name: "", email: "", organization: "", researchArea: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="join-form-success">
        <i className="fas fa-check-circle" style={{ fontSize: 48, color: "#22c55e", marginBottom: 12 }} />
        <h4>Application Submitted!</h4>
        <p>Thank you for your interest. Dr. Jalal will review your application and get back to you soon.</p>
        <button className="join-form-btn" onClick={() => setStatus("idle")} style={{ marginTop: 12 }}>
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="join-native-form">
      <div className="join-form-row">
        <div className="join-form-group">
          <label>Full Name <span className="join-required">*</span></label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Ahmad Khan" />
        </div>
        <div className="join-form-group">
          <label>Email <span className="join-required">*</span></label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="e.g. ahmad@university.edu" />
        </div>
      </div>

      <div className="join-form-group">
        <label>Organization / University</label>
        <input type="text" name="organization" value={form.organization} onChange={handleChange} placeholder="e.g. POSTECH, NUST, Kyung Hee University..." />
      </div>

      <div className="join-form-group">
        <label>Research Area <span className="join-required">*</span></label>
        <textarea
          name="researchArea"
          value={form.researchArea}
          onChange={handleChange}
          required
          rows={3}
          placeholder="Describe your research area and how it aligns with IMC..."
        />
      </div>

      <div className="join-form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Any additional information you'd like to share..."
        />
      </div>

      {status === "error" && (
        <div className="join-form-error">
          <i className="fas fa-exclamation-circle" /> {errorMsg}
        </div>
      )}

      <button type="submit" className="join-form-btn" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><i className="fas fa-spinner fa-spin" /> Submitting...</>
        ) : (
          <><i className="fas fa-paper-plane" /> Submit Application</>
        )}
      </button>
    </form>
  );
}
