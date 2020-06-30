import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterLine,
  RiYoutubeLine,
} from 'react-icons/ri'
import logo from '../../Assets/Images/logo.png'

const Toolbar = (props) => (
  <header className='bg-gray-900 bg-opacity-75 text-white w-full fixed top-0 left-0 z-10'>
    <nav className='flex justify-between items-center h-16'>
      <div className='md:hidden'>
        <DrawerToggleButton click={props.drawerToggleClickHandler} />
      </div>
      <div className='flex items-center'>
        <img
          src={logo}
          className='h-8 md:h-12 m-2'
          alt='Travel Experience Co.'
        />{' '}
        <span className='m-2 text-tecGreen-500 font-sans font-medium text-2xl'>
          Travel Experience Co.
        </span>
      </div>
      <div className='hidden md:block flex'>
        <ul className='flex text-tecGreen-500 '>
          <li className='m-2 border-b-2 border-transparent hover:border-tecPink-500'>
            Destinations
          </li>
          <li className='m-2 border-b-2 border-transparent hover:border-tecPink-500'>
            Services
          </li>
        </ul>
      </div>
      <div className='hidden md:flex justify-center items-center w-1/6 h-full'>
        <span className='mx-2 text-3xl text-facebook hover:text-tecPink-300'>
          <a href='https://www.facebook.com/Travel-Experience-Co-702276983472230/'>
            <RiFacebookBoxLine />
          </a>
        </span>
        <span className='mx-2 text-3xl text-twitter hover:text-tecPink-300'>
          <RiTwitterLine />
        </span>
        <span className='mx-2 text-3xl text-instagram hover:text-tecPink-300'>
          <RiInstagramLine />
        </span>
        <span className='mx-2 text-3xl text-youtube hover:text-tecPink-300'>
          <RiYoutubeLine />
        </span>
      </div>
    </nav>
  </header>
)

export default Toolbar
