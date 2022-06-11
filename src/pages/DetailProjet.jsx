import React from 'react'
import { Footer } from '../Component/Footer/Footer'

const Detailproject = () => {
  return (
    <div>
       <div className='Cards'>
        <div className='Card'>
          <div class="card__logo">
            <img src="logobootsrap.png" alt="" />
          </div>
          <div class="card__text">
              <h2>Europa Universalles IV</h2>
                <p> 
                  Europa uiniversalles IV spel die ik heb gekozen om te uitlegen.
                  Als je wil meer weten van die spel dan moet je heer kliken.
                </p>
          </div>
        </div>
      </div>
      <div className='projectDetail'>
      <h1>Bezoek mijn project</h1>
      <ul className='projectDetail-list'>
        <li className='projectDetail-li'><a className='projectDetail-link' href="">GitHub</a></li>
        <li className='projectDetail-li projectDetail-2'><a className='projectDetail-link' href="">Website</a></li>
      </ul>
    </div>
    <Footer/>
    </div>
   
  )
}
export {Detailproject}