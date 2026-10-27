import './SampleRow.css';

function SampleRow({ label, amount, color, total }) {
  return (
    <div className={`sample-row ${color}`}>
      <p>{total ? <strong>{label}</strong> : label}</p>
      <p className="sample-amount">{amount}</p>
    </div>
  );
}

export default SampleRow;
