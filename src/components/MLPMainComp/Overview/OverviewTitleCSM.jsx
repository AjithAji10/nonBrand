import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function OverviewTitle() {
  return (
    <div className="about-mlp overviewTitle-container" id="overview">
      <div className="about-mlp-overviewTitle">
        <p>
          We select, train, and invest in high-potential graduates to help them
          kickstart their
          <span className="black-bold-xl">
            {" "}
            content writing and social media marketing careers.
          </span>{" "}
          The best part?
          <br /> You only pay if you land a job with a minimum CTC of ₹4.5
          lakhs.
        </p>
        <StaticImage src='../../../images/mlp/yellow-underline.webp' alt="underline" className="y-underline" />

      </div>

      <div className="mlp-video-container">
        <div className="mlp-video-flex">
          <iframe
            src="https://www.youtube.com/embed/QgDxj-1wqDo"
            title="How do students get 4.5-9LPA jobs via the Marketing Launchpad? | Kraftshala"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <div
          className="mlp-video-icon-wrap"
          onClick={showModalHandler}
          aria-hidden="true"
        >
          <div className="mlp-video-icon-bg-light">
            <div className="mlp-video-icon-bg-dark">
              <img
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/resumeMobIcon.svg"
                alt="video icon"
              />
            </div>
          </div>
        </div>
        <div
          className="mlp-video-text"
          onClick={showModalHandler}
          aria-hidden="true"
        >
          <div className="mlp-video-heading">Watch</div>
          <div className="mlp-video-subheading">How the program works</div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
