import { ProcedureConfig, SharedConfig } from '@/lib/types';
import ContactForm from '../common/ContactForm';

interface ContactSectionProps {
  procedureConfig: ProcedureConfig;
  sharedConfig: SharedConfig;
}

export default function ContactSection({
  procedureConfig,
  sharedConfig
}: ContactSectionProps) {
  const { forms } = procedureConfig;
  const { hospital } = sharedConfig;

  return (
    <section id="contact" className="contact-bottom-section">
      <div className="container contact-layout">
        <div className="contact-info-side">
          <div className="contact-details-group">
            <h3>Contact us</h3>
            <div className="contact-row">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${hospital.email}`}>{hospital.email}</a>
            </div>
            <div className="contact-row">
              <i className="fas fa-phone-alt"></i>
              <a href={`tel:${hospital.phone.replace(/\s/g, '')}`}>{hospital.phone}</a>
            </div>
            <div className="contact-row">
              <i className="fas fa-map-marker-alt"></i>
              <span>
                {hospital.name},<br />
                {hospital.address}, {hospital.postcode}
              </span>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.984697218554!2d-1.3464!3d53.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879764000000001%3A0x0!2sKinvara%20Private%20Hospital!5e0!3m2!1sen!2suk!4v1600000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Kinvara Private Hospital Location Map"
            ></iframe>
          </div>
        </div>

        <ContactForm
          config={forms}
          formId="contact-form"
          title="GET IN TOUCH"
          subtitle="HAVE A QUESTION? Fill out the form below."
          buttonText="Send Message"
        />
      </div>
    </section>
  );
}
