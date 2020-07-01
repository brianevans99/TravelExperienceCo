import React from 'react'

export default function Button(props) {
  return (
    <button className='bg-blue-700 hover:bg-tecPink-500 text-white rounded-lg w-32 h-8 px-4 mt-2'>
      {props.label}
    </button>
  )
}
