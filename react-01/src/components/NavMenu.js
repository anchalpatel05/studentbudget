import './NavMenu.css';

const links = [
  { name: 'Budget Planner', href: '#budget-planner' },
  { name: 'Spending Tracker', href: '#spending-tracker' },
  { name: 'Savings Goals', href: '#savings-goals' },
  { name: 'Student Loans & Credit', href: '#student-loans' },
  { name: 'Resources', href: '#resources' },
];

function NavMenu() {
  return (
    <nav className="main-nav">
      {links.map((link) => (
        <a key={link.name} href={link.href}>{link.name}</a>
      ))}
    </nav>
  );
}

export default NavMenu;
