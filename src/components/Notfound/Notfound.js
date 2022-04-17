import React from 'react';
import './Notfound.css'

const Notfound = () => {
    return (
        <div className='notfound'>
            <h1>Opps!</h1>
            <h3>404-PAGE NOT FOUND</h3>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <button className='btn'>Go To Home</button>
        </div>
    );
};

export default Notfound;