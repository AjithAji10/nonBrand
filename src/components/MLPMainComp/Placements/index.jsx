import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Companies } from "./Companies";
import "./styles.scss";

export const PlacementsMain = () => {
  return (
    <div className="recruiting-partner mlp-main">
      <div className="mlp-student-slider">
        <div className="slider-section-head-mlp">
          <div>
            Here are more details on the online digital marketing course
            placements
          </div>
        </div>
        <div className="slider-section-description">
          A placement process that has delivered excellent talent to the
          1000-crore brands as well as the starry eyed startups, the big daddy
          agencies as well as the upcoming ingenious ones. A process that has
          been fine tuned across years and delivered jobs for more than 1800
          students. You can see their stories on Youtube & Linkedin {":)"}
        </div>
        <div className="slider-section-head mtop-2">
          <h2 className="header-color">Your success = Our Placement Results</h2>
        </div>
        <div className="slider-section-description color-change">
          <span>All placements</span> in roles with <span>CTC ₹4.5-9 LPA</span>
          <br />
          Companies hiring across the different batches
          <div className="mobile-break"> thus far:</div>
        </div>
      </div>

      <div className="recruiter-img">
        <StaticImage
          src="../../../images/mlp/placements_mlp_desktop.webp"
          alt="Digital Marketing Recruiting Partners for The Marketing Launchpad"
          title="Recruiting partners"
          placeholder="none"
          className="mobile-hide"
        />
      </div>
      <div className="recruiter-img-mb">
        <Companies />
      </div>
      <div className="apply-btn-placement">
        <a
          href="https://www.kraftshala.com/marketing-launchpad/digital-marketing-course/"
          target="_blank"
          rel="noreferrer"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default PlacementsMain;
