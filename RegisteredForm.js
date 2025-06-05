import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function RegisteredForm(){

    const [data, setData] = useState({email:'', emailPassword:''})

    let navigate = useNavigate();

    let updateName = (event) => {
        setData( {...data, email: event.target.value})
    }
    let updateEmail = (event) => {
        setData( {...data, emailPassword: event.target.value})
    }

        return(
            <div className='form-container'>
                <h1 className='heading'>Signin to your PopX account</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <form className='forms'>
                    <div className='input-box'>
                        <label className="label" htmlFor='name'>Email Address</label>
                    <input onChange={updateName} id="name" type='text' value={data.email} className='input-style'/>
                    </div>
                    <div className='input-box'>
                        <label className="label" htmlFor='email'>Password</label>
                    <input onChange={updateEmail} id="email" type='text' value={data.emailPassword} className='input-style'/>
                    </div>
                </form>
                    <button className ="create-btn" type="button" onClick={() => {navigate('/userProfile', {replace: true, state: {data}})}}>Login</button>
            </div>
        )
    }

export default RegisteredForm