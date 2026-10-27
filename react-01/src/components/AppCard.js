import './AppCard.css';

function AppCard({ icon, name, tag, text }) {
  return (
    <article className="app-card">
      <p className="app-icon">{icon}</p>
      <div>
        <div className="app-title">
          <h3>{name}</h3>
          <p className="app-tag">{tag}</p>
        </div>
        <p className="app-text">{text}</p>
      </div>
    </article>
  );
}

export default AppCard;
