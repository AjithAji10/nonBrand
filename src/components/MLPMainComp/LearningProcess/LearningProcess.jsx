import React from "react";

import "./styles.scss";

function LearningProcess(props) {
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
    <div className="mlp-main-learning">
      <div className="learning-container">
        <h2 className="learning-section-title">
          Here’s how you’ll be learning Digital Marketing and getting placed in
          roles of ₹4.5L or more
        </h2>

        <div className="learning-section-subtitle">
          While we offer two specializations - Digital Media Marketing and
          Content & Social Media, the route for excelling and getting placed is
          the same for both.
        </div>

        <div className="learning-section-subtitle-large">
          This will be your digital marketing course duration:
        </div>

        <div className="learning-timline">
          <div className="admssion-vl"></div>

          <div className="learning-section">
            <div className="learning-title">
              <div className="learning-deco"></div>

              <h3 className="learning-title-text">
                0-16 Weeks: Functional Training
              </h3>
            </div>

            <div className="learning-description">
            Here is our training methodology
              <ul>
                <li>
                  <span className="span-bold">70% </span> learning through
                  hands-on projects, typically in groups
                </li>
                <li>
                  <span className="span-bold">20%</span> learning through
                  mentorship and coaching from expert practitioners
                </li>
                <li>
                  <span className="span-bold">10% </span> learning through
                  online lectures on digital marketing examples, frameworks &
                  concepts from top marketing and business leaders
                </li>
              </ul>
            </div>
          </div>

          <div className="learning-section">
            <div className="learning-title">
              <div className="learning-deco"></div>

              <h3 className="learning-title-text">
                0-16 Weeks: Human Skills Training
              </h3>
            </div>

            <div className="learning-description">
              Having worked with 1,000’s of students we know that functional
              knowledge can land you the job, but behavioral skills will make
              your career. This is thus, a core aspect of your digital marketing
              training.
            </div>
          </div>

          <div className="learning-section">
            <div className="learning-title">
              <div className="learning-deco"></div>

              <h3 className="learning-title-text">
                Placement Drive & Internships
              </h3>
            </div>

            <div className="learning-description">
              {/* You will start sitting for placement opportunities after
              successfully completing training. During this period, you might
              also be attending additional refresher sessions / projects /
              assessments to get better prepared to ace your interviews and
              jobs. <br /> <br /> Approx. half of our students obtain a
              full-time job offer immediately after training, while another half
              first join as interns and then convert that into a full time job
              offer. Placement drives can take longer to finish for students who
              are struggling to reach the requisite skill level, but more than
              94% students thus far have cracked a job offer of ₹4.5L or more. */}
               You will start sitting for job opportunities that are floated as part of the placement drive.
              The majority of the placements are placed within 6-8 weeks of moving to placements.
            </div>
          </div>

          <div className="learning-section">
            <div className="learning-title">
              <div className="learning-deco"></div>

              <h3 className="learning-title-text">Final placements</h3>
            </div>

            <div className="learning-description">
              <b>Full-time Marketing job offers with a CTC of ₹4.5 - 9.2L. If your job &lt; 4.5L, you get a 60% refund!</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningProcess;
