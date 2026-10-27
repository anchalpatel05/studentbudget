import './MoneyWin.css';

function MoneyWin({ number, text }) {
  return (
    <div className="money-win">
      <p className="money-number">{number}</p>
      <p>{text}</p>
    </div>
  );
}

export default MoneyWin;
