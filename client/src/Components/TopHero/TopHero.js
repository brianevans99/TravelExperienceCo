import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function TopHero(props) {
  return (
    <div className='-mt-16 overflow-hidden'>
      <div
        style={{
          backgroundImage: `url(${props.heroImg})`,
        }}
        className={`w-screen h-screen bg-cover ${props.heroImgPos}`}
      >
        <div
          className={`w-full h-full flex ${props.background} ${props.heroTextPos}`}
        >
          <div className={`${props.heroTextSize} text-white p-4`}>
            <div className='text-4xl md:text-5xl lg:text-6xl italic text-center md:text-left leading-none py-2'>
              {props.name}
            </div>
            <div className='text-base md:text-lg text-center md:text-left'>
              {props.text}
            </div>
            <div className='flex justify-center md:justify-start'>
              <Link to='/contact'>
                <Button label={props.label} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
