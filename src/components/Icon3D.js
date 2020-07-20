import React from 'react'
import _ from 'lodash'
import { Box } from 'src/models/Primitives'
import {animated, useSpring} from 'react-spring'

const defaultPattern = [
  'XXXXX',
  'X   X',
  'X   X',
  'X   X',
  'XXXXX',
]


export default function Icon3D({x=0, y=0, z=0, pattern=defaultPattern, color, colorIndex=0, ...otherProps}) {
  const sizex = pattern[0].length
  const sizey = pattern.length
  if (!(sizex%2) || !(sizey%2)) {
    console.error('Icon must have a N+1 sized pattern')
    return <Icon position={position} pattern={defaultPattern} />
  }
  return (
    <group
      name='icon'
      position={[x, y, z]}
      {...otherProps}
    >
    {_.flatten(
      _.map(pattern, (row, idy) => (
        _.map(row, (patternValue, idx) => {
          const px = - (sizex-1)/2 + idx
          const py = - (sizey-1)/2 + idy
          return patternValue != ' '
            ? <Box key={`${idx}_${idy}`} position={[px, py, 0]} colorIndex={colorIndex}/>
            : null
        })
      ))
    )}
    </group>
  )
}

let AnimIcon3D_ = animated(Icon3D)
export const AnimIcon3D = ({x, y, ...props}) => {
  const anim = useSpring({x, y})
  return (
    <AnimIcon3D_ x={anim.x} y={anim.y} {...props} />
  )
}
