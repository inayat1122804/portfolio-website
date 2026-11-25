import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", to: "/#about", section: "about" },
  { label: "Skills", to: "/#skills", section: "skills" },
  { label: "Projects", to: "/#projects", section: "projects" },
  { label: "Experience", to: "/#experience", section: "experience" },
  { label: "Contact", to: "/contact", section: "contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuState, setMenuState] = useState({
    open: false,
    locationKey: location.key,
  });
  const [activeSection, setActiveSection] = useState("home");
  const isHome = location.pathname === "/";
  const menuOpen =
    menuState.open && menuState.locationKey === location.key;

  useEffect(() => {
    if (!isHome) return undefined;
    const main = document.getElementById("main-content");
    if (!main) return undefined;

    let sectionObserver;
    const observeSections = () => {
      const sections = main.querySelectorAll("[data-nav-section]");
      if (!sections.length) return false;
      sectionObserver = new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visibleSections[0]) {
            setActiveSection(visibleSections[0].target.id);
          }
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.35, 0.6] },
      );
      sections.forEach((section) => sectionObserver.observe(section));
      return true;
    };

    const mutationObserver = new MutationObserver(() => {
      if (observeSections()) mutationObserver.disconnect();
    });
    if (!observeSections()) {
      mutationObserver.observe(main, { childList: true, subtree: true });
    }
    return () => {
      mutationObserver.disconnect();
      sectionObserver?.disconnect();
    };
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const isItemActive = (item) => {
    if (item.section === "contact" && location.pathname === "/contact") return true;
    if (item.section === "projects" && location.pathname.startsWith("/projects")) {
      return true;
    }
    return isHome && activeSection === item.section;
  };

  const renderLinks = (mobile = false) =>
    navItems.map((item) => (
      <Link
        key={item.label}
        to={item.to}
        onClick={() =>
          setMenuState({ open: false, locationKey: location.key })
        }
        aria-current={isItemActive(item) ? "location" : undefined}
        className={`nav-link ${isItemActive(item) ? "nav-link-active" : ""} ${
          mobile ? "nav-link-mobile" : ""
        }`}
      >
        {item.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="nav-shell mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="brand-link"
          aria-label="Inayat Khan, home"
          onClick={() => {
            setActiveSection("home");
            setMenuState({ open: false, locationKey: location.key });
          }}
        >
          <span className="brand-mark" aria-hidden="true">IK</span>
          <span>INAYAT KHAN</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">{renderLinks()}</div>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button lg:hidden"
            onClick={() =>
              setMenuState({
                open: !menuOpen,
                locationKey: location.key,
              })
            }
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="mobile-menu mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden"
      >
        <div className="flex flex-col gap-1">{renderLinks(true)}</div>
      </div>
    </header>
  );
}
