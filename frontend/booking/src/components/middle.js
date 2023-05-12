import React from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

function Mid() {
    function search() {
        window.location.href = '/home'
    }
    return (
        <div className='search'>
            <div className='ItemS'>
                <button className='btn1' onClick={search}>Pretraži</button>
            </div>
        </div>
    )

}



export default Mid