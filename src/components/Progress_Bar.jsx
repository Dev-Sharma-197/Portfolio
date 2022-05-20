import React from "react";

function Progress_Bar({ title, progress }) {
  return (
    <div className="bio-stats">
      <h3>{title}</h3>
      <div className="bio-progress-bar" >
        <div className="progressed"style={{width:`${progress}%`}}>
          <span style={{left:`${progress - 4}%`}}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Progress_Bar);
