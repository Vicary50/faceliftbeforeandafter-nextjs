import { SharedConfig } from '@/lib/types';

interface AccreditationsSectionProps {
  config: SharedConfig;
}

export default function AccreditationsSection({ config }: AccreditationsSectionProps) {
  const { accreditations } = config;
  const { logos, medicalReviewer } = accreditations;

  return (
    <section className="accreditations">
      <div className="container">
        <div className="logo-row">
          <a
            href={medicalReviewer.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reviewer-item"
          >
            <div className="reviewer-image">
              <img
                src={medicalReviewer.imagePath}
                alt={`${medicalReviewer.name} - ${medicalReviewer.credentials}`}
                width={60}
                height={60}
              />
            </div>
            <div className="reviewer-info">
              <div className="reviewer-label">Medically Reviewed by:</div>
              <div className="reviewer-name">{medicalReviewer.name}</div>
              <div className="reviewer-credentials">
                GMC: {medicalReviewer.gmcNumber}
              </div>
            </div>
          </a>

          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <a href={logo.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.imagePath}
                  alt={logo.name}
                  width={64}
                  height={64}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
