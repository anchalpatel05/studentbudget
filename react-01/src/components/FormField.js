import './FormField.css';

function FormField({ label, name, type = 'text', placeholder, minLength, textarea, value, onChange, onInvalid }) {
  return (
    <>
      <label className="form-label" htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea
          className="form-input"
          id={name}
          name={name}
          rows="5"
          placeholder={placeholder}
          minLength={minLength}
          required
          value={value}
          onChange={onChange}
          onInvalid={onInvalid}
        ></textarea>
      ) : (
        <input
          className="form-input"
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          minLength={minLength}
          required
          value={value}
          onChange={onChange}
          onInvalid={onInvalid}
        />
      )}
    </>
  );
}

export default FormField;
