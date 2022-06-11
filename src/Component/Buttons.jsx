import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons() {
  return (
    <div className='btn'>
      <Link className='btn__link' to={`/detail ${'arrayList.projects.id '}`}>More...</Link>
    </div>
  )
}
