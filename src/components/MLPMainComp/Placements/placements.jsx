import React from "react";

import "./styles.scss";

function Placements() {

  return (
    <React.Fragment>
     
      <div className="should-apply-mlp ">
        <div className="apply-container-mlp">
          <h2 className="should-apply-header">Who Should Apply?</h2>

          <div className="vl"></div>
          <h3 className="should-description">
            <div className="should-apply-sub-header">
          Online Digital Marketing Course Eligibility:
            </div>
            <div className="should-apply-description">
              <ol>
                <li>Intent to build a career in Digital Marketing</li>
                <li>Available for a full-time course (no job/course alongside)</li>
                <li>Ready to take a job immediately after course completion</li>
                <li>No prior experience required</li>
              </ol>
            </div>
          </h3>

        </div>
      </div>
    </React.Fragment>
  );
}

export default Placements;
