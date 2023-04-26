import React from 'react'
import './navbar.css';


function Nav(){
    return(
    <div>
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
            HappyLife
        </a>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav"
            aria-expanded="false" 
            aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/home">
                        Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/getallrooms">Rooms</a>
                </li>

                <li className="nav-item">
                
                    <button className='blabla' href="/login">Sign Up</button>
                    
                </li>
                <li className="nav-item">
                    <button className='blabla1'>Login</button>
                </li>
               
            </ul>
        </div>
     </nav>
  </div>
  )
}

export default Nav