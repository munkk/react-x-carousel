import React from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import { Carousel, Slide } from 'react-x-carousel'
// import 'react-x-carousel/dist/index.css'
// import {
//   PeriodicElement,
//   Element
// } from './components/PeriodicElement/PeriodicElement'
// import { Tooltip } from './components/Tooltip/Tooltip'

import './FeaturesPage.scss'

interface Props {}

interface State {}

class FeaturesPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <div className='features-page'>Features</div>
  }
}

export default FeaturesPage
