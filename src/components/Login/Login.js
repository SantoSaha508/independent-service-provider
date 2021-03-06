
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate(); 
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user || user1){
        navigate(from, { replace: true });
      }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = (event) => {
        navigate('/signup');
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, emailRef.current.value)
        .then( () => {

        })
    }

    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-primary text-center mt-2'>Login</h2>
            <Form className='loginform' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='inputField' ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='inputField' ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <p>Loading...</p>
                }
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br /><br /> <hr /><hr />
                <button className='btn' onClick={handlePasswordReset}>Reset Password</button>
                <br /><br />
                <button className='btn' onClick={() => signInWithGithub()}>GitHub</button>
            </Form>
            <p>New to Photography world ? <span className='text-danger register' onClick={navigateRegister}>Create an Account</span></p>
        </div>
    );
};

export default Login;