import "./Contact.css";
import company from "../../helpers/companyData";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <p className="contact-eyebrow">Talk to our team</p>
      <h2>Start a conversation</h2>
      <a className="contact-phone" href={`tel:${company.phone}`}>
        {company.phone}
      </a>
      <a className="contact-email" href={`mailto:${company.email}`}>
        {company.email}
      </a>

      <div className="address">
        <h3>Our Address</h3>
        <p>{company.address}</p>
      </div>
    </section>
  );
};

export default Contact;
