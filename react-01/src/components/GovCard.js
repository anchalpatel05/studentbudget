import './GovCard.css';

function GovCard({ icon, name, link, linkText, text }) {
  return (
    <article className="gov-card">
      <p className="gov-icon">{icon}</p>
      <div>
        <h3>{name}</h3>
        <a className="gov-link" href={link} target="_blank" rel="noreferrer">{linkText}</a>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default GovCard;
