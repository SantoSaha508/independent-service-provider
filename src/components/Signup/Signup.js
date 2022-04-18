import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';


const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    const varification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            })
    }


    if (user) {
        varification();
        navigate('/login');
    }



    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confitmPassword.value;
        console.log(name, email, password, confirmPassword);

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2>Sign Up</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your email' required /><br />
                <input type="password" name="password" id="" placeholder='Password' required /><br />
                <input type="password" name="confitmPassword" id="" placeholder='confirm Password' required /><br />
                <input className='signupBtn' type="submit" value="Register" />
            </form>
            <p>Allready have an account ? <span className='text-danger register' onClick={navigateLogin}>Please Login</span></p>
        </div>
    );
};

export default Signup;