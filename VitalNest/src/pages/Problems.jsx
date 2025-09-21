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
         
        <OvalButton name="Mental" desc="Mental Illness
            affect thoughts,emotions and behavior also can be shown as (depression,anxiety) to get better you need help like parents support and if the situation is more difficult, you can definitely consult a doctor."/>
        <OvalButton name="Physical" desc="Physical Illness 
        affect the body  and its systems, it appears on the body in more than one form like (diabetes, asthema,cancer)."/>
        <OvalButton name="Psychosomatic Illness" desc="Psychosomatic Illness
            its a Physical symptons caused or worsened by mental or emotional factors like (stress, tension headaches) ."/>
         <OvalButton name="Social" desc="Social Illness
            it affect relationships, social functioning, or spread through society. here is some exampels like (addiction,sregma related conditions)."/>
      </div>
  )
}

export default Problems;
