import react from 'react';
import '../styles/Tipbutton.css'

function TipButton({name, desc}) {
    return(
     <div className='tipbutton-wrapper'>
        <button className='info-tipbutton'>
        <span className='default'>{name}</span>
        <span className="hover-text">{desc}</span>
        </button>
    </div>
    )
}

export default TipButton;
