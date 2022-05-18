import "./index.css";
import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-tilt";
import me from "../../assets/me.png";
import "aos/dist/aos.css";
import AnimatedWords from "../AnimatedWords";
import SectionHead from "../helpers";
function About() {
  const [letterClass, setLetterClass] = useState("");
  const intro = ["M", "y", "s", "e", "l", "f", "."];
  const myref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        setLetterClass("text-animate");
        observer.unobserve(myref.current);
        setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 2000);
      },
      {
        root: null,
        threshold: 0.4,
      }
    );
    observer.observe(myref.current);
  }, []);

  return (
    <div ref={myref} id="about" className="main-section" data-aos="fade-up">
      <div className="container">
        <div className="about-contents">
          <SectionHead value="About" />
          <div className="about-img">
            <div className="intro">
              <h2 className="heroes-heading about-initial-heading">
                <AnimatedWords
                  letters={intro}
                  letterClass={letterClass}
                  idx={0}
                />
              </h2>
              <p className="text-margin para">
                I’m very ambitious front-end developer looking for a role in
                established IT company with the opportunity to work with the
                latest technologies on challenging and diverse projects.
              </p>
              <p className="text-margin para">
                I'm quietly confident, naturally curious, and perpetually
                working on improving my chops one design problem at a time.
              </p>
              <p className="text-margin para">
                If I need to define myself in one sentence that would be a
                family person, father of a beautiful daughter, a sports fanatic,
                photography enthusiast, and tech-obsessed!!!
              </p>
            </div>
            <div className="my-img">
              <Tilt
                className="tilt"
                options={{
                  max: 25,
                  perspective: 1000,
                  scale: 1,
                  speed: 3000,
                  transition: true,
                }}
              >
                <img src={me} alt="Myself"></img>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
