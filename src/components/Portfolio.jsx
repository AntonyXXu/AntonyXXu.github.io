import React, { useState, useEffect } from "react";
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

  //Show Modal of portfolio details
  const [showModal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!showModal);
  };

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
              accomplishments, or leadership accomplishments. Hover over the
              activites to view some details. Software related projects can be
              found on my github.
            </p>
            <Modal
              showModal={showModal}
              setModal={setModal}
              toggleModal={toggleModal}
            />
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-filters">
                  <li
                    className={
                      filter === "all" ? "filter-all active" : "filter-all"
                    }
                    onClick={() => setFilter("all")}
                  >
                    All
                  </li>
                  <li
                    className={
                      filter === "programming"
                        ? "filter-all active"
                        : "filter-all"
                    }
                    onClick={() => setFilter("programming")}
                  >
                    Programming
                  </li>
                  <li
                    className={
                      filter === "analysis" ? "filter-all active" : "filter-all"
                    }
                    onClick={() => setFilter("analysis")}
                  >
                    Analysis
                  </li>
                  <li
                    className={
                      filter === "leadership"
                        ? "filter-all active"
                        : "filter-all"
                    }
                    onClick={() => setFilter("leadership")}
                  >
                    Leadership
                  </li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">
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
                  <div className="portfolio-wrap" onClick={toggleModal}>
                    <img
                      src={item.imglnk}
                      className="img-fluid portfolio-img"
                      alt={item.name}
                    />

                    <div className="portfolio-links portfolio-caption">
                      <h6>{item.description}</h6>
                      <div className="portfolio-lightbox"></div>
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
