import React from 'react';
import './Review.css'
const Review = ({data}) => {

    const {name, img, ratings, comments} = data;

    return (
        <div className='card'>
            <div className="card-body">
                <div className="d-flex align-items-center m-3">
                    <img className='user-img' src={img} alt="" />
                    <h4>{name}</h4>
                </div>
                <img className='rating-img' src={ratings} alt="" />
                <p></p>
            </div>
        </div>
    );
};

export default Review;