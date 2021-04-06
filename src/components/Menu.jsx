import React, { useState } from "react";
import icons from "./logos/icons";
// import { ReactComponent as Linkedin } from "./logos/linkedin.svg";
// import { ReactComponent as Github } from "./logos/github.svg";
// import { ReactComponent as Email } from "./logos/email.svg";
import { Link } from "react-router-dom";

const Menu = () => {
  const [click, set_click] = useState(false);
  const handle_click = () => set_click(!click);
  return (
    <div className={!click ? "" : "mobile-nav-active"}>
      <header id="header" onClick={handle_click}>
        <div className="d-flex flex-column">
          <div className="profile">
            <Link to="/">
              <img
                src="media/profile.jpg"
                alt=""
                className="img-fluid rounded-circle"
              ></img>
              <h1 className="text-light">Antony Xu</h1>
            </Link>
            <div className="social-links mt-3 text-center">
              <a
                href="https://github.com/AntonyXXu"
                target="_blank"
                className="github"
              >
                <icons.Github className="link-logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/antonyxxu/"
                target="_blank"
                className="linkedin"
              >
                <icons.Linkedin className="link-logo" />
              </a>
              <a href="mailto:antonyxutong@gmail.com" className="email">
                <icons.Email className="link-logo" />
              </a>
            </div>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="active">
              <Link to="/">
                <icons.Home className="menu-logo" />{" "}
                <span className="menu-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <icons.About className="menu-logo" />{" "}
                <span className="menu-text">About Me</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <icons.Experience className="menu-logo" />
                <span className="menu-text">Experience</span>
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <icons.Resume className="menu-logo" />{" "}
                <span className="menu-text">Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <icons.Email className="menu-logo" />{" "}
                <span className="menu-text"> Contact</span>
              </Link>
            </li>
            <li>
              <div className="menu-text">&copy; Antony Xu 2020</div>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="mobile-nav-toggle d-xl-none"
          onClick={handle_click}
        >
          {!click ? (
            <icons.MenuIcon className="mobile-menu" />
          ) : (
            <icons.Close className="mobile-menu" />
          )}
        </button>
      </header>
    </div>
  );
};

export default Menu;
