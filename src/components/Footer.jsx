import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-semibold text-copy">INAYAT KHAN</p>
          <p className="mt-1 text-sm text-muted">
            Full-stack junior web developer
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <a
            href="https://github.com/inayat1122804"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link inline-flex items-center gap-2"
            aria-label="Visit Inayat Khan on GitHub (opens in a new tab)"
          >
            <FaGithub aria-hidden="true" />
            GitHub
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <p className="text-sm text-muted">
          © Inayat Khan
        </p>
      </div>
    </footer>
  );
}
