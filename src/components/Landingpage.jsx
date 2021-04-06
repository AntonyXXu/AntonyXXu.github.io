import React from "react";
import Typed from "react-typed";

const Landingpage = () => {
  const titles = [
    "a Student Software Developer",
    "a Process Engineer",
    "a Data Scientist",
    "an Operations Leader",
  ];
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Antony Xu</h1>
          <p>
            <span>
              I'm{" "}
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
    </div>
  );
};

export default Landingpage;
