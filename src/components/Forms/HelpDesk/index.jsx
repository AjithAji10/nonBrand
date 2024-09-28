import { StaticImage } from "gatsby-plugin-image";
import React from "react";
 
function HelpDesk() {
  return (
    <div className="help-desk">
      <div className="help-head">
        <div className="right-line"></div>

        <div className="head-text">Help Desk</div>
        <div className="left-line"></div>
      </div>

      <div className="help-email">
        <div className="help-mail-icon">
          <StaticImage
            src="../../../../static/assets/social-icons/mail.png"
            alt="Mail"
          />
        </div>
        <div className="help-mail">
          If you have any questions, mail them to us at{" "}
          <a href="mailto:hi@kraftshala.com"> hi@kraftshala.com</a>
        </div>
      </div>
    </div>
  );
}

export default HelpDesk;
