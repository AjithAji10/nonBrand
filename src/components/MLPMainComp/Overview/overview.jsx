import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import permormanceImg from "../../../images/mlp/performance-driven.png";
import practicalImg from "../../../images/mlp/practical.png";
import interviewIcon from '../../../../static/assets/interviewIcon.webp';
import "./styles.scss";

function Overview() {
  const [openVideo, setOpenVideo] = useState(false);

  const showModalHandler = () => {
    setOpenVideo(true);
  };

  const hideModalHandler = () => {
    setOpenVideo(false);
  };

  const cards = [
    {
      image:
      practicalImg,
      alt: "Why is Marketing Launchpad Practical",
      title: "Practical Training ",
      name: "Practical",
      description:
        "<p> Created by the industry’s top practitioners, to drive success in the digital age</p>",
    },
    {
      image:interviewIcon,
      alt: "How does Marketing Launchpad deliver Personalized Coaching",
      title: "Personalized Coaching",
      name: "Personalised",
      description:
        "<p>Coaching 50 people together doesn't help. At Kraftshala, you get feedback in smaller groups on your work to build your individual strengths</p>",
    },
    {
      image:
      permormanceImg,
      alt: "How is Marketing Launchpad Performance Driven? ",
      title: "Performance Driven Learning",
      name: "Performance - driven",
      description:
        "<p>This is a <b>job-linked digital<br/> marketing course.</b><br/>If the job pays < 4.5L, we refund<br/> most of your fee back.</p>",
    },
  ];

  return (
    <>

      <div className="future-education bg-none mtop-4">
        <div className="overview-container-main">
          <h2 className="overview-title">
        Why is Marketing Launchpad Considered the Best Online Digital Marketing Course?
          </h2>
        </div>
        <div className="future-title below-text-main">
          The Launchpad is the Future of Education
        </div>
        <div className="cards main-margin-y overview-container">
          {cards.map((card, k) => {
            return (
              <div key={k} className="card">
                <div className="card-img">
                  <img
                    src={card.image}
                    width="217"
                    height="200"
                    alt={card.alt}
                    title={card.title}
                  />
                </div>

                <h3 className="card-head">{card.name}</h3>

                <div
                  className="card-desc"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {openVideo ? (
        <React.Fragment>
          <div
            className="spec-mask spec-active"
            onClick={hideModalHandler}
            aria-hidden="true"
          ></div>
          <div className="spec-modal">
            <img
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/cross-white.svg"
              alt="cross icon"
              className="spec-modal-cross"
              onClick={hideModalHandler}
              aria-hidden="true"
            />
            <LazyLoad>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QgDxj-1wqDo?autoplay=1"
                title="Kraftshala YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-player"
              ></iframe>
            </LazyLoad>
          </div>
        </React.Fragment>
      ) : null}
    </>
  );
}

export default Overview;
