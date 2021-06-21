import React, { useEffect, useState } from 'react';
import ReviewDetails from './Review/ReviewDetails';


const Reviews = () => {

    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data));
    })

    return (
        <section  style={{backgroundColor:'#508393'}}>
            <h1 className='p-5'>Testimonials</h1>
            <div className="row m-5 p-5">
            
            {
                   review.map(Review => <ReviewDetails Review={Review}></ReviewDetails>)
            }
            
            </div>
        </section>
    );
};

export default Reviews;