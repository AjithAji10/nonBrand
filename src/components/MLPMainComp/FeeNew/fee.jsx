import React,{ useRef } from "react";
import "./styles.scss";
import FeeCalculator from "./feeCalculator";
import feeRibbon from "../../../images/csm/feesRibbon.png";
import handIcon from "../../../images/csm/handimg.png";
import EMITable from "./EMITable";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Fee() {
  const emiDialogRef = useRef(null);

  const handleEMIDialog = () => {
    if (emiDialogRef.current) {
      emiDialogRef.current.showModal();
    }
  };

  const handleDialogClose = () => {
    if (emiDialogRef.current) {
      emiDialogRef.current.close();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === emiDialogRef.current) {
      handleDialogClose();
    }
  };

  return (
    <div className="csm-main-fee">
      <div className="mlp-fee-header">
        <div className="main-header">
             Online Digital Marketing Course Fees
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
    
      <div className="fees">
        <div className="fee-container">
          <div className="sub-head">Enroll with super affordable </div>

          <div className="emi-starting emi-option">
            <button
              className="emi-toggle-btn"
              onClick={() => handleEMIDialog()}
            >
              EMI starting ₹7,438/month <KeyboardArrowDownIcon />
            </button>
          </div>
          <div className="fee-sub-title">
          Scholarship of ₹30,000 will be awarded to the top 5% of applicants
          </div>
          <div className="ribbontext">
            <div className="flex">
              <img className="ribbonImg" src={handIcon} loading="lazy" />
              <div className="ribbon-body">
                <div className="title">
                  Krafshala’s Placement Accountability Pledge
                </div>
                <div className="desc">
                  If your job pays {"<"} 4.5L,<br className="pc-hide"/> you get a 60% fee refund
                </div>
              </div>
            </div>
          </div>
          <img className="ribbon-mlp" src={feeRibbon} loading="lazy" />
          <FeeCalculator />
        </div>
      </div>
      <dialog id="csm-emi-dialog" ref={emiDialogRef} onClick={handleOverlayClick}>
        <div className="dialog-header">
          <h3>EMI Plans</h3>
          <button className="dialog-toggle-btn" onClick={handleDialogClose}> ✕ </button>
        </div>
        <div className="mlp-dialog-content">
          <EMITable />
        </div>
      </dialog>
    </div>
  );
}

export default Fee;
