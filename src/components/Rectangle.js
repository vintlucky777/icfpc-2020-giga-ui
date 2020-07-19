import React from 'react'
import _ from 'lodash'
import Pixel from 'src/components/SvgPixel'


export default function Rectangle({leftTop, rightBottom, colorIndex=0}) {
  const [xmin, ymin] = leftTop
  const [xmax, ymax] = rightBottom
  const pixels = _.flatten(
    _.map(_.range(ymin, ymax), (y, idy) => (
      _.map(_.range(xmin, xmax), (x, idx) => {
        return <Pixel key={`${idx}_${idy}`} x={x} y={y} colorIndex={colorIndex}/>
      })
    ))
  )
  return (
    <g data-type='rectangle'>
      {pixels}
    </g>
  )
}
