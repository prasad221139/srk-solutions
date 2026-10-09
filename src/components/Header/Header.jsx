import "./Header.css";
import company, { navigation } from "../../helpers/companyData";

const Header = () => {
  return (
    <header className="site-header" id="home">
      <div className="site-header-inner">
        <a
          className="site-brand"
          href="#home"
          aria-label={`${company.name} home`}
        >
          <img src="/images/logo.png" alt="" />
          <span>
            <strong>{company.name}</strong>
            <small>{company.tagline}</small>
          </span>
        </a>

        <nav className="site-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-call" href={`tel:${company.phone}`}>
          <span className="header-call-copy">
            <span className="header-call-label">Speak with our team</span>
            <strong>{company.phone}</strong>
          </span>
          <span className="header-call-arrow" aria-hidden="true">
            -&gt;
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
