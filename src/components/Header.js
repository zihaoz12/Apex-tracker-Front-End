import React from 'react';
import logoImg from '../assets/logo.png';
import './header.css';

const Header = ()=>{
    return(
    <div className="header">
        <img src={logoImg}  alt=""></img>
    </div>
    )
}

export default Header;