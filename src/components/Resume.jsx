import React, { useState } from "react";
import DownloadResume from "./Resume/DownloadResume";
import Skills from "./Resume/Skills";
import Education from "./Resume/Education";
import Experience from "./Resume/Experience";
import Wrapper from "./Wrapper";
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
              <div className="col-lg-12 info" data-aos="fade-up">
                <div className="row resume">
                  <div className="col-lg-12 d-flex justify-content-between w-100">
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
                  <div className="col-lg-12">
                    {collapse["skills"] ? <Skills /> : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 info" data-aos="fade-up">
                <div className="row resume">
                  <div className="col-lg-12 d-flex justify-content-between w-100">
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
                  <div className="col-lg-12">
                    {collapse["education"] ? <Education /> : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 info" data-aos="fade-up">
                <div className="row resume">
                  <div className="col-lg-12 d-flex justify-content-between w-100">
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
                  <div className="col-lg-12">
                    {collapse["experience"] ? <Experience /> : null}
                  </div>
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
