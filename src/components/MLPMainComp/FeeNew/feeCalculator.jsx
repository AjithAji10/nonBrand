import React, { useState } from "react";
import "./styles.scss";

function Fee() {
  const [userSalary, setUserSalary] = useState("4.5");
  const [userInput, setUserInput] = useState("450000");
  const [payableFees, setPayableFees] = useState("₹1,24,000 + 18% GST");

  const goto = () => {
    const target = document.querySelector("#changemakers");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.click();
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    let calculatedSalary = (value / 100000).toString();

    // if (value < 450000) {
    //   setPayableFees("₹50,000 + GST");
    // } else if (value > 950000) {
    //   setPayableFees("2,50,000 + GST");
    // } else {
    //   let calculatedAmount =Math.ceil( 50000 + (value * (2 / 12)) ) ; // value/4 + 14000

    //   setPayableFees(calculatedAmount.toLocaleString("en-IN") + " + GST");
    // }

    if (value < 450000) setPayableFees("₹49,600 + 18% GST");
    else setPayableFees("₹1,24,000 + 18% GST");

    setUserInput(value);
    setUserSalary(calculatedSalary);
   
    const min = 300000;
    const max = 1500000;
    const range = max - min;
    const percentage = ((value - min) / range) * 100;

    const slider = document.querySelector('.input-slider');

    slider.style.background = `linear-gradient(90deg, #f1ae13 ${percentage}%, #EEE ${percentage}%)`;
  };

  return (
    <div className="csm-fees">
      <div className="fee-containers">
        <div className="fee-range-slider">
          <div className="fee-range-head">Here’s how the maths works:</div>

          <div className="fee-range-salary">
            If your salary is...
            <span className="salary-text"> ₹{userSalary} Lakhs/Year</span>
          </div>

          <div className="fee-range-input">
            <input
              className="input-slider"
              type="range"
              min="300000"
              max="1500000"
              step="50000"
              value={userInput}
              onChange={handleChange}
            />

            <div className="fee-range-number">
              <div className="number1">₹3,00,000</div>
              <div className="number2">₹15,00,000</div>
            </div>
          </div>

          <div className="fee-range-total">
            <b>Total Fees Payable:</b> <br className="pc-none"/> {payableFees}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fee;
