import React from 'react'
import Lamp from "../assets/lamp_outlet_idea_electricity_120422_3840x2160.jpg";
function Carousel() {
  return (
    <>
        
        <div id="carouselExample" classNameName="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Lamp} className="w-100 h-25" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    
  )
}

export default Carousel