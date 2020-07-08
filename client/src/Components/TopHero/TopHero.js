import React from 'react'
import image from '../../Assets/Images/caribbean.jpg'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function TopHero(props) {
  return (
    <div className='overflow-hidden'>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className='w-screen h-screen bg-cover bg-bottom'
      ></div>
    </div>
  )
}
