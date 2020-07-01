import React from 'react'
import footerData from '../../Data/FooterData'
import logo from '../../Assets/Images/logo.png'
import Moment from 'react-moment'

export default function Footer() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-900 px-16'>
      <div className='divide-y-4 divide-gray-500'>
        <div className='flex items-center'>
          <img
            src={logo}
            className='h-8 md:h-12 m-2'
            alt='Travel Experience Co.'
          />

          <span className='m-2 text-tecGreen-500 font-sans font-medium text-2xl'>
            Travel Experience Co.
          </span>
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
