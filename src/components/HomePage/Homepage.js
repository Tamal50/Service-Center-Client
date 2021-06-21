import React from 'react';
import Home from './Home/Home/Home';
import Reviews from './Reviews/Reviews';
import Service from './ServiceArea/Service';
import CustomerSuggetion from './CustomerSuggetion/CustomerSuggetion'
import Footer from './Home/Footer/Footer';

const Homepage = (props) => {
    const {handleCart} = props;
    return (
        <div>
            <Home></Home>
            <Service handleCart={handleCart}></Service>
            <CustomerSuggetion></CustomerSuggetion>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;