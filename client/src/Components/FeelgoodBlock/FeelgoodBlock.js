import React from 'react'

export default function FeelgoodBlock(props) {
  return (
    <div className='sm:flex flex-col items-center'>
      <div className=''>{props.item.imgSrc}</div>
      <div className='text-center'>
        <h2 className='text-lg'>{props.item.title}</h2>
        <div className='text-gray-600'>{props.item.tagline}</div>
      </div>
    </div>
  )
}
