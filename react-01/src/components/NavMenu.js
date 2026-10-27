import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const links = [
  { name: 'Budget Planner', path: '/budget-planner' },
  { name: 'Spending Tracker', path: '/spending-tracker' },
  { name: 'Savings Goals', path: '/savings-goals' },
  { name: 'Student Loans & Credit', path: '/student-loans' },
  { name: 'Resources', path: '/resources' },
];

function NavMenu() {
  return (
    <nav className="main-nav">
      {links.map((link) => (
        <NavLink key={link.path} to={link.path}>{link.name}</NavLink>
      ))}
    </nav>
  );
}

export default NavMenu;
