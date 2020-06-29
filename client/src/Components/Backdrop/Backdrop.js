import React from 'react'

const Backdrop = (props) => (
  <div
    onClick={props.click}
    className='bg-black bg-opacity-75 w-full h-full fixed top-0 left-0 z-10'
  ></div>
)

export default Backdrop
