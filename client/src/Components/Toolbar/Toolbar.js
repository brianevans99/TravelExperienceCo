import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import logo from '../../Assets/Images/logo.png'

const Toolbar = (props) => (
  <header className='bg-gray-900 bg-opacity-75 text-white w-full fixed top-0 left-0 z-10'>
    <nav className='flex justify-between items-center'>
      <div className='md:hidden'>
        <DrawerToggleButton click={props.drawerToggleClickHandler} />
      </div>
      <div className='flex items-center'>
        <img
          src={logo}
          className='h-8 md:h-12 m-2'
          alt='Travel Experience Co.'
        />{' '}
        <span className='m-2 text-green font-sans font-medium text-2xl'>
          Travel Experience Co.
        </span>
      </div>
      <div className='hidden md:block flex'>
        <ul className='flex text-green '>
          <li className='m-2 border-b-2 border-transparent hover:border-pink-600'>
            Destinations
          </li>
          <li className='m-2 border-b-2 border-transparent hover:border-pink-600'>
            Services
          </li>
        </ul>
      </div>
      <div className='hidden md:flex'></div>
    </nav>
  </header>
)

export default Toolbar
