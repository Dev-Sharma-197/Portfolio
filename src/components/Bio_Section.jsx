import React, { useState } from "react";
import Progress_Bar from "./Progress_Bar";

function Bio_Section() {
  const [skillset] = useState([
    {
      lang: "HTML",
      prog: "90",
    },
    {
      lang: "CSS",
      prog: "80",
    },
    {
      lang: "Design",
      prog: "80",
    },
    {
      lang: "JavaScript",
      prog: "60",
    },
    {
      lang: "MERN",
      prog: "75",
    },
  ]);

  return (
    <section className="section-biodata section">
      <div className="container grid grid-two-column">
        <div className="bio-image">
          <img src={process.env.PUBLIC_URL + "img/biodata-min.jpg"} alt="my bio image" />
        </div>
        {/* bio right side */}
        <div className="bio-data">
          <h2 className="common-heading">My bio-data</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at ratione deserunt error sint, quia incidunt repellendus doloremque </p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non oditofficiis vitae blanditiis nesciunt</p>
          <div className="bio-data-stats">
            {skillset.map((val, ind) => <Progress_Bar key={ind} title={val.lang} progress={val.prog} />)}
          </div>
          <div className="biodata-btn"><a href="#" className="btn">Download CV</a> </div>
        </div>
      </div>
    </section>
  );
}

export default Bio_Section;
