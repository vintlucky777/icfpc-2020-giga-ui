import React from 'react'
import _ from 'lodash'
import Pixel from 'src/components/SvgPixel'
import {animated, useSpring} from 'react-spring'

const defaultPattern = [
  'XXXXX',
  'X   X',
  'X   X',
  'X   X',
  'XXXXX',
]


export default function Icon({x, y, pattern=defaultPattern, colorIndex=0}) {
  const sizex = pattern[0].length
  const sizey = pattern.length
  if (!(sizex%2) || !(sizey%2)) {
    console.error('Icon must have a N+1 sized pattern')
    return <Icon position={position} pattern={defaultPattern} />
  }
  return (
    <g
      data-type='icon'
      className='icon'
      transform={`translate(${x}, ${y})`}
    >
    {_.flatten(
      _.map(pattern, (row, idy) => (
        _.map(row, (patternValue, idx) => {
          const px = - (sizex-1)/2 + idx
          const py = - (sizey-1)/2 + idy
          return patternValue != ' '
            ? <Pixel key={`${idx}_${idy}`} x={px} y={py} colorIndex={colorIndex}/>
            : null
        })
      ))
    )}
    </g>
  )
}

let AnimIcon_ = animated(Icon)
export const AnimIcon = ({x, y, ...props}) => {
  const anim = useSpring({x, y})
  return (
    <AnimIcon_ x={anim.x} y={anim.y} {...props} />
  )
}
