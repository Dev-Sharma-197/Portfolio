import React, { useRef, useEffect } from 'react'
import CountUp from "react-countup"

function Statics() {
    const section = useRef()
    useEffect (()=>{
      const observer = new IntersectionObserver(
        (entries) => {
          const [ent] = entries;
          if(ent.isIntersecting) {
            document.getElementById("countStart1").click()
            document.getElementById("countStart2").click()
            document.getElementById("countStart3").click()
            document.getElementById("countStart4").click()
          }
        },{ root: null, threshold: 0 }
      );
      observer.observe(section.current)
    },[])
  return (
    <section className="section section-work-data">
        <div ref={section} className="container grid grid-four-column">
             <CountUp start={0} duration={4} end={150}>
                {({ countUpRef, start }) => (
                    <div>
                        <h2 id='counte' className="counter-numbers">
                        <span id='countStart1' onClick={start} ref={countUpRef} ></span>+
                        </h2>
                        <p>Project completed</p>
                    </div>
                )}
            </CountUp>
            <CountUp start={0} duration={4} end={50}>
              {({ countUpRef, start }) => (
                <div>
                    <h2 id='counte' className="counter-numbers">
                      <span id='countStart2' onClick={start} ref={countUpRef} ></span>+
                    </h2>
                    <p>Happy Clients</p>
                </div>
                )}
            </CountUp>
            <CountUp start={0} duration={4} end={100}>
              {({ countUpRef, start }) => (
                <div>
                    <h2 id='counte' className="counter-numbers">
                      <span id='countStart3' onClick={start} ref={countUpRef} ></span>+
                    </h2>
                    <p>Cups of Coffee</p>
                </div>
                )}
            </CountUp>
            <CountUp start={0} duration={4} end={400}>
              {({ countUpRef, start }) => (
                <div>
                    <h2 id='counte' className="counter-numbers">
                      <span id='countStart4' onClick={start} ref={countUpRef} ></span>+
                    </h2>
                    <p>Real Professional</p>
                </div>
                )}
            </CountUp>
        </div>
    </section>
  )
}

export default Statics