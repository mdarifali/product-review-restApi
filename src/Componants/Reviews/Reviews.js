import React from 'react';
import useReviewData from '../hookes/useReviewData';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setRevies] = useReviewData([]);

    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>All Users Reviews & Comments</h1>
            <div className='row g-5'>

                    {
                        reviews.map(pd => <Review

                            key={pd.id}
                            data={pd}

                        ></Review>)
                    }
            </div>
        </div>
    );
};

export default Reviews;