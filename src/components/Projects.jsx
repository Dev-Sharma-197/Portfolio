import React from "react";

function Projects({ img, link, index }) {
  return (
    <div className="img-overlay p-btn--1">
      <img src={process.env.PUBLIC_URL + `${img}`} alt="my works" loading="lazy" />
      <div className="overlay">
        <a href={link} target={"_blank"} className="common-heading">
          Project {index + 1}
        </a>
      </div>
    </div>
  );
}

export default React.memo(Projects);
