
import { useState, useRef } from 'react';
import { CircleLoader } from 'react-spinners';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reCaptchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation logic...
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    const recaptchaValue = reCaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setStatus('Please verify that you are not a robot.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsSubmitting(false);

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message. Please try again later.');
      }
    } catch (error) {
      setIsSubmitting(false);
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="5"
            />
          </div>

          <ReCAPTCHA
            sitekey="your-site-key-here"
            ref={reCaptchaRef}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircleLoader size={24} color="#ffffff" />
            ) : (
              'Send Message'
            )}
          </button>
        </form>
        {status && (
          <p className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
