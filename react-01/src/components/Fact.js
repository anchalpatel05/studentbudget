import './Fact.css';

function Fact({ number, text }) {
  return (
    <div className="fact">
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Fact;
