import React, { useState } from "react";
import icons from "./logos/icons";
// import { ReactComponent as Linkedin } from "./logos/linkedin.svg";
// import { ReactComponent as Github } from "./logos/github.svg";
// import { ReactComponent as Email } from "./logos/email.svg";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  // Manage Mobile Menu
  const [click, set_click] = useState(false);
  const handle_click = () => set_click(!click);

  // Manage Active Menu
  return (
    <div className={!click ? "" : "mobile-nav-active"}>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <Link to="/" onClick={handle_click}>
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
                rel="noreferrer"
                className="github"
              >
                <icons.Github className="link-logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/antonyxxu/"
                target="_blank"
                rel="noreferrer"
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
            <li>
              <NavLink
                to="/"
                exact={true}
                activeClassName="active"
                onClick={handle_click}
              >
                <icons.Home className="menu-logo" />{" "}
                <span className="menu-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={handle_click}
              >
                <icons.About className="menu-logo" />{" "}
                <span className="menu-text">About Me</span>
              </NavLink>
            </li>
            {/* Currently working on portfolio page */}
            <li>
              <NavLink
                to="/portfolio"
                activeClassName="active"
                onClick={handle_click}
              >
                <icons.Experience className="menu-logo" />
                <span className="menu-text">Portfolio (WIP)</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                activeClassName="active"
                onClick={handle_click}
              >
                <icons.Resume className="menu-logo" />{" "}
                <span className="menu-text">Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={handle_click}
              >
                <icons.Email className="menu-logo" />{" "}
                <span className="menu-text"> Contact</span>
              </NavLink>
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
