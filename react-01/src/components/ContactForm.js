import { useState } from 'react';
import toast from 'react-hot-toast';
import FormField from './FormField';
import './ContactForm.css';

const fields = [
  { label: 'Name', name: 'name', placeholder: 'Your name', minLength: 2 },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'you@email.com' },
  { label: 'Message', name: 'message', placeholder: 'How can I help?', minLength: 10, textarea: true },
];

const emptyForm = { name: '', email: '', message: '' };

// Sends the message with Web3Forms so the user never leaves the page
function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [result, setResult] = useState({ text: '', status: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showResult = (text, status) => {
    setResult({ text, status });
    setTimeout(() => setResult({ text: '', status: '' }), 3000);
  };

  const handleInvalid = () => {
    setResult({ text: 'Please fill out every field correctly.', status: 'bad' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setResult({ text: 'Sending...', status: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(e.target),
      });

      if (response.status === 200) {
        showResult('Thanks! Your message was sent.', 'good');
        toast.success('Message sent! I will get back to you soon.');
        setForm(emptyForm);
      } else {
        showResult('Sorry, your message could not be sent.', 'bad');
        toast.error('Message could not be sent. Please try again.');
      }
    } catch (error) {
      showResult('Sorry, your message could not be sent.', 'bad');
      toast.error('Message could not be sent. Please try again.');
    }

    setSending(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contact Me</h3>
      <input type="hidden" name="access_key" value="4ce710cc-7478-41b6-b3f4-f148dc23aeb1" />
      <input type="hidden" name="subject" value="New message from My Student Finance" />

      {fields.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          minLength={field.minLength}
          textarea={field.textarea}
          value={form[field.name]}
          onChange={handleChange}
          onInvalid={handleInvalid}
        />
      ))}

      <button className="button button-dark" type="submit" disabled={sending}>
        {sending ? 'Sending...' : 'Send Message'}
      </button>
      <p className={`contact-result ${result.status}`}>{result.text}</p>
    </form>
  );
}

export default ContactForm;
