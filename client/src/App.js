import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import VacationsPage from './Pages/Vactions/VacationsPage'
import NotFound from './Pages/NotFound'
import DestinationsPage from './Pages/Destinations/DestinationsPage'
import CruisesPage from './Pages/Cruises/CruisesPage'
import GuidedToursPage from './Pages/GuidedTours/GuidedToursPage'
import GroupTravelPage from './Pages/GroupTravel/GroupTravelPage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/vacations' component={VacationsPage} />
      <Route path='/destinations' component={DestinationsPage} />
      <Route path='/cruises' component={CruisesPage} />
      <Route path='/guidedtours' component={GuidedToursPage} />
      <Route path='/grouptravel' component={GroupTravelPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
