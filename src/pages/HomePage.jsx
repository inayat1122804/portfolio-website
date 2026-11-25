import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiArrowDown, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import portrait from "../assets/images/inayat.webp";
import SEO from "../components/SEO";
import ExperienceSection from "../components/ExperienceSection";
import ProjectGrid from "../components/ProjectGrid";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Full-Stack Junior Web Developer"
        description="Portfolio of Inayat Khan, a full-stack junior web developer working with React, JavaScript, Node.js, Express, and MongoDB."
      />
      <section
        id="home"
        data-nav-section
        className="hero-section section-container"
      >
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span className="availability-dot" aria-hidden="true" />
              Full-stack junior web developer
            </p>
            <h1 className="hero-title">
              I build for the <span className="text-accent">web</span> — from
              the first pixel to the final request.
            </h1>
            <p className="hero-description">
              I’m Inayat Khan. I work across the frontend and backend to build
              clear, responsive web experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="primary-button">
                Explore my work <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/contact" className="secondary-button">
                Get in touch <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/inayat1122804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-copy"
                aria-label="Visit Inayat Khan on GitHub (opens in a new tab)"
              >
                <FaGithub aria-hidden="true" className="text-base" />
                GitHub
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <span className="text-line" aria-hidden="true">/</span>
              <button
                type="button"
                disabled
                title="TODO: Add a confirmed CV file before enabling downloads."
                className="inline-flex cursor-not-allowed items-center gap-2 text-sm text-muted opacity-70"
              >
                <FiArrowDown aria-hidden="true" />
                CV · TODO: add file
              </button>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-frame">
              <img
                src={portrait}
                alt="Portrait of Inayat Khan"
                width="800"
                height="800"
                fetchPriority="high"
                decoding="async"
                className="hero-portrait"
              />
            </div>
            <div className="portrait-caption">
              <span className="caption-dot" aria-hidden="true" />
              INAYAT KHAN <span className="text-muted">/ DEVELOPER</span>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-cue">
          <span>Scroll to explore</span>
          <FiArrowDown aria-hidden="true" />
        </a>
      </section>

      <section
        id="about"
        data-nav-section
        className="section-wrap border-y border-line bg-surface"
      >
        <div className="section-container about-layout">
          <div>
            <p className="eyebrow">A bit about me</p>
            <h2 className="section-title">
              Curious about how the whole thing works.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-copy">
              I’m a junior full-stack web developer who enjoys working across
              both sides of the web. I use React and JavaScript to build
              interfaces, and Node.js, Express, and MongoDB on the backend.
            </p>
            <p className="mt-5 leading-7 text-muted">
              I’m open to conversations with teams looking for a junior
              developer and clients who need web development support.
            </p>
            <Link to="/contact" className="text-link mt-6 inline-flex">
              Let’s talk <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <SkillsSection />
      <ServicesSection />

      <section
        id="projects"
        data-nav-section
        className="section-wrap"
      >
        <div className="section-container">
          <div className="section-heading-row">
            <div className="section-heading">
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">Projects, not promises.</h2>
              <p className="section-description">
                A selection of projects from my portfolio. Live links are shown
                only where one is available.
              </p>
            </div>
            <Link to="/projects" className="text-link section-heading-link">
              All projects <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <ProjectGrid featuredOnly />
        </div>
      </section>

      <ExperienceSection />

      <section
        id="contact"
        data-nav-section
        className="section-wrap"
      >
        <div className="section-container">
          <div className="contact-banner">
            <div className="contact-banner-glow" aria-hidden="true" />
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow">Have a project in mind?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-copy sm:text-4xl">
                Let’s make something useful for the web.
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Share what you’re working on and we can talk through the next
                steps.
              </p>
              <Link to="/contact" className="primary-button mt-7">
                Contact me <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
