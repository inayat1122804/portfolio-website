import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      data-nav-section
      className="section-wrap border-y border-line bg-surface"
    >
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">A little about my journey.</h2>
        </div>
        {experience.length ? (
          <ol className="mt-10 space-y-4">
            {experience.map((item) => (
              <li key={`${item.role}-${item.period}`} className="panel-card">
                <p className="text-sm text-accent">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-copy">{item.role}</h3>
                <p className="mt-1 text-muted">{item.organization}</p>
                <p className="mt-4 leading-7 text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        ) : (
          <div className="panel-card mt-10 max-w-3xl">
            <p className="font-medium text-copy">
              TODO: Add confirmed roles, dates, and experience details.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              For now, this portfolio focuses on my skills and project work.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
