import React from 'react';
import image4 from '../../../../image/sertficate-01.png'
import image5 from '../../../../image/sertficate-02.png'
import image6 from '../../../../image/sertficate-03.png'

const Footer = () => {
    return (
        <div className="row">
            <div className="col-md-4 p-5">
                <img className="ml-5 p-3" style={{ alignSelf: 'center',height:'200px'}} src={image4} alt=""/>
                <h2>We Value Your Time</h2>
                <h6>Our tech support saves your time and energy and lets you enjoy your computer to the max.</h6>
            </div>
            <div className="col-md-4 p-5">
                <img className="ml-5 p-3" style={{ alignSelf: 'center',height:'200px'}} src={image5} alt=""/>
                <h3>Remote, Hyper-secure Connection</h3>
                <h6>You select the service you need, and our tech support does all the work through a remote, hyper-secure connection.</h6>
            </div>
            <div className="col-md-4 p-5">
                <img className="ml-5 p-3" style={{ alignSelf: 'center',height:'200px'}} src={image6} alt=""/>
                <h2>Customer Happiness</h2>
                <h6>our satisfaction is our #1 priority. We pledge to be by your side until you are satisfied with our services.</h6>
            </div>
        </div>
    );
};

export default Footer;