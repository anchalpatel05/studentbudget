import './Filter.css';

function Filter({ name, active }) {
  return (
    <button type="button" className={active ? 'filter active' : 'filter'}>{name}</button>
  );
}

export default Filter;
