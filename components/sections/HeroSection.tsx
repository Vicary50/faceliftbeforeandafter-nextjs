import { ProcedureConfig, SharedConfig } from '@/lib/types';
import ContactForm from '../common/ContactForm';

interface HeroSectionProps {
  procedureConfig: ProcedureConfig;
  sharedConfig: SharedConfig;
}

export default function HeroSection({ procedureConfig, sharedConfig }: HeroSectionProps) {
  const { hero, forms } = procedureConfig;
  const { ratings } = sharedConfig;

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>{hero.heading}</h1>
          <h2>{hero.subheading}</h2>

          <div className="hero-pricing-widget">
            <div className="hp-header">
              <i className="fas fa-tag"></i> Simple, transparent pricing
            </div>
            <div className="hp-row">
              <a
                href="https://kinvarahospital.co.uk/finance-your-treatment/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#783654',
                  textDecoration: 'none',
                  display: 'contents',
                  fontWeight: '600'
                }}
              >
                0% Interest Free Credit for 12 months
              </a>
            </div>
            {hero.prices.map((price, index) => (
              <div key={index} className="hp-row">
                <span>{price.label}</span>
                <span className="hp-price">
                  {price.currency === 'GBP' ? '£' : '$'}
                  {price.amount}
                </span>
              </div>
            ))}
          </div>

          <div className="review-images-wrapper">
            <a
              href="https://www.google.com/search?q=kinvara+private+hospital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ratings.googleImagePath}
                alt="Excellent 5 Stars Google"
                className="google-stars-img"
                width={200}
                height={40}
              />
            </a>
            <a
              href="https://uk.trustpilot.com/review/kinvarahospital.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ratings.trustpilotImagePath}
                alt="Trustpilot Rating"
                className="trustpilot-img"
                width={200}
                height={208}
              />
            </a>
          </div>
        </div>

        <div className="hero-form-wrapper">
          <ContactForm
            config={forms}
            formId="hero-form"
            title="MAKE AN INQUIRY"
            subtitle="HAVE A QUESTION? Fill out the form below."
            buttonText="Submit Enquiry"
          />
        </div>
      </div>
    </section>
  );
}
