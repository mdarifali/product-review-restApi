import React from 'react';
import './Review.css'
const Review = ({ data }) => {

    const { name, img, ratings, comments } = data;

    return (
        <div className='col-md-6'>
            <div className="card shadow-lg">
                <div className="card-body h-100">
                    <div className="text-center">
                        <img className='user-img mb-2' src={img} alt="" />
                        <h4>{name}</h4>
                        <img className='rating-img mb-2' src={ratings} alt="" />
                        <p>{comments}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;