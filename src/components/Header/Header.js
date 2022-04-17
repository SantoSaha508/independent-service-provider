import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='photography'>
            <div>
            <h3>Photography world</h3>
            </div>
            <div>
            <Link to='/home'>Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
            <Link to="/notfound"></Link>
            </div>
        </div>
    );
};

export default Header;