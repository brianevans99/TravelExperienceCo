import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Toolbar from './Components/Toolbar/Toolbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import HomePage from './Pages/HomePage/HomePage'
import GroupTravelPage from './Pages/Services/GroupTravelPage'
import FamilyTravelPage from './Pages/Services/FamilyTravelPage'
import GuidedToursPage from './Pages/Services/GuidedToursPage'
import DestinationWeddingsHoneymoonsPage from './Pages/Services/DestinationWeddingsHoneymoonsPage'
import CorporateIncentiveTravelPage from './Pages/Services/CorporateIncentiveTravelPage'
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
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={HomePage} />
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
