import './MoneyInput.css';

function MoneyInput({ id, label, placeholder, income }) {
  return (
    <>
      <label className="money-label" htmlFor={id}>{label}</label>
      <div className={income ? 'money-input income' : 'money-input'}>
        <span>$</span>
        <input type="number" id={id} placeholder={placeholder} />
      </div>
    </>
  );
}

export default MoneyInput;
