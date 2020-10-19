import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Toolbar from './Components/Toolbar/Toolbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import Caribbean from './Pages/Destinations/Caribbean'
import Europe from './Pages/Destinations/Europe'
import Asia from './Pages/Destinations/Asia'
import Hawaii from './Pages/Destinations/Hawaii'
import Australia from './Pages/Destinations/Australia'
import AllInclusives from './Pages/Vacations/AllInclusives'
import FishingTrips from './Pages/Vacations/FishingTrips'
import GolfPackages from './Pages/Vacations/GolfPackages'
import BedAndBreakfast from './Pages/Vacations/BedAndBreakfast'
import Cruises from './Pages/Vacations/Cruises'
import SkiPackages from './Pages/Vacations/SkiPackages'
import GroupTravelPage from './Pages/Services/GroupTravelPage'
import FamilyTravelPage from './Pages/Services/FamilyTravelPage'
import GuidedToursPage from './Pages/Services/GuidedToursPage'
import DestinationWeddingsHoneymoonsPage from './Pages/Services/DestinationWeddingsHoneymoonsPage'
import CorporateIncentiveTravelPage from './Pages/Services/CorporateIncentiveTravelPage'
import Formspree from './Components/Formspree/Formspree'
import PrivacyPolicyPage from './Pages/Legal/PrivacyPolicyPage'
import BookingTermsConditionsPage from './Pages/Legal/BookingTermsConditionsPage'
import TermsOfUse from './Pages/Legal/TermsOfUse'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'
import NotFound from './Pages/NotFound'

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          click={this.backdropClickHandler}
          show={this.state.sideDrawerOpen}
        />
        {backdrop}
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={HomePage} />
            {/* <Route path='/about' component={AboutPage} /> */}
            <Route path='/destinations/caribbean' component={Caribbean} />
            <Route path='/destinations/asia' component={Asia} />
            <Route path='/destinations/europe' component={Europe} />
            <Route path='/destinations/hawaii' component={Hawaii} />
            <Route path='/destinations/australia' component={Australia} />
            <Route path='/vacations/all-inclusives' component={AllInclusives} />
            <Route path='/vacations/fishing-trips' component={FishingTrips} />
            <Route path='/vacations/golf-packages' component={GolfPackages} />
            <Route
              path='/vacations/bed-and-breakfast'
              component={BedAndBreakfast}
            />
            <Route path='/vacations/cruises' component={Cruises} />
            <Route path='/vacations/ski-packages' component={SkiPackages} />
            <Route path='/services/group-travel' component={GroupTravelPage} />
            <Route
              path='/services/family-travel'
              component={FamilyTravelPage}
            />
            <Route path='/services/guided-tours' component={GuidedToursPage} />
            <Route
              path='/services/destination-weddings-and-honeymoons'
              component={DestinationWeddingsHoneymoonsPage}
            />
            <Route
              path='/services/corporate-incentive-travel'
              component={CorporateIncentiveTravelPage}
            />
            <Route path='/contact' component={Formspree} />

            <Route path='/privacy-policy' component={PrivacyPolicyPage} />
            <Route path='/terms-of-use' component={TermsOfUse} />
            <Route
              path='/booking-terms-and-conditions'
              component={BookingTermsConditionsPage}
            />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    )
  }
}

export default App
