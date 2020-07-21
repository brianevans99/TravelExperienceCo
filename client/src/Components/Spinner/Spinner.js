import React from 'react'
import spinner from '../../Assets/Images/spinner.gif'

export default function Spinner() {
  return (
    <div className='flex justify-center'>
      <img src={spinner} alt='TEC spinner' />
    </div>
  )
}
