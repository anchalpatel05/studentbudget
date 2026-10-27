import './ProgressBar.css';

function ProgressBar({ percent, color = 'green', small }) {
  return (
    <div className={small ? 'bar bar-small' : 'bar'}>
      <span style={{ width: `${percent}%`, background: `var(--${color})` }}></span>
    </div>
  );
}

export default ProgressBar;
