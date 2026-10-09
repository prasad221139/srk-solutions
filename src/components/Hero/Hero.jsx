import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        className="hero-image"
        src="/images/hero.jpg"
        alt="Cleanroom facility"
      />
      <div className="hero-content">
        <p className="hero-kicker">Validation / Calibration / Cleanrooms</p>
        <h1>Pharma &amp; Cleanroom Solutions</h1>
        <p className="hero-description">
          Trusted validation, calibration, and cleanroom services for regulated
          environments.
        </p>
        <a className="hero-link" href="#services">
          Explore services
          <span className="hero-link-arrow" aria-hidden="true">
            -&gt;
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
