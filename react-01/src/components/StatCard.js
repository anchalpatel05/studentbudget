import './StatCard.css';

function StatCard({ label, number, color }) {
  return (
    <div className={`stat-card ${color}`}>
      <p>{label}</p>
      <p className="stat-number">{number}</p>
    </div>
  );
}

export default StatCard;
