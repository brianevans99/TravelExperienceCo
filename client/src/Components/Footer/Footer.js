import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import footerData from '../../Data/FooterData'
import logo from '../../Assets/Images/logo.png'
import Moment from 'react-moment'

export default function Footer() {
  const footerLinks = footerData.footerLinks.map(
    (item) =>
      item.active && (
        <span key={item.id} className='px-1 h-0'>
          <Link className='hover:text-yellow-500' to={`/${item.link}`}>
            {item.name}
          </Link>
          {' |'}
        </span>
      )
  )
  return (
    <div className='flex flex-col items-center justify-center bg-gray-900 px-2 md:px-16'>
      <div className='divide-y-4 divide-gray-500'>
        <div className='flex flex-col xl:flex-row py-4'>
          <div className='flex justify-center  items-center lg:w-1/3'>
            <img
              src={logo}
              className='h-8 md:h-12 m-2'
              alt='Travel Experience Co.'
            />
            <span className='text-tecGreen-500 font-sans font-medium text-2xl'>
              Travel Experience Co.
            </span>
          </div>
          <div className='lg:flex lg:items-center'>
            <div className='flex flex-1 justify-center text-center text-white mb-4'>
              <div className='flex flex-wrap justify-center items-center text-sm h-10'>
                {footerLinks}
              </div>
            </div>
            <div className='invisible flex flex-1 flex-col justify-center mx-4'>
              <div className='text-white text-md'>
                Sign up for special travel deals and announcements!
              </div>
              <input
                className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
                type='email'
                placeholder='Your email address'
              />
              <Button label='Sign Up' />
            </div>
          </div>
        </div>
        <div className='text-xs text-justify text-gray-500 py-4'>
          {footerData.disclaimer}
        </div>
      </div>
      <div className='text-xs text-gray-500'>
        &copy; Travel Experience Co. 2015-
        <Moment format='YYYY' /> | All Rights Reserved
      </div>
    </div>
  )
}
