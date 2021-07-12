import React from 'react'

import './Header.css'
import image from './index.png'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={image} alt="logo" className="header-left__image"></img>
                <a href="#/">Daily Booking</a>
                <a href="#/">Weekly Booking</a>
                <a href="#/">Monthly Booking</a>
                <a href="#/">Group / Coorperate</a>
            </div>
            <div className="header-right">
                <a href="#/">Contact Us</a>
                <button className="bttn">Host With Us</button>
                <span style={{'font-size':'30px'}}>&#9786;</span>
                <span style={{'font-size':'30px'}}>&#9776;</span>
            </div>
        </div>
    )
}

export default Header
