import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import HelpDesk from "../../HelpDesk";

function InEligible() {
  return (
    <div className="inEligible-container">
      <div className="inEligible-text">
        Thank you for your interest in The Marketing Launchpad Program
      </div>

      <div className="process-text">
        However, we can't process your application. We are only accepting
        candidates who have completed their education and are eligible to join
        full time roles immediately after the program.
      </div>

      <hr className="process-divider" />

      <div className="instagram-text">
        Do follow us on Instagram to stay updated about the upcoming batches and
        insightful marketing concepts.
      </div>

      <div className="kraft-insta-link">
        <a
          href="https://www.instagram.com/kraftshala/"
          target="_blank"
          rel="noreferrer"
        >
          {/* <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/kraft-insta.png"
            alt="Kraftshala Instagram"
            placeholder="none"
          /> */}
        </a>
      </div>

      <HelpDesk />
    </div>
  );
}

export default InEligible;
