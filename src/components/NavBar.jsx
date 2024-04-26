import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>{`Nathan Wilson`}</h1>
      </Link>
      <Link className="navbar-about-me" to="/about">
        About Me
      </Link>
    </div>
  );
}
