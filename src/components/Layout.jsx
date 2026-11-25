import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function RouteLoading() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-6xl items-center px-6">
      <p className="text-sm text-muted" role="status">Loading page…</p>
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" className="min-h-[65vh]">
        <Suspense fallback={<RouteLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
