import React from 'react'
import bbbLogo from '../../Assets/Images/bbb_aplus.png'

export default function Accolades() {
  return (
    <div className='flex flex-col sm:flex-row-reverse bg-gray-400 p-4'>
      <div className='self-center w-1/3 lg:w-1/4 sm:pl-4 md:px-8'>
        <img src={bbbLogo} alt='Better Business Bureau A+ rating' />
      </div>
      <div className='w-full sm:w-2/3 lg:w-3/4'>
        <div className='text-xl text-center font-semibold md:text-left'>
          Better Business Bureau A+ Rating for 5 Years!
        </div>
        <div className='text-justify'>
          We are ecstatic to have served our customers for over 5 years with
          exciting getaways around the globe. Traveling is our passion and we
          want everyone to experience it the way we do. For those that we have
          help, thanks so much for allowing us to continue providing excellent
          service before, during, and after your travels.
        </div>
      </div>
    </div>
  )
}
