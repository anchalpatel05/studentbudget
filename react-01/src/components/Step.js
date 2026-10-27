import './Step.css';

function Step({ number, title, text }) {
  return (
    <div className="step">
      <p className="step-number">{number}</p>
      <div className="step-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Step;
