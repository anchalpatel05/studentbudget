import './MenuIcon.css';

function MenuIcon({ open, onClick }) {
  return (
    <button
      className={open ? 'menu open' : 'menu'}
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}

export default MenuIcon;
