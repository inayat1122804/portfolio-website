import React from "react";
import bgblue from "../assets/images/bg-blue.png";

const Experience = () => {
  const timeline = [
    {
      title: "Freelance Web Developer",
      period: "2026 — Present",
      text: "Building modern interfaces and full-stack products for clients who need speed, clarity, and dependable delivery.",
      tools: ["React", "Node", "Express", "MongoDB"],
    },
    {
      title: "Personal Product Projects",
      period: "2025 — 2026",
      text: "Creating portfolio sites, dashboards, and polished UI systems while improving accessibility and performance.",
      tools: ["JavaScript", "Tailwind", "REST APIs", "GitHub"],
    },
    {
      title: "Skill Development",
      period: "2025 — 2026",
      text: "Strengthening web fundamentals and full-stack workflows through hands-on builds, debugging, and continuous learning.",
      tools: ["HTML", "CSS", "React", "MongoDB"],
    },
  ];

  return (
    <>
      <section className="w-full bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              A steady path of growth, learning, and quality delivery.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-violet-200 pl-6"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {item.text}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                Highlights
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                Trusted to turn ideas into polished digital products.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Every project is approached with attention to detail, fast
                communication, and a clear focus on the client’s goals.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-semibold text-violet-300">12+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Projects completed
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-semibold text-violet-300">8+</p>
                  <p className="mt-2 text-sm text-slate-300">Happy clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="bg-cover bg-top bg-no-repeat py-16 md:py-20"
          style={{ backgroundImage: `url(${bgblue})` }}
        >
          <div className="mx-4 rounded-3xl bg-white px-6 py-12 shadow-xl md:px-10 md:py-16">
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center text-center">
                <i className="fa-solid fa-rocket text-5xl text-violet-500"></i>
                <h2 className="mt-5 text-3xl font-bold text-violet-600">12+</h2>
                <p className="mt-2 font-medium text-slate-500">
                  Finished Projects
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <i className="fa-solid fa-award text-5xl text-violet-500"></i>
                <h2 className="mt-5 text-3xl font-bold text-violet-600">3</h2>
                <p className="mt-2 font-medium text-slate-500">Awards Won</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <i className="fa-solid fa-face-grin text-5xl text-violet-500"></i>
                <h2 className="mt-5 text-3xl font-bold text-violet-600">8+</h2>
                <p className="mt-2 font-medium text-slate-500">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <i className="fa-solid fa-puzzle-piece text-5xl text-violet-500"></i>
                <h2 className="mt-5 text-3xl font-bold text-violet-600">99%</h2>
                <p className="mt-2 font-medium text-slate-500">
                  Problems Solved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
