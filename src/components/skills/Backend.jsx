import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">JavaScript</h3>
    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
        <i className='bx bxl-jquery'></i>
          <h3 className="skills__name">jQuery</h3>
        </div>
        <div className="skills__data">
        <i className="bx bxl-react"></i>
          <div>
            <h3 className="skills__name">React</h3>
          </div>
        </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
        <i class='bx bxl-redux'></i>
          <h3 className="skills__name">Redux</h3>
        </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
          <i className="bx bxl-react"></i>
          <h3 className="skills__name">Next JS</h3>
        </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
        <i className='bx bxl-typescript'></i>
          <h3 className="skills__name">TypeScript</h3>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Backend;
