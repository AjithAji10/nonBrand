import React from "react";
import "./styles.scss";

import timer from "../../../images/mlp-part-time/timer-img.webp";
import clock from "../../../images/mlp-part-time/clock-img.webp";
import calendar from "../../../images/mlp-part-time/calendar-img.webp";
import bag from "../../../images/mlp-part-time/bag-img.webp";
import programMobIcon from "../../../images/mlp-part-time/pgrmIconMob.png";

function ProgramBrief() {
  // const handleClick = () => {
  //   const element = document.getElementById("overview");

  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "nearest",
  //     });
  //   }
  // };

  return (
    <div className="overview-container-mlp">
      <div className="program-brief-into-section-desk mt-0">
        <div className="flex-item">
          <img className="item-img-mlp" src={timer} alt="Sand glass timer" />
          <div className="item-header">Course Duration</div>
          <div className="item-desc">16 weeks</div>
        </div>
        <div className="vertical-divider-mlp"/>
        <div className="flex-item">
          <img className="item-img-mlp" src={clock} alt="Clock" />
          <div className="item-header">Timing</div>
          <div className="item-desc">Weekdays 10 AM - 8 PM</div>
        </div>
        <div className="vertical-divider-mlp"/>
        <div className="flex-item">
          <img className="item-img-mlp" src={calendar} alt="Calendar" />
          <div className="item-header">Batch Starts</div>
          <div className="item-desc">Oct 01, 2024</div>
        </div>
        <div className="vertical-divider-mlp"/>
        <div className="flex-item">
          <img className="item-img-mlp" src={bag} alt="Bag" />
          <div className="item-header">Program Outcomes</div>
          <div className="item-desc" style={{marginTop: "-0.5rem"}}>
          ₹4.5 - 9.2L Jobs +  <br/>
            <b>INDUSTRY</b>Creds<sup>TM</sup> Certification
          </div>
        </div>
      </div>
      <div className="program-brief-into-section-mob ">
        <div className="flex-item">
          <img className="item-img-mlp" src={timer} alt="Sand glass timer" />
          <div className="item-header">Course Duration</div>
          <div className="item-desc">16 weeks</div>
        </div>
        <div className="flex-item">
          <img className="item-img-mlp" src={calendar} alt="Calendar" />
          <div className="item-header">Batch Starts</div>
          <div className="item-desc">Oct 01, 2024</div>
        </div>
        <div className="horizontal-divider" />
        <div className="flex-item">
          <img className="item-img-mlp" src={programMobIcon} alt="Bag" />
          <div className="item-header">Program Outcomes</div>
          <div className="item-desc">
          ₹4.5 - 9L Jobs + <br/>
            Certification
          </div>
        </div>
        <div className="flex-item">
          <img className="item-img-mlp" src={clock} alt="Clock" />
          <div className="item-header">Timing</div>
          <div className="item-desc">Weekdays -<br/> 10 AM - 8 PM</div>
        </div>
      </div>
    </div>
  );
}

export default ProgramBrief;
