import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink >
                <NavLink to="/review">Order review</NavLink >
                <NavLink to="/inventory">Manage Inventory</NavLink >
                <br />
            </nav>
        </div>
    );
};

export default Header;