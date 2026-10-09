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
    <section className="why">
      <h2>Why Choose SRK Solutions?</h2>

      <div className="why-grid">
        {items.map((item) => (
          <div key={item} className="why-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
