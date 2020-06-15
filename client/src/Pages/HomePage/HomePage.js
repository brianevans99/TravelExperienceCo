import React, { Component, Fragment } from 'react'
import TopBannerSection from '../../Components/TopBanner/TopBannerSection'
import SearchBar from '../../Components/SearchBar/SearchBar'
import FeelgoodSection from '../../Components/FeelgoodSection/FeelgoodSection'
import Updates from '../../Components/Updates/Updates'
import VideoBlock from '../../Components/VideoBlock/VideoBlock'
import TravelFavorites from '../../Components/TravelFavorites/TravelFavorites'
import EnhancedVacation from '../../Components/EnhancedVacation/EnhancedVacation'
import GroupTrip from '../../Components/GroupTrip/GroupTrip'
import FeaturedArticle from '../../Components/FeaturedArticle/FeaturedArticle'
import Experience from '../../Components/Experience/Experience'
import Accolades from '../../Components/Accolades/Accolades'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <TopBannerSection />
        <SearchBar />
        <FeelgoodSection />
        <Updates />
        <VideoBlock />
        <TravelFavorites />
        <EnhancedVacation />
        <GroupTrip />
        <FeaturedArticle />
        <Experience />
        <Accolades />
      </Fragment>
    )
  }
}
