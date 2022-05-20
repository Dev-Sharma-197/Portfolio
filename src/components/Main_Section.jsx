import React, {useRef, useEffect} from "react";

function Main_Section() {

  // Creating Sticky Navbar
  const heroSection = useRef()
  useEffect (()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        const [ent] = entries;
        !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
      },{ root: null, threshold: 0, rootMargin: "-8%" }
    );
    observer.observe(heroSection.current)
  },[])
    
  return (
    <main>
      <section className="section-hero section" ref={heroSection} >
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">This is me</p>
            <h1 className="hero-heading">Dev Sharma</h1>
            <p className="hero-para">
              A Full Stack Developer and Frelancer. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cum eum, rerum optio sapiente facere
              vitae.
            </p>
            <div>
              <a href="#contact"  className="btn hireme-btn">
                Hire Me
              </a>
            </div>
          </div>
          {/* hero section right side */}
          <div className="section-hero-image">
            <img
              src={process.env.PUBLIC_URL + "/img/Devsharma.jpg"}
              alt="Dev Sharma"
              className="hero-img"
            /> 
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main_Section;
