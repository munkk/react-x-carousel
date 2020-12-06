import React from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'

import './FeaturesPage.scss'
import GettingStarted from './GettingStarted/GettingStarted'

interface Props {}

interface State {
  mobileOpen: boolean
}

class FeaturesPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      mobileOpen: false
    }
  }

  get container() {
    return window.document.body
  }

  handleDrawerToggle = () => {
    this.setState((state) => ({
      mobileOpen: !state.mobileOpen
    }))
  }

  renderDrawer = () => {
    return (
      <aside className='features-page__drawer'>
        <div className='drawer-logo'>react-x-carousel</div>
        <nav>
          <ul className='drawer-list'>
            <li>
              <Link to='/features/start'>Getting Started</Link>
            </li>
            <li>
              <Link to='/features/basic'>Basic example</Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }

  renderContent = () => {
    return <main className='features-page__content'>{this.props.children}</main>
  }

  render() {
    return (
      <div className='features-page'>
        {this.renderDrawer()}
        {this.renderContent()}
      </div>
    )
  }
}

export default FeaturesPage
