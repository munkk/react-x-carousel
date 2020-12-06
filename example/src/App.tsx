import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import FeaturesPage from './pages/FeaturesPage/FeaturesPage'

import './App.scss'
import GettingStarted from './pages/FeaturesPage/GettingStarted/GettingStarted'
import BasicLayout from './pages/FeaturesPage/BasicExample/BasicExample'

class App extends React.Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/features' component={FeaturesPage} />
          <Route
            exact
            path='/features/start'
            component={() => <FeaturesPage children={<GettingStarted />} />}
          />
          <Route
            exact
            path='/features/basic'
            component={() => <FeaturesPage children={<BasicLayout />} />}
          />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
