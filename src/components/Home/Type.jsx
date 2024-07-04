import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Fullstack  Developer",
              "Backend Developer Java/Spring",
              "Committed Open Source Contributor",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type