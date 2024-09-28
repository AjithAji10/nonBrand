import React, { useRef, useState,useEffect } from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import cardImg1 from "../../../images/landingPageImages/cardImg1.webp";
import cardImg2 from "../../../images/landingPageImages/cardImg2.webp";
import cardImg3 from "../../../images/landingPageImages/cardImg3.webp";
import bullet1 from "../../../images/landingPageImages/bullets1.png";
import bullet2 from "../../../images/landingPageImages/bullets2.png";
import bullet3 from "../../../images/landingPageImages/bullets3.png";
import bulletMob from "../../../images/landingPageImages/bulletsMob3.png";
import compImage1 from "../../../images/landingPageImages/cardComp1.png";
import compImage2 from "../../../images/landingPageImages/cardComp2.png";
import compImage3 from "../../../images/landingPageImages/cardComp3.png";

const Index = () => {
  const [card, setCard] = useState(0);
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(1); // Default to first card

  const handlePrev = () => {
    const container = containerRef.current;
    const cardWidth = container.scrollWidth / 3; // Assuming 3 cards

    if (card === 0) {
      container.scrollBy({ left: cardWidth * 2, behavior: "smooth" });
      setCard((prev) => prev + 2);
    } else {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      setCard((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    const container = containerRef.current;
    const cardWidth = container.scrollWidth / 3; // Assuming 3 cards

    if (card === 2) {
      container.scrollBy({ left: -cardWidth * 2, behavior: "smooth" });
      setCard(0);
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
      setCard((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);

            console.log(cardId);
            setActiveCard(cardId); // Update active card based on the card in view
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed for sensitivity
    );

    const cards = document.querySelectorAll(".lp-project-card");

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lp-project">
      <div className="lp-project-hero">
        <div className="lp-p-sub-head">
          Digital Marketing Courses that includes
        </div>
        <div className="l-p-head">
          Google, Meta, SEO and <br className="pc-none" /> Ecommerce LIVE
          Projects
        </div>
        <img src={underline} className="lp-p-underline" alt="" />
      </div>
      <div className="lp-project-card-container" ref={containerRef}>
        <div className="lp-card-max">
          <div className="lp-project-card"  data-card-id="1">
            <div className="lp-p-flex-main">
              <div className="lp-p-block-text">
                <div className="lp-p-card-head">
                  1. Run actual ads on Meta <br className="pc-hide" />& Google
                </div>
                <div className="lp-p-card-desc">
                  <span className="lp-p-card-ylo">Brand Brief:</span> Drive
                  Sales for a student run brand, Unleavables{" "}
                  <br className="pc-none" />
                  <br className="pc-none" />
                  This live project includes:
                </div>
                <div className="lp-p-desc-ui">
                  <img src={bullet1} className="lp-p-img" />
                  <div className="lp-p-li">
                    <div className="lp-p-li-item">Understanding the Brand</div>
                    <div className="lp-p-li-item">
                      Audience Segmentation and Targeting
                    </div>
                    <div className="lp-p-li-item">Creating Ads</div>
                    <div className="lp-p-li-item">Preparing the Media Plan</div>
                    <div className="lp-p-li-item">
                      {" "}
                      Running and optimizing ads
                    </div>
                    <div className="lp-p-li-item">Evaluating Performance</div>
                  </div>
                </div>
              </div>

              <div className="lp-p-block">
                <img src={cardImg1} className="lp-p-card-img" loading="lazy" />
                <img
                  src={compImage1}
                  className="lp-p-card-company-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lp-card-max">
          <div className="lp-project-card"  data-card-id="2">
            <div className="lp-p-flex-main">
              <div className="lp-p-block-text">
                <div className="lp-p-card-head">
                  2. Drive Sales for Actual Brands
                </div>
                <div className="lp-p-card-desc">
                  <span className="lp-p-card-ylo">Brand Brief:</span> Our
                  students get to drive actual sales for partner brands,
                  allowing them to implement their learnings in E-Commerce.{" "}
                  <br className="pc-none" />
                  <br className="pc-none" />
                  This live project includes:
                </div>
                <div className="lp-p-desc-ui">
                  <img src={bullet2} className="lp-p-img-2" />
                  <div className="lp-p-li-2">
                    <div className="lp-p-li-item">Understanding the Brand</div>
                    <div className="lp-p-li-item">Creating a Strategy</div>
                    <div className="lp-p-li-item">Preparing Media Plan</div>
                    <div className="lp-p-li-item">
                      Running and optimizing campaign
                    </div>
                    <div className="lp-p-li-item"> Evaluating Performance</div>
                  </div>
                </div>
              </div>

              <div className="lp-p-block">
                <img
                  src={cardImg2}
                  className="lp-p-card-img lp-p-card-img-2"
                  loading="lazy"
                />
                <img
                  src={compImage2}
                  className="lp-p-card-company-img mtop-m1"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lp-card-max">
          <div className="lp-project-card"  data-card-id="3">
            <div className="lp-p-flex-main">
              <div className="lp-p-block-text">
                <div className="lp-p-card-head">
                  3. Tie it all together with SEO
                </div>
                <div className="lp-p-card-desc">
                  <span className="lp-p-card-ylo">Brand Brief:</span> Once
                  well-versed with the strategy, our students learn how to boost
                  performance with the end-to-end SEO strategy.
                  <br className="pc-none" />
                  <br className="pc-none" />
                  This live project covers
                </div>
                <div className="lp-p-desc-ui">
                  <img src={bullet3} className="lp-p-img-2 mobile-none" />
                  <img
                    src={bulletMob}
                    className="lp-p-img-2 lp-p-img-3 pc-none"
                  />
                  <div className="lp-p-li-2">
                    <div className="lp-p-li-item">Conducting audits</div>
                    <div className="lp-p-li-item">
                      Finding solutions to fix the issues identified
                    </div>
                    <div className="lp-p-li-item">
                      Creating content strategyn
                    </div>
                    <div className="lp-p-li-item">
                      Using AI to further optimize the website
                    </div>
                    <div className="lp-p-li-item"> Publishing the website</div>
                  </div>
                </div>
              </div>

              <div className="lp-p-block">
                <img src={cardImg3} className="lp-p-card-img" loading="lazy" />
                <img
                  src={compImage3}
                  className="lp-p-card-company-img-3"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lp-project-card-dots">
        <div className={`dot ${activeCard === 1 ? "active" : ""}`}></div>
        <div className={`dot ${activeCard === 2 ? "active" : ""}`}></div>
        <div className={`dot ${activeCard === 3 ? "active" : ""}`}></div>
      </div>

      <div className="lp-btn-container">
        <button className="prev-bbtn" onClick={handlePrev}></button>
        <button className="next-bbtn" onClick={handleNext}></button>
      </div>
    </div>
  );
};

export default Index;
