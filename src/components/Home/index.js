import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "../Navbar";
import TypeWriter from "../TypeWriter";
import { Link } from "react-scroll";
import AnimatedWords from "../AnimatedWords";
function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const name = ["T", "e", "j", "a", "s"];
  const job = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="hero-container fadeIn">
          <div className="hero-content">
            <h1 className="heroes-heading">
              <span>
                <span className={`${letterClass} _0`}>H</span>
                <span className={`${letterClass} _1`}>i,</span>
              </span>
              <br />
              <span className="text-margin-right">
                <span className={`${letterClass} _2`}>I'</span>
                <span className={`${letterClass} _3`}>m</span>
              </span>
              <AnimatedWords letters={name} letterClass={letterClass} idx={4} />
              <br />
              <AnimatedWords letters={job} letterClass={letterClass} idx={9} />
            </h1>
            {/* <TypeWriter/> */}
            <div className="contact home-contact-btn">
              <Link to="contact" className="contact-btn">
                Contact me!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
