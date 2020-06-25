import React from 'react'
import { FcPhone, FcCalendar, FcFeedback } from 'react-icons/fc'

export default function Experience() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center py-4'>
        <div className='text-center text-2xl'>
          Travel Experience Co. Expertise
        </div>
        <div className='text-center md:w-3/5'>
          When you book with TEC, we understand that YOUR trip is unique.  You are paired with a travel expert best qualified to prepare a getaway to meet YOUR needs.
        </div>
      </div>
      <div className='md:w-1/2 flex flex-row flex-wrap justify-around py-4'>
        <div className='flex flex-col items-center'>
          <div className='text-2xl'>
            <FcPhone />
          </div>
          <div className='text-xl'>Contact By Phone</div>
          <div className='text-blue-700'>706.974.8057</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-2xl'>
            <FcFeedback />
          </div>

          <div className='text-xl'>Contact By Email</div>
          <div className='text-blue-700'>Get a Quote</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-2xl'>
            <FcCalendar />
          </div>

          <div className='text-xl'>Contact By Appointment</div>
          <div className='text-blue-700'>Schedule Now</div>
        </div>
      </div>
    </div>
  )
}
