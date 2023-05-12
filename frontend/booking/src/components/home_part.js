import React from 'react'
import './home_part.css';

function Home() {
  return (
    <div id="carouselExampleControls" className="carousel slide w-120" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/146/867/628/luxury-hotel-wallpaper-preview.jpg" alt="First slide"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 " src="https://hips.hearstapps.com/hmg-prod/images/lpibo-ew-1656015868.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Second slide"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://hips.hearstapps.com/hmg-prod/images/0gacyp0-1656015781.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Third slide"></img>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

  )
}

export default Home
