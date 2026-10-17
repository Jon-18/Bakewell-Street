import { Link } from "react-router-dom";
import "../styles/NotFound.css"

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link to="/" className="back-home">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;