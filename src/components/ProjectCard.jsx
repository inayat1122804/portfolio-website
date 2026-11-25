import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        to={`/projects/${project.slug}`}
        className="project-image-link"
        aria-label={`Read the ${project.title} case study`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          width="1440"
          height="900"
          className="project-image"
        />
        <span className="project-category">{project.category}</span>
      </Link>
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-copy">
          <Link to={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 min-h-[3.5rem] leading-7 text-muted">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project technologies">
          {project.tags.length ? (
            project.tags.map((tag) => (
              <li key={tag} className="skill-chip">{tag}</li>
            ))
          ) : (
            <li className="text-sm text-muted">TODO: Confirm technologies</li>
          )}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Case study <FiArrowUpRight aria-hidden="true" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-copy"
            >
              Live project <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
