import React from 'react'

export default function TopHero(props) {
  return (
    <div className='flex flex-col md:flex-row'>
      <div>{props.name}</div>
      <div>
        <img src={props.heroImg} alt={props.heroAlt} />
      </div>
      <div>{props.text}</div>
    </div>
  )
}
