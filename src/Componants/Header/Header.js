import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/home">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <div className='nav-item'>
                            <Link className='nav-link' to='/home'>Home</Link>
                        </div>
                        <div className='nav-item'>
                            <Link className='nav-link' to='/reviews'>Reviews</Link>
                        </div>
                        <div className='nav-item'>
                            <Link className='nav-link' to='/dashborad'>Dashborad</Link>
                        </div>
                        <div className='nav-item'>
                            <Link className='nav-link' to='/home'>About</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;