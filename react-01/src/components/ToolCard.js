import { Link } from 'react-router-dom';
import './ToolCard.css';

function ToolCard({ icon, title, text, path, color }) {
  return (
    <article className={`tool-card ${color}`}>
      <div className="tool-icon"><i className={`fa-solid ${icon}`}></i></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={path}>Explore &rarr;</Link>
    </article>
  );
}

export default ToolCard;
