import React, { useState } from "react";
import icons from "../assets/logos/icons";
import ScrollRestore from "./Menu/ScrollRestore";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  // Manage Mobile Menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const setFalse = () => setClick(false);

  // Manage Active Menu
  return (
    <div className={!click ? "" : "mobile-nav-active"}>
      <ScrollRestore />
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <Link to="/" onClick={handleClick}>
              <img
                src="./assets/profile.jpg"
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
                onClick={setFalse}
              >
                <icons.Home className="menu-logo" />
                <span className="menu-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" onClick={setFalse}>
                <icons.About className="menu-logo" />
                <span className="menu-text">About Me</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                activeClassName="active"
                onClick={setFalse}
              >
                <icons.Experience className="menu-logo" />
                <span className="menu-text">Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="active" onClick={setFalse}>
                <icons.Resume className="menu-logo" />
                <span className="menu-text">Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={setFalse}
              >
                <icons.Email className="menu-logo" />
                <span className="menu-text"> Contact</span>
              </NavLink>
            </li>
            <li>
              <div className="copyright">&copy; Antony Xu 2020</div>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={handleClick}
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
