import React from 'react'
import '../styles/OvalButton.css'


function OvalButton({name, desc}) {
    return <div class="btn-wrapper">
            <button class="info-btn">
                <span class="default">{name}</span>
                <span class="hover-text">{desc}</span>
            </button>
        </div>
}

export default OvalButton;
