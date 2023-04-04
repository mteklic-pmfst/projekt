import React, {useState,useEffect} from 'react'
import './registration.css';

function Registration() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[cpassword,setcpassword]=useState('')

    function register(){
        if(password ===cpassword){
            const user={
                name,
                email,
                password,
                cpassword
            }
            console.log(user)
        }
        else{
            alert("Password not correct!Try again")
            setPassword('')
            setcpassword('')
        }
    }
  return (
    <div className='pocetni'>
        <div className='form'>
            <div className='form-reg'> 
                <div className='lag'>
                <h3>Registracija</h3>
                    <input type="text" className='form-control' placeholder='ime' 
                    value={name} onChange={(e)=>(setName(e.target.value))}/>
                    <input type="text" className='form-control' placeholder='email'
                    value={email} onChange={(e)=>(setEmail(e.target.value))}
                    />
                    <input type="text" className='form-control' placeholder='lozinka'
                    value={password} onChange={(e)=>(setPassword(e.target.value))}
                    />
                    <input type="text" className='form-control' placeholder='potvrdi lozinku'
                    value={cpassword} onChange={(e)=>(setcpassword(e.target.value))}
                    />
                    <button className='btnS' onClick={register}>Registriraj se</button>
                    <p className='loginregistracija'>
                        <button>Prijavi se</button>
                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Registration