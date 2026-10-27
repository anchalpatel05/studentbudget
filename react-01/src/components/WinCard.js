import './WinCard.css';

function WinCard({ icon, text }) {
  return (
    <div className="win-card">
      <p className="win-icon">{icon}</p>
      <p className="win-text">{text}</p>
    </div>
  );
}

export default WinCard;
