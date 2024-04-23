import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="my-name">
      <Link to="/">
        <h1>{`Nathan Wilson`}</h1>
      </Link>
    </div>
  );
}
