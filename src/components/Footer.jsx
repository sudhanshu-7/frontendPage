
                // eslint-disable-next-line
import React from 'react'

import './Footer.css'
import FooterLinks from './UIComponents/FooterLinks'
import image from './index.png'
const Footer = () => {

    return (
        <>
         <div className="main">
         <div className = "footer">
            <div>
                <img src={image} alt="logo"/>
                <h3 style={{"color":"white",textAlign:"center"}}>Follow Us</h3>
                <a href="#/" class="fa fa-facebook"></a>
                <a href="#/" class="fa fa-twitter"></a>
                <a href="#/" class="fa fa-instagram"></a>
                <a href="#/" class="fa fa-pinterest"></a>
            </div>
            <div className="navLinks">
                <FooterLinks heading={"Company"} links={["About Us","Contact Us","Team","Help","Careers"]}/>
                <FooterLinks heading={"Company"} links={["About Us","Contact Us","Team","Help","Careers"]}/>
                <FooterLinks heading={"Company"} links={["About Us","Contact Us","Team","Help","Careers"]}/>
                <FooterLinks heading={"Company"} links={["About Us","Contact Us","Team","Help","Careers"]}/>
            </div>
            
        </div>
        <div className="center-align">
        <hr />
            <p> Download Aur Mobile Apps</p>
            <p>@2021 All Rights Reserved</p>
        </div>
         </div>
        </>
    )
}

export default Footer
