import React from 'react'
import { Carousel, Slide } from 'react-x-carousel'
import 'react-x-carousel/dist/index.css'

import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'

import './BasicExample.scss'
import { HighlightWrapper } from '../Highlight/Hightlight'

interface Props {}

interface State {}

export default class BasicExample extends React.Component<Props, State> {
  basicJs = () => {
    return `
<div className='basic-example__wrapper'>
  <Carousel>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
        return (
          <Slide data={item} key={idx}>
            {item}
          </Slide>
        )
      })}
  </Carousel>
</div>
    `
  }

  basicCss = () => {
    return `
.basic-example {
  &__wrapper {
    width: 50%;
    max-width: 450px;
    height: 450px;
    margin: 0 auto;
    
    .x-carousel__slide {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: white;

      &:nth-child(9n + 1) {
        background: hsla(0, 100%, 50%, 0.8);
      }

      &:nth-child(9n + 2) {
        background: hsla(40, 100%, 50%, 0.8);
      }

      &:nth-child(9n + 3) {
        background: hsla(80, 100%, 50%, 0.8);
      }

      &:nth-child(9n + 4) {
        background: hsla(120, 100%, 50%, 0.8);
      }

      &:nth-child(9n + 5) {
        background: hsla(160, 100%, 50%, 0.8);
      }

      &:nth-child(9n + 6) {
        background: hsla(200, 100%, 50%, 0.8);
      }

      &:nth-child(9n + 7) {
        background: hsla(240, 100%, 50%, 0.8);
      }

      &:nth-child(9n + 8) {
        background: hsla(280, 100%, 50%, 0.8);
      }

      &:nth-child(9n + 0) {
        background: hsla(320, 100%, 50%, 0.8);
      }
    }

    .x-scene-lcontrol,
    .x-scene-rcontrol {
      cursor: pointer;
    }
  }
}
    `
  }

  render() {
    return (
      <div className='basic-example'>
        <h1 className='feature-h1'>Basic example</h1>

        <p className='feature-p'>js:</p>

        <HighlightWrapper>{this.basicJs()}</HighlightWrapper>

        <p className='feature-p'>css:</p>

        <HighlightWrapper>{this.basicCss()}</HighlightWrapper>

        <div className='basic-example__wrapper'>
          <Carousel>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
              return <Slide key={idx}>{item}</Slide>
            })}
          </Carousel>
        </div>
      </div>
    )
  }
}
