import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://twitter.com/dadashussein"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/dadashussein/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/dadashussein"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
