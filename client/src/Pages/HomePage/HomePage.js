import React, { Component, Fragment } from 'react'
import FeelgoodSection from '../../Components/FeelgoodSection/FeelgoodSection'
import VideoBlock from '../../Components/VideoBlock/VideoBlock'
import GroupTrip from '../../Components/GroupTrip/GroupTrip'
import Experience from '../../Components/Experience/Experience'
import Accolades from '../../Components/Accolades/Accolades'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <ImageSlider />
        <FeelgoodSection />
        <VideoBlock />
        <GroupTrip />
        <Experience />
        <Accolades />
      </Fragment>
    )
  }
}
