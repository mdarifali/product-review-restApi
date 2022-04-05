import React from 'react';
import HomeReview from '../HomeReview/HomeReview';
import useReviewData from '../hookes/useReviewData';
import Img from '../img/pizza-2.jpg'

const Home = () => {

    const [reviews, setRevies] = useReviewData([]);

    return (
        <div className='container my-5'>
            <div className="card mb-3 border-0">
                <div className="row g-4">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title my-3">New Cheese <span className='text-danger fw-bold'>BURST</span></h1>
                            <h2 className="card-title">Super Cheesy <br />Super Tasty</h2>
                            <p className="card-text my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio nulla fugiat, <br />
                                placeat laudantium molestias voluptas veritatis eius tenetur quidem eos ratione laboriosam ut libero.</p>
                            <a href="/" className="btn btn-success my-3">ORDER NOW</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={Img} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>

                <div className="row my-5">

                    {
                        reviews.map(pd => <HomeReview 

                            key = {pd.id}
                            data = {pd}

                        />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;