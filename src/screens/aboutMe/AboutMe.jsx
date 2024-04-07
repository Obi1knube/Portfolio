import React from "react";
import "./aboutMe.css";
import myPic from "../../images/myPic.png";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={myPic} alt=" person icon" />
      </div>
      <div className="about_text">
        <h1>ABOUT ME</h1>
        <p>
          A driven and outcome-focused professional with a keen interest in
          transitioning to a dynamic role as a full stack Web Developer.
          Proficient in a comprehensive suite of web development technologies
          including HTML, CSS, JavaScript, Bootstrap, jQuery, Node.js, ES6, OOP,
          Express.js, MYSQL, NOSQL, MongoDB, and Models-Views-Controllers.
          Having graduated as an Electronic Engineer from a distinguished UK
          university and holding active membership in the Institute of
          Engineering and Technology (IET), I bring nearly two decades of rich
          experience as an Electrical/Mechanical Maintenance Engineer. My
          expertise spans various sectors, ranging from esteemed Commercial
          Laundries, Food and Drink Industries, to Automotive Industries and
          Waste Recycling to Energy Plants, as well as extensive experience in
          Electrical Installations. I am now eagerly seeking to leverage my
          strong foundation in engineering and technical acumen to excel in the
          realm of Web Development or embark on an exciting journey in Embedded
          Systems Development. With a steadfast commitment to continuous
          learning, I am deeply passionate about staying ahead of the curve with
          emerging technologies, demonstrating a proven ability to adapt
          seamlessly to evolving industry landscapes.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
