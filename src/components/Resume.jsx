import React, { useState } from "react";
import DownloadResume from "./Resume/DownloadResume";
import Skills from "./Resume/Skills";
import Education from "./Resume/Education";
import Experience from "./Resume/Experience";
import Wrapper from "./Wrapper";
import { animated, useSpring } from "react-spring";

const Resume = () => {
  //   Hide tabs
  const [collapse, setCollapse] = useState({
    skills: true,
    education: true,
    experience: true,
  });
  const handleCollapse = (id) => {
    setCollapse((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };
  // useSpring for hiding tabs
  const skillsHide = useSpring({
    opacity: collapse["skills"] ? 1 : 0,
    maxHeight: collapse["skills"] ? "1000px" : "0px",
    scaleY: collapse["skills"] ? "1" : "0.00001",
  });

  const educationHide = useSpring({
    opacity: collapse["education"] ? 1 : 0,
    maxHeight: collapse["education"] ? "1000px" : "0px",
    scaleY: collapse["education"] ? "1" : "0.00001",
  });

  const experienceHide = useSpring({
    opacity: collapse["experience"] ? 1 : 0,
    maxHeight: collapse["experience"] ? "10000px" : "0px",
    scaleY: collapse["experience"] ? "1" : "0.00001",
    config: { duration: 300 },
  });

  return (
    <Wrapper>
      <main id="main">
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h1>Resume</h1>
            </div>
            <DownloadResume />
            <div className="row">
              <div className="col-lg-12 info">
                <div className="row resume">
                  <div className="col-lg-12 d-flex justify-content-between ">
                    <h2>Technical Skills</h2>
                    <div className="float-right">
                      <button
                        className="btn btn-outline-primary "
                        onClick={() => handleCollapse("skills")}
                      >
                        {collapse["skills"] ? "hide" : "show"}
                      </button>
                    </div>
                  </div>
                  <animated.div className="col-lg-12 exp" style={skillsHide}>
                    <Skills />
                  </animated.div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 info">
                <div className="row resume">
                  <div className="col-lg-12 d-flex justify-content-between ">
                    <h2>Education</h2>
                    <div className="float-right">
                      <button
                        className="btn btn-outline-primary "
                        onClick={() => handleCollapse("education")}
                      >
                        {collapse["education"] ? "hide" : "show"}
                      </button>
                    </div>
                  </div>
                  <animated.div className="col-lg-12 exp" style={educationHide}>
                    <Education />
                  </animated.div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 info">
                <div className="row resume">
                  <div className="col-lg-12 d-flex justify-content-between ">
                    <h2>Work Experience</h2>
                    <div className="float-right">
                      <button
                        className="btn btn-outline-primary "
                        onClick={() => handleCollapse("experience")}
                      >
                        {collapse["experience"] ? "hide" : "show"}
                      </button>
                    </div>
                  </div>
                  <animated.div
                    className="col-lg-12 exp"
                    style={experienceHide}
                  >
                    <Experience />
                  </animated.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default Resume;
