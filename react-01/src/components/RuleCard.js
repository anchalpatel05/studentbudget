import './RuleCard.css';

function RuleCard({ percent, title, text, items, color }) {
  return (
    <article className={`rule-card ${color}`}>
      <p className="rule-percent">{percent}</p>
      <h3>{title}</h3>
      <p className="rule-text">{text}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default RuleCard;
