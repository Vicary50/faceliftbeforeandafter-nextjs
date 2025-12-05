'use client';

import { useEffect } from 'react';
import { FormsConfig } from '@/lib/types';

interface ContactFormProps {
  config: FormsConfig;
  formId: string;
  title: string;
  subtitle: string;
  buttonText?: string;
}

export default function ContactForm({
  config,
  formId,
  title,
  subtitle,
  buttonText = 'Submit Enquiry'
}: ContactFormProps) {
  useEffect(() => {
    const form = document.getElementById(formId);

    if (!form) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      const formElement = e.target as HTMLFormElement;
      const submitBtn = formElement.querySelector('.submit-btn') as HTMLButtonElement;
      const originalText = submitBtn.textContent || '';

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';

      const formData = new FormData(formElement);
      const object: Record<string, any> = {};
      formData.forEach((value, key) => { object[key] = value; });

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(object)
        });
        const json = await response.json();

        if (json.success) {
          submitBtn.textContent = 'Message Sent!';
          submitBtn.style.backgroundColor = '#27ae60';
          formElement.reset();
          alert('Thank you for your enquiry! We will get back to you shortly.');
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.opacity = '1';
          }, 3000);
        } else {
          throw new Error(json.message || 'Form submission failed');
        }
      } catch (error) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
        alert('Sorry, something went wrong. Please try again or call us at 01709 464200.');
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, [formId]);

  return (
    <div className="glass-form">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <form
        id={formId}
        action="https://api.web3forms.com/submit"
        method="POST"
        className="web3form"
      >
        <input type="hidden" name="access_key" value={config.web3FormsKey} />
        <input type="hidden" name="subject" value={config.subject} />
        <input type="hidden" name="from_name" value={config.fromName} />
        <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

        <div className="form-group">
          <label htmlFor={`${formId}-name`}>Name *</label>
          <input type="text" name="name" id={`${formId}-name`} required />
        </div>
        <div className="form-group">
          <label htmlFor={`${formId}-phone`}>Phone Number *</label>
          <input type="tel" name="phone" id={`${formId}-phone`} required />
        </div>
        <div className="form-group">
          <label htmlFor={`${formId}-email`}>Email *</label>
          <input type="email" name="email" id={`${formId}-email`} required />
        </div>
        <div className="form-group">
          <label htmlFor={`${formId}-message`}>Message *</label>
          <textarea name="message" id={`${formId}-message`} required></textarea>
        </div>

        <div className="gdpr-check">
          <input
            type="checkbox"
            name="gdpr_consent"
            value="yes"
            id={`${formId}-gdpr`}
            required
          />
          <label htmlFor={`${formId}-gdpr`}>
            I agree to Kinvara Private Hospital holding my personal details, and
            contacting me via the email address and/or telephone number provided.*
          </label>
        </div>

        <button type="submit" className="submit-btn">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
