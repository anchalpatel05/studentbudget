import './Expense.css';

function Expense({ icon, iconColor, title, category, date, amount }) {
  return (
    <div className="expense">
      <p className={`expense-icon ${iconColor}`}>{icon}</p>
      <div className="expense-text">
        <h3>{title}</h3>
        <p>{category} &middot; {date}</p>
      </div>
      <p className="expense-amount">{amount}</p>
      <button type="button" className="expense-delete">&times;</button>
    </div>
  );
}

export default Expense;
