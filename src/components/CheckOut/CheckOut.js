import React from 'react';
import { useParams } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const {checkoutId} = useParams();
    return (
        <div>
            <h1>check out page:{checkoutId}</h1>
        </div>
    );
};

export default CheckOut;