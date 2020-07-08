import React, { Component } from 'react'
import TopHero from '../../Components/TopHero/TopHero'
import PageData from '../../Data/PageData'

export default class AllInclusives extends Component {
  state = {
    data: PageData.vacations,
    pageName: 'All Inclusives',
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
          background={pagedata.background}
          heroTextPos={pagedata.heroTextPos}
          heroTextSize={pagedata.heroTextSize}
          heroImg={pagedata.heroImg}
          heroAlt={pagedata.heroAlt}
          heroImgPos={pagedata.heroImgPos}
          heroImgGrad={pagedata.heroImgGrad}
          label='Start Here'
          page='/contact'
        />
      </div>
    )
  }
}
