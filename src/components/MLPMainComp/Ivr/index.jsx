import React from "react";
import "./style.scss";
import underline from "../../../images/csm/new-underline.png";
import call from '../../../images/common/ivr-phone-img.webp';
import email from '../../../images/common/ivr-email-img.webp';

const IvrSection = () => {
  return (
    <div className="ivr-section">
      <div className="help"> Have more questions? </div>
      <div className="new-underline">
        <img src={underline} loading="lazy" />
      </div>
      <div className="available">Available from 9 AM - 9 PM, Monday-Friday</div>
      <div className="ivr-body">
        <div className="call">
          <div className="title"><img src={call} className="ivricon-phone" />Call</div>
          <div className="desc mtop-1">+91 7827135490 </div>
        </div>
        <div className="email">
          <div className="title"><img src={email} className="ivricon-email" /> Email</div>
          <div className="desc"><a className="conatact-email" href="mailto:contact@kraftshala.com"><u>contact@kraftshala.com</u></a></div>
        </div>
      </div>
    </div>
  );
};

export default IvrSection;