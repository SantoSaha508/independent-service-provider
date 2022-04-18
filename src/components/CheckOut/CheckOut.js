import React from 'react';
import { useParams } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const {checkoutId} = useParams();
    return (
        <div className='checkoutpage'>
            <h1>check out page:{checkoutId}</h1>
            <div className='container checkoutcontainer'>
                <h3>Big offer for You</h3>
                <h4>In every occation we offer all of our customer a special discount.
                <br /> 

                </h4>
            </div>
            <div className='container offer'>
                <h1>Big offer in this Eid.</h1>
                <p>If you book me in this eid for photoshoot you will get flat 38% discount.</p>
                <h4>So, do't be late. Book now</h4>
            </div>
        </div>
    );
};

export default CheckOut;