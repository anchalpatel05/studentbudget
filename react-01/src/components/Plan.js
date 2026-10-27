import './Plan.css';

function Plan({ years, title, text }) {
  return (
    <div className="plan">
      <p className="plan-years">{years}</p>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Plan;
