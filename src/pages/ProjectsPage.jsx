import ProjectGrid from "../components/ProjectGrid";
import SEO from "../components/SEO";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects"
        description="Explore projects by Inayat Khan, a full-stack junior web developer."
      />
      <section className="section-wrap min-h-[70vh]">
        <div className="section-container">
          <p className="eyebrow">Projects</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-copy sm:text-5xl">
            Work from my portfolio.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Browse projects by category. Open a case study for the available
            project details; missing information is marked for confirmation.
          </p>
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
