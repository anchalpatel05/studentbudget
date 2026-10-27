import './AppItem.css';

function AppItem({ name, category, price, description, color, img_name }) {
  return (
    <article className={`app-item ${color}`}>
      <div className="app-item-head">
        <div className="app-item-icon">
          <img src={`${process.env.PUBLIC_URL}/${img_name}`} alt={`${name} icon`} />
        </div>
        <div>
          <h3>{name}</h3>
          <p className="app-item-category">{category}</p>
        </div>
        <p className={price === 'PAID' ? 'app-item-price paid' : 'app-item-price'}>{price}</p>
      </div>
      <p className="app-item-text">{description}</p>
    </article>
  );
}

export default AppItem;
