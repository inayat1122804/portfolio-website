import { FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/images/project1.png";
import coinsImage from "../assets/images/coins.png";
import chatAppImage from "../assets/images/chat-app.png";
import blogImage from "../assets/images/blog.png";
import shoppingImage from "../assets/images/shopping.png";
import routerDomImage from "../assets/images/router-dom.png";
import nodemailerImage from "../assets/images/nodemailer.png";
import heroBack from "../assets/images/heroBack.png";

const projects = [
  {
    title: "AI Expense Tracker",
    category: "UI / Frontend",
    description:
      "AI Expense Tracker is an intelligent expense management application that helps users track spending, categorize expenses automatically, and gain AI-powered financial insights.",
    image: project1,
  },
  {
    title: "Crypto Coins Dashboard",
    category: "Frontend",
    description:
      "Crypto Coins Tracker is a React application that displays real-time cryptocurrency prices, market data, and interactive 7-day price charts.",
    image: coinsImage,
  },
  {
    title: "Chat App",
    category: "Full Stack",
    description:
      "Group Chat App is a real-time chat application where users can register, log in, and join admin-created groups to communicate with other members.",
    image: chatAppImage,
  },
  {
    title: "Blog Website",
    category: "Creative Build",
    description:
      "Blog App is a modern blogging platform where users can create, edit, and manage blog posts with ease.",
    image: blogImage,
  },
  {
    title: "Shopping Website",
    category: "E-commerce",
    description:
      "A polished shopping experience with featured products, category sections, and a user-friendly interface for browsing and purchasing items.",
    image: shoppingImage,
  },
  {
    title: "Router DOM Project",
    category: "Frontend",
    description:
      "A React app demonstrating route-based navigation, dynamic pages, and a clean structure for multi-page web experiences.",
    image: routerDomImage,
  },
  {
    title: "Nodemailer Contact App",
    category: "Full Stack",
    description:
      "A contact form application that sends messages through Nodemailer and presents a responsive, polished experience for users.",
    image: nodemailerImage,
  },
];

const AllProjectsPage = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
          <div
            className="relative min-h-[280px] bg-cover bg-center px-6 py-12 sm:px-10 sm:py-16"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(2,6,23,0.9), rgba(2,6,23,0.45)), url(${heroBack})`,
            }}
          >
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                All Projects
              </p>
              <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
                A curated collection of work built with clarity, aesthetics, and
                performance in mind.
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                These are placeholder project previews for now. Replace them
                with your real work whenever you’re ready.
              </p>
            </div>
          </div>

          <div className="bg-white/10 p-8 backdrop-blur-sm sm:p-10">
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-violet-600/20 px-3 py-1 text-sm font-semibold text-violet-200">
                        {project.category}
                      </span>
                      <span className="text-sm text-slate-400">Featured</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-white">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
                    >
                      View Project <FaExternalLinkAlt />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProjectsPage;
