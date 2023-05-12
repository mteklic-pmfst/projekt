import React from 'react'
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className='row landing '>
            <div className='col-md-12 text-center'>
                <h2>HappyLife</h2>
                <h1>Choose the best place for you!</h1>
                <Link to='/login'>
                    <button className='btn btn-dark'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing