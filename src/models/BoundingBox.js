import React from 'react'
import { PixelLine } from 'src/models/Primitives'

export default function BoundingBox({width, height, color, colorIndex=0, ...otherProps}) {
  const _width = Math.round(width)
  const _height = Math.round(height)
  let w2 = (_width % 2)
    ? (_width-1)/2
    : _width/2
  let h2 = (_height % 2)
    ? (_height-1)/2
    : _height/2
  return (
    <group name='bounding-box' {...otherProps}>
      <PixelLine start={[-w2,  h2]} end={[ w2-1,  h2]} color={color} colorIndex={colorIndex} />
      <PixelLine start={[ w2,  h2]} end={[ w2, -h2+1]} color={color} colorIndex={colorIndex} />
      <PixelLine start={[ w2, -h2]} end={[-w2+1, -h2]} color={color} colorIndex={colorIndex} />
      <PixelLine start={[-w2, -h2]} end={[-w2,  h2-1]} color={color} colorIndex={colorIndex} />
    </group>
  )
}
