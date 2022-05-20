import React, { useState } from "react";
import {NavLink} from "react-router-dom"
import Projects from "./Projects";

function Portfolio_Section() {
  const [type, setType] = useState("")
  const [projects] = useState([
    {
      img: "img/projects/note_app.png",
      link: "https://dev-sharma-197.github.io/keep-notes",
      type: "RJ"
    },
    {
      img: "img/projects/dev_services.png",
      link: "https://developer-services.herokuapp.com/",
      type: "SW"
    },
    {
      img: "img/projects/text_formater.png",
      link: "https://dev-sharma-197.github.io/text-formater",
      type: "RJ"
    },
    {
      img: "img/projects/weather_site.png",
      link: "https://dev-weather-site.herokuapp.com/",
      type: "NJ"
    },
    {
      img: "img/projects/quotes.png",
      link: "https://dev-sharma-197.github.io/Quotes.github.io",
      type: "SW"
    },
    {
      img: "img/projects/todo_list.png",
      link: "https://dev-sharma-197.github.io/ToDo-List",
      type: "RJ"
    },
  ])

  const handler = () => {
    const btn = document.querySelector("p-btns")
    console.log(btn);
  }

  return (
    <section className="section section-portfolio" id="portfolio-section">
      <div className="container">
        <h2 className="common-heading">Latest Works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          praesentium voluptatibus nihil, natus veritatis adipisci similique
          sapiente porro recusandae iste!
        </p>
      </div>
       
      <div className="p-btns">
        <button className="btn p-btn" onClick={e => {setType("")}} data-btn-num="1">All Projects</button>
        <button className="btn p-btn" onClick={e => setType("SW")} data-btn-num="2">Static Websites</button>
        <button className="btn p-btn" onClick={e => setType("RJ")} data-btn-num="3">Reactjs Projects</button>
        <button className="btn p-btn" onClick={e => setType("NJ")} data-btn-num="4">Nodejs Projects</button>
      </div>

      <div className="container grid grid-three-column portfolio-images">
        {projects.filter(val => val.type.includes(type)).map((val, index) =>{
          return <Projects key={index} img={val.img} link={val.link} index={index} />
        })}
      </div>

    </section>
  );
}

export default React.memo(Portfolio_Section);
