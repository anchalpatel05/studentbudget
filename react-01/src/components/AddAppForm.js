import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { API_URL } from '../config';
import { categories, limits, validateApp } from '../appRules';
import './AddAppForm.css';

const emptyApp = { name: '', category: '', price: '', description: '', website: '' };

// Form for sharing a new app; it posts to the server and hands the new app back to the list
function AddAppForm({ onAppAdded }) {
  const [values, setValues] = useState(emptyApp);
  const [icon, setIcon] = useState(null);
  const [preview, setPreview] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState({ text: '', status: '' });

  // Show a small preview of the chosen icon
  useEffect(() => {
    if (!icon) {
      setPreview('');
      return;
    }
    const url = URL.createObjectURL(icon);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [icon]);

  // After the first submit, re-check the fields as the user fixes them
  const handleChange = (e) => {
    const newValues = { ...values, [e.target.name]: e.target.value };
    setValues(newValues);
    if (submitted) setErrors(validateApp(newValues, icon));
  };

  const handleIcon = (e) => {
    const newIcon = e.target.files[0] || null;
    setIcon(newIcon);
    if (submitted) setErrors(validateApp(values, newIcon));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setResult({ text: '', status: '' });

    const newErrors = validateApp(values, icon);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setResult({ text: 'Please fix the highlighted fields.', status: 'bad' });
      return;
    }

    const formData = new FormData();
    formData.append('name', values.name.trim());
    formData.append('category', values.category);
    formData.append('price', values.price);
    formData.append('description', values.description.trim());
    formData.append('website', values.website.trim());
    if (icon) formData.append('img', icon);

    setSending(true);
    try {
      const response = await fetch(`${API_URL}/api/apps`, { method: 'POST', body: formData });
      const data = await response.json();

      if (response.ok && data.success) {
        onAppAdded(data.app);
        setResult({ text: `${data.app.name} was added to the list!`, status: 'good' });
        toast.success(`${data.app.name} was added!`);
        setValues(emptyApp);
        setIcon(null);
        setSubmitted(false);
        setErrors({});
        e.target.reset();
      } else {
        setResult({ text: data.message || 'Sorry, the app could not be added.', status: 'bad' });
      }
    } catch (error) {
      setResult({ text: 'Sorry, the server could not be reached. Please try again.', status: 'bad' });
    }
    setSending(false);
  };

  const fieldClass = (name) => (errors[name] ? 'add-field has-error' : 'add-field');

  return (
    <form className="add-app-form" onSubmit={handleSubmit} noValidate>
      <h3>Share an App</h3>

      <div className={fieldClass('name')}>
        <label htmlFor="app-name">App name</label>
        <input id="app-name" name="name" type="text" placeholder="e.g. Rocket Money" maxLength={limits.nameMax} value={values.name} onChange={handleChange} />
        {errors.name && <p className="field-error">{errors.name}</p>}
      </div>

      <div className="add-row">
        <div className={fieldClass('category')}>
          <label htmlFor="app-category">Category</label>
          <select id="app-category" name="category" value={values.category} onChange={handleChange}>
            <option value="">Choose one</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.category && <p className="field-error">{errors.category}</p>}
        </div>

        <fieldset className={fieldClass('price')}>
          <legend>Price</legend>
          <div className="price-toggle">
            {['FREE', 'PAID'].map((price) => (
              <label key={price} className={values.price === price ? 'selected' : ''}>
                <input type="radio" name="price" value={price} checked={values.price === price} onChange={handleChange} />
                {price === 'FREE' ? 'Free' : 'Paid'}
              </label>
            ))}
          </div>
          {errors.price && <p className="field-error">{errors.price}</p>}
        </fieldset>
      </div>

      <div className={fieldClass('description')}>
        <label htmlFor="app-description">
          Why students should use it
          <span className="char-count">{values.description.trim().length}/{limits.descriptionMax}</span>
        </label>
        <textarea id="app-description" name="description" rows="4" placeholder="What does it do and how does it save students money?" maxLength={limits.descriptionMax} value={values.description} onChange={handleChange}></textarea>
        {errors.description && <p className="field-error">{errors.description}</p>}
      </div>

      <div className={fieldClass('website')}>
        <label htmlFor="app-website">Website <span className="optional">(optional)</span></label>
        <input id="app-website" name="website" type="url" placeholder="https://" value={values.website} onChange={handleChange} />
        {errors.website && <p className="field-error">{errors.website}</p>}
      </div>

      <div className={fieldClass('icon')}>
        <p className="field-title">Icon <span className="optional">(optional, under 2MB)</span></p>
        <input id="app-icon" className="icon-input" name="img" type="file" accept="image/*" onChange={handleIcon} />
        <label className="icon-upload" htmlFor="app-icon">
          <span className="icon-preview">
            {preview ? <img src={preview} alt="Chosen icon preview" /> : <span>$</span>}
          </span>
          <span className="icon-text">
            <strong>{icon ? icon.name : 'Choose an image'}</strong>
            <span>PNG, JPG or SVG &middot; a $ icon is used if you skip this</span>
          </span>
        </label>
        {errors.icon && <p className="field-error">{errors.icon}</p>}
      </div>

      <button className="button button-primary" type="submit" disabled={sending}>
        {sending ? 'Adding...' : 'Add App to the List'}
      </button>
      {result.text && <p className={`add-result ${result.status}`} role="status">{result.text}</p>}
    </form>
  );
}

export default AddAppForm;
