import React from "react";
import css from "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      {" "}
      <a href={e.ref}> {e.name} </a>
    </p>
  ));
}

function contactMe() {
  return (
    <div className="contactMe_container" id="contact">
      <div className="contactMe_data_links">
        <div>
          <p>Birmingham, UK</p>
          <p> Obiora Ezeasor</p>
          <p> obi1knube@hotmail.com</p>
        </div>
        <div>{createLinks()}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        Copyright&copy;{new Date().getFullYear()} Maintenance Engineering
        insider Ltd{" "}
      </div>
    </div>
  );
}

export default contactMe;
