import { SharedConfig } from '@/lib/types';

interface FooterProps {
  config: SharedConfig;
}

export default function Footer({ config }: FooterProps) {
  const { footer } = config;

  return (
    <footer className="new-footer">
      <div className="container footer-flex">
        <div className="footer-left">
          <div className="footer-links">
            {footer.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
            <a href="/sitemap.xml">Sitemap</a>
          </div>
          <div className="footer-bottom-row">
            <span>© Copyright {footer.copyrightYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
