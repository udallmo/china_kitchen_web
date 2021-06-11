import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Landing from '../src/pages/Landing'
import Menu from '../src/pages/Menu'
import Location from '../src/pages/Location'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App
