import React from 'react'
import './PeriodicElement.scss'

export interface Element {
  number: number
  name: string
  symbol: string
  atomic_mass: string
  'cpk-hex': string
  summary: string
}

interface Props {
  element: Element
}

export function PeriodicElement(props: Props) {
  return (
    <div
      className='element'
      style={{ backgroundColor: '#' + props.element['cpk-hex'] }}
    >
      <div className='element__number'>{props.element.number}</div>
      <div className='element__symbol'>{props.element.symbol}</div>
      <div className='element__name'>{props.element.name}</div>
      <div className='element__mass'>{props.element['atomic_mass']}</div>
    </div>
  )
}
