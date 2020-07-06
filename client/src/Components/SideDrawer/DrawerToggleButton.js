import React from 'react'

const DrawerToggleButton = (props) => (
  <button
    className='flex flex-col w-8 h-6 justify-around bg-transparent cursor-pointer border-none box-border p-0 m-2'
    onClick={props.click}
  >
    <div className='bg-gray-500 h-1 w-full' />
    <div className='bg-gray-500 h-1 w-full' />
    <div className='bg-gray-500 h-1 w-full' />
  </button>
)

export default DrawerToggleButton
