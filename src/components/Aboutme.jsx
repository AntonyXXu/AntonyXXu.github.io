import React, { useState } from "react";
import Wrapper from "./Wrapper";

const Aboutme = () => {
  const [gif, updategif] = useState(false);
  const setgif = () => updategif(!gif);
  return (
    <Wrapper>
      <main id="main">
        <section id="about" className="about">
          <div className="container-xl">
            <div className="section-title">
              <h1>About Me</h1>{" "}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-stretch">
                  <div className="info">
                    <p className="condense">
                      I'm Antony Xu, a software engineering student. I have
                      three experience in process engineering, operations, and
                      project management. I am a great problem solver, and excel
                      at working in collaborative environments as well as
                      demonstrating business results as an individual
                      contributor{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch">
                  {" "}
                  <div className="info">
                    <p className="condense">
                      I love to ski, swim, and play racket sports. I'm a huge
                      foodie, and partially travel for food... I've travelled to
                      China, Japan, Korea, Cuba, Thailand, Singapore, and the
                      States. I'm hoping to go to Spain, Italy, Taiwan, and Peru
                      post-covid though!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-xl">
              <div className="row">
                <div
                  className="col-lg-6 d-flex align-items-stretch"
                  onClick={setgif}
                >
                  <div className="info">
                    <p className="imgcaption text-center">
                      {!gif
                        ? "Click me to view a gif of the site!"
                        : "Click me to revert to jpg"}
                    </p>
                    <img
                      src={
                        !gif
                          ? "./assets/travel_site.jpg"
                          : "./assets/travel_site.gif"
                      }
                      className="img-fluid"
                      alt="Travel Website"
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch content">
                  <div className="info">
                    <h3>Professional Overview</h3>
                    <div className="row">
                      <div className="col-lg">
                        <ul className="condense">
                          <li>
                            <strong>Education:</strong>
                            <ul className="content-li">
                              <li>
                                Bachelor's of Chemical Engineering, University
                                of Alberta
                              </li>
                              <li>
                                TechCareers Software Developer Program, SAIT
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Software Experience:</strong>
                            <ul className="content-li">
                              <li>
                                Web development including personal website and a
                                travel website
                              </li>
                              <li>Windows multi-monitor background scroller</li>
                              <li>
                                Resume builder from Google Sheets and CSV data
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>
                              Process Engineering and Data Analysis Experience:
                            </strong>
                            <ul className="content-li condense">
                              <li>
                                Experience in analyzing process data while
                                identifying business improvement opportunities.
                                Ultimately reduced risks by over $50MM/year
                              </li>
                              <li>
                                Strong leadership experience in leading refinery
                                plant tests, project commissioning, and
                                spearheading cost reduction initiatives{" "}
                              </li>
                              <li>
                                Excellent controls background, implementing
                                changes to eliminate risks valued at $10MM/year
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default Aboutme;
