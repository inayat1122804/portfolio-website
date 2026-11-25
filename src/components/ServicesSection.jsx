import { FiArrowUpRight, FiCode, FiLayers, FiServer } from "react-icons/fi";
import { services } from "../data/services";

const serviceIcons = [FiCode, FiLayers, FiServer];

export default function ServicesSection() {
  return (
    <section className="section-wrap">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">What I can help with</p>
          <h2 className="section-title">From interface to application.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article key={service.title} className="service-card">
                <div className="flex items-center justify-between">
                  <span className="service-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <FiArrowUpRight className="text-muted" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-copy">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
