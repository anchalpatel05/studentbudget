import ProgressBar from './ProgressBar';
import './GoalCard.css';

function GoalCard({ icon, iconColor, title, target, saved, percent, note, color = 'green', completed }) {
  return (
    <article className={completed ? `goal-card ${color} completed` : `goal-card ${color}`}>
      {completed && <p className="card-badge">&#10003; Completed!</p>}
      <div className="goal-title">
        <p className={`goal-icon ${iconColor}`}>{icon}</p>
        <div>
          <h3>{title}</h3>
          <p>Target: {target}</p>
        </div>
        <button type="button" className="goal-delete">&times;</button>
      </div>
      <div className="goal-amount">
        <p className="goal-saved">{saved}</p>
        <p>{percent}%</p>
      </div>
      <ProgressBar percent={percent} color={color} />
      <p className="goal-note">{note}</p>
      {!completed && <button type="button" className="add-savings">+ Add Savings</button>}
    </article>
  );
}

export default GoalCard;
