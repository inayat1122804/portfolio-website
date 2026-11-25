import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  message: "",
  website: "",
};
const endpoint =
  import.meta.env.VITE_CONTACT_API_URL ||
  "https://portfolio-website-c63g.onrender.com/api/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const isSubmitting = status.type === "loading";

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your message…" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your message could not be sent.");
      }

      setFormData(initialFormData);
      setStatus({
        type: "success",
        message: result.message || "Thanks — your message was sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          value={formData.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">What would you like to build?</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={5000}
          required
          value={formData.message}
          onChange={handleChange}
          className="form-control resize-y"
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="primary-button w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
      {status.message && (
        <p
          className={`form-status form-status-${status.type}`}
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
