import "./WhyChooseUs.css";
import {
  FiAward,
  FiClock,
  FiCrosshair,
  FiHeart,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const WhyChooseUs = () => {
  const items = [
    { label: "Quality Focused Services", icon: FiAward },
    { label: "Experienced Team", icon: FiUsers },
    { label: "Timely Support", icon: FiClock },
    { label: "Regulatory Compliance", icon: FiShield },
    { label: "Customer Satisfaction", icon: FiHeart },
    { label: "Advanced Instruments", icon: FiCrosshair },
  ];

  return (
    <section className="why" id="why-us">
      <p className="why-eyebrow">Our approach</p>
      <h2>Why Choose SRK Solutions?</h2>

      <div className="why-grid">
        {items.map(({ label, icon: Icon }) => (
          <div key={label} className="why-item">
            <span className="why-icon" aria-hidden="true">
              <Icon />
            </span>
            <h3>{label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
