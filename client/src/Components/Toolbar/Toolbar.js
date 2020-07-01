import React from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import SocialIcon from './SocialIcon'
import ToolbarData from '../../Data/ToolbarData'
import logo from '../../Assets/Images/logo.png'

function Toolbar(props) {
  const socialIcons = ToolbarData.socialMedia.map((item) => (
    <SocialIcon key={item.id} item={item} />
  ))
  const pageLinks = ToolbarData.menuLinks.map((item) => (
    <li
      key={item.id}
      className='m-2 border-b-2 border-transparent hover:border-tecPink-500'
    >
      <Link className='flex items-center' to={`/${item.pageLink}`}>
        {item.pageLink}
        <FaCaretDown />
      </Link>
    </li>
  ))
  return (
    <header className='bg-gray-900 bg-opacity-75 text-white w-full fixed top-0 left-0 z-10'>
      <nav className='flex justify-between items-center h-16'>
        <div className='md:hidden'>
          <DrawerToggleButton click={props.drawerToggleClickHandler} />
        </div>
        <div className='flex items-center'>
          <Link to='/'>
            <img
              src={logo}
              className='h-8 md:h-12 m-2'
              alt='Travel Experience Co.'
            />
          </Link>{' '}
          <span className='m-2 text-tecGreen-500 font-sans font-medium text-2xl'>
            Travel Experience Co.
          </span>
        </div>
        <div className='hidden md:block flex'>
          <ul className='flex text-tecGreen-500 '>{pageLinks}</ul>
        </div>
        <div className='hidden md:flex justify-center items-center h-full'>
          {socialIcons}
        </div>
      </nav>
    </header>
  )
}

export default Toolbar
