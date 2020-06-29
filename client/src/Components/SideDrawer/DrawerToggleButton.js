import React from 'react'

const DrawerToggleButton = (props) => (
  <button
    className='toggleButton m-2'
    onClick={props.click}
    style={{
      display: 'flex',
      flexDirection: 'column',
      background: 'transparent',
      border: 'none',
      height: '24px',
      width: '24px',
      cursor: 'pointer',
      padding: '0px',
      boxSizing: 'border-box',
      justifyContent: 'space-around',
    }}
  >
    <div style={{ width: '100%', height: '2px', background: '#fff' }} />
    <div style={{ width: '100%', height: '2px', background: '#fff' }} />
    <div style={{ width: '100%', height: '2px', background: '#fff' }} />
  </button>
)

export default DrawerToggleButton
