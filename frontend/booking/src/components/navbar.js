import React from 'react'
import './navbar.css';

function Nav() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    function logout() {
        localStorage.removeItem('currentUser')
        window.location.href = '/login'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
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

                        {user ? (<>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {user.data.name}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/profile">Profile</a>
                                    <a class="dropdown-item" href="#" onClick={logout}>Log Out</a>
                                </div>
                            </div>
                        </>) : (
                            <>
                                <li className="nav-item">
                                    <button className='register' href="/register">Sign Up</button>

                                </li>
                                <li className="nav-item">
                                    <button className='login' href="/login">Login</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav