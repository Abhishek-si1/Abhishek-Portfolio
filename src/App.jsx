import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CursorFollower from "./components/layout/CursorFollower";
import ScrollToTop from "./components/layout/ScrollToTop";

// Pages — HomePage is what nearly every visitor lands on, so it stays in the
// main bundle. The other two are code-split: they're fetched only when a
// visitor actually navigates to them, which shrinks the initial JS payload.
import HomePage from "./pages/HomePage";
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Suspense fallback={<div className="route-loading" aria-hidden="true" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:slug" element={<ProjectDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <CursorFollower />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
