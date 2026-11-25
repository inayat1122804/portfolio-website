import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/projects";
import SEO from "../components/SEO";
import NotFoundPage from "./NotFoundPage";

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFoundPage />;

  const details = project.caseStudy
    ? [
        { title: "Problem", content: project.caseStudy.problem },
        { title: "Solution", content: project.caseStudy.solution },
        { title: "Technology", content: project.tags.join(", ") },
        { title: "Result", content: project.caseStudy.result },
      ]
    : [
        { title: "About this project", content: project.description },
        ...(project.tags.length
          ? [{ title: "Technology", content: project.tags.join(", ") }]
          : []),
      ];

  return (
    <>
      <SEO
        title={project.title}
        description={`${project.title} — a project by Inayat Khan.`}
      />
      <article className="section-wrap min-h-[70vh]">
        <div className="section-container max-w-5xl">
          <Link to="/projects" className="text-link">
            <FiArrowLeft aria-hidden="true" /> Back to projects
          </Link>
          <header className="mt-10">
            <p className="eyebrow">{project.category}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-copy sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              {project.description}
            </p>
          </header>
          <img
            src={project.image}
            alt={project.imageAlt}
            width="1440"
            height="900"
            loading="lazy"
            decoding="async"
            className="mt-10 aspect-[16/9] w-full rounded-3xl border border-line object-cover"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {details.map((detail) => (
              <section key={detail.title} className="panel-card">
                <h2 className="text-lg font-semibold text-copy">{detail.title}</h2>
                <p className="mt-3 leading-7 text-muted">{detail.content}</p>
              </section>
            ))}
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button mt-8"
            >
              Open live project <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    </>
  );
}
