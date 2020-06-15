import React from 'react'

export default function FeelgoodBlock(props) {
  return (
    <div className='flex flex-1 sm:flex-col m-2'>
      <div className='self-center text-4xl p-4'>{props.item.imgSrc}</div>
      <div className='flex-grow'>
        <h2 className='text-lg sm:text-center'>{props.item.title}</h2>
        <div className='text-gray-600 sm:text-center'>{props.item.tagline}</div>
      </div>
    </div>
  )
}
