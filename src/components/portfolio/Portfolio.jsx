import React from "react";
import "./portfolio.css";
import { useState, useEffect } from "react";
const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const fetchPortfolio = async () => {
    const response = await fetch(
      "https://api.github.com/users/dadashussein/repos"
    );
    const data = await response.json();
    const filtered = data.filter(
      (project) =>
        project.name === "movie-app" ||
        project.name === "weather-api" ||
        project.name === "todo-app"
    );
    setPortfolio(filtered);
  };
  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <h3 className="portfolio__title">My Projects</h3>
      <div className="portfolio__container">
        {portfolio.map((project, idx) => {
          if (project.name === "movie-app") {
            project.name = "Movie App";
          }
          if (project.name === "weather-api") {
            project.name = "Weather App";
          }
          if (project.name === "todo-app") {
            project.name = "Todo App";
          }

          const changeIcon = (project) => {
            if (project.name === "Movie App") {
              return "bx bx-camera-movie";
            }
            if (project.name === "Weather App") {
              return "bx bx-cloud-drizzle";
            }
            if (project.name === "Todo App") {
              return "bx bx-check-square";
            }
          };

          return (
            <div className="portfolio__card" key={idx}>
              <p className="card-name">
                {project.name}
                <i className={changeIcon(project)}></i>
              </p>
              <div className="card-description">
                <p>{project.description}</p>
                <button className="card-button">
                  <a href={project.homepage} rel="noreferrer" target="_blank">
                    Visit
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
