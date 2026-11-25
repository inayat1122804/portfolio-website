import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Inayat Khan about junior developer opportunities or web development projects."
      />
      <section className="section-wrap min-h-[75vh]">
        <div className="section-container max-w-5xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-copy sm:text-5xl">
            Tell me what you’re working on.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            I’m open to conversations about junior developer roles and web
            projects. Send a message using the form below.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="panel-card">
              <h2 className="mb-6 text-xl font-semibold text-copy">
                Send a message
              </h2>
              <ContactForm />
            </div>
            <aside className="panel-card flex flex-col justify-between">
              <div>
                <p className="eyebrow">Elsewhere</p>
                <h2 className="mt-3 text-xl font-semibold text-copy">
                  Find me on GitHub.
                </h2>
                <p className="mt-3 leading-7 text-muted">
                  Browse my profile and repositories.
                </p>
              </div>
              <a
                href="https://github.com/inayat1122804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Inayat Khan on GitHub (opens in a new tab)"
                className="secondary-button mt-8 w-fit"
              >
                <FaGithub aria-hidden="true" />
                GitHub
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
