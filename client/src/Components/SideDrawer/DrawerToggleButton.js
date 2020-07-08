import React from 'react'

const DrawerToggleButton = (props) => (
  <button
    className='flex flex-col w-8 h-6 justify-around bg-transparent cursor-pointer box-border p-0 m-2 z-50'
    onClick={props.click}
  >
    <div className='bg-gray-500 h-1 w-8'></div>
    <div className='bg-gray-500 h-1 w-8'></div>
    <div className='bg-gray-500 h-1 w-8'></div>
  </button>
)

export default DrawerToggleButton
