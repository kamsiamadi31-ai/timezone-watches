import React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSuccess("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter a message.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSuccess(`Thank you, ${formData.fullName}! Your message has passed validation.`);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    }
  }

  return (
    <>
      <section className="page-banner"><div className="container"><span className="eyebrow">WE'RE HERE TO HELP</span><h1>Get in touch</h1><p>Have a question? Send the TimeZone team a message.</p></div></section>
      <section className="section container contact-layout">
        <div className="contact-details">
          <span className="eyebrow">CONTACT DETAILS</span><h2>Let's talk watches.</h2>
          <p>Use the details below or send us a message through the form.</p>
          <div className="contact-item"><span className="contact-icon">✉</span><div><small>EMAIL</small><strong>hello@timezonewatches.example</strong></div></div>
          <div className="contact-item"><span className="contact-icon">☎</span><div><small>PHONE</small><strong>+234 800 000 0000</strong></div></div>
          <div className="contact-item"><span className="contact-icon">⌖</span><div><small>LOCATION</small><strong>Abuja, Nigeria (sample address)</strong></div></div>
          <p className="sample-note">The contact details above are sample details for this student project.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send a message</h2>
          <label>Full name<input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" /></label>
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          <label>Email address<input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" /></label>
          {errors.email && <span className="error-message">{errors.email}</span>}
          <label>Subject<input name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this about?" /></label>
          {errors.subject && <span className="error-message">{errors.subject}</span>}
          <label>Message<textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Write your message..." /></label>
          {errors.message && <span className="error-message">{errors.message}</span>}
          <button className="button button-dark submit-button" type="submit">Submit message <span>→</span></button>
          {success && <p className="success-message" role="status">{success}</p>}
        </form>
      </section>
    </>
  );
}