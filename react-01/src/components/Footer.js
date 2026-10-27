import { Link } from 'react-router-dom';
import './Footer.css';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Budget Planner', path: '/budget-planner' },
  { name: 'Spending Tracker', path: '/spending-tracker' },
  { name: 'Savings Goals', path: '/savings-goals' },
  { name: 'Student Loans & Credit', path: '/student-loans' },
  { name: 'Resources', path: '/resources' },
];

function Footer() {
  return (
    <footer className="main-footer">
      <p className="footer-name">My Student Finance</p>
      <p>Helping students spend smarter, save better, and stress less.</p>
      <nav className="footer-nav">
        {links.map((link) => (
          <Link key={link.path} to={link.path}>{link.name}</Link>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
