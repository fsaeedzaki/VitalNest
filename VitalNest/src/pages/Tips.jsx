import '../styles/Tips.css'
import Buttons from '../components/Buttons.jsx'
export default function Tips(){
    return(
    <main className="page">
          
      <section className="page__content">
        <div className="card">
          <div className = "background"/>
          <div className="myAnimation"/>
          <h1>Health tips from VitalNest</h1>
          <p>
           Learn to take care of your body with our Health tips! What's your issue today?
          </p>
        </div>
      </section>
      <Buttons/>
      <footer className="page__footer">
        <small>©2025 Made By Farida Saeed</small>
      </footer>
      
    </main>
    )
}