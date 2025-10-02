import '../styles/Tipbutton.css'

function TipButton({name, desc}) {
    return(
     <div className='tipbutton-wrapper'>
        <button className='info-tipbutton' type="button">
        <span className='defult'>{name}</span>
        <span className="hover-text hover">{desc}</span>
        </button>
    </div>
    )
}

export default TipButton;