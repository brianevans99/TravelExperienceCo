import React, { Component } from 'react'
import TopHero from '../../Components/TopHero/TopHero'
import PageData from '../../Data/PageData'

export default class GolfPackages extends Component {
  state = {
    data: PageData.vacations,
    pageName: 'Golf Packages',
  }
  render() {
    const pagedata = this.state.data.find((data) => {
      return data.name === this.state.pageName
    })

    return (
      <div className='pt-16'>
        <TopHero
          name={pagedata.name}
          text={pagedata.heroText}
          heroImg={pagedata.heroImg}
          heroAlt={pagedata.heroAlt}
          label='Start Here'
          page='/contact'
        />
      </div>
    )
  }
}
