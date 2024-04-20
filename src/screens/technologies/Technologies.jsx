import React from "react";
import "./technologies.css";

import ReactOriginalIcon from "react-devicons/react/original";
import JavascriptOriginalIcon from "react-devicons/javascript/original";
import Css3OriginalIcon from "react-devicons/css3/original";
import Html5OriginalIcon from "react-devicons/html5/original";
import NodejsOriginalIcon from "react-devicons/nodejs/original";
import ExpressOriginalIcon from "react-devicons/express/original";
import JqueryOriginalIcon from "react-devicons/jquery/original";
import GitOriginalIcon from "react-devicons/git/original";
import MongodbOriginalIcon from "react-devicons/mongodb/original";
import MysqlOriginalIcon from "react-devicons/mysql/original";
import SequelizeOriginalIcon from "react-devicons/sequelize/original";
import HerokuOriginalIcon from "react-devicons/heroku/original";
import { techs } from "../../helpers/techs";

function Technologies() {
  return (
    <div className="technologies_container" id="technologies">
      <div>
        <h1 style={{ textAlign: "center" }}>
          Some of the technologies that I use
        </h1>
      </div>
      <div className=" tech_cards_container">
        {techs.map((e, idx) => {
          let IconComponent = null;
          let iconSize = "10rem";
          switch (e.iconName) {
            case "react":
              IconComponent = ReactOriginalIcon;
              break;
            case "javascript":
              IconComponent = JavascriptOriginalIcon;
              break;
            case "css3":
              IconComponent = Css3OriginalIcon;
              break;
            case "html5":
              IconComponent = Html5OriginalIcon;
              break;
            case "nodejs":
              IconComponent = NodejsOriginalIcon;
              break;
            case "mongodb":
              IconComponent = MongodbOriginalIcon;
              break;
            case "mysql":
              IconComponent = MysqlOriginalIcon;
              break;
            case "express":
              IconComponent = ExpressOriginalIcon;
              break;
            case "jquery":
              IconComponent = JqueryOriginalIcon;
              break;
            case "git":
              IconComponent = GitOriginalIcon;
              break;
            case "sequelize":
              IconComponent = SequelizeOriginalIcon;
              break;
            case "heroku":
              IconComponent = HerokuOriginalIcon;
              break;

            default:
              IconComponent = () => null; // Default case to render nothing
              break;
          }
          return (
            <a
              key={idx}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tech_icon"
            >
              <IconComponent
                className="tech_card"
                style={{ fontSize: iconSize }}
              />
              <span style={{ margin: "5px", fontSize: "1.5rem" }}>
                {e.name}{" "}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
