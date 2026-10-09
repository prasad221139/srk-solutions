import { useRef, useState } from "react";
import company from "../../helpers/companyData";

const ServiceCard = ({ service }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const dialogRef = useRef(null);
  const image = service.image ?? `/images/service${service.id}.jpg`;
  const serviceNumber = String(service.id).padStart(2, "0");
  const detailItems = service.details ?? [service.desc];
  const titleId = `service-title-${service.id}`;
  const bookingHref = `mailto:${company.email}?subject=${encodeURIComponent(`Booking enquiry: ${service.title}`)}&body=${encodeURIComponent(`Hello SRK Solutions,\n\nI would like to book or enquire about ${service.title}.\n\nPlease contact me with the next steps.`)}`;

  const openDetails = () => dialogRef.current?.showModal();

  return (
    <article className="service-card">
      {!imageFailed ? (
        <img
          className="service-image"
          src={image}
          alt={service.title}
          onError={() => setImageFailed(true)}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="service-image-placeholder" aria-hidden="true">
          {serviceNumber}
        </div>
      )}
      <div className="service-content">
        <span className="service-number">Service {serviceNumber}</span>
        <h3>{service.title}</h3>
        {service.desc && <p>{service.desc}</p>}
        <button
          className="service-detail-trigger"
          type="button"
          onClick={openDetails}
        >
          View details <span aria-hidden="true">+</span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="service-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      >
        <div className="service-dialog-shell">
          <div className="service-dialog-heading">
            <span>Service / {serviceNumber}</span>
            <button
              className="service-dialog-close"
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close service details"
            >
              Close
            </button>
          </div>
          <h2 id={titleId}>{service.title}</h2>
          <div className="service-dialog-body">
            {!imageFailed && (
              <img
                src={image}
                alt={service.title}
                onError={() => setImageFailed(true)}
              />
            )}
            {imageFailed && (
              <div
                className="service-dialog-image-placeholder"
                aria-hidden="true"
              >
                {serviceNumber}
              </div>
            )}
            <div className="service-dialog-copy">
              <p>{service.desc}</p>
              <h3>Service details</h3>
              <ul>
                {detailItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="service-dialog-actions">
            <a
              className="service-dialog-action service-dialog-call"
              href={`tel:${company.phone}`}
            >
              <span className="service-action-copy">
                <span className="service-action-label">Call us</span>
                <strong>{company.phone}</strong>
              </span>
              <span className="service-action-arrow" aria-hidden="true">
                -&gt;
              </span>
            </a>
            <a
              className="service-dialog-action service-dialog-book"
              href={bookingHref}
            >
              <span className="service-action-copy">
                <span className="service-action-label">Ready to start?</span>
                <strong>Book this service</strong>
              </span>
              <span className="service-action-arrow" aria-hidden="true">
                -&gt;
              </span>
            </a>
          </div>
        </div>
      </dialog>
    </article>
  );
};

export default ServiceCard;
