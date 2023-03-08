import React from 'react'
import './footer.css';

function Footer(){
    return(
        
    <div class="d-grid gap-2 d-md-block">
        

    	<button class="btn btn-danger" type="button">
      <i class="fa-brands fa-youtube"></i>
    </button>
    <button class="btn btn-info" type="button">
      <i class="fa-brands fa-twitter text-white"></i>
    </button>
    <button class="btn btn-primary" type="button">
      <i class="fa-brands fa-facebook"></i>
    </button>
    <button class="btn btn-danger" type="button">
      <i class="fa-brands fa-instagram"></i>
    </button>
    <button class="btn btn-success" type="button">
      <i class="fa-brands fa-whatsapp"></i>
    </button>
    <button class="btn btn-dark" type="button">
      <i class="fa-brands fa-github"></i>
    </button>
    
    </div>

    )
}

export default Footer