import "./Services.css";
import services from "../../helpers/servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">Our Services</div>

      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}

      <div className="bottom-text">Your Compliance Our Priority</div>
    </section>
  );
};

export default Services;
