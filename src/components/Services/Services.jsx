import "./Services.css";
import services from "../../helpers/servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="services-title">
          <p className="services-eyebrow">What we do</p>
          <h2>Our Services</h2>
        </div>
        <p>Testing and validation for controlled environments.</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="bottom-text">Your Compliance Our Priority</div>
    </section>
  );
};

export default Services;
