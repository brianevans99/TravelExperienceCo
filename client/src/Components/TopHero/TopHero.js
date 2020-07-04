import React from 'react'
import Button from '../Button/Button'

export default function TopHero(props) {
  return (
    <div className='container flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <img src={props.heroImg} alt={props.heroAlt} />
      </div>
      <div className='w-full md:w-1/2 text-lg'>
        <div className='text-4xl'>{props.name}</div>
        <div className='flex flex-col'>
          <div>{props.text}</div>
          <div>
            <Button label='Start Here' />
          </div>
        </div>
      </div>
    </div>
  )
}
