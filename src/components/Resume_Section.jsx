import React from "react";

function Resume_Section() {
  return (
    <section class="section-resume section ">
      <div class="container grid grid-two-column">
        {/* <!-- resume left side  --> */}
        <div class="resume-img">
            <img src={process.env.PUBLIC_URL + "img/hero.jpg"} alt="my resume pic" data-src="images/biodata.jpg" loading="lazy" class="lazy-img" />
        </div>

        {/* <!-- resume right side  --> */}
        <div class="resume-data">
          <h2 class="common-heading">resume</h2>
          <h3 class="resume-para">my work experience</h3>

          <div class="resume-data-subsection">
            <div class="resume-data-left">
              <h3>Full Stack Developer</h3>
              <div class="grid grid-two-column">
                <p><ion-icon name="business-outline"></ion-icon>Carikture India</p>
                <p><ion-icon name="location-outline"></ion-icon>Remote</p>
              </div>
            </div>

            <div class="resume-data-right">
              <p class="resume-data-button">fulltime</p>
              <p><ion-icon name="calendar-outline"></ion-icon><span>April 2022 - Present </span></p>
            </div>
          </div>

          {/* <!-- Education section  --> */}
          <div class="resume-data-bottom-subsection">
            <p class="resume-para">Education</p>

            {/* <!-- 1st college  --> */}
            <div class="resume-data-subsection margin-small">
              <div class="resume-data-left">
                <h3>Bachelor's in Computer Science</h3>
                <div class="grid grid-two-column">
                  <p><ion-icon name="business-outline"></ion-icon>Pt. ChiranjiLal Sharma Govt. College</p>
                  <p><ion-icon name="location-outline"></ion-icon>Karnal, HR</p>
                </div>
              </div>

              <div class="resume-data-right">
                <p class="resume-data-button">Bachelor</p>
                <p><ion-icon name="calendar-outline"></ion-icon><span>2019 - 2022</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Resume_Section);
