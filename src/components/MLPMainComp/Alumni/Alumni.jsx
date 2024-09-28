import React from "react";
import LazyLoad from "react-lazyload";
import "./styles.scss";
import underline from "../../../images/csm/new-underline.png";

const Alumni = ({data}) => {

  return (
    <div className="alumni">
      <h2 className="role-head">Hear from our alumni</h2>
      <img src={underline} loading="lazy" className="new-underline" />
      <div className="content">
        <div className="alumni-video">
          <LazyLoad>
            <iframe
              width="949"
              height="534"
              src={data.video ? data.video : data[0]}
              title="Praveen's Kraftshala Story | Marketing Launchpad Program"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </LazyLoad>
        </div>
        <div className="alumni-details">
          <div className="name">{data.name ? data.name : data[2]}</div>
          <div className="role">
            {data.jobRole ? data.jobRole : data[6] } @ {data.company ? data.company : data[4]}
          </div>
          {data.specialisation || data[7] && <div className="specialisation">
           Specialisation: {data.specialisation ?? data[7]} | {data.batch ?? data[3]}
          </div>}
          <hr />
          <div className="testimonial">
            {
              data.testimonial ? data.testimonial : data[5]
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
