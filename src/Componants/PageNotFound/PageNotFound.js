import React from 'react';
import { Link } from 'react-router-dom';
import Gif from '../img/404.gif';

const PageNotFound = () => {
    
    return (
        <div className='container my-3'>
            <div className='text-center'>
                <img className='w-75' src={Gif} alt="" />
                <h2 className='my-3'>Page Not Found!!</h2>
                <div className='nav-item my-4'>
                        <button className='btn btn-dark'>
                            <Link className='nav-link text-light' to='/'> Go Home Page</Link>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default PageNotFound;