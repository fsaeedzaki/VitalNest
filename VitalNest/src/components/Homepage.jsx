function Homepage({image,i,p}){
    return(
        <div>
            
            <header>Welcome to VitalNest</header>
           <h2>Here you can start you journey of being a healthier version of yourself,We believe that good health is the foundation of a better life ,And our mission is to provide you with the care,knowledge,and support you need </h2>
              <img src={image}/><h1>About Us?</h1>
              <h2>At VitalNest,
                we are committed to delivering reliable medical information,personalized health resources, and access to expert care.Whether you're here to learn more about your health,find professional guidance,or simply take small steps 
                towards a healthier lifestyle, our platform is designed with you in mind</h2>
            <img src={i}/>
            <h1>Core Values Highlight</h1>
            <h2>Compassion: Putting patients and users first</h2>
            <h2>Trust: Delivering Accurate and up-to-date medical information</h2>
            <h2>Innovation: Using Technology to Make Healthcare more Accessible</h2>
            <h2>Support: Creating a Community where Wellness is Shared and Encouraged</h2>
            <img src={p}/>
            <h3>Explore Our Resources, Connect with Experts, and Take Charge of your Health Journey Today,</h3>
            <h4>At VitalNest, Your Well-Being is Our Priority</h4>
        </div>
    )
}
export default Homepage;