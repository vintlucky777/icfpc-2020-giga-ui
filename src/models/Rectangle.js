import React from 'react'
import { Pixel } from 'src/models/Primitives'

export default function Rectangle({topLeft, bottomRight, color, colorIndex=0}) {
  const [xmin, ymin] = topLeft
  const [xmax, ymax] = bottomRight
  const pixels = _.flatten(
    _.map(_.range(ymin, ymax+1), (y, idy) => (
      _.map(_.range(xmin, xmax+1), (x, idx) => {
        return <Pixel key={`${idx}_${idy}`} position={[x, y]} color={color} colorIndex={colorIndex}/>
      })
    ))
  )
  return (
    <group name='rectangle'>
      {pixels}
    </group>
  )
}
