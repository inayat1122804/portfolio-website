import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you requested could not be found."
      />
      <section className="section-wrap">
        <div className="section-container py-24 text-center">
          <p className="eyebrow">404 · Page not found</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-copy sm:text-5xl">
            This page isn’t here.
          </h1>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-muted">
            The address may be outdated, or the page may have moved.
          </p>
          <Link to="/" className="primary-button mt-8">
            Return home
          </Link>
        </div>
      </section>
    </>
  );
}
