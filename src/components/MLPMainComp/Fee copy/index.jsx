import React from "react";
import ScholarshipLogo from "../../BuisnessSalesLeadership/Assets/scholorship_logo.png";

import "./styles.scss";
import EMITable from "./EMITable";

const Fee = () => {

  const handleEMIDialog = () => {
    const emiDialog = document.querySelector("#mlp-emi-dialog");

    if(emiDialog) {
      emiDialog.showModal();
    }
  };

  const handleDialogClose = () => {
    const emiDialog = document.querySelector("#mlp-emi-dialog");

    if(emiDialog) {
      emiDialog.close();
    }
  };

  return (
    <>
      <div className="mlp-fee-main">
        <div className="mlp-fee-header">
          <div className="main-header">
            How much does it cost? - Online Digital Marketing Course Fees
          </div>
          <p className="mlp-sub-header">
            {`We believe in making education performance-driven. Hence, it is a job-linked digital marketing course.`} <br/>
            {`If your job < 4.5L, you get a 60% refund!`}
          </p>
          <div className="more-info">
                        This puts us on the same team as our students.<br />
                        The better you do, the better we do.
          </div>
        </div>
        <div className="mlp-fee-structure">
          <div className="mlp-fee-info">
            <div className="payment-type">
                            UPFRONT PAYMENT
            </div>
            <div className="payment-amount">
              <span className="crossed-out">
                                ₹1,50,000
              </span>
              <div className="payable-amount">
                <span className="bolded-lg">₹1,12,000</span> + 18% GST
              </div>
              <p className="disclaimer">
                And if you don't get placed at ₹4.5L+ within 15 months of program completion, 
                we refund 60% of your fee back.
              </p>
            </div>
            <div className="emi-option">
              <button className="emi-toggle-btn" onClick={() => handleEMIDialog()}>
                EMIs starting ₹4,993/month
              </button>
            </div>
          </div>
          <div className="mlp-fee-footer">
            <img
              style={{width: "20px"}}
              src={ScholarshipLogo}
              loading="lazy"
              width={"20px"}
            />{" "}
            <b style={{color: "#404040"}}>Kraftshala Changemakers’ Scholarship of 30% </b> <br/>
            available for top 5% folks based on performance in your first attempt of the Screening Test
          </div>
          <div className="mlp-fee-footer-mb">
            <img
              style={{width: "21px"}}
              src={ScholarshipLogo}
              loading="lazy"
              width={"21px"}
            />{" "}
            <span className="scholarship-desc">
              <b style={{color: "#404040"}}>Kraftshala Changemakers’ Scholarship of 30% available</b> <br/>
              for top 5% folks based on performance in your first attempt of the Screening Test
            </span>
          </div>
        </div>
        <dialog id="mlp-emi-dialog">
          <div className="dialog-header">
            <h3>EMI Plans</h3>
            <button className="dialog-toggle-btn" onClick={handleDialogClose}> ✕ </button>
          </div>
          <div className="mlp-dialog-content">
            <EMITable />
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Fee;