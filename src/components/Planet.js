import React from 'react'
import _ from 'lodash'
import Rectangle from 'src/components/Rectangle'


export default function Planet({radius, x=0, y=0, ...props}) {
  if (!radius > 0) {
    console.error('Planet radius not a positive integer!')
    return <React.Element/>
  }
  return (
    <g data-type='planet' transform={`translate(${x}, ${y})`}>
      <Rectangle leftTop={[-radius+1, -radius+1]} rightBottom={[radius, radius]} {...props} />
    </g>
  )
}
