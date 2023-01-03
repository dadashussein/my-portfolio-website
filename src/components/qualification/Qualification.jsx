import React from "react";
import "./qualification.css";
import { useState } from "react";

const Qualification = () => {
  const [toogleState, setToogleState] = useState(1);

  const toogleTab = (index) => {
    setToogleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toogleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toogleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toogleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toogleTab(2)}
            data-target="#work"
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toogleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Hidrometeorology</h3>
                <span className="qualification__subtitle">
                  National Aviation Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__icon"></i>
                  2016 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Frontend Developer
                </h3>
                <span className="qualification__subtitle">
                  Study at Udemy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__icon"></i>
                  2021- 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toogleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__icon"></i>
                  2021 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HTML, CSS, JavaScript </h3>
                <span className="qualification__subtitle">
                  Freelance
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__icon"></i>
                  2021 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
