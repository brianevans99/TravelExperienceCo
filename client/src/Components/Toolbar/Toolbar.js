import React from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import styled from 'styled-components'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import SocialIcon from './SocialIcon'
import ToolbarData from '../../Data/ToolbarData'
import logo from '../../Assets/Images/logo.png'

const Styles = styled.div`
  #menuLinks ul li:hover > ul {
    display: flex;
  }
`

function Toolbar(props) {
  const socialIcons = ToolbarData.socialMedia.map((item) => (
    <SocialIcon key={item.id} item={item} />
  ))
  const pageLinks = ToolbarData.menuLinks.map((item) => (
    <li key={item.id} className='m-2 border-b-2 border-transparent'>
      <div className='flex items-center capitalize'>
        {item.pageLink}
        <FaCaretDown />
      </div>

      <ul className='hidden flex-col absolute bg-gray-900 bg-opacity-95'>
        {item.subLinks.map((links) => (
          <li key={links.id} className='hover:bg-tecPink-500 px-4 py-2'>
            <Link className='' to={`/${item.pageLink}/${links.pageLink}`}>
              {links.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  ))
  return (
    <header className='bg-gray-900 bg-opacity-75 w-full fixed top-0 left-0 z-10'>
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
        <Styles>
          <div id='menuLinks' className='hidden md:flex'>
            <ul className='flex text-tecGreen-500 '>{pageLinks}</ul>
          </div>
        </Styles>
        <div className='hidden md:flex justify-center items-center h-full'>
          {socialIcons}
        </div>
      </nav>
    </header>
  )
}

export default Toolbar
