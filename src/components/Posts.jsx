import React from "react";
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post-02.png";
import post3 from "../assets/images/post-03.png";

const posts = [
  {
    title: "Why clean interfaces matter more than ever",
    description:
      "A closer look at how thoughtful design improves trust, clarity, and conversion for modern brands.",
    image: post1,
  },
  {
    title: "How to build faster websites without sacrificing quality",
    description:
      "Practical lessons on structure, performance, and making content feel effortless to use.",
    image: post2,
  },
  {
    title: "The value of a strong client experience",
    description:
      "Why communication, consistency, and clarity make web projects feel smoother from start to finish.",
    image: post3,
  },
];

const Posts = () => {
  return (
    <div className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Writing
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Insights on design, development, and building with intention.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                style={{ backgroundImage: `url(${post.image})` }}
                className="relative h-64 bg-cover bg-center"
              >
                <div className="absolute inset-0 bg-slate-950/20 transition group-hover:bg-slate-950/35" />
                <span className="absolute bottom-4 right-4 rounded-full border border-white/80 px-4 py-2 text-sm font-semibold text-white">
                  Read More
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
