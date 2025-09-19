import Homepage from "../components/Homepage.jsx"
import doctors from "../assets/doctors.png"
import heart from "../assets/heart.jpg"
import yd from "../assets/yd.jpg"
import '../styles/Home.css'
function Home({}){
    return(
        <div>
            <Homepage image={doctors} i={heart} p={yd}/>
        </div>
    )
}
export default Home;