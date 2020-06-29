import React from 'react'

const SideDrawer = (props) => {
  let translatePosition = '-translate-x-full'
  if (props.show) {
    translatePosition = 'translate-x-0'
  }
  let drawerClasses = `bg-white w-3/5 max-w-screen-sm h-full fixed top-0 left-0 transform ${translatePosition}`

  return (
    <div
      style={{ zIndex: 50, transition: 'transform 0.3s' }}
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
