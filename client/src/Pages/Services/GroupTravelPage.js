import React, { Component } from 'react'
import TopHero from '../../Components/TopHero/TopHero'
import PageData from '../../Data/PageData'

export default class GroupTravelPage extends Component {
  state = {
    pageName: 'Group Travel',
  }

  render() {
    return (
      <div className='pt-16'>
        <TopHero />
      </div>
    )
  }
}
