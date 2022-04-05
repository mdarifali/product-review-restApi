import HomeReview from '../HomeReview/HomeReview';
import useReviewData from '../hookes/useReviewData';
import Img from '../img/pizza-2.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

    const [reviews, setRevies] = useReviewData();


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

                <div className="row g-4 my-5">
                    <h2 className='text-center mb-4'> Our Customer Reviews</h2> <hr />
                    {
                        reviews.slice(0, 3).map(pd => <HomeReview

                            key = {pd.id}
                            data = {pd}

                        />)
                    }
                    <div className='nav-item text-center'>
                    <button className='btn btn-info'>
                        <Link className='nav-link text-dark' to='/reviews'>Sell All Reviews</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;