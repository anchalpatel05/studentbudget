import './TipCard.css';

function TipCard({ icon, title, text }) {
  return (
    <article className="tip-card">
      <p className="tip-icon">{icon}</p>
      <h3>{title}</h3>
      <p className="tip-text">{text}</p>
    </article>
  );
}

export default TipCard;
