import React from 'react';

const ReviewDetails = ({Review}) => {
    return (
            <div className="col-sm-4">
            <h1>Name: {Review.Name}</h1>
            <p>{Review.Review}</p>
        </div>
    );
};

export default ReviewDetails;