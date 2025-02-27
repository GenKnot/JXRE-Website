'use client'

import { useState } from 'react';
import { API_BASE_URL } from "@/constants/api";

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setStatus({ type: 'error', message: 'Please enter your email' });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(`${API_BASE_URL}/api/subscribe/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you for subscribing!' });
        setEmail('');
      } else {
        const data = await response.json();
        setStatus({
          type: 'error',
          message: data.error || 'Subscription failed. Please try again.'
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus({ type: 'error', message: 'Subscription failed. Please try again.' });
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3000);
    }
  };

  return (
      <form className="footer_mailchimp_form" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <input
              type="email"
              className="form-control"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
          />
        </div>

        <div className="d-flex align-items-center">
          <button
              type="submit"
              className="btn btn-primary mb-2"
              disabled={isSubmitting}
          >
            {isSubmitting ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
                <span>Subscribe <i className="fa fa-angle-right"></i></span>
            )}
          </button>

          {status.message && (
              <span className={`ms-2 small ${status.type === 'error' ? 'text-danger' : 'text-success'}`}>
            {status.message}
          </span>
          )}
        </div>
      </form>
  );
};

export default SubscribeForm;