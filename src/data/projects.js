import blogImage from "../assets/images/blog.webp";
import chatAppImage from "../assets/images/chat-app.webp";
import coinsImage from "../assets/images/coins.webp";
import expenseTrackerImage from "../assets/images/project1.webp";
import shoppingImage from "../assets/images/shopping.webp";
import routerDomImage from "../assets/images/router-dom.webp";
import nodemailerImage from "../assets/images/nodemailer.webp";

export const projects = [
  {
    slug: "chat-app",
    title: "Chat App",
    category: "Full stack",
    description: "A group chat application for conversations between members.",
    image: chatAppImage,
    imageAlt: "Chat App project interface",
    tags: ["React", "Node.js"],
    liveUrl: "https://chat-app-beta-one-60.vercel.app/",
    featured: true,
  },
  {
    slug: "crypto-coins-dashboard",
    title: "Crypto Coins Dashboard",
    category: "Frontend",
    description: "A dashboard for viewing cryptocurrency prices and market trends.",
    image: coinsImage,
    imageAlt: "Crypto Coins Dashboard project interface",
    tags: ["React", "API"],
    liveUrl: "https://crypto-dash-sand-five.vercel.app/",
    featured: true,
  },
  {
    slug: "blog-website",
    title: "Blog Website",
    category: "Full stack",
    description: "A blogging platform for creating and managing posts.",
    image: blogImage,
    imageAlt: "Blog Website project interface",
    tags: ["Node.js", "Express"],
    liveUrl: "https://blog-app-1-f4rl.onrender.com/",
    featured: true,
  },
  {
    slug: "ai-expense-tracker",
    title: "AI Expense Tracker",
    category: "Frontend",
    description: "An expense-tracking project.",
    image: expenseTrackerImage,
    imageAlt: "AI Expense Tracker project visual",
    tags: [],
    featured: false,
  },
  {
    slug: "shopping-website",
    title: "Shopping Website",
    category: "Frontend",
    description: "A shopping website project.",
    image: shoppingImage,
    imageAlt: "Shopping Website project visual",
    tags: [],
    featured: false,
  },
  {
    slug: "router-dom-project",
    title: "Router DOM Project",
    category: "Frontend",
    description: "A React project using route-based navigation.",
    image: routerDomImage,
    imageAlt: "Router DOM project visual",
    tags: ["React"],
    featured: false,
  },
  {
    slug: "nodemailer-contact-app",
    title: "Nodemailer Contact App",
    category: "Full stack",
    description: "A contact app project using Nodemailer.",
    image: nodemailerImage,
    imageAlt: "Nodemailer Contact App project visual",
    tags: ["Node.js"],
    featured: false,
  },
].map((project) => ({
  ...project,
  caseStudy: {
    problem: "TODO: Add the confirmed problem this project addressed.",
    solution: "TODO: Describe the work completed for this project.",
    result: "TODO: Add a verified outcome or remove this section.",
  },
}));
