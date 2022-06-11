import React from "react";
import { Link } from "react-scroll";
function MobileNav(props) {
  return (
    <div
      className={`mobile-navigation ${props.hamburgerClick ? "show-nav" : ""}`}
    >
      <ul className="mobile-nav-links">
        <li>
          <Link
            className="mobile-nav-link"
            to="about"
            smooth={true}
            duration={500}
            onClick={() => props.setHamburgerClick((pre) => !pre)}
          >
            About
          </Link>{" "}
        </li>
        <li>
          <Link
            className="mobile-nav-link"
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => props.setHamburgerClick((pre) => !pre)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="mobile-nav-link"
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => props.setHamburgerClick((pre) => !pre)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="mobile-nav-link"
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => props.setHamburgerClick((pre) => !pre)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
