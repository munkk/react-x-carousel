import React from 'react'
import { Carousel, Slide } from 'react-x-carousel'
import 'react-x-carousel/dist/index.css'

import { HighlightWrapper } from '../Highlight/Hightlight'
import './GettingStarted.scss'

interface Props {}

interface State {}

export default class GettingStarted extends React.Component<Props, State> {
  installCode = () => {
    return `npm install --save-dev react-x-carousel`
  }

  importCode = () => {
    return `import { Carousel, Slide } from 'react-x-carousel'
import 'react-x-carousel/dist/index.css'

<Carousel>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
        return (
            <Slide data={item} key={idx}>
                {item}
            </Slide>
        )
    })}
</Carousel>
    `
  }

  render() {
    return (
      <div className='getting-started'>
        <h1 className='feature-h1'>Getting Started</h1>

        <p className='feature-p'>Install from NPM</p>

        <HighlightWrapper>{this.installCode()}</HighlightWrapper>

        <p className='feature-p'>Import it into your code:</p>

        <HighlightWrapper>{this.importCode()}</HighlightWrapper>
      </div>
    )
  }
}
