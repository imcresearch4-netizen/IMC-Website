"use client";

import { useState, FormEvent } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    university: "",
    researchInterest: "",
    experience: "",
    statement: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        body: JSON.stringify({ type: "student", ...form }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", program: "", university: "", researchInterest: "", experience: "", statement: "" });
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
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="e.g. ahmad@email.com" />
        </div>
      </div>

      <div className="join-form-row">
        <div className="join-form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. +92-300-1234567" />
        </div>
        <div className="join-form-group">
          <label>Program <span className="join-required">*</span></label>
          <select name="program" value={form.program} onChange={handleChange} required>
            <option value="">Select Program</option>
            <option value="MS">MS</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
      </div>

      <div className="join-form-group">
        <label>Current University / Institution</label>
        <input type="text" name="university" value={form.university} onChange={handleChange} placeholder="e.g. Air University, Islamabad" />
      </div>

      <div className="join-form-group">
        <label>Research Interest <span className="join-required">*</span></label>
        <textarea
          name="researchInterest"
          value={form.researchInterest}
          onChange={handleChange}
          required
          rows={3}
          placeholder="e.g. Computer Vision, Deep Learning, Wearable Sensors..."
        />
      </div>

      <div className="join-form-group">
        <label>Previous Experience / Publications</label>
        <textarea
          name="experience"
          value={form.experience}
          onChange={handleChange}
          rows={3}
          placeholder="Briefly describe your relevant experience or list publications..."
        />
      </div>

      <div className="join-form-group">
        <label>Statement of Purpose</label>
        <textarea
          name="statement"
          value={form.statement}
          onChange={handleChange}
          rows={4}
          placeholder="Why do you want to join IMC? What are your research goals?"
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
