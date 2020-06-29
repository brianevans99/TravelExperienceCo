import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = (props) => (
  <header
    style={{
      top: 0,
      left: 0,
      height: '60px',
      color: '#fff',
      width: '100%',
      position: 'fixed',
      backgroundColor: '#000',
      zIndex: 1000,
    }}
  >
    <nav>
      <div>
        <DrawerToggleButton click={props.drawerToggleClickHandler} />
      </div>
      <div>
        <a href='/'>Logo</a>
      </div>
      <div>
        <ul>
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='/events'>Events</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar
