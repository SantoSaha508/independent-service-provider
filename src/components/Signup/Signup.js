import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

const handleRegister = event => {
    event.preventDefault();
}

    return (
        <div className='register-form'>
            <h2>Sign Up</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your email' required /><br />
                <input type="password" name="password" id="" placeholder='Password' required /><br />
                <input type="submit" value="Register" />
            </form>
            <p>Allready have an account ? <span className='text-danger register' onClick={navigateLogin}>Please Login</span></p>
        </div>
    );
};

export default Signup;