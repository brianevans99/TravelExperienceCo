import React, { Fragment, Component } from 'react'
import TopBanner from '../../Components/TopBanner/TopBanner'
import img1 from '../../Assets/Images/Carousel/carousel_honeymoon2.jpg'

export default class VacationsPage extends Component {
  constructor() {
    super()
    this.state = {
      imgSrc: img1,
    }
  }
  render() {
    return (
      <Fragment>
        Vacations Page
        <TopBanner imgSrc={this.state.imgSrc} />
      </Fragment>
    )
  }
}
