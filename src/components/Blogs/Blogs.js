import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Defference between Authorization and Authentication?</h2>
            <p>
                1. Authentication usually requires a username and a password. <br />
                2. It determines whether user is what he claims to be. <br />
                3. Authentication confirms your identity to grant access to the system. <br />
                4. Authentication is the first step of authorization so always comes first.
            </p> <hr /><hr />
            <h2>Why are you use firebase? What others options do you have to implement authentication?</h2>
            <p>
                With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if we want to use a pre-built authentication UI, we have it at our disposal as well. <br />
                All of these can save us a significant amount of development cost, as we don't need to pay as high as developing from scratch. Firebase pricing is equally flexible. Although there are pay-as-you-go services, we can start on a free plan and use primary features if our app is still at its prime.
            </p><hr /><hr />
            <h3>What other services does firebase provide other than authentication?</h3>
            <p>
            There are many services which Firebase provides, they are : <br />
                1. Cloud Firestore. <br />
                2. Cloud Functions. <br />
                3. Hosting. <br />
                4. Cloud Storage. <br />
                5. Google Analytics. <br />
                6. Predictions. <br />
                7. Cloud Messaging.
            </p>
        </div>
    );
};

export default Blogs;