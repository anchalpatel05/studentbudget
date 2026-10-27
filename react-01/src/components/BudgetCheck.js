import MoneyInput from './MoneyInput';
import './BudgetCheck.css';

const inputs = [
  { id: 'income', label: '💵 Monthly Income', placeholder: '1800', income: true },
  { id: 'rent', label: '🏠 Rent / Housing', placeholder: '600' },
  { id: 'groceries', label: '🛒 Groceries', placeholder: '200' },
  { id: 'transportation', label: '🚌 Transportation', placeholder: '80' },
  { id: 'entertainment', label: '🎉 Entertainment & Dining Out', placeholder: '150' },
];

function BudgetCheck() {
  return (
    <form className="budget-card">
      <h3>Quick Budget Check</h3>
      {inputs.map((input) => (
        <MoneyInput
          key={input.id}
          id={input.id}
          label={input.label}
          placeholder={input.placeholder}
          income={input.income}
        />
      ))}
      <p className="budget-result">Enter your income above to see results</p>
    </form>
  );
}

export default BudgetCheck;
