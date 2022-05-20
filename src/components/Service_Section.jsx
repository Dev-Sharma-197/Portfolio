import React, { useState } from "react";

function Service_Section() {
  const [services] = useState([
    {
      title: "Web Design",
      img: "desktop-outline",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius velit voluptates saepe alias mollitia minima.",
    },
    {
      title: "Web Development",
      img: "desktop-outline",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius velit voluptates saepe alias mollitia minima.",
    },
    {
      title: "Photography",
      img: "desktop-outline",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius velit voluptates saepe alias mollitia minima.",
    },
    {
      title: "Cliping Path",
      img: "desktop-outline",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius velit voluptates saepe alias mollitia minima.",
    },
    {
      title: "Apps Interface",
      img: "desktop-outline",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius velit voluptates saepe alias mollitia minima.",
    },
    {
      title: "Graphics design",
      img: "desktop-outline",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius velit voluptates saepe alias mollitia minima.",
    },
  ]);

  return (
    <section className="section section-services">
      <div className="container">
        <h2 className="common-heading">Services Offers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptatum maiores fugiat inventore aut atque ut repellat a
          consequuntur molestias.
        </p>
      </div>

      <div className="container grid grid-three-column">
        {services.map((val, index) => {
          return (
            <div key={index} className="service-box">
              <ion-icon name="desktop-outline" class="service-icon" ></ion-icon>
              <h3>{val.title}</h3>
              <p>{val.comment}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default React.memo(Service_Section);
