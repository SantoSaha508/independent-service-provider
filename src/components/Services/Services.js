import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {
    const [datas, setData] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div>
            <h2 className='servidesHeader'>Services</h2>
            <div className='serviceCard container'>
            {
                datas.map(data => <Service 
                key={data.id}
                data={data}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;