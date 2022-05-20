import React from "react";

function Footer() {
  const handleScrollTop = () => {
    const hSection = document.querySelector(".scroll")
    hSection.scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
      <footer className="section-footer section">
        <div className="container grid grid-four-column">
          <div className="f-about">
            <h3>About</h3>
            <p>
              We have tested a number of registry fix and clean utilities and
              present our top 3 list on our site for your convenience. Hope you
              like it.
            </p>
          </div>

          <div className="f-links">
              <h3>Links</h3>
              <ul>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Home</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">About</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Services</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Portfolio</a></li>
                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Contact</a></li>
              </ul>
          </div>

          <div className="f-services">
            <h3>Services</h3>
            <ul>
              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Web Design</a></li>
              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Web Development</a></li>
              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">MERN Development</a></li>
              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Restful API</a></li>
              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Database</a></li>
            </ul>
          </div>

          <div className="f-address">
            <h3>Have a Question?</h3>
            <address>
              <div>
                <p><span><ion-icon name='location-outline'/></span> <a href="https://goo.gl/maps/ygHb8Q6adFsgfHig8">Kurukshetra, India</a></p>
              </div>
              <div>
                <p><span><ion-icon name='call-outline'/></span> <a href="tel:+919728942296 ">+91 972-894-2296</a></p>
              </div>
              <div>
                <p><span><ion-icon name='mail-outline'/></span><a href="mailto:ginnisharma1972000@gmail.com">ginnisharma1972000@gmail.com</a></p>
              </div>
            </address>
          </div>
        </div>

        <div className="container">
          <div className="f-social-icons">
            <a href="https://www.instagram.com/dev_sharma019/" target='_blank' >
              <ion-icon name='logo-instagram' ></ion-icon>
            </a>

            <a href="https://discord.com/channels/dev_sharma#9697" target='_blank' >
              <ion-icon name='logo-discord' ></ion-icon>
            </a>

            <a href="https://www.linkedin.com/in/dev-shar-ma/" target='_blank' >
              <ion-icon name='logo-linkedin' ></ion-icon>
            </a>          
            <a href="https://github.com/Dev-Sharma-197" target='_blank' >
              <ion-icon name='logo-github' ></ion-icon>
            </a>          
          </div>

          <div className="f-credits">
            <p>Copyright 2022 | All Rights Reserved | This React App is made with 💕 by Dev Sharma.</p>
          </div>
        </div>
      </footer>
      <div className="scrollToTop" onClick={handleScrollTop}>
        <ion-icon name="arrow-up-outline" class="scroll-top" ></ion-icon>
      </div>
    </>
  );
}

export default Footer;
