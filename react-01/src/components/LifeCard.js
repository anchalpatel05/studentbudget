import { Link } from 'react-router-dom';
import './LifeCard.css';

function LifeCard({ label, labelColor, title, text, image, buttonText, path }) {
  const background = {
    backgroundImage: `linear-gradient(transparent 20%, var(--photo-fade)), url(${process.env.PUBLIC_URL}/images/${image})`,
  };

  return (
    <article className="life-card" style={background}>
      <p className="life-label" style={{ background: `var(--${labelColor})` }}>{label}</p>
      <h3>{title}</h3>
      <p className="life-text">{text}</p>
      <Link className="button button-primary" to={path}>{buttonText} &rarr;</Link>
    </article>
  );
}

export default LifeCard;
