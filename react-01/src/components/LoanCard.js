import './LoanCard.css';

function LoanCard({ icon, title, rate, forWho, items, color, best }) {
  return (
    <article className={best ? `loan-card ${color} best` : `loan-card ${color}`}>
      {best && <p className="card-badge">Best Option First</p>}
      <p className="loan-icon">{icon}</p>
      <h3>{title}</h3>
      <div className="loan-tags">
        <p>Rate: {rate}</p>
        <p className="loan-for">{forWho}</p>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default LoanCard;
