import { skillGroups } from "../data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      data-nav-section
      className="section-wrap border-y border-line bg-surface"
    >
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">The tools I work with.</h2>
          <p className="section-description">
            My current toolkit spans front-end development and the fundamentals
            of full-stack web applications.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.name} className="panel-card">
              <h3 className="text-lg font-semibold text-copy">{group.name}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-chip">{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
