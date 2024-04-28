import cineMe from "../images/projectsIcon/cineMe.png";
import gameCoven from "../images/projectsIcon/gameCoven.png";
import ExpenseTracker from "../images/projectsIcon/ExpenseTracker.gif";
import weatherDashBoard from "../images/projectsIcon/weatherDashBoard.png";
import workDayScheduler from "../images/projectsIcon/work-day-Scheduler.gif";
import svgLogoMaker from "../images/projectsIcon/SVG-LogoMaker.png";
import socialLink from "../images/projectsIcon/socialLink.gif";
import eCommerce from "../images/projectsIcon/E-commerce-BackEnd.gif"
import passwordGenerator from "../images/projectsIcon/passwordGenerator.png"



const portfolioData = [
  {
    image: cineMe,
    link: "https://magmillen-dutka.github.io/CineMe/",
    desc: "CineMe",
    summary:
      "A user friendly application designed to view different ratings of Tv shows to help you decide the show you want to watch.",
    tech: "HTML |CSS| JavaScript| JQuery ",
  },
  {
    image: gameCoven,
    link: "https://github.com/Obi1knube/Game-Coven-3",
    desc: "Game Coven",
    summary:
      "Game Coven is an engaging and dynamic gaming blog and community platform. It offers users the ability to sign up, log in, create profiles, post gaming-related content, and interact through comments. ",
    tech: "HTML| CSS| JavaScript| Node.js| Express.js| MySQL| Handlebars.js",
  },
  {
    image: ExpenseTracker,
    link: " https://budgetbuddytracker.onrender.com/",
    desc: "Expense Tracker",
    summary:
      "ExpenseTracker is a web application that helps users track their expenses efficiently. It provides features for users to log their spending, manage their budget, and view insightful charts related to their spending. After users sign up or log in, they can log their spending, view and edit data",
    tech: "VITE| REACT| Chart.JS| FRAMER| JavaScript| Chakra Ui| Node.js| Apollo Server| Express.js| MongoDB| GraphQL",
  },
  {
    image: passwordGenerator,
    link: "https://obi1knube.github.io/Password-Generator-Obiora/",
    desc: "Password Generator",
    summary:
      " This app will allow user to randomly generate a password that meets certain criteria",
    tech: "JavaScript| HTML| CSS",
  },
  {
    image: weatherDashBoard,
    link: "https://obi1knube.github.io/Weather-Dashboard-Obiora/",
    desc: "Weather Dashboard",
    summary:
      "I accessed the data and funtionality of third-party API, by making requests with specific parameters to a URL",
    tech: "JavaScript| HTML| CSS",
  },
  {
    image: svgLogoMaker,
    link: "https://drive.google.com/file/d/1pXBVvzvX16WmDZ3CmcXXEYhIxEPdeCaW/view",
    desc: "SVG Logo Maker",
    summary:
      "The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.",
    tech: "JavaScript| Node.js|Inquirer",
  },
  {
    image: workDayScheduler,
    link: "https://obi1knube.github.io/Work-Day-Scheduler-Obiora/",
    desc: "Workday Scheduler",
    summary: "A simple Calendar app for scheduling your workday",
    tech: "JavaScript| HTML| CSS",
  },
  {
    image: socialLink,
    link: "https://drive.google.com/file/d/1Mk3DlUwrKDTHZlMP9VanMKd08coS-kX6/view",
    desc: "Social Network Back End or membership web App",
    summary: "An API for social Network, it uses a NoSQL database, so my website can handle large unstructured data ",
    tech: "MongoDB| JavaScript | Express.js | Insomnia",
  },
  {
    image: eCommerce,
    link: "",
    desc: "Object-Relational Mapping",
    summary: " The back end for an e-commerce site. I’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.",
    tech: "JavaScript| MySQL | Express.js",
  },
  {
    image: "",
    link: "",
    desc: "Note taker",
    summary: "",
    tech: "",
  },
  {
    image: "",
    link: "",
    desc: "Blogging page",
    summary: "",
    tech: "",
  },
];

export default portfolioData;
