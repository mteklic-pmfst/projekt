import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './login.css';
import axios from 'axios';
import Loader from './loader.js';
import Error from './Error.js';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    // const navigate=useNavigate();

    async function login() {
        if (password !== "") {
            const user = {
                email,
                password,
            }

            console.log(user)
            try {
                setLoading(true)
                const result = await axios.post('http://localhost:3001/api/auth/login', user)
                // result.send(result.data)
                // console.log(result.data)
                setLoading(false)
                localStorage.setItem('currentUser', JSON.stringify(result))
                window.location.href = '/firstpage'
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(true)
            }
        }
        else {
            alert("Unesite lozinku")
        }
    }
    return (
        <div>
            {loading && (<Loader/>)}
            
            <div className='pocetna'>
                <div className='form'>
                    <div className='form-log'>
                        {error && (<Error message='Invalid Credentionals'/>)}
                        <div className='lag1'>
                            <h3>Login</h3>
                            <input type="text" className='form-control' placeholder='email'
                                id="username" value={email} onChange={(e) => (setEmail(e.target.value))}
                            />
                            <input type="password" className='form-control' placeholder='lozinka'
                                // id="pass" value={password} onChange={(e)=>(setPassword(e.target.value))}
                                id="pass" value={password} onChange={(e) => (setPassword(e.target.value))}
                            />
                            <button className='btnS' onClick={login}>Login</button>

                            <p className='registracijalogin'>
                                <button>Registriraj se</button>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login