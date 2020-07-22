import React, { Component, Fragment } from 'react'
import headshot from '../../Assets/Images/headshot.jpg'
import { FaStar } from 'react-icons/fa'

export default class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <div className='flex flex-col items-center lg:flex-row bg-gray-400 pt-16'>
          <div className='w-1/2 md:w-1/3'>
            <img src={headshot} alt='Kim Henkle' />
          </div>
          <div className='w-full md:w-2/3 p-8 divide-y-2 divide-gray-600'>
            <div className='font-mono text-center lg:text-left italic text-xl'>
              My name is Kim Henkle and I am your personal vacation specialist.
            </div>

            <div className='font-sans text-justify'>
              Now more than ever, travelers need the expertise and attention to
              detail that an agent provides. Covid-19 has drastically changed
              the traveling landscape. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </div>
          </div>
        </div>
        <div className='bg-gray-800'>
          <div className='uppercase font-bold text-tecGreen-500 text-3xl p-2'>
            My Reviews
            <div className='flex'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/3 p-2 bg-gray-800 text-white'>
              Kim has booked a number of trips for us over the years. She is
              very helpful and always gets the answer to any questions that we
              have about the trip. Every trip that we have gone on has been
              fantastic thanks to Kim.
            </div>
            <div className='w-full lg:w-1/3 p-2 bg-gray-800 text-white'>
              Kim has booked a number of trips for us over the years. She is
              very helpful and always gets the answer to any questions that we
              have about the trip. Every trip that we have gone on has been
              fantastic thanks to Kim.
            </div>
            <div className='w-full lg:w-1/3 p-2 bg-gray-800 text-white'>
              Kim has booked a number of trips for us over the years. She is
              very helpful and always gets the answer to any questions that we
              have about the trip. Every trip that we have gone on has been
              fantastic thanks to Kim.
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
