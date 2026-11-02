import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const links = [
  { name: 'Budget Planner', path: '/budget-planner' },
  { name: 'Spending Tracker', path: '/spending-tracker' },
  { name: 'Savings Goals', path: '/savings-goals' },
  { name: 'Student Loans & Credit', path: '/student-loans' },
  { name: 'Resources', path: '/resources' },
];

function NavMenu({ open, onLinkClick }) {
  return (
    <nav className={open ? 'main-nav show' : 'main-nav'}>
      {links.map((link) => (
        <NavLink key={link.path} to={link.path} onClick={onLinkClick}>{link.name}</NavLink>
      ))}
    </nav>
  );
}

export default NavMenu;
