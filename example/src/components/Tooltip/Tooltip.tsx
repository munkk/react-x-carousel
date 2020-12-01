import React from 'react'
import './Tooltip.scss'

interface Props {
  text: string
}

export function Tooltip(props: Props) {
  return (
    <div className='tooltip'>
      <div className='tooltip__text'>{props.text}</div>
    </div>
  )
}
