import React from 'react'
import bookingData from '../../Data/LegalData'

export default function BookingTermsConditions() {
  const booking = bookingData.bookingTermsConditions.map((item) => (
    <div className='container px-4'>
      <div className='text-base font-semibold'>{item.title}</div>
      <div className='text-sm'>{item.text}</div>
    </div>
  ))
  return <div className='bg-gray-500 pt-16'>{booking}</div>
}
