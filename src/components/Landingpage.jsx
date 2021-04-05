import React, { useState } from "react";

const Landingpage = () => {
  const titles = [
    "Developer",
    "Process Engineer",
    "Data Scientist",
    "Operations Leader",
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
            I'm an{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
