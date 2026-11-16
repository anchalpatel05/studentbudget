import { API_URL } from '../config';
import './AppItem.css';

function AppItem({ name, category, price, description, color, img_name, onSelect }) {
  // Let keyboard users open the details with Enter or Space too
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      className={`app-item ${color}`}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${name}`}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      <div className="app-item-head">
        <div className="app-item-icon">
          <img src={`${API_URL}/${img_name}`} alt={`${name} icon`} />
        </div>
        <div>
          <h3>{name}</h3>
          <p className="app-item-category">{category}</p>
        </div>
        <p className={price === 'PAID' ? 'app-item-price paid' : 'app-item-price'}>{price}</p>
      </div>
      <p className="app-item-text">{description}</p>
      <p className="app-item-more">View details &rarr;</p>
    </article>
  );
}

export default AppItem;
