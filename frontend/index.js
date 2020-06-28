import { initializeBlock } from "@airtable/blocks/ui";
import React from "react";

function Smeagol() {
  // YOUR CODE GOES HERE
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#3383F6",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>👋🏽 Hello!</h1>
      <h2>
        I'm Dr. Rohrer, an educational psychologist who's going to help you get
        better control of your classroom.
      </h2>
    </div>
  );
}

initializeBlock(() => <Smeagol />);
