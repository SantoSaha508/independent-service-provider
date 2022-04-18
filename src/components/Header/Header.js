import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div className='photography'>
            <div>
            <h3>Photography world</h3>
            </div>
            <div>
            <Link to='/home'>Home
                <Link to="/banner"></Link>
            </Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                :
                <Link to="/login">Login</Link>
            }
            
            <Link to="/notfound"></Link>
            </div>
        </div>
    );
};

export default Header;