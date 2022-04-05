import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../img/logo.png';
import './Header.css';

const Header = () => {

    return (
        <nav id='nav-bar' className="navbar navbar-expand-lg navbar-light p-2">
            <div className="container">
                <a className="navbar-brand" href="/home">
                    <img id='logo' src={Logo} alt="" /> PizzaHant
                </a>
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
                            <Link className='nav-link' to='/blogs'>Blogs</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;