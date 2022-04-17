import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='loginBox'>
            <div >
            <h2>login</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email </label> <br />
                    <input type="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor='password'>Password </label><br />
                    <input type="password" name="password" required />
                </div>
                <input className='form-submit' type="submit" value="Login" />
            </form>
            </div>
        </div>
    );
};

export default Login;