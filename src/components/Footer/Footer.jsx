import "./Footer.css";
import company, { navigation } from "../../helpers/companyData";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <a href="#home">{company.name}</a>
          <p>{company.tagline}</p>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <address className="footer-contact">
          <a href={`tel:${company.phone}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.address}</span>
        </address>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {company.name}
      </div>
    </footer>
  );
};

export default Footer;
