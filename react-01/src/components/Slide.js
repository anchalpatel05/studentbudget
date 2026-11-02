import './Slide.css';

function Slide({ image, label, title, text, active }) {
  return (
    <article className={active ? 'slide active' : 'slide'} aria-hidden={!active}>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={title} />
      <div className="slide-text">
        <p className="slide-label">{label}</p>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default Slide;
