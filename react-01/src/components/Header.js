import Logo from './Logo';
import NavMenu from './NavMenu';
import MenuIcon from './MenuIcon';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <Logo />
      <MenuIcon />
      <NavMenu />
    </header>
  );
}

export default Header;
