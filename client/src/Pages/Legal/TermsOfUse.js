import React, { Component } from 'react'
import bookingData from '../../Data/LegalData'
import LegalDisplay from '../../Components/Legal/LegalDisplay'

export default class TermsOfUse extends Component {
  state = {
    heading: 'Terms Of Use',
  }

  render() {
    const data = bookingData.termsOfUse.map((item) => (
      <div key={item.id} className='my-2'>
        <div className='text-base font-semibold uppercase'>{item.title}</div>
        <div className='text-sm'>{item.text}</div>
      </div>
    ))
    return <LegalDisplay heading={this.state.heading} text={data} />
  }
}
