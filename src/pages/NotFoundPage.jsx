import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <section className="not-found-page">
    <div className="container text-center">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-text">That page doesn't exist (or the project link is out of date).</p>
      <Link to="/" className="cta-button primary">
        Back to home
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
