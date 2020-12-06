import React from 'react'
import { Carousel, Slide } from 'react-x-carousel'
import 'react-x-carousel/dist/index.css'

import { HighlightWrapper } from '../Highlight/Hightlight'
import './NavigationExample.scss'

export default class NavigationExample extends React.Component {
  instance: Carousel

  navigationJs = () => {
    return `
<div className='navigation-example__wrapper'>
  <Carousel onInit={(instance) => (this.instance = instance)}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
        return (
          <Slide data={item} key={idx}>
            {item}
          </Slide>
        )
      })}
  </Carousel>
</div>
<div className='navigation-example__buttons'>
  <button onClick={() => this.instance.moveLeft()}>Left</button>
  <button onClick={() => this.instance.moveRight()}>Right</button>
</div>
    `
  }

  render() {
    return (
      <div className='navigation-example'>
        <h1 className='feature-h1'>Navigation example</h1>

        <p className='feature-p'>
          1) Get the instance of the carousel by using onInit callback
        </p>
        <p className='feature-p'>
          2) Move carousel around using moveLeft and MoveRight methods
        </p>

        <HighlightWrapper>{this.navigationJs()}</HighlightWrapper>

        <div className='navigation-example__wrapper'>
          <Carousel onInit={(instance) => (this.instance = instance)}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
              return <Slide key={idx}>{item}</Slide>
            })}
          </Carousel>
        </div>
        <div className='navigation-example__buttons'>
          <button onClick={() => this.instance.moveLeft()}>Left</button>
          <button onClick={() => this.instance.moveRight()}>Right</button>
        </div>
      </div>
    )
  }
}
