import React from "react";
import { Link } from "react-scroll";
function MobileNav() {
  return (
    <div className="mobile-navigation">
      <ul className="mobile-nav-links">
        <li>
          <Link className="mobile-nav-link" to="about" smooth={true} duration={500}>
            About
          </Link>{" "}
        </li>
        <li>
          <Link className="mobile-nav-link" to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link className="mobile-nav-link" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="mobile-nav-link" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
