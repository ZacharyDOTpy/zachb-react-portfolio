import passwordGenerator from "../docs/Password Generator.png";
import weatherDashboard from "../dos/API Weather Dashboard.png";
import workDayScheduler from "../docs/Work Day Scheduler.png";
import portfolio from "../docs/Portfolio.png";

const projects = [
  {
    title: "Password Generator",
    description:
      "Developed a Password Generator tool capable of creating secure passwords based on user-defined criteria.",
    image: passwordGenerator,
    github: "https://github.com/ZacharyDOTpy/password-generator-js",
    deployed: "https://zacharydotpy.github.io/password-generator-js/",
  },
  {
    title: "Weather Dashboard",
    description:
      "Designed and implemented a Weather Dashboard application that provides real-time weather updates and forecasts for user-specified locations.",
    image: weatherDashboard,
    github: "https://github.com/ZacharyDOTpy/api-weather-app",
    deployed: "https://zacharydotpy.github.io/api-weather-app/",
  },
  {
    title: "Work Day Scheduler",
    description:
      "Created a Work Day Scheduler application allowing users to plan and organize their daily tasks.",
    image: workDayScheduler,
    github: "https://github.com/ZacharyDOTpy/daily-schedule",
    deployed: "https://zacharydotpy.github.io/daily-schedule/",
  },
  {
    title: "Portfolio",
    description:
      "Developed a portfolio website to showcase my projects and skills to potential employers.",
    image: portfolio,
    github: "https://github.com/ZacharyDOTpy/portfolio-challenge",
    deployed: "https://zacharydotpy.github.io/portfolio-challenge/",
  },
  {
    title: "Password Generator",
    description:
      "Developed a Password Generator tool capable of creating secure passwords based on user-defined criteria.",
    image: passwordGenerator,
    github: "https://github.com/ZacharyDOTpy/password-generator-js",
    deployed: "https://zacharydotpy.github.io/password-generator-js/",
  },
];

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="projectTile" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <div className="projectLinks">
              <a href={project.github}>GitHub</a>
              <a href={project.deployed}>Deployed</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;