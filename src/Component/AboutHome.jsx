import React from 'react'
import './About.css'
export default function Abouts() {
  return (
    <div className='info'>
      <div className='info__img'>
        <img src="Rectangle.png" alt="" />
      </div>
        
        <div className='info__text'>
            <h2>Mijn naam is Filip
            </h2>
            <p>
            Ik ben 22 jaar oud.Ik kom uit Wit-Rusland.

            Mijn hobby is schaken tennis spelen met vrienden,gaan zwemmen.

            Ik studeer nu de Electronica ICT op Technologiecampus Odisee in Gent.
            </p>
            <div className='btn'>
                <button><a className='link__btn' href="/about">More...</a></button>
            </div>
            
        </div>
        

    </div>
  )
}
