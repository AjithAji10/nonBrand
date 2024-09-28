import React from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import HigestCtc from "../../../images/Bilingual/icons/ectc.png";
import avgCtc from "../../../images/Bilingual/icons/actc.png";
import caseIcon from "../../../images/landingPageImages/suiticon.png";
import TeamIcon from "../../../images/landingPageImages/teamicon.png";
import Card2Img1 from "../../../images/landingPageImages/placemntc2img1.webp";
import Card2Img2 from "../../../images/landingPageImages/placemntc2img2.webp";
import Card2Img3 from "../../../images/landingPageImages/placemntc2img3.webp";
import Card3Img from "../../../images/landingPageImages/placemntc3.webp";
import pin1 from "../../../images/landingPageImages/pin1.png";
import pin2 from "../../../images/landingPageImages/pin2.png";
import pin3 from "../../../images/landingPageImages/pin3.png";

const Index = () => {
  return (
    <div className="lp-placements">
      <div className="lp-p-sub-head">Digital Marketing Placements</div>
      <div className="l-p-head">
        Why is Marketing Launchpad considered the <br className="mobile-none"/>
        Best <br className="pc-none"/>Digital Marketing Course <br className="pc-none"/>with Placements?
      </div>
      <img src={underline} className="lp-p-underline" alt="" />

      <div className="lp-p-flex">
        <div className="lp-p-card">
          <img src={pin1} alt="" className="lp-pin1" />
          <div className="lp-p-card-head mb-1">
            100% of Placements of <br className="pc-none"/>₹4.5L or more
          </div>
          <div className="lp-p-card-det">
            <div className="lp-p-card-det-content">
              <div className="lp-det-img-flex">
                <img src={HigestCtc} className="card-det-icon" alt="" />
                <div className="card-det-head">9.2 LPA</div>
              </div>
              <div className="card-det-desc">Highest Package</div>
            </div>
            <div className="lp-p-card-det-content">
              <div className="lp-det-img-flex">
                <img src={avgCtc} className="avg-card-det-icon" alt="" />
                <div className="card-det-head">4.9 LPA</div>
              </div>
              <div className="card-det-desc">Average Package</div>
            </div>
          </div>
          <div className="lp-p-card-det">
            <div className="lp-p-card-det-content">
              <div className="lp-det-img-flex">
                <img src={caseIcon} className="card-det-icon" alt="" />
                <div className="card-det-head">94%</div>
              </div>
              <div className="card-det-desc">Placement Rate</div>
            </div>
            <div className="lp-p-card-det-content">
              <div className="lp-det-img-flex">
                <img src={TeamIcon} className="card-det-icon icon-wide" alt="" />
                <div className="card-det-head">400+</div>
              </div>
              <div className="card-det-desc">Hiring Partners</div>
            </div>
          </div>
          <div className="lp-p-disc">Placement numbers as per Aug 2024</div>
        </div>
        <div className="lp-p-card lp-p-card-2">
          <img src={pin2} alt="" className="lp-pin2" />
          <div className="lp-p-card-head">
            Our Alumni work with <br/>
            agencies & brands like:
          </div>
          <div className="lp-p-card-img">
            <img src={Card2Img1} className="lp-det-img" alt="" />
            <img src={Card2Img2} className="lp-det-img" alt="" />
            <img src={Card2Img3} className="lp-det-img" alt="" />
          </div>
           
        </div>
        <div className="lp-p-card lp-p-card-2">
          <img src={pin3} alt="" className="lp-pin3" />
          <div className="lp-p-card-head">
            100% publicly published <br/>Placement Reports since 2021
          </div>
          <img src={Card3Img} className="lp-det-img-2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
