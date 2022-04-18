import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [datas, setData] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div>
            <h2 className='services'>Services</h2>
            {
                datas.map(data => <Service 
                key={data.id}
                data={data}
                ></Service>)
            }
        </div>
    );
};

export default Services;