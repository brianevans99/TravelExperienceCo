import React from 'react'
import { Link } from 'react-router-dom'
import { FcPhone, FcCalendar, FcFeedback } from 'react-icons/fc'

export default function Experience() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center md:w-1/2 p-2'>
        <div className='text-center text-2xl'>
          Travel Experience Co. Expertise
        </div>
        <div className='text-center'>
          When you book with TEC, we understand that YOUR trip is unique. You
          are paired with a travel expert best qualified to prepare a getaway to
          meet YOUR needs.
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center p-2'>
        <div className='flex flex-col items-center px-2'>
          <div className='text-2xl'>
            <FcPhone />
          </div>
          <div className='text-xl'>Contact By Phone</div>
          <div className='text-blue-700'>770.213.8787</div>
        </div>
        <div className='flex flex-col items-center px-2'>
          <div className='text-2xl'>
            <FcFeedback />
          </div>

          <div className='text-xl'>Contact By Email</div>
          <Link to='/contact'>
            <div className='text-blue-700'>Get a Quote</div>
          </Link>
        </div>
        <div className='flex flex-col items-center px-2'>
          <div className='text-2xl'>
            <FcCalendar />
          </div>

          <div className='text-xl'>We'll Call You</div>

          <Link to='/contact'>
            <div className='text-blue-700'>Schedule an Appointment</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
