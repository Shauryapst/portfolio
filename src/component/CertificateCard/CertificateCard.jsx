import React from "react";
import "./CertificateCard.css";
const CertificateCard = (props) => {
  return (
 
      <div className="certifcate-card-wrapper">
        <div className="certifcate-card-img">
          <img src={props.imgUrl} alt="demo" />
        </div>
        <div className="certifcate-card-content">
          <div className="certifcate-card-title">{props.title}</div>
        </div>
      </div>

  );
};

export default CertificateCard;
