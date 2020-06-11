import React, { Component, Fragment } from 'react'
import TopBanner from '../../Components/TopBanner/TopBanner'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Section from '../../Components/Section/Section'
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
        <TopBanner />
        <SearchBar />
        <Section />
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
