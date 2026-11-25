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
    description:
      "An interactive market dashboard with searchable coin listings, sorting controls, and individual coin detail pages.",
    image: coinsImage,
    imageAlt: "Crypto Coins Dashboard project interface",
    tags: ["React", "Market data API"],
    liveUrl: "https://crypto-dash-sand-five.vercel.app/",
    featured: true,
    caseStudy: {
      problem:
        "Finding a specific coin and comparing market data is easier when the information is organized in one searchable view.",
      solution:
        "I built a coin dashboard with search by name or symbol, controls for how many results to show, and sorting by market cap, price, or name. Each coin also opens a detail page with additional market information.",
      result:
        "The live project brings a searchable, sortable coin list and individual coin details together in one place, including price, market cap, price movement, and supply information.",
    },
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
];
