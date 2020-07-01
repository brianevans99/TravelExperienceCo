import React from 'react'
import groupTravel from '../../Assets/Images/Carousel/groupTravel.jpg'

export default function GroupTrip() {
  return (
    <div className='bg-gray-400 flex flex-col lg:flex-row-reverse'>
      <div className=''>
        <img
          src={groupTravel}
          alt='Plan your group travel with Travel Experience Co.'
        />
      </div>
      <div className='p-2 lg:px-4'>
        <div className='text-2xl text-center md:text-left my-3'>
          Plan your group travel with Travel Experience Co.!
        </div>
        <div className='text-justify'>
          Girls trip to the beach. Destination weddings. Family reunions. We've
          got you covered! The expertise you get at TEC sets you up for a
          stress-free, extraordinary planned getaway that you and your travel
          companions will remember for a lifetime. Contact us today for a
          customized travel package complete with our signature white glove
          service and exclusive amenities.
        </div>
      </div>
    </div>
  )
}
