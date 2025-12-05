import { SharedConfig } from '@/lib/types';

interface HeaderProps {
  config: SharedConfig;
}

export default function Header({ config }: HeaderProps) {
  const { hospital, social } = config;

  return (
    <div className="top-banner">
      <div className="container top-bar-flex">
        <a
          href="https://kinvarahospital.co.uk/"
          className="brand-name"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {hospital.name}
        </a>
        <div className="contact-group">
          <div className="social-icons">
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${hospital.name} on Facebook`}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${hospital.name} on Instagram`}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit The Karri Clinic on YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="phone-contact">
            <i className="fas fa-phone-alt"></i>
            <a href={`tel:${hospital.phone.replace(/\s/g, '')}`}>{hospital.phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
