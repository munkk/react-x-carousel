import React from 'react'
import './Slider.scss'

interface Props {
  text: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'material-slider': IWebComponentSlider
    }
  }
}

interface IWebComponentSlider
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  width: string
}

export function MaterialSlider(props: Props) {
  return (
    <div className='slider'>
      <material-slider width='300'></material-slider>
    </div>
  )
}

class WebComponentSlider extends HTMLElement {
  width: number

  constructor() {
    super()
    this.addEventListener('click', () => {
      console.log('slider clicked!')
    })

    this.width = Number(this.getAttribute('width')) || 200
  }
}

customElements.define('material-slider', WebComponentSlider)
