import './Trap.css';

function Trap({ text }) {
  return (
    <div className="trap">
      <p className="trap-icon">&#10007;</p>
      <p>{text}</p>
    </div>
  );
}

export default Trap;
