import React, { useState } from "react";

function Service_Section() {
  const [services] = useState([
    {
      title: "Web Design",
      img: "desktop-outline",
      comment:
        "Interactive and Minimalistic design with full of animations and transitions. Eye Catching Design for all devices.",
    },
    {
      title: "Web Development",
      img: "code-working",
      comment:
        "Web Development in various style for web pages like Dynamic, Static, Single-paged and Multi-paged web apps.",
    },
    {
      title: "React Development",
      img: "logo-react",
      comment:
        "Frontend Development in React-JS library with esuring the performace, integration and reusable code with good practices.",
    },
    {
      title: "NodeJS Development",
      img: "logo-nodejs",
      comment:
        "Backend Development in Node-JS with all fucntionalities like Authentication, Privacy, Server Side Rendering and Implementation of Database.",
    },
    {
      title: "Responsive Design",
      img: "phone-portrait-sharp",
      comment:
        "Responsive Designs that works in all types of devices with different screen sizes along with ensuring the quality animations and transitions.",
    },
    {
      title: "DataBase Management",
      img: "logo-firebase",
      comment:
        "Implementation of DataBases like MongoDB and Firebase that offer the flexibility and speed to market for various web applications.",
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
              <ion-icon name={val.img} class="service-icon" ></ion-icon>
              {/* <img src="img/icons/node-js.svg" className="service-icon" alt="web" /> */}
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
