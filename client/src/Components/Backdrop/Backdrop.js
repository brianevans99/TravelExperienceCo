import React from 'react'

const Backdrop = (props) => (
  <div
    onClick={props.click}
    style={{
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.8)',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    }}
  ></div>
)

export default Backdrop
