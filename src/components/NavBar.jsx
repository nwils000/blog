import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="portfolio-links">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link className="navbar-links" to="/about">
          About
        </Link>
        <Link className="navbar-links">Projects</Link>
        <Link className="navbar-links">Contact</Link>
      </div>
      <div className="blog-link">
        <Link to="blog" className="navbar-links">
          Blog
        </Link>
      </div>
    </div>
  );
}
