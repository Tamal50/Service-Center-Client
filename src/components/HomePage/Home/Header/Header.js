import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className="Header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;