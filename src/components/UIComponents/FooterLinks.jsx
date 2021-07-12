import React from 'react'
import './FooterLinks.css'
const FooterLinks = (props) => {
    return (
        <div className="footer-links">
            <h1 className="nomargin">{props.heading}</h1>
            {props.links.map(data => <p>{data}</p>)}    
        </div>
    )
}

export default FooterLinks
