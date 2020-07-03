import React from 'react'

function LegalDisplay(props) {
  return (
    <div className='flex flex-col bg-gray-500 pt-16'>
      <div className='mx-2 lg:mx-8'>
        <div className='text-2xl lg:text-4xl font-bold'>{props.heading}</div>
        <div>{props.text}</div>
      </div>
    </div>
  )
}

export default LegalDisplay
