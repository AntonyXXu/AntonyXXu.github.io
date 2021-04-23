import React, { useState, useEffect, useCallback } from "react";
import portfolio from "../statics/Portfolio.json";
import Wrapper from "./Wrapper";
import Modal from "./portfolio/Modal";

const Portfolio = () => {
  //Filter actively shown portfolios
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState(portfolio);

  useEffect(() => {
    const final = portfolio.map((prev) => ({
      ...prev,
      filtered: prev.category.includes(filter),
    }));
    setProjects(final);
  }, [filter]);
  const filterPortfolio = (filter) => {
    setFilter(filter);
    setModal(0);
  };

  //Show Modal of portfolio details
  const [showModal, setModal] = useState(0);
  const toggleModal = (e) => {
    if (!showModal) {
      setModal(e.target.getAttribute("data-index"));
    } else {
      setModal(0);
    }
  };

  //Close modal on press escape
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setModal(0);
      }
    },
    [setModal, showModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <Wrapper>
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h1>Portfolio</h1>
            </div>
            <p>
              See below for some of my projects and experiences in detail! Feel
              free to filter by software related projects, work related
              achivements, and leadership accomplishments. I have created web
              applications with React.js, and Node.js, created games in C++, and
              various miscellaneous programming projects. From my past process
              engineering experience, I've utilized Python to analyze process
              data to identify multiple high-value opportunities, and lead teams
              to improve process safety and improve business operations.
            </p>
            <p>
              Click on the various boxes to view details. Software related
              projects can be found on my Github.
            </p>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-filters">
                  <li
                    className={
                      filter === "all" ? "filter-all active" : "filter-all"
                    }
                    onClick={() => {
                      filterPortfolio("all");
                    }}
                  >
                    All
                  </li>
                  <li
                    className={
                      filter === "programming"
                        ? "filter-all active"
                        : "filter-all"
                    }
                    onClick={() => filterPortfolio("programming")}
                  >
                    Programming
                  </li>
                  <li
                    className={
                      filter === "analysis" ? "filter-all active" : "filter-all"
                    }
                    onClick={() => {
                      filterPortfolio("analysis");
                    }}
                  >
                    Analysis
                  </li>
                  <li
                    className={
                      filter === "leadership"
                        ? "filter-all active"
                        : "filter-all"
                    }
                    onClick={() => {
                      filterPortfolio("leadership");
                    }}
                  >
                    Leadership
                  </li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">
              <Modal
                showModal={showModal}
                setModal={setModal}
                toggleModal={toggleModal}
              />
              {projects.map((item) => (
                <div
                  key={item.key}
                  className={
                    item.filtered
                      ? "col-lg-4 col-md-6 portfolio-item filter-analysis visible"
                      : "col-lg-4 col-md-6 portfolio-item filter-analysis invisible"
                  }
                >
                  <h4 key={item.name}>{item.name}</h4>
                  <div className="portfolio-wrap">
                    <img
                      src={item.imglnk}
                      className="img-fluid portfolio-img"
                      alt={item.name}
                    />

                    <div className="portfolio-links portfolio-caption">
                      <div className="portfolio-lightbox"></div>

                      <button
                        className="btn btn-primary btn-portfolio"
                        data-index={item.key}
                        onClick={toggleModal}
                      >
                        View details about {item.name}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};
export default Portfolio;
