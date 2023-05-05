import React from 'react'
import './home_part.css';


function Home(){
    return(

        <div id="carouselExampleControls" class="carousel slide w-120" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/146/867/628/luxury-hotel-wallpaper-preview.jpg" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 " src="https://hips.hearstapps.com/hmg-prod/images/lpibo-ew-1656015868.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://hips.hearstapps.com/hmg-prod/images/0gacyp0-1656015781.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    )
}

export default Home
