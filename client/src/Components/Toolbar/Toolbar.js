import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import logo from '../../Assets/Images/logo.png'

const Toolbar = (props) => (
  <header className='bg-black text-white w-full h-16 fixed top-0 left-0 z-10'>
    <nav className='flex justify-between'>
      <div className='md:hidden'>
        <DrawerToggleButton click={props.drawerToggleClickHandler} />
      </div>
      <div className='flex'>
        <img src={logo} className='h-10 md:h-16' alt='Travel Experience Co.' />{' '}
        <span id='brand'>Travel Experience Co.</span>
      </div>
      <div className='hidden md:block'>
        <ul className='flex'>
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='/events'>Events</a>
          </li>
        </ul>
      </div>
      <div className='hidden md:flex'></div>
    </nav>
  </header>
)

export default Toolbar
