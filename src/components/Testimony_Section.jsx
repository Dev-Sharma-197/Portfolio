import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { useState, useEffect } from "react";

const Testimony_Section  = () => {
    const [mediaFunc, setMediaFunc] = useState(2)

    const mediaQuery = (widthSize) => {
        if (widthSize.matches) {
            setMediaFunc(1)
        } else {
            setMediaFunc(2)
        }
    }

    useEffect(()=>mediaQuery(widthSize),[])
    const widthSize = window.matchMedia("(max-width: 710px")

    
    
    widthSize.addEventListener('change', mediaQuery)
    
    const [testimony] = useState([
        {
            img: "img/client/a-min.jpg",
            comment: "You Know sometimes when I'm talking, my words can't keep up with my thoughts...I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
            name: "Asami",
            about: "Blogger",
        },
        {
            img: "img/client/b-min.jpg",
            comment: "You Know sometimes when I'm talking, my words can't keep up with my thoughts...I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
            name: "Natalia",
            about: "Enterpreneur",
        },
        {
            img: "img/client/c-min.jpg",
            comment: "You Know sometimes when I'm talking, my words can't keep up with my thoughts...I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
            name: "Sara",
            about: "Enterpreneur",
        },
        {
            img: "img/client/d-min.jpg",
            comment: "You Know sometimes when I'm talking, my words can't keep up with my thoughts...I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
            name: "Kevin",
            about: "Employed",
        },
        {
            img: "img/client/e-min.jpg",
            comment: "You Know sometimes when I'm talking, my words can't keep up with my thoughts...I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
            name: "Emma",
            about: "Enterpreneur",
        },
        {
            img: "img/client/f-min.jpg",
            comment: "You Know sometimes when I'm talking, my words can't keep up with my thoughts...I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
            name: "Bruno",
            about: "Blogger",
        },
    ])
  return (
    <section className="section section-testimonial">
        <div className="container">
            <h2 className="common-heading">Happy Client Works</h2>
        </div>

        <Swiper slidesPerView={mediaFunc} spaceBetween={40} autoplay={{ delay: 3500}} pagination={{ clickable: true }} modules={[Autoplay, Pagination]} className="mySwiper">
            { testimony.map((val, index)=> <SwiperSlide key={index}>
                    <div className="swiper-client-msg"> <p> {val.comment} </p></div>
                    <div className="swiper-client-data grid grid-two-column">
                        <figure> <img src={process.env.PUBLIC_URL + `${val.img}`} alt="client" /> </figure>
                        <div className="client-data-details"> <h3>{val.name}</h3> <p>{val.about}</p> </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    </section>
  );
}

export default React.memo(Testimony_Section)