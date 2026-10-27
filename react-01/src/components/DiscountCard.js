import './DiscountCard.css';

function DiscountCard({ icon, name, tag, text }) {
  return (
    <article className="discount-card">
      <div className="discount-head">
        <p className="discount-icon">{icon}</p>
        <h3>{name}</h3>
        <p className="discount-tag">{tag}</p>
      </div>
      <p className="discount-text">{text}</p>
    </article>
  );
}

export default DiscountCard;
