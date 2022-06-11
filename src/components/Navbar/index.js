import "./index.css";
import "./mobile.css"
import React, { useState } from "react";
import { Link } from "react-scroll";
import AnimatedWords from "../AnimatedWords";
import MobileNav from "./MobileNav";

function Navbar() {
  const [hamburgerClick,setHamburgerClick]=useState(false);
  const letters = ({} = ["E", "J", "A", "S"]);
  const [letterClass, setLetterClass] = useState("animate-letters");
  return (
    <nav className="fadeIn" id="navbar">
      <div className="navbar-container">
        <div className="navbar-contents">
          <div className="logo">
            <svg
              className="logo-svg"
              id="Component_1_1"
              data-name="Component 1 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 229.883 255.775"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M953.533,396.224V520.391l58.006,65.316V396.224h-139.3V329.932h229.883v66.292Z"
                transform="translate(-872.234 -329.932)"
                fill="#ff0050"
              />
            </svg>
            <AnimatedWords letters={letters} letterClass={letterClass} />
          </div>

          {/* <div className="mobile-nav">
            <MobileNav/>
            <div className={`hamburger-menu ${hamburgerClick && 'hamburger-menu--active'}`} onClick={()=>{setHamburgerClick(!hamburgerClick)}}  >
              <div className={`main-stick ${hamburgerClick && 'main-stick--active'}`}></div>
            </div>
          </div> */}


          <div className="navigation">
            <ul className="nav-links">
              <li>
                <Link
                  className="nav-link"
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="projects"
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="skills"
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact nav-contact">
            <Link
              to="contact"
              className="contact-btn"
              smooth={true}
              duration={500}
            >
              Let's talk!
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
