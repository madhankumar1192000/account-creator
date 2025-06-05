import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className='home-container'>
            <h1 className='home-heading'>Welcome to PopX</h1>
            <p className='home-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/createNew">
            <button type='button' className='create-btn'>Create Account</button>
            </Link>
            <Link to="/registeredUser">
            <button type='button' className='login-btn'>Already Registered? Login</button>
            </Link>
        </div>
    )
}

export default Home;