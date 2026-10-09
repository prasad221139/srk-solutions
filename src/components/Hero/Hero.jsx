import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="logo-section">
        /images/logo.png
        <p>Precision | Compliance | Excellence</p>
      </div>
      <div className="hero-text">
        <h3>Your Trusted Partner for</h3>

        <h1>
          Pharma & Cleanroom
          <br />
          Solutions
        </h1>

        <div className="hero-features">
          <span>Reliable Services</span>
          <span>Accurate Results</span>
          <span>Total Compliance</span>
        </div>
      </div>
      /images/hero.jpg
      <div className="bottom-features">
        <div>
          <h4>Quality Focused Services</h4>
        </div>

        <div>
          <h4>Experienced Team</h4>
        </div>

        <div>
          <h4>Timely Support</h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
