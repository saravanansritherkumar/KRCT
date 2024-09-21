import React, { useState } from 'react'
import "../Components/Counter.css"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
const Counter = () => {
  const [counter, setcounter] = useState(false)
  return (
    <>
      <ScrollTrigger onEnter={() => { setcounter(true) }} onExit={() => { setcounter(false) }} >

        <div className="counter">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h1>
                  ESTABLISHED
                  <br />
                  <span id='c-1'>{counter && <CountUp start={0} end={2008} duration={2} delay={0} />}</span>
                </h1>

              </div>
              <div className="col-lg-3">
                <h1>
                  FACULTY
                  <br />

                  <span id='c-1'>{counter && <CountUp start={0} end={300} duration={2} delay={0} />}</span>
                </h1>
              </div>
              <div className="col-lg-3">
                <h1>

                  STUDENTS
                  <br />

                  <span>{counter && <CountUp start={0} end={4500} duration={2} delay={0} />}</span>
                </h1>
              </div>
              <div className="col-lg-3">
                <h1>

                  UG & PG PROGRAMMES
                  <br />

                  <span id='c-1'>{counter && <CountUp start={0} end={20} duration={2} delay={0} />}</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>

    </>
  )
}

export default Counter
