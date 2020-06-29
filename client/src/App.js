import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Toolbar from './Components/Toolbar/Toolbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'
import HomePage from './Pages/HomePage/HomePage'
import VacationsPage from './Pages/Vactions/VacationsPage'
import NotFound from './Pages/NotFound'
import DestinationsPage from './Pages/Destinations/DestinationsPage'
import CruisesPage from './Pages/Cruises/CruisesPage'
import GuidedToursPage from './Pages/GuidedTours/GuidedToursPage'
import GroupTravelPage from './Pages/GroupTravel/GroupTravelPage'

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
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/vacations' component={VacationsPage} />
          <Route path='/destinations' component={DestinationsPage} />
          <Route path='/cruises' component={CruisesPage} />
          <Route path='/guidedtours' component={GuidedToursPage} />
          <Route path='/grouptravel' component={GroupTravelPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
