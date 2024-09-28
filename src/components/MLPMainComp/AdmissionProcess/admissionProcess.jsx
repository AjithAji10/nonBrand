import React from "react";
import { Link } from "gatsby";

import "./styles.scss";

function AdmissionProcess(props) {
  const handleBtnClick = () => {
    const element = document.getElementById("mlp_apply_form");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="mlp-main-admission">
      <div className="admission-container">
        <div>
          <h2 className="admission-section-title">Admissions Process</h2>
        </div>

        <div className="admission-section-subtitle">
          The programs help you graduate with a job and not just a certificate. 
          Thus, the screening process is a mandatory step to ensure we enroll folks who can derive value from the program.
          <br />
          Here's a quick overview:
        </div>

        <div className="admission-timline">
          <div className="admssion-vl"></div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 1: Apply to Kraftshala
              </h3>
            </div>

            <div className="admission-description">
              Fill up the application form and get your process started. 
              <Link to={`/marketing-launchpad/digital-marketing-course/${props.urlParams}`}>
                <div className="admission-section-btn" onClick={handleBtnClick}>
                  Apply Now
                </div>
              </Link>
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 2: Take the Screening Test and Talk to Us
              </h3>
            </div>

            <div className="admission-description">
              <i>60 mins and 3 attempts</i> - Take the screening test that evaluates you on your decision making. 
              It helps us understand your candidature and recommend the best course for you.<br/> 
              If you give the first attempt within 3 days, you will also be evaluated for the scholarship of ₹30,000.<br/> <br/>

              To get more clarity on our digital marketing courses and their placements, speak to the Admission Team at this stage to get your doubts clarified.
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 3: Enroll and start your journey to get a marketing job of 4.5L or more
              </h3>
            </div>

            <div className="admission-description">
              Within 3-4 working days, you will get your results. 
              And if accepted, you can complete the payment formalities and enroll and start your journey towards a fantastic career!
              <div className="special-text">Welcome to the ride!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionProcess;
