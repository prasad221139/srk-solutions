import "./Clients.css";

const suppliedClients = [
  "Hetero Drug Ltd",
  "Hetero Labs Ltd",
  "Honour Labs Ltd",
  "Dasami Labs",
  "Hindys Labs",
  "Admiron Life Sciences",
  "Vannsh Life Sciences",
];

const clientLogos = {
  "Hetero Drug Ltd": "/images/heterologo.png",
  "Hetero Labs Ltd": "/images/heterologo.png",
  "Honour Labs Ltd": "/images/honourlogo.jpg",
  "Dasami Labs": "/images/dasamilogo.jpg",
  "Admiron Life Sciences": "/images/admironlogo.jpg",
  "Vannsh Life Sciences": "/images/vannshlogo.jpg",
};

const clients = suppliedClients.map((name, index) => ({
  id: String(index + 1).padStart(2, "0"),
  name,
  logo: clientLogos[name],
  initials: name
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase(),
}));

const Clients = () => {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="clients-heading">
        <div>
          <p className="clients-eyebrow">Our network</p>
          <h2 id="clients-title">Client Partners</h2>
        </div>
        <p className="clients-caption">
          Building reliable environments for pharma and life sciences.
        </p>
      </div>
      <div className="client-grid" role="list">
        {clients.map((client, index) => (
          <div
            className={`client-tile client-tone-${index % 4}`}
            key={client.id}
            role="listitem"
          >
            {client.logo ? (
              <img className="client-logo" src={client.logo} alt={`${client.name} logo`} />
            ) : (
              <span className="client-mark" aria-hidden="true">
                {client.initials}
              </span>
            )}
            <span className="client-name">{client.name}</span>
            <span className="client-index" aria-hidden="true">
              {client.id}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
