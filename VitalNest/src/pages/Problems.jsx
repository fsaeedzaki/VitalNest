import React from 'react'
import OvalButton from '../components/OvalButton';
import '../styles/Problems.css'
function Problems() {

  return (
     <div>
      <section className="problems__content">
        <div class="buttons"></div>
         <div className="problems__card">
          <h1>Types of Health issues - VitalNest</h1>
          <p>
          Learn how to identify your illnesses with VitalNest.
          </p>
        </div>
      </section>
      <div className='ovalButtons'>
        <OvalButton name="Mental" desc="Mental Illness
            affect thoughts, emotions and behavior also can be shown as (depression, anxiety). To get better you need help like parents support - and if the situation is more critical, you can definitely consult a doctor."/>
        <OvalButton name="Physical" desc="Physical Illness 
        affects the body and its systems, it appears on the body in more than one forms - like (diabetes, asthema, cancer)."/>
        <OvalButton name="Psychosomatic Illness" desc="Psychosomatic Illness
            It's a Physical symptom caused or worsened by mental or emotional factors like (stress, tension, headaches)."/>
         <OvalButton name="Social" desc="Social Illness
            It's caused by external problems like relationships, social functioning, or spread through society - (addiction, sregma related conditions)."/>
      </div>
      </div>
  )
}

export default Problems;
