import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function TopHero(props) {
  return (
    <div className='bg-gray-500 pb-4'>
      <div className='container flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 px-2'>
          <img src={props.heroImg} alt={props.heroAlt} />
        </div>
        <div className='w-full md:w-1/2 text-lg'>
          <div className='text-4xl'>{props.name}</div>
          <div className='flex flex-col'>
            <div>{props.text}</div>
            <div>
              <Link to={props.page}>
                <Button label={props.label} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
