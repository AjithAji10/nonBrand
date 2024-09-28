import React from "react";
import LazyLoad from "react-lazyload";
import youtubeIcon from "../../../images/mlp/youtube-icon.png";
import linkedinIcon from "../../../images/mlp/linkedin-icon.png";
import "./styles.scss";
import { useState } from "react";

function Card2({
  video,
  image,
  alt,
  name,
  batch,
  company,
  description,
  profile,
  jobRole,
  specialisation,
  extraText,
  fn,
  hide
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="card-7"
      onClick={() =>
        fn([
          video,
          image,
          name,
          batch,
          company,
          description,
          jobRole,
          specialisation,
          extraText,
        ])
      }
    >
      <div className="type2-head space-between">
        <div className="type2-img-div">
          <LazyLoad once>
            <img src={image} alt={alt} title={name + " " + company} />
          </LazyLoad>
        </div>
        <div className="social-apps">
          {video && !hide && (
            <a href={video} target="blank" >
              <img src={youtubeIcon} className="social-img" loading="lazy" />
            </a>
          )}

          {profile && !hide && <a href={profile} target="blank">
            <img src={linkedinIcon} className="social-img" loading="lazy" />
          </a> }
        </div>
      </div>
      <div className="type2-info">
        <div className="alumni-name">{name}</div>
        <div className="alumni-company">
          {jobRole} {!!company ? ` @ ${company}` : ""}
        </div>
        {/* {specialisation &&
          <div className="specialisation">
            Specialisation: {specialisation} | {batch}
          </div>
        } */}
      </div>
      <hr className="yellow-hr" />
      <div className="type2-description-c7 italic">
        {showMore ? description : description.substring(0, 230) + "... "}
        <span className="showMore" onClick={() => setShowMore(true)}>
          {!showMore && "show more"}
        </span>
      </div>
      <div className="type2-description_bold">{extraText}</div>
    </div>
  );
}

export default Card2;
