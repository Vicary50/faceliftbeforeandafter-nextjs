import { ProcedureConfig } from '@/lib/types';

interface PricingSectionProps {
  config: ProcedureConfig;
}

export default function PricingSection({ config }: PricingSectionProps) {
  const { pricing } = config;

  return (
    <section id="prices" className="prices-section">
      <div className="container">
        <h2>Prices</h2>
        <div className="prices-grid">
          <div className="price-card">
            {pricing.options.map((option, index) => (
              <div key={index} className="price-item">
                <div className="price-desc">{option.label}</div>
                <div className="price-val">
                  {option.currency === 'GBP' ? '£' : '$'}
                  {option.amount}
                </div>
              </div>
            ))}
          </div>

          {pricing.financeAvailable && (
            <div className="finance-card">
              <h3>0% Interest Free Credit for 12 months</h3>
              <p>
                {pricing.financeTerms ||
                  'Pay nothing extra with 0% interest finance – spread the cost of your treatment over 12 months through Humm. 0% finance available up to £30,000, subject to status. Minimum spend and age restrictions may apply. Terms and conditions apply.'}
              </p>
              <a
                href="https://kinvarahospital.co.uk/finance-your-treatment/"
                className="finance-btn"
              >
                LEARN MORE ABOUT FINANCE OPTIONS
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
