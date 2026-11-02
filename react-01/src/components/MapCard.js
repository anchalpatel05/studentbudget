import './MapCard.css';

function MapCard({ title, address }) {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="map-card">
      <h3>{title}</h3>
      <p>{address}</p>
      <iframe src={mapUrl} title={`Map of the ${title}`} loading="lazy"></iframe>
    </div>
  );
}

export default MapCard;
