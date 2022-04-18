import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ data }) => {
    const { id, name, price, img, description } = data;

    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate(`/home/${id}`)
    }

    return (
        <div className='container'>
            <div className='serviceContainer'>
                <img className='cardPicture' src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Price: $ {price}</h4>
                <p>Description: {description}</p>
                <button onClick={() => handleCheckOut(id)} className='bookBtn'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;