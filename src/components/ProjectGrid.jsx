import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ featuredOnly = false }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const availableProjects = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;
  const categories = useMemo(
    () => ["All", ...new Set(availableProjects.map((project) => project.category))],
    [availableProjects],
  );
  const filteredProjects =
    activeCategory === "All"
      ? availableProjects
      : availableProjects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button ${
              activeCategory === category ? "filter-button-active" : ""
            }`}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {filteredProjects.length} projects
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
