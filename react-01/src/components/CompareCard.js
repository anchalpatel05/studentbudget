import './CompareCard.css';

function CompareCard({ title, items, color }) {
  return (
    <article className={`compare-card ${color}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default CompareCard;
