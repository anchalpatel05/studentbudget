import ProgressBar from './ProgressBar';
import './CategoryBar.css';

function CategoryBar({ name, amount, percent, color = 'green' }) {
  return (
    <div className="category">
      <div className="category-title">
        <h4 style={{ color: `var(--${color})` }}>{name}</h4>
        <p>{amount}</p>
      </div>
      <ProgressBar percent={percent} color={color} small />
      <p className="category-percent">{percent}% of spending</p>
    </div>
  );
}

export default CategoryBar;
