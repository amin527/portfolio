import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <header className="page-header">
      <h1 className="page-header__title">Page not found</h1>
      <p className="page-header__intro">
        That page doesn't exist. <Link to="/">Back to projects</Link>
      </p>
    </header>
  );
}
