import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolio = [
    {
      key: 1,
      name: "Travel Website",
      category: ["all", "programming"],
      imglnk: "media/portfolio/travel_site.jpg",
    },
    {
      key: 2,
      name: "Windows Wallpapers",
      category: ["all", "programming"],
      imglnk: "media/portfolio/windows_wallpaper_scroller.jpg",
    },
    {
      key: 3,
      name: "Resume Builder",
      category: ["all", "programming"],
      imglnk: "media/portfolio/resume_builder.jpg",
    },
    {
      key: 4,
      name: "Process model compilation",
      category: ["all", "programming"],
      imglnk: "media/portfolio/coker.jpg",
    },
    {
      key: 5,
      name: "Production Model Analysis",
      category: ["all", "analysis"],
      imglnk: "media/portfolio/production.jpg",
    },
    {
      key: 6,
      name: "Risk Reduction Analysis",
      category: ["all", "analysis"],
      imglnk: "media/portfolio/boiler.jpg",
    },
    {
      key: 7,
      name: "Cooling Tower Initiative",
      category: ["all", "operations"],
      imglnk: "media/portfolio/coolingtower.jpg",
    },
    {
      key: 8,
      name: "Cross Functional Testing",
      category: ["all", "operations"],
      imglnk: "media/portfolio/upgrader.jpg",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState(portfolio);

  //   const data = () => {
  //     const final = portfolio.map((prev) => ({
  //       ...prev,
  //       filtered: prev.category.includes(filter),
  //     }));
  //     setProjects(final);
  //   };

  useEffect(() => {
    const final = portfolio.map((prev) => ({
      ...prev,
      filtered: prev.category.includes(filter),
    }));
    setProjects(final);
  }, [filter]);

  return (
    <>
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
    </>
  );
};
export default Portfolio;
