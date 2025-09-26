function Homepage({image,i,p}){
    return(
        <div className = "header">
        <div>
            <h1>Welcome to VitalNest!</h1>
           <p>Here you can start your journey of being a healthier version of yourself. We believe that good health is the foundation of a better life, and our mission is to provide you with the care, knowledge, and support you deserve! </p>
        </div>
        <img className= "img1" src={image}/>
        <div>
            <h1>About Us?</h1>
              <p>At VitalNest,
                we are committed to delivering reliable medical information,personalized health resources, and access to expert care.Whether you're here to learn more about your health,find professional guidance,or simply take small steps 
                towards a healthier lifestyle, our platform is designed with you in mind</p>
            <img className= "img1" src={i}/>
            <h1>Core Values Highlight (CTIS)</h1>
            <h4>Compassion: Putting patients and users first</h4>
            <h4>Trust: Delivering Accurate and up-to-date medical information</h4>
            <h4>Innovation: Using Technology to Make Healthcare more Accessible</h4>
            <h4>Support: Creating a Community where Wellness is Shared and Encouraged</h4>
            <img className= "img1" src={p}/>
            <h4>Explore Our Resources, Connect with Experts, and Take Charge of your Health Journey Today,</h4>
            <h4>At VitalNest, Your Well-Being is Our Priority</h4>
        </div>
        </div>
    )
}
export default Homepage;