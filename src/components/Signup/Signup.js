import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <div>
            <div >
                <h2>Sign Up</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email </label> <br />
                        <input type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password </label><br />
                        <input type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirmPassword'>Confirm Password </label><br />
                        <input type="password" name="confirmPassword" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Signup;