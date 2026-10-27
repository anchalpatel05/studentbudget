import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
  return (
    <Link className="logo" to="/">
      <p className="logo-icon">$</p>
      <p className="logo-name">My Student Finance</p>
    </Link>
  );
}

export default Logo;
