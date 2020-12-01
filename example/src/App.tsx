import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import FeaturesPage from './pages/FeaturesPage/FeaturesPage'

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/features' component={FeaturesPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
