import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Slide } from 'react-x-carousel'
import 'react-x-carousel/dist/index.css'
import {
  PeriodicElement,
  Element
} from '../../components/PeriodicElement/PeriodicElement'
import { Tooltip } from '../../components/Tooltip/Tooltip'
import Slider from '@material-ui/core/Slider'

import './MainPage.scss'

interface Props {}

interface State {
  elements: Element[]
  currentElement: Element
  showTooltip: boolean
}

interface Props {}

interface State {}

class MainPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    const { elements } = require('../../assets/periodic.json')
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

  onSliderChange = (event: object, value: number) => {
    const { elements } = require('../../assets/periodic.json')
    return this.setState((state, props) => ({
      elements: elements.slice(0, value)
    }))
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

              <Carousel
                // onInit={instance => this.carousel = instance}
                onChange={this.handleChange}
              >
                {this.state.elements.map((element, idx) => {
                  return (
                    <Slide data={element} key={element.name}>
                      <PeriodicElement element={element} />
                    </Slide>
                  )
                })}
              </Carousel>
            </div>

            <Slider
              className='material-slider'
              defaultValue={this.state.elements.length}
              valueLabelDisplay='auto'
              step={1}
              marks
              min={1}
              max={20}
              onChange={this.onSliderChange}
            />
          </div>
        </section>

        <section className='footer'>
          <Link to='/features'>See Examples</Link>
        </section>
      </div>
    )
  }
}

export default MainPage
