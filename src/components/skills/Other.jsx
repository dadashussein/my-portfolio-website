import React from 'react'

const Other = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Used Tech...</h3>
    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
        <i className='bx bxl-git'></i>
          <h3 className="skills__name">Git</h3>
        </div>
        <div className="skills__data">
        <i className='bx bxl-figma' ></i>
          <div>
            <h3 className="skills__name">Figma</h3>
          </div>
        </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
        <i className='bx bxl-visual-studio' ></i>
          <h3 className="skills__name">Visual Code</h3>
        </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
        <i className='bx bx-package' ></i>
          <h3 className="skills__name">WebPack</h3>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Other
