import React from 'react'
import './navbar.css';

function Nav(){
    return(
    <div>
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
            HappyLife
        </a>
        <button 
            class="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav"
            aria-expanded="false" 
            aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Početna</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">O nama</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sobe</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Registracija</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Prijava</a>
                </li>
               
            </ul>
        </div>
     </nav>
  </div>
  )
}

export default Nav