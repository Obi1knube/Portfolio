import React from "react";
import { ReactTyped } from "react-typed";
import "./header.css";
function Header() {
  return (
    <div className="main-Info">
      <h1> Who am I?</h1>
      <ReactTyped
        strings={[
          "",
          " A Software Engineer",
          "Also Known as",
          "Front-End Developer",
          "Back-End Developer",
          "Full  stack Developer",
          "and!",
          "a Multi-skilled Engineer",
          "",
          "",
        ]}
        typespeed={40}
        backspeed={50}
        loop
      ></ReactTyped>
    </div>
  );
}

export default Header;
