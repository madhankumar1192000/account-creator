import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function CreateForm(){

    const [data, setData] = useState({name:'', number:'', email:'', password:'', company:''})

    let navigate = useNavigate();

    let updateName = (event) => {
        setData( {...data, name: event.target.value})
    }
    let updateNumber = (event) => {
        setData( {...data, number: event.target.value})
    }
    let updateEmail = (event) => {
        setData( {...data, email: event.target.value})
    }
    let updatePassword = (event) => {
        setData( {...data, password: event.target.value})
    }
    let updateCompany = (event) => {
        setData( {...data, company: event.target.value})
    }


        return(
            <div className='form-container'>
                <h1 className='heading'>Create your PopX account</h1>
                <form className='forms'>
                    <div className='input-box'>
                        <label className="label" htmlFor='name'>Full Name<span className='star'>*</span></label>
                    <input onChange={updateName} id="name" type='text' value={data.name} className='input-style'/>
                    </div>
                    <div className='input-box'>
                        <label className="label" htmlFor='number'>Phone Number<span className='star'>*</span></label>
                    <input onChange={updateNumber} id="number" type='text' value={data.number} className='input-style'/>
                    </div>
                    <div className='input-box'>
                        <label className="label" htmlFor='email'>Email Address<span className='star'>*</span></label>
                    <input onChange={updateEmail} id="email" type='text' value={data.email} className='input-style'/>
                    </div>
                    <div className='input-box'>
                        <label className="label" htmlFor='password'>Password<span className='star'>*</span></label>
                    <input onChange={updatePassword} id="password" type='password' value={data.password} className='input-style'/>
                    </div>
                    <div className='input-box'>
                        <label className="label" htmlFor='company'>Company Name<span className='star'>*</span></label>
                    <input onChange={updateCompany} id="company" type='text' value={data.company} className='input-style'/>
                    </div>
                </form>
                    <button className ="create-btn" type="button" onClick={() => {navigate('/userProfile', {replace: true, state: {data}})}}>Submit</button>
            </div>
        )
    }

export default CreateForm