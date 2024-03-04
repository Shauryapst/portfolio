import "./Certificates.css";
import React from "react";
import certificateList from "./certificate";
import CertificateCard from "../../component/CertificateCard/CertificateCard";

const Certificates = () => {
  return (
    <div className="certificate-container">
      <div className="certificate-wrapper">
        {certificateList.map((certificate) => {
          return (
            <CertificateCard
              title={certificate.title}
              imgUrl={certificate.imgUrl}
              driveUrl={certificate.driveUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
