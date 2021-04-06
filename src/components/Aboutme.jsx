const Aboutme = () => {
  return (
    <div>
      <main id="main">
        <section id="about" className="about">
          <div className="container-lg">
            <div className="section-title">
              <h2>About Me</h2>
              <p>
                I'm Antony Xu, a software engineering student. I have three
                experience in process engineering, operations, and project
                management. I excel in collaborative environments, but also have
                made significant business improvements as an individual
                contributor{" "}
              </p>
              <p>I love to ski, swim, and play racket sports </p>
              <p>
                I'm a huge foodie, and partially travel for food... I've
                travelled to China, Japan, Korea, Cuba, Thailand, Singapore, and
                the States. I'm hoping to go to Spain, Italy, Taiwan, and Peru
                post-covid though!
              </p>
            </div>

            <div className="row py-2">
              <div className="col-lg-5" data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/77988513/113646564-4a199600-9646-11eb-82e7-7dae1e7fdfb4.gif"
                  className="img-fluid"
                  alt="Travel Website"
                />
              </div>
              <div
                className="col-lg-7 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>Professional Background</h3>
                <div className="row">
                  <div className="col-lg">
                    <ul>
                      <li>
                        <strong>Education:</strong>
                        <ul className="content-li">
                          <li>
                            Bachelor's of Chemical Engineering, University of
                            Alberta
                          </li>
                          <li>TechCareers Software Developer Program, SAIT</li>
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
                        <ul className="content-li">
                          <li>
                            Experience in analyzing process data while
                            identifying business improvement opportunities.
                            Ultimately reduced risks by over $50MM/year
                          </li>
                          <li>
                            Strong leadership experience in leading refinery
                            plant tests, project commissioning, and spearheading
                            cost reduction initiatives{" "}
                          </li>
                          <li>
                            Excellent controls background, identifying steam
                            system controls risks and implementing changes to
                            eliminate risks valued at $10MM/year
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-8 pt-4 pt-lg-0" data-aos="fade-left">
              <h4>Software and Web Development</h4>
              <div className="row">
                <div className="col-lg">
                  <ul className="exp-list">
                    <li>
                      Website development using React, Node, Express with
                      working database in SQL and MongoDB
                    </li>
                    <li>
                      Windows desktop wallpaper scroller for multi-monitor
                      screens. Automatically detects vertical/horizontal screen
                      orientation and size and goes through wallpapers at a
                      specified interval
                    </li>
                    <li>
                      Resume Builder, extracting csv and google sheet data to
                      generate resumes readability for various applications
                    </li>
                    <li>
                      Strong understanding of fundamental data structures and
                      algorithms. Self implemented linked list templates, binary
                      search trees, heaps, in C++
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="./media/coker.jpg"
                className="img-fluid"
                alt="Coker Image"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0" data-aos="fade-left">
              <h4>Process Engineering and Data Analysis</h4>
              <div className="row">
                <div className="col-lg">
                  <ul className="exp-list">
                    <li>
                      Data analysis using Python, Pandas, Numpy to identify
                      significant business opportunity.
                      <ul>
                        <li>
                          Identified single point of failure valued at
                          $50MM/year, and provided designs to provide additional
                          barriers.
                        </li>
                        <li>
                          Analyzed historical utility system shutdowns and
                          updated controls logic to eliminate various plant
                          risks valued over $10MM/year
                        </li>
                        <li>
                          Applied linear regression machine learning algorithms
                          to predict process yields, increasing sales by
                          $0.1MM/year
                        </li>
                      </ul>
                    </li>
                    <li>
                      Lead plant testing to reduce environmental wastes, lead
                      project commissioning, and supported brand new
                      cogeneration plant startup
                    </li>
                    <li>
                      Designed, coordinated, and implemented a $1.5MM/year cost
                      savings initiative
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
};

export default Aboutme;
