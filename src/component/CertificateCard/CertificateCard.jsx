import React from 'react';
import './CertificateCard.css';

const CertificateCard = (props) => {
  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <div className="certificate-card-container">
      <div className="certificate-hero-image-container" onClick={e => handleClick(e, props.driveUrl)}>
        <img className="certificate-hero-image" src={props.imgUrl} alt="Certificate" />
      </div>
      <div className="certificate-main-content">
        <p className="certificate-paragraph">{props.title}</p>
      </div>
    </div>
  );
}

export default CertificateCard;
