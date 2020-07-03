import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Toolbar from './Components/Toolbar/Toolbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import HomePage from './Pages/HomePage/HomePage'
import DestinationsPage from './Pages/Destinations/DestinationsPage'
import ServicesPage from './Pages/Services/ServicesPage'
import VacationsPage from './Pages/Vactions/VacationsPage'
import PrivacyPolicyPage from './Pages/Legal/PrivacyPolicyPage'
import BookingTermsConditionsPage from './Pages/Legal/BookingTermsConditionsPage'
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
            <Route path='/destinations' component={DestinationsPage} />
            <Route path='/services' component={ServicesPage} />
            <Route path='/vacations' component={VacationsPage} />
            <Route path='/privacy-policy' component={PrivacyPolicyPage} />
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
