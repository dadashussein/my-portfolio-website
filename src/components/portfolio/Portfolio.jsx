import React from "react";
import "./portfolio.css";
import { useState, useEffect } from "react";
import Movie from "../../assets/movie.png";
import Weather from "../../assets/weather.png";
const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  console.log(portfolio);
  const fetchPortfolio = async () => {
    const response = await fetch(
      "https://api.github.com/users/dadashussein/repos"
    );
    const data = await response.json();
    const filtered = data.filter(
      (project) =>
        project.name === "movie-app" || project.name === "weather-api"
    );
    setPortfolio(filtered);
  };
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const imageChanger = (name) => {
    switch (name) {
      case "Movie App":
        return Movie;
      case "Weather App":
        return Weather;
      default:
        return null;
    }
  };

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

          const changeIcon = (project) => {
            if (project.name === "Movie App") {
              return "bx bx-camera-movie";
            }
            if (project.name === "Weather App") {
              return "bx bx-cloud-drizzle";
            }
          };
          return (
            <div className="portfolio__card" key={idx}>
              <p className="card-name">
                {project.name}
                <i className={changeIcon(project)}></i>
              </p>
              <img src={imageChanger(project.name)} alt="" />
              <div className="card-description">
                <p>{project.description}</p>
                <div className="card-visit">
                  <button className="card-button">
                    <a href={project.homepage} rel="noreferrer" target="_blank">
                      Live
                    </a>
                  </button>
                  <button className="card-button">
                    <a href={project.html_url} rel="noreferrer" target="_blank">
                      Source code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
