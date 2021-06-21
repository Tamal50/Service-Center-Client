import React from 'react';
import ServiceImage from '../../../../image/tistio-ZO0weaaDrBs-unsplash.jpg'

const HeaderMain = () => {
    return (
        <main  className="row">
            <div className="col-sm-5 offset-sm-1">
                <h1>THE ONLY COMPUTER REPAIR SERVICE YOU NEED!</h1>
                <p> Our experienced technicians provide excellent technical support for customers across the country.

                With more than a decade of experience, we can help you get your PC, MAC, or laptop up and running in no time, whether it be an on-site visit to your home or office, or even online! In many states we can fix your computer issues the same day. We also provide complete repair service for networks, printers, and other computer hardware. Our online services are completely secure, and you can even watch every step of the process!</p>
            </div>
            <div className="col-sm-6 ">
                <img src={ServiceImage} alt="" className="img-fluid w-75" />
            </div>
        </main>
    );
};

export default HeaderMain;