import React from 'react'
import '../styles/OvalButton.css'


function OvalButton({name, desc}) {
    return <div className="btn-wrapper">
            <button className="info-btn">
                <span className="default">{name}</span>
                <span className="hover-text">{desc}</span>
            </button>
        </div>
}

export default OvalButton;
