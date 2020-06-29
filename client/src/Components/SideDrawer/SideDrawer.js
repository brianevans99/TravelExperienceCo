import React from 'react'
import './SideDrawer.css'

const SideDrawer = (props) => {
  let drawerClasses = 'sideDrawer'
  if (props.show) {
    drawerClasses = 'sideDrawer open'
  }
  return (
    <div
      style={{
        height: '100%',
        background: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '70%',
        maxWidth: '400px',
        zIndex: 2000,
        boxShadow: '2px 0px 5px rgba(0,0,0,0.5)',
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s ease-out',
      }}
      className={drawerClasses}
    >
      <nav>
        <ul>
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='/events'>Events</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default SideDrawer
