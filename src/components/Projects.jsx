import React from "react";
import defaultImage from "../assets/images/project1.png";
import coinsImage from "../assets/images/coins.png";
import chatAppImage from "../assets/images/chat-app.png";
import blogImage from "../assets/images/blog.png";
import shoppingImage from "../assets/images/shopping.png";
import routerDomImage from "../assets/images/router-dom.png";
import nodemailerImage from "../assets/images/nodemailer.png";

const projects = [
  {
    title: "AI Expense Tracker",
    category: "UI / Frontend",
    description:
      "AI Expense Tracker is an intelligent expense management application that helps users track spending, categorize expenses automatically, and gain AI-powered financial insights. It simplifies budgeting with real-time analytics, smart recommendations, and easy-to-understand reports.",
    tags: ["Cursor Ai", "AI"],
    image: defaultImage,
  },
  {
    title: "Crypto Coins Dashboard",
    category: "Frontend",
    description:
      "Crypto Coins Tracker** is a React application that displays real-time cryptocurrency prices, market data, and interactive 7-day price charts. It helps users track market trends through a clean and responsive interface.",
    tags: ["React", "API", "Dashboard"],
    image: coinsImage,
  },
  {
    title: "Chat App",
    category: "Full Stack",
    description:
      "Group Chat App is a real-time chat application where users can register, log in, and join admin-created groups to communicate with other members. It provides a simple and secure platform for seamless group conversations.",
    tags: ["UI", "UX", "Performance", "React", "DataBase", "Node"],
    image: chatAppImage,
  },
  {
    title: "Blog Website",
    category: "Creative Build",
    description:
      "Blog App is a modern blogging platform where users can create, edit, and manage blog posts with ease. It offers a clean interface for publishing and exploring engaging content.",
    tags: ["Node", "Express", "API", "DataBase"],
    image: blogImage,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
              Featured work
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Selected projects that balance design, usability, and performance.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-500 hover:text-violet-600"
          >
            Start a project
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                    {project.category}
                  </span>
                  <span className="text-sm font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
