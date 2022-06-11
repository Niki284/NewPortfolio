import React from 'react'
import Button from '../Buttons'
import  useFetch from '../../hooks/useFetch';
export const Cards = () => {

  const [arrayList, projectError, projectLoading] = useFetch(`https://raw.githubusercontent.com/Niki284/NewPortfolio/main/docs/data.json`)
  return (
    <div>
       {projectLoading && <p>Loading...</p>}
      {projectError && <p>Something went wrong...</p>}
      {arrayList && (
        <>
        <div className='Cards'>
           {arrayList.projects.map((e)=> (
             <div className='Card'>
              <div class="card__logo">
                <img src={e.picture} alt="" />
              </div>
              <div class="card__text">
                <h2>{e.name}</h2>
                <p>{e.info}</p>
                <Button />
             </div>
            </div>
          ))}
           </div>
        </>
      )}
   </div>
  )
}
