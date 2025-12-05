import { SharedConfig } from '@/lib/types';

interface SurgeonsSectionProps {
  config: SharedConfig;
}

export default function SurgeonsSection({ config }: SurgeonsSectionProps) {
  const { surgeons } = config;

  return (
    <section id="surgeons" className="surgeons-section">
      <div className="container">
        <h2>Our Surgeons</h2>
        <div className="surgeons-grid">
          {surgeons.map((surgeon, index) => (
            <a
              key={index}
              href={surgeon.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="surgeon-card"
            >
              <img
                src={surgeon.imagePath}
                className="surgeon-img"
                alt={surgeon.name}
                width={400}
                height={500}
                loading="lazy"
              />
              <div className="surgeon-info">
                <h3>{surgeon.name}</h3>
                <p>{surgeon.credentials}</p>
                {surgeon.description && (
                  <div className="qualifications">{surgeon.description}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
