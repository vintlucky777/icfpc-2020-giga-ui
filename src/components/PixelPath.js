import React from 'react'
import _ from 'lodash'
import PixelLine from 'src/components/PixelLine'

export function getPathPoints(points) {
  return _.zip(points.slice(0, -1), points.slice(1))
}

export default function PixelPath({points, color, colorIndex}) {
  const pointPairs = getPathPoints(points)
  return (
    <g data-type='pixel-path'>
    {_.map(pointPairs, (pair, idx) => {
      const [start, end] = pair
      const [x1, y1] = start
      const [x2, y2] = end
      return (
        <PixelLine key={`${idx}`} x1={x1} y1={y1} x2={x2} y2={y2} color={color} colorIndex={colorIndex} />
      )
    })}
    </g>
  )
}
