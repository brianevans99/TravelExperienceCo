import React from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import styled from 'styled-components'
import ToolbarData from '../../Data/ToolbarData'

const Styles = styled.div`
  #menuLinks ul li:hover > ul {
    display: flex;
  }
`

const SideDrawer = (props) => {
  let translatePosition = '-translate-x-full'
  if (props.show) {
    translatePosition = 'translate-x-0'
  }
  let drawerClasses = `bg-white w-3/5 max-w-screen-sm h-full fixed top-0 left-0 transform ${translatePosition}`

  const pageLinks = ToolbarData.menuLinks.map((item) => (
    <li key={item.id} className='m-2 border-b-2 border-transparent'>
      <div className='flex items-center capitalize'>
        {item.pageLink}
        <FaCaretDown />
      </div>

      <ul className='flex-col absolute bg-gray-900 bg-opacity-95'>
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
    <Styles>
      <div
        style={{ zIndex: 50, transition: 'transform 0.3s' }}
        className={drawerClasses}
      >
        <nav>
          <ul>{pageLinks}</ul>
        </nav>
      </div>
    </Styles>
  )
}
export default SideDrawer
