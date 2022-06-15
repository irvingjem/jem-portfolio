import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Designer",
          "MERN Stack",
          "User Experience Designer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Type;
