/* eslint-disable prettier/prettier */
import React from "react";
import '../Styles/Navbar.css'
import Logo from '../../../assets/logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} style={{width: '10vw', marginLeft: '2.5vw', marginTop: '1vh'}} alt="logo"/>
        </div>
    );
}

export default Navbar;
