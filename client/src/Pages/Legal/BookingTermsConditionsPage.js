import React, { Component } from 'react'
import bookingData from '../../Data/LegalData'
import LegalDisplay from '../../Components/Legal/LegalDisplay'

export default class BookingTermsConditionsPage extends Component {
  state = {
    heading: 'Booking Terms & Conditions',
  }
  render() {
    const data = bookingData.bookingTermsConditions.map((item) => (
      <div key={item.id} className='my-2'>
        <div className='text-base font-semibold uppercase'>{item.title}</div>
        <div className='text-sm'>{item.text}</div>
      </div>
    ))
    return <LegalDisplay heading={this.state.heading} text={data} />
  }
}
