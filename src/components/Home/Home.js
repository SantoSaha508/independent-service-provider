import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* Baner section */}
            <div className='picture'>
                <img className='picture' src="https://images.ctfassets.net/u0haasspfa6q/2r74kh3TFj9jCWSdguDQBp/f30141a98cc7c0a9254df70e675ba20a/best-dslr-cameras-for-beginners" alt="no" />
            </div>
            {/* service section */}
            <div>
                <h2 className='services'>Services</h2>
                <div className='card'>
                    <div>
                        <img className='cardPicture' src="https://static.onecms.io/wp-content/uploads/sites/34/2018/03/16/rebecca-clay-wedding-north-carolina-ceremony-103228806-2000.jpg" alt="" />
                        <h3>Name: Wedding Photography</h3>
                        <h4>Price: $200</h4>
                        <p>We are expert in wedding photography. Frame your wedding by us.</p>
                        <button className='bookBtn'>Book Now</button>
                    </div>
                    <div>
                    <img className='cardPicture' src="https://bambiniphoto.sg/wp-content/uploads/Kids-party-children-party-event-photography-singapore-014.jpg" alt="" />
                        <h3>Name: BirthDay Photography</h3>
                        <h4>Price: $150</h4>
                        <p>We are providing Birthday  photography. Frame your happy moments with us.</p>
                        <button className='bookBtn'>Book Now</button>
                    </div>
                    <div>
                    <img className='cardPicture' src="https://jonathantaylorphotography.com/wp-content/uploads/2019/01/photography-studio-rental-bangkok.jpg" alt="" />
                        <h3>Name: Fashion Photography</h3>
                        <h4>Price: $250</h4>
                        <p>We are expert in fashon  photography. Our team members are heighly profession.</p>
                        <button className='bookBtn'>Book Now</button>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className='footersection'>
            <h2> © Photography World</h2>
            <h4>Phone: 01797437617</h4>
            <h5>For more quire please visite my office</h5>
            <p>Location: ( level-2, shop-201 ) A.R plaza, Dhanmondi, Dhaka</p>
            </div>
        </div>
    );
};

export default Home;