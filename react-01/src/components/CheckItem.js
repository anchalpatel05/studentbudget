import './CheckItem.css';

function CheckItem({ text }) {
  return (
    <li className="check-item">
      <i className="fa-solid fa-check"></i>
      {text}
    </li>
  );
}

export default CheckItem;
