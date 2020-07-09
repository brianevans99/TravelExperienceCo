import React, { Component, Fragment } from 'react'
import FeelgoodSection from '../../Components/FeelgoodSection/FeelgoodSection'
// import Updates from '../../Components/Updates/Updates'
import VideoBlock from '../../Components/VideoBlock/VideoBlock'
// import TravelFavorites from '../../Components/TravelFavorites/TravelFavorites'
// import EnhancedVacation from '../../Components/EnhancedVacation/EnhancedVacation'
import GroupTrip from '../../Components/GroupTrip/GroupTrip'
// import FeaturedArticle from '../../Components/FeaturedArticle/FeaturedArticle'
import Experience from '../../Components/Experience/Experience'
import Accolades from '../../Components/Accolades/Accolades'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <ImageSlider />

        {/* <EnhancedVacation /> */}
        <FeelgoodSection />
        {/* <Updates /> */}
        <VideoBlock />
        {/* <TravelFavorites /> */}
        <GroupTrip />
        {/* <FeaturedArticle /> */}
        <Experience />
        <Accolades />
      </Fragment>
    )
  }
}
