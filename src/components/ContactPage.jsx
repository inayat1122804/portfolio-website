import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import heroBack from "../assets/images/heroBack.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch(
        "https://portfolio-website-c63g.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus({
        type: "success",
        message: data.message || "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-16">
        <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-sm sm:mt-8 sm:rounded-[2rem]">
          <div
            className="relative min-h-[220px] bg-cover bg-center px-4 py-8 sm:min-h-[260px] sm:px-6 sm:py-10 lg:px-10 lg:py-16"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(2,6,23,0.9), rgba(2,6,23,0.45)), url(${heroBack})`,
            }}
          >
            <div className="relative z-10 max-w-3xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                Contact Me
              </p>
              <h1 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                Let’s talk about your next website or web application.
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Whether you need a fresh portfolio, a business website, or a
                custom web product, I’m ready to help bring your idea to life.
              </p>
            </div>
          </div>

          <div className="grid gap-4 bg-white p-4 sm:gap-6 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:p-8">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                Get In Touch
              </p>
              <h2 className="mt-4 text-xl font-semibold text-slate-900 sm:text-2xl">
                Reach out and let’s build something great together.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Share a few details about your idea and I’ll get back to you
                with a thoughtful response.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 sm:items-center">
                  <FaEnvelope className="mt-0.5 flex-shrink-0 text-violet-600 sm:mt-0" />
                  <span className="break-words text-slate-700">
                    inayatuk0098@gmail.com
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 sm:items-center">
                  <FaPhoneAlt className="mt-0.5 flex-shrink-0 text-violet-600 sm:mt-0" />
                  <span className="break-words text-slate-700">
                    +92 3175014 580
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 sm:items-center">
                  <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-violet-600 sm:mt-0" />
                  <span className="break-words text-slate-700">
                    Peshawar City, Pakistan
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-900 p-5 text-white shadow-sm sm:p-7 lg:p-8">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Send a message
              </h2>
              <form
                className="mt-6 space-y-3 sm:space-y-4"
                onSubmit={handleSubmit}
              >
                <input
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 sm:text-base"
                />
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 sm:text-base"
                />
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 sm:text-base"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 sm:w-auto"
                >
                  Send Message
                </button>
                {status.message && (
                  <p
                    className={`text-sm break-words ${
                      status.type === "error"
                        ? "text-red-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
