import React from 'react'
import './Tooltip.scss'

interface Props {
  text: string
}

export function Tooltip(props: Props) {
  return (
    <div className='tooltip'>
      <h1 className='tooltip__title'>Did you know?</h1>
      <div className='tooltip__text'>{props.text}</div>
    </div>
  )
}
