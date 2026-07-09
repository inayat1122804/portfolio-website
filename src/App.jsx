import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import heroBack from "./assets/images/heroBack.png";
import inayat from "./assets/images/inayat.png";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import AllProjectsPage from "./components/AllProjectsPage";
import ContactPage from "./components/ContactPage";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const services = [
  {
    title: "Web Development",
    text: "Modern, responsive websites built for speed, clarity, and trust.",
    icon: "fa-solid fa-globe",
  },
  {
    title: "Frontend Design",
    text: "Polished interfaces with thoughtful motion, hierarchy, and usability.",
    icon: "fa-solid fa-code",
  },
  {
    title: "Backend Systems",
    text: "Reliable APIs and secure server logic that keep your product scalable.",
    icon: "fa-solid fa-server",
  },
  {
    title: "Database Architecture",
    text: "Clean data structures and fast queries built for long-term performance.",
    icon: "fa-solid fa-database",
  },
  {
    title: "Responsive UX",
    text: "A seamless experience across desktop, tablet, and mobile screens.",
    icon: "fa-solid fa-mobile-screen-button",
  },
  {
    title: "MERN Stack Builds",
    text: "End-to-end React, Node, Express, and MongoDB applications from idea to launch.",
    icon: "fa-solid fa-layer-group",
  },
];

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function Layout({ children, menuOpen, setMenuOpen }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <nav className="relative rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-semibold tracking-[0.3em] text-white"
            >
              INAYAT
            </Link>

            <ul className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-violet-500/20 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl text-white transition hover:bg-white/20 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {menuOpen && (
            <div className="absolute left-0 right-0 top-full z-20 mt-3 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl md:hidden">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-violet-500/20 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>

      <div>{children}</div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
      >
        <img
          src={heroBack}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.25),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.94),_rgba(15,23,42,0.9))]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
          <div className="flex flex-1 items-center">
            <div className="grid w-full items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
                  Available for freelance work
                </span>
                <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  I create polished web experiences that feel premium and
                  perform beautifully.
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                  I’m Inayat, a full-stack developer focused on building modern,
                  responsive products with clean design and thoughtful user
                  experience.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
                  >
                    Let’s Connect <FaArrowRight />
                  </Link>
                  <Link
                    to="/projects"
                    className="rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-100 transition hover:border-violet-400 hover:text-violet-200"
                  >
                    View My Work
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-xl text-slate-300">
                  <a href="#" className="transition hover:text-violet-300">
                    <FaGithub />
                  </a>
                  <a href="#" className="transition hover:text-violet-300">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="transition hover:text-violet-300">
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-3xl" />
                  <img
                    src={inayat}
                    alt="Inayat"
                    className="relative h-72 w-72 rounded-full border-4 border-white/20 object-cover shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                About me
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Helping founders and brands launch memorable digital
                experiences.
              </h2>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-600">
                I combine thoughtful design, clean code, and modern development
                practices to create websites that are both beautiful and
                practical. My work focuses on building fast, responsive products
                that make a lasting impression.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="text-3xl font-semibold">3+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Years building & learning
                  </p>
                </div>
                <div className="rounded-2xl bg-violet-600 p-5 text-white">
                  <p className="text-3xl font-semibold">100%</p>
                  <p className="mt-2 text-sm text-violet-100">
                    Client-focused approach
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900">
                  <p className="text-3xl font-semibold">24/7</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Reliable communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Everything you need to launch a modern online presence.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From strategy and design to development and deployment, I deliver
              polished solutions that look professional and work smoothly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-xl text-white">
                  <i className={service.icon}></i>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Projects />
      <Experience />
      <Posts />
      <Footer />
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <AllProjectsPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <ContactPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
