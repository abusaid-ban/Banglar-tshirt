import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
         <Link to="/">Home</Link>
         <Link to="/orders">OrderReviews</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;<h2>This is  header part</h2>