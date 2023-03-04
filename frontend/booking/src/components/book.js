import React from 'react'
import './book.css';

function Booking(){
    return(
        <div>
            <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <button type="button" class="btn btn-primary">
    <i class="fas fa-search"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></i>
  </button>
  </div>
 
  
            
            <select class="form-select form-select-sm" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            
        </div>

      
    )
}

export default Booking