'use client';

import { useEffect } from 'react';
import { FAQItem } from '@/lib/types';

interface FaqSectionProps {
  faqs: FAQItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  useEffect(() => {
    // Accordion exclusive behavior
    const details = document.querySelectorAll("details[name='faq']");
    details.forEach((detail) => {
      const handleToggle = () => {
        if ((detail as HTMLDetailsElement).open) {
          details.forEach((otherDetail) => {
            if (otherDetail !== detail && (otherDetail as HTMLDetailsElement).open) {
              (otherDetail as HTMLDetailsElement).open = false;
            }
          });
        }
      };
      detail.addEventListener('toggle', handleToggle);
      return () => detail.removeEventListener('toggle', handleToggle);
    });
  }, []);

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <details key={index} className="accordion-item" name="faq">
              <summary className="accordion-header">
                {faq.question} <i className="fas fa-chevron-down"></i>
              </summary>
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
