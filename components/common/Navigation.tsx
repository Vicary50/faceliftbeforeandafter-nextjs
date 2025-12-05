interface NavigationProps {
  links?: Array<{ href: string; label: string }>;
}

export default function Navigation({ links }: NavigationProps) {
  const defaultLinks = [
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'BEFORE AND AFTER PHOTOS' },
    { href: '#prices', label: 'Prices' },
    { href: '#surgeons', label: 'Our Surgeons' },
    { href: '#contact', label: 'Contact Us' }
  ];

  const navLinks = links || defaultLinks;

  return (
    <nav id="main-nav">
      <div className="container nav-flex">
        <div className="nav-links">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
