import React from "react";
import Typed from "react-typed";
import { animated, useSpring } from "react-spring";
import Wrapper from "./Wrapper";

const titles = [
  "a Software Developer",
  "a Process Engineer",
  "a Data Scientist",
  "an Operations Leader",
];

const Landingpage = () => {
  const fadein = useSpring({
    opacity: 1,
    from: { opacity: 0.5 },
    config: { duration: 500 },
  });
  return (
    <Wrapper>
      <animated.div style={fadein}>
        <section
          id="hero"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="hero-container">
            <h1>My name is Antony Xu</h1>
            <p>
              <span>
                I'm&nbsp;
                <Typed
                  strings={titles}
                  typeSpeed={50}
                  backSpeed={30}
                  loop={true}
                />
              </span>
            </p>
          </div>
        </section>
      </animated.div>
    </Wrapper>
  );
};

export default Landingpage;
