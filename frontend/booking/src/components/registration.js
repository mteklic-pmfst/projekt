import React, { useState } from 'react'
import './registration.css';
import axios from 'axios';
import Loader from './loader.js';
import Error from './Error.js';
import Success from './Success';
import { Link } from 'react-router-dom';

function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }

            try {
                setLoading(true)
                const result = await axios.post('http://localhost:3001/api/auth/register', user)
                setLoading(false)
                setSuccess(true)

                setName('')
                setEmail('')
                setPassword('')
                setcpassword('')

            } catch (error) {
                console.log(error);
                setLoading(false)
                setError(true)
            }
        }
        else {
            alert("Password not correct!Try again")
            setPassword('')
            setcpassword('')
        }
    }
    return (
        <div>
            {loading && (<Loader />)}
            {error && (<Error />)}

            <div className='pocetni'>
                <div className='form'>
                    <div className='form-reg'>
                        <div className='reg'>
                            {success && (<Success message='Register Success' />)}
                            <h3>Sign up</h3>
                            <input type="text" className='form-control' placeholder='name'
                                value={name} onChange={(e) => (setName(e.target.value))} />
                            <input type="text" className='form-control' placeholder='email'
                                value={email} onChange={(e) => (setEmail(e.target.value))}
                            />
                            <input type="password" className='form-control' placeholder='password'
                                value={password} onChange={(e) => (setPassword(e.target.value))}
                            />
                            <input type="password" className='form-control' placeholder='confirm password'
                                value={cpassword} onChange={(e) => (setcpassword(e.target.value))}
                            />
                            <button className='btnS' onClick={register}>Sign up</button>
                            <p className='loginregistracija'>
                                <button>
                                    <Link to='/login'>Login</Link>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration