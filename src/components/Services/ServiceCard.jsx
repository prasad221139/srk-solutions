const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-number">{service.id}</div>

      <div className="service-content">
        <h3>{service.title}</h3>

        <p>{service.desc}</p>
      </div>

      {service.image}
    </div>
  );
};

export default ServiceCard;
