import { useEffect } from 'react';
import { API_URL } from '../config';
import './AppModal.css';

// Pop-up dialog that shows the full details for one app
function AppModal({ app, onClose }) {
  // Close with the Escape key and stop the page behind from scrolling
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`app-modal ${app.color}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Close details" onClick={onClose}>&times;</button>

        <div className="modal-banner">
          <div className="modal-icon">
            <img src={`${API_URL}/${app.img_name}`} alt={`${app.name} icon`} />
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-tags">
            <p className="modal-category">{app.category}</p>
            <p className={app.price === 'PAID' ? 'modal-price paid' : 'modal-price'}>{app.price === 'PAID' ? 'Paid' : 'Free'}</p>
          </div>
          <h3 id="app-modal-title">{app.name}</h3>
          <p className="modal-text">{app.description}</p>

          <div className="modal-tip">
            <p>&#128161; <strong>Student tip:</strong> {app.price === 'PAID'
              ? 'Look for a student discount or free trial before you pay, and cancel if you stop using it.'
              : 'It costs nothing to try, so give it a week and see if it fits how you manage money.'}</p>
          </div>

          <div className="modal-actions">
            {app.website && (
              <a className="button button-dark" href={app.website} target="_blank" rel="noreferrer">Visit Website &rarr;</a>
            )}
            <button className="button button-outline" type="button" onClick={onClose}>Back to Apps</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppModal;
