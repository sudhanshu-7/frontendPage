import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <div className="card">
            <h1 className="card-header">{props.icon || 'ICON'}</h1>
            {props.subHeading && <h3>{props.subHeading}</h3>}
            <p>{props.text || 'Lorem Ipsum'}</p>
        </div>
    )
}

export default Card
