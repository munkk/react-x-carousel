import React from 'react'
import { Carousel, Slide } from 'react-x-carousel'
import 'react-x-carousel/dist/index.css'
import {
  PeriodicElement,
  Element
} from './components/PeriodicElement/PeriodicElement'
import { Tooltip } from './components/Tooltip/Tooltip'

import './App.scss'

interface Props {}

interface State {
  elements: Element[]
  currentElement: Element
  showTooltip: boolean
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    const { elements } = require('./periodic.json')
    this.state = {
      elements: elements.slice(0, 9),
      currentElement: null,
      showTooltip: false
    }
  }

  handleChange = (node: any) => {
    this.setState({
      currentElement: node.value.item
    })
  }

  render() {
    return (
      <div className='example-page'>
        <section className='header'>
          <div className='fork-me'>
            <a href='https://github.com/munkk/react-x-carousel'></a>
          </div>

          <div className='header__inner'>
            <div className='header__inner-title'>
              Responsive <br></br> Linked list based <br></br> 3D Carousel
            </div>
            <div className='header__inner-frameworks'>
              <div className='framework'>
                <a href='/'>
                  <i className='fab fa-angular'></i>
                  <span>Angular</span>
                </a>
              </div>
              <div className='framework'>
                <a href='/'>
                  <i className='fab fa-react'></i>
                  <span>React</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='body'>
          <div className='body__inner'>
            <div
              className='body__inner-example'
              onMouseEnter={() => this.setState({ showTooltip: true })}
              onMouseLeave={() => this.setState({ showTooltip: false })}
            >
              {this.state.showTooltip && (
                <Tooltip
                  text={
                    this.state.currentElement &&
                    this.state.currentElement.summary
                  }
                />
              )}

              <Carousel onChange={this.handleChange}>
                {this.state.elements.map((element, idx) => {
                  return (
                    <Slide data={element} key={idx}>
                      <PeriodicElement element={element} />
                    </Slide>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </section>

        {/* <section className='footer'>
          <a href='http://qgrid.github.io/ng2' target='_blank'>
            See Examples
          </a>
        </section> */}
      </div>
    )
  }
}

export default App
