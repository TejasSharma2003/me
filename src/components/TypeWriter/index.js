import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css"
function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: ["Web developer!", "Reader","Designer","Student"],
        autoStart: true,
        loop: true,
      }}
    />

    // <Typewriter
    //   onInit={(typewriter) => {
    //     typewriter
    //       .typeString("Web developer!")
    //       .pauseFor(2000)
    //       .deleteAll()
    //       .typeString("Reader")
    //       .pauseFor(2000)
    //       .deleteAll()
    //       .typeString("Designer")
    //       .pauseFor(2000)
    //       .deleteAll()
    //       .typeString("Student")
    //       .pauseFor(2000)
    //       .deleteAll()

    //       .start();
    //   }}
    // />
  );
}

export default TypeWriter;
