import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Main_Section from "./components/Main_Section";
import Bio_Section from "./components/Bio_Section";
import Portfolio_Section from "./components/Portfolio_Section";
import Statics from "./components/Statics";
import Service_Section from "./components/Service_Section";
import Testimony_Section from "./components/Testimony_Section";
import Freelancing_Section from "./components/Freelancing_Section";
import Contact_Section from "./components/Contact_Section";
import Footer from "./components/Footer";

function App() {
  const kkr = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55301.61029056759!2d76.8468820596446!3d29.969351374736487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e46cf85c85d3d%3A0x7f06e815caca33f4!2sKurukshetra%2C%20Haryana!5e0!3m2!1sen!2sin!4v1652461927492!5m2!1sen!2sin" style={{border: 0, width: "100%", height: "35rem"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>;
  
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<><Main_Section /> <Bio_Section /> <Portfolio_Section/> <Statics /> <Service_Section /> <Testimony_Section /> <Freelancing_Section /> <Contact_Section /></>} />
        <Route path="/about" element={<><Bio_Section/> <Freelancing_Section /></>} />
        <Route path="/service" element={<Service_Section/>} />
        <Route path="/portfolio" element={<><Portfolio_Section/> <Statics /> <Testimony_Section /></>} />
        <Route path="/contact" element={<Contact_Section kkr={kkr} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
