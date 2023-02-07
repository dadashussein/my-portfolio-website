import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">CSS </h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-bootstrap"></i>
            <h3 className="skills__name">Bootstrap</h3>
          </div>
          <div className="skills__data">
            <i class="bx bxl-sass"></i>
            <div>
              <h3 className="skills__name">Sass</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-tailwind-css"></i>
            <h3 className="skills__name">Tailwind</h3>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-css3"></i>
            <h3 className="skills__name">Material UI</h3>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-css3"></i>
            <h3 className="skills__name">Styled</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
