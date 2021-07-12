import React, { useState } from 'react'
import './QA.css'
const QA = (props) => {
    const [showDown,setShowDown] = useState(props.showDown || false)
    return (
        <div className="query">
            <div className="heading">
                <h1 className={showDown?"color":""}>{props.question}</h1>
                <h2 style={{"fontWeight":"900","fontSize":"2rem","cursor":"pointer"}} onClick = {()=> setShowDown(prev => !prev)}> {showDown ? '^' : '>'}</h2>
            </div>
            {showDown && 
                <p>{props.answer}</p>
            }
        </div>
    )
}

export default QA
