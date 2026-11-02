import { useState } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import MenuIcon from './MenuIcon';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <Logo />
      <MenuIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      <NavMenu open={menuOpen} onLinkClick={() => setMenuOpen(false)} />
    </header>
  );
}

export default Header;
