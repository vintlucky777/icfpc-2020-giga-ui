import React from 'react'
import _ from 'lodash'
import { BATTLEFIELD_SIZE as SIZE } from 'src/constants'

export default function Pixel({x=0, y=0, color, colorIndex=0}) {
  const defaultColor = '#fff'
  const colorLevel = 100 * (0.5**colorIndex)
  const _color = color ||
    (!_.isNaN(+colorIndex)
      ? `hsl(0, 0%, ${colorLevel}%)`
      : defaultColor)
  if (Math.abs(x) > SIZE || Math.abs(y) > SIZE) {
    return <React.Element/>
  }
  return (
    <rect
      data-type='pixel'
      className='pixel'
      width={0.8}
      height={0.8}
      x={x}
      y={y}
      fill={_color}
    />
  )
}
