import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import csmmDesk from "../../../images/mlp/csmm-trajectory-desk.png";
import dmmDesk from "../../../images/mlp/dmm-trajectory-desk.png";
import csmmMob from "../../../images/mlp/csmm-trajectory-mob.png";
import dmmMob from "../../../images/mlp/dmm-trajectory-mob.png";
import cross from "../../../images/common/cross-dark.png";
import "./styles.scss";

function Specialisations(props) {
  const [viewModal, showViewModal] = useState(false);
  const [viewSrc, setViewSrc] = useState("");
  const [viewAlt, setViewAlt] = useState("");
  const [tabSelected, setTabSelected] = useState("1");

  const showViewHereModal = (src, alt) => {
    setViewSrc(src);
    setViewAlt(alt);
    showViewModal(true);
  };

  const hideViewHereModal = () => {
    showViewModal(false);
  };

  return (
    <div className="mlp-main-specialisation">
      <div className="specialisation-container">
        <div>
          <h2 className="specialisation-section-title">Our Specialisations</h2>

          <span>
            <StaticImage
              src="../../../images/common/yellow-underline.webp"
              alt="title underlines"
              placeholder="none"
            />
          </span>
        </div>

        <div className="mobile-hide">
          <div className="spec-content">
            <div className="spec-card">
              <div className="spec-card-head">
                <div className="spec-card-icon">
                  <StaticImage
                    src="../../../images/common/dmm-icon.png"
                    alt="Digital Media Marketing"
                    style={{
                      maxWidth: "35px"
                    }}
                  />
                </div>
                <div className="spec-card-title">
                  <h3>Digital Media Marketing</h3>
                </div>
              </div>
              <div className="spec-card-body">
                <div className="spec-card-body-content">
                  <div className="spec-card-body-desc">
                    Excel in paid media platforms and tools widely used by
                    marketers around the world. Master the principles of SEO to
                    build brands and drive sales.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">
                    So, what will I learn?
                  </div>
                  <div className="spec-card-body-desc px-2">
                    Designing Integrated Digital Marketing Campaigns with
                    Facebook ads, Google ads, Google Analytics, SEO, E-commerce,
                    and more.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">Is this for me?</div>
                  <div className="spec-card-body-desc">
                    Yes, if you are interested in marketing and have decent
                    quant and logical ability.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">
                    What could my career trajectory look like?
                  </div>

                  <div
                    className="spec-card-body-click"
                    onClick={() =>
                      showViewHereModal(
                        dmmDesk,
                        "Digital Media and Marketing Career Trajectories"
                      )
                    }
                    aria-hidden="true"
                  >
                    View here
                  </div>
                </div>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-card-head">
                <div className="spec-card-icon">
                  <StaticImage
                    src="../../../images/common/csmm-icon.png"
                    alt="Content & Social Media Marketing"
                    style={{
                      maxWidth: "35px"
                    }}
                  />
                </div>
                <div className="spec-card-title">
                  <h3> Content & Social Media Marketing</h3>
                </div>
              </div>
              <div className="spec-card-body">
                <div className="spec-card-body-content">
                  <div className="spec-card-body-desc">
                    Master how to write creatively, create stellar content,
                    handle a buzzing social media account and create fabulous
                    influencer marketing plans.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">
                    So, what will I learn?
                  </div>
                  <div className="spec-card-body-desc">
                    Building Content & Influencer Marketing
                    <br /> campaigns that span across various digital media
                    <br /> platforms and more.
                  </div>
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">Is this for me?</div>
                  <div className="spec-card-body-desc desktop-hide">
                    Yes, if you have good writing skills and an interest in
                    marketing.
                  </div>
                  <div className="spec-card-body-desc mobile-hide">
                    Yes, if you have good writing skills and an interest in
                    <br />
                    marketing.
                  </div>

                  {/* <div className="spec-card-body-desc-desktop-content">
                    Apply to the &nbsp;
                    <a
                      href="/content-writing-course/"
                      target="_blank"
                      rel="noreferrer"
                      className="spec-card-body-desc-content"
                    >
                      Content & Social Media Copywriting course
                    </a>{" "}
                  </div> */}
                  <div className="spec-card-body-line"></div>
                </div>

                <div className="spec-card-body-content">
                  <div className="spec-card-body-subtitle">
                    What could my career trajectory look like?
                  </div>

                  <div
                    className="spec-card-body-click"
                    onClick={() =>
                      showViewHereModal(
                        csmmDesk,
                        "Content and Social Media Marketing Career Trajectories"
                      )
                    }
                    aria-hidden="true"
                  >
                    View here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop-hide">
          <div className="spec-tab-head">
            <div
              className={
                tabSelected === "1"
                  ? "spec-tab-head-name active-tab"
                  : "spec-tab-head-name"
              }
              onClick={() => setTabSelected("1")}
              aria-hidden="true"
            >
              Digital Media Marketing
            </div>
            <div
              className={
                tabSelected === "2"
                  ? "spec-tab-head-name active-tab"
                  : "spec-tab-head-name"
              }
              onClick={() => setTabSelected("2")}
              aria-hidden="true"
            >
              Content & Social Media Marketing
            </div>
          </div>
        </div>
        <div className="desktop-hide">
          <div className="spec-content">
            {tabSelected === "1" && (
              <div className="spec-card">
                <div className="spec-card-body">
                  <div className="spec-card-body-content">
                    <div className="spec-card-body-desc">
                      Excel in paid media platforms and tools widely used by
                      marketers around the world. Master the principles of SEO
                      to build brands and drive sales.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      So, what will I learn?
                    </div>
                    <div className="spec-card-body-desc">
                      Designing Integrated Digital Marketing Campaigns with
                      Facebook ads, Google ads, Google Analytics, SEO and more.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      Is this for me?
                    </div>
                    <div className="spec-card-body-desc">
                      Yes, if you are interested in marketing and have decent
                      quant and logical ability.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      What could my career trajectory look like?
                    </div>

                    <div
                      className="spec-card-body-click"
                      onClick={() =>
                        showViewHereModal(
                          dmmMob,
                          "Digital Media and Marketing Career Trajectories"
                        )
                      }
                      aria-hidden="true"
                    >
                      View here
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tabSelected === "2" && (
              <div className="spec-card">
                <div className="spec-card-body">
                  <div className="spec-card-body-content">
                    <div className="spec-card-body-desc">
                      Master how to write creatively, create stellar content,
                      handle a buzzing social media account and create fabulous
                      influencer marketing plans.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      So, what will I learn?
                    </div>
                    <div className="spec-card-body-desc">
                      Building Content & Influencer Marketing campaigns that
                      span across various digital media platforms and more. etc.
                    </div>
                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      Is this for me?
                    </div>
                    <div className="spec-card-body-desc">
                      Yes, if you have good writing skills and an interest in
                      marketing.
                    </div>
                    {/* <div className="spec-card-body-desc-desktop-content">
                      Apply to the &nbsp;
                      <a
                        href="/content-writing-course/"
                        target="_blank"
                        rel="noreferrer"
                        className="spec-card-body-desc-content"
                      >
                        Content & Social Media Copywriting course
                      </a>{" "}
                    </div> */}

                    <div className="spec-card-body-line"></div>
                  </div>

                  <div className="spec-card-body-content">
                    <div className="spec-card-body-subtitle">
                      What could my career trajectory look like?
                    </div>
                    <div
                      className="spec-card-body-click"
                      onClick={() =>
                        showViewHereModal(
                          csmmMob,
                          "Content and Social Media Marketing Career Trajectories"
                        )
                      }
                      aria-hidden="true"
                    >
                      View here
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {viewModal ? (
        <React.Fragment>
          <div
            className="spec-mask spec-active"
            onClick={hideViewHereModal}
            aria-hidden="true"
          ></div>
          <div className="spec-modal">
            <img className="spec-modal-img" src={viewSrc} alt={viewAlt} />
            <img
              src={cross}
              alt="cross icon"
              className="spec-modal-cross"
              onClick={hideViewHereModal}
              aria-hidden="true"
            />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default Specialisations;
