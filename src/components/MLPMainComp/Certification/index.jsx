import React from "react";
import "./styles.scss";
import certificateImg from '../../../images/mlp/certificate-img.webp';

const Certification = () => {
  return (
    <div className="certification-container" >
      <div className="certification-content" style={{paddingTop:'4em'}} id="certification">
        <div className="row">
          <div className="row-header">
            Know about Kraftshala’s<br/> Digital Marketing certification
          </div>
          <div className="row-description">
            INDUSTRYCreds™ by Kraftshala is the only digital marketing
            certification{" "}
            <span>that gets you ready to deliver from Day 1.</span>
            <br />
            <br />
            This is earned upon successful completion of The Marketing Launchpad
            program. This certification showcases your potential to recruiters
            in Digital Marketing and increases your chances to get hired!
            <br />
            <br />
            <span> The best part? </span>This is not going to be just a CV
            point. In our online digital marketing course,
            <span>
              {" "}
              you are trained for high potential roles of CTC 4.5-9L and placed in them!
            </span>
          </div>
        </div>
        <div className="row-img">
          <img loading="lazy" src={certificateImg} className="ks-certificate" alt="kraftshala_certificate" />
        </div>
      </div>
    </div>
  );
};

export default Certification;
