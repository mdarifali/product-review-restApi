import HomeReview from '../HomeReview/HomeReview';
import useReviewData from '../hookes/useReviewData';
import Img1 from '../img/pizza-1.jpg'
import Img2 from '../img/pizza-2.jpg'
import Img3 from '../img/pizza-3.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

    const [reviews, setRevies] = useReviewData();


    return (
        <div className='container my-5'>
                <div className="row g-4 my-5">
                    <div className="col-md-6">
                        <div className="card-body">
                            <h1 className="card-title fw-bolder my-3">New Cheese <span className='text-danger fw-bolder'>BURST</span></h1>
                            <h1 className="card-title fw-bolder">Big Taste Big Value</h1>
                            <p className="card-text text-dark my-4">Any 12" Signature Pizza + 12" Garlic Cheese Fingers for <br /> only <span className='fs-2 fw-bold text-danger'>$23.99!</span>  </p>
                            <a href="/" className="btn btn-danger my-3">ORDER NOW!</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Img1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Img2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Img3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 my-5">
                    <h2 className='fw-bold text-center mb-4'> Our Customer Reviews</h2> <hr />
                    {
                        reviews.slice(0, 3).map(pd => <HomeReview

                            key={pd.id}
                            data={pd}

                        />)
                    }
                    <div className='nav-item text-center'>
                        <button className='btn btn-info'>
                            <Link className='nav-link text-dark' to='/reviews'>See All Reviews</Link>
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default Home;