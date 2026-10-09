import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const items = [
    "Quality Focused Services",
    "Experienced Team",
    "Timely Support",
    "Regulatory Compliance",
    "Customer Satisfaction",
    "Advanced Instruments",
  ];

  return (
    <section className="why" id="why-us">
      <p className="why-eyebrow">Our approach</p>
      <h2>Why Choose SRK Solutions?</h2>

      <div className="why-grid">
        {items.map((item, index) => (
          <div key={item} className="why-item">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
