import { Link } from "react-router-dom";

export default function NotFound() {
  return <section className="section container empty-state"><h1>Page not found</h1><p>The page you are looking for does not exist.</p><Link className="button button-dark" to="/">Return home</Link></section>;
}