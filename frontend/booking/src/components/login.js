import React, {useState,useEffect} from 'react'
import './login.css';

function Login() {
    
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    

    function login(){ 
        const user={
                email,
                password,  
            }
            console.log(user)
    }
  return (
    <div className='pocetna'>
        <div className='form'>
            <div className='form-log'> 
                <div className='lag1'>
                <h3>Prijava</h3>
                    <input type="text" className='form-control' placeholder='email'
                    value={email} onChange={(e)=>(setEmail(e.target.value))}
                    />
                    <input type="text" className='form-control' placeholder='lozinka'
                    value={password} onChange={(e)=>(setPassword(e.target.value))}
                    />
                    <button className='btnS' onClick={login}>Prijavi se</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Login