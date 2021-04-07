import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import portfolio from "../statics/Portfolio.json";
import Wrapper from "./Wrapper";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState(portfolio);

  useEffect(() => {
    const final = portfolio.map((prev) => ({
      ...prev,
      filtered: prev.category.includes(filter),
    }));
    setProjects(final);
  }, [filter]);

  return (
    <Wrapper>
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h1>Portfolio (Currently in progress)</h1>
            </div>
            <p>
              See below for some of my projects and experiences in detail! Feel
              free to filter by software related projects, work related
              accomplishments, or leadership accomplishments.
            </p>
            <div className="row" data-aos="fade-up">
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
                      filter === "operations"
                        ? "filter-all active"
                        : "filter-all"
                    }
                    onClick={() => setFilter("operations")}
                  >
                    Operations
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {projects.map((item) =>
                item.filtered === true ? (
                  <div
                    key={item.key}
                    className="col-lg-4 col-md-6 portfolio-item filter-analysis"
                  >
                    <div className="portfolio-wrap">
                      <h4 key={item.name}>{item.name}</h4>
                      <img
                        src={item.imglnk}
                        className="img-fluid"
                        alt={item.name}
                      />
                      <div className="portfolio-links">
                        <Link to="portfolio-details.html" title="More Details">
                          <span>View details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null
              )}{" "}
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};
export default Portfolio;
