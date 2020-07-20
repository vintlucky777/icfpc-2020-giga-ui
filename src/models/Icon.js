import React from 'react'
import { Pixel } from 'src/models/Primitives'


const defaultPattern = [
  'XXXXX',
  'X   X',
  'X   X',
  'X   X',
  'XXXXX',
]
export default function Icon({pattern=defaultPattern, color, colorIndex=0, ...otherProps}) {
  const sizex = pattern[0].length
  const sizey = pattern.length
  if (!(sizex%2) || !(sizey%2)) {
    console.error('Icon must have a N+1 sized pattern')
    return <Icon position={position} pattern={defaultPattern} />
  }
  return (
    <group
      name='icon'
      {...otherProps}
    >
    {_.flatten(
      _.map(pattern, (row, idy) => (
        _.map(row, (patternValue, idx) => {
          const px = - (sizex-1)/2 + idx
          const py = - (sizey-1)/2 + idy
          return patternValue != ' '
            ? <Pixel key={`${idx}_${idy}`} position={[px, py, 0]} color={color} colorIndex={colorIndex}/>
            : null
        })
      ))
    )}
    </group>
  )
}
