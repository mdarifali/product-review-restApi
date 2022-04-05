import React from 'react';
import useReviewData from '../hookes/useReviewData';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setRevies] = useReviewData([]);

    return (
        <div className='container my-5'>
            <h1 className='text-center'>All Users Reviews: {reviews.length}</h1>
            <div>
            {
                reviews.map(pd => <Review 
                
                    key= {pd.id}
                    data = {pd}
                
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;